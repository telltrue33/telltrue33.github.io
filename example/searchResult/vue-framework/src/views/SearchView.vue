<template>
    <div class="result">
        <SearchField @searchFieldCreate="searchFieldCreate" @sortBtnClick="sortBtnClick" @colviewBtnClick="colviewBtnClick" @inpFocus="inpFocus" @inpKeyDown="inpKeyDown" @searchBtnClick="searchBtnClick" @wordClick="wordClick" @wordRemoveClick="wordRemoveClick" :childLayerActive="propLayerActive" :childStorageData="wordStorageData" :childSortData="sortData"></SearchField>
        <div class="result__list" ref="resultList" :class="[colView === 1 ? 'col1' : colView === 2 ? 'col2' : '']">
            <div data-scroll-inner ref="scrollInner">
                <div data-scroll-position ref="scrollPosition">
                    <ImgItem v-for="item in getSearchList" :key="item.id" :childData="item"></ImgItem>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
import SearchField from '@/components/SearchField.vue';
import ImgItem from '@/components/ImgItem.vue';

export default {
    name: 'SearchPage',
    data() {
        return {
            pageDatas: [],
            searchDatas: [],
            currentDatas: [],
            currentSort: '',
            currentValue: '',
            currentPage: 1,
            colView: 1,
            size: 10,
            wordStorageName: 'storage:word',
            wordLayerState: false,
            propLayerActive: false,
            wordStorageData: [],
            sortData: [
                {
                    sort: 'accuracy',
                    title: '정확도순'
                },
                {
                    sort: 'recency',
                    title: '최신순'
                }
            ]
        }
    },
    components: {
        SearchField,
        ImgItem
    },
    computed: {
        getSearchList() {
            return this.$store.getters['getSearchList'];
        }
    },
    created() {
        const _word = JSON.parse(window.localStorage.getItem(this.wordStorageName));
        if (_word != null) {
            this.wordStorageData = _word;
        }
    },
    mounted() {
        this.$nextTick(function () {
            this.buildAwaitLoader();
            this.buildScrolling();
            this.buildSearchWord();
        });
    },
    beforeDestroy() {
        this.awaitloader.destroy();
        this.scrolling.destroy();
    },
    methods: {
        buildAwaitLoader() {
            const _this = this;
            window.Util.def(this, {
                awaitloader: {
                    instance: null,
                    destroy: function () {
                        if (this.instance == null) return;
                        this.instance.destroy();
                        this.instance = null;
                    },
                    build: function () {
                        this.instance = new window.AwaitLoader(_this.$refs.resultList);
                    }
                }
            });
        },
        buildScrolling() {
            const _this = this;
            window.Util.def(this, {
                scrolling: {
                    instance: null,
                    destroy: function () {
                        if (this.instance == null) return;
                        this.instance.destroy();
                        this.instance = null;
                    },
                    setParam: function (param) {
                        if (this.instance == null) return;
                        this.instance.setParam(param);
                    },
                    setData: function (data) {
                        if (this.instance == null) return;
                        this.instance.setData(data);
                    },
                    build: function () {
                        this.instance = new window.CmScrolling(_this.$refs.resultList, {
                            col: 2,
                            frameworkRender: true,
                            on: {
                                end: function () {
                                    _this.currentPage++;
                                    _this.querySearch();
                                },
                                frameworkHeight: function (param) {
                                    // console.log('frameworkHeight', param);
                                    _this.$refs.scrollInner.style.height = param.h + 'px';
                                },
                                frameworkTransform: function (param) {
                                    // console.log('frameworkTransform', param);
                                    _this.$refs.scrollPosition.style.transform = 'translateY(' + param.y + 'px)';
                                },
                                frameworkRender: function (param) {
                                    // console.log('frameworkRender', param);
                                    const min = param.min;
                                    const max = param.max;
                                    _this.currentDatas = _this.searchDatas.filter(function (v, idx) {
                                        return (min <= idx) && (idx < max);
                                    });
                                    _this.$store.dispatch('setSearchList', _this.currentDatas);
                                }
                            }
                        });
                    }
                }
            });
            this.scrolling.build();
        },
        buildSearchWord() {
            const _this = this;
            window.Util.def(this, {
                searchword: {
                    remove: function () {
                        _this.wordStorageData = [];
                        window.localStorage.removeItem(_this.wordStorageName);
                        this.deactive();
                    },
                    save: function () {
                        const word = _this.currentValue;
                        if (word.length) {
                            var _idx = _this.wordStorageData.indexOf(word);
                            if (_idx != -1) {
                                _this.wordStorageData.splice(_idx, 1);
                            }
                            _this.wordStorageData.unshift(word);
                            window.localStorage.setItem(_this.wordStorageName, JSON.stringify(_this.wordStorageData));
                            this.deactive();
                        }
                    },
                    active: function () {
                        if (_this.wordLayerState) return;
                        _this.wordLayerState = true;
                        if (_this.wordStorageData.length) {
                            _this.propLayerActive = true;
                        }
                    },
                    deactive: function () {
                        if (!_this.wordLayerState) return;
                        _this.wordLayerState = false;
                        _this.propLayerActive = false;
                    }
                }
            });
        },
        queryDataBuild() {
            let allData = [];
            this.pageDatas.forEach(function (aPage) {
                allData = allData.concat(aPage);
            });
            this.searchDatas = allData;
            this.scrolling.setData(allData);
        },
        querySearch() {
            const _val = this.currentValue;
            if (_val.length) {
                this.awaitloader.build();
                axios.get('https://dapi.kakao.com/v2/search/image', {
                    params: {
                        query: this.currentValue,
                        page: this.currentPage,
                        sort: this.currentSort,
                        size: this.size
                    },
                    headers: {
                        Authorization: 'KakaoAK 7a449bf294c35c51d66983b54128a186'
                    }
                })
                    .then((res) => {
                        const docs = res.data.documents;
                        this.pageDatas[this.currentPage - 1] = docs;
                        this.queryDataBuild();
                    })
                    .catch((error) => {
                        console.log(error);
                    })
                    .finally(() => {
                        this.awaitloader.destroy();
                    });
            }
        },
        queryStart() {
            this.pageDatas = [];
            this.searchDatas = [];
            this.currentDatas = [];
            this.currentPage = 1;
            window.scrollTo({ top: 0 });
            this.querySearch();
            this.searchword.save();
        },
        sortBtnClick(prop) {
            this.currentValue = prop.value;
            this.currentSort = prop.sort;
            this.queryStart();
        },
        colviewBtnClick(prop) {
            this.currentValue = prop.value;
            this.colView = prop.colView;
            this.scrolling.setParam({
                col: prop.colView,
                size: prop.colView == 1 ? null : this.size
            });
        },
        inpFocus(prop) {
            this.currentValue = prop.value;
            this.searchword.active();
        },
        inpKeyDown(prop) {
            const e = prop.e;
            this.currentValue = prop.value;
            const keyCode = e.keyCode || e.which;
            if (keyCode == 13) {
                this.queryStart();
            } else {
                this.searchword.active();
            }
        },
        searchBtnClick(prop) {
            this.currentValue = prop.value;
            this.queryStart();
        },
        searchFieldCreate(prop) {
            this.currentSort = prop.sort;
            this.currentValue = prop.currentValue;
            this.colView = prop.colView;
        },
        wordClick(prop) {
            this.currentValue = prop.value;
            this.queryStart();
        },
        wordRemoveClick() {
            this.searchword.remove();
        }
    }
}
</script>
  
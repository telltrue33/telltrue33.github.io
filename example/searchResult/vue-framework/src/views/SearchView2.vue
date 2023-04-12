<template>
    <div class="result">
        <SearchField @searchFieldCreate="searchFieldCreate" @sortBtnClick="sortBtnClick" @colviewBtnClick="colviewBtnClick" @inpFocus="inpFocus" @inpKeyDown="inpKeyDown" @searchBtnClick="searchBtnClick" @wordClick="wordClick" @wordRemoveClick="wordRemoveClick" :childLayerActive="propLayerActive" :childStorageData="wordStorageData" :childSortData="sortData"></SearchField>
        <ScrollContainer ref="imgScroll" :colView="colView" @scrollContainerRender="scrollContainerRender" @scrollContainerEnd="scrollContainerEnd" :imgLazy="imgLazy">
            <ImgItem v-for="item in getSearchList" :key="item.id" :childData="item" :imgLazy="imgLazy"></ImgItem>
        </ScrollContainer>
        <ScrollLoader v-if="loaderActive"></ScrollLoader>
    </div>
</template>
  
<script>
import axios from 'axios';
import SearchField from '@/components/SearchField.vue';
import ScrollContainer from '@/components/ScrollContainer.vue';
import ImgItem from '@/components/ImgItem.vue';
import ScrollLoader from '@/components/ScrollLoader.vue';

export default {
    name: 'SearchPage2',
    data() {
        return {
            pageDatas: [],
            searchDatas: [],
            currentDatas: [],
            currentSort: '',
            currentValue: '',
            currentPage: 1,
            imgLazy: true,
            colView: 1,
            size: 10,
            wordStorageName: 'storage:word',
            wordLayerState: false,
            propLayerActive: false,
            wordStorageData: [],
            loaderActive: false,
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
        ScrollContainer,
        ImgItem,
        ScrollLoader
    },
    computed: {
        getSearchList() {
            return this.$store.getters['getSearchList'];
        }
    },
    created() {
        this.$store.dispatch('setSearchList', []);
        const _word = JSON.parse(window.localStorage.getItem(this.wordStorageName));
        if (_word != null) {
            this.wordStorageData = _word;
        }
    },
    mounted() {
        this.$nextTick(function () {
            this.buildSearchWord();
        });
    },
    methods: {
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
            this.$refs.imgScroll.setData(allData);
        },
        querySearch() {
            const _val = this.currentValue;
            if (_val.length) {
                this.loaderActive = true;
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
                        this.loaderActive = false;
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
            this.$store.dispatch('setSearchList', []);
            this.currentValue = prop.value;
            this.currentSort = prop.sort;
            this.queryStart();
        },
        colviewBtnClick(prop) {
            this.currentValue = prop.value;
            this.colView = prop.colView;
            this.$refs.imgScroll.setParam({
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
        },
        scrollContainerRender() {
            const min = 0;
            const max = this.searchDatas.length;
            this.currentDatas = this.searchDatas.filter(function (v, idx) {
                return (min <= idx) && (idx < max);
            });
            this.$store.dispatch('setSearchList', this.currentDatas);
        },
        scrollContainerEnd() {
            this.currentPage++;
            this.querySearch();
        }
    }
}
</script>
  
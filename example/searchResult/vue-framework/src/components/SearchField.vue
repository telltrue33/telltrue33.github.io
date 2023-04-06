<template>
    <div>
        <div class="search">
            <div class="search-form">
                <div class="search-form__wrap">
                    <input type="text" class="search__input" value="" title="검색어 입력" autocomplete="off" ref="query" @focus="inpFocus" @keydown="inpKeyDown">
                </div>
                <a href="#" class="search__btn" role="button" @click="searchBtnClick"><span class="blind">검색</span></a>
            </div>
            <div class="search-word" :class="{ 'active': childLayerActive }">
                <ul class="search-word__list">
                    <li v-for="item in childStorageData" :key="item.id">
                        <a href="#" @click="wordClick" :data-value="item">{{ item }}</a>
                    </li>
                </ul>
                <diV class="search-word__del"><a href="#" role="button" @click="wordRemoveClick">최근 검색어 삭제</a></diV>
            </div>
        </div>
        <div class="search-tool__wrap">
            <ul class="search-sort__list">
                <li v-for="item in childSortData" :key="item.id" :class="{ 'active': sort === item.sort }" :data-sort="item.sort">
                    <a href="#" role="button" @click="sortBtnClick">{{ item.title }}</a>
                </li>
            </ul>
            <ul class="search-colview__list">
                <li :class="{ 'active': colView === 1 }" data-colview="1"><a href="#" role="button" @click="colviewBtnClick"><span class="blind">1열로 보기</span></a></li>
                <li :class="{ 'active': colView === 2 }" data-colview="2"><a href="#" role="button" @click="colviewBtnClick"><span class="blind">2열로 보기</span></a></li>
            </ul>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'SearchField',
    props: {
        childLayerActive: {
            type: Boolean
        },
        childStorageData: {
            type: Array
        },
        childSortData: {
            type: Array
        }
    },
    data() {
        return {
            sort: 'accuracy',
            colView: 2,
            currentValue: ''
        }
    },
    mounted() {
        this.$emit('searchFieldCreate', {
            sort: this.sort,
            colView: this.colView,
            currentValue: this.$refs.query.value
        });
    },
    methods: {
        sortBtnClick(e) {
            e.preventDefault();
            const parentElement = e.currentTarget.parentElement;
            const _val = parentElement.getAttribute('data-sort');
            if (this.sort != _val) {
                this.sort = _val;
                this.$emit('sortBtnClick', {
                    e: e,
                    sort: this.sort,
                    value: this.$refs.query.value
                });
            }
        },
        colviewBtnClick(e) {
            e.preventDefault();
            const parentElement = e.currentTarget.parentElement;
            const _val = parseFloat(parentElement.getAttribute('data-colview'), 10);
            if (this.colView != _val) {
                this.colView = _val;
                this.$emit('colviewBtnClick', {
                    e: e,
                    colView: this.colView,
                    value: this.$refs.query.value
                });
            }
        },
        emitMsg(message, e) {
            this.$emit(message, {
                e: e,
                value: this.$refs.query.value
            });
        },
        inpFocus(e) {
            this.emitMsg('inpFocus', e);
        },
        inpKeyDown(e) {
            this.emitMsg('inpKeyDown', e);
        },
        searchBtnClick(e) {
            e.preventDefault();
            this.emitMsg('searchBtnClick', e);
        },
        wordClick(e) {
            e.preventDefault();
            this.$refs.query.value = e.currentTarget.getAttribute('data-value');
            this.emitMsg('wordClick', e);
        },
        wordRemoveClick(e) {
            e.preventDefault();
            this.emitMsg('wordRemoveClick', e);
        }
    }
}
</script>

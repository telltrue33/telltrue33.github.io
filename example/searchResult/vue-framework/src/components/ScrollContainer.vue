<template>
    <div class="result__list" :class="[colView === 1 ? 'col1' : colView === 2 ? 'col2' : '']" ref="resultList">
        <div data-scroll-inner ref="scrollInner">
            <div data-scroll-position ref="scrollPosition"><slot></slot></div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'ScrollContainer',
    props: {
        colView: {
            type: Number
        },
        imgLazy: {
            type: Boolean,
            default: false
        }
    },
    mounted() {
        this.$nextTick(function () {
            this.buildScrolling();
        });
    },
    beforeDestroy() {
        this.scrolling.destroy();
    },
    methods: {
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
                            col: _this.colView,
                            frameworkRender: true,
                            on: {
                                end: function () {
                                    _this.$emit('scrollContainerEnd');
                                },
                                frameworkHeight: function (param) {
                                    // console.log('frameworkHeight', param);
                                    _this.$refs.scrollInner.style.height = param.h + 'px';
                                },
                                frameworkTransform: function (param) {
                                    // console.log('frameworkTransform', param);
                                    if (!_this.imgLazy) {
                                        _this.$refs.scrollPosition.style.transform = 'translateY(' + param.y + 'px)';
                                    }
                                },
                                frameworkRender: function (param) {
                                    // console.log('frameworkRender', param);
                                    const min = param.min;
                                    const max = param.max;
                                    _this.$emit('scrollContainerRender', {
                                        min: min,
                                        max: max
                                    });
                                }
                            }
                        });
                    }
                }
            });
            this.scrolling.build();
        },
        setData(data) {
            this.scrolling.setData(data);
        },
        setParam(param) {
            this.scrolling.setParam(param);
        }
    }
}
</script>

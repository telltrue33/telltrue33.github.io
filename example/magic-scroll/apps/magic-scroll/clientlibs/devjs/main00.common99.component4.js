(function (global, factory) {
    global = global;
    global.Component4 = factory();
}(this, function () { 'use strict';
    var Component = (function (isUndefined) {
        var win = window,
            doc = win.document,
            $ = win.jQuery || win.jqLite,
            Util = win.MsComponent.util;
        function Component (container, args) {
            if (!(this instanceof Component)) {
                return new Component(container, args);
            }
            var defParams = {
                swSection : '.sw-section',
                swArticle : '.sw-article',
                canvasSection : '.canvas-section',
                canvasObj : '.canvas-article',
                stateAttr : {
                    destroy : false
                },
                customEvent : '.Component' + (new Date()).getTime() + Math.random()
            };
            this.opts = Util.def(defParams, (args || {}));
            if (!(this.obj = $(container)).length) return;
            this.init();
        }
        Component.prototype = {
            init : function () {
                this.setElements();
                this.buildMotion();
                this.buildMagicTween();
                this.resizeFunc();
                this.bindResizeEvents(true);
            },
            setElements : function () {
                this.stickySection = $('.sticky-section');
                this.canvasSection = this.obj.find(this.opts.canvasSection);
                this.canvasObj = this.obj.find(this.opts.canvasObj)[0];
                this.ctx = this.canvasObj.getContext('2d');
            },
            buildMotion : function () {
                var _this = this;
                Util.def(this, {
                    motion : {
                        instance : null,
                        stateAttr : {
                            loaded : false,
                            direction : null
                        },
                        props : {
                            min : 0,
                            max : 115,
                            current : null,
                            progress : 0
                        },
                        tweens : {
                            instance : null,
                            duration : .5,
                            kill : function () {
                                if (this.instance == null) return;
                                this.instance.kill();
                                this.instance = null;
                            },
                            build : function (num) {
                                this.kill();
                                var m = _this.motion;
                                var props = Util.def({}, m.props);
                                this.instance = TweenLite.to(props, this.duration, {
                                    progress : num,
                                    onUpdate : function () {
                                        m.instance.progress(props.progress);
                                        m.props.progress = props.progress;
                                    }
                                });
                            },
                            init : function () {
                                if (this.duration <= 0) {
                                    this.duration = .0001;
                                }
                            }
                        },
                        imgs : {},
                        load : function () {
                            this.tweens.init();
                            var m = this;
                            var fileName = 'https://images.samsung.com/common/galaxy-buds-pro/feature/sg/galaxy-buds-pro-immpersive-seq2-';
                            var fileType = '.jpg';
                            var count = this.props.min;
                            var maxCount = this.props.max;
                            var load = function (idx) {
                                var nImg = new Image();
                                nImg.onload = function () {
                                    m.imgs[idx] = {
                                        dom : this,
                                        w : this.width,
                                        h : this.height
                                    };
                                    count++;
                                    if (count == (maxCount + 1)) {
                                        m.stateAttr.loaded = true;
                                        m.pause();
                                        var loadProgress = m.props.progress;
                                        if (loadProgress == null) {
                                            m.props.progress = 0;
                                            m.progress(m.props.progress);
                                        } else {
                                            m.progress(loadProgress);
                                        }
                                        var loadCurrent = m.props.current;
                                        m.props.current = null;
                                        if (loadCurrent == null) {
                                            m.draw(0);
                                        } else {
                                            m.draw(loadCurrent);
                                        }
                                    }
                                }
                                nImg.src = fileName + idx + fileType;
                            };
                            this.layout();
                            for (var i = 0, max = maxCount; i <= max; i++) {
                                load(i);
                            }
                        },
                        layout : function () {
                            var oClientRect = Util.getBoundingClientRect(_this.canvasSection[0]);
                            var sectionW = oClientRect.width;
                            var sectionH = oClientRect.height;
                            var perH = (sectionW / 16 * 9);
                            _this.canvasSection[0].style.height = perH + 'px';
                            _this.canvasObj.width = sectionW;
                            _this.canvasObj.height = sectionH;
                        },
                        draw : function (num) {
                            if (this.stateAttr.loaded) {
                                this.drawImage(num);
                            }
                            this.props.current = num;
                        },
                        drawImage : function (num) {
                            var imgs = this.imgs;
                            var active = imgs[num];
                            var oClientRect = Util.getBoundingClientRect(_this.canvasSection[0]);
                            var sectionW = oClientRect.width;
                            var sectionH = oClientRect.height;
                            var w = active.w;
                            var h = active.h;
                            if (active.w > sectionW) {
                                w = sectionW;
                                h = active.h * (sectionW / active.w);
                            }
                            if (h > sectionH) {
                                w = active.w * (sectionH / active.h);
                                h = sectionH;
                            }
                            var pW = (sectionW - w) / 2;
                            var pH = (sectionH - h) / 2;
                            _this.ctx.clearRect(0, 0, sectionW, sectionH);
                            _this.ctx.drawImage(active.dom, pW, pH, w, h);
                        },
                        resize : function () {
                            this.layout();
                            if (!this.stateAttr.loaded) return;
                            if (this.props.current != null) {
                                this.drawImage(this.props.current);
                            }
                        },
                        pause : function () {
                            if (this.instance == null) return this;
                            this.instance.pause();
                            return this;
                        },
                        progress : function (num) {
                            if (this.instance != null) {
                                this.tweens.build(num);
                            }
                            return this;
                        },
                        reverse : function () {
                            if (this.stateAttr.direction !== 'REVERSE') {
                                this.stateAttr.direction = 'REVERSE';
                                if (this.instance !== null) {
                                    console.log('motion reverse');
                                    this.instance.reverse();
                                }
                            }
                        },
                        destroy : function () {
                            if (this.instance == null) return;
                            this.instance.kill();
                            this.instance = null;
                        },
                        delTweenID : function (prop) {
                            var scopeProp = Util.def({}, prop);
                            if (scopeProp.hasOwnProperty('_gsTweenID')) {
                                delete scopeProp._gsTweenID;
                            }
                            return scopeProp;
                        },
                        build : function () {
                            var m = this;
                            if (this.stateAttr.direction !== 'FORWARD') {
                                this.stateAttr.direction = 'FORWARD';
                                var props = this.props;
                                if (this.instance == null) {
                                    console.log('motion build');
                                    var vals = {
                                        v : props.min
                                    };
                                    var timeline = new TimelineMax();
                                    timeline.pause();
                                    timeline.to(vals, 1.5, {
                                        v : props.max,
                                        onUpdate : function () {
                                            m.draw(Math.round(m.delTweenID(vals).v));
                                        }
                                    });
                                    this.instance = timeline;
                                } else {
                                    console.log('motion play');
                                    this.instance.play();
                                }
                            }
                        }
                    }
                });
                this.motion.load();
                this.motion.build();
            },
            buildMagicTween : function () {
                var _this = this;
                Util.def(this, {
                    magictween : {
                        instance : null,
                        animations : [
                            {
                                duration : 10,
                                onStart : function () {
                                },
                                onUpdate : function (props) {
                                    var progress = props.progress;
                                    _this.motion.progress(progress);
                                },
                                onReverseComplete : function () {
                                    // console.log(1, 'reverseComplete');
                                    // _this.motion.pause().progress(0);
                                },
                                onComplete : function (props) {
                                    _this.motion.pause().progress(1);
                                }
                            },
                            {
                                duration : 5,
                                onStart : function () {
                                    // console.log(2, 'start');
                                },
                                onUpdate : function () {
                                    // console.log(2, 'update');
                                },
                                onReverseComplete : function () {
                                    // console.log(2, 'reverseComplete');
                                },
                                onComplete : function (props) {
                                    // console.log(2, 'complete');
                                }
                            },
                            {
                                duration : 10,
                                onStart : function () {
                                },
                                onUpdate : function (props) {
                                    var progress = props.progress;
                                    _this.motion.progress(1 - progress);
                                },
                                onReverseComplete : function () {
                                },
                                onComplete : function (props) {
                                    _this.motion.pause().progress(0);
                                }
                            }
                        ],
                        destroy : function () {
                            if (this.instance == null) return;
                            this.instance.destroy();
                            this.instance = null;
                        },
                        getSize : function () {
                            return this.instance.set.getSize;
                        },
                        build : function () {
                            var m = this;
                            this.instance = new MagicScroll(_this.obj, {
                                init : false,
                                animations : _this.magictween.animations,
                                duration : '500%',
                                spaceHeight : function () {
                                    var winHeight = m.getSize().winHeight;
                                    var stickyHeight = _this.stickySection.outerHeight(true);
                                    var canvasHeight = _this.canvasSection.outerHeight(true);
                                    var maxSize = (winHeight - canvasHeight) / 2;
                                    var r = (maxSize < stickyHeight) ? stickyHeight : maxSize;
                                    return r;
                                },
                                breakpoints : {
                                    768 : {
                                        duration : '300%',
                                        triggerHook : 0.5
                                    }
                                },
                                on : {
                                    in : function () {
                                        // console.log('in');
                                    },
                                    out : function () {
                                        // console.log('out');
                                    },
                                    hookIn : function () {
                                        // console.log('hook in');
                                    },
                                    hookOut : function () {
                                        // console.log('hook out');
                                    },
                                    update : function () {
                                        if (_this.magictween.instance == null) return;
                                        // console.log('progress', _this.magictween.instance.props.progress);
                                    },
                                    beforeUpdate : function () {
                                        if (_this.magictween.instance == null) return;
                                        // console.log('beforeUpdate', _this.magictween.instance.props.beforeProgress);
                                    },
                                    afterUpdate : function () {
                                        if (_this.magictween.instance == null) return;
                                        // console.log('afterUpdate', _this.magictween.instance.props.afterProgress);
                                    },
                                    allUpdate : function () {
                                        if (_this.magictween.instance == null) return;
                                        console.log('allUpdate', _this.magictween.instance.props.allProgress);
                                    }
                                }
                            });
                            this.instance.init();
                        }
                    }
                });
                this.magictween.build();
            },
            changeEvents : function (event) {
                var events = [],
                    eventNames = event.split(' ');
                for (var key in eventNames) {
                    events.push(eventNames[key] + this.opts.customEvent);
                }
                return events.join(' ');
            },
            bindResizeEvents : function (type) {
                if (type) {
                    $(win).on(this.changeEvents('resize orientationchange'), this.resizeFunc.bind(this));
                } else {
                    $(win).off(this.changeEvents('resize orientationchange'));
                }
            },
            resizeFunc : function (e) {
                this.winWidth = Util.winSize().w;
                if (this.opts.resizeStart == null) {
                    this.opts.resizeStart = this.winWidth;
                    this.resizeAnimateFunc();
                }
                win.clearTimeout(this.resizeEndTime);
                this.resizeEndTime = win.setTimeout(this.resizeEndFunc.bind(this), 250);
            },
            resizeEndFunc : function () {
                this.opts.resizeStart = null;
                this.setLayout();
                Util.cancelAFrame.call(win, this.resizeRequestFrame);
            },
            resizeAnimateFunc : function () {
                this.setLayout();
                this.resizeRequestFrame = Util.requestAFrame.call(win, this.resizeAnimateFunc.bind(this));
            },
            setLayout : function () {
                if (!this.opts.stateAttr.destroy) {
                    this.motion.resize();
                }
            },
            destroy : function () {
                this.opts.stateAttr.destroy = true;
                this.motion.destroy();
                this.magictween.destroy();
            }
        };
        return Component;
    })();
    return Component;
}));

(function (global, factory) {
    var $ = window.jQuery || window.jqLite;
    $(function () {
        factory();
    });
}(this, function () {
    var Call = (function (isUndefined) {
        var win = window,
            $ = win.jQuery || win.jqLite,
            Util = win.MsComponent.util;
        function Call (args) {
            var defParams = {
                obj : '.test-section4'
            };
            this.opts = Util.def(defParams, (args || {}));
            if (!(this.obj = $(this.opts.obj)).length) return;
            this.init();
        }
        Call.prototype = {
            init : function () {
                this.callComponent();
            },
            callComponent : function () {
                var _this = this;
                for (var i = 0, max = this.obj.length; i < max; i++) {
                    (function (index) {
                        new Component4(_this.obj.eq(index));
                    })(i);
                }
            }
        };
        return new Call();
    })();
    return Call;
}));

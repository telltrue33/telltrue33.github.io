(function (global, factory) {
    global = global;
    global.Cu = factory();
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
                cu : '.cu',
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
                this.cu = this.obj.find(this.opts.cu);
                this.c1 = this.cu.find('ul li:eq(0) div');
                this.c2 = this.cu.find('ul li:eq(1) div');
            },
            buildMotion : function () {
                var _this = this;
                Util.def(this, {
                    motion : {
                        cu : {
                            instance : null,
                            props : {
                                '1' : {
                                    min : 900,
                                    max : 0
                                },
                                '2' : {
                                    min : 900,
                                    max : 0
                                },
                                progress : 0
                            },
                            tweens : {
                                instance : null,
                                duration : .3,
                                kill : function () {
                                    if (this.instance == null) return;
                                    this.instance.kill();
                                    this.instance = null;
                                },
                                build : function (num) {
                                    this.kill();
                                    var p = _this.motion.parallax;
                                    var props = Util.def({}, p.props);
                                    this.instance = TweenLite.to(props, this.duration, {
                                        progress : num,
                                        onUpdate : function () {
                                            p.instance.progress(props.progress);
                                            p.props.progress = props.progress;
                                        }
                                    });
                                },
                                init : function () {
                                    if (this.duration <= 0) {
                                        this.duration = .0001;
                                    }
                                }
                            },
                            draw : function (o) {
                                TweenLite.set(_this.c1, {
                                    x : o.v1
                                });
                                TweenLite.set(_this.c2, {
                                    x : o.v2
                                });
                            },
                            play : function () {
                                if (this.instance == null) return this;
                                this.instance.play();
                                return this;
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
                                if (this.instance == null) return this;
                                this.instance.reverse();
                                return this;
                            },
                            destroy : function () {
                                if (this.instance == null) return;
                                this.instance.kill();
                                this.instance = null;
                            },
                            initLayout : function () {
                                var o = {
                                    v1 : this.props['1'].min,
                                    v2 : this.props['2'].min
                                };
                                this.draw(o);
                            },
                            build : function () {
                                var m = _this.motion;
                                var p = this;
                                var props = this.props;
                                if (this.instance == null) {
                                    this.tweens.init();
                                    this.initLayout();
                                    var vals = {
                                        v1 : props['1'].min,
                                        v2 : props['2'].min
                                    };
                                    var timeline = new TimelineMax();
                                    timeline.pause();
                                    timeline.to(vals, .5, {
                                        ease : Power0.easeNone,
                                        v1 : props['1'].max,
                                        v2 : props['2'].max,
                                        onUpdate : function () {
                                            var v1 = Math.round(m.delTweenID(vals).v1);
                                            var v2 = Math.round(m.delTweenID(vals).v2);
                                            var o = {
                                                v1 : v1,
                                                v2 : v2
                                            };
                                            p.draw(o);
                                        }
                                    });
                                    this.instance = timeline;
                                }
                            }
                        },
                        parallax : {
                            instance : null,
                            props : {
                                '1' : {
                                    min : 300,
                                    max : 0
                                },
                                progress : 0
                            },
                            tweens : {
                                instance : null,
                                duration : .3,
                                kill : function () {
                                    if (this.instance == null) return;
                                    this.instance.kill();
                                    this.instance = null;
                                },
                                build : function (num) {
                                    this.kill();
                                    var p = _this.motion.parallax;
                                    var props = Util.def({}, p.props);
                                    this.instance = TweenLite.to(props, this.duration, {
                                        progress : num,
                                        onUpdate : function () {
                                            p.instance.progress(props.progress);
                                            p.props.progress = props.progress;
                                        }
                                    });
                                },
                                init : function () {
                                    if (this.duration <= 0) {
                                        this.duration = .0001;
                                    }
                                }
                            },
                            draw : function (o) {
                                TweenLite.set(_this.cu, {
                                    y : o.v1
                                });
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
                            destroy : function () {
                                if (this.instance == null) return;
                                this.instance.kill();
                                this.instance = null;
                            },
                            initLayout : function () {
                                var o = {
                                    v1 : this.props['1'].min
                                };
                                this.draw(o);
                            },
                            build : function () {
                                var m = _this.motion;
                                var p = this;
                                var props = this.props;
                                if (this.instance == null) {
                                    this.tweens.init();
                                    this.initLayout();
                                    var vals = {
                                        v1 : props['1'].min
                                    };
                                    var timeline = new TimelineMax();
                                    timeline.pause();
                                    timeline.to(vals, 1, {
                                        ease : Power0.easeNone,
                                        v1 : props['1'].max,
                                        onUpdate : function () {
                                            var v1 = Math.round(m.delTweenID(vals).v1);
                                            var o = {
                                                v1 : v1
                                            };
                                            p.draw(o);
                                        }
                                    });
                                    this.instance = timeline;
                                }
                            }
                        },
                        delTweenID : function (prop) {
                            var scopeProp = Util.def({}, prop);
                            if (scopeProp.hasOwnProperty('_gsTweenID')) {
                                delete scopeProp._gsTweenID;
                            }
                            return scopeProp;
                        },
                        destroy : function () {
                            this.parallax.destroy();
                            this.cu.destroy();
                        },
                        build : function () {
                            this.parallax.build();
                            this.cu.build();
                        }
                    }
                });
                this.motion.build();
            },
            buildMagicTween : function () {
                var _this = this;
                Util.def(this, {
                    magictween : {
                        instance : null,
                        destroy : function () {
                            if (this.instance == null) return;
                            this.instance.destroy();
                            this.instance = null;
                        },
                        getSize : {
                            winHeight : Util.winSize().h,
                            resize : function () {
                                this.winHeight = Util.winSize().h
                            }
                        },
                        build : function () {
                            var m = this;
                            var beforeUpdateFunc = function () {
                                if (_this.magictween.instance == null) return;
                                var progress = _this.magictween.instance.props.beforeProgress;
                                _this.motion.parallax.progress(progress);
                                if (progress > .5) {
                                    _this.motion.cu.play();
                                }
                            };
                            this.instance = new MagicScroll(_this.obj, {
                                init : false,
                                duration : '250%',
                                spaceHeight : function () {
                                    var winHeight = m.getSize.winHeight;
                                    var stickyHeight = _this.stickySection.outerHeight(true);
                                    var objHeight = _this.obj.outerHeight(true);
                                    var maxSize = (winHeight - objHeight) / 2;
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
                                    init : function () {
                                        // IE 에서 새로고침시 scrollTop 버그를 위한 setTimeout
                                        win.setTimeout(function () {
                                            beforeUpdateFunc();
                                        }, 150);
                                    },
                                    in : function () {
                                        // console.log('in');
                                    },
                                    out : function () {
                                        if (_this.magictween.instance == null) return;
                                        var scopeDir = _this.magictween.instance.motion.scroll.scope.out;
                                        if (scopeDir == 'TOP') {
                                            _this.motion.cu.reverse();
                                        } else if (scopeDir == 'BOTTOM') {
                                            _this.motion.parallax.progress(1);
                                            _this.motion.cu.play();
                                        }
                                    },
                                    hookIn : function () {
                                        // console.log('hook in');
                                    },
                                    hookOut : function () {
                                        // console.log('hook out');
                                        // var scopeDir = _this.magictween.instance.motion.scroll.scope.hookOut;
                                        // if (scopeDir == 'TOP') {
                                        //     _this.motion.cu.reverse();
                                        // } else if (scopeDir == 'BOTTOM') {
                                        //     _this.motion.cu.reverse();
                                        // }
                                    },
                                    update : function () {
                                        // if (_this.magictween.instance == null) return;
                                        // console.log('progress', _this.magictween.instance.props.progress);
                                    },
                                    beforeUpdate : function () {
                                        beforeUpdateFunc();
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
                if (e != isUndefined && e.type == 'orientationchange') {
                    this.opts.stateAttr.isOrientationchange = true;
                }
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
                this.opts.stateAttr.isOrientationchange = false;
                Util.cancelAFrame.call(win, this.resizeRequestFrame);
            },
            resizeAnimateFunc : function () {
                this.setLayout();
                this.resizeRequestFrame = Util.requestAFrame.call(win, this.resizeAnimateFunc.bind(this));
            },
            setLayout : function () {
                if (!this.opts.stateAttr.destroy) {
                    if (Util.isOrientationchange) {
                        if (this.opts.stateAttr.isOrientationchange) {
                            this.magictween.getSize.resize();
                        }
                    } else {
                        this.magictween.getSize.resize();
                    }
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
                obj : '.cu-section'
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
                        new Cu(_this.obj.eq(index));
                    })(i);
                }
            }
        };
        return new Call();
    })();
    return Call;
}));

(function (global, factory) {
    global = global;
    global.Parallax = factory();
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
                pa : '.pa',
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
            },
            setElements : function () {
                this.pa = this.obj.find(this.opts.pa);
                this.p1 = this.pa.find('ul li:eq(0) div');
                this.p2 = this.pa.find('ul li:eq(1) div');
            },
            buildMotion : function () {
                var _this = this;
                Util.def(this, {
                    motion : {
                        parallax : {
                            instance : null,
                            props : {
                                '1' : {
                                    min : 200,
                                    max : -200
                                },
                                '2' : {
                                    min : 100,
                                    max : -100
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
                                TweenLite.set(_this.p1, {
                                    y : o.v1
                                });
                                TweenLite.set(_this.p2, {
                                    y : o.v2
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
                                    timeline.to(vals, 1, {
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
                        delTweenID : function (prop) {
                            var scopeProp = Util.def({}, prop);
                            if (scopeProp.hasOwnProperty('_gsTweenID')) {
                                delete scopeProp._gsTweenID;
                            }
                            return scopeProp;
                        },
                        destroy : function () {
                            this.parallax.destroy();
                        },
                        build : function () {
                            this.parallax.build();
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
                        build : function () {
                            this.instance = new MagicScroll(_this.obj, {
                                init : false,
                                on : {
                                    allUpdate : function () {
                                        if (_this.magictween.instance == null) return;
                                        var progress = _this.magictween.instance.props.allProgress;
                                        _this.motion.parallax.progress(progress);
                                    }
                                }
                            });
                            this.instance.init();
                        }
                    }
                });
                this.magictween.build();
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
                obj : '.parallax-section'
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
                        new Parallax(_this.obj.eq(index));
                    })(i);
                }
            }
        };
        return new Call();
    })();
    return Call;
}));

(function (global, factory) {
    global = global;
    global.MagicScroll = factory();
}(this, function () { 'use strict';
    var Component = (function (isUndefined) {
        var win = window,
            doc = win.document,
            $ = win.jqLite,
            Util = Utils;
        function Component (container, args) {
            if (!(this instanceof Component)) {
                return new Component(container, args);
            }
            var defParams = {
                init : true,
                obj : container,
                magicSection : '.magic-section',
                magicArticle : '.magic-article',
                duration : (function () {
                    var d = 2;
                    var v = (d * 100) + '%';
                    if (Util.isDevice) {
                        v = (Util.winSize().h * d) + 'px';
                    }
                    return v;
                })(),
                triggerHook : 0,
                overlapSpace : false,
                pushFollowers : true,
                spaceHeight : function () {
                    return 0;
                },
                animations : [],
                fixedAutoPlay : false,
                customEvent : '.Component' + (new Date()).getTime() + Math.random(),
                breakKey : ['duration','triggerHook','spaceHeight','overlapSpace','pushFollowers'],
                breakpoints : {},
                props : {},
                stateAttr : {
                    destroy : false,
                    scroll : null,
                    prevTop : null,
                    resize : null
                },
                requestAttr : {
                    resize : null
                },
                timeAttr : {
                    resizeEnd : null
                },
                classAttr : {
                    fixed : 'is-fixed'
                },
                hasCssSticky : (function () {
                    var not = doc && doc.documentElement && doc.documentMode <= 11;
                    return !not;
                })(),
                on : {
                    in : null,
                    out : null,
                    hookIn : null,
                    hookOut : null,
                    init : null
                }
            };
            this.opts = Util.def(defParams, (args || {}));
            if (!(this.obj = $(this.opts.obj)).length) return;
            if (this.opts.init) {
                this.init();
            }
        }
        Component.prototype = {
            init : function () {
                this.buildSet();
                this.setElements();
                this.set.after.build();
                this.buildTween();
                this.buildMotion();
                this.resizeFunc();
                this.bindEvents(true);
                this.set.load.after();
            },
            buildSet : function () {
                var _this = this;
                Util.def(this, {
                    set : {
                        before : {
                            init : function () {
                                var bKey = _this.opts.breakKey;
                                var bOpts = {};
                                bKey.forEach(function (val) {
                                    bOpts[val] = _this.opts[val];
                                });
                                _this.bOpts = Util.def({}, bOpts);
                            },
                            initLayout : function () {
                                var magicSectionClass = _this.opts.magicSection.split('.')[1];
                                var magicArticleClass = _this.opts.magicArticle.split('.')[1];
                                var l = '<div class="'+magicSectionClass+'"><div class="'+magicArticleClass+'"></div></div>';
                                _this.obj.wrap(l);
                            },
                            build : function () {
                                this.init();
                                this.initLayout();
                            }
                        },
                        after : {
                            initLayout : function () {
                                _this.magicSection.css('position', 'relative');
                                _this.magicArticle.css({
                                    'position' : 'sticky',
                                    'top' : 0
                                });
                            },
                            buildNotStickyLayout : function () {
                                var magicArticle = _this.magicArticle;
                                Util.def(_this, {
                                    notstickylayout : {
                                        out_top : function () {
                                            magicArticle.css({
                                                'position' : '',
                                                'bottom' : ''
                                            });
                                        },
                                        out_bot : function () {
                                            magicArticle.css({
                                                'position' : 'fixed',
                                                'top' : _this.opts.props['spaceHeight'],
                                                'bottom' : ''
                                            });
                                        },
                                        out_bot_pushFollowers : function () {
                                            magicArticle.css({
                                                'position' : 'absolute',
                                                'top' : '',
                                                'bottom' : 0
                                            });
                                        }
                                    }
                                });
                            },
                            build : function () {
                                this.initLayout();
                                this.buildNotStickyLayout();
                            }
                        },
                        load : {
                            before : function () {},
                            after : function () {
                                var props = _this.opts.props;
                                var winTop = $(win).scrollTop();
                                var condition = {
                                    hookOutB : (winTop >= props.triggerMaxOffset)
                                };
                                if (condition.hookOutB) {
                                    if (!_this.opts.fixedAutoPlay) {
                                        _this.tween.pause().progress(1);
                                    }
                                }
                                _this.outCallback('init');
                            }
                        },
                        opts : function () {
                            var winWidth = Util.winSize().w;
                            var winHeight = Util.winSize().h;

                            // breakpoints
                            var breakpoints = _this.opts.breakpoints,
                                breakKeyMins = [],
                                breakKeyMin;
                            for (var key in breakpoints) {
                                if (key >= winWidth) {
                                    breakKeyMins.push(key);
                                    breakKeyMin = Math.min.apply(null, breakKeyMins);
                                } else {
                                    breakKeyMin = null;
                                }
                            }
                            var breakOpts = Util.def({}, _this.bOpts);
                            if (breakKeyMin != null) {
                                breakOpts = Util.def(breakOpts, breakpoints[breakKeyMin]);
                            }

                            // spaceHeight
                            _this.opts.props['spaceHeight'] = (function () {
                                var r = Math.floor(breakOpts.spaceHeight(), 10);
                                return r;
                            })();

                            // sectionHeight
                            _this.opts.props['sectionHeight'] = (function () {
                                var pwinH = winHeight / 100;
                                var duration = breakOpts.duration;
                                var dVal = parseFloat(duration);
                                var isPercent = duration.indexOf('%') >= 0;
                                var r = pwinH * dVal;
                                if (!isPercent) {
                                    r = dVal;
                                }
                                return r - _this.opts.props['spaceHeight'];
                            })();

                            // articleHeight
                            _this.opts.props['articleHeight'] = (function () {
                                var r = _this.magicArticle.outerHeight(true);
                                return r;
                            })();

                            // offset
                            (function () {
                                var winHeight = Util.winSize().h;
                                var offset = _this.magicSection.offset();
                                var height = _this.magicSection.outerHeight(true);
                                var offset = offset.top;
                                var minOffset =  Math.ceil(offset - winHeight, 10);
                                var maxOffset = Math.ceil(offset + height, 10);
                                var spaceHeight = _this.opts.props['spaceHeight'];
                                var articleHeight = _this.opts.props['articleHeight'];
                                var triggerHeight = (function () {
                                    var vh = (1 - breakOpts.triggerHook);
                                    vh = vh < 0 ? 0 : vh > 1 ? 1 : vh;
                                    var v =  vh * winHeight;
                                    var max = Math.max(winHeight - spaceHeight, articleHeight + spaceHeight);
                                    if (!breakOpts.overlapSpace) {
                                        var minTrigger = winHeight - spaceHeight;
                                        if (v >= minTrigger) {
                                            v = v - spaceHeight;
                                        }
                                    }
                                    return {
                                        min : v,
                                        max : max
                                    };
                                })();
                                _this.opts.props['offset'] = offset;
                                _this.opts.props['minOffset'] = minOffset;
                                _this.opts.props['maxOffset'] = maxOffset;
                                _this.opts.props['triggerMinOffset'] = minOffset + triggerHeight.min;
                                _this.opts.props['triggerMaxOffset'] = maxOffset - triggerHeight.max;
                                _this.opts.props['fixedMinOffset'] = minOffset + winHeight - spaceHeight;
                                _this.opts.props['fixedMaxOffset'] = maxOffset - articleHeight - spaceHeight;
                            })();

                            _this.breakOpts = breakOpts;
                            _this.props = _this.opts.props;
                        },
                        layout : function () {
                            var winTop = $(win).scrollTop();
                            var winHeight = Util.winSize().h;
                            var props = _this.opts.props;
                            var breakOpts = _this.breakOpts;
                            var spaceHeight = props['spaceHeight'];
                            var sectionHeight = _this.opts.props['sectionHeight'];
                            var articleHeight = _this.opts.props['articleHeight'];
                            _this.magicSection.css({
                                'height' : sectionHeight
                            });
                            if (_this.opts.hasCssSticky || _this.motion.scroll.stateAttr.fixedActive == 'in') {
                                _this.magicArticle.css({
                                    'top' : spaceHeight
                                });
                            }
                            if (!_this.opts.hasCssSticky) {
                                if (props.fixedMinOffset > winTop) {
                                    _this.notstickylayout.out_top();
                                } else if (winTop >= props.fixedMaxOffset) {
                                    if (!breakOpts.pushFollowers) {
                                        _this.notstickylayout.out_bot();
                                    } else {
                                        _this.notstickylayout.out_bot_pushFollowers();
                                    }
                                }
                                if (!breakOpts.pushFollowers) {
                                    if (props.minOffset > winTop) {
                                        _this.notstickylayout.out_top();
                                    } else if (winTop >= props.maxOffset) {
                                        _this.notstickylayout.out_bot_pushFollowers();
                                    }
                                }
                                _this.magicArticle.css({
                                    'width' : _this.magicSection.outerWidth(true)
                                });
                            }
                            if (!breakOpts.pushFollowers) {
                                _this.magicArticle.css({
                                    'margin-bottom' : (Math.max(winHeight - spaceHeight, articleHeight + spaceHeight)) * -1
                                });
                            } else {
                                _this.magicArticle.css({
                                    'margin-bottom' : ''
                                });
                            }
                        },
                        destroy : function () {
                            if (_this.obj.parent().is(_this.opts.magicArticle)) {
                                _this.obj.unwrap();
                            }
                            if (_this.obj.parent().is(_this.opts.magicSection)) {
                                _this.obj.unwrap();
                            }
                        }
                    }
                });
                this.set.before.build();
            },
            setElements : function () {
                this.magicArticle = this.obj.parent(this.opts.magicArticle);
                this.magicSection = this.magicArticle.parent(this.opts.magicSection);
            },
            buildTween : function () {
                var _this = this;
                Util.def(this, {
                    tween : {
                        instance : null,
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
                        pause : function () {
                            if (this.instance == null) return this;
                            this.instance.pause();
                            return this;
                        },
                        progress : function (time) {
                            if (this.instance == null) return this;
                            this.instance.progress(time);
                            return this;
                        },
                        build : function () {
                            var a = this;
                            var animations = _this.opts.animations;
                            var timeline = new TimelineMax();
                            timeline.pause();
                            var build = function (i) {
                                var animation = animations[i];
                                var empty = function (type) {
                                    var o = {};
                                    o.progress = type == 'start' ? 0 : 1;
                                    return o;
                                };
                                var from = animation.hasOwnProperty('from') ? animation.from : empty('start');
                                var to = animation.hasOwnProperty('to') ? animation.to : empty('end');
                                var duration = animation.hasOwnProperty('duration') ? animation.duration : 0;
                                var hasStart = animation.hasOwnProperty('onStart');
                                var hasUpdate = animation.hasOwnProperty('onUpdate');
                                var hasComplete = animation.hasOwnProperty('onComplete');
                                var hasReverseComplete = animation.hasOwnProperty('onReverseComplete');
                                timeline.to(from, duration, Util.def(to, {
                                    onUpdate : function () {
                                        if (hasUpdate) {
                                            animation.onUpdate(a.delTweenID(from));
                                        }
                                    },
                                    onStart : function () {
                                        if (hasStart) {
                                            animation.onStart(a.delTweenID(from));
                                        }
                                    },
                                    onComplete : function () {
                                        if (hasComplete) {
                                            animation.onComplete(a.delTweenID(from));
                                        }
                                    },
                                    onReverseComplete : function () {
                                        if (hasReverseComplete) {
                                            animation.onReverseComplete(a.delTweenID(from));
                                        }
                                    }
                                }));
                            };
                            for (var i = 0, max = animations.length; i < max; i++) {
                                build.call(a, i);
                            }
                            this.instance = timeline;
                        }
                    }
                });
                this.tween.build();
            },
            buildMotion : function () {
                var _this = this;
                var props = this.opts.props;
                var classAttr = this.opts.classAttr;
                Util.def(this, {
                    motion : {
                        progress : {
                            update : function (type) {
                                var winTop = $(win).scrollTop();
                                if (type) {
                                    var t = props.triggerMaxOffset - props.triggerMinOffset;
                                    var d = winTop - props.triggerMinOffset;
                                    var p = d / t;
                                } else {
                                    var p = (props.triggerMinOffset <= winTop) ? 1 : 0;
                                }
                                _this.opts.props['progress'] = p;
                                _this.tween.progress(p);
                                _this.outCallback('update');
                            }
                        },
                        scroll : {
                            stateAttr : {
                                active : null,
                                hookActive : null,
                                fixedActive : null
                            },
                            destroy : function () {
                            },
                            build : function () {
                                var winTop = $(win).scrollTop();
                                var breakOpts = _this.breakOpts;
                                var condition = {
                                    in : (props.minOffset <= winTop && winTop < props.maxOffset),
                                    hookIn : (props.triggerMinOffset <= winTop && winTop < props.triggerMaxOffset),
                                    fixedIn : (props.fixedMinOffset <= winTop && winTop < props.fixedMaxOffset)
                                };
                                if (condition.in) {
                                    if (this.stateAttr.active != 'in') {
                                        this.stateAttr.active = 'in';
                                        if (!_this.opts.hasCssSticky) {
                                            if (!breakOpts.pushFollowers) {
                                                if (props.direction == 'FORWARD') {
                                                    _this.notstickylayout.out_top();
                                                } else if (props.direction == 'REVERSE') {
                                                    _this.notstickylayout.out_bot();
                                                }
                                            }
                                        }
                                        _this.outCallback('in');
                                    }
                                }
                                if (condition.hookIn) {
                                    if (this.stateAttr.hookActive != 'in') {
                                        this.stateAttr.hookActive = 'in';
                                        _this.outCallback('hookIn');
                                    }
                                    _this.motion.progress.update(true);
                                }
                                if (!condition.hookIn) {
                                    if (this.stateAttr.hookActive != 'out') {
                                        this.stateAttr.hookActive = 'out';
                                        _this.motion.progress.update(false);
                                        _this.outCallback('hookOut');
                                    }
                                }
                                if (condition.fixedIn) {
                                    if (this.stateAttr.fixedActive != 'in') {
                                        this.stateAttr.fixedActive = 'in';
                                        _this.magicArticle.addClass(classAttr.fixed);
                                        if (!_this.opts.hasCssSticky) {
                                            _this.notstickylayout.out_bot();
                                        }
                                    }
                                }
                                if (!condition.fixedIn) {
                                    if (this.stateAttr.fixedActive != 'out') {
                                        this.stateAttr.fixedActive = 'out';
                                        _this.magicArticle.removeClass(classAttr.fixed);
                                        if (!_this.opts.hasCssSticky) {
                                            if (props.fixedMinOffset > winTop) {
                                                _this.notstickylayout.out_top();
                                            } else if (winTop >= props.fixedMaxOffset) {
                                                if (!breakOpts.pushFollowers) {
                                                    _this.notstickylayout.out_bot();
                                                } else {
                                                    _this.notstickylayout.out_bot_pushFollowers();
                                                }
                                            }
                                        }
                                    }
                                }
                                if (!condition.in) {
                                    if (this.stateAttr.active != 'out') {
                                        this.stateAttr.active = 'out';
                                        if (!_this.opts.hasCssSticky) {
                                            if (!breakOpts.pushFollowers) {
                                                if (props.minOffset > winTop) {
                                                    _this.notstickylayout.out_top();
                                                } else if (winTop >= props.maxOffset) {
                                                    _this.notstickylayout.out_bot_pushFollowers();
                                                }
                                            }
                                        }
                                        _this.outCallback('out');
                                    }
                                }
                            }
                        },
                        destroy : function () {
                            this.scroll.destroy();
                        },
                        build : function () {
                            this.scroll.build();
                        }
                    }
                })
            },
            changeEvents : function (event) {
                var events = [],
                    eventNames = event.split(' ');
                for (var key in eventNames) {
                    events.push(eventNames[key] + this.opts.customEvent);
                }
                return events.join(' ');
            },
            bindEvents : function (type) {
                if (type) {
                    $(win).on(this.changeEvents('scroll'), this.scrollFunc.bind(this));
                    $(win).on(this.changeEvents('resize orientationchange'), this.resizeFunc.bind(this));
                } else {
                    $(win).off(this.changeEvents('scroll'));
                    $(win).off(this.changeEvents('resize orientationchange'));
                }
            },
            scrollFunc : function () {
                this.winTop = $(win).scrollTop();
                if (this.opts.stateAttr.prevTop > this.winTop) {
                    this.opts.props['direction'] = 'REVERSE';
                } else if (this.opts.stateAttr.prevTop < this.winTop) {
                    this.opts.props['direction'] = 'FORWARD';
                }
                this.opts.stateAttr.prevTop = this.winTop;
                if (this.opts.stateAttr.scroll == null) {
                    this.opts.stateAttr.scroll = this.winTop;
                    this.scrollAnimateFunc();
                }
                win.clearTimeout(this.opts.timeAttr.scrollEnd);
                this.opts.timeAttr.scrollEnd = win.setTimeout(this.scrollEndFunc.bind(this), 60);
            },
            scrollEndFunc : function () {
                this.opts.stateAttr.scroll = null;
                if (!this.opts.stateAttr.destroy) {
                    this.set.opts();
                    this.motion.build();
                }
                Util.cancelAFrame.call(win, this.opts.requestAttr.scroll);
            },
            scrollAnimateFunc : function () {
                if (!this.opts.stateAttr.destroy) {
                    this.set.opts();
                    this.motion.build();
                }
                this.opts.requestAttr.scroll = Util.requestAFrame.call(win, this.scrollAnimateFunc.bind(this));
            },
            resizeFunc : function () {
                this.winWidth = Util.winSize().w;
                if (this.opts.stateAttr.resize == null) {
                    this.opts.stateAttr.resize = this.winWidth;
                    this.resizeAnimateFunc();
                }
                win.clearTimeout(this.opts.timeAttr.resizeEnd);
                this.opts.timeAttr.resizeEnd = win.setTimeout(this.resizeEndFunc.bind(this), 180);
            },
            resizeEndFunc : function () {
                this.opts.stateAttr.resize = null;
                if (!this.opts.stateAttr.destroy) {
                    this.set.opts();
                    this.set.layout();
                    this.scrollFunc();
                }
                Util.cancelAFrame.call(win, this.opts.requestAttr.resize);
            },
            resizeAnimateFunc : function () {
                if (!this.opts.stateAttr.destroy) {
                    this.set.opts();
                    this.set.layout();
                    this.scrollFunc();
                }
                this.opts.requestAttr.resize = Util.requestAFrame.call(win, this.resizeAnimateFunc.bind(this));
            },
            destroy : function () {
                this.opts.stateAttr.destroy = true;
                this.bindEvents(false);
                this.set.destroy();
                this.tween.destroy();
                this.motion.destroy();
            },
            outCallback : function (ing) {
                var callbackObj = this.opts.on[ing];
                if (callbackObj == null) return;
                callbackObj();
            }
        };
        return Component;
    })();
    return Component;
}));
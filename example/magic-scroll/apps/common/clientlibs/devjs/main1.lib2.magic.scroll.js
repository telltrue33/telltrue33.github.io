(function (global, factory) {
    global = global;
    global.MagicScroll = factory();
}(this, function () { 'use strict';
    var Component = (function (isUndefined) {
        var win = window,
            doc = win.document,
            $ = win.jQuery || win.jqLite,
            positionSticky = (function () {
                var cloneDiv = doc.createElement('div');
                doc.body.appendChild(cloneDiv);
                cloneDiv.style.position = 'sticky';
                var pVal = win.getComputedStyle(cloneDiv, null).getPropertyValue('position');
                doc.body.removeChild(cloneDiv);
                return pVal == 'sticky';
            })(),
            Util = {
                isDevice : (function () {
                    var isDevice = ('ontouchstart' in win || (win.DocumentTouch && doc instanceof win.DocumentTouch));
                    return isDevice;
                })(),
                isOrientationchange : (function () {
                    var isO = ('onorientationchange' in win);
                    return isO;
                })(),
                isObject : function (o) {
                    return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
                },
                def : function () {
                    var args = [], len$1 = arguments.length;
                    while ( len$1-- ) args[ len$1 ] = arguments[ len$1 ];
                    var to = Object(args[0]);
                    for (var i = 1; i < args.length; i += 1) {
                        var nextSource = args[i];
                        if (nextSource !== undefined && nextSource !== null) {
                            var keysArray = Object.keys(Object(nextSource));
                            for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                                var nextKey = keysArray[nextIndex];
                                var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                                if (desc !== undefined && desc.enumerable) {
                                    if (this.isObject(to[nextKey]) && this.isObject(nextSource[nextKey])) {
                                        this.def(to[nextKey], nextSource[nextKey]);
                                    } else if (!this.isObject(to[nextKey]) && this.isObject(nextSource[nextKey])) {
                                        to[nextKey] = {};
                                        this.def(to[nextKey], nextSource[nextKey]);
                                    } else {
                                        to[nextKey] = nextSource[nextKey];
                                    }
                                }
                            }
                        }
                    }
                    return to;
                },
                winSize : (function () {
                    return function () {
                        var win_wh = {
                            w : win.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth,
                            h : win.innerHeight || doc.documentElement.clientHeight || doc.body.clientHeight
                        };
                        return win_wh;
                    }
                })(),
                requestAFrame : (function () {
                    return win.requestAnimationFrame || win.webkitRequestAnimationFrame || win.mozRequestAnimationFrame || win.oRequestAnimationFrame || win.msRequestAnimationFrame ||
                        function (callback) {
                            return win.setTimeout(callback, 1000 / 60);
                        };
                })(),
                cancelAFrame : (function () {
                    return win.cancelAnimationFrame || win.webkitCancelAnimationFrame || win.webkitCancelRequestAnimationFrame || win.mozCancelAnimationFrame || win.oCancelAnimationFrame || win.msCancelAnimationFrame ||
                        function (id) {
                            win.clearTimeout(id);
                        };
                })()
            };
        // var testDiv = doc.createElement('div');
        // doc.body.appendChild(testDiv);
        // var testDivStyle = {
        //     'position' : 'fixed',
        //     'left' : 0,
        //     'top' : 0,
        //     'z-index' : 100,
        //     'line-height' : 1.5,
        //     'background' : 'red',
        //     'color' : '#fff'
        // };
        // testDiv.innerHTML = 'test';
        // testDiv.setAttribute('id', 'test');
        // for (var tKey in testDivStyle) {
        //     testDiv.style[tKey] = testDivStyle[tKey];
        // }
        function Component (container, args) {
            if (!(this instanceof Component)) {
                return new Component(container, args);
            }
            var defParams = {
                init : true,
                obj : container,
                magicSection : '.magic-section',
                magicArticle : '.magic-article',
                duration : null,
                triggerHook : 0,
                overlapSpace : false,
                initFollowers : true,
                pushFollowers : true,
                spaceHeight : function () {
                    return 0;
                },
                animations : [],
                fixedAutoPlay : false,
                customEvent : '.Component' + (new Date()).getTime() + Math.random(),
                breakKey : ['duration','triggerHook','spaceHeight','overlapSpace','initFollowers','pushFollowers'],
                breakpoints : {},
                props : {},
                stateAttr : {
                    destroy : false,
                    scroll : null,
                    prevTop : null,
                    resize : null,
                    isOrientationchange : false
                },
                requestAttr : {
                    resize : null
                },
                timeAttr : {
                    scrollEnd : null,
                    resizeEnd : null
                },
                classAttr : {
                    fixed : 'is-fixed'
                },
                hasCssSticky : positionSticky,
                on : {
                    in : null,
                    out : null,
                    hookIn : null,
                    hookOut : null,
                    init : null,
                    allUpdate : null,
                    beforeUpdate : null,
                    afterUpdate : null,
                    update : null
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
                            buildFixedLayout : function () {
                                var magicArticle = _this.magicArticle;
                                Util.def(_this, {
                                    fixedlayout : {
                                        state : null,
                                        current : null,
                                        view : function () {
                                            if (this.current !== this.state) {
                                                this.current = this.state;
                                                this[this.state]();
                                            }
                                        },
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
                                        },
                                        out_not_initFollowers : function () {
                                            magicArticle.css({
                                                'position' : '',
                                                'top' : _this.opts.props['spaceHeight'],
                                                'bottom' : ''
                                            });
                                        }
                                    }
                                });
                            },
                            build : function () {
                                this.initLayout();
                                this.buildFixedLayout();
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
                        getSize : {
                            winHeight : Util.winSize().h,
                            resize : function () {
                                this.winHeight = Util.winSize().h
                            }
                        },
                        opts : function () {
                            var s = this;
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

                            if (breakOpts.duration == null) {
                                var animations = _this.opts.animations;
                                if (!breakOpts.pushFollowers || !breakOpts.initFollowers || animations.length) {
                                    breakOpts.duration = '100%';
                                }
                            }

                            // spaceHeight
                            var spaceHeight = (function () {
                                var r = Math.floor(breakOpts.spaceHeight(), 10);
                                return r;
                            })();

                            // sectionHeight
                            var sectionHeight = (function () {
                                var h = _this.obj.outerHeight(true);
                                if (breakOpts.duration != null) {
                                    var pwinH = s.getSize.winHeight / 100;
                                    var duration = breakOpts.duration;
                                    var dVal = parseFloat(duration);
                                    var isPercent = duration.indexOf('%') >= 0;
                                    var r = pwinH * dVal;
                                    if (!isPercent) {
                                        r = dVal;
                                    }
                                    var sH = r - spaceHeight;
                                    h = Math.max(h,sH);
                                }
                                return h;
                            })();

                            // articleHeight
                            var articleHeight = (function () {
                                var r = _this.magicArticle.outerHeight(true);
                                return r;
                            })();

                            // offset
                            (function () {
                                var height = _this.magicSection.outerHeight(true);
                                var offset = _this.magicSection.offset().top;
                                var minOffset =  Math.ceil(offset - winHeight, 10);
                                var maxOffset = Math.ceil(offset + height, 10);
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

                            _this.opts.props['spaceHeight'] = spaceHeight;
                            _this.opts.props['sectionHeight'] = sectionHeight;
                            _this.opts.props['articleHeight'] = articleHeight;
                            _this.breakOpts = breakOpts;
                            _this.props = _this.opts.props;
                        },
                        layout : function () {
                            var winHeight = Util.winSize().h;
                            var hasCssSticky = _this.opts.hasCssSticky;
                            var props = _this.opts.props;
                            var breakOpts = _this.breakOpts;
                            var spaceHeight = props['spaceHeight'];
                            var sectionHeight = props['sectionHeight'];
                            var articleHeight = props['articleHeight'];
                            var notStickyTopState = ['out_bot','out_not_initFollowers'];
                            var notStickyTopCondition = !hasCssSticky && (notStickyTopState.indexOf(_this.fixedlayout.state) >= 0);
                            var hVal = (breakOpts.duration == null) ? '' : sectionHeight;
                            var tVal = (breakOpts.duration == null) ? '' : spaceHeight;
                            _this.magicSection.css({
                                'height' : hasCssSticky ? hVal : sectionHeight
                            });
                            if (hasCssSticky || notStickyTopCondition) {
                                _this.magicArticle.css({
                                    'top' : tVal
                                });
                            }
                            if (!hasCssSticky || !breakOpts.initFollowers) {
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
                            var animations = _this.opts.animations;
                            if (animations.length) {
                                var a = this;
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
                            allUpdate : function (type) {
                                var winTop = $(win).scrollTop();
                                if (type) {
                                    var t = props.maxOffset - props.minOffset;
                                    var d = winTop - props.minOffset;
                                    var p = d / t;
                                } else {
                                    var p = (props.minOffset <= winTop) ? 1 : 0;
                                }
                                _this.opts.props['allProgress'] = p;
                                _this.outCallback('allUpdate');
                            },
                            beforeUpdate : function (type) {
                                var winTop = $(win).scrollTop();
                                if (type) {
                                    var t = props.triggerMinOffset - props.minOffset;
                                    var d = winTop - props.minOffset;
                                    var p = d / t;
                                } else {
                                    var p = (props.minOffset <= winTop) ? 1 : 0;
                                }
                                _this.opts.props['afterProgress'] = 0;
                                _this.opts.props['beforeProgress'] = p;
                                _this.outCallback('beforeUpdate');
                            },
                            afterUpdate : function (type) {
                                var winTop = $(win).scrollTop();
                                if (type) {
                                    var t = props.maxOffset - props.triggerMaxOffset;
                                    var d = winTop - props.triggerMaxOffset;
                                    var p = d / t;
                                } else {
                                    var p = (props.triggerMaxOffset <= winTop) ? 1 : 0;
                                }
                                _this.opts.props['beforeProgress'] = 1;
                                _this.opts.props['afterProgress'] = p;
                                _this.outCallback('afterUpdate');
                            },
                            update : function (type) {
                                var winTop = $(win).scrollTop();
                                if (type) {
                                    var t = props.triggerMaxOffset - props.triggerMinOffset;
                                    var d = winTop - props.triggerMinOffset;
                                    var p = d / t;
                                } else {
                                    var p = (props.triggerMinOffset <= winTop) ? 1 : 0;
                                }
                                _this.opts.props['beforeProgress'] = 1;
                                _this.opts.props['afterProgress'] = 0;
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
                            scope : {
                                out : null,
                                hookOut : null
                            },
                            destroy : function () {
                            },
                            build : function () {
                                var winTop = $(win).scrollTop();
                                var hasCssSticky = _this.opts.hasCssSticky;
                                var breakOpts = _this.breakOpts;
                                var condition = {
                                    in : (props.minOffset <= winTop && winTop < props.maxOffset),
                                    hookIn : (props.triggerMinOffset <= winTop && winTop < props.triggerMaxOffset),
                                    fixedIn : (props.fixedMinOffset <= winTop && winTop < props.fixedMaxOffset)
                                };
                                if (condition.in) {
                                    if (!hasCssSticky) {
                                        if (breakOpts.initFollowers) {
                                            if (!breakOpts.pushFollowers) {
                                                if (props.direction == 'FORWARD') {
                                                    _this.fixedlayout.state = 'out_top';
                                                } else if (props.direction == 'REVERSE') {
                                                    _this.fixedlayout.state = 'out_bot';
                                                }
                                            }
                                        }
                                    }
                                    if (!breakOpts.initFollowers) {
                                        _this.fixedlayout.state = 'out_bot';
                                    }
                                }
                                if (!condition.hookIn) {
                                    if (props.triggerMinOffset > winTop) {
                                        this.scope.hookOut = 'TOP';
                                    } else if (winTop >= props.triggerMaxOffset) {
                                        this.scope.hookOut = 'BOTTOM';
                                    }
                                }
                                if (condition.fixedIn) {
                                    if (!hasCssSticky) {
                                        if (breakOpts.initFollowers) {
                                            _this.fixedlayout.state = 'out_bot';
                                        }
                                    }
                                    _this.magicArticle.addClass(classAttr.fixed);
                                    if (!breakOpts.initFollowers) {
                                        _this.fixedlayout.state = 'out_bot';
                                    }
                                }
                                if (!condition.fixedIn) {
                                    if (!hasCssSticky) {
                                        if (breakOpts.initFollowers) {
                                            if (props.fixedMinOffset > winTop) {
                                                _this.fixedlayout.state = 'out_top';
                                            } else if (winTop >= props.fixedMaxOffset) {
                                                if (!breakOpts.pushFollowers) {
                                                    _this.fixedlayout.state = 'out_bot';
                                                } else {
                                                    _this.fixedlayout.state = 'out_bot_pushFollowers';
                                                }
                                            }
                                        }
                                    }
                                    _this.magicArticle.removeClass(classAttr.fixed);
                                    if (!breakOpts.initFollowers) {
                                        if (breakOpts.pushFollowers) {
                                            if (winTop >= props.fixedMaxOffset) {
                                                _this.fixedlayout.state = 'out_bot_pushFollowers';
                                            }
                                        }
                                    }
                                }
                                if (!condition.in) {
                                    if (!hasCssSticky) {
                                        if (breakOpts.initFollowers) {
                                            if (!breakOpts.pushFollowers) {
                                                if (props.minOffset > winTop) {
                                                    _this.fixedlayout.state = 'out_top';
                                                } else if (winTop >= props.maxOffset) {
                                                    _this.fixedlayout.state = 'out_bot_pushFollowers';
                                                }
                                            }
                                        }
                                    }
                                    if (props.minOffset > winTop) {
                                        this.scope.out = 'TOP';
                                        _this.opts.props['beforeProgress'] = 0;
                                        _this.opts.props['afterProgress'] = 0;
                                        _this.opts.props['allProgress'] = 0;
                                        _this.opts.props['progress'] = 0;
                                    } else if (winTop >= props.maxOffset) {
                                        this.scope.out = 'BOTTOM';
                                        _this.opts.props['beforeProgress'] = 1;
                                        _this.opts.props['afterProgress'] = 1;
                                        _this.opts.props['allProgress'] = 1;
                                        _this.opts.props['progress'] = 1;
                                    }
                                    if (!breakOpts.initFollowers) {
                                        _this.fixedlayout.state = 'out_not_initFollowers';
                                    }
                                }
                                _this.fixedlayout.view();
                                if (condition.in) {
                                    if (this.stateAttr.active != 'in') {
                                        this.stateAttr.active = 'in';
                                        _this.outCallback('in');
                                    }
                                }
                                if (!condition.hookIn) {
                                    if (this.stateAttr.hookActive != 'out') {
                                        this.stateAttr.hookActive = 'out';
                                        _this.motion.progress.update(false);
                                        _this.outCallback('hookOut');
                                    }
                                }
                                if (condition.in) {
                                    _this.motion.progress.allUpdate(true);
                                    if (props.minOffset <= winTop && winTop < props.triggerMinOffset) {
                                        _this.motion.progress.beforeUpdate(true);
                                    }
                                }
                                if (condition.hookIn) {
                                    if (this.stateAttr.hookActive != 'in') {
                                        this.stateAttr.hookActive = 'in';
                                        if (props.direction == 'FORWARD') {
                                            _this.motion.progress.beforeUpdate(false);
                                        } else if (props.direction == 'REVERSE') {
                                            _this.motion.progress.afterUpdate(false);
                                        }
                                        _this.outCallback('hookIn');
                                    }
                                    _this.motion.progress.update(true);
                                }
                                if (condition.fixedIn) {
                                    if (this.stateAttr.fixedActive != 'in') {
                                        this.stateAttr.fixedActive = 'in';
                                    }
                                }
                                if (!condition.fixedIn) {
                                    if (this.stateAttr.fixedActive != 'out') {
                                        this.stateAttr.fixedActive = 'out';
                                    }
                                }
                                if (condition.in) {
                                    if (props.triggerMaxOffset <= winTop && winTop < props.maxOffset) {
                                        _this.motion.progress.afterUpdate(true);
                                    }
                                }
                                if (!condition.in) {
                                    if (this.stateAttr.active != 'out') {
                                        this.stateAttr.active = 'out';
                                        if (props.minOffset > winTop) {
                                            _this.motion.progress.beforeUpdate(false);
                                        } else if (winTop >= props.maxOffset) {
                                            _this.motion.progress.afterUpdate(false);
                                        }
                                        _this.motion.progress.allUpdate(false);
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
                this.scrollAct();
                Util.cancelAFrame.call(win, this.opts.requestAttr.scroll);
            },
            scrollAnimateFunc : function () {
                this.scrollAct();
                this.opts.requestAttr.scroll = Util.requestAFrame.call(win, this.scrollAnimateFunc.bind(this));
            },
            scrollAct : function () {
                if (!this.opts.stateAttr.destroy) {
                    this.set.opts();
                    this.motion.build();
                }
            },
            resizeFunc : function (e) {
                if (e != isUndefined && e.type == 'orientationchange') {
                    this.opts.stateAttr.isOrientationchange = true;
                }
                this.winWidth = Util.winSize().w;
                if (this.opts.stateAttr.resize == null) {
                    this.opts.stateAttr.resize = this.winWidth;
                    this.resizeAnimateFunc();
                }
                win.clearTimeout(this.opts.timeAttr.resizeEnd);
                this.opts.timeAttr.resizeEnd = win.setTimeout(this.resizeEndFunc.bind(this), 280);
            },
            resizeEndFunc : function () {
                this.opts.stateAttr.resize = null;
                this.resizeAct();
                this.opts.stateAttr.isOrientationchange = false;
                Util.cancelAFrame.call(win, this.opts.requestAttr.resize);
            },
            resizeAnimateFunc : function () {
                this.resizeAct();
                this.opts.requestAttr.resize = Util.requestAFrame.call(win, this.resizeAnimateFunc.bind(this));
            },
            resizeAct : function () {
                if (!this.opts.stateAttr.destroy) {
                    if (Util.isOrientationchange) {
                        if (this.opts.stateAttr.isOrientationchange) {
                            this.set.getSize.resize();
                        }
                    } else {
                        this.set.getSize.resize();
                    }
                    this.set.opts();
                    this.set.layout();
                    this.scrollFunc();
                }
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
!function(t,e,n){"$:nomunge";function u(u,o){o=o||u+n;var i=t(),s=u+"."+o+"-special-event";function c(e){t(i).each(function(){var n=t(this);this===e.target||n.has(e.target).length||n.triggerHandler(o,[e.target])})}t.event.special[o]={setup:function(){1===(i=i.add(this)).length&&t(e).bind(s,c)},teardown:function(){0===(i=i.not(this)).length&&t(e).unbind(s)},add:function(t){var e=t.handler;t.handler=function(t,n){t.target=n,e.apply(this,arguments)}}}}t.map("click dblclick mousemove mousedown mouseup mouseover mouseout change select submit keydown keypress keyup touchstart touchend".split(" "),function(t){u(t)}),u("focusin","focus"+n),u("focusout","blur"+n),t.addOutsideEvent=u}(jQuery,document,"outside");

(function () { 'use strict';
    var win = window;
    var Util = {
        isObject: function (o) {
            return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
        },
        def: function () {
            var args = [], len$1 = arguments.length;
            while (len$1--) args[len$1] = arguments[len$1];
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
        requestAFrame: (function () {
            return win.requestAnimationFrame || win.webkitRequestAnimationFrame || win.mozRequestAnimationFrame || win.oRequestAnimationFrame || win.msRequestAnimationFrame ||
                function (callback) {
                    return win.setTimeout(callback, 1000 / 60);
                };
        })(),
        cancelAFrame: (function () {
            return win.cancelAnimationFrame || win.webkitCancelAnimationFrame || win.webkitCancelRequestAnimationFrame || win.mozCancelAnimationFrame || win.oCancelAnimationFrame || win.msCancelAnimationFrame ||
                function (id) {
                    win.clearTimeout(id);
                };
        })(),
        winSize: (function () {
            return function () {
                var win_wh = {
                    w: win.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth,
                    h: win.innerHeight || doc.documentElement.clientHeight || doc.body.clientHeight
                };
                return win_wh;
            }
        })(),
        getBoundingClientRect: function (target) {
            var condition = $(target).length;
            return condition ? target.getBoundingClientRect() : {top:0,left:0,width:0,height:0};
        },
        imgPromise: function (selector) {
            return new Promise(function (resolve, reject) {
                if (selector.length) {
                    var imgs = selector.find('img'),
                        imgs = selector[0].tagName === 'IMG' ? imgs.add(selector) : imgs,
                        minLength = 0,
                        maxLength = imgs.length,
                        data = {},
                        dataFunc = function (index, element) {
                            data[index] = {
                                IMG: element
                            };
                        },
                        completeFunc = function () {
                            if (minLength === maxLength) {
                                resolve(data);
                            }
                        };
                    if (!maxLength) {
                        completeFunc();
                    } else {
                        var loaded = function (i) {
                            var img = imgs.eq(i),
                                imgDOM = img[0];
                            var image = document.createElement('img');
                            image.addEventListener('load', function (e) {
                                dataFunc(minLength, imgDOM);
                                minLength++;
                                completeFunc();
                            });
                            image.addEventListener('error', function () {
                                dataFunc(minLength, imgDOM);
                                minLength++;
                                completeFunc();
                            });
                            image.src = img.attr('src');
                        };
                        for (var i = 0, max = maxLength; i < max; i++) {
                            loaded(i);
                        }
                    }
                } else {
                    resolve();
                }
            });
        },
        imgLoaded: function (selector) {
            var deferred = $.Deferred();
            if (selector.length) {
                var imgs = selector.find('img'),
                    imgs = selector[0].tagName === 'IMG' ? imgs.add(selector) : imgs,
                    minLength = 0,
                    maxLength = imgs.length,
                    data = {},
                    dataFunc = function (index, element) {
                        data[index] = {
                            IMG: element
                        };
                    },
                    completeFunc = function () {
                        if (minLength === maxLength) {
                            deferred.resolve(data);
                        }
                    };
                if (!maxLength) {
                    completeFunc();
                } else {
                    for (var i = 0, max = maxLength; i < max; i++) {
                        (function (index) {
                            var img = imgs.eq(index),
                                imgDOM = img[0];
                            if (imgDOM.complete || img.height() > 0) {
                                dataFunc(minLength, imgDOM);
                                minLength++;
                                completeFunc();
                            } else {
                                img.on('load error', function () {
                                    dataFunc(minLength, imgDOM);
                                    minLength++;
                                    completeFunc();
                                    img.off('load error');
                                });
                            }
                        })(i);
                    }
                }
            } else {
                deferred.resolve();
            }
            return deferred.promise();
        },
        localStorage: {
            set: function (name, val) {
                localStorage.setItem(name, val);
            },
            get: function (name) {
                return localStorage.getItem(name);
            },
            remove: function (name) {
                localStorage.removeItem(name);
            },
            clear: function () {
                localStorage.clear();
            }
        }
    };
    win.Util = Util;
})();

(function (global, factory) {
    global = global;
    global.AwaitLoader = factory();
}(this, function () { 'use strict';
    var Component = (function (isUndefined) {
        var win = window,
            $ = win.jQuery;
        function Component (container, args) {
            if (!(this instanceof Component)) {
                return new Component(container, args);
            }
            var defParams = {
                stateAttr: {
                    played: false
                }
            };
            this.opts = Util.def(defParams, (args || {}));
            if (!(this.obj = $(container)).length) return;
            this.init();
        }
        Component.prototype = {
            init: function () {
                this.buildLayout();
                this.run();
            },
            buildLayout: function () {
                var _this = this;
                Util.def(this, {
                    layout: {
                        stateAttr: {
                            build: false
                        },
                        destroy: function () {
                            if (this.stateAttr.build) {
                                _this.$loader.remove();
                            }
                            this.stateAttr.build = false;
                        },
                        build: function () {
                            this.destroy();
                            if (!this.stateAttr.build) {
                                var layouts = [];
                                layouts.push('<div class="flick_loading await_loading">');
                                layouts.push('<div class="loading__dimmed"></div>');
                                layouts.push('<div class="loading__body">');
                                layouts.push('<div class="loading__wrapper">')
                                layouts.push('<span style="position:absolute;width:0;height:0;overflow:hidden;" tabindex="0" data-focus>로딩중...</span>');
                                layouts.push('<div class="loading_bar">');
                                layouts.push('<span class="dot dot1"></span>');
                                layouts.push('<span class="dot dot2"></span>');
                                layouts.push('<span class="dot dot3"></span>');
                                layouts.push('<span class="dot dot4"></span>');
                                layouts.push('<span class="dot dot5"></span>');
                                layouts.push('<span class="dot dot6"></span>');
                                layouts.push('</div>');
                                layouts.push('</div>');
                                layouts.push('</div>');
                                layouts.push('</div>');
                                var $el = $(layouts.join(''));
                                _this.obj.after($el);
                                // $el.find('[data-focus]').focus();
                                _this.$loader = $el;
                            }
                            this.stateAttr.build = true;
                        }
                    }
                });
            },
            run: function () {
                this.opts.stateAttr.played = true;
                this.layout.build();
            },
            finish: function () {
                this.destroy();
            },
            destroy: function () {
                if (this.opts.stateAttr.played) {
                    this.layout.destroy();
                    this.opts.stateAttr.played = false;
                }
            }
        };
        return Component;
    })();
    return Component;
}));

(function (global, factory) {
    global = global;
    global.Sticky = factory();
}(this, function () { 'use strict';
    var Component = (function (isUndefined) {
        var win = window,
            $ = win.jQuery;
        function Component (container, args) {
            if (!(this instanceof Component)) {
                return new Component(container, args);
            }
            var defParams = {
                init: true,
                obj: container,
                align : 'top', // Could be 'top', 'bottom'
                stickyWrap: '.sticky-wrap',
                customWidth: null,
                limitTarget: null,
                spaceHeight: function () {
                    return 0;
                },
                fixedAutoPlay: false,
                runUpDown: true,
                customEvent: '.Component' + (new Date()).getTime() + Math.random(),
                breakKey: ['spaceHeight','limitTarget'],
                breakpoints: {},
                props: {},
                stateAttr: {
                    disable: false,
                    destroy: false,
                    scroll: null,
                    prevTop: null,
                    resize: null
                },
                requestAttr: {
                    resize: null
                },
                timeAttr: {
                    scrollEnd: null,
                    resizeEnd: null
                },
                scrollEndTime: 60,
                resizeEndTime: (function () {
                    var android = false;
                    if (Util.isDevice && !Util.isIOS) {
                        android = true;
                    }
                    return android ? 500 : 280;
                })(),
                classAttr: {
                    fixed: 'is-fixed',
                    fill: 'is-fill',
                    up: 'is-up',
                    down: 'is-down',
                    limit: 'is-limit',
                    opacityHide: 'opacity-hide'
                },
                on: {
                    init: null,
                    in: null,
                    out: null,
                    up: null,
                    down: null,
                    scroll: null,
                    resize: null
                }
            };
            this.opts = Util.def(defParams, (args || {}));
            if (!(this.obj = $(this.opts.obj)).length) return;
            if (this.opts.init) {
                this.init();
            }
        }
        Component.prototype = {
            init: function () {
                this.buildFlick();
                this.buildSet();
                this.setElements();
                this.buildMotion();
                this.resizeFunc();
                this.bindEvents(true);
                this.obj.data('Sticky', this);
                this.outCallback('init');
            },
            buildFlick: function () {
                var _this = this;
                Util.def(this, {
                    flick: {
                        state: {
                            use: false,
                            play: false
                        },
                        $container: (function () {
                            return _this.obj.closest('.cm-flick-container');
                        })(),
                        $panel: (function () {
                            return _this.obj.closest('.cm-flick-panel');
                        })(),
                        slider: {
                            _container: null,
                            destroy: function () {
                                if (this._container == null) return;
                                this.bindEvents(false);
                            },
                            flickTransitionStart: function () {
                                if (_this.flick.state.play) {
                                    _this.obj.addClass(_this.opts.classAttr.opacityHide);
                                }
                            },
                            flickTransitionEnd: function () {
                                _this.obj.removeClass(_this.opts.classAttr.opacityHide);
                            },
                            flickToPlay: function () {
                                _this.flick.state.play = true;
                                _this.flick.state.use = true;
                                _this.scrollAct();
                            },
                            flickToStop: function () {
                                _this.flick.state.play = false;
                                _this.flick.layout.deactive();
                                _this.obj.removeClass(_this.opts.classAttr.opacityHide);
                            },
                            flickToRemove: function () {
                                _this.flick.state.play = false;
                                _this.flick.layout.deactive();
                                _this.flick.state.use = false;
                                _this.destroy();
                            },
                            bindEvents: function (type) {
                                if (type) {
                                    _this.flick.$container.on(_this.changeEvents('flickTransitionStart'), this.flickTransitionStart.bind(this));
                                    _this.flick.$container.on(_this.changeEvents('flickTransitionEnd'), this.flickTransitionEnd.bind(this));
                                    _this.flick.$panel.on(_this.changeEvents('flickToPlay'), this.flickToPlay.bind(this));
                                    _this.flick.$panel.on(_this.changeEvents('flickToStop'), this.flickToStop.bind(this));
                                    _this.flick.$panel.on(_this.changeEvents('flickToRemove'), this.flickToRemove.bind(this));
                                } else {
                                    _this.flick.$container.off(_this.changeEvents('flickTransitionStart'));
                                    _this.flick.$container.off(_this.changeEvents('flickTransitionEnd'));
                                    _this.flick.$panel.off(_this.changeEvents('flickToPlay'));
                                    _this.flick.$panel.off(_this.changeEvents('flickToStop'));
                                    _this.flick.$panel.off(_this.changeEvents('flickToRemove'));
                                }
                            },
                            build: function () {
                                var $container = _this.flick.$container;
                                var _container = $container.data('CmFlick');
                                if (_container != isUndefined) {
                                    _this.flick.state.use = true;
                                    this._container = _container;
                                    this.bindEvents(true);
                                } else {
                                    _this.flick.state.play = true;
                                }
                            }
                        },
                        layout: {
                            state: false,
                            $el: null,
                            deactive: function () {
                                if (_this.flick.state.use && this.state) {
                                    _this.stickyWrap.append(_this.obj);
                                    if (this.$el != null) {
                                        this.$el.remove();
                                    }
                                    this.state = false;
                                    this.$el = null;
                                }
                            },
                            active: function () {
                                if (_this.flick.state.use && _this.flick.state.play && !this.state) {
                                    var layout = (function () {
                                        var $comp = _this.obj.closest('.cm-component');
                                        var cnrNo = $comp.attr('data-cnr-no');
                                        var layoutOrder = $comp.attr('data-layout-order');
                                        var cornerOrder = $comp.attr('data-corner-order');
                                        var r = null;
                                        if ($comp.length) {
                                            r = $('<div class="cm-component" data-flick-clone>');
                                            if (cnrNo != isUndefined) {
                                                r.attr('data-cnr-no', cnrNo);
                                            }
                                            if (layoutOrder != isUndefined) {
                                                r.attr('data-layout-order', layoutOrder);
                                            }
                                            if (cornerOrder != isUndefined) {
                                                r.attr('data-corner-order', cornerOrder);
                                            }
                                            var $wrap = _this.obj.closest('section');
                                            var $compwrap = $('<div class="' + $wrap.attr('class') + '">');
                                            r.append($compwrap);
                                        }
                                        return r;
                                    })();
                                    $('body').append(_this.obj);
                                    if (layout != null) {
                                        _this.obj.wrap(layout);
                                        this.$el = _this.obj.closest('[data-flick-clone]');
                                    }
                                    this.state = true;
                                }
                            }
                        },
                        destroy: function () {
                            this.layout.deactive();
                            this.slider.destroy();
                            _this.obj.removeClass(_this.opts.classAttr.opacityHide);
                        },
                        build: function () {
                            this.slider.build();
                        }
                    }
                });
                this.flick.build();
            },
            buildSet: function () {
                var _this = this;
                Util.def(this, {
                    set: {
                        before: {
                            init: function () {
                                var bKey = _this.opts.breakKey;
                                var bOpts = {};
                                bKey.forEach(function (val) {
                                    bOpts[val] = _this.opts[val];
                                });
                                _this.bOpts = Util.def({}, bOpts);
                            },
                            initLayout: function () {
                                var stickyWrap = _this.opts.stickyWrap.split('.')[1];
                                var stickyID = '';
                                var dataStickyID = _this.obj.data('sticky-id');
                                if (_this.obj.parent().hasClass(stickyWrap)) {
                                    if (dataStickyID != isUndefined) {
                                        _this.obj.attr('id', dataStickyID);
                                    }
                                } else {
                                    if (dataStickyID != isUndefined) {
                                        stickyID = ' id="' + dataStickyID + '"';
                                    }
                                    var l = '<div class="'+stickyWrap+'"' + stickyID + '></div>';
                                    _this.obj.wrap(l);
                                }
                            },
                            initCustomWidth: function () {
                                if ((_this.opts.customWidth == null) && _this.obj.find('.cm-slider').length) {
                                    _this.opts.customWidth = function () {return ''};
                                }
                            },
                            build: function () {
                                this.init();
                                this.initLayout();
                                this.initCustomWidth();
                            }
                        },
                        opts: function () {
                            var winWidth = Util.winSize().w;
                            var winHeight = Util.winSize().h;
                            var scrollY = win.scrollY;

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
                            var spaceHeight = (function () {
                                var r = Math.floor(breakOpts.spaceHeight(), 10);
                                return r;
                            })();

                            // sectionHeight
                            var sectionHeight = (function () {
                                var targetClientRect = Util.getBoundingClientRect(_this.obj[0]);
                                var h = Math.round(targetClientRect.height);
                                return h;
                            })();

                            // width
                            var swClientRect = Util.getBoundingClientRect(_this.stickyWrap[0]);
                            var width = (function () {
                                if (_this.opts.customWidth != null) {
                                    var w = _this.opts.customWidth();
                                } else {
                                    var w = Math.round(swClientRect.width);
                                }
                                return w;
                            })();

                            var limitMaxOffset = (function () {
                                var limitTarget = breakOpts.limitTarget;
                                if (limitTarget == null || !limitTarget.length) {
                                    limitTarget = $('body');
                                }
                                var targetClientRect = Util.getBoundingClientRect(limitTarget[0]);
                                return (targetClientRect.top + scrollY) + Math.round(targetClientRect.height);
                            })();

                            // offset
                            (function () {
                                var offset = swClientRect.top + scrollY;
                                var offsetBottom = Math.floor(offset + sectionHeight);
                                var minOffset =  Math.ceil(offset - spaceHeight, 10);
                                _this.opts.props['offset'] = offset;
                                _this.opts.props['minOffset'] = minOffset;
                                _this.opts.props['maxOffset'] = limitMaxOffset - spaceHeight - sectionHeight;
                                _this.opts.props['offsetBottom'] = offsetBottom;
                                _this.opts.props['alignOffsetBottom'] = offsetBottom - winHeight;
                            })();

                            _this.opts.props['width'] = width;
                            _this.opts.props['spaceHeight'] = spaceHeight;
                            _this.opts.props['sectionHeight'] = sectionHeight;
                            _this.breakOpts = breakOpts;
                            _this.props = _this.opts.props;
                        },
                        layout: function () {
                            var props = _this.opts.props;
                            var sectionHeight = props['sectionHeight'];
                            _this.stickyWrap.css({
                                'height': sectionHeight
                            });
                            _this.obj.css('width', props['width']);
                        },
                        destroy: function () {
                            if (_this.obj.parent().is(_this.opts.stickyWrap)) {
                                _this.obj.unwrap();
                            }
                            _this.obj.css('width', '');
                        }
                    }
                });
                this.set.before.build();
            },
            setElements: function () {
                this.stickyWrap = this.obj.parent(this.opts.stickyWrap);
            },
            buildMotion: function () {
                var _this = this;
                var align = this.opts.align;
                var props = this.opts.props;
                var classAttr = this.opts.classAttr;
                Util.def(this, {
                    motion: {
                        scroll: {
                            stateAttr: {
                                updown: null,
                                active: null
                            },
                            destroy: function () {
                                this.stateAttr.active = null;
                                _this.obj.removeClass(classAttr.fixed).removeClass(classAttr.limit).css({
                                    'top': '',
                                    'bottom': ''
                                });
                                _this.flick.layout.deactive();
                            },
                            updown: function (dir) {
                                if (dir == 'up') {
                                    if (this.stateAttr.updown != 'up') {
                                        this.stateAttr.updown = 'up';
                                        _this.obj.removeClass(classAttr.down).addClass(classAttr.up);
                                    }
                                } else if (dir == 'down') {
                                    if (this.stateAttr.updown != 'down') {
                                        this.stateAttr.updown = 'down';
                                        _this.obj.removeClass(classAttr.up).addClass(classAttr.down);
                                    }
                                }
                            },
                            build: function () {
                                var winTop = $(win).scrollTop();
                                var spaceHeight = props['spaceHeight'];
                                if (align === 'top') {
                                    var condition = {
                                        in: (props.minOffset <= winTop && winTop <= props.maxOffset)
                                    };
                                } else {
                                    var condition = {
                                        in: winTop <= props.alignOffsetBottom
                                    };
                                }
                                var stateAttr = this.stateAttr;
                                if (condition.in) {
                                    _this.flick.layout.active();
                                    if (align === 'top') {
                                        _this.obj.removeClass(classAttr.limit).addClass(classAttr.fixed).css('top',spaceHeight);
                                    } else {
                                        _this.obj.removeClass(classAttr.limit).addClass(classAttr.fixed).css('bottom',spaceHeight);
                                    }
                                    if (stateAttr.active != 'in') {
                                        stateAttr.active = 'in';
                                        _this.outCallback('in');
                                    }
                                }
                                if (!condition.in) {
                                    if (props.minOffset > winTop) {
                                        _this.obj.removeClass(classAttr.fixed).removeClass(classAttr.limit).css({
                                            'top': '',
                                            'bottom': ''
                                        });
                                    } else if (winTop > props.maxOffset) {
                                        _this.obj.addClass(classAttr.limit);
                                    }
                                    _this.flick.layout.deactive();
                                    if (stateAttr.active != 'out') {
                                        stateAttr.active = 'out';
                                        _this.outCallback('out');
                                    }
                                }
                                if (align === 'top') {
                                    if (props.minOffset >= winTop) {
                                        _this.obj.addClass(classAttr.fill);
                                    } else {
                                        _this.obj.removeClass(classAttr.fill);
                                    }
                                } else {
                                    if (winTop >= props.alignOffsetBottom) {
                                        _this.obj.addClass(classAttr.fill);
                                    } else {
                                        _this.obj.removeClass(classAttr.fill);
                                    }
                                }
                            }
                        },
                        destroy: function () {
                            this.scroll.destroy();
                        },
                        build: function () {
                            this.scroll.build();
                        }
                    }
                })
            },
            changeEvents: function (event) {
                var events = [],
                    eventNames = event.split(' ');
                for (var key in eventNames) {
                    events.push(eventNames[key] + this.opts.customEvent);
                }
                return events.join(' ');
            },
            bindEvents: function (type) {
                if (type) {
                    $(win).on(this.changeEvents('scroll'), this.scrollFunc.bind(this));
                    $(win).on(this.changeEvents('resize orientationchange'), this.resizeFunc.bind(this));
                } else {
                    $(win).off(this.changeEvents('scroll'));
                    $(win).off(this.changeEvents('resize orientationchange'));
                }
            },
            scrollFunc: function () {
                var endTime = this.opts.scrollEndTime;
                this.winTop = $(win).scrollTop();
                if (this.flick.state.play) {
                    if (this.opts.stateAttr.prevTop > this.winTop) {
                        this.opts.props['direction'] = 'REVERSE';
                        if (!this.opts.stateAttr.disable) {
                            if (this.opts.runUpDown) {
                                this.motion.scroll.updown('up');
                            }
                            this.outCallback('up');
                        }
                    } else if (this.opts.stateAttr.prevTop < this.winTop) {
                        this.opts.props['direction'] = 'FORWARD';
                        if (!this.opts.stateAttr.disable) {
                            if (this.winTop > 0) {
                                if (this.opts.runUpDown) {
                                    this.motion.scroll.updown('down');
                                }
                                this.outCallback('down');
                            }
                        }
                    }
                }
                this.opts.stateAttr.prevTop = this.winTop;
                if (this.opts.stateAttr.scroll == null) {
                    this.opts.stateAttr.scroll = this.winTop;
                    this.scrollAnimateFunc();
                }
                win.clearTimeout(this.opts.timeAttr.scrollEnd);
                this.opts.timeAttr.scrollEnd = win.setTimeout(this.scrollEndFunc.bind(this), endTime);
            },
            scrollEndFunc: function () {
                this.opts.stateAttr.scroll = null;
                this.scrollAct();
                Util.cancelAFrame.call(win, this.opts.requestAttr.scroll);
            },
            scrollAnimateFunc: function () {
                this.scrollAct();
                this.opts.requestAttr.scroll = Util.requestAFrame.call(win, this.scrollAnimateFunc.bind(this));
            },
            scrollAct: function () {
                if (this.opts.stateAttr.disable) return;
                if (!this.opts.stateAttr.destroy) {
                    if (this.flick.state.play) {
                    if (this.opts.stateAttr.resize == null) {
                        this.set.opts();
                    }
                    this.motion.build();
                    this.outCallback('scroll');
                    }
                }
            },
            resizeFunc: function (e) {
                var endTime = this.opts.resizeEndTime;
                this.winWidth = Util.winSize().w;
                if (this.opts.stateAttr.resize == null) {
                    this.opts.stateAttr.resize = this.winWidth;
                    this.resizeAnimateFunc();
                }
                win.clearTimeout(this.opts.timeAttr.resizeEnd);
                this.opts.timeAttr.resizeEnd = win.setTimeout(this.resizeEndFunc.bind(this), endTime);
            },
            resizeEndFunc: function () {
                this.opts.stateAttr.resize = null;
                this.resizeAct();
                Util.cancelAFrame.call(win, this.opts.requestAttr.resize);
            },
            resizeAnimateFunc: function () {
                this.resizeAct();
                this.opts.requestAttr.resize = Util.requestAFrame.call(win, this.resizeAnimateFunc.bind(this));
            },
            resizeAct: function () {
                if (this.opts.stateAttr.disable) return;
                if (!this.opts.stateAttr.destroy) {
                    this.set.opts();
                    this.set.layout();
                    this.scrollFunc();
                    this.outCallback('resize');
                }
            },
            refresh: function () {
                if (this.opts.stateAttr.disable) return;
                if (!this.opts.stateAttr.destroy) {
                    this.set.opts();
                    this.set.layout();
                    this.scrollAct();
                    this.outCallback('resize');
                }
            },
            destroy: function () {
                this.opts.stateAttr.destroy = true;
                this.bindEvents(false);
                this.flick.destroy();
                this.set.destroy();
                this.motion.destroy();
            },
            disable: function (type) {
                this.opts.stateAttr.disable = true;
                if ((type != isUndefined) && type) {
                    this.motion.destroy();
                }
            },
            able: function () {
                this.opts.stateAttr.disable = false;
                this.refresh();
            },
            outCallback: function (ing) {
                var callbackObj = this.opts.on[ing];
                if (callbackObj == null) return;
                callbackObj();
            }
        };
        return Component;
    })();
    return Component;
}));

(function (global, factory) {
    global = global;
    global.PictureImg = factory();
}(this, function () { 'use strict';
    var PictureImg = (function (isUndefined) {
        var win = window,
            $ = win.jQuery;
        function PictureImg (container, args) {
            if (!(this instanceof PictureImg)) {
                return new PictureImg(container, args);
            }
            var defParams = {
                container: container,
                target: 'img, .js-img-bg',
                props: [],
                classAttr: {
                    loaded: 'is-loaded',
                    active: 'is-active',
                    bg: 'js-img-bg'
                },
                usePromise: false,
                customEvent: '.PictureImg' + (new Date()).getTime() + Math.random(),
                viewType: null,
                resizeStart: null,
                on: {
                    complete: null
                }
            };
            this.opts = Util.def(defParams, (args || {}));
            if (!(this.obj = $(this.opts.container)).length) return;
            if (this.obj.attr('data-load') == 'true') return;
            this.init();
        }
        PictureImg.prototype = {
            init: function () {
                this.setElements();
                this.initOpts();
                this.resizeFunc();
                if (this.opts.props.length > 1) {
                    this.bindEvents(true);
                }
                this.obj.attr('data-load', 'true');
                this.obj.data('PictureImg', this);
            },
            setElements: function () {
                this.targets = this.obj.find(this.opts.target).hide();
            },
            initOpts: function () {
                var _this = this;
                var mediaParse = function (str) {
                    var parse = '';
                    if ((str !== isUndefined) && (str.length)) {
                        parse = str.replace(/\s/gi, "").replace(/\(/gi, '').replace(/\)/gi, '');
                    } else {
                        parse = '';
                    }
                    return parse;
                };
                for (var min = 0, max = this.targets.length; min < max; min++) {
                    var target = this.targets.eq(min),
                        bgType = target.hasClass(this.opts.classAttr.bg),
                        dataMedia = $.trim(target.attr('data-media')),
                        dataMediaParse = mediaParse(dataMedia),
                        andSplits = dataMediaParse.split('and');
                    if (!dataMedia.length) {
                        dataMediaParse = 'min-width:0';
                        andSplits = ['min-width:0'];
                    }
                    if (dataMediaParse.length) {
                        var data = {
                            'TARGET': target,
                            'BGTYPE': bgType
                        };
                        for (var asMin = 0, asMax = andSplits.length; asMin < asMax; asMin++) {
                            var aSplit = andSplits[asMin],
                                oSplit = aSplit.split(':');
                            if (oSplit[0] === 'min-width') {
                                data['MIN'] = parseInt(oSplit[1]);
                            } else if (oSplit[0] === 'max-width') {
                                data['MAX'] = parseInt(oSplit[1]);
                            }
                        }
                        this.opts.props.push(data);
                    }
                }

                // empty value modify
                var maxCheck = function (num) {
                    var props = _this.opts.props,
                        maxs = [];
                    for (var aMin = 0, aMax = props.length; aMin < aMax; aMin++) {
                        var prop = props[aMin];
                        if (num > prop['MAX']) {
                            maxs.push(prop['MAX']);
                        }
                    }
                    return maxs.length ? (Math.max.apply(null, maxs) + 1) : 0;
                };
                var minCheck = function (num) {
                    var props = _this.opts.props,
                        mins = [];
                    for (var bMin = 0, bMax = props.length; bMin < bMax; bMin++) {
                        var prop = props[bMin];
                        if (num < prop['MIN']) {
                            mins.push(prop['MIN']);
                        }
                    }
                    return mins.length ? (Math.min.apply(null, mins) - 1) : Infinity;
                };
                for (var pMin = 0, pMax = this.opts.props.length; pMin < pMax; pMin++) {
                    var prop = this.opts.props[pMin];
                    if (!prop.hasOwnProperty('MIN')) {
                        prop['MIN'] = maxCheck(prop['MAX']);
                    }
                    if (!prop.hasOwnProperty('MAX')) {
                        prop['MAX'] = minCheck(prop['MIN']);
                    }
                }

                // sort
                this.opts.props.sort(function (a, b) {
                    if (a.MIN > b.MIN) {
                        return 1;
                    }
                    if (a.MIN < b.MIN) {
                        return -1;
                    }
                    if (a.MAX > b.MAX) {
                        return 1;
                    }
                    if (a.MAX < b.MAX) {
                        return -1;
                    }
                    return 0;
                });
            },
            changeEvents: function (event) {
                var events = [],
                    eventNames = event.split(' ');
                for (var key in eventNames) {
                    events.push(eventNames[key] + this.opts.customEvent);
                }
                return events.join(' ');
            },
            bindEvents: function (type) {
                if (type) {
                    $(win).on(this.changeEvents('resize orientationchange'), this.resizeFunc.bind(this));
                } else {
                    $(win).off(this.changeEvents('resize orientationchange'));
                }
            },
            resizeFunc: function () {
                this.winWidth = Util.winSize().w;
                if (this.opts.resizeStart == null) {
                    this.opts.resizeStart = this.winWidth;
                    this.resizeAnimateFunc();
                }
                win.clearTimeout(this.resizeEndTime);
                this.resizeEndTime = win.setTimeout(this.resizeEndFunc.bind(this), 50);
            },
            resizeEndFunc: function () {
                this.opts.resizeStart = null;
                Util.cancelAFrame.call(win, this.resizeRequestFrame);
            },
            resizeAnimateFunc: function () {
                this.setLayout();
                this.resizeRequestFrame = Util.requestAFrame.call(win, this.resizeAnimateFunc.bind(this));
            },
            setLayout: function () {
                var _this = this;
                var classAttr = _this.opts.classAttr;
                var props = this.opts.props,
                    actives = [];
                for (var pMin = 0, pMax = props.length; pMin < pMax; pMin++) {
                    var prop = props[pMin];
                    if (prop['MIN'] <= this.winWidth && prop['MAX'] >= this.winWidth) {
                        actives.push(pMin);
                    }
                }
                if (actives.length) {
                    var activeNum = actives[actives.length - 1];
                    if (this.opts.viewType != activeNum) {
                        if (this.opts.viewType !== null) {
                            props[this.opts.viewType]['TARGET'].hide().removeClass(classAttr.active);
                        }
                        this.opts.viewType = activeNum;
                        if (props[activeNum]['TARGET'].attr('data-srcset') != isUndefined) {
                            _this.obj.removeClass(classAttr.loaded);
                            var url = $.trim(props[activeNum]['TARGET'].attr('data-srcset'));
                            if (url.length) {
                                props[activeNum]['TARGET'].removeAttr('src');
                                if (props[activeNum]['BGTYPE']) {
                                    props[activeNum]['TARGET'].css('background-image', 'url(' + url + ')');
                                } else {
                                    props[activeNum]['TARGET'].attr('src', url);
                                }
                                if (this.opts.usePromise) {
                                    Util.imgPromise(props[activeNum]['TARGET']).then(function () {
                                        _this.obj.addClass(classAttr.loaded);
                                        _this.outCallback('complete');
                                    });
                                } else {
                                    Util.imgLoaded(props[activeNum]['TARGET']).done(function () {
                                        _this.obj.addClass(classAttr.loaded);
                                        _this.outCallback('complete');
                                    });
                                }
                            } else {
                                _this.obj.addClass(classAttr.loaded);
                                _this.outCallback('complete');
                            }
                            props[activeNum]['TARGET'].removeAttr('data-srcset');
                            props[activeNum]['TARGET'].css('display', '').addClass(classAttr.active);
                        } else {
                            props[activeNum]['TARGET'].css('display', '').addClass(classAttr.active);
                            this.outCallback('complete');
                        }
                    }
                } else {
                    if (this.opts.viewType !== null) {
                        this.opts.viewType = null;
                        this.targets.hide().removeClass(classAttr.active);
                        this.outCallback('complete');
                    }
                }
            },
            outCallback: function (ing) {
                var callbackObj = this.opts.on[ing];
                if (callbackObj == null) return;
                callbackObj();
            }
        };
        return PictureImg;
    })();
    return PictureImg;
}));

(function (global, factory) {
    global = global;
    global.LazyPicture = factory();
}(this, function () { 'use strict';
    var Component = (function (isUndefined) {
        var win = window,
            $ = win.jQuery,
            instances = [];
        function Component (container, args) {
            if (!(this instanceof Component)) {
                return new Component(container, args);
            }
            var defParams = {
                offsetTarget: null,
                props: {},
                usePromise: false,
                scrollLazy: true,
                stateAttr: {
                    destroy: false
                },
                on: {
                    complete: null
                }
            };
            this.opts = Util.def(defParams, (args || {}));
            if (!(this.obj = $(container)).length) return;
            this.init();
        }
        Component.prototype = {
            init: function () {
                this.initOpts();
                this.buildSet();
                this.buildPictureLoaded();
                if (this.opts.scrollLazy) {
                    this.buildMotion();
                    this.resizeAct();
                    this.scrollAct();
                    instances.push(this);
                } else {
                    this.pictures.load();
                    this.opts.stateAttr.destroy = true;
                }
            },
            initOpts: function () {
                this.offsetTarget = (this.opts.offsetTarget == null) ? this.obj : this.opts.offsetTarget;
            },
            buildSet: function () {
                var _this = this;
                Util.def(this, {
                    set: {
                        opts: function () {
                            var winHeight = Util.winSize().h;
                            var scrollY = win.scrollY;

                            // offset
                            (function () {
                                var targetClientRect = Util.getBoundingClientRect(_this.offsetTarget[0]);
                                var height = targetClientRect.height;
                                var offset = targetClientRect.top + scrollY;
                                var minOffset =  Math.ceil(offset - winHeight, 10);
                                var maxOffset = Math.ceil(offset + height, 10);
                                _this.opts.props['offset'] = offset;
                                _this.opts.props['minOffset'] = minOffset;
                                _this.opts.props['maxOffset'] = maxOffset;
                            })();

                            _this.props = _this.opts.props;
                        }
                    }
                });
            },
            buildPictureLoaded: function () {
                var _this = this;
                Util.def(this, {
                    pictures: {
                        instance: null,
                        destroy: function () {
                            if (this.instance == null) return;
                            this.instance.destroy();
                            this.instance = null;
                        },
                        load: function () {
                            var hasLoad = _this.obj.attr('data-load') == 'true';
                            if (hasLoad || (this.instance !== null)) return;
                            this.instance = new PictureImg(_this.obj, {
                                usePromise: _this.opts.usePromise,
                                on: {
                                    complete: function () {
                                        _this.outCallback('complete');
                                    }
                                }
                            });
                        }
                    }
                });
            },
            buildMotion: function () {
                var _this = this;
                var props = this.opts.props;
                Util.def(this, {
                    motion: {
                        scroll: {
                            stateAttr: {
                                active: null
                            },
                            getSize: {
                                winHeight: Util.winSize().h,
                                resize: function () {
                                    this.winHeight = Util.winSize().h;
                                }
                            },
                            build: function () {
                                var winTop = $(win).scrollTop();
                                var space = this.getSize.winHeight / 2;
                                // var space = 0;
                                var condition = {
                                    in: ((props.minOffset - space) <= winTop && winTop < (props.maxOffset + space))
                                };
                                var stateAttr = this.stateAttr;
                                if (condition.in) {
                                    if (stateAttr.active != 'in') {
                                        stateAttr.active = 'in';
                                        _this.pictures.load();
                                        _this.opts.stateAttr.destroy = true;
                                    }
                                }
                                if (!condition.in) {
                                    if (stateAttr.active != 'out') {
                                        stateAttr.active = 'out';
                                    }
                                }
                            }
                        },
                        build: function () {
                            this.scroll.build();
                        }
                    }
                });
            },
            scrollAct: function () {
                if (!this.opts.stateAttr.destroy) {
                    this.set.opts();
                    this.motion.build();
                }
            },
            resizeAct: function () {
                if (!this.opts.stateAttr.destroy) {
                    this.motion.scroll.getSize.resize();
                }
            },
            outCallback: function (ing) {
                var callbackObj = this.opts.on[ing];
                if (callbackObj == null) return;
                callbackObj();
            }
        };
        (function () {
            var Events = {
                opts: {
                    customEvent: '.Component' + (new Date()).getTime() + Math.random(),
                    stateAttr: {
                        scroll: null,
                        resize: null
                    },
                    requestAttr: {
                        scroll: null,
                        resize: null
                    },
                    timeAttr: {
                        scrollEnd: null,
                        resizeEnd: null
                    },
                    scrollEndTime: 60,
                    resizeEndTime: 150
                },
                init: function () {
                    this.resizeFunc();
                    this.bindEvents();
                },
                changeEvents: function (event) {
                    var events = [],
                        eventNames = event.split(' ');
                    for (var key in eventNames) {
                        events.push(eventNames[key] + this.opts.customEvent);
                    }
                    return events.join(' ');
                },
                bindEvents: function (type) {
                    $(win).on(this.changeEvents('scroll'), this.scrollFunc.bind(this));
                    $(win).on(this.changeEvents('resize orientationchange'), this.resizeFunc.bind(this));
                },
                scrollFunc: function () {
                    var endTime = this.opts.scrollEndTime;
                    this.winTop = $(win).scrollTop();
                    if (this.opts.stateAttr.scroll == null) {
                        this.opts.stateAttr.scroll = this.winTop;
                        this.scrollAnimateFunc();
                    }
                    win.clearTimeout(this.opts.timeAttr.scrollEnd);
                    this.opts.timeAttr.scrollEnd = win.setTimeout(this.scrollEndFunc.bind(this), endTime);
                },
                scrollEndFunc: function () {
                    this.opts.stateAttr.scroll = null;
                    this.scrollAct();
                    this.delInstance();
                    Util.cancelAFrame.call(win, this.opts.requestAttr.scroll);
                },
                scrollAnimateFunc: function () {
                    this.scrollAct();
                    this.opts.requestAttr.scroll = Util.requestAFrame.call(win, this.scrollAnimateFunc.bind(this));
                },
                scrollAct: function () {
                    instances.forEach(function (instance) {
                        instance.scrollAct();
                    });
                },
                resizeFunc: function (e) {
                    var endTime = this.opts.resizeEndTime;
                    this.winWidth = Util.winSize().w;
                    if (this.opts.stateAttr.resize == null) {
                        this.opts.stateAttr.resize = this.winWidth;
                        this.resizeAnimateFunc();
                    }
                    win.clearTimeout(this.opts.timeAttr.resizeEnd);
                    this.opts.timeAttr.resizeEnd = win.setTimeout(this.resizeEndFunc.bind(this), endTime);
                },
                resizeEndFunc: function () {
                    this.opts.stateAttr.resize = null;
                    this.resizeAct();
                    Util.cancelAFrame.call(win, this.opts.requestAttr.resize);
                },
                resizeAnimateFunc: function () {
                    this.resizeAct();
                    this.opts.requestAttr.resize = Util.requestAFrame.call(win, this.resizeAnimateFunc.bind(this));
                },
                resizeAct: function () {
                    instances.forEach(function (instance) {
                        instance.resizeAct();
                    });
                    this.scrollFunc();
                },
                delInstance: function () {
                    var delInstance = function (max) {
                        var instance = instances[max - 1];
                        if (instance.opts.stateAttr.destroy) {
                            instances.splice(max - 1, 1);
                        }
                    };
                    for (var i = 0, max = instances.length; i < max; max--) {
                        delInstance(max);
                    }
                }
            };
            Events.init();
        })();
        return Component;
    })();
    return Component;
}));

(function (global, factory) {
    global = global;
    global.CmScrolling = factory();
}(this, function () { 'use strict';
    var Component = (function (isUndefined) {
        var win = window,
            $ = win.jQuery;
        function Component(container, args) {
            if (!(this instanceof Component)) {
                return new Component(container, args);
            }
            var defParams = {
                wrapper: 'body',
                inner: '[data-scroll-inner]',
                position: '[data-scroll-position]',
                datas: [],
                renderCustom: function (data) {
                    var layouts = [];
                    layouts.push('<div class="item__wrap">');
                    layouts.push(data[i].title);
                    layouts.push('</div>');
                    return layouts.join('');
                },
                height: 50,
                col: 1,
                size: null,
                effect: 'default',
                currentStackSize: 0,
                stateAttr: {
                    scroll: null,
                    resize: null,
                    endLoaded: false,
                    end: null
                },
                requestAttr: {
                    scroll: null,
                    resize: null
                },
                timeAttr: {
                    scrollEnd: null,
                    resizeEnd: null,
                    setDataEnd: null
                },
                customEvent: '.Component' + (new Date()).getTime() + Math.random(),
                on: {
                    end: null
                }
            };
            this.opts = Util.def(defParams, (args || {}));
            if (!(this.obj = container).length) return;
            this.init();
        };
        Component.prototype = {
            init: function () {
                this.setElements();
                this.initLayout();
                this.setOpts();
                this.bindEvents(true);
                this.scrollFunc();
                this.obj.data('CmScrolling', this);
            },
            setElements: function () {
                this.$inner = this.obj.find(this.opts.inner);
                this.inner = this.$inner[0];
                this.$position = this.$inner.find(this.opts.position);
                var $wrapper = this.opts.wrapper;
                if ((this.opts.wrapper != 'body') && !this.opts.wrapper.length) {
                    $wrapper = $(win);
                } else if (this.opts.wrapper == 'body') {
                    $wrapper = $(win);
                }
                this.$scrollWrap = $wrapper;
                this.scrollWrap = $wrapper[0];
            },
            initLayout: function () {
                if (this.opts.wrapper == 'body') {
                    this.obj.css('height', 'auto');
                }
            },
            setOpts: function () {
                var _this = this;
                var wrapper = this.opts.wrapper;
                this.opts.height = (function () {
                    var _height = 50;
                    var $el = _this.$position.children().eq(0);
                    if ($el.length) {
                        _height = $el[0].getBoundingClientRect().height
                    }
                    return _height;
                })();
                var optHeight = this.opts.height;
                var scrollWrap = this.scrollWrap;
                var swAttr = (function () {
                    return {
                        height: wrapper == 'body' ? Util.winSize().h : scrollWrap.getBoundingClientRect().height
                    };
                })();
                var middleSize = Math.ceil(swAttr.height / optHeight) * this.opts.col;
                this.opts.totalLength = this.opts.datas.length;
                this.opts.middleSize = middleSize;
                this.$inner.css('height', optHeight * Math.ceil(this.opts.datas.length / this.opts.col));
            },
            changeEvents: function (event) {
                var events = [],
                    eventNames = event.split(' ');
                for (var key in eventNames) {
                    events.push(eventNames[key] + this.opts.customEvent);
                }
                return events.join(' ');
            },
            bindEvents: function (type) {
                if (type) {
                    this.$scrollWrap.on(this.changeEvents('scroll'), this.scrollFunc.bind(this));
                    $(win).on(this.changeEvents('resize orientationchange'), this.resizeFunc.bind(this));
                } else {
                    this.$scrollWrap.off(this.changeEvents('scroll'));
                    $(win).off(this.changeEvents('resize orientationchange'));
                }
            },
            scrollFunc: function () {
                this.scrollAct();
                win.clearTimeout(this.opts.timeAttr.scrollEnd);
                this.opts.timeAttr.scrollEnd = win.setTimeout(this.scrollEndFunc.bind(this), 60);
            },
            scrollEndFunc: function () {
                if (this.opts.stateAttr.endLoaded) {
                    if (this.opts.stateAttr.end == null) {
                        var innerCR = this.inner.getBoundingClientRect();
                        var endPoint = (innerCR.height + innerCR.y - Util.winSize().h) < 0;
                        if (endPoint) {
                            this.opts.stateAttr.end = true;
                            this.outCallback('end');
                        }
                    }
                }
                this.opts.stateAttr.endLoaded = true;
            },
            scrollAct: function () {
                if (this.opts.effect != 'default') return;
                var scrollTop = this.$scrollWrap.scrollTop();
                var middleSize = this.opts.middleSize;
                var startNum = Math.floor(scrollTop / this.opts.height) * this.opts.col;
                var bufferedStartNum = startNum - middleSize;
                var bufferedEndNum = startNum + (middleSize * 2);
                // console.log({startNum, bufferedStartNum, bufferedEndNum});
                if (bufferedStartNum < 0) {
                    bufferedStartNum = 0;
                }
                if (bufferedEndNum > this.opts.totalLength) {
                    bufferedEndNum = this.opts.totalLength;
                }
                this.buildLayout(bufferedStartNum, bufferedEndNum);
            },
            resizeFunc: function (e) {
                win.clearTimeout(this.opts.timeAttr.resizeEnd);
                this.opts.timeAttr.resizeEnd = win.setTimeout(this.resizeEndFunc.bind(this), 150);
            },
            resizeEndFunc: function () {
                this.resizeAct();
                var innerCR = this.inner.getBoundingClientRect();
                var endPoint = (innerCR.height + innerCR.y - Util.winSize().h) < 0;
                if (endPoint) {
                    this.scrollFunc();
                }
            },
            resizeAct: function () {
                this.setOpts();
                this.scrollAct();
            },
            buildLayout: function (min, max) {
                var currentTranslateY = min * this.opts.height / this.opts.col;
                if (this.prevTranslateY != currentTranslateY) {
                    this.$position.css('transform', 'translateY(' + currentTranslateY + 'px)');
                }
                this.prevTranslateY = currentTranslateY;
                if (this.prevMin != min) {
                    var datas = this.opts.datas;
                    var layouts = [];
                    for (var i = min, m = max; i < m; i++) {
                        layouts.push(this.opts.renderCustom(datas[i]));
                    }
                    this.$position.empty().append(layouts.join(''));
                }
                this.prevMin = min;
            },
            stackAct: function () {
                var datas = this.opts.datas;
                var layouts = [];
                for (var i = this.opts.currentStackSize, m = datas.length; i < m; i++) {
                    layouts.push(this.opts.renderCustom(datas[i]));
                }
                this.opts.currentStackSize = datas.length;
                this.$position.append(layouts.join(''));
            },
            stackEmpty: function () {
                this.opts.currentStackSize = 0;
                this.$position.empty();
            },
            setData: function (data) {
                this.opts.datas = data;
                this.prevMin = null;
                this.prevTranslateY = null;
                this.setOpts();
                this.scrollAct();
                if (this.opts.effect == 'stack') {
                    this.stackAct();
                }
                win.clearTimeout(this.opts.timeAttr.setDataEnd);
                this.opts.timeAttr.setDataEnd = win.setTimeout(function () {
                    this.setOpts();
                    this.scrollAct();
                    this.opts.stateAttr.end = null;
                    var innerCR = this.inner.getBoundingClientRect();
                    var endPoint = (innerCR.height + innerCR.y - Util.winSize().h) < 0;
                    if (endPoint) {
                        this.scrollFunc();
                    }
                }.bind(this), 10);
            },
            setParam: function (param) {
                Util.def(this.opts, param);
                this.prevMin = null;
                this.prevTranslateY = null;
                this.setOpts();
                this.scrollAct();
            },
            destroy: function () {
                this.bindEvents(false);
            },
            outCallback: function (ing) {
                var cb = this.opts.on[ing];
                if (cb == null) return;
                cb();
            }
        };
        return Component;
    })();
    return Component;
}));

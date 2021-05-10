(function (global, factory) {
    global = global;
    global.MsComponent = factory();
}(this, function () { 'use strict';
    var Common = (function () {
        var win = window,
            doc = win.document;
        return {
            util : {
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
                })(),
                getBoundingClientRect : function (target) {
                    return target.getBoundingClientRect();
                }
            }
        };
    })();
    return Common;
}));

(function (global, factory) {
    global = global;
    global.Component1 = factory();
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
                    destroy : false,
                    isOrientationchange : false
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
                            complete : false,
                            direction : null
                        },
                        props : {
                            min : 0,
                            max : 115,
                            current : null,
                            progress : 0
                        },
                        imgs : {},
                        load : function () {
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
                                        if (m.stateAttr.complete) {
                                            m.pause();
                                            m.draw(maxCount);
                                        } else {
                                            m.draw(0);
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
                        getSize : {
                            winHeight : Util.winSize().h,
                            resize : function () {
                                this.winHeight = Util.winSize().h
                            }
                        },
                        layout : function () {
                            var winHeight = this.getSize.winHeight;
                            var stickyHeight = _this.stickySection.outerHeight(true);
                            var oClientRect = Util.getBoundingClientRect(_this.canvasSection[0]);
                            var sectionW = oClientRect.width;
                            var sectionH = oClientRect.height;
                            _this.canvasSection[0].style.height = (winHeight - stickyHeight) + 'px';
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
                                this.instance.progress(num);
                            }
                            this.props.progress = num;
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
                                    timeline.to(vals, 1.5, {
                                        v : props.max,
                                        onUpdate : function () {
                                            m.draw(Math.round(m.delTweenID(vals).v));
                                        },
                                        onComplete : function () {
                                            m.stateAttr.complete  = true;
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
            },
            buildMagicTween : function () {
                var _this = this;
                Util.def(this, {
                    magictween : {
                        instance : null,
                        animations : [
                            {
                                duration : 5,
                                onStart : function () {
                                    _this.motion.build();
                                },
                                onUpdate : function (props) {
                                    if (_this.magictween.instance == null) return;
                                    var magicTweenProps = _this.magictween.instance.props;
                                    if (magicTweenProps.direction == 'FORWARD') {
                                        _this.motion.build();
                                    } else {
                                        _this.motion.reverse();
                                    }
                                },
                                onComplete : function (props) {
                                    _this.motion.build();
                                }
                            },
                            {
                                duration : 10,
                                onStart : function () {
                                },
                                onUpdate : function () {
                                },
                                onReverseComplete : function () {
                                },
                                onComplete : function (props) {
                                }
                            },
                            {
                                duration : 5,
                                onStart : function () {
                                    _this.motion.build();
                                },
                                onUpdate : function (props) {
                                    if (_this.magictween.instance == null) return;
                                    var magicTweenProps = _this.magictween.instance.props;
                                    if (magicTweenProps.direction == 'FORWARD') {
                                        _this.motion.reverse();
                                    } else {
                                        _this.motion.build();
                                    }
                                },
                                onComplete : function (props) {
                                    _this.motion.reverse();
                                }
                            }
                        ],
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
                            var outFunc = function () {
                                var scopeDir = _this.magictween.instance.motion.scroll.scope.hookOut;
                                if (scopeDir == 'TOP') {
                                    _this.motion.reverse();
                                } else if (scopeDir == 'BOTTOM') {
                                    _this.motion.reverse();
                                }
                            };
                            this.instance = new MagicScroll(_this.obj, {
                                init : false,
                                fixedAutoPlay : true,
                                animations : _this.magictween.animations,
                                duration : '500%',
                                spaceHeight : function () {
                                    return _this.stickySection.outerHeight(true);
                                },
                                breakpoints : {
                                    768 : {
                                        duration : '300%',
                                        triggerHook : 0.5
                                    }
                                },
                                on : {
                                    init : function () {
                                        win.setTimeout(function () {
                                            outFunc();
                                        }, 150);
                                    },
                                    in : function () {
                                    },
                                    out : function () {
                                    },
                                    hookIn : function () {
                                    },
                                    hookOut : function () {
                                        outFunc();
                                    },
                                    update : function () {
                                        if (_this.magictween.instance == null) return;
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
                            this.motion.getSize.resize();
                            this.magictween.getSize.resize();
                        }
                    } else {
                        this.motion.getSize.resize();
                        this.magictween.getSize.resize();
                    }
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
                obj : '.test-section'
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
                        new Component1(_this.obj.eq(index));
                    })(i);
                }
            }
        };
        return new Call();
    })();
    return Call;
}));

(function (global, factory) {
    global = global;
    global.Component2 = factory();
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
                    destroy : false,
                    isOrientationchange : false
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
                            complete : false,
                            direction : null
                        },
                        props : {
                            min : 0,
                            max : 115,
                            current : null,
                            progress : 0
                        },
                        imgs : {},
                        load : function () {
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
                                        if (m.stateAttr.complete) {
                                            m.pause();
                                            m.draw(maxCount);
                                        } else {
                                            m.draw(0);
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
                                this.instance.progress(num);
                            }
                            this.props.progress = num;
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
                                    timeline.to(vals, 1.5, {
                                        v : props.max,
                                        onUpdate : function () {
                                            m.draw(Math.round(m.delTweenID(vals).v));
                                        },
                                        onComplete : function () {
                                            m.stateAttr.complete  = true;
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
            },
            buildMagicTween : function () {
                var _this = this;
                Util.def(this, {
                    magictween : {
                        instance : null,
                        animations : [
                            {
                                duration : 5,
                                onStart : function () {
                                    _this.motion.build();
                                },
                                onUpdate : function (props) {
                                    if (_this.magictween.instance == null) return;
                                    var magicTweenProps = _this.magictween.instance.props;
                                    if (magicTweenProps.direction == 'FORWARD') {
                                        _this.motion.build();
                                    } else {
                                        _this.motion.reverse();
                                    }
                                },
                                onComplete : function (props) {
                                    _this.motion.build();
                                }
                            },
                            {
                                duration : 10,
                                onStart : function () {
                                },
                                onUpdate : function () {
                                },
                                onReverseComplete : function () {
                                },
                                onComplete : function (props) {
                                }
                            },
                            {
                                duration : 5,
                                onStart : function () {
                                    _this.motion.build();
                                },
                                onUpdate : function (props) {
                                    if (_this.magictween.instance == null) return;
                                    var magicTweenProps = _this.magictween.instance.props;
                                    if (magicTweenProps.direction == 'FORWARD') {
                                        _this.motion.reverse();
                                    } else {
                                        _this.motion.build();
                                    }
                                },
                                onComplete : function (props) {
                                    _this.motion.reverse();
                                }
                            }
                        ],
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
                            var outFunc = function () {
                                var scopeDir = _this.magictween.instance.motion.scroll.scope.hookOut;
                                if (scopeDir == 'TOP') {
                                    _this.motion.reverse();
                                } else if (scopeDir == 'BOTTOM') {
                                    _this.motion.reverse();
                                }
                            };
                            this.instance = new MagicScroll(_this.obj, {
                                init : false,
                                fixedAutoPlay : true,
                                animations : _this.magictween.animations,
                                duration : '500%',
                                spaceHeight : function () {
                                    var winHeight = m.getSize.winHeight;
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
                                    init : function () {
                                        win.setTimeout(function () {
                                            outFunc();
                                        }, 150);
                                    },
                                    in : function () {
                                    },
                                    out : function () {
                                    },
                                    hookIn : function () {
                                    },
                                    hookOut : function () {
                                        outFunc();
                                    },
                                    update : function () {
                                        if (_this.magictween.instance == null) return;
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
                obj : '.test-section2'
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
                        new Component2(_this.obj.eq(index));
                    })(i);
                }
            }
        };
        return new Call();
    })();
    return Call;
}));

(function (global, factory) {
    global = global;
    global.Component3 = factory();
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
                    destroy : false,
                    isOrientationchange : false
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
                            duration : 0,
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
                                },
                                onComplete : function (props) {
                                    _this.motion.pause().progress(1);
                                }
                            },
                            {
                                duration : 5,
                                onStart : function () {
                                },
                                onUpdate : function () {
                                },
                                onReverseComplete : function () {
                                },
                                onComplete : function (props) {
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
                        getSize : {
                            winHeight : Util.winSize().h,
                            resize : function () {
                                this.winHeight = Util.winSize().h
                            }
                        },
                        build : function () {
                            var m = this;
                            this.instance = new MagicScroll(_this.obj, {
                                animations : _this.magictween.animations,
                                pushFollowers : false,
                                duration : '500%',
                                spaceHeight : function () {
                                    var winHeight = m.getSize.winHeight;
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
                                    },
                                    out : function () {
                                    },
                                    hookIn : function () {
                                    },
                                    hookOut : function () {
                                    },
                                    update : function () {
                                        if (_this.magictween.instance == null) return;
                                    }
                                }
                            });
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
                obj : '.test-section3'
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
                        new Component3(_this.obj.eq(index));
                    })(i);
                }
            }
        };
        return new Call();
    })();
    return Call;
}));

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
                    destroy : false,
                    isOrientationchange : false
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
                                },
                                onComplete : function (props) {
                                    _this.motion.pause().progress(1);
                                }
                            },
                            {
                                duration : 5,
                                onStart : function () {
                                },
                                onUpdate : function () {
                                },
                                onReverseComplete : function () {
                                },
                                onComplete : function (props) {
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
                        getSize : {
                            winHeight : Util.winSize().h,
                            resize : function () {
                                this.winHeight = Util.winSize().h
                            }
                        },
                        build : function () {
                            var m = this;
                            this.instance = new MagicScroll(_this.obj, {
                                animations : _this.magictween.animations,
                                duration : '500%',
                                spaceHeight : function () {
                                    var winHeight = m.getSize.winHeight;
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
                                    },
                                    out : function () {
                                    },
                                    hookIn : function () {
                                    },
                                    hookOut : function () {
                                    },
                                    update : function () {
                                        if (_this.magictween.instance == null) return;
                                    },
                                    beforeUpdate : function () {
                                        if (_this.magictween.instance == null) return;
                                    },
                                    afterUpdate : function () {
                                        if (_this.magictween.instance == null) return;
                                    },
                                    allUpdate : function () {
                                        if (_this.magictween.instance == null) return;
                                        console.log('allUpdate', _this.magictween.instance.props.allProgress);
                                    }
                                }
                            });
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

(function (global, factory) {
    global = global;
    global.Component5 = factory();
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
                    destroy : false,
                    isOrientationchange : false
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
                                },
                                onComplete : function (props) {
                                    _this.motion.pause().progress(1);
                                }
                            },
                            {
                                duration : 5,
                                onStart : function () {
                                },
                                onUpdate : function () {
                                },
                                onReverseComplete : function () {
                                },
                                onComplete : function (props) {
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
                        getSize : {
                            winHeight : Util.winSize().h,
                            resize : function () {
                                this.winHeight = Util.winSize().h
                            }
                        },
                        build : function () {
                            var m = this;
                            this.instance = new MagicScroll(_this.obj, {
                                dev : true,
                                animations : _this.magictween.animations,
                                duration : '500%',
                                initFollowers : false,
                                spaceHeight : function () {
                                    var winHeight = m.getSize.winHeight;
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
                                    },
                                    out : function () {
                                    },
                                    hookIn : function () {
                                    },
                                    hookOut : function () {
                                    },
                                    update : function () {
                                        if (_this.magictween.instance == null) return;
                                    }
                                }
                            });
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
                obj : '.test-section5'
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
                        new Component5(_this.obj.eq(index));
                    })(i);
                }
            }
        };
        return new Call();
    })();
    return Call;
}));

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
                                        win.setTimeout(function () {
                                            beforeUpdateFunc();
                                        }, 150);
                                    },
                                    in : function () {
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
                                    },
                                    hookOut : function () {
                                    },
                                    update : function () {
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

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

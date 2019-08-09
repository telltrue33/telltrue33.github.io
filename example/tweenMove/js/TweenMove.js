var _hjScope = (typeof(module) !== "undefined" && module.exports && typeof(global) !== "undefined") ? global : this || window; //helps ensure compatibility with AMD/RequireJS and CommonJS/Node
(_hjScope._hjQueue || (_hjScope._hjQueue = [])).push( function() {
    "use strict";

     /* CSSPlugin */
    _hjScope._hjDefine("plugins.CSSPlugin", ["plugins.TweenPlugin","TweenMove"], function(TweenPlugin, TweenMove) {

        /** @constructor **/
        var CSSPlugin = function() {
                TweenPlugin.call(this, "css");
                this._overwriteProps.length = 0;
                this.setRatio = CSSPlugin.prototype.setRatio; //speed optimization (avoid prototype lookup on this "hot" method)
            },
            _globals = _hjScope._hjDefine.globals,
            _hasPriority, //turns true whenever a CSSPropTween instance is created that has a priority other than 0. This helps us discern whether or not we should spend the time organizing the linked list or not after a CSSPlugin's _onInitTween() method is called.
            _suffixMap, //we set this in _onInitTween() each time as a way to have a persistent variable we can use in other methods like _parse() without having to pass it around as a parameter and we keep _parse() decoupled from a particular CSSPlugin instance
            _cs, //computed style (we store this in a shared variable to conserve memory and make minification tighter
            _overwriteProps, //alias to the currently instantiating CSSPlugin's _overwriteProps array. We use this closure in order to avoid having to pass a reference around from method to method and aid in minification.
            _specialProps = {},
            p = CSSPlugin.prototype = new TweenPlugin("css");

        p.constructor = CSSPlugin;
        CSSPlugin.API = 2;
        p = "px"; //we'll reuse the "p" variable to keep file size down
        CSSPlugin.suffixMap = {top:p, right:p, bottom:p, left:p, width:p, height:p, fontSize:p, padding:p, margin:p, perspective:p, lineHeight:""};

        var _suffixExp = /(?:\d|\-|\+|=|#|\.)*/g,
            _opacityValExp = /opacity:([^;]*)/i,
            _rgbhslExp = /^(rgb|hsl)/,
            _capsExp = /([A-Z])/g,
            _complexExp = /[\s,\(]/i, //for testing a string to find if it has a space, comma, or open parenthesis (clues that it's a complex value)
            _dummyElement = {style:{}},
            _doc = _hjScope.document || {createElement: function() {return _dummyElement;}},
            _createElement = function(type, ns) {
                var e = _doc.createElementNS ? _doc.createElementNS(ns || "http://www.w3.org/1999/xhtml", type) : _doc.createElement(type);
                return e.style ? e : _doc.createElement(type); //some environments won't allow access to the element's style when created with a namespace in which case we default to the standard createElement() to work around the issue. Also note that when GSAP is embedded directly inside an SVG file, createElement() won't allow access to the style object in Firefox (see https://greensock.com/forums/topic/20215-problem-using-TweenLab-in-standalone-self-containing-svg-file-err-cannot-set-property-csstext-of-undefined/).
            },
            _internals = CSSPlugin._internals = {_specialProps:_specialProps}, //provides a hook to a few internal methods that we need to access from inside other plugins
            _agent = (_hjScope.navigator || {}).userAgent || "",
            _autoRound,
            _reqSafariFix, //we won't apply the Safari transform fix until we actually come across a tween that affects a transform property (to maintain best performance).

            _isSafari,
            _isFirefox, //Firefox has a bug that causes 3D transformed elements to randomly disappear unless a repaint is forced after each update on each element.
            _isSafariLT6, //Safari (and Android 4 which uses a flavor of Safari) has a bug that prevents changes to "top" and "left" properties from rendering properly if changed on the same frame as a transform UNLESS we set the element's WebkitBackfaceVisibility to hidden (weird, I know). Doing this for Android 3 and earlier seems to actually cause other problems, though (fun!)
            _ieVers,
            _supportsOpacity = (function() { //we set _isSafari, _ieVers, _isFirefox, and _supportsOpacity all in one function here to reduce file size slightly, especially in the minified version.
                var i = _agent.indexOf("Android"),
                    a = _createElement("a");
                _isSafari = (_agent.indexOf("Safari") !== -1 && _agent.indexOf("Chrome") === -1 && (i === -1 || parseFloat(_agent.substr(i+8, 2)) > 3));
                _isSafariLT6 = (_isSafari && (parseFloat(_agent.substr(_agent.indexOf("Version/")+8, 2)) < 6));
                _isFirefox = (_agent.indexOf("Firefox") !== -1);
                if ((/MSIE ([0-9]{1,}[\.0-9]{0,})/).exec(_agent) || (/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/).exec(_agent)) {
                    _ieVers = parseFloat( RegExp.$1 );
                }
                if (!a) {
                    return false;
                }
                a.style.cssText = "top:1px;opacity:.55;";
                return /^0.55/.test(a.style.opacity);
            }()),
            _target, //when initting a CSSPlugin, we set this variable so that we can access it from within many other functions without having to pass it around as params
            _index, //when initting a CSSPlugin, we set this variable so that we can access it from within many other functions without having to pass it around as params

            _computedStyleScope = (typeof(window) !== "undefined" ? window : _doc.defaultView || {getComputedStyle:function() {}}),
            _getComputedStyle = function(e) {
                return _computedStyleScope.getComputedStyle(e); //to avoid errors in Microsoft Edge, we need to call getComputedStyle() from a specific scope, typically window.
            },
            _getStyle = CSSPlugin.getStyle = function(t, p, cs, calc, dflt) {
                var rv;
                if (!_supportsOpacity) if (p === "opacity") { //several versions of IE don't use the standard "opacity" property - they use things like filter:alpha(opacity=50), so we parse that here.
                    return _getIEOpacity(t);
                }
                if (!calc && t.style[p]) {
                    rv = t.style[p];
                } else if ((cs = cs || _getComputedStyle(t))) {
                    rv = cs[p] || cs.getPropertyValue(p) || cs.getPropertyValue(p.replace(_capsExp, "-$1").toLowerCase());
                } else if (t.currentStyle) {
                    rv = t.currentStyle[p];
                }
                return (dflt != null && (!rv || rv === "none" || rv === "auto" || rv === "auto auto")) ? dflt : rv;
            };

        var CSSPropTween = _internals.CSSPropTween = function(t, p, s, c, next, type, n, r, pr, b, e) {
                this.t = t; //target
                this.p = p; //property
                this.s = s; //starting value
                this.c = c; //change value
                this.n = n || p; //name that this CSSPropTween should be associated to (usually the same as p, but not always - n is what overwriting looks at)
                if (!(t instanceof CSSPropTween)) {
                    _overwriteProps.push(this.n);
                }
                this.r = !r ? r : (typeof(r) === "function") ? r : Math.round; //round (boolean)
                this.type = type || 0; //0 = normal tween, -1 = non-tweening (in which case xs0 will be applied to the target's property, like tp.t[tp.p] = tp.xs0), 1 = complex-value SpecialProp, 2 = custom setRatio() that does all the work
                if (pr) {
                    this.pr = pr;
                    _hasPriority = true;
                }
                this.b = (b === undefined) ? s : b;
                this.e = (e === undefined) ? s + c : e;
                if (next) {
                    this._next = next;
                    next._prev = this;
                }
            },
            i = 9;

        p = CSSPropTween.prototype;
        p.l = p.pr = 0; //length (number of extra properties like xn1, xn2, xn3, etc.
        while (--i > 0) {
            p["xn" + i] = 0;
            p["xs" + i] = "";
        }
        p.xs0 = "";
        p._next = p._prev = p.xfirst = p.data = p.plugin = p.setRatio = p.rxp = null;
        
        p.x = p.y = p.z = p.skewX = p.skewY = p.rotation = p.rotationX = p.rotationY = p.zOrigin = p.xPercent = p.yPercent = p.xOffset = p.yOffset = 0;
        p.scaleX = p.scaleY = p.scaleZ = 1;

        p = CSSPlugin.prototype;
        p._firstPT = p._lastParsedTransform = p._transform = null;

        //gets called when the tween renders for the first time. This kicks everything off, recording start/end values, etc.
        p._onInitTween = function(target, vars, tween, index) {
            if (!target.nodeType) { //css is only for dom elements
                return false;
            }
            this._target = _target = target;
            this._tween = tween;
            this._vars = vars;
            _index = index;
            _autoRound = vars.autoRound;
            _hasPriority = false;
            _suffixMap = vars.suffixMap || CSSPlugin.suffixMap;
            _cs = _getComputedStyle(target, "");
            _overwriteProps = this._overwriteProps;
            var style = target.style,
                v, pt, pt2, first, last, next, zIndex, tpt, threeD;
            if (_reqSafariFix) if (style.zIndex === "") {
                v = _getStyle(target, "zIndex", _cs);
                if (v === "auto" || v === "") {
                    //corrects a bug in [non-Android] Safari that prevents it from repainting elements in their new positions if they don't have a zIndex set. We also can't just apply this inside _parseTransform() because anything that's moved in any way (like using "left" or "top" instead of transforms like "x" and "y") can be affected, so it is best to ensure that anything that's tweening has a z-index. Setting "WebkitPerspective" to a non-zero value worked too except that on iOS Safari things would flicker randomly. Plus zIndex is less memory-intensive.
                    this._addLazySet(style, "zIndex", 0);
                }
            }

            if (typeof(vars) === "string") {
                first = style.cssText;
                v = _getAllStyles(target, _cs);
                style.cssText = first + ";" + vars;
                v = _cssDif(target, v, _getAllStyles(target)).difs;
                if (!_supportsOpacity && _opacityValExp.test(vars)) {
                    v.opacity = parseFloat( RegExp.$1 );
                }
                vars = v;
                style.cssText = first;
            }

            if (vars.className) { //className tweens will combine any differences they find in the css with the vars that are passed in, so {className:"myClass", scale:0.5, left:20} would work.
                this._firstPT = pt = _specialProps.className.parse(target, vars.className, "className", this, null, null, vars);
            } else {
                this._firstPT = pt = this.parse(target, vars, null);
            }

            if (this._transformType) {
                threeD = (this._transformType === 3);
                if (!_transformProp) {
                    style.zoom = 1; //helps correct an IE issue.
                } else if (_isSafari) {
                    _reqSafariFix = true;
                    //if zIndex isn't set, iOS Safari doesn't repaint things correctly sometimes (seemingly at random).
                    if (style.zIndex === "") {
                        zIndex = _getStyle(target, "zIndex", _cs);
                        if (zIndex === "auto" || zIndex === "") {
                            this._addLazySet(style, "zIndex", 0);
                        }
                    }
                    //Setting WebkitBackfaceVisibility corrects 3 bugs:
                    // 1) [non-Android] Safari skips rendering changes to "top" and "left" that are made on the same frame/render as a transform update.
                    // 2) iOS Safari sometimes neglects to repaint elements in their new positions. Setting "WebkitPerspective" to a non-zero value worked too except that on iOS Safari things would flicker randomly.
                    // 3) Safari sometimes displayed odd artifacts when tweening the transform (or WebkitTransform) property, like ghosts of the edges of the element remained. Definitely a browser bug.
                    //Note: we allow the user to override the auto-setting by defining WebkitBackfaceVisibility in the vars of the tween.
                    if (_isSafariLT6) {
                        this._addLazySet(style, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (threeD ? "visible" : "hidden"));
                    }
                }
                pt2 = pt;
                while (pt2 && pt2._next) {
                    pt2 = pt2._next;
                }
                tpt = new CSSPropTween(target, "transform", 0, 0, null, 2);
                this._linkCSSP(tpt, null, pt2);
                tpt.setRatio = _transformProp ? _setTransformRatio : _setIETransformRatio;
                tpt.data = this._transform || _getTransform(target, _cs, true);
                tpt.tween = tween;
                tpt.pr = -1; //ensures that the transforms get applied after the components are updated.
                _overwriteProps.pop(); //we don't want to force the overwrite of all "transform" tweens of the target - we only care about individual transform properties like scaleX, rotation, etc. The CSSPropTween constructor automatically adds the property to _overwriteProps which is why we need to pop() here.
            }

            if (_hasPriority) {
                //reorders the linked list in order of pr (priority)
                while (pt) {
                    next = pt._next;
                    pt2 = first;
                    while (pt2 && pt2.pr > pt.pr) {
                        pt2 = pt2._next;
                    }
                    if ((pt._prev = pt2 ? pt2._prev : last)) {
                        pt._prev._next = pt;
                    } else {
                        first = pt;
                    }
                    if ((pt._next = pt2)) {
                        pt2._prev = pt;
                    } else {
                        last = pt;
                    }
                    pt = next;
                }
                this._firstPT = first;
            }
            return true;
        };

        p.parse = function(target, vars, pt, plugin) {
            var style = target.style,
                p, sp, bn, en, bs, es, bsfx, esfx, isStr, rel;
            for (p in vars) {
                es = vars[p]; //ending value string
                sp = _specialProps[p]; //SpecialProp lookup.
                if (typeof(es) === "function" && !(sp && sp.allowFunc)) {
                    es = es(_index, _target);
                }
                if (sp) {
                    pt = sp.parse(target, es, p, this, pt, plugin, vars);
                } else if (p.substr(0,2) === "--") { //for tweening CSS variables (which always start with "--"). To maximize performance and simplicity, we bypass CSSPlugin altogether and just add a normal property tween to the tween instance itself.
                    this._tween._propLookup[p] = this._addTween.call(this._tween, target.style, "setProperty", _getComputedStyle(target).getPropertyValue(p) + "", es + "", p, false, p);
                    continue;
                } else {
                    bs = _getStyle(target, p, _cs) + "";
                    isStr = (typeof(es) === "string");
                    if (p === "color" || p === "fill" || p === "stroke" || p.indexOf("Color") !== -1 || (isStr && _rgbhslExp.test(es))) { //Opera uses background: to define color sometimes in addition to backgroundColor:
                        if (!isStr) {
                            es = _parseColor(es);
                            es = ((es.length > 3) ? "rgba(" : "rgb(") + es.join(",") + ")";
                        }
                        pt = _parseComplex(style, p, bs, es, true, "transparent", pt, 0, plugin);

                    } else if (isStr && _complexExp.test(es)) {
                        pt = _parseComplex(style, p, bs, es, true, null, pt, 0, plugin);

                    } else {
                        bn = parseFloat(bs);
                        bsfx = (bn || bn === 0) ? bs.substr((bn + "").length) : ""; //remember, bs could be non-numeric like "normal" for fontWeight, so we should default to a blank suffix in that case.

                        if (bs === "" || bs === "auto") {
                            if (p === "width" || p === "height") {
                                bn = _getDimension(target, p, _cs);
                                bsfx = "px";
                            } else if (p === "left" || p === "top") {
                                bn = _calculateOffset(target, p, _cs);
                                bsfx = "px";
                            } else {
                                bn = (p !== "opacity") ? 0 : 1;
                                bsfx = "";
                            }
                        }

                        rel = (isStr && es.charAt(1) === "=");
                        if (rel) {
                            en = parseInt(es.charAt(0) + "1", 10);
                            es = es.substr(2);
                            en *= parseFloat(es);
                            esfx = es.replace(_suffixExp, "");
                        } else {
                            en = parseFloat(es);
                            esfx = isStr ? es.replace(_suffixExp, "") : "";
                        }

                        if (esfx === "") {
                            esfx = (p in _suffixMap) ? _suffixMap[p] : bsfx; //populate the end suffix, prioritizing the map, then if none is found, use the beginning suffix.
                        }

                        es = (en || en === 0) ? (rel ? en + bn : en) + esfx : vars[p]; //ensures that any += or -= prefixes are taken care of. Record the end value before normalizing the suffix because we always want to end the tween on exactly what they intended even if it doesn't match the beginning value's suffix.
                        //if the beginning/ending suffixes don't match, normalize them...
                        if (bsfx !== esfx) if (esfx !== "" || p === "lineHeight") if (en || en === 0) if (bn) { //note: if the beginning value (bn) is 0, we don't need to convert units!
                            bn = _convertToPixels(target, p, bn, bsfx);
                            if (esfx === "%") {
                                bn /= _convertToPixels(target, p, 100, "%") / 100;
                                if (vars.strictUnits !== true) { //some browsers report only "px" values instead of allowing "%" with getComputedStyle(), so we assume that if we're tweening to a %, we should start there too unless strictUnits:true is defined. This approach is particularly useful for responsive designs that use from() tweens.
                                    bs = bn + "%";
                                }

                            } else if (esfx === "em" || esfx === "rem" || esfx === "vw" || esfx === "vh") {
                                bn /= _convertToPixels(target, p, 1, esfx);

                            //otherwise convert to pixels.
                            } else if (esfx !== "px") {
                                en = _convertToPixels(target, p, en, esfx);
                                esfx = "px"; //we don't use bsfx after this, so we don't need to set it to px too.
                            }
                            if (rel) if (en || en === 0) {
                                es = (en + bn) + esfx; //the changes we made affect relative calculations, so adjust the end value here.
                            }
                        }

                        if (rel) {
                            en += bn;
                        }

                        if ((bn || bn === 0) && (en || en === 0)) { //faster than isNaN(). Also, previously we required en !== bn but that doesn't really gain much performance and it prevents _parseToProxy() from working properly if beginning and ending values match but need to get tweened by an external plugin anyway. For example, a bezier tween where the target starts at left:0 and has these points: [{left:50},{left:0}] wouldn't work properly because when parsing the last point, it'd match the first (current) one and a non-tweening CSSPropTween would be recorded when we actually need a normal tween (type:0) so that things get updated during the tween properly.
                            pt = new CSSPropTween(style, p, bn, en - bn, pt, 0, p, (_autoRound !== false && (esfx === "px" || p === "zIndex")), 0, bs, es);
                            pt.xs0 = esfx;
                            //DEBUG: _log("tween "+p+" from "+pt.b+" ("+bn+esfx+") to "+pt.e+" with suffix: "+pt.xs0);
                        } else if (style[p] === undefined || !es && (es + "" === "NaN" || es == null)) {
                            _log("invalid " + p + " tween value: " + vars[p]);
                        } else {
                            pt = new CSSPropTween(style, p, en || bn || 0, 0, pt, -1, p, false, 0, bs, es);
                            pt.xs0 = (es === "none" && (p === "display" || p.indexOf("Style") !== -1)) ? bs : es; //intermediate value should typically be set immediately (end value) except for "display" or things like borderTopStyle, borderBottomStyle, etc. which should use the beginning value during the tween.
                            //DEBUG: _log("non-tweening value "+p+": "+pt.xs0);
                        }
                    }
                }
                if (plugin) if (pt && !pt.plugin) {
                    pt.plugin = plugin;
                }
            }
            return pt;
        };

        //gets called every time the tween updates, passing the new ratio (typically a value between 0 and 1, but not always (for example, if an Elastic.easeOut is used, the value can jump above 1 mid-tween). It will always start and 0 and end at 1.
        p.setRatio = function(v) {
            var pt = this._firstPT,
                min = 0.000001,
                val, str, i;
            //at the end of the tween, we set the values to exactly what we received in order to make sure non-tweening values (like "position" or "float" or whatever) are set and so that if the beginning/ending suffixes (units) didn't match and we normalized to px, the value that the user passed in is used here. We check to see if the tween is at its beginning in case it's a from() tween in which case the ratio will actually go from 1 to 0 over the course of the tween (backwards).
            if (v === 1 && (this._tween._time === this._tween._duration || this._tween._time === 0)) {
                while (pt) {
                    if (pt.type !== 2) {
                        if (pt.r && pt.type !== -1) {
                            val = pt.r(pt.s + pt.c);
                            if (!pt.type) {
                                pt.t[pt.p] = val + pt.xs0;
                            } else if (pt.type === 1) { //complex value (one that typically has multiple numbers inside a string, like "rect(5px,10px,20px,25px)"
                                i = pt.l;
                                str = pt.xs0 + val + pt.xs1;
                                for (i = 1; i < pt.l; i++) {
                                    str += pt["xn"+i] + pt["xs"+(i+1)];
                                }
                                pt.t[pt.p] = str;
                            }
                        } else {
                            pt.t[pt.p] = pt.e;
                        }
                    } else {
                        pt.setRatio(v);
                    }
                    pt = pt._next;
                }

            } else if (v || !(this._tween._time === this._tween._duration || this._tween._time === 0) || this._tween._rawPrevTime === -0.000001) {
                while (pt) {
                    val = pt.c * v + pt.s;
                    if (pt.r) {
                        val = pt.r(val);
                    } else if (val < min) if (val > -min) {
                        val = 0;
                    }
                    if (!pt.type) {
                        pt.t[pt.p] = val + pt.xs0;
                    } else if (pt.type === 1) { //complex value (one that typically has multiple numbers inside a string, like "rect(5px,10px,20px,25px)"
                        i = pt.l;
                        if (i === 2) {
                            pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2;
                        } else if (i === 3) {
                            pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3;
                        } else if (i === 4) {
                            pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3 + pt.xn3 + pt.xs4;
                        } else if (i === 5) {
                            pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3 + pt.xn3 + pt.xs4 + pt.xn4 + pt.xs5;
                        } else {
                            str = pt.xs0 + val + pt.xs1;
                            for (i = 1; i < pt.l; i++) {
                                str += pt["xn"+i] + pt["xs"+(i+1)];
                            }
                            pt.t[pt.p] = str;
                        }

                    } else if (pt.type === -1) { //non-tweening value
                        pt.t[pt.p] = pt.xs0;

                    } else if (pt.setRatio) { //custom setRatio() for things like SpecialProps, external plugins, etc.
                        pt.setRatio(v);
                    }
                    pt = pt._next;
                }

            //if the tween is reversed all the way back to the beginning, we need to restore the original values which may have different units (like % instead of px or em or whatever).
            } else {
                while (pt) {
                    if (pt.type !== 2) {
                        pt.t[pt.p] = pt.b;
                    } else {
                        pt.setRatio(v);
                    }
                    pt = pt._next;
                }
            }
        };

        TweenPlugin.activate([CSSPlugin]);
        return CSSPlugin;

    }, true);

});

 /* Base classes like TweenMove, SimpleTimeline, Ease, Ticker, etc. */
(function(window, moduleName) {

        "use strict";
        var _exports = {},
            _doc = window.document,
            _globals = window.GreenSockGlobals = window.GreenSockGlobals || window,
            existingModule = _globals[moduleName];
        if (existingModule) {
            if (typeof(module) !== "undefined" && module.exports) { //node
                module.exports = existingModule;
            }
            return existingModule; //in case the core set of classes is already loaded, don't instantiate twice.
        }
        var _namespace = function(ns) {
                var a = ns.split("."),
                    p = _globals, i;
                for (i = 0; i < a.length; i++) {
                    p[a[i]] = p = p[a[i]] || {};
                }
                return p;
            },
            gs = _namespace("com.greensock"),
            _tinyNum = 0.00000001,
            _slice = function(a) { //don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
                var b = [],
                    l = a.length,
                    i;
                for (i = 0; i !== l; b.push(a[i++])) {}
                return b;
            },
            _emptyFunc = function() {},
            _isArray = (function() { //works around issues in iframe environments where the Array global isn't shared, thus if the object originates in a different window/iframe, "(obj instanceof Array)" will evaluate false. We added some speed optimizations to avoid Object.prototype.toString.call() unless it's absolutely necessary because it's VERY slow (like 20x slower)
                var toString = Object.prototype.toString,
                    array = toString.call([]);
                return function(obj) {
                    return obj != null && (obj instanceof Array || (typeof(obj) === "object" && !!obj.push && toString.call(obj) === array));
                };
            }()),
            a, i, p, _ticker, _tickerActive,
            _defLookup = {},
            Definition = function(ns, dependencies, func, global) {
                this.sc = (_defLookup[ns]) ? _defLookup[ns].sc : []; //subclasses
                _defLookup[ns] = this;
                this.gsClass = null;
                this.func = func;
                var _classes = [];
                this.check = function(init) {
                    var i = dependencies.length,
                        missing = i,
                        cur, a, n, cl;
                    while (--i > -1) {
                        if ((cur = _defLookup[dependencies[i]] || new Definition(dependencies[i], [])).gsClass) {
                            _classes[i] = cur.gsClass;
                            missing--;
                        } else if (init) {
                            cur.sc.push(this);
                        }
                    }
                    if (missing === 0 && func) {
                        a = ("com.greensock." + ns).split(".");
                        n = a.pop();
                        cl = _namespace(a.join("."))[n] = this.gsClass = func.apply(func, _classes);

                        //exports to multiple environments
                        if (global) {
                            _globals[n] = _exports[n] = cl; //provides a way to avoid global namespace pollution. By default, the main classes like TweenMove, Power1, Strong, etc. are added to window unless a GreenSockGlobals is defined. So if you want to have things added to a custom object instead, just do something like window.GreenSockGlobals = {} before loading any GreenSock files. You can even set up an alias like window.GreenSockGlobals = windows.gs = {} so that you can access everything like gs.TweenMove. Also remember that ALL classes are added to the window.com.greensock object (in their respective packages, like com.greensock.easing.Power1, com.greensock.TweenMove, etc.)
                            if (typeof(module) !== "undefined" && module.exports) { //node
                                if (ns === moduleName) {
                                    module.exports = _exports[moduleName] = cl;
                                    for (i in _exports) {
                                        cl[i] = _exports[i];
                                    }
                                } else if (_exports[moduleName]) {
                                    _exports[moduleName][n] = cl;
                                }
                            } else if (typeof(define) === "function" && define.amd){ //AMD
                                define((window.GreenSockAMDPath ? window.GreenSockAMDPath + "/" : "") + ns.split(".").pop(), [], function() { return cl; });
                            }
                        }
                        for (i = 0; i < this.sc.length; i++) {
                            this.sc[i].check();
                        }
                    }
                };
                this.check(true);
            },

            //used to create Definition instances (which basically registers a class that has dependencies).
            _hjDefine = window._hjDefine = function(ns, dependencies, func, global) {
                return new Definition(ns, dependencies, func, global);
            },

            //a quick way to create a class that doesn't have any dependencies. Returns the class, but first registers it in the GreenSock namespace so that other classes can grab it (other classes might be dependent on the class).
            _class = gs._class = function(ns, func, global) {
                func = func || function() {};
                _hjDefine(ns, [], function(){ return func; }, global);
                return func;
            };

        _hjDefine.globals = _globals;

        /* Ease */
        var _baseParams = [0, 0, 1, 1],
            Ease = _class("easing.Ease", function(func, extraParams, type, power) {
                this._func = func;
                this._type = type || 0;
                this._power = power || 0;
                this._params = extraParams ? _baseParams.concat(extraParams) : _baseParams;
            }, true),
            _easeMap = Ease.map = {},
            _easeReg = Ease.register = function(ease, names, types, create) {
                var na = names.split(","),
                    i = na.length,
                    ta = (types || "easeIn,easeOut,easeInOut").split(","),
                    e, name, j, type;
                while (--i > -1) {
                    name = na[i];
                    e = create ? _class("easing."+name, null, true) : gs.easing[name] || {};
                    j = ta.length;
                    while (--j > -1) {
                        type = ta[j];
                        _easeMap[name + "." + type] = _easeMap[type + name] = e[type] = ease.getRatio ? ease : ease[type] || new ease();
                    }
                }
            };

        p = Ease.prototype;
        p._calcEnd = false;
        p.getRatio = function(p) {
            if (this._func) {
                this._params[0] = p;
                return this._func.apply(null, this._params);
            }
            var t = this._type,
                pw = this._power,
                r = (t === 1) ? 1 - p : (t === 2) ? p : (p < 0.5) ? p * 2 : (1 - p) * 2;
            if (pw === 1) {
                r *= r;
            } else if (pw === 2) {
                r *= r * r;
            } else if (pw === 3) {
                r *= r * r * r;
            } else if (pw === 4) {
                r *= r * r * r * r;
            }
            return (t === 1) ? 1 - r : (t === 2) ? r : (p < 0.5) ? r / 2 : 1 - (r / 2);
        };

        //create all the standard eases like Linear, Quad, Cubic, Quart, Quint, Strong, Power0, Power1, Power2, Power3, and Power4 (each with easeIn, easeOut, and easeInOut)
        a = ["Linear","Quad","Cubic","Quart","Quint,Strong"];
        i = a.length;
        while (--i > -1) {
            p = a[i]+",Power"+i;
            _easeReg(new Ease(null,null,1,i), p, "easeOut", true);
            _easeReg(new Ease(null,null,2,i), p, "easeIn" + ((i === 0) ? ",easeNone" : ""));
            _easeReg(new Ease(null,null,3,i), p, "easeInOut");
        }
        _easeMap.linear = gs.easing.Linear.easeIn;
        _easeMap.swing = gs.easing.Quad.easeInOut; //for jQuery folks

        /* EventDispatcher */
        var EventDispatcher = _class("events.EventDispatcher", function(target) {
            this._listeners = {};
            this._eventTarget = target || this;
        });
        p = EventDispatcher.prototype;

        p.addEventListener = function(type, callback, scope, useParam, priority) {
            priority = priority || 0;
            var list = this._listeners[type],
                index = 0,
                listener, i;
            if (this === _ticker && !_tickerActive) {
                _ticker.wake();
            }
            if (list == null) {
                this._listeners[type] = list = [];
            }
            i = list.length;
            while (--i > -1) {
                listener = list[i];
                if (listener.c === callback && listener.s === scope) {
                    list.splice(i, 1);
                } else if (index === 0 && listener.pr < priority) {
                    index = i + 1;
                }
            }
            list.splice(index, 0, {c:callback, s:scope, up:useParam, pr:priority});
        };

        p.removeEventListener = function(type, callback) {
            var list = this._listeners[type], i;
            if (list) {
                i = list.length;
                while (--i > -1) {
                    if (list[i].c === callback) {
                        list.splice(i, 1);
                        return;
                    }
                }
            }
        };

        p.dispatchEvent = function(type) {
            var list = this._listeners[type],
                i, t, listener;
            if (list) {
                i = list.length;
                if (i > 1) {
                    list = list.slice(0); //in case addEventListener() is called from within a listener/callback (otherwise the index could change, resulting in a skip)
                }
                t = this._eventTarget;
                while (--i > -1) {
                    listener = list[i];
                    if (listener) {
                        if (listener.up) {
                            listener.c.call(listener.s || t, {type:type, target:t});
                        } else {
                            listener.c.call(listener.s || t);
                        }
                    }
                }
            }
        };

        /* Ticker */
        var _reqAnimFrame = window.requestAnimationFrame,
            _cancelAnimFrame = window.cancelAnimationFrame,
            _getTime = Date.now || function() {return new Date().getTime();},
            _lastUpdate = _getTime();

        //now try to determine the requestAnimationFrame and cancelAnimationFrame functions and if none are found, we'll use a setTimeout()/clearTimeout() polyfill.
        a = ["ms","moz","webkit","o"];
        i = a.length;
        while (--i > -1 && !_reqAnimFrame) {
            _reqAnimFrame = window[a[i] + "RequestAnimationFrame"];
            _cancelAnimFrame = window[a[i] + "CancelAnimationFrame"] || window[a[i] + "CancelRequestAnimationFrame"];
        }

        _class("Ticker", function(fps, useRAF) {
            var _self = this,
                _startTime = _getTime(),
                _useRAF = (useRAF !== false && _reqAnimFrame) ? "auto" : false,
                _lagThreshold = 500,
                _adjustedLag = 33,
                _tickWord = "tick", //helps reduce gc burden
                _fps, _req, _id, _gap, _nextTime,
                _tick = function(manual) {
                    var elapsed = _getTime() - _lastUpdate,
                        overlap, dispatch;
                    if (elapsed > _lagThreshold) {
                        _startTime += elapsed - _adjustedLag;
                    }
                    _lastUpdate += elapsed;
                    _self.time = (_lastUpdate - _startTime) / 1000;
                    overlap = _self.time - _nextTime;
                    if (!_fps || overlap > 0 || manual === true) {
                        _self.frame++;
                        _nextTime += overlap + (overlap >= _gap ? 0.004 : _gap - overlap);
                        dispatch = true;
                    }
                    if (manual !== true) { //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.
                        _id = _req(_tick);
                    }
                    if (dispatch) {
                        _self.dispatchEvent(_tickWord);
                    }
                };

            EventDispatcher.call(_self);
            _self.time = _self.frame = 0;
            _self.tick = function() {
                _tick(true);
            };

            _self.lagSmoothing = function(threshold, adjustedLag) {
                if (!arguments.length) { //if lagSmoothing() is called with no arguments, treat it like a getter that returns a boolean indicating if it's enabled or not. This is purposely undocumented and is for internal use.
                    return (_lagThreshold < 1 / _tinyNum);
                }
                _lagThreshold = threshold || (1 / _tinyNum); //zero should be interpreted as basically unlimited
                _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
            };

            _self.sleep = function() {
                if (_id == null) {
                    return;
                }
                if (!_useRAF || !_cancelAnimFrame) {
                    clearTimeout(_id);
                } else {
                    _cancelAnimFrame(_id);
                }
                _req = _emptyFunc;
                _id = null;
                if (_self === _ticker) {
                    _tickerActive = false;
                }
            };

            _self.wake = function(seamless) {
                if (_id !== null) {
                    _self.sleep();
                } else if (seamless) {
                    _startTime += -_lastUpdate + (_lastUpdate = _getTime());
                } else if (_self.frame > 10) { //don't trigger lagSmoothing if we're just waking up, and make sure that at least 10 frames have elapsed because of the iOS bug that we work around below with the 1.5-second setTimout().
                    _lastUpdate = _getTime() - _lagThreshold + 5;
                }
                _req = (_fps === 0) ? _emptyFunc : (!_useRAF || !_reqAnimFrame) ? function(f) { return setTimeout(f, ((_nextTime - _self.time) * 1000 + 1) | 0); } : _reqAnimFrame;
                if (_self === _ticker) {
                    _tickerActive = true;
                }
                _tick(2);
            };

            _self.fps = function(value) {
                if (!arguments.length) {
                    return _fps;
                }
                _fps = value;
                _gap = 1 / (_fps || 60);
                _nextTime = this.time + _gap;
                _self.wake();
            };

            _self.useRAF = function(value) {
                if (!arguments.length) {
                    return _useRAF;
                }
                _self.sleep();
                _useRAF = value;
                _self.fps(_fps);
            };
            _self.fps(fps);

            //a bug in iOS 6 Safari occasionally prevents the requestAnimationFrame from working initially, so we use a 1.5-second timeout that automatically falls back to setTimeout() if it senses this condition.
            setTimeout(function() {
                if (_useRAF === "auto" && _self.frame < 5 && (_doc || {}).visibilityState !== "hidden") {
                    _self.useRAF(false);
                }
            }, 1500);
        });

        p = gs.Ticker.prototype = new gs.events.EventDispatcher();
        p.constructor = gs.Ticker;

        /* Animation */
        var Animation = _class("core.Animation", function(duration, vars) {
                this.vars = vars = vars || {};
                this._duration = this._totalDuration = duration || 0;
                this._delay = Number(vars.delay) || 0;
                this._timeScale = 1;
                this._active = !!vars.immediateRender;
                this.data = vars.data;
                this._reversed = !!vars.reversed;

                if (!_rootTimeline) {
                    return;
                }
                if (!_tickerActive) { //some browsers (like iOS 6 Safari) shut down JavaScript execution when the tab is disabled and they [occasionally] neglect to start up requestAnimationFrame again when returning - this code ensures that the engine starts up again properly.
                    _ticker.wake();
                }

                var tl = this.vars.useFrames ? _rootFramesTimeline : _rootTimeline;
                tl.add(this, tl._time);

                if (this.vars.paused) {
                    this.paused(true);
                }
            });

        _ticker = Animation.ticker = new gs.Ticker();
        p = Animation.prototype;
        p._dirty = p._gc = p._initted = p._paused = false;
        p._totalTime = p._time = 0;
        p._rawPrevTime = -1;
        p._next = p._last = p._onUpdate = p._timeline = p.timeline = null;
        p._paused = false;


        //some browsers (like iOS) occasionally drop the requestAnimationFrame event when the user switches to a different tab and then comes back again, so we use a 2-second setTimeout() to sense if/when that condition occurs and then wake() the ticker.
        var _checkTimeout = function() {
                if (_tickerActive && _getTime() - _lastUpdate > 2000 && ((_doc || {}).visibilityState !== "hidden" || !_ticker.lagSmoothing())) { //note: if the tab is hidden, we should still wake if lagSmoothing has been disabled.
                    _ticker.wake();
                }
                var t = setTimeout(_checkTimeout, 2000);
                if (t.unref) {
                    // allows a node process to exit even if the timeout’s callback hasn't been invoked. Without it, the node process could hang as this function is called every two seconds.
                    t.unref();
                }
            };
        _checkTimeout();

        p.isActive = function() {
            var tl = this._timeline, //the 2 root timelines won't have a _timeline; they're always active.
                startTime = this._startTime,
                rawTime;
            return (!tl || (!this._gc && !this._paused && tl.isActive() && (rawTime = tl.rawTime(true)) >= startTime && rawTime < startTime + this.totalDuration() / this._timeScale - _tinyNum));
        };

        p._enabled = function (enabled, ignoreTimeline) {
            if (!_tickerActive) {
                _ticker.wake();
            }
            this._gc = !enabled;
            this._active = this.isActive();
            if (ignoreTimeline !== true) {
                if (enabled && !this.timeline) {
                    this._timeline.add(this, this._startTime - this._delay);
                } else if (!enabled && this.timeline) {
                    this._timeline._remove(this, true);
                }
            }
            return false;
        };


        p._kill = function(vars, target) {
            return this._enabled(false, false);
        };

        p.kill = function(vars, target) {
            this._kill(vars, target);
            return this;
        };

        p._callback = function(type) {
            var v = this.vars,
                callback = v[type],
                params = v[type + "Params"],
                scope = v[type + "Scope"] || v.callbackScope || this,
                l = params ? params.length : 0;
            switch (l) { //speed optimization; call() is faster than apply() so use it when there are only a few parameters (which is by far most common). Previously we simply did var v = this.vars; v[type].apply(v[type + "Scope"] || v.callbackScope || this, v[type + "Params"] || _blankArray);
                case 0: callback.call(scope); break;
                case 1: callback.call(scope, params[0]); break;
                case 2: callback.call(scope, params[0], params[1]); break;
                default: callback.apply(scope, params);
            }
        };

        //* Animation getters/setters *//
        p.totalDuration = function(value) {
            this._dirty = false;
            return (!arguments.length) ? this._totalDuration : this.duration(value);
        };

        /* SimpleTimeline */
        var SimpleTimeline = _class("core.SimpleTimeline", function(vars) {
            Animation.call(this, 0, vars);
            this.autoRemoveChildren = this.smoothChildTiming = true;
        });

        p = SimpleTimeline.prototype = new Animation();
        p.constructor = SimpleTimeline;
        p.kill()._gc = false;
        p._first = p._last = p._recent = null;
        p._sortChildren = false;

        p.add = p.insert = function(child, position, align, stagger) {
            var prevTween, st;
            child._startTime = Number(position || 0) + child._delay;
            if (child._paused) if (this !== child._timeline) { //we only adjust the _pauseTime if it wasn't in this timeline already. Remember, sometimes a tween will be inserted again into the same timeline when its startTime is changed so that the tweens in the TimelineLite/Max are re-ordered properly in the linked list (so everything renders in the proper order).
                child._pauseTime = this.rawTime() - (child._timeline.rawTime() - child._pauseTime);
            }
            if (child.timeline) {
                child.timeline._remove(child, true); //removes from existing timeline so that it can be properly added to this one.
            }
            child.timeline = child._timeline = this;
            if (child._gc) {
                child._enabled(true, true);
            }
            prevTween = this._last;
            if (this._sortChildren) {
                st = child._startTime;
                while (prevTween && prevTween._startTime > st) {
                    prevTween = prevTween._prev;
                }
            }
            if (prevTween) {
                child._next = prevTween._next;
                prevTween._next = child;
            } else {
                child._next = this._first;
                this._first = child;
            }
            if (child._next) {
                child._next._prev = child;
            } else {
                this._last = child;
            }
            child._prev = prevTween;
            this._recent = child;
            if (this._timeline) {
                this._uncache(true);
            }
            return this;
        };

        p._remove = function(tween, skipDisable) {
            if (tween.timeline === this) {
                if (!skipDisable) {
                    tween._enabled(false, true);
                }

                if (tween._prev) {
                    tween._prev._next = tween._next;
                } else if (this._first === tween) {
                    this._first = tween._next;
                }
                if (tween._next) {
                    tween._next._prev = tween._prev;
                } else if (this._last === tween) {
                    this._last = tween._prev;
                }
                tween._next = tween._prev = tween.timeline = null;
                if (tween === this._recent) {
                    this._recent = this._last;
                }

                if (this._timeline) {
                    this._uncache(true);
                }
            }
            return this;
        };

        p.render = function(time, suppressEvents, force) {
            var tween = this._first,
                next;
            this._totalTime = this._time = this._rawPrevTime = time;
            while (tween) {
                next = tween._next; //record it here because the value could change after rendering...
                if (tween._active || (time >= tween._startTime && !tween._paused && !tween._gc)) {
                    if (!tween._reversed) {
                        tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
                    } else {
                        tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
                    }
                }
                tween = next;
            }
        };

        p.rawTime = function() {
            if (!_tickerActive) {
                _ticker.wake();
            }
            return this._totalTime;
        };

        /* TweenMove */
        var TweenMove = _class("TweenMove", function(target, duration, vars) {
                Animation.call(this, duration, vars);
                this.render = TweenMove.prototype.render; //speed optimization (avoid prototype lookup on this "hot" method)

                if (target == null) {
                    throw "Cannot tween a null target.";
                }

                this.target = target = (typeof(target) !== "string") ? target : TweenMove.selector(target) || target;

                var isSelector = (target.jquery || (target.length && target !== window && target[0] && (target[0] === window || (target[0].nodeType && target[0].style && !target.nodeType)))),
                    overwrite = this.vars.overwrite,
                    i, targ, targets;

                this._overwrite = overwrite = (overwrite == null) ? _overwriteLookup[TweenMove.defaultOverwrite] : (typeof(overwrite) === "number") ? overwrite >> 0 : _overwriteLookup[overwrite];

                if ((isSelector || target instanceof Array || (target.push && _isArray(target))) && typeof(target[0]) !== "number") {
                    this._targets = targets = _slice(target);  //don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
                    this._propLookup = [];
                    this._siblings = [];
                    for (i = 0; i < targets.length; i++) {
                        targ = targets[i];
                        if (!targ) {
                            targets.splice(i--, 1);
                            continue;
                        } else if (typeof(targ) === "string") {
                            targ = targets[i--] = TweenMove.selector(targ); //in case it's an array of strings
                            if (typeof(targ) === "string") {
                                targets.splice(i+1, 1); //to avoid an endless loop (can't imagine why the selector would return a string, but just in case)
                            }
                            continue;
                        } else if (targ.length && targ !== window && targ[0] && (targ[0] === window || (targ[0].nodeType && targ[0].style && !targ.nodeType))) { //in case the user is passing in an array of selector objects (like jQuery objects), we need to check one more level and pull things out if necessary. Also note that <select> elements pass all the criteria regarding length and the first child having style, so we must also check to ensure the target isn't an HTML node itself.
                            targets.splice(i--, 1);
                            this._targets = targets = targets.concat(_slice(targ));
                            continue;
                        }
                        this._siblings[i] = _register(targ, this, false);
                        if (overwrite === 1) if (this._siblings[i].length > 1) {
                            _applyOverwrite(targ, this, null, 1, this._siblings[i]);
                        }
                    }

                } else {
                    this._propLookup = {};
                    this._siblings = _register(target, this, false);
                    if (overwrite === 1) if (this._siblings.length > 1) {
                        _applyOverwrite(target, this, null, 1, this._siblings);
                    }
                }
                if (this.vars.immediateRender || (duration === 0 && this._delay === 0 && this.vars.immediateRender !== false)) {
                    this._time = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
                    this.render(Math.min(0, -this._delay)); //in case delay is negative
                }
            }, true),
            _isSelector = function(v) {
                return (v && v.length && v !== window && v[0] && (v[0] === window || (v[0].nodeType && v[0].style && !v.nodeType))); //we cannot check "nodeType" if the target is window from within an iframe, otherwise it will trigger a security error in some browsers like Firefox.
            },
            _autoCSS = function(vars, target) {
                var css = {},
                    p;
                for (p in vars) {
                    if (!_reservedProps[p] && (!(p in target) || p === "transform" || p === "x" || p === "y" || p === "width" || p === "height" || p === "className" || p === "border") && (!_plugins[p] || (_plugins[p] && _plugins[p]._autoCSS))) { //note: <img> elements contain read-only "x" and "y" properties. We should also prioritize editing css width/height rather than the element's properties.
                        css[p] = vars[p];
                        delete vars[p];
                    }
                }
                vars.css = css;
            };

        p = TweenMove.prototype = new Animation();
        p.constructor = TweenMove;
        p.kill()._gc = false;

        //* TweenMove defaults, overwrite management, and root updates *//
        p.ratio = 0;
        p._firstPT = p._targets = p._overwrittenProps = p._startAt = null;
        p._notifyPluginsOfEnabled = p._lazy = false;

        TweenMove.defaultEase = p._ease = new Ease(null, null, 1, 1);
        TweenMove.defaultOverwrite = "auto";
        TweenMove.ticker = _ticker;
        TweenMove.autoSleep = 120;
        TweenMove.lagSmoothing = function(threshold, adjustedLag) {
            _ticker.lagSmoothing(threshold, adjustedLag);
        };

        TweenMove.selector = window.$ || window.jQuery || function(e) {
            var selector = window.$ || window.jQuery;
            if (selector) {
                TweenMove.selector = selector;
                return selector(e);
            }
            if (!_doc) { //in some dev environments (like Angular 6), GSAP gets loaded before the document is defined! So re-query it here if/when necessary.
                _doc = window.document;
            }
            return (!_doc) ? e : (_doc.querySelectorAll ? _doc.querySelectorAll(e) : _doc.getElementById((e.charAt(0) === "#") ? e.substr(1) : e));
        };

        var _lazyTweens = [],
            _lazyLookup = {},
            _numbersExp = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
            _relExp = /[\+-]=-?[\.\d]/,
            //_nonNumbersExp = /(?:([\-+](?!(\d|=)))|[^\d\-+=e]|(e(?![\-+][\d])))+/ig,
            _setRatio = function(v) {
                var pt = this._firstPT,
                    min = 0.000001,
                    val;
                while (pt) {
                    val = !pt.blob ? pt.c * v + pt.s : (v === 1 && this.end != null) ? this.end : v ? this.join("") : this.start;
                    if (pt.m) {
                        val = pt.m.call(this._tween, val, this._target || pt.t, this._tween);
                    } else if (val < min) if (val > -min && !pt.blob) { //prevents issues with converting very small numbers to strings in the browser
                        val = 0;
                    }
                    if (!pt.f) {
                        pt.t[pt.p] = val;
                    } else if (pt.fp) {
                        pt.t[pt.p](pt.fp, val);
                    } else {
                        pt.t[pt.p](val);
                    }
                    pt = pt._next;
                }
            },
            _blobRound = function(v) {
                return (((v * 1000) | 0) / 1000) + "";
            },
            //compares two strings (start/end), finds the numbers that are different and spits back an array representing the whole value but with the changing values isolated as elements. For example, "rgb(0,0,0)" and "rgb(100,50,0)" would become ["rgb(", 0, ",", 50, ",0)"]. Notice it merges the parts that are identical (performance optimization). The array also has a linked list of PropTweens attached starting with _firstPT that contain the tweening data (t, p, s, c, f, etc.). It also stores the starting value as a "start" property so that we can revert to it if/when necessary, like when a tween rewinds fully. If the quantity of numbers differs between the start and end, it will always prioritize the end value(s). The pt parameter is optional - it's for a PropTween that will be appended to the end of the linked list and is typically for actually setting the value after all of the elements have been updated (with array.join("")).
            _blobDif = function(start, end, filter, pt) {
                var a = [],
                    charIndex = 0,
                    s = "",
                    color = 0,
                    startNums, endNums, num, i, l, nonNumbers, currentNum;
                a.start = start;
                a.end = end;
                start = a[0] = start + ""; //ensure values are strings
                end = a[1] = end + "";
                if (filter) {
                    filter(a); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.
                    start = a[0];
                    end = a[1];
                }
                a.length = 0;
                startNums = start.match(_numbersExp) || [];
                endNums = end.match(_numbersExp) || [];
                if (pt) {
                    pt._next = null;
                    pt.blob = 1;
                    a._firstPT = a._applyPT = pt; //apply last in the linked list (which means inserting it first)
                }
                l = endNums.length;
                for (i = 0; i < l; i++) {
                    currentNum = endNums[i];
                    nonNumbers = end.substr(charIndex, end.indexOf(currentNum, charIndex)-charIndex);
                    s += (nonNumbers || !i) ? nonNumbers : ","; //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
                    charIndex += nonNumbers.length;
                    if (color) { //sense rgba() values and round them.
                        color = (color + 1) % 5;
                    } else if (nonNumbers.substr(-5) === "rgba(") {
                        color = 1;
                    }
                    if (currentNum === startNums[i] || startNums.length <= i) {
                        s += currentNum;
                    } else {
                        if (s) {
                            a.push(s);
                            s = "";
                        }
                        num = parseFloat(startNums[i]);
                        a.push(num);
                        a._firstPT = {_next: a._firstPT, t:a, p: a.length-1, s:num, c:((currentNum.charAt(1) === "=") ? parseInt(currentNum.charAt(0) + "1", 10) * parseFloat(currentNum.substr(2)) : (parseFloat(currentNum) - num)) || 0, f:0, m:(color && color < 4) ? Math.round : _blobRound}; //limiting to 3 decimal places and casting as a string can really help performance when array.join() is called!
                        //note: we don't set _prev because we'll never need to remove individual PropTweens from this list.
                    }
                    charIndex += currentNum.length;
                }
                s += end.substr(charIndex);
                if (s) {
                    a.push(s);
                }
                a.setRatio = _setRatio;
                if (_relExp.test(end)) { //if the end string contains relative values, delete it so that on the final render (in _setRatio()), we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
                    a.end = null;
                }
                return a;
            },
            //note: "funcParam" is only necessary for function-based getters/setters that require an extra parameter like getAttribute("width") and setAttribute("width", value). In this example, funcParam would be "width". Used by AttrPlugin for example.
            _addPropTween = function(target, prop, start, end, overwriteProp, mod, funcParam, stringFilter, index) {
                if (typeof(end) === "function") {
                    end = end(index || 0, target);
                }
                var type = typeof(target[prop]),
                    getterName = (type !== "function") ? "" : ((prop.indexOf("set") || typeof(target["get" + prop.substr(3)]) !== "function") ? prop : "get" + prop.substr(3)),
                    s = (start !== "get") ? start : !getterName ? target[prop] : funcParam ? target[getterName](funcParam) : target[getterName](),
                    isRelative = (typeof(end) === "string" && end.charAt(1) === "="),
                    pt = {t:target, p:prop, s:s, f:(type === "function"), pg:0, n:overwriteProp || prop, m:(!mod ? 0 : (typeof(mod) === "function") ? mod : Math.round), pr:0, c:isRelative ? parseInt(end.charAt(0) + "1", 10) * parseFloat(end.substr(2)) : (parseFloat(end) - s) || 0},
                    blob;

                if (typeof(s) !== "number" || (typeof(end) !== "number" && !isRelative)) {
                    if (funcParam || isNaN(s) || (!isRelative && isNaN(end)) || typeof(s) === "boolean" || typeof(end) === "boolean") {
                        //a blob (string that has multiple numbers in it)
                        pt.fp = funcParam;
                        blob = _blobDif(s, (isRelative ? (parseFloat(pt.s) + pt.c) + (pt.s + "").replace(/[0-9\-\.]/g, "") : end), stringFilter || TweenMove.defaultStringFilter, pt);
                        pt = {t: blob, p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: overwriteProp || prop, pr: 0, m: 0}; //"2" indicates it's a Blob property tween. Needed for RoundPropsPlugin for example.
                    } else {
                        pt.s = parseFloat(s);
                        if (!isRelative) {
                            pt.c = (parseFloat(end) - pt.s) || 0;
                        }
                    }
                }
                if (pt.c) { //only add it to the linked list if there's a change.
                    if ((pt._next = this._firstPT)) {
                        pt._next._prev = pt;
                    }
                    this._firstPT = pt;
                    return pt;
                }
            },
            _internals = TweenMove._internals = {isArray:_isArray, isSelector:_isSelector, lazyTweens:_lazyTweens, blobDif:_blobDif}, //gives us a way to expose certain private values to other GreenSock classes without contaminating tha main TweenMove object.
            _plugins = TweenMove._plugins = {},
            _tweenLookup = _internals.tweenLookup = {},
            _tweenLookupNum = 0,
            _reservedProps = _internals.reservedProps = {ease:1, delay:1, overwrite:1, onComplete:1, onCompleteParams:1, onCompleteScope:1, useFrames:1, runBackwards:1, startAt:1, onUpdate:1, onUpdateParams:1, onUpdateScope:1, onStart:1, onStartParams:1, onStartScope:1, onReverseComplete:1, onReverseCompleteParams:1, onReverseCompleteScope:1, onRepeat:1, onRepeatParams:1, onRepeatScope:1, easeParams:1, yoyo:1, immediateRender:1, repeat:1, repeatDelay:1, data:1, paused:1, reversed:1, autoCSS:1, lazy:1, onOverwrite:1, callbackScope:1, stringFilter:1, id:1, yoyoEase:1, stagger:1},
            _overwriteLookup = {none:0, all:1, auto:2, concurrent:3, allOnStart:4, preexisting:5, "true":1, "false":0},
            _rootFramesTimeline = Animation._rootFramesTimeline = new SimpleTimeline(),
            _rootTimeline = Animation._rootTimeline = new SimpleTimeline(),
            _nextGCFrame = 30,
            _lazyRender = _internals.lazyRender = function() {
                var l = _lazyTweens.length,
                    i, tween;
                _lazyLookup = {};
                for (i = 0; i < l; i++) {
                    tween = _lazyTweens[i];
                    if (tween && tween._lazy !== false) {
                        tween.render(tween._lazy[0], tween._lazy[1], true);
                        tween._lazy = false;
                    }
                }
                _lazyTweens.length = 0;
            };

        _rootTimeline._startTime = _ticker.time;
        _rootFramesTimeline._startTime = _ticker.frame;
        _rootTimeline._active = _rootFramesTimeline._active = true;
        setTimeout(_lazyRender, 1); //on some mobile devices, there isn't a "tick" before code runs which means any lazy renders wouldn't run before the next official "tick".

        Animation._updateRoot = TweenMove.render = function() {
                var i, a, p;
                if (_lazyTweens.length) { //if code is run outside of the requestAnimationFrame loop, there may be tweens queued AFTER the engine refreshed, so we need to ensure any pending renders occur before we refresh again.
                    _lazyRender();
                }
                _rootTimeline.render((_ticker.time - _rootTimeline._startTime) * _rootTimeline._timeScale, false, false);
                _rootFramesTimeline.render((_ticker.frame - _rootFramesTimeline._startTime) * _rootFramesTimeline._timeScale, false, false);
                if (_lazyTweens.length) {
                    _lazyRender();
                }
                if (_ticker.frame >= _nextGCFrame) { //dump garbage every 120 frames or whatever the user sets TweenMove.autoSleep to
                    _nextGCFrame = _ticker.frame + (parseInt(TweenMove.autoSleep, 10) || 120);
                    for (p in _tweenLookup) {
                        a = _tweenLookup[p].tweens;
                        i = a.length;
                        while (--i > -1) {
                            if (a[i]._gc) {
                                a.splice(i, 1);
                            }
                        }
                        if (a.length === 0) {
                            delete _tweenLookup[p];
                        }
                    }
                    //if there are no more tweens in the root timelines, or if they're all paused, make the _timer sleep to reduce load on the CPU slightly
                    p = _rootTimeline._first;
                    if (!p || p._paused) if (TweenMove.autoSleep && !_rootFramesTimeline._first && _ticker._listeners.tick.length === 1) {
                        while (p && p._paused) {
                            p = p._next;
                        }
                        if (!p) {
                            _ticker.sleep();
                        }
                    }
                }
            };

        _ticker.addEventListener("tick", Animation._updateRoot);

        var _register = function(target, tween, scrub) {
                var id = target._hjTweenID, a, i;
                if (!_tweenLookup[id || (target._hjTweenID = id = "t" + (_tweenLookupNum++))]) {
                    _tweenLookup[id] = {target:target, tweens:[]};
                }
                if (tween) {
                    a = _tweenLookup[id].tweens;
                    a[(i = a.length)] = tween;
                    if (scrub) {
                        while (--i > -1) {
                            if (a[i] === tween) {
                                a.splice(i, 1);
                            }
                        }
                    }
                }
                return _tweenLookup[id].tweens;
            },
            _applyOverwrite = function(target, tween, props, mode, siblings) {
                var i, changed, curTween, l;
                if (mode === 1 || mode >= 4) {
                    l = siblings.length;
                    for (i = 0; i < l; i++) {
                        if ((curTween = siblings[i]) !== tween) {
                            if (!curTween._gc) {
                                if (curTween._kill(null, target, tween)) {
                                    changed = true;
                                }
                            }
                        } else if (mode === 5) {
                            break;
                        }
                    }
                    return changed;
                }
                //NOTE: Add tiny amount to overcome floating point errors that can cause the startTime to be VERY slightly off (when a tween's time() is set for example)
                var startTime = tween._startTime + _tinyNum,
                    overlaps = [],
                    oCount = 0,
                    zeroDur = (tween._duration === 0),
                    globalStart;
                i = siblings.length;
                while (--i > -1) {
                    if ((curTween = siblings[i]) === tween || curTween._gc || curTween._paused) {
                        //ignore
                    } else if (curTween._timeline !== tween._timeline) {
                        globalStart = globalStart || _checkOverlap(tween, 0, zeroDur);
                        if (_checkOverlap(curTween, globalStart, zeroDur) === 0) {
                            overlaps[oCount++] = curTween;
                        }
                    } else if (curTween._startTime <= startTime) if (curTween._startTime + curTween.totalDuration() / curTween._timeScale > startTime) if (!((zeroDur || !curTween._initted) && startTime - curTween._startTime <= _tinyNum * 2)) {
                        overlaps[oCount++] = curTween;
                    }
                }

                i = oCount;
                while (--i > -1) {
                    curTween = overlaps[i];
                    l = curTween._firstPT; //we need to discern if there were property tweens originally; if they all get removed in the next line's _kill() call, the tween should be killed. See https://github.com/greensock/GreenSock-JS/issues/278
                    if (mode === 2) if (curTween._kill(props, target, tween)) {
                        changed = true;
                    }
                    if (mode !== 2 || (!curTween._firstPT && curTween._initted && l)) {
                        if (mode !== 2 && !_onOverwrite(curTween, tween)) {
                            continue;
                        }
                        if (curTween._enabled(false, false)) { //if all property tweens have been overwritten, kill the tween.
                            changed = true;
                        }
                    }
                }
                return changed;
            };

        //* TweenMove instance methods *//
        p._init = function() {
            var v = this.vars,
                op = this._overwrittenProps,
                dur = this._duration,
                immediate = !!v.immediateRender,
                ease = v.ease,
                startAt = this._startAt,
                i, initPlugins, pt, p, startVars, l;
            if (v.startAt) {
                if (startAt) {
                    startAt.render(-1, true); //if we've run a startAt previously (when the tween instantiated), we should revert it so that the values re-instantiate correctly particularly for relative tweens. Without this, a TweenMove.fromTo(obj, 1, {x:"+=100"}, {x:"-=100"}), for example, would actually jump to +=200 because the startAt would run twice, doubling the relative change.
                    startAt.kill();
                }
                startVars = {};
                for (p in v.startAt) { //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, 1, from, to).fromTo(e, 1, to, from);
                    startVars[p] = v.startAt[p];
                }
                startVars.data = "isStart";
                startVars.overwrite = false;
                startVars.immediateRender = true;
                startVars.lazy = (immediate && v.lazy !== false);
                startVars.startAt = startVars.delay = null; //no nesting of startAt objects allowed (otherwise it could cause an infinite loop).
                startVars.onUpdate = v.onUpdate;
                startVars.onUpdateParams = v.onUpdateParams;
                startVars.onUpdateScope = v.onUpdateScope || v.callbackScope || this;
                this._startAt = TweenMove.go(this.target || {}, 0, startVars);
                if (immediate) {
                    if (this._time > 0) {
                        this._startAt = null; //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in TimelineLite/Max instances where immediateRender was false (which is the default in the convenience methods like from()).
                    } else if (dur !== 0) {
                        return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a TimelineLite or TimelineMax, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
                    }
                }
            } else if (v.runBackwards && dur !== 0) {
                //from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
                if (startAt) {
                    startAt.render(-1, true);
                    startAt.kill();
                    this._startAt = null;
                } else {
                    if (this._time !== 0) { //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0
                        immediate = false;
                    }
                    pt = {};
                    for (p in v) { //copy props into a new object and skip any reserved props, otherwise onComplete or onUpdate or onStart could fire. We should, however, permit autoCSS to go through.
                        if (!_reservedProps[p] || p === "autoCSS") {
                            pt[p] = v[p];
                        }
                    }
                    pt.overwrite = 0;
                    pt.data = "isFromStart"; //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
                    pt.lazy = (immediate && v.lazy !== false);
                    pt.immediateRender = immediate; //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
                    this._startAt = TweenMove.go(this.target, 0, pt);
                    if (!immediate) {
                        this._startAt._init(); //ensures that the initial values are recorded
                        this._startAt._enabled(false); //no need to have the tween render on the next cycle. Disable it because we'll always manually control the renders of the _startAt tween.
                        if (this.vars.immediateRender) {
                            this._startAt = null;
                        }
                    } else if (this._time === 0) {
                        return;
                    }
                }
            }
            this._ease = ease = (!ease) ? TweenMove.defaultEase : (ease instanceof Ease) ? ease : (typeof(ease) === "function") ? new Ease(ease, v.easeParams) : _easeMap[ease] || TweenMove.defaultEase;
            if (v.easeParams instanceof Array && ease.config) {
                this._ease = ease.config.apply(ease, v.easeParams);
            }
            this._easeType = this._ease._type;
            this._easePower = this._ease._power;
            this._firstPT = null;

            if (this._targets) {
                l = this._targets.length;
                for (i = 0; i < l; i++) {
                    if ( this._initProps( this._targets[i], (this._propLookup[i] = {}), this._siblings[i], (op ? op[i] : null), i) ) {
                        initPlugins = true;
                    }
                }
            } else {
                initPlugins = this._initProps(this.target, this._propLookup, this._siblings, op, 0);
            }

            if (initPlugins) {
                TweenMove._onPluginEvent("_onInitAllProps", this); //reorders the array in order of priority. Uses a static TweenPlugin method in order to minimize file size in TweenMove
            }
            if (op) if (!this._firstPT) if (typeof(this.target) !== "function") { //if all tweening properties have been overwritten, kill the tween. If the target is a function, it's probably a delayedCall so let it live.
                this._enabled(false, false);
            }
            if (v.runBackwards) {
                pt = this._firstPT;
                while (pt) {
                    pt.s += pt.c;
                    pt.c = -pt.c;
                    pt = pt._next;
                }
            }
            this._onUpdate = v.onUpdate;
            this._initted = true;
        };

        p._initProps = function(target, propLookup, siblings, overwrittenProps, index) {
            var p, i, initPlugins, plugin, pt, v;
            if (target == null) {
                return false;
            }
            if (_lazyLookup[target._hjTweenID]) {
                _lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)
            }

            if (!this.vars.css) if (target.style) if (target !== window && target.nodeType) if (_plugins.css) if (this.vars.autoCSS !== false) { //it's so common to use TweenMove/Max to animate the css of DOM elements, we assume that if the target is a DOM element, that's what is intended (a convenience so that users don't have to wrap things in css:{}, although we still recommend it for a slight performance boost and better specificity). Note: we cannot check "nodeType" on the window inside an iframe.
                _autoCSS(this.vars, target);
            }
            for (p in this.vars) {
                v = this.vars[p];
                if (_reservedProps[p]) {
                    if (v) if ((v instanceof Array) || (v.push && _isArray(v))) if (v.join("").indexOf("{self}") !== -1) {
                        this.vars[p] = v = this._swapSelfInParams(v, this);
                    }

                } else if (_plugins[p] && (plugin = new _plugins[p]())._onInitTween(target, this.vars[p], this, index)) {

                    //t - target        [object]
                    //p - property      [string]
                    //s - start         [number]
                    //c - change        [number]
                    //f - isFunction    [boolean]
                    //n - name          [string]
                    //pg - isPlugin     [boolean]
                    //pr - priority     [number]
                    //m - mod           [function | 0]
                    this._firstPT = pt = {_next:this._firstPT, t:plugin, p:"setRatio", s:0, c:1, f:1, n:p, pg:1, pr:plugin._priority, m:0};
                    i = plugin._overwriteProps.length;
                    while (--i > -1) {
                        propLookup[plugin._overwriteProps[i]] = this._firstPT;
                    }
                    if (plugin._priority || plugin._onInitAllProps) {
                        initPlugins = true;
                    }
                    if (plugin._onDisable || plugin._onEnable) {
                        this._notifyPluginsOfEnabled = true;
                    }
                    if (pt._next) {
                        pt._next._prev = pt;
                    }

                } else {
                    propLookup[p] = _addPropTween.call(this, target, p, "get", v, p, 0, null, this.vars.stringFilter, index);
                }
            }

            if (overwrittenProps) if (this._kill(overwrittenProps, target)) { //another tween may have tried to overwrite properties of this tween before init() was called (like if two tweens start at the same time, the one created second will run first)
                return this._initProps(target, propLookup, siblings, overwrittenProps, index);
            }
            if (this._overwrite > 1) if (this._firstPT) if (siblings.length > 1) if (_applyOverwrite(target, this, propLookup, this._overwrite, siblings)) {
                this._kill(propLookup, target);
                return this._initProps(target, propLookup, siblings, overwrittenProps, index);
            }
            if (this._firstPT) if ((this.vars.lazy !== false && this._duration) || (this.vars.lazy && !this._duration)) { //zero duration tweens don't lazy render by default; everything else does.
                _lazyLookup[target._hjTweenID] = true;
            }
            return initPlugins;
        };

        p.render = function(time, suppressEvents, force) {
            var self = this,
                prevTime = self._time,
                duration = self._duration,
                prevRawPrevTime = self._rawPrevTime,
                isComplete, callback, pt, rawPrevTime;
            if (time >= duration - _tinyNum && time >= 0) { //to work around occasional floating point math artifacts.
                self._totalTime = self._time = duration;
                self.ratio = self._ease._calcEnd ? self._ease.getRatio(1) : 1;
                if (!self._reversed ) {
                    isComplete = true;
                    callback = "onComplete";
                    force = (force || self._timeline.autoRemoveChildren); //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
                }
                if (duration === 0) if (self._initted || !self.vars.lazy || force) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
                    if (self._startTime === self._timeline._duration) { //if a zero-duration tween is at the VERY end of a timeline and that timeline renders at its end, it will typically add a tiny bit of cushion to the render time to prevent rounding errors from getting in the way of tweens rendering their VERY end. If we then reverse() that timeline, the zero-duration tween will trigger its onReverseComplete even though technically the playhead didn't pass over it again. It's a very specific edge case we must accommodate.
                        time = 0;
                    }
                    if (prevRawPrevTime < 0 || (time <= 0 && time >= -_tinyNum) || (prevRawPrevTime === _tinyNum && self.data !== "isPause")) if (prevRawPrevTime !== time) { //note: when this.data is "isPause", it's a callback added by addPause() on a timeline that we should not be triggered when LEAVING its exact start time. In other words, tl.addPause(1).play(1) shouldn't pause.
                        force = true;
                        if (prevRawPrevTime > _tinyNum) {
                            callback = "onReverseComplete";
                        }
                    }
                    self._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
                }

            } else if (time < _tinyNum) { //to work around occasional floating point math artifacts, round super small values to 0.
                self._totalTime = self._time = 0;
                self.ratio = self._ease._calcEnd ? self._ease.getRatio(0) : 0;
                if (prevTime !== 0 || (duration === 0 && prevRawPrevTime > 0)) {
                    callback = "onReverseComplete";
                    isComplete = self._reversed;
                }
                if (time > -_tinyNum) {
                    time = 0;
                } else if (time < 0) {
                    self._active = false;
                    if (duration === 0) if (self._initted || !self.vars.lazy || force) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
                        if (prevRawPrevTime >= 0 && !(prevRawPrevTime === _tinyNum && self.data === "isPause")) {
                            force = true;
                        }
                        self._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
                    }
                }
                if (!self._initted || (self._startAt && self._startAt.progress())) { //if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately. Also, we check progress() because if startAt has already rendered at its end, we should force a render at its beginning. Otherwise, if you put the playhead directly on top of where a fromTo({immediateRender:false}) starts, and then move it backwards, the from() won't revert its values.
                    force = true;
                }
            } else {
                self._totalTime = self._time = time;

                if (self._easeType) {
                    var r = time / duration, type = self._easeType, pow = self._easePower;
                    if (type === 1 || (type === 3 && r >= 0.5)) {
                        r = 1 - r;
                    }
                    if (type === 3) {
                        r *= 2;
                    }
                    if (pow === 1) {
                        r *= r;
                    } else if (pow === 2) {
                        r *= r * r;
                    } else if (pow === 3) {
                        r *= r * r * r;
                    } else if (pow === 4) {
                        r *= r * r * r * r;
                    }
                    self.ratio = (type === 1) ? 1 - r : (type === 2) ? r : (time / duration < 0.5) ? r / 2 : 1 - (r / 2);
                } else {
                    self.ratio = self._ease.getRatio(time / duration);
                }
            }

            if (self._time === prevTime && !force) {
                return;
            } else if (!self._initted) {
                self._init();
                if (!self._initted || self._gc) { //immediateRender tweens typically won't initialize until the playhead advances (_time is greater than 0) in order to ensure that overwriting occurs properly. Also, if all of the tweening properties have been overwritten (which would cause _gc to be true, as set in _init()), we shouldn't continue otherwise an onStart callback could be called for example.
                    return;
                } else if (!force && self._firstPT && ((self.vars.lazy !== false && self._duration) || (self.vars.lazy && !self._duration))) {
                    self._time = self._totalTime = prevTime;
                    self._rawPrevTime = prevRawPrevTime;
                    _lazyTweens.push(self);
                    self._lazy = [time, suppressEvents];
                    return;
                }
                //_ease is initially set to defaultEase, so now that init() has run, _ease is set properly and we need to recalculate the ratio. Overall this is faster than using conditional logic earlier in the method to avoid having to set ratio twice because we only init() once but renderTime() gets called VERY frequently.
                if (self._time && !isComplete) {
                    self.ratio = self._ease.getRatio(self._time / duration);
                } else if (isComplete && self._ease._calcEnd) {
                    self.ratio = self._ease.getRatio((self._time === 0) ? 0 : 1);
                }
            }
            if (self._lazy !== false) { //in case a lazy render is pending, we should flush it because the new render is occurring now (imagine a lazy tween instantiating and then immediately the user calls tween.seek(tween.duration()), skipping to the end - the end render would be forced, and then if we didn't flush the lazy render, it'd fire AFTER the seek(), rendering it at the wrong time.
                self._lazy = false;
            }
            if (!self._active) if (!self._paused && self._time !== prevTime && time >= 0) {
                self._active = true;  //so that if the user renders a tween (as opposed to the timeline rendering it), the timeline is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the tween already finished but the user manually re-renders it as halfway done.
            }
            if (prevTime === 0) {
                if (self._startAt) {
                    if (time >= 0) {
                        self._startAt.render(time, true, force);
                    } else if (!callback) {
                        callback = "_dummyGS"; //if no callback is defined, use a dummy value just so that the condition at the end evaluates as true because _startAt should render AFTER the normal render loop when the time is negative. We could handle this in a more intuitive way, of course, but the render loop is the MOST important thing to optimize, so this technique allows us to avoid adding extra conditional logic in a high-frequency area.
                    }
                }
                if (self.vars.onStart) if (self._time !== 0 || duration === 0) if (!suppressEvents) {
                    self._callback("onStart");
                }
            }
            pt = self._firstPT;
            while (pt) {
                if (pt.f) {
                    pt.t[pt.p](pt.c * self.ratio + pt.s);
                } else {
                    pt.t[pt.p] = pt.c * self.ratio + pt.s;
                }
                pt = pt._next;
            }

            if (self._onUpdate) {
                if (time < 0) if (self._startAt && time !== -0.0001) { //if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
                    self._startAt.render(time, true, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.
                }
                if (!suppressEvents) if (self._time !== prevTime || isComplete || force) {
                    self._callback("onUpdate");
                }
            }
            if (callback) if (!self._gc || force) { //check _gc because there's a chance that kill() could be called in an onUpdate
                if (time < 0 && self._startAt && !self._onUpdate && time !== -0.0001) { //-0.0001 is a special value that we use when looping back to the beginning of a repeated TimelineMax, in which case we shouldn't render the _startAt values.
                    self._startAt.render(time, true, force);
                }
                if (isComplete) {
                    if (self._timeline.autoRemoveChildren) {
                        self._enabled(false, false);
                    }
                    self._active = false;
                }
                if (!suppressEvents && self.vars[callback]) {
                    self._callback(callback);
                }
                if (duration === 0 && self._rawPrevTime === _tinyNum && rawPrevTime !== _tinyNum) { //the onComplete or onReverseComplete could trigger movement of the playhead and for zero-duration tweens (which must discern direction) that land directly back on their start time, we don't want to fire again on the next render. Think of several addPause()'s in a timeline that forces the playhead to a certain spot, but what if it's already paused and another tween is tweening the "time" of the timeline? Each time it moves [forward] past that spot, it would move back, and since suppressEvents is true, it'd reset _rawPrevTime to _tinyNum so that when it begins again, the callback would fire (so ultimately it could bounce back and forth during that tween). Again, this is a very uncommon scenario, but possible nonetheless.
                    self._rawPrevTime = 0;
                }
            }
        };

        //* TweenMove static methods *//
        TweenMove.go = function(target, duration, vars) {
            return new TweenMove(target, duration, vars);
        };

        /* TweenPlugin */
        var TweenPlugin = _class("plugins.TweenPlugin", function(props, priority) {
                    this._overwriteProps = (props || "").split(",");
                    this._propName = this._overwriteProps[0];
                    this._priority = priority || 0;
                    this._super = TweenPlugin.prototype;
                }, true);

        p = TweenPlugin.prototype;
        TweenPlugin.API = 2;
        p._firstPT = null;
        p._addTween = _addPropTween;
        p.setRatio = _setRatio;


        TweenPlugin.activate = function(plugins) {
            var i = plugins.length;
            while (--i > -1) {
                if (plugins[i].API === TweenPlugin.API) {
                    _plugins[(new plugins[i]())._propName] = plugins[i];
                }
            }
            return true;
        };

        //provides a more concise way to define plugins that have no dependencies besides TweenPlugin and TweenMove, wrapping common boilerplate stuff into one function (added in 1.9.0). You don't NEED to use this to define a plugin - the old way still works and can be useful in certain (rare) situations.
        _hjDefine.plugin = function(config) {
            if (!config || !config.propName || !config.init || !config.API) { throw "illegal plugin definition."; }
            var propName = config.propName,
                priority = config.priority || 0,
                overwriteProps = config.overwriteProps,
                Plugin = _class("plugins." + propName.charAt(0).toUpperCase() + propName.substr(1) + "Plugin",
                    function() {
                        TweenPlugin.call(this, propName, priority);
                        this._overwriteProps = overwriteProps || [];
                    }, (config.global === true)),
                p = Plugin.prototype = new TweenPlugin(propName),
                prop;
            p.constructor = Plugin;
            Plugin.API = config.API;
            TweenPlugin.activate([Plugin]);
            return Plugin;
        };


        //now run through all the dependencies discovered and if any are missing, log that to the console as a warning. This is why it's best to have TweenMove load last - it can check all the dependencies for you.
        a = window._hjQueue;
        if (a) {
            for (i = 0; i < a.length; i++) {
                a[i]();
            }
        }

        _tickerActive = false; //ensures that the first official animation forces a ticker.tick() to update the time when it is instantiated

})((typeof(module) !== "undefined" && module.exports && typeof(global) !== "undefined") ? global : this || window, "TweenLab");
var app =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(298);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	__webpack_require__(2);
	
	__webpack_require__(293);
	
	__webpack_require__(295);
	
	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel-polyfill is allowed");
	}
	global._babelPolyfill = true;
	
	var DEFINE_PROPERTY = "defineProperty";
	function define(O, key, value) {
	  O[key] || Object[DEFINE_PROPERTY](O, key, {
	    writable: true,
	    configurable: true,
	    value: value
	  });
	}
	
	define(String.prototype, "padLeft", "".padStart);
	define(String.prototype, "padRight", "".padEnd);
	
	"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
	  [][key] && define(Array, key, Function.call.bind([][key]));
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	__webpack_require__(52);
	__webpack_require__(53);
	__webpack_require__(54);
	__webpack_require__(55);
	__webpack_require__(57);
	__webpack_require__(60);
	__webpack_require__(61);
	__webpack_require__(62);
	__webpack_require__(63);
	__webpack_require__(64);
	__webpack_require__(65);
	__webpack_require__(66);
	__webpack_require__(67);
	__webpack_require__(68);
	__webpack_require__(70);
	__webpack_require__(72);
	__webpack_require__(74);
	__webpack_require__(76);
	__webpack_require__(79);
	__webpack_require__(80);
	__webpack_require__(81);
	__webpack_require__(85);
	__webpack_require__(87);
	__webpack_require__(89);
	__webpack_require__(92);
	__webpack_require__(93);
	__webpack_require__(94);
	__webpack_require__(95);
	__webpack_require__(97);
	__webpack_require__(98);
	__webpack_require__(99);
	__webpack_require__(100);
	__webpack_require__(101);
	__webpack_require__(102);
	__webpack_require__(103);
	__webpack_require__(105);
	__webpack_require__(106);
	__webpack_require__(107);
	__webpack_require__(109);
	__webpack_require__(110);
	__webpack_require__(111);
	__webpack_require__(113);
	__webpack_require__(114);
	__webpack_require__(115);
	__webpack_require__(116);
	__webpack_require__(117);
	__webpack_require__(118);
	__webpack_require__(119);
	__webpack_require__(120);
	__webpack_require__(121);
	__webpack_require__(122);
	__webpack_require__(123);
	__webpack_require__(124);
	__webpack_require__(125);
	__webpack_require__(126);
	__webpack_require__(131);
	__webpack_require__(132);
	__webpack_require__(136);
	__webpack_require__(137);
	__webpack_require__(138);
	__webpack_require__(139);
	__webpack_require__(141);
	__webpack_require__(142);
	__webpack_require__(143);
	__webpack_require__(144);
	__webpack_require__(145);
	__webpack_require__(146);
	__webpack_require__(147);
	__webpack_require__(148);
	__webpack_require__(149);
	__webpack_require__(150);
	__webpack_require__(151);
	__webpack_require__(152);
	__webpack_require__(153);
	__webpack_require__(154);
	__webpack_require__(155);
	__webpack_require__(156);
	__webpack_require__(157);
	__webpack_require__(159);
	__webpack_require__(160);
	__webpack_require__(166);
	__webpack_require__(167);
	__webpack_require__(169);
	__webpack_require__(170);
	__webpack_require__(171);
	__webpack_require__(175);
	__webpack_require__(176);
	__webpack_require__(177);
	__webpack_require__(178);
	__webpack_require__(179);
	__webpack_require__(181);
	__webpack_require__(182);
	__webpack_require__(183);
	__webpack_require__(184);
	__webpack_require__(187);
	__webpack_require__(189);
	__webpack_require__(190);
	__webpack_require__(191);
	__webpack_require__(193);
	__webpack_require__(195);
	__webpack_require__(197);
	__webpack_require__(198);
	__webpack_require__(199);
	__webpack_require__(201);
	__webpack_require__(202);
	__webpack_require__(203);
	__webpack_require__(204);
	__webpack_require__(211);
	__webpack_require__(214);
	__webpack_require__(215);
	__webpack_require__(217);
	__webpack_require__(218);
	__webpack_require__(221);
	__webpack_require__(222);
	__webpack_require__(224);
	__webpack_require__(225);
	__webpack_require__(226);
	__webpack_require__(227);
	__webpack_require__(228);
	__webpack_require__(229);
	__webpack_require__(230);
	__webpack_require__(231);
	__webpack_require__(232);
	__webpack_require__(233);
	__webpack_require__(234);
	__webpack_require__(235);
	__webpack_require__(236);
	__webpack_require__(237);
	__webpack_require__(238);
	__webpack_require__(239);
	__webpack_require__(240);
	__webpack_require__(241);
	__webpack_require__(242);
	__webpack_require__(244);
	__webpack_require__(245);
	__webpack_require__(246);
	__webpack_require__(247);
	__webpack_require__(248);
	__webpack_require__(249);
	__webpack_require__(251);
	__webpack_require__(252);
	__webpack_require__(253);
	__webpack_require__(254);
	__webpack_require__(255);
	__webpack_require__(256);
	__webpack_require__(257);
	__webpack_require__(258);
	__webpack_require__(260);
	__webpack_require__(261);
	__webpack_require__(263);
	__webpack_require__(264);
	__webpack_require__(265);
	__webpack_require__(266);
	__webpack_require__(269);
	__webpack_require__(270);
	__webpack_require__(271);
	__webpack_require__(272);
	__webpack_require__(273);
	__webpack_require__(274);
	__webpack_require__(275);
	__webpack_require__(276);
	__webpack_require__(278);
	__webpack_require__(279);
	__webpack_require__(280);
	__webpack_require__(281);
	__webpack_require__(282);
	__webpack_require__(283);
	__webpack_require__(284);
	__webpack_require__(285);
	__webpack_require__(286);
	__webpack_require__(287);
	__webpack_require__(288);
	__webpack_require__(291);
	__webpack_require__(292);
	module.exports = __webpack_require__(9);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(4)
	  , has            = __webpack_require__(5)
	  , DESCRIPTORS    = __webpack_require__(6)
	  , $export        = __webpack_require__(8)
	  , redefine       = __webpack_require__(18)
	  , META           = __webpack_require__(22).KEY
	  , $fails         = __webpack_require__(7)
	  , shared         = __webpack_require__(23)
	  , setToStringTag = __webpack_require__(24)
	  , uid            = __webpack_require__(19)
	  , wks            = __webpack_require__(25)
	  , wksExt         = __webpack_require__(26)
	  , wksDefine      = __webpack_require__(27)
	  , keyOf          = __webpack_require__(29)
	  , enumKeys       = __webpack_require__(42)
	  , isArray        = __webpack_require__(45)
	  , anObject       = __webpack_require__(12)
	  , toIObject      = __webpack_require__(32)
	  , toPrimitive    = __webpack_require__(16)
	  , createDesc     = __webpack_require__(17)
	  , _create        = __webpack_require__(46)
	  , gOPNExt        = __webpack_require__(49)
	  , $GOPD          = __webpack_require__(51)
	  , $DP            = __webpack_require__(11)
	  , $keys          = __webpack_require__(30)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(50).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(44).f  = $propertyIsEnumerable;
	  __webpack_require__(43).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(28)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
	
	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);
	
	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(10)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 4 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 5 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(7)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , core      = __webpack_require__(9)
	  , hide      = __webpack_require__(10)
	  , redefine  = __webpack_require__(18)
	  , ctx       = __webpack_require__(20)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target)redefine(target, key, out, type & $export.U);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 9 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(11)
	  , createDesc = __webpack_require__(17);
	module.exports = __webpack_require__(6) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(12)
	  , IE8_DOM_DEFINE = __webpack_require__(14)
	  , toPrimitive    = __webpack_require__(16)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(6) && !__webpack_require__(7)(function(){
	  return Object.defineProperty(__webpack_require__(15)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13)
	  , document = __webpack_require__(4).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(13);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , hide      = __webpack_require__(10)
	  , has       = __webpack_require__(5)
	  , SRC       = __webpack_require__(19)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);
	
	__webpack_require__(9).inspectSource = function(it){
	  return $toString.call(it);
	};
	
	(module.exports = function(O, key, val, safe){
	  var isFunction = typeof val == 'function';
	  if(isFunction)has(val, 'name') || hide(val, 'name', key);
	  if(O[key] === val)return;
	  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe){
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if(O[key])O[key] = val;
	      else hide(O, key, val);
	    }
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 19 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(21);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(19)('meta')
	  , isObject = __webpack_require__(13)
	  , has      = __webpack_require__(5)
	  , setDesc  = __webpack_require__(11).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(7)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(11).f
	  , has = __webpack_require__(5)
	  , TAG = __webpack_require__(25)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(23)('wks')
	  , uid        = __webpack_require__(19)
	  , Symbol     = __webpack_require__(4).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(25);

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(4)
	  , core           = __webpack_require__(9)
	  , LIBRARY        = __webpack_require__(28)
	  , wksExt         = __webpack_require__(26)
	  , defineProperty = __webpack_require__(11).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(30)
	  , toIObject = __webpack_require__(32);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(31)
	  , enumBugKeys = __webpack_require__(41);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(5)
	  , toIObject    = __webpack_require__(32)
	  , arrayIndexOf = __webpack_require__(36)(false)
	  , IE_PROTO     = __webpack_require__(40)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(33)
	  , defined = __webpack_require__(35);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(34);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(32)
	  , toLength  = __webpack_require__(37)
	  , toIndex   = __webpack_require__(39);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(38)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(38)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(23)('keys')
	  , uid    = __webpack_require__(19);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(30)
	  , gOPS    = __webpack_require__(43)
	  , pIE     = __webpack_require__(44);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 44 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(34);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(12)
	  , dPs         = __webpack_require__(47)
	  , enumBugKeys = __webpack_require__(41)
	  , IE_PROTO    = __webpack_require__(40)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(15)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(48).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(11)
	  , anObject = __webpack_require__(12)
	  , getKeys  = __webpack_require__(30);
	
	module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4).document && document.documentElement;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(32)
	  , gOPN      = __webpack_require__(50).f
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(31)
	  , hiddenKeys = __webpack_require__(41).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(44)
	  , createDesc     = __webpack_require__(17)
	  , toIObject      = __webpack_require__(32)
	  , toPrimitive    = __webpack_require__(16)
	  , has            = __webpack_require__(5)
	  , IE8_DOM_DEFINE = __webpack_require__(14)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(6) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(46)});

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(6), 'Object', {defineProperty: __webpack_require__(11).f});

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	$export($export.S + $export.F * !__webpack_require__(6), 'Object', {defineProperties: __webpack_require__(47)});

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(32)
	  , $getOwnPropertyDescriptor = __webpack_require__(51).f;
	
	__webpack_require__(56)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(8)
	  , core    = __webpack_require__(9)
	  , fails   = __webpack_require__(7);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(58)
	  , $getPrototypeOf = __webpack_require__(59);
	
	__webpack_require__(56)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(35);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(5)
	  , toObject    = __webpack_require__(58)
	  , IE_PROTO    = __webpack_require__(40)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(58)
	  , $keys    = __webpack_require__(30);
	
	__webpack_require__(56)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(56)('getOwnPropertyNames', function(){
	  return __webpack_require__(49).f;
	});

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(13)
	  , meta     = __webpack_require__(22).onFreeze;
	
	__webpack_require__(56)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(13)
	  , meta     = __webpack_require__(22).onFreeze;
	
	__webpack_require__(56)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(meta(it)) : it;
	  };
	});

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(13)
	  , meta     = __webpack_require__(22).onFreeze;
	
	__webpack_require__(56)('preventExtensions', function($preventExtensions){
	  return function preventExtensions(it){
	    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
	  };
	});

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(13);
	
	__webpack_require__(56)('isFrozen', function($isFrozen){
	  return function isFrozen(it){
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(13);
	
	__webpack_require__(56)('isSealed', function($isSealed){
	  return function isSealed(it){
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(13);
	
	__webpack_require__(56)('isExtensible', function($isExtensible){
	  return function isExtensible(it){
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(8);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(69)});

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(30)
	  , gOPS     = __webpack_require__(43)
	  , pIE      = __webpack_require__(44)
	  , toObject = __webpack_require__(58)
	  , IObject  = __webpack_require__(33)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(7)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(8);
	$export($export.S, 'Object', {is: __webpack_require__(71)});

/***/ },
/* 71 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(8);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(73).set});

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(13)
	  , anObject = __webpack_require__(12);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(20)(Function.call, __webpack_require__(51).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(75)
	  , test    = {};
	test[__webpack_require__(25)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  __webpack_require__(18)(Object.prototype, 'toString', function toString(){
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(34)
	  , TAG = __webpack_require__(25)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	var $export = __webpack_require__(8);
	
	$export($export.P, 'Function', {bind: __webpack_require__(77)});

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var aFunction  = __webpack_require__(21)
	  , isObject   = __webpack_require__(13)
	  , invoke     = __webpack_require__(78)
	  , arraySlice = [].slice
	  , factories  = {};
	
	var construct = function(F, len, args){
	  if(!(len in factories)){
	    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  } return factories[len](F, args);
	};
	
	module.exports = Function.bind || function bind(that /*, args... */){
	  var fn       = aFunction(this)
	    , partArgs = arraySlice.call(arguments, 1);
	  var bound = function(/* args... */){
	    var args = partArgs.concat(arraySlice.call(arguments));
	    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	  };
	  if(isObject(fn.prototype))bound.prototype = fn.prototype;
	  return bound;
	};

/***/ },
/* 78 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(11).f
	  , createDesc = __webpack_require__(17)
	  , has        = __webpack_require__(5)
	  , FProto     = Function.prototype
	  , nameRE     = /^\s*function ([^ (]*)/
	  , NAME       = 'name';
	
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	
	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(6) && dP(FProto, NAME, {
	  configurable: true,
	  get: function(){
	    try {
	      var that = this
	        , name = ('' + that).match(nameRE)[1];
	      has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
	      return name;
	    } catch(e){
	      return '';
	    }
	  }
	});

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var isObject       = __webpack_require__(13)
	  , getPrototypeOf = __webpack_require__(59)
	  , HAS_INSTANCE   = __webpack_require__(25)('hasInstance')
	  , FunctionProto  = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if(!(HAS_INSTANCE in FunctionProto))__webpack_require__(11).f(FunctionProto, HAS_INSTANCE, {value: function(O){
	  if(typeof this != 'function' || !isObject(O))return false;
	  if(!isObject(this.prototype))return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while(O = getPrototypeOf(O))if(this.prototype === O)return true;
	  return false;
	}});

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(8)
	  , $parseInt = __webpack_require__(82);
	// 18.2.5 parseInt(string, radix)
	$export($export.G + $export.F * (parseInt != $parseInt), {parseInt: $parseInt});

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var $parseInt = __webpack_require__(4).parseInt
	  , $trim     = __webpack_require__(83).trim
	  , ws        = __webpack_require__(84)
	  , hex       = /^[\-+]?0[xX]/;
	
	module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix){
	  var string = $trim(String(str), 3);
	  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
	} : $parseInt;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	  , defined = __webpack_require__(35)
	  , fails   = __webpack_require__(7)
	  , spaces  = __webpack_require__(84)
	  , space   = '[' + spaces + ']'
	  , non     = '\u200b\u0085'
	  , ltrim   = RegExp('^' + space + space + '*')
	  , rtrim   = RegExp(space + space + '*$');
	
	var exporter = function(KEY, exec, ALIAS){
	  var exp   = {};
	  var FORCE = fails(function(){
	    return !!spaces[KEY]() || non[KEY]() != non;
	  });
	  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
	  if(ALIAS)exp[ALIAS] = fn;
	  $export($export.P + $export.F * FORCE, 'String', exp);
	};
	
	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function(string, TYPE){
	  string = String(defined(string));
	  if(TYPE & 1)string = string.replace(ltrim, '');
	  if(TYPE & 2)string = string.replace(rtrim, '');
	  return string;
	};
	
	module.exports = exporter;

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(8)
	  , $parseFloat = __webpack_require__(86);
	// 18.2.4 parseFloat(string)
	$export($export.G + $export.F * (parseFloat != $parseFloat), {parseFloat: $parseFloat});

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var $parseFloat = __webpack_require__(4).parseFloat
	  , $trim       = __webpack_require__(83).trim;
	
	module.exports = 1 / $parseFloat(__webpack_require__(84) + '-0') !== -Infinity ? function parseFloat(str){
	  var string = $trim(String(str), 3)
	    , result = $parseFloat(string);
	  return result === 0 && string.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(4)
	  , has               = __webpack_require__(5)
	  , cof               = __webpack_require__(34)
	  , inheritIfRequired = __webpack_require__(88)
	  , toPrimitive       = __webpack_require__(16)
	  , fails             = __webpack_require__(7)
	  , gOPN              = __webpack_require__(50).f
	  , gOPD              = __webpack_require__(51).f
	  , dP                = __webpack_require__(11).f
	  , $trim             = __webpack_require__(83).trim
	  , NUMBER            = 'Number'
	  , $Number           = global[NUMBER]
	  , Base              = $Number
	  , proto             = $Number.prototype
	  // Opera ~12 has broken Object#toString
	  , BROKEN_COF        = cof(__webpack_require__(46)(proto)) == NUMBER
	  , TRIM              = 'trim' in String.prototype;
	
	// 7.1.3 ToNumber(argument)
	var toNumber = function(argument){
	  var it = toPrimitive(argument, false);
	  if(typeof it == 'string' && it.length > 2){
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0)
	      , third, radix, maxCode;
	    if(first === 43 || first === 45){
	      third = it.charCodeAt(2);
	      if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if(first === 48){
	      switch(it.charCodeAt(1)){
	        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default : return +it;
	      }
	      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if(code < 48 || code > maxCode)return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};
	
	if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
	  $Number = function Number(value){
	    var it = arguments.length < 1 ? 0 : value
	      , that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
	        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
	  };
	  for(var keys = __webpack_require__(6) ? gOPN(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), j = 0, key; keys.length > j; j++){
	    if(has(Base, key = keys[j]) && !has($Number, key)){
	      dP($Number, key, gOPD(Base, key));
	    }
	  }
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(18)(global, NUMBER, $Number);
	}

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var isObject       = __webpack_require__(13)
	  , setPrototypeOf = __webpack_require__(73).set;
	module.exports = function(that, target, C){
	  var P, S = target.constructor;
	  if(S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf){
	    setPrototypeOf(that, P);
	  } return that;
	};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(8)
	  , toInteger    = __webpack_require__(38)
	  , aNumberValue = __webpack_require__(90)
	  , repeat       = __webpack_require__(91)
	  , $toFixed     = 1..toFixed
	  , floor        = Math.floor
	  , data         = [0, 0, 0, 0, 0, 0]
	  , ERROR        = 'Number.toFixed: incorrect invocation!'
	  , ZERO         = '0';
	
	var multiply = function(n, c){
	  var i  = -1
	    , c2 = c;
	  while(++i < 6){
	    c2 += n * data[i];
	    data[i] = c2 % 1e7;
	    c2 = floor(c2 / 1e7);
	  }
	};
	var divide = function(n){
	  var i = 6
	    , c = 0;
	  while(--i >= 0){
	    c += data[i];
	    data[i] = floor(c / n);
	    c = (c % n) * 1e7;
	  }
	};
	var numToString = function(){
	  var i = 6
	    , s = '';
	  while(--i >= 0){
	    if(s !== '' || i === 0 || data[i] !== 0){
	      var t = String(data[i]);
	      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
	    }
	  } return s;
	};
	var pow = function(x, n, acc){
	  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
	};
	var log = function(x){
	  var n  = 0
	    , x2 = x;
	  while(x2 >= 4096){
	    n += 12;
	    x2 /= 4096;
	  }
	  while(x2 >= 2){
	    n  += 1;
	    x2 /= 2;
	  } return n;
	};
	
	$export($export.P + $export.F * (!!$toFixed && (
	  0.00008.toFixed(3) !== '0.000' ||
	  0.9.toFixed(0) !== '1' ||
	  1.255.toFixed(2) !== '1.25' ||
	  1000000000000000128..toFixed(0) !== '1000000000000000128'
	) || !__webpack_require__(7)(function(){
	  // V8 ~ Android 4.3-
	  $toFixed.call({});
	})), 'Number', {
	  toFixed: function toFixed(fractionDigits){
	    var x = aNumberValue(this, ERROR)
	      , f = toInteger(fractionDigits)
	      , s = ''
	      , m = ZERO
	      , e, z, j, k;
	    if(f < 0 || f > 20)throw RangeError(ERROR);
	    if(x != x)return 'NaN';
	    if(x <= -1e21 || x >= 1e21)return String(x);
	    if(x < 0){
	      s = '-';
	      x = -x;
	    }
	    if(x > 1e-21){
	      e = log(x * pow(2, 69, 1)) - 69;
	      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
	      z *= 0x10000000000000;
	      e = 52 - e;
	      if(e > 0){
	        multiply(0, z);
	        j = f;
	        while(j >= 7){
	          multiply(1e7, 0);
	          j -= 7;
	        }
	        multiply(pow(10, j, 1), 0);
	        j = e - 1;
	        while(j >= 23){
	          divide(1 << 23);
	          j -= 23;
	        }
	        divide(1 << j);
	        multiply(1, 1);
	        divide(2);
	        m = numToString();
	      } else {
	        multiply(0, z);
	        multiply(1 << -e, 0);
	        m = numToString() + repeat.call(ZERO, f);
	      }
	    }
	    if(f > 0){
	      k = m.length;
	      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
	    } else {
	      m = s + m;
	    } return m;
	  }
	});

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var cof = __webpack_require__(34);
	module.exports = function(it, msg){
	  if(typeof it != 'number' && cof(it) != 'Number')throw TypeError(msg);
	  return +it;
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(38)
	  , defined   = __webpack_require__(35);
	
	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(8)
	  , $fails       = __webpack_require__(7)
	  , aNumberValue = __webpack_require__(90)
	  , $toPrecision = 1..toPrecision;
	
	$export($export.P + $export.F * ($fails(function(){
	  // IE7-
	  return $toPrecision.call(1, undefined) !== '1';
	}) || !$fails(function(){
	  // V8 ~ Android 4.3-
	  $toPrecision.call({});
	})), 'Number', {
	  toPrecision: function toPrecision(precision){
	    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
	    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision); 
	  }
	});

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export   = __webpack_require__(8)
	  , _isFinite = __webpack_require__(4).isFinite;
	
	$export($export.S, 'Number', {
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Number', {isInteger: __webpack_require__(96)});

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(13)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(8)
	  , isInteger = __webpack_require__(96)
	  , abs       = Math.abs;
	
	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(8)
	  , $parseFloat = __webpack_require__(86);
	// 20.1.2.12 Number.parseFloat(string)
	$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {parseFloat: $parseFloat});

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(8)
	  , $parseInt = __webpack_require__(82);
	// 20.1.2.13 Number.parseInt(string, radix)
	$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {parseInt: $parseInt});

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(8)
	  , log1p   = __webpack_require__(104)
	  , sqrt    = Math.sqrt
	  , $acosh  = Math.acosh;
	
	$export($export.S + $export.F * !($acosh
	  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
	  && Math.floor($acosh(Number.MAX_VALUE)) == 710
	  // Tor Browser bug: Math.acosh(Infinity) -> NaN 
	  && $acosh(Infinity) == Infinity
	), 'Math', {
	  acosh: function acosh(x){
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

/***/ },
/* 104 */
/***/ function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x){
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(8)
	  , $asinh  = Math.asinh;
	
	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}
	
	// Tor Browser bug: Math.asinh(0) -> -0 
	$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {asinh: asinh});

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(8)
	  , $atanh  = Math.atanh;
	
	// Tor Browser bug: Math.atanh(-0) -> 0 
	$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(8)
	  , sign    = __webpack_require__(108);
	
	$export($export.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
/* 108 */
/***/ function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(8)
	  , exp     = Math.exp;
	
	$export($export.S, 'Math', {
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(8)
	  , $expm1  = __webpack_require__(112);
	
	$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {expm1: $expm1});

/***/ },
/* 112 */
/***/ function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	var $expm1 = Math.expm1;
	module.exports = (!$expm1
	  // Old FF bug
	  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
	  // Tor Browser bug
	  || $expm1(-2e-17) != -2e-17
	) ? function expm1(x){
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	} : $expm1;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export   = __webpack_require__(8)
	  , sign      = __webpack_require__(108)
	  , pow       = Math.pow
	  , EPSILON   = pow(2, -52)
	  , EPSILON32 = pow(2, -23)
	  , MAX32     = pow(2, 127) * (2 - EPSILON32)
	  , MIN32     = pow(2, -126);
	
	var roundTiesToEven = function(n){
	  return n + 1 / EPSILON - 1 / EPSILON;
	};
	
	
	$export($export.S, 'Math', {
	  fround: function fround(x){
	    var $abs  = Math.abs(x)
	      , $sign = sign(x)
	      , a, result;
	    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if(result > MAX32 || result != result)return $sign * Infinity;
	    return $sign * result;
	  }
	});

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(8)
	  , abs     = Math.abs;
	
	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
	    var sum  = 0
	      , i    = 0
	      , aLen = arguments.length
	      , larg = 0
	      , arg, div;
	    while(i < aLen){
	      arg = abs(arguments[i++]);
	      if(larg < arg){
	        div  = larg / arg;
	        sum  = sum * div * div + 1;
	        larg = arg;
	      } else if(arg > 0){
	        div  = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(8)
	  , $imul   = Math.imul;
	
	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y){
	    var UINT16 = 0xffff
	      , xn = +x
	      , yn = +y
	      , xl = UINT16 & xn
	      , yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {log1p: __webpack_require__(104)});

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {sign: __webpack_require__(108)});

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(8)
	  , expm1   = __webpack_require__(112)
	  , exp     = Math.exp;
	
	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x){
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(8)
	  , expm1   = __webpack_require__(112)
	  , exp     = Math.exp;
	
	$export($export.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(8)
	  , toIndex        = __webpack_require__(39)
	  , fromCharCode   = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;
	
	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res  = []
	      , aLen = arguments.length
	      , i    = 0
	      , code;
	    while(aLen > i){
	      code = +arguments[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(8)
	  , toIObject = __webpack_require__(32)
	  , toLength  = __webpack_require__(37);
	
	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite){
	    var tpl  = toIObject(callSite.raw)
	      , len  = toLength(tpl.length)
	      , aLen = arguments.length
	      , res  = []
	      , i    = 0;
	    while(len > i){
	      res.push(String(tpl[i++]));
	      if(i < aLen)res.push(String(arguments[i]));
	    } return res.join('');
	  }
	});

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(83)('trim', function($trim){
	  return function trim(){
	    return $trim(this, 3);
	  };
	});

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(127)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(128)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(38)
	  , defined   = __webpack_require__(35);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(28)
	  , $export        = __webpack_require__(8)
	  , redefine       = __webpack_require__(18)
	  , hide           = __webpack_require__(10)
	  , has            = __webpack_require__(5)
	  , Iterators      = __webpack_require__(129)
	  , $iterCreate    = __webpack_require__(130)
	  , setToStringTag = __webpack_require__(24)
	  , getPrototypeOf = __webpack_require__(59)
	  , ITERATOR       = __webpack_require__(25)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 129 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(46)
	  , descriptor     = __webpack_require__(17)
	  , setToStringTag = __webpack_require__(24)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(10)(IteratorPrototype, __webpack_require__(25)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $at     = __webpack_require__(127)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export   = __webpack_require__(8)
	  , toLength  = __webpack_require__(37)
	  , context   = __webpack_require__(133)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(135)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */){
	    var that = context(this, searchString, ENDS_WITH)
	      , endPosition = arguments.length > 1 ? arguments[1] : undefined
	      , len    = toLength(that.length)
	      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
	      , search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(134)
	  , defined  = __webpack_require__(35);
	
	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(13)
	  , cof      = __webpack_require__(34)
	  , MATCH    = __webpack_require__(25)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(25)('match');
	module.exports = function(KEY){
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch(e){
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch(f){ /* empty */ }
	  } return true;
	};

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export  = __webpack_require__(8)
	  , context  = __webpack_require__(133)
	  , INCLUDES = 'includes';
	
	$export($export.P + $export.F * __webpack_require__(135)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	
	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(91)
	});

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export     = __webpack_require__(8)
	  , toLength    = __webpack_require__(37)
	  , context     = __webpack_require__(133)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(135)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */){
	    var that   = context(this, searchString, STARTS_WITH)
	      , index  = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length))
	      , search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.2 String.prototype.anchor(name)
	__webpack_require__(140)('anchor', function(createHTML){
	  return function anchor(name){
	    return createHTML(this, 'a', 'name', name);
	  }
	});

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	  , fails   = __webpack_require__(7)
	  , defined = __webpack_require__(35)
	  , quot    = /"/g;
	// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
	var createHTML = function(string, tag, attribute, value) {
	  var S  = String(defined(string))
	    , p1 = '<' + tag;
	  if(attribute !== '')p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
	  return p1 + '>' + S + '</' + tag + '>';
	};
	module.exports = function(NAME, exec){
	  var O = {};
	  O[NAME] = exec(createHTML);
	  $export($export.P + $export.F * fails(function(){
	    var test = ''[NAME]('"');
	    return test !== test.toLowerCase() || test.split('"').length > 3;
	  }), 'String', O);
	};

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.3 String.prototype.big()
	__webpack_require__(140)('big', function(createHTML){
	  return function big(){
	    return createHTML(this, 'big', '', '');
	  }
	});

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.4 String.prototype.blink()
	__webpack_require__(140)('blink', function(createHTML){
	  return function blink(){
	    return createHTML(this, 'blink', '', '');
	  }
	});

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.5 String.prototype.bold()
	__webpack_require__(140)('bold', function(createHTML){
	  return function bold(){
	    return createHTML(this, 'b', '', '');
	  }
	});

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.6 String.prototype.fixed()
	__webpack_require__(140)('fixed', function(createHTML){
	  return function fixed(){
	    return createHTML(this, 'tt', '', '');
	  }
	});

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.7 String.prototype.fontcolor(color)
	__webpack_require__(140)('fontcolor', function(createHTML){
	  return function fontcolor(color){
	    return createHTML(this, 'font', 'color', color);
	  }
	});

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.8 String.prototype.fontsize(size)
	__webpack_require__(140)('fontsize', function(createHTML){
	  return function fontsize(size){
	    return createHTML(this, 'font', 'size', size);
	  }
	});

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.9 String.prototype.italics()
	__webpack_require__(140)('italics', function(createHTML){
	  return function italics(){
	    return createHTML(this, 'i', '', '');
	  }
	});

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.10 String.prototype.link(url)
	__webpack_require__(140)('link', function(createHTML){
	  return function link(url){
	    return createHTML(this, 'a', 'href', url);
	  }
	});

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.11 String.prototype.small()
	__webpack_require__(140)('small', function(createHTML){
	  return function small(){
	    return createHTML(this, 'small', '', '');
	  }
	});

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.12 String.prototype.strike()
	__webpack_require__(140)('strike', function(createHTML){
	  return function strike(){
	    return createHTML(this, 'strike', '', '');
	  }
	});

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.13 String.prototype.sub()
	__webpack_require__(140)('sub', function(createHTML){
	  return function sub(){
	    return createHTML(this, 'sub', '', '');
	  }
	});

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.14 String.prototype.sup()
	__webpack_require__(140)('sup', function(createHTML){
	  return function sup(){
	    return createHTML(this, 'sup', '', '');
	  }
	});

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	// 20.3.3.1 / 15.9.4.4 Date.now()
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Date', {now: function(){ return new Date().getTime(); }});

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export     = __webpack_require__(8)
	  , toObject    = __webpack_require__(58)
	  , toPrimitive = __webpack_require__(16);
	
	$export($export.P + $export.F * __webpack_require__(7)(function(){
	  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({toISOString: function(){ return 1; }}) !== 1;
	}), 'Date', {
	  toJSON: function toJSON(key){
	    var O  = toObject(this)
	      , pv = toPrimitive(O);
	    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
	  }
	});

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	var $export = __webpack_require__(8)
	  , fails   = __webpack_require__(7)
	  , getTime = Date.prototype.getTime;
	
	var lz = function(num){
	  return num > 9 ? num : '0' + num;
	};
	
	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (fails(function(){
	  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
	}) || !fails(function(){
	  new Date(NaN).toISOString();
	})), 'Date', {
	  toISOString: function toISOString(){
	    if(!isFinite(getTime.call(this)))throw RangeError('Invalid time value');
	    var d = this
	      , y = d.getUTCFullYear()
	      , m = d.getUTCMilliseconds()
	      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
	    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	  }
	});

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	var DateProto    = Date.prototype
	  , INVALID_DATE = 'Invalid Date'
	  , TO_STRING    = 'toString'
	  , $toString    = DateProto[TO_STRING]
	  , getTime      = DateProto.getTime;
	if(new Date(NaN) + '' != INVALID_DATE){
	  __webpack_require__(18)(DateProto, TO_STRING, function toString(){
	    var value = getTime.call(this);
	    return value === value ? $toString.call(this) : INVALID_DATE;
	  });
	}

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	var TO_PRIMITIVE = __webpack_require__(25)('toPrimitive')
	  , proto        = Date.prototype;
	
	if(!(TO_PRIMITIVE in proto))__webpack_require__(10)(proto, TO_PRIMITIVE, __webpack_require__(158));

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var anObject    = __webpack_require__(12)
	  , toPrimitive = __webpack_require__(16)
	  , NUMBER      = 'number';
	
	module.exports = function(hint){
	  if(hint !== 'string' && hint !== NUMBER && hint !== 'default')throw TypeError('Incorrect hint');
	  return toPrimitive(anObject(this), hint != NUMBER);
	};

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Array', {isArray: __webpack_require__(45)});

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(20)
	  , $export        = __webpack_require__(8)
	  , toObject       = __webpack_require__(58)
	  , call           = __webpack_require__(161)
	  , isArrayIter    = __webpack_require__(162)
	  , toLength       = __webpack_require__(37)
	  , createProperty = __webpack_require__(163)
	  , getIterFn      = __webpack_require__(164);
	
	$export($export.S + $export.F * !__webpack_require__(165)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(12);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(129)
	  , ITERATOR   = __webpack_require__(25)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(11)
	  , createDesc      = __webpack_require__(17);
	
	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(75)
	  , ITERATOR  = __webpack_require__(25)('iterator')
	  , Iterators = __webpack_require__(129);
	module.exports = __webpack_require__(9).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(25)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export        = __webpack_require__(8)
	  , createProperty = __webpack_require__(163);
	
	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  function F(){}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */){
	    var index  = 0
	      , aLen   = arguments.length
	      , result = new (typeof this == 'function' ? this : Array)(aLen);
	    while(aLen > index)createProperty(result, index, arguments[index++]);
	    result.length = aLen;
	    return result;
	  }
	});

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.13 Array.prototype.join(separator)
	var $export   = __webpack_require__(8)
	  , toIObject = __webpack_require__(32)
	  , arrayJoin = [].join;
	
	// fallback for not array-like strings
	$export($export.P + $export.F * (__webpack_require__(33) != Object || !__webpack_require__(168)(arrayJoin)), 'Array', {
	  join: function join(separator){
	    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
	  }
	});

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	var fails = __webpack_require__(7);
	
	module.exports = function(method, arg){
	  return !!method && fails(function(){
	    arg ? method.call(null, function(){}, 1) : method.call(null);
	  });
	};

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export    = __webpack_require__(8)
	  , html       = __webpack_require__(48)
	  , cof        = __webpack_require__(34)
	  , toIndex    = __webpack_require__(39)
	  , toLength   = __webpack_require__(37)
	  , arraySlice = [].slice;
	
	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * __webpack_require__(7)(function(){
	  if(html)arraySlice.call(html);
	}), 'Array', {
	  slice: function slice(begin, end){
	    var len   = toLength(this.length)
	      , klass = cof(this);
	    end = end === undefined ? len : end;
	    if(klass == 'Array')return arraySlice.call(this, begin, end);
	    var start  = toIndex(begin, len)
	      , upTo   = toIndex(end, len)
	      , size   = toLength(upTo - start)
	      , cloned = Array(size)
	      , i      = 0;
	    for(; i < size; i++)cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export   = __webpack_require__(8)
	  , aFunction = __webpack_require__(21)
	  , toObject  = __webpack_require__(58)
	  , fails     = __webpack_require__(7)
	  , $sort     = [].sort
	  , test      = [1, 2, 3];
	
	$export($export.P + $export.F * (fails(function(){
	  // IE8-
	  test.sort(undefined);
	}) || !fails(function(){
	  // V8 bug
	  test.sort(null);
	  // Old WebKit
	}) || !__webpack_require__(168)($sort)), 'Array', {
	  // 22.1.3.25 Array.prototype.sort(comparefn)
	  sort: function sort(comparefn){
	    return comparefn === undefined
	      ? $sort.call(toObject(this))
	      : $sort.call(toObject(this), aFunction(comparefn));
	  }
	});

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export  = __webpack_require__(8)
	  , $forEach = __webpack_require__(172)(0)
	  , STRICT   = __webpack_require__(168)([].forEach, true);
	
	$export($export.P + $export.F * !STRICT, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: function forEach(callbackfn /* , thisArg */){
	    return $forEach(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(20)
	  , IObject  = __webpack_require__(33)
	  , toObject = __webpack_require__(58)
	  , toLength = __webpack_require__(37)
	  , asc      = __webpack_require__(173);
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(174);
	
	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13)
	  , isArray  = __webpack_require__(45)
	  , SPECIES  = __webpack_require__(25)('species');
	
	module.exports = function(original){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $map    = __webpack_require__(172)(1);
	
	$export($export.P + $export.F * !__webpack_require__(168)([].map, true), 'Array', {
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn /* , thisArg */){
	    return $map(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $filter = __webpack_require__(172)(2);
	
	$export($export.P + $export.F * !__webpack_require__(168)([].filter, true), 'Array', {
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: function filter(callbackfn /* , thisArg */){
	    return $filter(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $some   = __webpack_require__(172)(3);
	
	$export($export.P + $export.F * !__webpack_require__(168)([].some, true), 'Array', {
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: function some(callbackfn /* , thisArg */){
	    return $some(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $every  = __webpack_require__(172)(4);
	
	$export($export.P + $export.F * !__webpack_require__(168)([].every, true), 'Array', {
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: function every(callbackfn /* , thisArg */){
	    return $every(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $reduce = __webpack_require__(180);
	
	$export($export.P + $export.F * !__webpack_require__(168)([].reduce, true), 'Array', {
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: function reduce(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
	  }
	});

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	var aFunction = __webpack_require__(21)
	  , toObject  = __webpack_require__(58)
	  , IObject   = __webpack_require__(33)
	  , toLength  = __webpack_require__(37);
	
	module.exports = function(that, callbackfn, aLen, memo, isRight){
	  aFunction(callbackfn);
	  var O      = toObject(that)
	    , self   = IObject(O)
	    , length = toLength(O.length)
	    , index  = isRight ? length - 1 : 0
	    , i      = isRight ? -1 : 1;
	  if(aLen < 2)for(;;){
	    if(index in self){
	      memo = self[index];
	      index += i;
	      break;
	    }
	    index += i;
	    if(isRight ? index < 0 : length <= index){
	      throw TypeError('Reduce of empty array with no initial value');
	    }
	  }
	  for(;isRight ? index >= 0 : length > index; index += i)if(index in self){
	    memo = callbackfn(memo, self[index], index, O);
	  }
	  return memo;
	};

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $reduce = __webpack_require__(180);
	
	$export($export.P + $export.F * !__webpack_require__(168)([].reduceRight, true), 'Array', {
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: function reduceRight(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
	  }
	});

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(8)
	  , $indexOf      = __webpack_require__(36)(false)
	  , $native       = [].indexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;
	
	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(168)($native)), 'Array', {
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: function indexOf(searchElement /*, fromIndex = 0 */){
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? $native.apply(this, arguments) || 0
	      : $indexOf(this, searchElement, arguments[1]);
	  }
	});

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(8)
	  , toIObject     = __webpack_require__(32)
	  , toInteger     = __webpack_require__(38)
	  , toLength      = __webpack_require__(37)
	  , $native       = [].lastIndexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;
	
	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(168)($native)), 'Array', {
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */){
	    // convert -0 to +0
	    if(NEGATIVE_ZERO)return $native.apply(this, arguments) || 0;
	    var O      = toIObject(this)
	      , length = toLength(O.length)
	      , index  = length - 1;
	    if(arguments.length > 1)index = Math.min(index, toInteger(arguments[1]));
	    if(index < 0)index = length + index;
	    for(;index >= 0; index--)if(index in O)if(O[index] === searchElement)return index || 0;
	    return -1;
	  }
	});

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(8);
	
	$export($export.P, 'Array', {copyWithin: __webpack_require__(185)});
	
	__webpack_require__(186)('copyWithin');

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(58)
	  , toIndex  = __webpack_require__(39)
	  , toLength = __webpack_require__(37);
	
	module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
	  var O     = toObject(this)
	    , len   = toLength(O.length)
	    , to    = toIndex(target, len)
	    , from  = toIndex(start, len)
	    , end   = arguments.length > 2 ? arguments[2] : undefined
	    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
	    , inc   = 1;
	  if(from < to && to < from + count){
	    inc  = -1;
	    from += count - 1;
	    to   += count - 1;
	  }
	  while(count-- > 0){
	    if(from in O)O[to] = O[from];
	    else delete O[to];
	    to   += inc;
	    from += inc;
	  } return O;
	};

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(25)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(10)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(8);
	
	$export($export.P, 'Array', {fill: __webpack_require__(188)});
	
	__webpack_require__(186)('fill');

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(58)
	  , toIndex  = __webpack_require__(39)
	  , toLength = __webpack_require__(37);
	module.exports = function fill(value /*, start = 0, end = @length */){
	  var O      = toObject(this)
	    , length = toLength(O.length)
	    , aLen   = arguments.length
	    , index  = toIndex(aLen > 1 ? arguments[1] : undefined, length)
	    , end    = aLen > 2 ? arguments[2] : undefined
	    , endPos = end === undefined ? length : toIndex(end, length);
	  while(endPos > index)O[index++] = value;
	  return O;
	};

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(8)
	  , $find   = __webpack_require__(172)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(186)(KEY);

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(8)
	  , $find   = __webpack_require__(172)(6)
	  , KEY     = 'findIndex'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(186)(KEY);

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(192)('Array');

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(4)
	  , dP          = __webpack_require__(11)
	  , DESCRIPTORS = __webpack_require__(6)
	  , SPECIES     = __webpack_require__(25)('species');
	
	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(186)
	  , step             = __webpack_require__(194)
	  , Iterators        = __webpack_require__(129)
	  , toIObject        = __webpack_require__(32);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(128)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 194 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	var global            = __webpack_require__(4)
	  , inheritIfRequired = __webpack_require__(88)
	  , dP                = __webpack_require__(11).f
	  , gOPN              = __webpack_require__(50).f
	  , isRegExp          = __webpack_require__(134)
	  , $flags            = __webpack_require__(196)
	  , $RegExp           = global.RegExp
	  , Base              = $RegExp
	  , proto             = $RegExp.prototype
	  , re1               = /a/g
	  , re2               = /a/g
	  // "new" creates a new object, old webkit buggy here
	  , CORRECT_NEW       = new $RegExp(re1) !== re1;
	
	if(__webpack_require__(6) && (!CORRECT_NEW || __webpack_require__(7)(function(){
	  re2[__webpack_require__(25)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))){
	  $RegExp = function RegExp(p, f){
	    var tiRE = this instanceof $RegExp
	      , piRE = isRegExp(p)
	      , fiU  = f === undefined;
	    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
	      : inheritIfRequired(CORRECT_NEW
	        ? new Base(piRE && !fiU ? p.source : p, f)
	        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
	      , tiRE ? this : proto, $RegExp);
	  };
	  var proxy = function(key){
	    key in $RegExp || dP($RegExp, key, {
	      configurable: true,
	      get: function(){ return Base[key]; },
	      set: function(it){ Base[key] = it; }
	    });
	  };
	  for(var keys = gOPN(Base), i = 0; keys.length > i; )proxy(keys[i++]);
	  proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(18)(global, 'RegExp', $RegExp);
	}
	
	__webpack_require__(192)('RegExp');

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(12);
	module.exports = function(){
	  var that   = anObject(this)
	    , result = '';
	  if(that.global)     result += 'g';
	  if(that.ignoreCase) result += 'i';
	  if(that.multiline)  result += 'm';
	  if(that.unicode)    result += 'u';
	  if(that.sticky)     result += 'y';
	  return result;
	};

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(198);
	var anObject    = __webpack_require__(12)
	  , $flags      = __webpack_require__(196)
	  , DESCRIPTORS = __webpack_require__(6)
	  , TO_STRING   = 'toString'
	  , $toString   = /./[TO_STRING];
	
	var define = function(fn){
	  __webpack_require__(18)(RegExp.prototype, TO_STRING, fn, true);
	};
	
	// 21.2.5.14 RegExp.prototype.toString()
	if(__webpack_require__(7)(function(){ return $toString.call({source: 'a', flags: 'b'}) != '/a/b'; })){
	  define(function toString(){
	    var R = anObject(this);
	    return '/'.concat(R.source, '/',
	      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
	  });
	// FF44- RegExp#toString has a wrong name
	} else if($toString.name != TO_STRING){
	  define(function toString(){
	    return $toString.call(this);
	  });
	}

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	if(__webpack_require__(6) && /./g.flags != 'g')__webpack_require__(11).f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(196)
	});

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(200)('match', 1, function(defined, MATCH, $match){
	  // 21.1.3.11 String.prototype.match(regexp)
	  return [function match(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  }, $match];
	});

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide     = __webpack_require__(10)
	  , redefine = __webpack_require__(18)
	  , fails    = __webpack_require__(7)
	  , defined  = __webpack_require__(35)
	  , wks      = __webpack_require__(25);
	
	module.exports = function(KEY, length, exec){
	  var SYMBOL   = wks(KEY)
	    , fns      = exec(defined, SYMBOL, ''[KEY])
	    , strfn    = fns[0]
	    , rxfn     = fns[1];
	  if(fails(function(){
	    var O = {};
	    O[SYMBOL] = function(){ return 7; };
	    return ''[KEY](O) != 7;
	  })){
	    redefine(String.prototype, KEY, strfn);
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function(string, arg){ return rxfn.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function(string){ return rxfn.call(string, this); }
	    );
	  }
	};

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(200)('replace', 2, function(defined, REPLACE, $replace){
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return [function replace(searchValue, replaceValue){
	    'use strict';
	    var O  = defined(this)
	      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  }, $replace];
	});

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(200)('search', 1, function(defined, SEARCH, $search){
	  // 21.1.3.15 String.prototype.search(regexp)
	  return [function search(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  }, $search];
	});

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(200)('split', 2, function(defined, SPLIT, $split){
	  'use strict';
	  var isRegExp   = __webpack_require__(134)
	    , _split     = $split
	    , $push      = [].push
	    , $SPLIT     = 'split'
	    , LENGTH     = 'length'
	    , LAST_INDEX = 'lastIndex';
	  if(
	    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
	    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
	    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
	    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
	    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
	    ''[$SPLIT](/.?/)[LENGTH]
	  ){
	    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
	    // based on es5-shim implementation, need to rework it
	    $split = function(separator, limit){
	      var string = String(this);
	      if(separator === undefined && limit === 0)return [];
	      // If `separator` is not a regex, use native split
	      if(!isRegExp(separator))return _split.call(string, separator, limit);
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') +
	                  (separator.multiline ? 'm' : '') +
	                  (separator.unicode ? 'u' : '') +
	                  (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var separator2, match, lastIndex, lastLength, i;
	      // Doesn't need flags gy, but they don't hurt
	      if(!NPCG)separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
	      while(match = separatorCopy.exec(string)){
	        // `separatorCopy.lastIndex` is not reliable cross-browser
	        lastIndex = match.index + match[0][LENGTH];
	        if(lastIndex > lastLastIndex){
	          output.push(string.slice(lastLastIndex, match.index));
	          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
	          if(!NPCG && match[LENGTH] > 1)match[0].replace(separator2, function(){
	            for(i = 1; i < arguments[LENGTH] - 2; i++)if(arguments[i] === undefined)match[i] = undefined;
	          });
	          if(match[LENGTH] > 1 && match.index < string[LENGTH])$push.apply(output, match.slice(1));
	          lastLength = match[0][LENGTH];
	          lastLastIndex = lastIndex;
	          if(output[LENGTH] >= splitLimit)break;
	        }
	        if(separatorCopy[LAST_INDEX] === match.index)separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
	      }
	      if(lastLastIndex === string[LENGTH]){
	        if(lastLength || !separatorCopy.test(''))output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
	    };
	  // Chakra, V8
	  } else if('0'[$SPLIT](undefined, 0)[LENGTH]){
	    $split = function(separator, limit){
	      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
	    };
	  }
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return [function split(separator, limit){
	    var O  = defined(this)
	      , fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
	  }, $split];
	});

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(28)
	  , global             = __webpack_require__(4)
	  , ctx                = __webpack_require__(20)
	  , classof            = __webpack_require__(75)
	  , $export            = __webpack_require__(8)
	  , isObject           = __webpack_require__(13)
	  , aFunction          = __webpack_require__(21)
	  , anInstance         = __webpack_require__(205)
	  , forOf              = __webpack_require__(206)
	  , speciesConstructor = __webpack_require__(207)
	  , task               = __webpack_require__(208).set
	  , microtask          = __webpack_require__(209)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;
	
	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(25)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(210)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(24)($Promise, PROMISE);
	__webpack_require__(192)(PROMISE);
	Wrapper = __webpack_require__(9)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(165)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 205 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(20)
	  , call        = __webpack_require__(161)
	  , isArrayIter = __webpack_require__(162)
	  , anObject    = __webpack_require__(12)
	  , toLength    = __webpack_require__(37)
	  , getIterFn   = __webpack_require__(164)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(12)
	  , aFunction = __webpack_require__(21)
	  , SPECIES   = __webpack_require__(25)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(20)
	  , invoke             = __webpack_require__(78)
	  , html               = __webpack_require__(48)
	  , cel                = __webpack_require__(15)
	  , global             = __webpack_require__(4)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(34)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , macrotask = __webpack_require__(208).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(34)(process) == 'process';
	
	module.exports = function(){
	  var head, last, notify;
	
	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };
	
	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }
	
	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(18);
	module.exports = function(target, src, safe){
	  for(var key in src)redefine(target, key, src[key], safe);
	  return target;
	};

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(212);
	
	// 23.1 Map Objects
	module.exports = __webpack_require__(213)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var dP          = __webpack_require__(11).f
	  , create      = __webpack_require__(46)
	  , redefineAll = __webpack_require__(210)
	  , ctx         = __webpack_require__(20)
	  , anInstance  = __webpack_require__(205)
	  , defined     = __webpack_require__(35)
	  , forOf       = __webpack_require__(206)
	  , $iterDefine = __webpack_require__(128)
	  , step        = __webpack_require__(194)
	  , setSpecies  = __webpack_require__(192)
	  , DESCRIPTORS = __webpack_require__(6)
	  , fastKey     = __webpack_require__(22).fastKey
	  , SIZE        = DESCRIPTORS ? '_s' : 'size';
	
	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        anInstance(this, C, 'forEach');
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)dP(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);
	
	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(4)
	  , $export           = __webpack_require__(8)
	  , redefine          = __webpack_require__(18)
	  , redefineAll       = __webpack_require__(210)
	  , meta              = __webpack_require__(22)
	  , forOf             = __webpack_require__(206)
	  , anInstance        = __webpack_require__(205)
	  , isObject          = __webpack_require__(13)
	  , fails             = __webpack_require__(7)
	  , $iterDetect       = __webpack_require__(165)
	  , setToStringTag    = __webpack_require__(24)
	  , inheritIfRequired = __webpack_require__(88);
	
	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  var fixMethod = function(KEY){
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a){
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    var instance             = new C
	      // early implementations not supports chaining
	      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
	      // most early implementations doesn't supports iterables, most modern - not close it correctly
	      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
	      // for early implementations -0 and +0 not the same
	      , BUGGY_ZERO = !IS_WEAK && fails(function(){
	        // V8 ~ Chromium 42- fails only with 5+ elements
	        var $instance = new C()
	          , index     = 5;
	        while(index--)$instance[ADDER](index, index);
	        return !$instance.has(-0);
	      });
	    if(!ACCEPT_ITERABLES){ 
	      C = wrapper(function(target, iterable){
	        anInstance(target, C, NAME);
	        var that = inheritIfRequired(new Base, target, C);
	        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if(IS_WEAK && proto.clear)delete proto.clear;
	  }
	
	  setToStringTag(C, NAME);
	
	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);
	
	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);
	
	  return C;
	};

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(212);
	
	// 23.2 Set Objects
	module.exports = __webpack_require__(213)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var each         = __webpack_require__(172)(0)
	  , redefine     = __webpack_require__(18)
	  , meta         = __webpack_require__(22)
	  , assign       = __webpack_require__(69)
	  , weak         = __webpack_require__(216)
	  , isObject     = __webpack_require__(13)
	  , getWeak      = meta.getWeak
	  , isExtensible = Object.isExtensible
	  , uncaughtFrozenStore = weak.ufstore
	  , tmp          = {}
	  , InternalMap;
	
	var wrapper = function(get){
	  return function WeakMap(){
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};
	
	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      var data = getWeak(key);
	      if(data === true)return uncaughtFrozenStore(this).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	};
	
	// 23.3 WeakMap Objects
	var $WeakMap = module.exports = __webpack_require__(213)('WeakMap', wrapper, methods, weak, true, true);
	
	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  InternalMap = weak.getConstructor(wrapper);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on internal weakmap shim
	      if(isObject(a) && !isExtensible(a)){
	        if(!this._f)this._f = new InternalMap;
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var redefineAll       = __webpack_require__(210)
	  , getWeak           = __webpack_require__(22).getWeak
	  , anObject          = __webpack_require__(12)
	  , isObject          = __webpack_require__(13)
	  , anInstance        = __webpack_require__(205)
	  , forOf             = __webpack_require__(206)
	  , createArrayMethod = __webpack_require__(172)
	  , $has              = __webpack_require__(5)
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;
	
	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function(that){
	  return that._l || (that._l = new UncaughtFrozenStore);
	};
	var UncaughtFrozenStore = function(){
	  this.a = [];
	};
	var findUncaughtFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function(key){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var data = getWeak(anObject(key), true);
	    if(data === true)uncaughtFrozenStore(that).set(key, value);
	    else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(216);
	
	// 23.4 WeakSet Objects
	__webpack_require__(213)('WeakSet', function(get){
	  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(8)
	  , $typed       = __webpack_require__(219)
	  , buffer       = __webpack_require__(220)
	  , anObject     = __webpack_require__(12)
	  , toIndex      = __webpack_require__(39)
	  , toLength     = __webpack_require__(37)
	  , isObject     = __webpack_require__(13)
	  , ArrayBuffer  = __webpack_require__(4).ArrayBuffer
	  , speciesConstructor = __webpack_require__(207)
	  , $ArrayBuffer = buffer.ArrayBuffer
	  , $DataView    = buffer.DataView
	  , $isView      = $typed.ABV && ArrayBuffer.isView
	  , $slice       = $ArrayBuffer.prototype.slice
	  , VIEW         = $typed.VIEW
	  , ARRAY_BUFFER = 'ArrayBuffer';
	
	$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {ArrayBuffer: $ArrayBuffer});
	
	$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
	  // 24.1.3.1 ArrayBuffer.isView(arg)
	  isView: function isView(it){
	    return $isView && $isView(it) || isObject(it) && VIEW in it;
	  }
	});
	
	$export($export.P + $export.U + $export.F * __webpack_require__(7)(function(){
	  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
	}), ARRAY_BUFFER, {
	  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
	  slice: function slice(start, end){
	    if($slice !== undefined && end === undefined)return $slice.call(anObject(this), start); // FF fix
	    var len    = anObject(this).byteLength
	      , first  = toIndex(start, len)
	      , final  = toIndex(end === undefined ? len : end, len)
	      , result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first))
	      , viewS  = new $DataView(this)
	      , viewT  = new $DataView(result)
	      , index  = 0;
	    while(first < final){
	      viewT.setUint8(index++, viewS.getUint8(first++));
	    } return result;
	  }
	});
	
	__webpack_require__(192)(ARRAY_BUFFER);

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4)
	  , hide   = __webpack_require__(10)
	  , uid    = __webpack_require__(19)
	  , TYPED  = uid('typed_array')
	  , VIEW   = uid('view')
	  , ABV    = !!(global.ArrayBuffer && global.DataView)
	  , CONSTR = ABV
	  , i = 0, l = 9, Typed;
	
	var TypedArrayConstructors = (
	  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
	).split(',');
	
	while(i < l){
	  if(Typed = global[TypedArrayConstructors[i++]]){
	    hide(Typed.prototype, TYPED, true);
	    hide(Typed.prototype, VIEW, true);
	  } else CONSTR = false;
	}
	
	module.exports = {
	  ABV:    ABV,
	  CONSTR: CONSTR,
	  TYPED:  TYPED,
	  VIEW:   VIEW
	};

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(4)
	  , DESCRIPTORS    = __webpack_require__(6)
	  , LIBRARY        = __webpack_require__(28)
	  , $typed         = __webpack_require__(219)
	  , hide           = __webpack_require__(10)
	  , redefineAll    = __webpack_require__(210)
	  , fails          = __webpack_require__(7)
	  , anInstance     = __webpack_require__(205)
	  , toInteger      = __webpack_require__(38)
	  , toLength       = __webpack_require__(37)
	  , gOPN           = __webpack_require__(50).f
	  , dP             = __webpack_require__(11).f
	  , arrayFill      = __webpack_require__(188)
	  , setToStringTag = __webpack_require__(24)
	  , ARRAY_BUFFER   = 'ArrayBuffer'
	  , DATA_VIEW      = 'DataView'
	  , PROTOTYPE      = 'prototype'
	  , WRONG_LENGTH   = 'Wrong length!'
	  , WRONG_INDEX    = 'Wrong index!'
	  , $ArrayBuffer   = global[ARRAY_BUFFER]
	  , $DataView      = global[DATA_VIEW]
	  , Math           = global.Math
	  , RangeError     = global.RangeError
	  , Infinity       = global.Infinity
	  , BaseBuffer     = $ArrayBuffer
	  , abs            = Math.abs
	  , pow            = Math.pow
	  , floor          = Math.floor
	  , log            = Math.log
	  , LN2            = Math.LN2
	  , BUFFER         = 'buffer'
	  , BYTE_LENGTH    = 'byteLength'
	  , BYTE_OFFSET    = 'byteOffset'
	  , $BUFFER        = DESCRIPTORS ? '_b' : BUFFER
	  , $LENGTH        = DESCRIPTORS ? '_l' : BYTE_LENGTH
	  , $OFFSET        = DESCRIPTORS ? '_o' : BYTE_OFFSET;
	
	// IEEE754 conversions based on https://github.com/feross/ieee754
	var packIEEE754 = function(value, mLen, nBytes){
	  var buffer = Array(nBytes)
	    , eLen   = nBytes * 8 - mLen - 1
	    , eMax   = (1 << eLen) - 1
	    , eBias  = eMax >> 1
	    , rt     = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0
	    , i      = 0
	    , s      = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0
	    , e, m, c;
	  value = abs(value)
	  if(value != value || value === Infinity){
	    m = value != value ? 1 : 0;
	    e = eMax;
	  } else {
	    e = floor(log(value) / LN2);
	    if(value * (c = pow(2, -e)) < 1){
	      e--;
	      c *= 2;
	    }
	    if(e + eBias >= 1){
	      value += rt / c;
	    } else {
	      value += rt * pow(2, 1 - eBias);
	    }
	    if(value * c >= 2){
	      e++;
	      c /= 2;
	    }
	    if(e + eBias >= eMax){
	      m = 0;
	      e = eMax;
	    } else if(e + eBias >= 1){
	      m = (value * c - 1) * pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * pow(2, eBias - 1) * pow(2, mLen);
	      e = 0;
	    }
	  }
	  for(; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
	  e = e << mLen | m;
	  eLen += mLen;
	  for(; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
	  buffer[--i] |= s * 128;
	  return buffer;
	};
	var unpackIEEE754 = function(buffer, mLen, nBytes){
	  var eLen  = nBytes * 8 - mLen - 1
	    , eMax  = (1 << eLen) - 1
	    , eBias = eMax >> 1
	    , nBits = eLen - 7
	    , i     = nBytes - 1
	    , s     = buffer[i--]
	    , e     = s & 127
	    , m;
	  s >>= 7;
	  for(; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for(; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
	  if(e === 0){
	    e = 1 - eBias;
	  } else if(e === eMax){
	    return m ? NaN : s ? -Infinity : Infinity;
	  } else {
	    m = m + pow(2, mLen);
	    e = e - eBias;
	  } return (s ? -1 : 1) * m * pow(2, e - mLen);
	};
	
	var unpackI32 = function(bytes){
	  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
	};
	var packI8 = function(it){
	  return [it & 0xff];
	};
	var packI16 = function(it){
	  return [it & 0xff, it >> 8 & 0xff];
	};
	var packI32 = function(it){
	  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
	};
	var packF64 = function(it){
	  return packIEEE754(it, 52, 8);
	};
	var packF32 = function(it){
	  return packIEEE754(it, 23, 4);
	};
	
	var addGetter = function(C, key, internal){
	  dP(C[PROTOTYPE], key, {get: function(){ return this[internal]; }});
	};
	
	var get = function(view, bytes, index, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = store.slice(start, start + bytes);
	  return isLittleEndian ? pack : pack.reverse();
	};
	var set = function(view, bytes, index, conversion, value, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = conversion(+value);
	  for(var i = 0; i < bytes; i++)store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
	};
	
	var validateArrayBufferArguments = function(that, length){
	  anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
	  var numberLength = +length
	    , byteLength   = toLength(numberLength);
	  if(numberLength != byteLength)throw RangeError(WRONG_LENGTH);
	  return byteLength;
	};
	
	if(!$typed.ABV){
	  $ArrayBuffer = function ArrayBuffer(length){
	    var byteLength = validateArrayBufferArguments(this, length);
	    this._b       = arrayFill.call(Array(byteLength), 0);
	    this[$LENGTH] = byteLength;
	  };
	
	  $DataView = function DataView(buffer, byteOffset, byteLength){
	    anInstance(this, $DataView, DATA_VIEW);
	    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
	    var bufferLength = buffer[$LENGTH]
	      , offset       = toInteger(byteOffset);
	    if(offset < 0 || offset > bufferLength)throw RangeError('Wrong offset!');
	    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
	    if(offset + byteLength > bufferLength)throw RangeError(WRONG_LENGTH);
	    this[$BUFFER] = buffer;
	    this[$OFFSET] = offset;
	    this[$LENGTH] = byteLength;
	  };
	
	  if(DESCRIPTORS){
	    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
	    addGetter($DataView, BUFFER, '_b');
	    addGetter($DataView, BYTE_LENGTH, '_l');
	    addGetter($DataView, BYTE_OFFSET, '_o');
	  }
	
	  redefineAll($DataView[PROTOTYPE], {
	    getInt8: function getInt8(byteOffset){
	      return get(this, 1, byteOffset)[0] << 24 >> 24;
	    },
	    getUint8: function getUint8(byteOffset){
	      return get(this, 1, byteOffset)[0];
	    },
	    getInt16: function getInt16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
	    },
	    getUint16: function getUint16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return bytes[1] << 8 | bytes[0];
	    },
	    getInt32: function getInt32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1]));
	    },
	    getUint32: function getUint32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
	    },
	    getFloat32: function getFloat32(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
	    },
	    getFloat64: function getFloat64(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
	    },
	    setInt8: function setInt8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setInt16: function setInt16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setUint16: function setUint16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setInt32: function setInt32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setUint32: function setUint32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setFloat32: function setFloat32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packF32, value, arguments[2]);
	    },
	    setFloat64: function setFloat64(byteOffset, value /*, littleEndian */){
	      set(this, 8, byteOffset, packF64, value, arguments[2]);
	    }
	  });
	} else {
	  if(!fails(function(){
	    new $ArrayBuffer;     // eslint-disable-line no-new
	  }) || !fails(function(){
	    new $ArrayBuffer(.5); // eslint-disable-line no-new
	  })){
	    $ArrayBuffer = function ArrayBuffer(length){
	      return new BaseBuffer(validateArrayBufferArguments(this, length));
	    };
	    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
	    for(var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j; ){
	      if(!((key = keys[j++]) in $ArrayBuffer))hide($ArrayBuffer, key, BaseBuffer[key]);
	    };
	    if(!LIBRARY)ArrayBufferProto.constructor = $ArrayBuffer;
	  }
	  // iOS Safari 7.x bug
	  var view = new $DataView(new $ArrayBuffer(2))
	    , $setInt8 = $DataView[PROTOTYPE].setInt8;
	  view.setInt8(0, 2147483648);
	  view.setInt8(1, 2147483649);
	  if(view.getInt8(0) || !view.getInt8(1))redefineAll($DataView[PROTOTYPE], {
	    setInt8: function setInt8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    }
	  }, true);
	}
	setToStringTag($ArrayBuffer, ARRAY_BUFFER);
	setToStringTag($DataView, DATA_VIEW);
	hide($DataView[PROTOTYPE], $typed.VIEW, true);
	exports[ARRAY_BUFFER] = $ArrayBuffer;
	exports[DATA_VIEW] = $DataView;

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	$export($export.G + $export.W + $export.F * !__webpack_require__(219).ABV, {
	  DataView: __webpack_require__(220).DataView
	});

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Int8', 1, function(init){
	  return function Int8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	if(__webpack_require__(6)){
	  var LIBRARY             = __webpack_require__(28)
	    , global              = __webpack_require__(4)
	    , fails               = __webpack_require__(7)
	    , $export             = __webpack_require__(8)
	    , $typed              = __webpack_require__(219)
	    , $buffer             = __webpack_require__(220)
	    , ctx                 = __webpack_require__(20)
	    , anInstance          = __webpack_require__(205)
	    , propertyDesc        = __webpack_require__(17)
	    , hide                = __webpack_require__(10)
	    , redefineAll         = __webpack_require__(210)
	    , toInteger           = __webpack_require__(38)
	    , toLength            = __webpack_require__(37)
	    , toIndex             = __webpack_require__(39)
	    , toPrimitive         = __webpack_require__(16)
	    , has                 = __webpack_require__(5)
	    , same                = __webpack_require__(71)
	    , classof             = __webpack_require__(75)
	    , isObject            = __webpack_require__(13)
	    , toObject            = __webpack_require__(58)
	    , isArrayIter         = __webpack_require__(162)
	    , create              = __webpack_require__(46)
	    , getPrototypeOf      = __webpack_require__(59)
	    , gOPN                = __webpack_require__(50).f
	    , getIterFn           = __webpack_require__(164)
	    , uid                 = __webpack_require__(19)
	    , wks                 = __webpack_require__(25)
	    , createArrayMethod   = __webpack_require__(172)
	    , createArrayIncludes = __webpack_require__(36)
	    , speciesConstructor  = __webpack_require__(207)
	    , ArrayIterators      = __webpack_require__(193)
	    , Iterators           = __webpack_require__(129)
	    , $iterDetect         = __webpack_require__(165)
	    , setSpecies          = __webpack_require__(192)
	    , arrayFill           = __webpack_require__(188)
	    , arrayCopyWithin     = __webpack_require__(185)
	    , $DP                 = __webpack_require__(11)
	    , $GOPD               = __webpack_require__(51)
	    , dP                  = $DP.f
	    , gOPD                = $GOPD.f
	    , RangeError          = global.RangeError
	    , TypeError           = global.TypeError
	    , Uint8Array          = global.Uint8Array
	    , ARRAY_BUFFER        = 'ArrayBuffer'
	    , SHARED_BUFFER       = 'Shared' + ARRAY_BUFFER
	    , BYTES_PER_ELEMENT   = 'BYTES_PER_ELEMENT'
	    , PROTOTYPE           = 'prototype'
	    , ArrayProto          = Array[PROTOTYPE]
	    , $ArrayBuffer        = $buffer.ArrayBuffer
	    , $DataView           = $buffer.DataView
	    , arrayForEach        = createArrayMethod(0)
	    , arrayFilter         = createArrayMethod(2)
	    , arraySome           = createArrayMethod(3)
	    , arrayEvery          = createArrayMethod(4)
	    , arrayFind           = createArrayMethod(5)
	    , arrayFindIndex      = createArrayMethod(6)
	    , arrayIncludes       = createArrayIncludes(true)
	    , arrayIndexOf        = createArrayIncludes(false)
	    , arrayValues         = ArrayIterators.values
	    , arrayKeys           = ArrayIterators.keys
	    , arrayEntries        = ArrayIterators.entries
	    , arrayLastIndexOf    = ArrayProto.lastIndexOf
	    , arrayReduce         = ArrayProto.reduce
	    , arrayReduceRight    = ArrayProto.reduceRight
	    , arrayJoin           = ArrayProto.join
	    , arraySort           = ArrayProto.sort
	    , arraySlice          = ArrayProto.slice
	    , arrayToString       = ArrayProto.toString
	    , arrayToLocaleString = ArrayProto.toLocaleString
	    , ITERATOR            = wks('iterator')
	    , TAG                 = wks('toStringTag')
	    , TYPED_CONSTRUCTOR   = uid('typed_constructor')
	    , DEF_CONSTRUCTOR     = uid('def_constructor')
	    , ALL_CONSTRUCTORS    = $typed.CONSTR
	    , TYPED_ARRAY         = $typed.TYPED
	    , VIEW                = $typed.VIEW
	    , WRONG_LENGTH        = 'Wrong length!';
	
	  var $map = createArrayMethod(1, function(O, length){
	    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
	  });
	
	  var LITTLE_ENDIAN = fails(function(){
	    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
	  });
	
	  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function(){
	    new Uint8Array(1).set({});
	  });
	
	  var strictToLength = function(it, SAME){
	    if(it === undefined)throw TypeError(WRONG_LENGTH);
	    var number = +it
	      , length = toLength(it);
	    if(SAME && !same(number, length))throw RangeError(WRONG_LENGTH);
	    return length;
	  };
	
	  var toOffset = function(it, BYTES){
	    var offset = toInteger(it);
	    if(offset < 0 || offset % BYTES)throw RangeError('Wrong offset!');
	    return offset;
	  };
	
	  var validate = function(it){
	    if(isObject(it) && TYPED_ARRAY in it)return it;
	    throw TypeError(it + ' is not a typed array!');
	  };
	
	  var allocate = function(C, length){
	    if(!(isObject(C) && TYPED_CONSTRUCTOR in C)){
	      throw TypeError('It is not a typed array constructor!');
	    } return new C(length);
	  };
	
	  var speciesFromList = function(O, list){
	    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
	  };
	
	  var fromList = function(C, list){
	    var index  = 0
	      , length = list.length
	      , result = allocate(C, length);
	    while(length > index)result[index] = list[index++];
	    return result;
	  };
	
	  var addGetter = function(it, key, internal){
	    dP(it, key, {get: function(){ return this._d[internal]; }});
	  };
	
	  var $from = function from(source /*, mapfn, thisArg */){
	    var O       = toObject(source)
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , iterFn  = getIterFn(O)
	      , i, length, values, result, step, iterator;
	    if(iterFn != undefined && !isArrayIter(iterFn)){
	      for(iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++){
	        values.push(step.value);
	      } O = values;
	    }
	    if(mapping && aLen > 2)mapfn = ctx(mapfn, arguments[2], 2);
	    for(i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++){
	      result[i] = mapping ? mapfn(O[i], i) : O[i];
	    }
	    return result;
	  };
	
	  var $of = function of(/*...items*/){
	    var index  = 0
	      , length = arguments.length
	      , result = allocate(this, length);
	    while(length > index)result[index] = arguments[index++];
	    return result;
	  };
	
	  // iOS Safari 6.x fails here
	  var TO_LOCALE_BUG = !!Uint8Array && fails(function(){ arrayToLocaleString.call(new Uint8Array(1)); });
	
	  var $toLocaleString = function toLocaleString(){
	    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
	  };
	
	  var proto = {
	    copyWithin: function copyWithin(target, start /*, end */){
	      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    every: function every(callbackfn /*, thisArg */){
	      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    fill: function fill(value /*, start, end */){ // eslint-disable-line no-unused-vars
	      return arrayFill.apply(validate(this), arguments);
	    },
	    filter: function filter(callbackfn /*, thisArg */){
	      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
	        arguments.length > 1 ? arguments[1] : undefined));
	    },
	    find: function find(predicate /*, thisArg */){
	      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    findIndex: function findIndex(predicate /*, thisArg */){
	      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    forEach: function forEach(callbackfn /*, thisArg */){
	      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    indexOf: function indexOf(searchElement /*, fromIndex */){
	      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    includes: function includes(searchElement /*, fromIndex */){
	      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    join: function join(separator){ // eslint-disable-line no-unused-vars
	      return arrayJoin.apply(validate(this), arguments);
	    },
	    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */){ // eslint-disable-line no-unused-vars
	      return arrayLastIndexOf.apply(validate(this), arguments);
	    },
	    map: function map(mapfn /*, thisArg */){
	      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    reduce: function reduce(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduce.apply(validate(this), arguments);
	    },
	    reduceRight: function reduceRight(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduceRight.apply(validate(this), arguments);
	    },
	    reverse: function reverse(){
	      var that   = this
	        , length = validate(that).length
	        , middle = Math.floor(length / 2)
	        , index  = 0
	        , value;
	      while(index < middle){
	        value         = that[index];
	        that[index++] = that[--length];
	        that[length]  = value;
	      } return that;
	    },
	    some: function some(callbackfn /*, thisArg */){
	      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    sort: function sort(comparefn){
	      return arraySort.call(validate(this), comparefn);
	    },
	    subarray: function subarray(begin, end){
	      var O      = validate(this)
	        , length = O.length
	        , $begin = toIndex(begin, length);
	      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
	        O.buffer,
	        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
	        toLength((end === undefined ? length : toIndex(end, length)) - $begin)
	      );
	    }
	  };
	
	  var $slice = function slice(start, end){
	    return speciesFromList(this, arraySlice.call(validate(this), start, end));
	  };
	
	  var $set = function set(arrayLike /*, offset */){
	    validate(this);
	    var offset = toOffset(arguments[1], 1)
	      , length = this.length
	      , src    = toObject(arrayLike)
	      , len    = toLength(src.length)
	      , index  = 0;
	    if(len + offset > length)throw RangeError(WRONG_LENGTH);
	    while(index < len)this[offset + index] = src[index++];
	  };
	
	  var $iterators = {
	    entries: function entries(){
	      return arrayEntries.call(validate(this));
	    },
	    keys: function keys(){
	      return arrayKeys.call(validate(this));
	    },
	    values: function values(){
	      return arrayValues.call(validate(this));
	    }
	  };
	
	  var isTAIndex = function(target, key){
	    return isObject(target)
	      && target[TYPED_ARRAY]
	      && typeof key != 'symbol'
	      && key in target
	      && String(+key) == String(key);
	  };
	  var $getDesc = function getOwnPropertyDescriptor(target, key){
	    return isTAIndex(target, key = toPrimitive(key, true))
	      ? propertyDesc(2, target[key])
	      : gOPD(target, key);
	  };
	  var $setDesc = function defineProperty(target, key, desc){
	    if(isTAIndex(target, key = toPrimitive(key, true))
	      && isObject(desc)
	      && has(desc, 'value')
	      && !has(desc, 'get')
	      && !has(desc, 'set')
	      // TODO: add validation descriptor w/o calling accessors
	      && !desc.configurable
	      && (!has(desc, 'writable') || desc.writable)
	      && (!has(desc, 'enumerable') || desc.enumerable)
	    ){
	      target[key] = desc.value;
	      return target;
	    } else return dP(target, key, desc);
	  };
	
	  if(!ALL_CONSTRUCTORS){
	    $GOPD.f = $getDesc;
	    $DP.f   = $setDesc;
	  }
	
	  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
	    getOwnPropertyDescriptor: $getDesc,
	    defineProperty:           $setDesc
	  });
	
	  if(fails(function(){ arrayToString.call({}); })){
	    arrayToString = arrayToLocaleString = function toString(){
	      return arrayJoin.call(this);
	    }
	  }
	
	  var $TypedArrayPrototype$ = redefineAll({}, proto);
	  redefineAll($TypedArrayPrototype$, $iterators);
	  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
	  redefineAll($TypedArrayPrototype$, {
	    slice:          $slice,
	    set:            $set,
	    constructor:    function(){ /* noop */ },
	    toString:       arrayToString,
	    toLocaleString: $toLocaleString
	  });
	  addGetter($TypedArrayPrototype$, 'buffer', 'b');
	  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
	  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
	  addGetter($TypedArrayPrototype$, 'length', 'e');
	  dP($TypedArrayPrototype$, TAG, {
	    get: function(){ return this[TYPED_ARRAY]; }
	  });
	
	  module.exports = function(KEY, BYTES, wrapper, CLAMPED){
	    CLAMPED = !!CLAMPED;
	    var NAME       = KEY + (CLAMPED ? 'Clamped' : '') + 'Array'
	      , ISNT_UINT8 = NAME != 'Uint8Array'
	      , GETTER     = 'get' + KEY
	      , SETTER     = 'set' + KEY
	      , TypedArray = global[NAME]
	      , Base       = TypedArray || {}
	      , TAC        = TypedArray && getPrototypeOf(TypedArray)
	      , FORCED     = !TypedArray || !$typed.ABV
	      , O          = {}
	      , TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
	    var getter = function(that, index){
	      var data = that._d;
	      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
	    };
	    var setter = function(that, index, value){
	      var data = that._d;
	      if(CLAMPED)value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
	      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
	    };
	    var addElement = function(that, index){
	      dP(that, index, {
	        get: function(){
	          return getter(this, index);
	        },
	        set: function(value){
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };
	    if(FORCED){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME, '_d');
	        var index  = 0
	          , offset = 0
	          , buffer, byteLength, length, klass;
	        if(!isObject(data)){
	          length     = strictToLength(data, true)
	          byteLength = length * BYTES;
	          buffer     = new $ArrayBuffer(byteLength);
	        } else if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          buffer = data;
	          offset = toOffset($offset, BYTES);
	          var $len = data.byteLength;
	          if($length === undefined){
	            if($len % BYTES)throw RangeError(WRONG_LENGTH);
	            byteLength = $len - offset;
	            if(byteLength < 0)throw RangeError(WRONG_LENGTH);
	          } else {
	            byteLength = toLength($length) * BYTES;
	            if(byteLength + offset > $len)throw RangeError(WRONG_LENGTH);
	          }
	          length = byteLength / BYTES;
	        } else if(TYPED_ARRAY in data){
	          return fromList(TypedArray, data);
	        } else {
	          return $from.call(TypedArray, data);
	        }
	        hide(that, '_d', {
	          b: buffer,
	          o: offset,
	          l: byteLength,
	          e: length,
	          v: new $DataView(buffer)
	        });
	        while(index < length)addElement(that, index++);
	      });
	      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
	      hide(TypedArrayPrototype, 'constructor', TypedArray);
	    } else if(!$iterDetect(function(iter){
	      // V8 works with iterators, but fails in many other cases
	      // https://code.google.com/p/v8/issues/detail?id=4552
	      new TypedArray(null); // eslint-disable-line no-new
	      new TypedArray(iter); // eslint-disable-line no-new
	    }, true)){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME);
	        var klass;
	        // `ws` module bug, temporarily remove validation length for Uint8Array
	        // https://github.com/websockets/ws/pull/645
	        if(!isObject(data))return new Base(strictToLength(data, ISNT_UINT8));
	        if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          return $length !== undefined
	            ? new Base(data, toOffset($offset, BYTES), $length)
	            : $offset !== undefined
	              ? new Base(data, toOffset($offset, BYTES))
	              : new Base(data);
	        }
	        if(TYPED_ARRAY in data)return fromList(TypedArray, data);
	        return $from.call(TypedArray, data);
	      });
	      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key){
	        if(!(key in TypedArray))hide(TypedArray, key, Base[key]);
	      });
	      TypedArray[PROTOTYPE] = TypedArrayPrototype;
	      if(!LIBRARY)TypedArrayPrototype.constructor = TypedArray;
	    }
	    var $nativeIterator   = TypedArrayPrototype[ITERATOR]
	      , CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined)
	      , $iterator         = $iterators.values;
	    hide(TypedArray, TYPED_CONSTRUCTOR, true);
	    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
	    hide(TypedArrayPrototype, VIEW, true);
	    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);
	
	    if(CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)){
	      dP(TypedArrayPrototype, TAG, {
	        get: function(){ return NAME; }
	      });
	    }
	
	    O[NAME] = TypedArray;
	
	    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);
	
	    $export($export.S, NAME, {
	      BYTES_PER_ELEMENT: BYTES,
	      from: $from,
	      of: $of
	    });
	
	    if(!(BYTES_PER_ELEMENT in TypedArrayPrototype))hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);
	
	    $export($export.P, NAME, proto);
	
	    setSpecies(NAME);
	
	    $export($export.P + $export.F * FORCED_SET, NAME, {set: $set});
	
	    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);
	
	    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, {toString: arrayToString});
	
	    $export($export.P + $export.F * fails(function(){
	      new TypedArray(1).slice();
	    }), NAME, {slice: $slice});
	
	    $export($export.P + $export.F * (fails(function(){
	      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString()
	    }) || !fails(function(){
	      TypedArrayPrototype.toLocaleString.call([1, 2]);
	    })), NAME, {toLocaleString: $toLocaleString});
	
	    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
	    if(!LIBRARY && !CORRECT_ITER_NAME)hide(TypedArrayPrototype, ITERATOR, $iterator);
	  };
	} else module.exports = function(){ /* empty */ };

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Uint8', 1, function(init){
	  return function Uint8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Uint8', 1, function(init){
	  return function Uint8ClampedArray(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	}, true);

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Int16', 2, function(init){
	  return function Int16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Uint16', 2, function(init){
	  return function Uint16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Int32', 4, function(init){
	  return function Int32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Uint32', 4, function(init){
	  return function Uint32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Float32', 4, function(init){
	  return function Float32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Float64', 8, function(init){
	  return function Float64Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export   = __webpack_require__(8)
	  , aFunction = __webpack_require__(21)
	  , anObject  = __webpack_require__(12)
	  , rApply    = (__webpack_require__(4).Reflect || {}).apply
	  , fApply    = Function.apply;
	// MS Edge argumentsList argument is optional
	$export($export.S + $export.F * !__webpack_require__(7)(function(){
	  rApply(function(){});
	}), 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    var T = aFunction(target)
	      , L = anObject(argumentsList);
	    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
	  }
	});

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $export    = __webpack_require__(8)
	  , create     = __webpack_require__(46)
	  , aFunction  = __webpack_require__(21)
	  , anObject   = __webpack_require__(12)
	  , isObject   = __webpack_require__(13)
	  , fails      = __webpack_require__(7)
	  , bind       = __webpack_require__(77)
	  , rConstruct = (__webpack_require__(4).Reflect || {}).construct;
	
	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	var NEW_TARGET_BUG = fails(function(){
	  function F(){}
	  return !(rConstruct(function(){}, [], F) instanceof F);
	});
	var ARGS_BUG = !fails(function(){
	  rConstruct(function(){});
	});
	
	$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
	  construct: function construct(Target, args /*, newTarget*/){
	    aFunction(Target);
	    anObject(args);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if(ARGS_BUG && !NEW_TARGET_BUG)return rConstruct(Target, args, newTarget);
	    if(Target == newTarget){
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch(args.length){
	        case 0: return new Target;
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args));
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto    = newTarget.prototype
	      , instance = create(isObject(proto) ? proto : Object.prototype)
	      , result   = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var dP          = __webpack_require__(11)
	  , $export     = __webpack_require__(8)
	  , anObject    = __webpack_require__(12)
	  , toPrimitive = __webpack_require__(16);
	
	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  Reflect.defineProperty(dP.f({}, 1, {value: 1}), 1, {value: 2});
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes){
	    anObject(target);
	    propertyKey = toPrimitive(propertyKey, true);
	    anObject(attributes);
	    try {
	      dP.f(target, propertyKey, attributes);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export  = __webpack_require__(8)
	  , gOPD     = __webpack_require__(51).f
	  , anObject = __webpack_require__(12);
	
	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = gOPD(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export  = __webpack_require__(8)
	  , anObject = __webpack_require__(12);
	var Enumerate = function(iterated){
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = []       // keys
	    , key;
	  for(key in iterated)keys.push(key);
	};
	__webpack_require__(130)(Enumerate, 'Object', function(){
	  var that = this
	    , keys = that._k
	    , key;
	  do {
	    if(that._i >= keys.length)return {value: undefined, done: true};
	  } while(!((key = keys[that._i++]) in that._t));
	  return {value: key, done: false};
	});
	
	$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target){
	    return new Enumerate(target);
	  }
	});

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var gOPD           = __webpack_require__(51)
	  , getPrototypeOf = __webpack_require__(59)
	  , has            = __webpack_require__(5)
	  , $export        = __webpack_require__(8)
	  , isObject       = __webpack_require__(13)
	  , anObject       = __webpack_require__(12);
	
	function get(target, propertyKey/*, receiver*/){
	  var receiver = arguments.length < 3 ? target : arguments[2]
	    , desc, proto;
	  if(anObject(target) === receiver)return target[propertyKey];
	  if(desc = gOPD.f(target, propertyKey))return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if(isObject(proto = getPrototypeOf(target)))return get(proto, propertyKey, receiver);
	}
	
	$export($export.S, 'Reflect', {get: get});

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var gOPD     = __webpack_require__(51)
	  , $export  = __webpack_require__(8)
	  , anObject = __webpack_require__(12);
	
	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return gOPD.f(anObject(target), propertyKey);
	  }
	});

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export  = __webpack_require__(8)
	  , getProto = __webpack_require__(59)
	  , anObject = __webpack_require__(12);
	
	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(anObject(target));
	  }
	});

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  }
	});

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export       = __webpack_require__(8)
	  , anObject      = __webpack_require__(12)
	  , $isExtensible = Object.isExtensible;
	
	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target){
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(243)});

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var gOPN     = __webpack_require__(50)
	  , gOPS     = __webpack_require__(43)
	  , anObject = __webpack_require__(12)
	  , Reflect  = __webpack_require__(4).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = gOPN.f(anObject(it))
	    , getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export            = __webpack_require__(8)
	  , anObject           = __webpack_require__(12)
	  , $preventExtensions = Object.preventExtensions;
	
	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target){
	    anObject(target);
	    try {
	      if($preventExtensions)$preventExtensions(target);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var dP             = __webpack_require__(11)
	  , gOPD           = __webpack_require__(51)
	  , getPrototypeOf = __webpack_require__(59)
	  , has            = __webpack_require__(5)
	  , $export        = __webpack_require__(8)
	  , createDesc     = __webpack_require__(17)
	  , anObject       = __webpack_require__(12)
	  , isObject       = __webpack_require__(13);
	
	function set(target, propertyKey, V/*, receiver*/){
	  var receiver = arguments.length < 4 ? target : arguments[3]
	    , ownDesc  = gOPD.f(anObject(target), propertyKey)
	    , existingDescriptor, proto;
	  if(!ownDesc){
	    if(isObject(proto = getPrototypeOf(target))){
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if(has(ownDesc, 'value')){
	    if(ownDesc.writable === false || !isObject(receiver))return false;
	    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    dP.f(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}
	
	$export($export.S, 'Reflect', {set: set});

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export  = __webpack_require__(8)
	  , setProto = __webpack_require__(73);
	
	if(setProto)$export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto){
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/Array.prototype.includes
	var $export   = __webpack_require__(8)
	  , $includes = __webpack_require__(36)(true);
	
	$export($export.P, 'Array', {
	  includes: function includes(el /*, fromIndex = 0 */){
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	
	__webpack_require__(186)('includes');

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	var $export = __webpack_require__(8)
	  , $at     = __webpack_require__(127)(true);
	
	$export($export.P, 'String', {
	  at: function at(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(8)
	  , $pad    = __webpack_require__(250);
	
	$export($export.P, 'String', {
	  padStart: function padStart(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-string-pad-start-end
	var toLength = __webpack_require__(37)
	  , repeat   = __webpack_require__(91)
	  , defined  = __webpack_require__(35);
	
	module.exports = function(that, maxLength, fillString, left){
	  var S            = String(defined(that))
	    , stringLength = S.length
	    , fillStr      = fillString === undefined ? ' ' : String(fillString)
	    , intMaxLength = toLength(maxLength);
	  if(intMaxLength <= stringLength || fillStr == '')return S;
	  var fillLen = intMaxLength - stringLength
	    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};


/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(8)
	  , $pad    = __webpack_require__(250);
	
	$export($export.P, 'String', {
	  padEnd: function padEnd(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(83)('trimLeft', function($trim){
	  return function trimLeft(){
	    return $trim(this, 1);
	  };
	}, 'trimStart');

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(83)('trimRight', function($trim){
	  return function trimRight(){
	    return $trim(this, 2);
	  };
	}, 'trimEnd');

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/String.prototype.matchAll/
	var $export     = __webpack_require__(8)
	  , defined     = __webpack_require__(35)
	  , toLength    = __webpack_require__(37)
	  , isRegExp    = __webpack_require__(134)
	  , getFlags    = __webpack_require__(196)
	  , RegExpProto = RegExp.prototype;
	
	var $RegExpStringIterator = function(regexp, string){
	  this._r = regexp;
	  this._s = string;
	};
	
	__webpack_require__(130)($RegExpStringIterator, 'RegExp String', function next(){
	  var match = this._r.exec(this._s);
	  return {value: match, done: match === null};
	});
	
	$export($export.P, 'String', {
	  matchAll: function matchAll(regexp){
	    defined(this);
	    if(!isRegExp(regexp))throw TypeError(regexp + ' is not a regexp!');
	    var S     = String(this)
	      , flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp)
	      , rx    = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
	    rx.lastIndex = toLength(regexp.lastIndex);
	    return new $RegExpStringIterator(rx, S);
	  }
	});

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(27)('asyncIterator');

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(27)('observable');

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-getownpropertydescriptors
	var $export        = __webpack_require__(8)
	  , ownKeys        = __webpack_require__(243)
	  , toIObject      = __webpack_require__(32)
	  , gOPD           = __webpack_require__(51)
	  , createProperty = __webpack_require__(163);
	
	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
	    var O       = toIObject(object)
	      , getDesc = gOPD.f
	      , keys    = ownKeys(O)
	      , result  = {}
	      , i       = 0
	      , key;
	    while(keys.length > i)createProperty(result, key = keys[i++], getDesc(O, key));
	    return result;
	  }
	});

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(8)
	  , $values = __webpack_require__(259)(false);
	
	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(30)
	  , toIObject = __webpack_require__(32)
	  , isEnum    = __webpack_require__(44).f;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export  = __webpack_require__(8)
	  , $entries = __webpack_require__(259)(true);
	
	$export($export.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(8)
	  , toObject        = __webpack_require__(58)
	  , aFunction       = __webpack_require__(21)
	  , $defineProperty = __webpack_require__(11);
	
	// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
	__webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
	  __defineGetter__: function __defineGetter__(P, getter){
	    $defineProperty.f(toObject(this), P, {get: aFunction(getter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	// Forced replacement prototype accessors methods
	module.exports = __webpack_require__(28)|| !__webpack_require__(7)(function(){
	  var K = Math.random();
	  // In FF throws only define methods
	  __defineSetter__.call(null, K, function(){ /* empty */});
	  delete __webpack_require__(4)[K];
	});

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(8)
	  , toObject        = __webpack_require__(58)
	  , aFunction       = __webpack_require__(21)
	  , $defineProperty = __webpack_require__(11);
	
	// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
	__webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
	  __defineSetter__: function __defineSetter__(P, setter){
	    $defineProperty.f(toObject(this), P, {set: aFunction(setter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(8)
	  , toObject                 = __webpack_require__(58)
	  , toPrimitive              = __webpack_require__(16)
	  , getPrototypeOf           = __webpack_require__(59)
	  , getOwnPropertyDescriptor = __webpack_require__(51).f;
	
	// B.2.2.4 Object.prototype.__lookupGetter__(P)
	__webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
	  __lookupGetter__: function __lookupGetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.get;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(8)
	  , toObject                 = __webpack_require__(58)
	  , toPrimitive              = __webpack_require__(16)
	  , getPrototypeOf           = __webpack_require__(59)
	  , getOwnPropertyDescriptor = __webpack_require__(51).f;
	
	// B.2.2.5 Object.prototype.__lookupSetter__(P)
	__webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
	  __lookupSetter__: function __lookupSetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.set;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(8);
	
	$export($export.P + $export.R, 'Map', {toJSON: __webpack_require__(267)('Map')});

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(75)
	  , from    = __webpack_require__(268);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(206);
	
	module.exports = function(iter, ITERATOR){
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(8);
	
	$export($export.P + $export.R, 'Set', {toJSON: __webpack_require__(267)('Set')});

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-global
	var $export = __webpack_require__(8);
	
	$export($export.S, 'System', {global: __webpack_require__(4)});

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-is-error
	var $export = __webpack_require__(8)
	  , cof     = __webpack_require__(34);
	
	$export($export.S, 'Error', {
	  isError: function isError(it){
	    return cof(it) === 'Error';
	  }
	});

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  iaddh: function iaddh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
	  }
	});

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  isubh: function isubh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
	  }
	});

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  imulh: function imulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >> 16
	      , v1 = $v >> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
	  }
	});

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  umulh: function umulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >>> 16
	      , v1 = $v >>> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
	  }
	});

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(277)
	  , anObject                  = __webpack_require__(12)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;
	
	metadata.exp({defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey){
	  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
	}});

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	var Map     = __webpack_require__(211)
	  , $export = __webpack_require__(8)
	  , shared  = __webpack_require__(23)('metadata')
	  , store   = shared.store || (shared.store = new (__webpack_require__(215)));
	
	var getOrCreateMetadataMap = function(target, targetKey, create){
	  var targetMetadata = store.get(target);
	  if(!targetMetadata){
	    if(!create)return undefined;
	    store.set(target, targetMetadata = new Map);
	  }
	  var keyMetadata = targetMetadata.get(targetKey);
	  if(!keyMetadata){
	    if(!create)return undefined;
	    targetMetadata.set(targetKey, keyMetadata = new Map);
	  } return keyMetadata;
	};
	var ordinaryHasOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
	};
	var ordinaryGetOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
	};
	var ordinaryDefineOwnMetadata = function(MetadataKey, MetadataValue, O, P){
	  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
	};
	var ordinaryOwnMetadataKeys = function(target, targetKey){
	  var metadataMap = getOrCreateMetadataMap(target, targetKey, false)
	    , keys        = [];
	  if(metadataMap)metadataMap.forEach(function(_, key){ keys.push(key); });
	  return keys;
	};
	var toMetaKey = function(it){
	  return it === undefined || typeof it == 'symbol' ? it : String(it);
	};
	var exp = function(O){
	  $export($export.S, 'Reflect', O);
	};
	
	module.exports = {
	  store: store,
	  map: getOrCreateMetadataMap,
	  has: ordinaryHasOwnMetadata,
	  get: ordinaryGetOwnMetadata,
	  set: ordinaryDefineOwnMetadata,
	  keys: ordinaryOwnMetadataKeys,
	  key: toMetaKey,
	  exp: exp
	};

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , toMetaKey              = metadata.key
	  , getOrCreateMetadataMap = metadata.map
	  , store                  = metadata.store;
	
	metadata.exp({deleteMetadata: function deleteMetadata(metadataKey, target /*, targetKey */){
	  var targetKey   = arguments.length < 3 ? undefined : toMetaKey(arguments[2])
	    , metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
	  if(metadataMap === undefined || !metadataMap['delete'](metadataKey))return false;
	  if(metadataMap.size)return true;
	  var targetMetadata = store.get(target);
	  targetMetadata['delete'](targetKey);
	  return !!targetMetadata.size || store['delete'](target);
	}});

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , getPrototypeOf         = __webpack_require__(59)
	  , ordinaryHasOwnMetadata = metadata.has
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;
	
	var ordinaryGetMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return ordinaryGetOwnMetadata(MetadataKey, O, P);
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
	};
	
	metadata.exp({getMetadata: function getMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	var Set                     = __webpack_require__(214)
	  , from                    = __webpack_require__(268)
	  , metadata                = __webpack_require__(277)
	  , anObject                = __webpack_require__(12)
	  , getPrototypeOf          = __webpack_require__(59)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;
	
	var ordinaryMetadataKeys = function(O, P){
	  var oKeys  = ordinaryOwnMetadataKeys(O, P)
	    , parent = getPrototypeOf(O);
	  if(parent === null)return oKeys;
	  var pKeys  = ordinaryMetadataKeys(parent, P);
	  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
	};
	
	metadata.exp({getMetadataKeys: function getMetadataKeys(target /*, targetKey */){
	  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;
	
	metadata.exp({getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                = __webpack_require__(277)
	  , anObject                = __webpack_require__(12)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;
	
	metadata.exp({getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */){
	  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , getPrototypeOf         = __webpack_require__(59)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;
	
	var ordinaryHasMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return true;
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
	};
	
	metadata.exp({hasMetadata: function hasMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;
	
	metadata.exp({hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(277)
	  , anObject                  = __webpack_require__(12)
	  , aFunction                 = __webpack_require__(21)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;
	
	metadata.exp({metadata: function metadata(metadataKey, metadataValue){
	  return function decorator(target, targetKey){
	    ordinaryDefineOwnMetadata(
	      metadataKey, metadataValue,
	      (targetKey !== undefined ? anObject : aFunction)(target),
	      toMetaKey(targetKey)
	    );
	  };
	}});

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
	var $export   = __webpack_require__(8)
	  , microtask = __webpack_require__(209)()
	  , process   = __webpack_require__(4).process
	  , isNode    = __webpack_require__(34)(process) == 'process';
	
	$export($export.G, {
	  asap: function asap(fn){
	    var domain = isNode && process.domain;
	    microtask(domain ? domain.bind(fn) : fn);
	  }
	});

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/zenparsing/es-observable
	var $export     = __webpack_require__(8)
	  , global      = __webpack_require__(4)
	  , core        = __webpack_require__(9)
	  , microtask   = __webpack_require__(209)()
	  , OBSERVABLE  = __webpack_require__(25)('observable')
	  , aFunction   = __webpack_require__(21)
	  , anObject    = __webpack_require__(12)
	  , anInstance  = __webpack_require__(205)
	  , redefineAll = __webpack_require__(210)
	  , hide        = __webpack_require__(10)
	  , forOf       = __webpack_require__(206)
	  , RETURN      = forOf.RETURN;
	
	var getMethod = function(fn){
	  return fn == null ? undefined : aFunction(fn);
	};
	
	var cleanupSubscription = function(subscription){
	  var cleanup = subscription._c;
	  if(cleanup){
	    subscription._c = undefined;
	    cleanup();
	  }
	};
	
	var subscriptionClosed = function(subscription){
	  return subscription._o === undefined;
	};
	
	var closeSubscription = function(subscription){
	  if(!subscriptionClosed(subscription)){
	    subscription._o = undefined;
	    cleanupSubscription(subscription);
	  }
	};
	
	var Subscription = function(observer, subscriber){
	  anObject(observer);
	  this._c = undefined;
	  this._o = observer;
	  observer = new SubscriptionObserver(this);
	  try {
	    var cleanup      = subscriber(observer)
	      , subscription = cleanup;
	    if(cleanup != null){
	      if(typeof cleanup.unsubscribe === 'function')cleanup = function(){ subscription.unsubscribe(); };
	      else aFunction(cleanup);
	      this._c = cleanup;
	    }
	  } catch(e){
	    observer.error(e);
	    return;
	  } if(subscriptionClosed(this))cleanupSubscription(this);
	};
	
	Subscription.prototype = redefineAll({}, {
	  unsubscribe: function unsubscribe(){ closeSubscription(this); }
	});
	
	var SubscriptionObserver = function(subscription){
	  this._s = subscription;
	};
	
	SubscriptionObserver.prototype = redefineAll({}, {
	  next: function next(value){
	    var subscription = this._s;
	    if(!subscriptionClosed(subscription)){
	      var observer = subscription._o;
	      try {
	        var m = getMethod(observer.next);
	        if(m)return m.call(observer, value);
	      } catch(e){
	        try {
	          closeSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      }
	    }
	  },
	  error: function error(value){
	    var subscription = this._s;
	    if(subscriptionClosed(subscription))throw value;
	    var observer = subscription._o;
	    subscription._o = undefined;
	    try {
	      var m = getMethod(observer.error);
	      if(!m)throw value;
	      value = m.call(observer, value);
	    } catch(e){
	      try {
	        cleanupSubscription(subscription);
	      } finally {
	        throw e;
	      }
	    } cleanupSubscription(subscription);
	    return value;
	  },
	  complete: function complete(value){
	    var subscription = this._s;
	    if(!subscriptionClosed(subscription)){
	      var observer = subscription._o;
	      subscription._o = undefined;
	      try {
	        var m = getMethod(observer.complete);
	        value = m ? m.call(observer, value) : undefined;
	      } catch(e){
	        try {
	          cleanupSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      } cleanupSubscription(subscription);
	      return value;
	    }
	  }
	});
	
	var $Observable = function Observable(subscriber){
	  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
	};
	
	redefineAll($Observable.prototype, {
	  subscribe: function subscribe(observer){
	    return new Subscription(observer, this._f);
	  },
	  forEach: function forEach(fn){
	    var that = this;
	    return new (core.Promise || global.Promise)(function(resolve, reject){
	      aFunction(fn);
	      var subscription = that.subscribe({
	        next : function(value){
	          try {
	            return fn(value);
	          } catch(e){
	            reject(e);
	            subscription.unsubscribe();
	          }
	        },
	        error: reject,
	        complete: resolve
	      });
	    });
	  }
	});
	
	redefineAll($Observable, {
	  from: function from(x){
	    var C = typeof this === 'function' ? this : $Observable;
	    var method = getMethod(anObject(x)[OBSERVABLE]);
	    if(method){
	      var observable = anObject(method.call(x));
	      return observable.constructor === C ? observable : new C(function(observer){
	        return observable.subscribe(observer);
	      });
	    }
	    return new C(function(observer){
	      var done = false;
	      microtask(function(){
	        if(!done){
	          try {
	            if(forOf(x, false, function(it){
	              observer.next(it);
	              if(done)return RETURN;
	            }) === RETURN)return;
	          } catch(e){
	            if(done)throw e;
	            observer.error(e);
	            return;
	          } observer.complete();
	        }
	      });
	      return function(){ done = true; };
	    });
	  },
	  of: function of(){
	    for(var i = 0, l = arguments.length, items = Array(l); i < l;)items[i] = arguments[i++];
	    return new (typeof this === 'function' ? this : $Observable)(function(observer){
	      var done = false;
	      microtask(function(){
	        if(!done){
	          for(var i = 0; i < items.length; ++i){
	            observer.next(items[i]);
	            if(done)return;
	          } observer.complete();
	        }
	      });
	      return function(){ done = true; };
	    });
	  }
	});
	
	hide($Observable.prototype, OBSERVABLE, function(){ return this; });
	
	$export($export.G, {Observable: $Observable});
	
	__webpack_require__(192)('Observable');

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global     = __webpack_require__(4)
	  , $export    = __webpack_require__(8)
	  , invoke     = __webpack_require__(78)
	  , partial    = __webpack_require__(289)
	  , navigator  = global.navigator
	  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	var wrap = function(set){
	  return MSIE ? function(fn, time /*, ...args */){
	    return set(invoke(
	      partial,
	      [].slice.call(arguments, 2),
	      typeof fn == 'function' ? fn : Function(fn)
	    ), time);
	  } : set;
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout:  wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var path      = __webpack_require__(290)
	  , invoke    = __webpack_require__(78)
	  , aFunction = __webpack_require__(21);
	module.exports = function(/* ...pargs */){
	  var fn     = aFunction(this)
	    , length = arguments.length
	    , pargs  = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
	  return function(/* ...args */){
	    var that = this
	      , aLen = arguments.length
	      , j = 0, k = 0, args;
	    if(!holder && !aLen)return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
	    while(aLen > k)args.push(arguments[k++]);
	    return invoke(fn, args, that);
	  };
	};

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4);

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	  , $task   = __webpack_require__(208);
	$export($export.G + $export.B, {
	  setImmediate:   $task.set,
	  clearImmediate: $task.clear
	});

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	var $iterators    = __webpack_require__(193)
	  , redefine      = __webpack_require__(18)
	  , global        = __webpack_require__(4)
	  , hide          = __webpack_require__(10)
	  , Iterators     = __webpack_require__(129)
	  , wks           = __webpack_require__(25)
	  , ITERATOR      = wks('iterator')
	  , TO_STRING_TAG = wks('toStringTag')
	  , ArrayValues   = Iterators.Array;
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype
	    , key;
	  if(proto){
	    if(!proto[ITERATOR])hide(proto, ITERATOR, ArrayValues);
	    if(!proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    for(key in $iterators)if(!proto[key])redefine(proto, key, $iterators[key], true);
	  }
	}

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	!(function(global) {
	  "use strict";
	
	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	
	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);
	
	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };
	
	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function(arg) {
	    return new AwaitArgument(arg);
	  };
	
	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }
	
	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value instanceof AwaitArgument) {
	          return Promise.resolve(value.arg).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }
	
	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }
	
	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }
	
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }
	
	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );
	
	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" ||
	              (method === "throw" && delegate.iterator[method] === undefined)) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;
	
	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }
	
	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }
	
	          var record = tryCatch(
	            delegate.iterator[method],
	            delegate.iterator,
	            arg
	          );
	
	          if (record.type === "throw") {
	            context.delegate = null;
	
	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }
	
	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;
	
	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }
	
	          context.delegate = null;
	        }
	
	        if (method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = arg;
	
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }
	
	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;
	
	          var info = {
	            value: record.arg,
	            done: context.done
	          };
	
	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };
	
	  Gp[toStringTagSymbol] = "Generator";
	
	  Gp.toString = function() {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }
	
	      return ContinueSentinel;
	    },
	
	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },
	
	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(294)))

/***/ },
/* 294 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(296);
	module.exports = __webpack_require__(9).RegExp.escape;

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(8)
	  , $re     = __webpack_require__(297)(/[\\^$*+?.()|[\]{}]/g, '\\$&');
	
	$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ },
/* 297 */
/***/ function(module, exports) {

	module.exports = function(regExp, replace){
	  var replacer = replace === Object(replace) ? function(part){
	    return replace[part];
	  } : replace;
	  return function(it){
	    return String(it).replace(regExp, replacer);
	  };
	};

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _object = __webpack_require__(299);
	
	var _object2 = _interopRequireDefault(_object);
	
	var _upload = __webpack_require__(454);
	
	var _upload2 = _interopRequireDefault(_upload);
	
	var _copyPaste = __webpack_require__(467);
	
	var _copyPaste2 = _interopRequireDefault(_copyPaste);
	
	var _output = __webpack_require__(468);
	
	var _output2 = _interopRequireDefault(_output);
	
	var _getUglifyJs = __webpack_require__(464);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Application = function (_MatreshkaObject) {
	    _inherits(Application, _MatreshkaObject);
	
	    function Application() {
	        var _this;
	
	        _classCallCheck(this, Application);
	
	        (_this = _possibleConstructorReturn(this, (Application.__proto__ || Object.getPrototypeOf(Application)).call(this)), _this).set({
	            activeTabName: 'upload',
	            useECMAScriptNext: !!localStorage.useECMAScriptNext
	        }).addDataKeys(['upload', 'copyPaste', 'output']).instantiate({
	            upload: _upload2.default,
	            copyPaste: _copyPaste2.default,
	            output: _output2.default
	        }).bindNode('useECMAScriptNext', '.use-ecmascript-next').on('change:useECMAScriptNext', function () {
	            var _this2 = _this,
	                useECMAScriptNext = _this2.useECMAScriptNext;
	
	
	            (0, _getUglifyJs.setUseECMAScriptNext)(useECMAScriptNext);
	
	            if (useECMAScriptNext) {
	                localStorage.useECMAScriptNext = 'y';
	            } else {
	                delete localStorage.useECMAScriptNext;
	            }
	        }, true).on({
	            '*@change:active': function changeActive(evt) {
	                if (evt.value === true) {
	                    var _iteratorNormalCompletion = true;
	                    var _didIteratorError = false;
	                    var _iteratorError = undefined;
	
	                    try {
	                        for (var _iterator = _this[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                            var tab = _step.value;
	
	                            if (tab !== evt.self) {
	                                tab.active = false;
	                            }
	                        }
	                    } catch (err) {
	                        _didIteratorError = true;
	                        _iteratorError = err;
	                    } finally {
	                        try {
	                            if (!_iteratorNormalCompletion && _iterator.return) {
	                                _iterator.return();
	                            }
	                        } finally {
	                            if (_didIteratorError) {
	                                throw _iteratorError;
	                            }
	                        }
	                    }
	                }
	            },
	            'upload@submitCode copyPaste@submitCode': function uploadSubmitCodeCopyPasteSubmitCode(code) {
	                _this.output.active = true;
	                _this.output.inputCode = code;
	            }
	        });
	        return _this;
	    }
	
	    return Application;
	}(_object2.default);
	
	module.exports = new Application();

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Class = __webpack_require__(300);
	
	var Matreshka = __webpack_require__(301);
	
	var instanceMembers = __webpack_require__(441);
	
	var matreshkaError = __webpack_require__(325);
	
	var initMK = __webpack_require__(318);
	
	instanceMembers.extends = Matreshka;
	
	instanceMembers.constructor = function MatreshkaObject(data) {
	    if (!(this instanceof MatreshkaObject)) {
	        throw matreshkaError('common:call_class');
	    }
	
	    initMK(this);
	
	    // return is used to make possible to chain super() calls
	    return typeof data !== 'undefined' ? this.setData(data) : this;
	};
	
	var MatreshkaObject = Class(instanceMembers);
	
	module.exports = MatreshkaObject;
	//# sourceMappingURL=index.js.map

/***/ },
/* 300 */
/***/ function(module, exports) {

	'use strict';
	
	// static methods and properties of classes will be hidden under Symbol('staticNames')
	var staticNamesProperty = typeof Symbol === 'function' ? Symbol('staticNames') : '__staticNames';
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	module.exports = Class;
	function Class(prototype, staticProps) {
	    var Constructor = hasOwnProperty.call(prototype, 'constructor') ? prototype.constructor : function EmptyConstructor() {};
	    // extends is kept for backward compatibility
	    var Parent = prototype.extends;
	    // inherit proto from class parent or empty object
	    var proto = Object.create(Parent ? Parent.prototype : {});
	    var parentStaticNames = Parent ? Parent[staticNamesProperty] : undefined;
	
	    // allow to pass symbols as prototype properties
	    var _result = proto;
	
	    for (var _source2 = prototype, _keys4 = Object.keys(_source2), _l7 = _keys4.length, _i4 = 0, _key2; _i4 < _l7; _i4++) {
	        _key2 = _keys4[_i4];
	        _result[_key2] = _source2[_key2];
	    }
	
	    if (getOwnPropertySymbols) {
	        var symbols = getOwnPropertySymbols(prototype);
	
	        for (var _target = symbols, _index = 0, symbol, _l2 = _target.length; symbol = _target[_index], _index < _l2; _index++) {
	            proto[symbol] = prototype[symbol];
	        }
	    }
	
	    // inherit staric properties of a parent
	    if (typeof parentStaticNames === 'object') {
	        (function () {
	            var staticNames = Constructor[staticNamesProperty] || {};
	            Constructor[staticNamesProperty] = staticNames;
	
	            // inherit static properties of a parent when their keys are symbols
	            for (var _target2 = parentStaticNames, _keys2 = Object.keys(_target2), _i2 = 0, name, _, _l3 = _keys2.length; (name = _keys2[_i2], _ = _target2[name]), _i2 < _l3; _i2++) {
	                Constructor[name] = Parent[name];
	                staticNames[name] = true;
	            }
	
	            if (getOwnPropertySymbols) {
	                var _symbols = getOwnPropertySymbols(parentStaticNames);
	
	                for (var _target3 = _symbols, _index2 = 0, symbol, _l4 = _target3.length; symbol = _target3[_index2], _index2 < _l4; _index2++) {
	                    Constructor[symbol] = Parent[symbol];
	                    staticNames[symbol] = true;
	                }
	            }
	        })();
	    }
	
	    // extend Constructor with passed static properties
	    if (typeof staticProps === 'object') {
	        (function () {
	            var staticNames = Constructor[staticNamesProperty] || {};
	            Constructor[staticNamesProperty] = staticNames;
	
	            // extend Constructor with passed static properties if their keys are symbols
	            for (var _target4 = staticProps, _keys3 = Object.keys(_target4), _i3 = 0, key, value, _l5 = _keys3.length; (key = _keys3[_i3], value = _target4[key]), _i3 < _l5; _i3++) {
	                Constructor[key] = value;
	                staticNames[key] = true;
	            }
	
	            if (getOwnPropertySymbols) {
	                var _symbols2 = getOwnPropertySymbols(staticProps);
	
	                for (var _target5 = _symbols2, _index3 = 0, symbol, _l6 = _target5.length; symbol = _target5[_index3], _index3 < _l6; _index3++) {
	                    Constructor[symbol] = staticProps[symbol];
	                    staticNames[symbol] = true;
	                }
	            }
	        })();
	    }
	
	    Constructor.prototype = proto;
	
	    // if new Class({}) is called return its instance
	    if (this instanceof Class) {
	        return new Constructor();
	    }
	
	    return Constructor;
	}
	//# sourceMappingURL=class.js.map

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Class = __webpack_require__(300);
	
	var staticMembers = __webpack_require__(302);
	
	var instanceMembers = __webpack_require__(440);
	
	var initMK = __webpack_require__(318);
	
	var matreshkaError = __webpack_require__(325);
	
	instanceMembers.constructor = function Matreshka() {
	    if (!(this instanceof Matreshka)) {
	        throw matreshkaError('common:call_class');
	    }
	
	    initMK(this);
	};
	
	var Matreshka = Class(instanceMembers, staticMembers);
	
	module.exports = Matreshka;
	//# sourceMappingURL=index.js.map

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var defaultBinders = __webpack_require__(303);
	
	var lookForBinder = __webpack_require__(309);
	
	var parserBrackers = __webpack_require__(310);
	
	var Class = __webpack_require__(300);
	
	var toMatreshka = __webpack_require__(311);
	
	var _binders = __webpack_require__(412);
	
	var binders = _binders;
	
	var _universalmethods = __webpack_require__(422);
	
	var universalMethods = _universalmethods;
	
	var assign = __webpack_require__(314);
	
	var useDOMLibrary = __webpack_require__(438);
	
	var chain = __webpack_require__(439);
	
	module.exports = assign({
	    Class: Class,
	    defaultBinders: defaultBinders,
	    lookForBinder: lookForBinder,
	    binders: binders,
	    parserBrackers: parserBrackers,
	    toMatreshka: toMatreshka,
	    useDOMLibrary: useDOMLibrary,
	    chain: chain
	}, universalMethods);
	//# sourceMappingURL=_staticmembers.js.map

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var input = __webpack_require__(304);
	
	var textarea = __webpack_require__(305);
	
	var select = __webpack_require__(306);
	
	var progress = __webpack_require__(307);
	
	var output = __webpack_require__(308);
	
	// defaultBinders collection by default contains only one function-checker
	module.exports = [function (node) {
	    switch (node.tagName) {
	        case 'INPUT':
	            return input(node.type);
	        case 'TEXTAREA':
	            return textarea();
	        case 'SELECT':
	            return select(node.multiple);
	        case 'PROGRESS':
	            return progress();
	        case 'OUTPUT':
	            return output();
	        default:
	            return null;
	    }
	}];
	//# sourceMappingURL=defaultbinders.js.map

/***/ },
/* 304 */
/***/ function(module, exports) {

	'use strict';
	
	// returns a binder for input element based on its type
	module.exports = input;
	function input(type) {
	    var on = void 0;
	    switch (type) {
	        case 'checkbox':
	            return {
	                on: 'click keyup',
	                getValue: function () {
	                    return this.checked;
	                },
	                setValue: function (value) {
	                    this.checked = value;
	                }
	            };
	        case 'radio':
	            return {
	                on: 'click keyup',
	                getValue: function () {
	                    return this.value;
	                },
	                setValue: function (value) {
	                    this.checked = typeof value !== 'undefined' && this.value === value;
	                }
	            };
	        case 'submit':
	        case 'button':
	        case 'image':
	        case 'reset':
	            return {};
	        case 'hidden':
	            on = null;
	            break;
	        case 'file':
	            on = 'change';
	            break;
	
	        /*
	        case 'text':
	        case 'password':
	        case 'date':
	        case 'datetime':
	        case 'datetime-local':
	        case 'month':
	        case 'time':
	        case 'week':
	        case 'range':
	        case 'color':
	        case 'search':
	        case 'email':
	        case 'tel':
	        case 'url':
	        case 'file':
	        case 'number': */
	        default:
	            // other future (HTML6+) inputs
	            on = 'input';
	    }
	
	    return {
	        on: on,
	        getValue: function () {
	            return this.value;
	        },
	        setValue: function (value) {
	            this.value = value;
	        }
	    };
	}
	//# sourceMappingURL=input.js.map

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var input = __webpack_require__(304);
	
	// returns a binder for textarea element
	module.exports = textarea;
	function textarea() {
	    // textarea behaves just like text input
	    return input('text');
	}
	//# sourceMappingURL=textarea.js.map

/***/ },
/* 306 */
/***/ function(module, exports) {

	'use strict';
	
	// returns a binder for select element
	module.exports = select;
	function select(multiple) {
	    if (multiple) {
	        return {
	            on: 'change',
	            getValue: function () {
	                var options = this.options;
	
	                var result = [];
	
	                for (var i = 0; options.length > i; i++) {
	                    if (options[i].selected) {
	                        result.push(options[i].value);
	                    }
	                }
	
	                return result;
	            },
	            setValue: function (givenValue) {
	                var options = this.options;
	
	                var value = typeof givenValue === 'string' ? [givenValue] : givenValue;
	                for (var i = options.length - 1; i >= 0; i--) {
	                    options[i].selected = ~value.indexOf(options[i].value);
	                }
	            }
	        };
	    }
	
	    return {
	        on: 'change',
	        getValue: function () {
	            return this.value;
	        },
	        setValue: function (value) {
	            this.value = value;
	
	            if (!value) {
	                var options = this.options;
	
	                for (var i = options.length - 1; i >= 0; i--) {
	                    if (!options[i].value) {
	                        options[i].selected = true;
	                        break;
	                    }
	                }
	            }
	        }
	    };
	}
	//# sourceMappingURL=select.js.map

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var input = __webpack_require__(304);
	
	// returns a binder for textarea element
	module.exports = progress;
	function progress() {
	    return input();
	}
	//# sourceMappingURL=progress.js.map

/***/ },
/* 308 */
/***/ function(module, exports) {

	'use strict';
	
	// returns a binder for output element
	module.exports = output;
	function output() {
	    return {
	        on: null,
	        getValue: function () {
	            return this.value || this.textContent;
	        },
	        setValue: function (value) {
	            var property = 'form' in this ? 'value' : 'textContent';
	            this[property] = value === null ? '' : '' + value;
	        }
	    };
	}
	//# sourceMappingURL=output.js.map

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var defaultBinders = __webpack_require__(303);
	
	// tries to find a binder for given node
	module.exports = lookForBinder;
	function lookForBinder(node) {
	    for (var i = 0; i < defaultBinders.length; i++) {
	        var binder = defaultBinders[i].call(node, node);
	        if (binder) {
	            return binder;
	        }
	    }
	
	    return undefined;
	}
	//# sourceMappingURL=lookforbinder.js.map

/***/ },
/* 310 */
/***/ function(module, exports) {

	'use strict';
	
	// brackets for bindings parser
	module.exports = {
	    left: '{{',
	    right: '}}'
	};
	//# sourceMappingURL=parserbrackets.js.map

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// recursively converts objects and arrays to Matreshka.Object and Matreshka.Array instances
	module.exports = toMatreshka;
	function toMatreshka(data) {
	    // fix circular ref issue
	    var MatreshkaObject = __webpack_require__(299);
	    var MatreshkaArray = __webpack_require__(312);
	
	    // convert only objects
	    if (data && typeof data === 'object') {
	        var _ret = function () {
	            if ('length' in data) {
	                var _ret2 = function () {
	                    // if length is given convert it to Matreshka.Array instance
	                    var arrayItems = Array(data.length);
	
	                    for (var _target = data, index = 0, item, _l = _target.length; item = _target[index], index < _l; index++) {
	                        arrayItems[index] = toMatreshka(item);
	                    }
	
	                    return {
	                        v: {
	                            v: new MatreshkaArray().recreate(arrayItems)
	                        }
	                    };
	                }();
	
	                if (typeof _ret2 === "object") return _ret2.v;
	            }
	
	            // if length is not given convert it to Matreshka.Object instance
	            var object = {};
	
	            for (var _target2 = data, _keys = Object.keys(_target2), _i = 0, key, value, _l2 = _keys.length; (key = _keys[_i], value = _target2[key]), _i < _l2; _i++) {
	                object[key] = toMatreshka(value);
	            }
	
	            return {
	                v: new MatreshkaObject(object)
	            };
	        }();
	
	        if (typeof _ret === "object") return _ret.v;
	    }
	
	    // for all non-objects just return passed data
	    return data;
	}
	//# sourceMappingURL=tomatreshka.js.map

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Class = __webpack_require__(300);
	
	var Matreshka = __webpack_require__(301);
	
	var instanceMembers = __webpack_require__(313);
	
	var matreshkaError = __webpack_require__(325);
	
	var initMK = __webpack_require__(318);
	
	var staticMembers = __webpack_require__(409);
	
	instanceMembers.extends = Matreshka;
	
	instanceMembers.constructor = function MatreshkaArray(length) {
	    if (!(this instanceof MatreshkaArray)) {
	        throw matreshkaError('common:call_class');
	    }
	
	    initMK(this);
	
	    // repeat the same logic as for native Array
	    if (arguments.length === 1 && typeof length === 'number') {
	        this.length = length;
	    } else if (arguments.length) {
	        this.recreate(arguments, {
	            silent: true,
	            dontRender: true
	        });
	    }
	
	    // return is used to make possible to chain super() calls
	    return this;
	};
	
	var MatreshkaArray = Class(instanceMembers, staticMembers);
	
	module.exports = MatreshkaArray;
	//# sourceMappingURL=index.js.map

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _assign;
	
	var assign = __webpack_require__(314);
	
	var _afterInit = __webpack_require__(315);
	
	var mediateItem = __webpack_require__(340);
	
	var orderBy = __webpack_require__(341);
	
	var pull = __webpack_require__(388);
	
	var recreate = __webpack_require__(389);
	
	var rerender = __webpack_require__(392);
	
	var restore = __webpack_require__(393);
	
	var toJSON = __webpack_require__(394);
	
	var pseudoNativeMethods = __webpack_require__(395);
	
	var iterator = __webpack_require__(408);
	
	var symbolIterator = typeof Symbol === 'function' ? Symbol.iterator : '@@iterator';
	
	module.exports = assign((_assign = {
	    _afterInit: _afterInit,
	    mediateItem: mediateItem,
	    orderBy: orderBy,
	    pull: pull,
	    recreate: recreate,
	    rerender: rerender,
	    restore: restore,
	    toJSON: toJSON,
	    length: 0,
	    isMatreshkaArray: true
	}, _assign[symbolIterator] = iterator, _assign), pseudoNativeMethods);
	//# sourceMappingURL=_prototype.js.map

/***/ },
/* 314 */
/***/ function(module, exports) {

	'use strict';
	
	// Object.assign polyfyll
	/* istanbul ignore next */
	var assign = Object.assign || function assign(target) {
	    /* istanbul ignore next */
	    if (target === undefined || target === null) {
	        throw new TypeError('Cannot convert undefined or null to object');
	    }
	
	    var output = Object(target);
	
	    for (var index = 1; index < arguments.length; index++) {
	        var source = arguments[index];
	        if (source !== undefined && source !== null) {
	            for (var _target = source, _keys = Object.keys(_target), _i = 0, nextKey, nextValue, _l = _keys.length; (nextKey = _keys[_i], nextValue = _target[nextKey]), _i < _l; _i++) {
	                output[nextKey] = nextValue;
	            }
	        }
	    }
	
	    return output;
	};
	
	module.exports = assign;
	//# sourceMappingURL=assign.js.map

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var afterMatreshkaInit = __webpack_require__(316);
	
	var addListener = __webpack_require__(317);
	
	var matreshkaError = __webpack_require__(325);
	
	// the function returns array item converted to Model instance
	function modelItemMediator(item, index) {
	    var Model = this.Model;
	
	    // if an item is already instance of Model
	
	    if (item instanceof Model) {
	        return item;
	    }
	
	    var itemData = void 0;
	
	    if (item && typeof item.toJSON === 'function') {
	        // if item is not falsy and if it has toJSON method
	        // then retrieve instance data by this method
	        itemData = item.toJSON(false);
	    } else {
	        // if not then use an item as its data
	        itemData = item;
	    }
	
	    return new Model(itemData, this, index);
	}
	
	// event handler to listen changes of Model property
	function changeModel() {
	    var Model = this.Model;
	
	    // if model has wrong type then throw an error
	
	    if (typeof Model !== 'function') {
	        throw matreshkaError('array:model_type', { Model: Model });
	    }
	
	    // attatch item mediator
	    this.mediateItem(modelItemMediator);
	}
	
	// event handler to listen changes of itemRenderer property
	function changeItemRendererHandler() {
	    var eventOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var _eventOptions$forceRe = eventOptions.forceRerender,
	        forceRerender = _eventOptions$forceRe === undefined ? true : _eventOptions$forceRe;
	
	    this.rerender({ forceRerender: forceRerender });
	}
	
	// Matreshka.Array initializer
	module.exports = afterMatreshkaArrayInit;
	function afterMatreshkaArrayInit() {
	    // we need to calculate hasModel before change:Model is added
	    var hasModel = 'Model' in this;
	
	    // call Matreshka initializer
	    afterMatreshkaInit.call(this);
	
	    addListener(this, '_change:common:Model', changeModel, this, {
	        skipChecks: true
	    });
	
	    addListener(this, '_change:common:itemRenderer', changeItemRendererHandler, this, {
	        skipChecks: true
	    });
	
	    // call changeModel handler immediately if model is present
	    // it will throw an error if Model is not a function
	    if (hasModel) {
	        changeModel.call(this);
	    }
	}
	//# sourceMappingURL=_afterinit.js.map

/***/ },
/* 316 */
/***/ function(module, exports) {

	"use strict";
	
	// Matreshka initializer
	module.exports = afterMatreshkaInit;
	function afterMatreshkaInit() {
	    this.nodes = {};
	    this.$nodes = {};
	}
	//# sourceMappingURL=_afterinit.js.map

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var initMK = __webpack_require__(318);
	
	var triggerOne = __webpack_require__(320);
	
	var defineProp = __webpack_require__(322);
	
	var domEventReg = __webpack_require__(327);
	
	// property modifier event regexp
	var propModEventReg // eslint-disable-next-line max-len
	= /^_change:deps:|^_change:bindings:|^_change:delegated:|^_change:common:|^_change:tree:|^change:|^beforechange:/;
	
	// adds simple event listener
	// used as core of event engine
	module.exports = addListener;
	function addListener(object, name, callback, context) {
	    var info = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
	
	    var _initMK = initMK(object),
	        allEvents = _initMK.events;
	
	    var ctx = context || object;
	    var events = allEvents[name];
	    var event = { callback: callback, context: context, ctx: ctx, name: name, info: info };
	    // skipChecks is used by internal methods for better performance
	    var _info$skipChecks = info.skipChecks,
	        skipChecks = _info$skipChecks === undefined ? false : _info$skipChecks;
	
	
	    if (!skipChecks) {
	        var domEventExecResult = domEventReg.exec(name);
	
	        if (domEventExecResult) {
	            var eventName = domEventExecResult[1],
	                _domEventExecResult$ = domEventExecResult[2],
	                key = _domEventExecResult$ === undefined ? 'sandbox' : _domEventExecResult$,
	                selector = domEventExecResult[3];
	            // fixing circular reference issue
	
	            var addDomListener = __webpack_require__(328);
	
	            addDomListener(object, key, eventName, selector, callback, context, info);
	
	            return true;
	        }
	    }
	
	    // if there are events with the same name
	    if (events) {
	        if (!skipChecks) {
	            // if there are events with the same data, return false
	            for (var i = 0; i < events.length; i++) {
	                var existingEvent = events[i];
	                var argCallback = callback && callback._callback || callback;
	                var eventCallback = existingEvent.callback._callback || existingEvent.callback;
	                if (argCallback === eventCallback && existingEvent.context === context) {
	                    return false;
	                }
	            }
	        }
	
	        // if the event isn't found add it to the event list
	        events.push(event);
	    } else {
	        // if there are no events with the same name, create an array with only  one event
	        allEvents[name] = [event];
	    }
	
	    if (propModEventReg.test(name)) {
	        // define needed accessors for KEY
	        defineProp(object, name.replace(propModEventReg, ''));
	    }
	
	    // names prefixed by underscore mean "private" events
	    if (!skipChecks && name[0] !== '_') {
	        triggerOne(object, 'addevent:' + name, event);
	        triggerOne(object, 'addevent', event);
	    }
	
	    // if event is added successfully return true
	    return true;
	}
	//# sourceMappingURL=_addlistener.js.map

/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var defs = __webpack_require__(319);
	
	var objectId = 0;
	
	// this is common function which associates an object with its Matreshka definition
	module.exports = initMK;
	function initMK(object) {
	    var def = defs.get(object);
	    if (!def) {
	        def = {
	            // a property name of "events" object is an event name
	            // and a value is an array of event handlers
	            events: {
	                /* example: {
	                    callback: function,
	                    ctx: object,
	                    context: object2,
	                    name: "example",
	                    info: { ...extra data for an event... }
	                } */
	            },
	            // "props" contains special information about properties (getters, setters etc)
	            props: {
	                /* example: {
	                    value: object[key],
	                    mediator: null,
	                    bindings: [{
	                        node,
	                        binder,
	                        nodeHandler,
	                        objectHandler,
	                        ...other required info
	                    }]
	                }*/
	            },
	            id: objectId
	        };
	
	        objectId += 1;
	
	        defs.set(object, def);
	
	        if (object._afterInit) {
	            object._afterInit(def);
	        }
	    }
	
	    return def;
	}
	//# sourceMappingURL=init.js.map

/***/ },
/* 319 */
/***/ function(module, exports) {

	'use strict';
	
	function PseudoMap() {}
	
	// PseudoMap simulates WeakMap behavior with O(1) search complexity
	// it's needed to support @IE9 and @IE10
	var _result = PseudoMap.prototype;
	
	for (var _source2 = {
	    get: function (obj) {
	        return obj.matreshkaData;
	    },
	    set: function (obj, data) {
	        Object.defineProperty(obj, 'matreshkaData', {
	            value: data,
	            enumerable: false,
	            writable: false,
	            configurable: false
	        });
	    },
	    has: function (obj) {
	        return ('matreshkaData' in obj);
	    }
	}, _keys2 = Object.keys(_source2), _l2 = _keys2.length, _i2 = 0, _key2; _i2 < _l2; _i2++) {
	    _key2 = _keys2[_i2];
	    _result[_key2] = _source2[_key2];
	}
	
	module.exports = typeof WeakMap === 'undefined' ? new PseudoMap() : new WeakMap();
	//# sourceMappingURL=defs.js.map

/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var defs = __webpack_require__(319);
	
	var apply = __webpack_require__(321);
	
	// triggers one event
	module.exports = triggerOne;
	function triggerOne(object, name, triggerArgs) {
	    var def = defs.get(object);
	    var events = def && def.events[name];
	
	    if (events) {
	        var l = events.length;
	        var i = 0;
	
	        // allow to pass both array of args and single arg as triggerArgs
	        if (triggerArgs instanceof Array) {
	            while (i < l) {
	                var event = triggerOne.latestEvent = events[i];
	                var callback = event.callback,
	                    ctx = event.ctx;
	
	                apply(callback, ctx, triggerArgs);
	                i += 1;
	            }
	        } else {
	            while (i < l) {
	                var _event = triggerOne.latestEvent = events[i];
	                var _callback = _event.callback,
	                    _ctx = _event.ctx;
	
	                _callback.call(_ctx, triggerArgs);
	                i += 1;
	            }
	        }
	    }
	}
	
	// latestEvent is used as required hack in somemethods
	triggerOne.latestEvent = {
	    info: {},
	    name: null
	};
	//# sourceMappingURL=_triggerone.js.map

/***/ },
/* 321 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = apply;
	function apply(func, context, args) {
	    if (context) {
	        switch (args.length) {
	            case 0:
	                return func.call(context);
	            case 1:
	                return func.call(context, args[0]);
	            case 2:
	                return func.call(context, args[0], args[1]);
	            case 3:
	                return func.call(context, args[0], args[1], args[2]);
	            case 4:
	                return func.call(context, args[0], args[1], args[2], args[3]);
	            default:
	                return func.apply(context, args); // eslint-disable-line prefer-spread
	        }
	    }
	
	    switch (args.length) {
	        case 0:
	            return func();
	        case 1:
	            return func(args[0]);
	        case 2:
	            return func(args[0], args[1]);
	        case 3:
	            return func(args[0], args[1], args[2]);
	        case 4:
	            return func(args[0], args[1], args[2], args[3]);
	        default:
	            return func.apply(undefined, args); // eslint-disable-line prefer-spread
	    }
	}
	//# sourceMappingURL=apply.js.map

/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var defs = __webpack_require__(319);
	
	var set = __webpack_require__(323);
	
	var matreshkaError = __webpack_require__(325);
	
	function errorAccessor() {
	    throw matreshkaError('common:use_magic_props');
	}
	
	// the function defines needed descriptor for given property
	module.exports = defineProp;
	function defineProp(object, key, noAccessor) {
	    var def = defs.get(object);
	
	    // if no object definition do nothing
	    if (!def) {
	        return null;
	    }
	
	    if (!def.props[key]) {
	        (function () {
	            var propDef = def.props[key] = {
	                value: object[key],
	                mediator: null,
	                bindings: null
	            };
	            var getter = void 0;
	            var setter = void 0;
	
	            // make possible to throw an error on get and on set if sandbox (for all objects)
	            // or container (for Matreshka.Array instances) are used
	            if (key === 'sandbox' || object.isMatreshkaArray && key === 'container') {
	                getter = setter = errorAccessor;
	            }
	
	            if (!noAccessor) {
	                Object.defineProperty(object, key, {
	                    configurable: true,
	                    enumerable: true,
	                    get: function () {
	                        return getter ? getter() : propDef.value;
	                    },
	                    set: function (v) {
	                        return setter ? setter() : set(object, key, v, {
	                            fromSetter: true
	                        });
	                    }
	                });
	            }
	        })();
	    }
	
	    return def.props[key];
	}
	//# sourceMappingURL=defineprop.js.map

/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var defs = __webpack_require__(319);
	
	var triggerOne = __webpack_require__(320);
	
	var checkObjectType = __webpack_require__(324);
	
	var is = __webpack_require__(326);
	
	// the function sets new value for a property
	// since its performance is very critical we're checking events existence manually
	module.exports = set;
	function set(object, key, value, eventOptions) {
	    if (typeof this === 'object' && this.isMatreshka) {
	        // when context is Matreshka instance, use this as an object and shift other args
	        /* eslint-disable no-param-reassign */
	        eventOptions = value;
	        value = key;
	        key = object;
	        object = this;
	        /* eslint-enable no-param-reassign */
	    } else {
	        // throw error when object type is wrong
	        checkObjectType(object, 'set');
	    }
	
	    // if no key or falsy key is given
	    if (!key) {
	        return object;
	    }
	
	    // allow to use key-value object as another method variation
	    if (typeof key === 'object') {
	        for (var _target = key, _keys = Object.keys(_target), _i = 0, objKey, objVal, _l = _keys.length; (objKey = _keys[_i], objVal = _target[objKey]), _i < _l; _i++) {
	            set(object, objKey, objVal, value)
	        }
	
	        return object;
	    }
	
	    eventOptions = eventOptions || {}; // eslint-disable-line no-param-reassign
	    var def = defs.get(object);
	
	    // if no object definition then make simple assignment
	    if (!def) {
	        object[key] = value;
	        return object;
	    }
	
	    var props = def.props,
	        events = def.events;
	
	    var propDef = props[key];
	
	    // if no property definition then make simple assignment
	    if (!propDef) {
	        object[key] = value;
	        return object;
	    }
	
	    var previousValue = propDef.value,
	        mediator = propDef.mediator;
	
	    // possible flags, all of them are falsy by default
	
	    var _eventOptions = eventOptions,
	        skipMediator = _eventOptions.skipMediator,
	        fromMediator = _eventOptions.fromMediator,
	        force = _eventOptions.force,
	        forceHTML = _eventOptions.forceHTML,
	        silent = _eventOptions.silent,
	        silentHTML = _eventOptions.silentHTML,
	        skipCalc = _eventOptions.skipCalc;
	
	
	    var newValue = void 0;
	
	    if (mediator && !is(value, previousValue) && !skipMediator && !fromMediator) {
	        newValue = mediator(value);
	    } else {
	        newValue = value;
	    }
	
	    var isChanged = !is(newValue, previousValue);
	
	    // add to eventOptions object some useful properties
	    // we override default eventOptions because some of the properties need to have actual values,
	    // not inherited ones (eg when calc is used)
	
	    var _keys2,
	        _l2,
	        _i2,
	        _source,
	        _key,
	        _result = {};
	
	    for (_source = eventOptions, _keys2 = Object.keys(_source), _l2 = _keys2.length, _i2 = 0; _i2 < _l2; _i2++) {
	        _key = _keys2[_i2];
	        _result[_key] = _source[_key];
	    }
	
	    _result.value = newValue
	    _result.self = object
	    _result.previousValue = previousValue
	    _result.key = key
	    _result.isChanged = isChanged
	    var extendedEventOptions = _result;
	
	    var triggerChange = (isChanged || force) && !silent;
	
	    // trigger beforechange:KEY and beforechange events
	    if (triggerChange) {
	        var beforechangeStr = 'beforechange';
	        var beforechangeEventName = beforechangeStr + ':' + key;
	
	        if (events[beforechangeEventName]) {
	            triggerOne(object, beforechangeEventName, extendedEventOptions);
	        }
	
	        if (events[beforechangeStr]) {
	            triggerOne(object, beforechangeStr, extendedEventOptions);
	        }
	    }
	
	    propDef.value = newValue;
	
	    // triger bindings
	    if (!silentHTML && (isChanged || forceHTML)) {
	        var changeBindingsEventName = '_change:bindings:' + key;
	        if (events[changeBindingsEventName]) {
	            triggerOne(object, changeBindingsEventName, extendedEventOptions);
	        }
	    }
	
	    // trigger change:KEY and change events
	    if (triggerChange) {
	        var changeStr = 'change';
	        var changeEventName = changeStr + ':' + key;
	        if (events[changeEventName]) {
	            triggerOne(object, changeEventName, extendedEventOptions);
	        }
	
	        if (events[changeStr]) {
	            triggerOne(object, changeStr, extendedEventOptions);
	        }
	    }
	
	    // trigger dependencies made by calc method
	    if ((isChanged || force) && !skipCalc) {
	        var changeDepsEventName = '_change:deps:' + key;
	        if (events[changeDepsEventName]) {
	            triggerOne(object, changeDepsEventName, extendedEventOptions);
	        }
	    }
	
	    if (isChanged) {
	        // trigger common delegated events logic
	        var changeDelegatedKeyEventName = '_change:delegated:' + key;
	        if (events[changeDelegatedKeyEventName]) {
	            triggerOne(object, changeDelegatedKeyEventName, extendedEventOptions);
	        }
	
	        // trigger tree change events logic
	        var changeTreeEventName = '_change:tree:' + key;
	        if (events[changeTreeEventName]) {
	            triggerOne(object, changeTreeEventName, extendedEventOptions);
	        }
	
	        // trigger other internal change events
	        var changeCommonEventName = '_change:common:' + key;
	        if (events[changeCommonEventName]) {
	            triggerOne(object, changeCommonEventName, extendedEventOptions);
	        }
	
	        // trigger delegated logic for asterisk events (*.*.*@foo)
	        // TODO: Confusing events names ("_change:delegated", "_change:common:KEY" etc)
	        var changeDelegatedEventName = '_change:delegated';
	        if (events[changeDelegatedEventName]) {
	            triggerOne(object, changeDelegatedEventName, extendedEventOptions);
	        }
	    }
	
	    return object;
	}
	//# sourceMappingURL=set.js.map

/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var matreshkaError = __webpack_require__(325);
	
	// checks type of a variable and throws an error if its type is not an object
	module.exports = checkObjectType;
	function checkObjectType(object, method) {
	    var typeofObject = object === null ? 'null' : typeof object;
	
	    if (typeofObject !== 'object' && typeofObject !== 'function') {
	        throw matreshkaError('common:object_type', {
	            object: object,
	            method: method
	        });
	    }
	}
	//# sourceMappingURL=checkobjecttype.js.map

/***/ },
/* 325 */
/***/ function(module, exports) {

	'use strict';
	
	/* eslint-disable prefer-template, max-len */
	var bindingErrorPrefix = 'Binding error:';
	var calcErrorPrefix = 'Calc error:';
	var eventsErrorPrefix = 'Events error:';
	var arrayErrorPrefix = 'Matreshka.Array error:';
	
	var getType = function (variable) {
	    if (variable === null) {
	        return 'null';
	    }
	
	    return typeof variable;
	};
	var getTypeError = function (variable, variableName, expectedType) {
	    return variableName + ' must have type "' + expectedType + '" but got "' + getType(variable) + '" instead.';
	};
	
	var errors = {
	    'common:object_type': function (_ref) {
	        var object = _ref.object,
	            method = _ref.method;
	        return 'Error in ' + method + ': ' + getTypeError(object, 'object', 'object');
	    },
	    'common:call_class': function () {
	        return 'Cannot call a class as a function';
	    },
	    'common:use_magic_props': function () {
	        return '"sandbox" key (for all objects) and "container" key (for Matreshka.Array instances)' + ' are reserved for service use and cannot be used as usual properties';
	    },
	
	    'binding:node_missing': function (_ref2) {
	        var key = _ref2.key,
	            node = _ref2.node;
	
	        var selectorInfo = typeof node === 'string' ? ' (given selector is "' + node + '")' : '';
	        return bindingErrorPrefix + ' node is missing for key "' + key + '"' + selectorInfo + '.';
	    },
	    'binding:falsy_key': function () {
	        return bindingErrorPrefix + ' "key" arg cannot be falsy';
	    },
	    'binding:instance_nodes_missing': function (_ref3) {
	        var $nodes = _ref3.$nodes;
	
	        var missing = !$nodes ? '$nodes' : 'nodes';
	        return bindingErrorPrefix + ' "' + missing + '" property of Matreshka instance is missing.' + ' It must be an object and must not be reassigned.';
	    },
	    'binding:magic_props_nodes_length': function () {
	        return bindingErrorPrefix + ' "sandbox" key (for all objects) and "container" key' + ' (for Matreshka.Array instances) cannot have more than one bound node';
	    },
	
	    'calc:target_type': function (_ref4) {
	        var target = _ref4.target;
	        return calcErrorPrefix + ' ' + getTypeError(target, 'target key', 'string');
	    },
	    'calc:source_key_type': function (_ref5) {
	        var sourceKey = _ref5.sourceKey;
	        return calcErrorPrefix + ' ' + getTypeError(sourceKey, 'source key', 'string');
	    },
	    'calc:source_object_type': function (_ref6) {
	        var sourceObject = _ref6.sourceObject;
	        return calcErrorPrefix + ' ' + getTypeError(sourceObject, 'source object', 'object');
	    },
	    'calc:source_type': function (_ref7) {
	        var source = _ref7.source;
	        return calcErrorPrefix + ' ' + getTypeError(source, 'source', 'object');
	    },
	
	    'array:model_type': function (_ref8) {
	        var Model = _ref8.Model;
	        return arrayErrorPrefix + ' ' + getTypeError(Model, 'Model', 'function');
	    },
	    'array:add_render_twice': function () {
	        return arrayErrorPrefix + ' one rendered object was inserted twice.';
	    },
	    'array:rendered_number_nodes': function (_ref9) {
	        var length = _ref9.length;
	        return arrayErrorPrefix + ' renderer returned ' + length + ' nodes instead of one.' + (' ' + (length > 0 ? 'To fix this wrap these nodes by single node.' : ''));
	    },
	    'array:renderer_node_missing': function (_ref10) {
	        var selector = _ref10.selector;
	        return arrayErrorPrefix + ' renderer node is missing (given selector is "' + selector + '")';
	    },
	    'array:nonexistent_method': function (_ref11) {
	        var method = _ref11.method;
	        return arrayErrorPrefix + ' Array.prototype.' + method + ' doesn\'t exist.' + ' You need to include a polyfill for it (e. g. babel-node)';
	    },
	    'array:method_compat_renderer': function (_ref12) {
	        var method = _ref12.method;
	        return arrayErrorPrefix + ' Not possible to render when ' + method + ' method is called';
	    },
	
	    'pull:to_remove_type': function (_ref13) {
	        var toRemove = _ref13.toRemove;
	        return 'Error in pull: ' + getTypeError(toRemove, 'toRemove', 'number');
	    },
	
	    'restore:no_nodes': function () {
	        return arrayErrorPrefix + ' cannot find any container to restore an instance using "restore" method';
	    },
	
	    'trigger:names_type': function (_ref14) {
	        var names = _ref14.names;
	        return eventsErrorPrefix + ' ' + getTypeError(names, 'event name', 'string');
	    },
	
	    'on:names_type': function (_ref15) {
	        var names = _ref15.names;
	        return errors['trigger:names_type']({ names: names });
	    },
	
	    'removedatakeys:key_type': function (_ref16) {
	        var key = _ref16.key;
	        return 'Error in removeDataKeys: ' + getTypeError(key, 'key', 'string');
	    },
	
	    'adddatakeys:key_type': function (_ref17) {
	        var key = _ref17.key;
	        return 'Error in addDataKeys: ' + getTypeError(key, 'key', 'string');
	    },
	
	    'remove:key_type': function (_ref18) {
	        var key = _ref18.key;
	        return 'Error in remove: ' + getTypeError(key, 'key', 'string');
	    },
	
	    'mediate:key_type': function (_ref19) {
	        var key = _ref19.key;
	        return 'Error in mediate: ' + getTypeError(key, 'key', 'string');
	    }
	};
	
	module.exports = matreshkaError;
	function matreshkaError(key, data) {
	    var getError = errors[key];
	    if (!getError) {
	        throw Error('Unknown error "' + key + '". Please report about this on Github.');
	    }
	
	    return new Error(getError(data));
	}
	//# sourceMappingURL=matreshkaerror.js.map

/***/ },
/* 326 */
/***/ function(module, exports) {

	"use strict";
	
	// determines whether two values are the same value
	/* istanbul ignore next */
	// eslint-disable-next-line
	var isPolyfill = function (v1, v2) {
	  return v1 === 0 && v2 === 0 ? 1 / v1 === 1 / v2 : v1 !== v1 && v2 !== v2 || v1 === v2;
	};
	
	module.exports = Object.is || isPolyfill;
	//# sourceMappingURL=is.js.map

/***/ },
/* 327 */
/***/ function(module, exports) {

	"use strict";
	
	// the regexp allows to parse things like "click::x(.y)"
	// it's shared between few modules
	module.exports = /([^::]+)::([^()]+)?(?:\((.*)\))?/;
	//# sourceMappingURL=_domeventregexp.js.map

/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var initMK = __webpack_require__(318);
	
	var defineProp = __webpack_require__(322);
	
	var addListener = __webpack_require__(317);
	
	var dom = __webpack_require__(329);
	
	var createDomEventHandler = __webpack_require__(339);
	
	// returns an object with event handlers used at addDomListener
	function createBindingHandlers(_ref) {
	    var fullEventName = _ref.fullEventName,
	        domEventHandler = _ref.domEventHandler,
	        selector = _ref.selector;
	
	    return {
	        bindHandler: function () {
	            var evt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	            var node = evt.node;
	
	            if (node) {
	                dom.$(node).on(fullEventName, selector, domEventHandler);
	            }
	        },
	        unbindHandler: function () {
	            var evt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	            var node = evt.node;
	
	            if (node) {
	                dom.$(node).off(fullEventName, selector, domEventHandler);
	            }
	        }
	    };
	}
	
	// adds DOM event listener for nodes bound to given property
	module.exports = addDomListener;
	function addDomListener(object, key, eventName, selector, callback, context, info) {
	    var def = initMK(object);
	    var propDef = defineProp(object, key);
	
	    var domEventHandler = createDomEventHandler({
	        key: key,
	        object: object,
	        callback: callback,
	        context: context || object
	    });
	
	    // making possible to remove this event listener
	    domEventHandler._callback = callback;
	
	    var eventNamespace = def.id + key;
	    var fullEventName = eventName + '.' + eventNamespace;
	
	    var _createBindingHandler = createBindingHandlers({
	        fullEventName: fullEventName,
	        domEventHandler: domEventHandler,
	        selector: selector
	    }),
	        bindHandler = _createBindingHandler.bindHandler,
	        unbindHandler = _createBindingHandler.unbindHandler;
	
	    var addBindListenerResult = addListener(object, 'bind:' + key, bindHandler, context, info);
	    var addUnbindListenerResult = addListener(object, 'unbind:' + key, unbindHandler, context, info);
	
	    // if events are added successfully then run bindHandler for every node immediately
	    // TODO: Describe why do we need addBindListenerResult and addUnbindListenerResult
	    if (addBindListenerResult && addUnbindListenerResult) {
	        var bindings = propDef.bindings;
	
	        if (bindings) {
	            for (var _target = bindings, _index = 0, _ref2, _l = _target.length; _ref2 = _target[_index], _index < _l; _index++) {
	                var node = _ref2.node;
	                return bindHandler({ node: node });
	            }
	        }
	    }
	
	    return object;
	}
	//# sourceMappingURL=_adddomlistener.js.map

/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $ = __webpack_require__(330);
	
	module.exports = { $: $ };
	//# sourceMappingURL=index.js.map

/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var mq = __webpack_require__(331);
	
	// check existence of needed methods in $ global variable
	// to use it for internal needs
	
	var neededMethods = ['on', 'off', 'add']; /* global $ */
	
	
	var globalDollar = typeof $ === 'function' ? $ : null;
	var useGlobalDollar = true;
	
	/* istanbul ignore if */
	if (globalDollar) {
	    var fn = globalDollar.fn || globalDollar.prototype;
	    for (var i = 0; i < neededMethods.length; i++) {
	        if (!fn[neededMethods[i]]) {
	            useGlobalDollar = false;
	            break;
	        }
	    }
	
	    if (!globalDollar.parseHTML) {
	        // Zepto doesn't include its own parseHTML
	        // TODO: Assignment of parseHTML is side effect
	        globalDollar.parseHTML = mq.parseHTML;
	    }
	} else {
	    useGlobalDollar = false;
	}
	
	module.exports = useGlobalDollar ? globalDollar : mq;
	//# sourceMappingURL=default-dollar.js.map

/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Init = __webpack_require__(332);
	
	var parseHTML = __webpack_require__(334);
	
	var on = __webpack_require__(335);
	
	var off = __webpack_require__(337);
	
	var add = __webpack_require__(338);
	
	var assign = __webpack_require__(314);
	
	// tiny jQuery replacement for Matreshka
	// mq previously called balalaika.js
	module.exports = mq;
	function mq(selector, context) {
	    return new Init(selector, context);
	}
	
	mq.parseHTML = parseHTML;
	
	assign(Init.prototype, {
	    on: on,
	    off: off,
	    add: add
	});
	//# sourceMappingURL=index.js.map

/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var html2nodeList = __webpack_require__(333);
	
	var win = window;
	
	// function-constructor of mq library
	// accepts many kinds of arguments (selector, html, function)
	function MQInit(selector, context) {
	    var result = void 0;
	
	    if (selector) {
	        if (selector.nodeType || typeof win === 'object' && selector === win) {
	            result = [selector];
	        } else if (typeof selector === 'string') {
	            if (/</.test(selector)) {
	                result = html2nodeList(selector);
	            } else if (context) {
	                var newContext = new MQInit(context)[0];
	
	                if (newContext) {
	                    result = newContext.querySelectorAll(selector);
	                }
	            } else {
	                result = win.document.querySelectorAll(selector);
	            }
	        } else if ('length' in selector) {
	            // if it's something array-like (eg NodeList)
	            result = selector;
	        } else {
	            // this is somethong another (eg Attr)
	            result = [selector];
	        }
	    }
	
	    var length = result && result.length;
	
	    if (length) {
	        for (var i = 0; i < length; i++) {
	            this.push(result[i]);
	        }
	    }
	}
	
	MQInit.prototype = [];
	
	module.exports = MQInit;
	//# sourceMappingURL=_init.js.map

/***/ },
/* 333 */
/***/ function(module, exports) {

	'use strict';
	
	// converts HTML string to NodeList instance
	module.exports = html2nodeList;
	function html2nodeList(givenHTML) {
	    // wrapMap is taken from jQuery
	    var wrapMap = {
	        option: [1, '<select multiple="multiple">', '</select>'],
	        legend: [1, '<fieldset>', '</fieldset>'],
	        thead: [1, '<table>', '</table>'],
	        tr: [2, '<table><tbody>', '</tbody></table>'],
	        td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
	        col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
	        area: [1, '<map>', '</map>'],
	        _: [0, '', '']
	    };
	
	    var html = givenHTML.replace(/^\s+|\s+$/g, '');
	    var node = window.document.createElement('div');
	    var i = void 0;
	
	    wrapMap.optgroup = wrapMap.option;
	    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	    wrapMap.th = wrapMap.td;
	
	    var ex = /<([\w:]+)/.exec(html);
	    var wrapper = ex && wrapMap[ex[1]] || wrapMap._;
	
	    node.innerHTML = wrapper[1] + html + wrapper[2];
	
	    i = wrapper[0];
	
	    while (i) {
	        i -= 1;
	        node = node.children[0];
	    }
	
	    return node.childNodes;
	}
	//# sourceMappingURL=_html2nodelist.js.map

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var html2nodeList = __webpack_require__(333);
	
	var Init = __webpack_require__(332);
	
	// parses given HTML and returns mq instance
	module.exports = parseHTML;
	function parseHTML(html) {
	    return new Init(html2nodeList(html));
	}
	//# sourceMappingURL=parsehtml.js.map

/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var data = __webpack_require__(336);
	
	var splitBySpaceReg = /\s+/;
	var splitByDotReg = /\.(.+)/;
	var randomID = Math.random().toString().replace('0.', 'x') + 'y'; // x12345y
	
	// checks an element against a selector
	function is(node, selector) {
	    return (node.matches || node.webkitMatchesSelector || node.mozMatchesSelector || node.msMatchesSelector || node.oMatchesSelector).call(node, selector);
	}
	
	// the function is used when a selector is given
	function delegateHandler(evt, selector, handler) {
	    var scopeSelector = '[' + randomID + '="' + randomID + '"] ';
	    var splittedSelector = selector.split(',');
	
	    var matching = '';
	
	    for (var i = 0; i < splittedSelector.length; i++) {
	        var sel = splittedSelector[i];
	        matching += '' + (i === 0 ? '' : ',') + scopeSelector + sel + ',' + scopeSelector + sel + ' *';
	    }
	
	    this.setAttribute(randomID, randomID);
	
	    if (is(evt.target, matching)) {
	        handler.call(this, evt);
	    }
	
	    this.removeAttribute(randomID);
	}
	
	// adds event listener to a set of elemnts
	module.exports = on;
	function on(namesStr, selector, handler) {
	    var names = namesStr.split(splitBySpaceReg);
	    var delegate = void 0;
	
	    if (typeof selector === 'function') {
	        handler = selector; // eslint-disable-line no-param-reassign
	        selector = null; // eslint-disable-line no-param-reassign
	    }
	
	    if (selector) {
	        delegate = function uniqueDelegateHandler(evt) {
	            delegateHandler.call(this, evt, selector, handler);
	        };
	    }
	
	    for (var i = 0; i < names.length; i++) {
	        var _names$i$split = names[i].split(splitByDotReg),
	            name = _names$i$split[0],
	            namespace = _names$i$split[1];
	
	        for (var j = 0; j < this.length; j++) {
	            var node = this[j];
	            var nodeID = node.b$ = node.b$ || ++data.nodeIndex; // eslint-disable-line no-plusplus
	            var events = data.allEvents[name + nodeID] = data.allEvents[name + nodeID] || [];
	
	            var exist = false;
	
	            for (var k = 0; k < events.length; k++) {
	                var event = events[k];
	
	                if (handler === event.handler && (!selector || selector === event.selector)) {
	                    exist = true;
	                    break;
	                }
	            }
	
	            if (!exist) {
	                events.push({
	                    delegate: delegate,
	                    handler: handler,
	                    namespace: namespace,
	                    selector: selector,
	                    nodeID: nodeID,
	                    name: name
	                });
	
	                node.addEventListener(name, delegate || handler, false);
	            }
	        }
	    }
	
	    return this;
	}
	//# sourceMappingURL=on.js.map

/***/ },
/* 336 */
/***/ function(module, exports) {

	"use strict";
	
	// an object allows to share data between modules; it's needed because we use
	// simplified ES modules there and cannot import and share a number
	module.exports = {
	    nodeIndex: 0,
	    allEvents: {}
	};
	//# sourceMappingURL=_data.js.map

/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var data = __webpack_require__(336);
	
	var splitBySpaceReg = /\s+/;
	var splitByDotReg = /\.(.+)/;
	
	// removes event handler from a set of elements
	module.exports = off;
	function off(namesStr, selector, handler) {
	    if (typeof selector === 'function') {
	        handler = selector; // eslint-disable-line no-param-reassign
	        selector = null; // eslint-disable-line no-param-reassign
	    }
	
	    var names = namesStr.split(splitBySpaceReg);
	
	    for (var i = 0; i < names.length; i++) {
	        var _names$i$split = names[i].split(splitByDotReg),
	            name = _names$i$split[0],
	            namespace = _names$i$split[1];
	
	        for (var j = 0; j < this.length; j++) {
	            var node = this[j];
	
	            if (!name && namespace) {
	                for (var k = 0, keys = Object.keys(data.allEvents); k < keys.length; k++) {
	                    var _events = data.allEvents[keys[k]];
	
	                    for (var l = 0; l < _events.length; l++) {
	                        var event = _events[i];
	                        if (event.namespace === namespace && event.nodeID === node.b$) {
	                            node.removeEventListener(event.name, event.delegate || event.handler);
	                            _events.splice(l, 1);
	                            l -= 1;
	                        }
	                    }
	                }
	
	                continue;
	            }
	
	            var events = data.allEvents[name + node.b$];
	            if (events) {
	                for (var _k = 0; _k < events.length; _k++) {
	                    var _event = events[_k];
	                    if ((!handler || handler === _event.handler || handler === _event.delegate) && (!namespace || namespace === _event.namespace) && (!selector || selector === _event.selector)) {
	                        node.removeEventListener(name, _event.delegate || _event.handler);
	                        events.splice(_k, 1);
	                        _k -= 1;
	                    }
	                }
	            } else if (!namespace && !selector) {
	                node.removeEventListener(name, handler);
	            }
	        }
	    }
	
	    return this;
	}
	//# sourceMappingURL=off.js.map

/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Init = __webpack_require__(332);
	
	var data = __webpack_require__(336);
	
	// adds unique nodes to mq collection
	module.exports = add;
	function add(selector) {
	    var idMap = {};
	
	    var result = void 0;
	
	    var nodes = new Init(selector);
	
	    if (this.length) {
	        result = new Init();
	        for (var i = 0; i < this.length; i++) {
	            var node = this[i];
	            var nodeID = node.b$ = node.b$ || ++data.nodeIndex; // eslint-disable-line no-plusplus
	            idMap[nodeID] = 1;
	            result.push(node);
	        }
	
	        for (var _i = 0; _i < nodes.length; _i++) {
	            var _node = nodes[_i];
	            var _nodeID = _node.b$ = _node.b$ || ++data.nodeIndex; // eslint-disable-line no-plusplus
	            if (!idMap[_nodeID]) {
	                idMap[_nodeID] = 1;
	                result.push(_node);
	            }
	        }
	    } else {
	        result = nodes;
	    }
	
	    return result;
	}
	//# sourceMappingURL=add.js.map

/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var apply = __webpack_require__(321);
	
	// returns DOM event handler
	module.exports = createDomEventHandler;
	function createDomEventHandler(_ref) {
	    var key = _ref.key,
	        object = _ref.object,
	        callback = _ref.callback,
	        context = _ref.context;
	
	    return function domEventHandler(domEvent) {
	        var originalEvent = domEvent.originalEvent || domEvent;
	        // matreshkaTriggerArgs are created when DOM event is triggered by trigger method
	        var triggerArgs = originalEvent.matreshkaTriggerArgs;
	        var which = domEvent.which,
	            target = domEvent.target,
	            ctrlKey = domEvent.ctrlKey,
	            altKey = domEvent.altKey;
	
	
	        if (triggerArgs) {
	            // if args are passed to trigger method then pass them to an event handler
	            apply(callback, context, triggerArgs);
	        } else {
	            // use the following object as an arg for event handler
	            callback.call(context, {
	                self: object,
	                node: this,
	                preventDefault: function () {
	                    return domEvent.preventDefault();
	                },
	                stopPropagation: function () {
	                    return domEvent.stopPropagation();
	                },
	                key: key,
	                domEvent: domEvent,
	                originalEvent: originalEvent,
	                which: which,
	                target: target,
	                ctrlKey: ctrlKey,
	                altKey: altKey
	            });
	        }
	    };
	}
	//# sourceMappingURL=_createdomeventhandler.js.map

/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var initMK = __webpack_require__(318);
	
	// creates item mediator
	function createItemMediator(_ref) {
	    var arr = _ref.arr,
	        mediator = _ref.mediator;
	
	    return function itemMediator(value, index) {
	        // args: value, old value, index, array itself
	        return mediator.call(arr, value, index, arr);
	    };
	}
	
	// defines a "type" of every array item
	module.exports = mediateItem;
	function mediateItem(mediator) {
	    var def = initMK(this);
	    var length = this.length;
	
	    // store itemMediator in object definition
	
	    var itemMediator = def.itemMediator = createItemMediator({
	        arr: this,
	        mediator: mediator
	    });
	
	    // convert existing items
	    for (var i = 0; i < length; i++) {
	        this[i] = itemMediator(this[i], i);
	    }
	
	    return this;
	}
	//# sourceMappingURL=mediateitem.js.map

/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var cheapRecreate = __webpack_require__(342);
	
	var pureOrderBy = __webpack_require__(343);
	
	var reportModified = __webpack_require__(344);
	
	// sorts by properties of items
	module.exports = orderBy;
	function orderBy(keys, orders) {
	    var eventOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	    if (this.length > 1) {
	        cheapRecreate(this, pureOrderBy(this, keys, orders));
	
	        var _keys,
	            _l,
	            _i,
	            _source,
	            _key,
	            _result = {};
	
	        _result.method = 'sort'
	        _result.self = this
	        _result.added = []
	        _result.removed = []
	
	        for (_source = eventOptions, _keys = Object.keys(_source), _l = _keys.length, _i = 0; _i < _l; _i++) {
	            _key = _keys[_i];
	            _result[_key] = _source[_key];
	        }
	
	        reportModified(this, _result);
	    }
	
	    return this;
	}
	//# sourceMappingURL=index.js.map

/***/ },
/* 342 */
/***/ function(module, exports) {

	"use strict";
	
	// makes cheap array recreation (with no trackBy, with no events, with no item mediator etc)
	module.exports = cheapRecreate;
	function cheapRecreate(self) {
	    var newItems = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	
	    var newLength = newItems.length;
	    var oldLength = self.length;
	    var lengthDiff = newLength - oldLength;
	
	    for (var i = 0; i < newLength; i++) {
	        self[i] = newItems[i];
	    }
	
	    for (var _i = 0; _i < lengthDiff; _i++) {
	        delete self[_i + newLength];
	    }
	
	    self.length = newLength;
	
	    return self;
	}
	//# sourceMappingURL=_cheaprecreate.js.map

/***/ },
/* 343 */
/***/ function(module, exports) {

	'use strict';
	
	// the function orders by given order data any array-like object
	module.exports = pureOrderBy;
	function pureOrderBy(arr, givenKeys, orders) {
	    if ('length' in arr && typeof arr === 'object') {
	        var _ret = function () {
	            var defaultOrder = 'asc';
	            var commonOrder = void 0;
	
	            if (!(orders instanceof Array)) {
	                commonOrder = orders || defaultOrder;
	            }
	
	            var length = arr.length;
	
	            var result = Array(length);
	
	            for (var i = 0; i < length; i++) {
	                result[i] = arr[i];
	            }
	
	            if (!givenKeys) {
	                return {
	                    v: result
	                };
	            }
	
	            var keys = givenKeys instanceof Array ? givenKeys : [givenKeys];
	
	            return {
	                v: result.sort(function (a, b) {
	                    if (a && b) {
	                        for (var _i = 0; _i < keys.length; _i++) {
	                            var key = keys[_i];
	                            var order = (commonOrder || orders[_i]) !== 'desc' ? -1 : 1;
	
	                            if (a[key] > b[key]) {
	                                return -order;
	                            } else if (a[key] < b[key]) {
	                                return order;
	                            }
	                        }
	                    }
	
	                    return 0;
	                })
	            };
	        }();
	
	        if (typeof _ret === "object") return _ret.v;
	    }
	
	    return [];
	}
	//# sourceMappingURL=_pureorderby.js.map

/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var defs = __webpack_require__(319);
	
	var triggerOne = __webpack_require__(320);
	
	var processRendering = __webpack_require__(345);
	
	// fires events and triggers rendering logic
	module.exports = reportModified;
	function reportModified(self, eventOptions) {
	    var added = eventOptions.added,
	        removed = eventOptions.removed,
	        silent = eventOptions.silent,
	        method = eventOptions.method,
	        dontRender = eventOptions.dontRender;
	
	    var addedLength = added.length;
	    var removedLength = removed.length;
	    var modified = addedLength || removedLength || method === 'sort' || method === 'reverse';
	
	    var _defs$get = defs.get(self),
	        events = _defs$get.events;
	
	    var _self$renderIfPossibl = self.renderIfPossible,
	        renderIfPossible = _self$renderIfPossibl === undefined ? true : _self$renderIfPossibl;
	
	    var asteriskAddEvtName = '_asterisk:add';
	    var asteriskRemoveEvtName = '_asterisk:remove';
	
	    // if something is added and an array has delegated "asterisk" events
	    // then attatch delegated event handlers to newly added items
	    if (addedLength && events[asteriskAddEvtName]) {
	        triggerOne(self, asteriskAddEvtName, eventOptions);
	    }
	
	    // if something is removed and an array has delegated "asterisk" events
	    // then remove delegated event handlers from removed items
	    if (removedLength && events[asteriskRemoveEvtName]) {
	        triggerOne(self, asteriskRemoveEvtName, eventOptions);
	    }
	
	    if (!silent) {
	        // fire additional event name (like "push")
	        if (events[method]) {
	            triggerOne(self, method, eventOptions);
	        }
	
	        // if something is added then fire add and addone events
	        if (addedLength) {
	            if (events.add) {
	                triggerOne(self, 'add', eventOptions);
	            }
	
	            if (events.addone) {
	                for (var i = 0; i < addedLength; i++) {
	                    triggerOne(self, 'addone', {
	                        self: self,
	                        addedItem: added[i]
	                    });
	                }
	            }
	        }
	
	        // if something is removed then fire add and addone events
	        if (removedLength) {
	            if (events.remove) {
	                triggerOne(self, 'remove', eventOptions);
	            }
	
	            if (events.removeone) {
	                for (var _i = 0; _i < removedLength; _i++) {
	                    triggerOne(self, 'removeone', {
	                        self: self,
	                        removedItem: removed[_i]
	                    });
	                }
	            }
	        }
	
	        // modify event says that something is added or removed
	        if (events.modify) {
	            triggerOne(self, 'modify', eventOptions);
	        }
	    }
	
	    // trigger rendering logic if possible
	    if (modified && !dontRender && renderIfPossible) {
	        processRendering({
	            self: self,
	            eventOptions: eventOptions
	        });
	    }
	}
	//# sourceMappingURL=_reportmodified.js.map

/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var defs = __webpack_require__(319);
	
	var matreshkaError = __webpack_require__(325);
	
	var processPush = __webpack_require__(346);
	
	var processUnshift = __webpack_require__(381);
	
	var processRecreate = __webpack_require__(382);
	
	var processSort = __webpack_require__(384);
	
	var processRemove = __webpack_require__(385);
	
	var processRerender = __webpack_require__(386);
	
	var processSpliceAdd = __webpack_require__(387);
	
	// makes possible to render array items based on a name of called method
	module.exports = processRendering;
	function processRendering(_ref) {
	    var self = _ref.self,
	        eventOptions = _ref.eventOptions;
	    var method = eventOptions.method,
	        added = eventOptions.added,
	        removed = eventOptions.removed;
	    // nodes object always exist at Matreshka instances
	
	    var container = self.nodes.container || self.nodes.sandbox;
	    var selfDef = defs.get(self);
	
	    if (!container) {
	        return;
	    }
	
	    switch (method) {
	        case 'fill':
	        case 'copyWithin':
	            throw matreshkaError('array:method_compat_renderer', { method: method });
	        case 'push':
	            processPush({
	                self: self,
	                selfDef: selfDef,
	                eventOptions: eventOptions,
	                container: container
	            });
	            break;
	        case 'unshift':
	            processUnshift({
	                self: self,
	                selfDef: selfDef,
	                eventOptions: eventOptions,
	                container: container
	            });
	            break;
	        case 'pull':
	        case 'pop':
	        case 'shift':
	            processRemove({
	                self: self,
	                selfDef: selfDef,
	                eventOptions: eventOptions,
	                container: container
	            });
	            break;
	        case 'sort':
	        case 'reverse':
	            processSort({
	                self: self,
	                selfDef: selfDef,
	                eventOptions: eventOptions,
	                container: container
	            });
	            break;
	        case 'rerender':
	            processRerender({
	                self: self,
	                selfDef: selfDef,
	                eventOptions: eventOptions,
	                container: container
	            });
	            break;
	        case 'recreate':
	            processRecreate({
	                self: self,
	                selfDef: selfDef,
	                eventOptions: eventOptions,
	                container: container
	            });
	            break;
	        case 'splice':
	            if (added.length) {
	                processSpliceAdd({
	                    self: self,
	                    selfDef: selfDef,
	                    eventOptions: eventOptions,
	                    container: container
	                });
	            }
	
	            if (removed.length) {
	                processRemove({
	                    self: self,
	                    selfDef: selfDef,
	                    eventOptions: eventOptions,
	                    container: container
	                });
	            }
	
	            break;
	        default:
	            return;
	    }
	}
	//# sourceMappingURL=index.js.map

/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var renderItemNode = __webpack_require__(347);
	
	var triggerOne = __webpack_require__(320);
	
	var checkAlreadyRendered = __webpack_require__(380);
	
	// this function renders inserted items if possible when push method is called
	module.exports = processPush;
	function processPush(_ref) {
	    var self = _ref.self,
	        selfDef = _ref.selfDef,
	        eventOptions = _ref.eventOptions,
	        container = _ref.container;
	    var added = eventOptions.added,
	        silent = eventOptions.silent;
	
	    for (var _target = added, _index = 0, item, _l = _target.length; item = _target[_index], _index < _l; _index++) {
	        if (item && typeof item === 'object') {
	            // if a node of an item is already rendered then throw an error
	            checkAlreadyRendered({
	                item: item,
	                selfDef: selfDef
	            });
	
	            // render
	
	            var _renderItemNode = renderItemNode({
	                selfDef: selfDef,
	                self: self,
	                item: item,
	                eventOptions: eventOptions
	            }),
	                node = _renderItemNode.node,
	                itemEventOptions = _renderItemNode.itemEventOptions;
	
	            if (node) {
	                container.appendChild(node);
	                if (!silent) {
	                    triggerOne(item, 'afterrender', itemEventOptions);
	                }
	            }
	        }
	    }
	}
	//# sourceMappingURL=processpush.js.map

/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var parseBindings = __webpack_require__(348);
	
	var bindNode = __webpack_require__(367);
	
	var unbindNode = __webpack_require__(372);
	
	var triggerOne = __webpack_require__(320);
	
	var initMK = __webpack_require__(318);
	
	var matreshkaError = __webpack_require__(325);
	
	var getNodes = __webpack_require__(368);
	
	var htmlTestReg = /</;
	
	// the function makes the main rendering job
	// it renders given array item
	module.exports = renderItemNode;
	function renderItemNode(_ref) {
	    var selfDef = _ref.selfDef,
	        self = _ref.self,
	        item = _ref.item,
	        eventOptions = _ref.eventOptions;
	    var renderer = item.renderer,
	        _item$bindRenderedAsS = item.bindRenderedAsSandbox,
	        bindRenderedAsSandbox = _item$bindRenderedAsS === undefined ? true : _item$bindRenderedAsS;
	    var itemRenderer = self.itemRenderer;
	
	    var usedRenderer = renderer || itemRenderer;
	    var rendererContext = usedRenderer === renderer ? item : self;
	    var selfId = selfDef.id;
	    var moveSandbox = eventOptions.moveSandbox,
	        forceRerender = eventOptions.forceRerender,
	        silent = eventOptions.silent;
	
	    // if renderer is not found return null as a node
	
	    if (!usedRenderer) {
	        return { node: null };
	    }
	
	    var itemDef = initMK(item);
	    var _itemDef$renderedInAr = itemDef.renderedInArrays,
	        renderedInArrays = _itemDef$renderedInAr === undefined ? {} : _itemDef$renderedInAr;
	
	    // if moveSandbox option is truthy then return a sandbox of an item
	
	    if (moveSandbox) {
	        var sandboxPropDef = itemDef.props.sandbox;
	        if (sandboxPropDef) {
	            var bindings = sandboxPropDef.bindings;
	
	            var _node = bindings ? bindings[0].node : null;
	
	            if (_node) {
	                for (var i = 0, keys = Object.keys(renderedInArrays); i < keys.length; i++) {
	                    var key = keys[i];
	
	                    if (_node === renderedInArrays[key]) {
	                        // delete an information about previous array
	                        delete renderedInArrays[key];
	                        break;
	                    }
	                }
	
	                renderedInArrays[selfId] = _node;
	
	                // moving sandbox does not fire "render" event but it fire "afterrender"
	                // since "afterrender" means "node is inserted to DOM"
	                return {
	                    node: _node,
	                    itemEventOptions: {
	                        node: _node,
	                        self: item,
	                        parentArray: self
	                    }
	                };
	            }
	        }
	    }
	
	    itemDef.renderedInArrays = renderedInArrays;
	
	    // if usedRenderer is function then call it
	    if (typeof usedRenderer === 'function') {
	        usedRenderer = usedRenderer.call(rendererContext, item);
	    }
	
	    // if usedRenderer is string
	    if (typeof usedRenderer === 'string') {
	        if (!htmlTestReg.test(usedRenderer)) {
	            // if usedRenderer is a selector
	            var selector = usedRenderer;
	
	            usedRenderer = getNodes(self, selector);
	
	            if (usedRenderer.length) {
	                // if a node is found by given selector then use its HTML
	                usedRenderer = usedRenderer[0].innerHTML.trim();
	            } else {
	                // if not throw an error
	                throw matreshkaError('array:renderer_node_missing', { selector: selector });
	            }
	        } else {
	            // if usedRenderer is HTML string
	            usedRenderer = usedRenderer.trim();
	        }
	    }
	
	    // pass a node or HTML
	    var parsed = parseBindings(item, usedRenderer, eventOptions);
	
	    // if parseBindings returned more/less than one node then throw an error
	    if (parsed.length !== 1) {
	        throw matreshkaError('array:rendered_number_nodes', { length: parsed.length });
	    }
	
	    var node = renderedInArrays[selfId] = parsed[0];
	
	    if (bindRenderedAsSandbox) {
	        if (forceRerender) {
	            unbindNode(item, 'sandbox', null, null, eventOptions);
	        }
	
	        bindNode(item, 'sandbox', node, null, eventOptions);
	    }
	
	    // if silent is not truthy then fire 'render' event and virtual methods
	    if (!silent) {
	        var itemEventOptions = {
	            node: node,
	            self: item,
	            parentArray: self
	        };
	        var onRender = item.onRender;
	        var onItemRender = self.onItemRender;
	
	
	        if (onRender) {
	            onRender.call(item, itemEventOptions);
	        }
	
	        if (onItemRender) {
	            onItemRender.call(self, item, itemEventOptions);
	        }
	
	        triggerOne(item, 'render', itemEventOptions);
	
	        return { node: node, itemEventOptions: itemEventOptions };
	    }
	
	    return { node: node };
	}
	//# sourceMappingURL=renderitemnode.js.map

/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var checkObjectType = __webpack_require__(324);
	
	var dom = __webpack_require__(329);
	
	var parserData = __webpack_require__(349);
	
	var processTextNode = __webpack_require__(366);
	
	var processAttribute = __webpack_require__(377);
	
	var getNodes = __webpack_require__(368);
	
	// makes parsing of given node (node, $(nodes), selector, HTML)
	// and initializes bindings for attributes and text nodes which contain things like {{foo}}
	module.exports = parseBindings;
	function parseBindings(object, givenNodes, eventOptions) {
	    if (typeof this === 'object' && this.isMatreshka) {
	        // when context is Matreshka instance, use this as an object and shift other args
	        /* eslint-disable no-param-reassign */
	        eventOptions = givenNodes;
	        givenNodes = object;
	        object = this;
	        /* eslint-enable no-param-reassign */
	    } else {
	        // throw error when object type is wrong
	        checkObjectType(object, 'parseBindings');
	    }
	
	    var extendedEventOptions = {
	        // useExactBinder is little optimization
	        // without this option used binder is extended by default binder
	        useExactBinder: true,
	        fromParser: true,
	        setValueOnBind: true
	    };
	
	    if (typeof eventOptions === 'object') {
	        var _result = extendedEventOptions;
	
	        for (var _source2 = eventOptions, _keys2 = Object.keys(_source2), _l2 = _keys2.length, _i2 = 0, _key2; _i2 < _l2; _i2++) {
	            _key2 = _keys2[_i2];
	            _result[_key2] = _source2[_key2];
	        }
	    }
	
	    var nodes = void 0;
	    var allNodes = [];
	    // extract all needed data from parserData
	    // check out what is parserData in its module
	    var leftBracket = parserData.leftBracket,
	        bindingReg = parserData.bindingReg;
	
	
	    if (typeof givenNodes === 'string') {
	        if (~givenNodes.indexOf('<')) {
	            // this is HTML
	            nodes = dom.$.parseHTML(givenNodes);
	            if (!~givenNodes.indexOf(leftBracket)) {
	                // if it doesn't include parser bracket then we don't need to check
	                // their existence for all included nodes in cycle below
	                return nodes;
	            }
	        } else {
	            // this is a selector
	            nodes = getNodes(object, givenNodes);
	        }
	    } else if (typeof givenNodes === 'object') {
	        // this is a node, nodeList or something else (eg array, jQuery instance etc)
	        nodes = dom.$(givenNodes);
	    }
	
	    // to make possible to not use recursion we're collecting all nodes to allNodes array
	
	    // on every cycle of array we're adding new descendants to allNodes
	    // increasing # of needed iterations
	    for (var _target = nodes, _index = 0, node, _l3 = _target.length; node = _target[_index], _index < _l3; _index++) {
	        allNodes.push(node)
	    }
	
	    var _loop = function (i) {
	        var node = allNodes[i];
	        var ELEMENT_NODE = 1;
	        var TEXT_NODE = 3;
	
	        // allow to parse elements only
	        if (node.nodeType !== ELEMENT_NODE) {
	            return 'continue';
	        }
	
	        var outerHTML = node.outerHTML,
	            innerHTML = node.innerHTML,
	            childNodes = node.childNodes,
	            attributes = node.attributes;
	
	        // if outerHTML does't contain left bracket, then this node doesn't need to be parsed
	        // we may need to check outerHTML existence for older browsers
	        // we may need to add !~outerHTML.indexOf(encodeURI(leftBracket) to support old FF
	
	        if (!~outerHTML.indexOf(leftBracket)) {
	            return 'continue';
	        }
	
	        // initialize bindings for attributes if they appear
	        if (attributes.length) {
	            // fixes Firefox issue: attributes.length can be changed by processAttribute
	            var attrs = attributes.length > 1 ? [].concat(attributes) : attributes;
	
	            for (var _target2 = attrs, _index2 = 0, attribute, _l4 = _target2.length; attribute = _target2[_index2], _index2 < _l4; _index2++) {
	                if (bindingReg.test(attribute.value)) {
	                    processAttribute({
	                        node: node,
	                        attribute: attribute,
	                        object: object,
	                        eventOptions: extendedEventOptions
	                    });
	                }
	            }
	        }
	
	        // if innerHTML does't contain left bracket,
	        // then children of this node don't need to be parsed
	        // we may need to add !~innerHTML.indexOf(encodeURI(leftBracket) to support old FF
	        if (!~innerHTML.indexOf(leftBracket)) {
	            return 'continue';
	        }
	
	        for (var j = 0; j < childNodes.length; j++) {
	            var childNode = childNodes[j];
	            var nodeType = childNode.nodeType,
	                textContent = childNode.textContent;
	
	
	            if (nodeType === ELEMENT_NODE) {
	                // if childNode is HTML element then add it to the end of allNodes array
	                // to check everything on next outer cycle iterations
	                allNodes.push(childNode);
	            } else if (nodeType === TEXT_NODE) {
	                // if childNode is text node which contains things like {{x}}
	                // then initialize bindings for this node
	                if (bindingReg.test(textContent)) {
	                    processTextNode({
	                        object: object,
	                        node: node,
	                        textNode: childNode,
	                        eventOptions: extendedEventOptions
	                    });
	                }
	            }
	        }
	    };
	
	    for (var i = 0; i < allNodes.length; i++) {
	        var _ret = _loop(i);
	
	        if (_ret === 'continue') continue;
	    }
	
	    return nodes;
	}
	//# sourceMappingURL=index.js.map

/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var calc = __webpack_require__(350);
	
	var parserBrackets = __webpack_require__(310);
	
	var parserData = {};
	
	// since Matreshka allows to change parser brackets via parserBrackets objects
	// the parser needs to generate required regular expressions and escaped brackets every time
	// when parseBindings is called
	// to optimize this behavior parserData object is created
	// it calculates needed data every time when parserBrackets are changed
	// and when parseBindings function is called it uses previously generated regeps
	// from parserData object
	calc(parserData, {
	    leftBracket: {
	        source: {
	            object: parserBrackets,
	            key: 'left'
	        }
	    },
	    rightBracket: {
	        source: {
	            object: parserBrackets,
	            key: 'right'
	        }
	    },
	    escLeftBracket: {
	        source: 'leftBracket',
	        handler: function (left) {
	            return left.replace(/(\[|\(|\?)/g, '\\$1');
	        }
	    },
	    escRightBracket: {
	        source: 'rightBracket',
	        handler: function (right) {
	            return right.replace(/(]|\)|\?)/g, '\\$1');
	        }
	    },
	    bindingReg: {
	        source: ['escLeftBracket', 'escRightBracket'],
	        handler: function (left, right) {
	            return new RegExp(left + '\\s*(.+?)\\s*' + right, 'g');
	        }
	    },
	    strictBindingReg: {
	        source: ['escLeftBracket', 'escRightBracket'],
	        handler: function (left, right) {
	            return new RegExp('^' + left + '\\s*(.+?)\\s*' + right + '$', 'g');
	        }
	    }
	}, {
	    debounceCalc: false // we need to get new regexps immediately when brackets are changed
	});
	
	module.exports = parserData;
	//# sourceMappingURL=_parserdata.js.map

/***/ },
/* 350 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var initMK = __webpack_require__(318);
	
	var checkObjectType = __webpack_require__(324);
	
	var matreshkaError = __webpack_require__(325);
	
	var debounce = __webpack_require__(351);
	
	var addSource = __webpack_require__(352);
	
	var createCalcHandler = __webpack_require__(364);
	
	var defineProp = __webpack_require__(322);
	
	// defines a property which is dependend on other properties
	module.exports = calc;
	function calc(object, target, sources, givenHandler, eventOptions) {
	    if (typeof this === 'object' && this.isMatreshka) {
	        // when context is Matreshka instance, use this as an object and shift other args
	        /* eslint-disable no-param-reassign */
	        eventOptions = givenHandler;
	        givenHandler = sources;
	        sources = target;
	        target = object;
	        object = this;
	        /* eslint-enable no-param-reassign */
	    } else {
	        // throw error when object type is wrong
	        checkObjectType(object, 'calc');
	    }
	
	    if (target instanceof Object) {
	        for (var _target = target, _keys5 = Object.keys(_target), _i5 = 0, itemTarget, _ref, _l5 = _keys5.length; (itemTarget = _keys5[_i5], _ref = _target[itemTarget]), _i5 < _l5; _i5++) {
	            var itemSource = _ref.source,
	                itemHandler = _ref.handler,
	                itemEventOptions = _ref.event;
	
	            var commonEventOptions = sources;
	            var mergedEventOptions = {};
	
	            if (commonEventOptions) {
	                var _result = mergedEventOptions;
	                // extend event object by "global" event
	
	                for (var _source2 = commonEventOptions, _keys2 = Object.keys(_source2), _l2 = _keys2.length, _i2 = 0, _key2; _i2 < _l2; _i2++) {
	                    _key2 = _keys2[_i2];
	                    _result[_key2] = _source2[_key2];
	                }
	            }
	
	            if (itemEventOptions) {
	                var _result2 = mergedEventOptions;
	                // extend event object by "local" event ("event" key of an object)
	
	                for (var _source4 = itemEventOptions, _keys4 = Object.keys(_source4), _l4 = _keys4.length, _i4 = 0, _key4; _i4 < _l4; _i4++) {
	                    _key4 = _keys4[_i4];
	                    _result2[_key4] = _source4[_key4];
	                }
	            }
	
	            calc(object, itemTarget, itemSource, itemHandler, mergedEventOptions);
	        }
	        /*
	         * accept an object
	         * this.calc({target: { source, handler, event } }, commonEventOptions);
	         */
	
	
	        return object;
	    }
	
	    if (typeof target !== 'string') {
	        throw matreshkaError('calc:target_type', { target: target });
	    }
	
	    eventOptions = eventOptions || {}; // eslint-disable-line no-param-reassign
	    var def = initMK(object);
	    var _eventOptions = eventOptions,
	        _eventOptions$setOnIn = _eventOptions.setOnInit,
	        setOnInit = _eventOptions$setOnIn === undefined ? true : _eventOptions$setOnIn,
	        _eventOptions$debounc = _eventOptions.debounceCalcOnInit,
	        debounceCalcOnInit = _eventOptions$debounc === undefined ? false : _eventOptions$debounc,
	        _eventOptions$debounc2 = _eventOptions.debounceCalc,
	        debounceCalc = _eventOptions$debounc2 === undefined ? true : _eventOptions$debounc2,
	        _eventOptions$debounc3 = _eventOptions.debounceCalcDelay,
	        debounceCalcDelay = _eventOptions$debounc3 === undefined ? 0 : _eventOptions$debounc3,
	        _eventOptions$isTarge = _eventOptions.isTargetPropertyHidden,
	        isTargetPropertyHidden = _eventOptions$isTarge === undefined ? false : _eventOptions$isTarge;
	
	    var defaultHandler = function (value) {
	        return value;
	    };
	    var handler = givenHandler || defaultHandler;
	    var allSources = [];
	    var syncCalcHandler = createCalcHandler({
	        object: object,
	        eventOptions: eventOptions,
	        allSources: allSources,
	        target: target,
	        def: def,
	        handler: handler
	    });
	
	    var debouncedCalcHandler = void 0;
	    var calcHandler = void 0;
	
	    if (debounceCalcOnInit || debounceCalc) {
	        debouncedCalcHandler = debounce(syncCalcHandler, debounceCalcDelay);
	    }
	
	    defineProp(object, target, isTargetPropertyHidden);
	
	    if (!(sources instanceof Array)) {
	        sources = [sources]; // eslint-disable-line no-param-reassign
	    }
	
	    if (debounceCalc) {
	        calcHandler = debouncedCalcHandler;
	    } else {
	        calcHandler = syncCalcHandler;
	    }
	
	    for (var _target3 = sources, _index2 = 0, source, _l7 = _target3.length; source = _target3[_index2], _index2 < _l7; _index2++) {
	        if (typeof source === 'string') {
	            // source object is current object
	            addSource({
	                calcHandler: calcHandler,
	                allSources: allSources,
	                sourceKey: source,
	                sourceObject: object,
	                eventOptions: eventOptions
	            });
	        } else {
	            (function () {
	                // source object is external object
	                if (!source || typeof source !== 'object') {
	                    throw matreshkaError('calc:source_type', { source: source });
	                }
	
	                var sourceKey = source.key;
	                var sourceObject = source.object;
	                if (sourceKey instanceof Array) {
	                    for (var _target2 = sourceKey, _index = 0, sourceKeyItem, _l6 = _target2.length; sourceKeyItem = _target2[_index], _index < _l6; _index++) {
	                        addSource({
	                            calcHandler: calcHandler,
	                            allSources: allSources,
	                            sourceKey: sourceKeyItem,
	                            sourceObject: sourceObject,
	                            eventOptions: eventOptions
	                        });
	                    }
	                    // many keys are passed
	
	                } else {
	                    // one key is passed
	                    addSource({
	                        calcHandler: calcHandler,
	                        allSources: allSources,
	                        sourceKey: sourceKey,
	                        sourceObject: sourceObject,
	                        eventOptions: eventOptions
	                    });
	                }
	            })();
	        }
	    }
	
	    if (setOnInit) {
	        if (debounceCalcOnInit) {
	            debouncedCalcHandler();
	        } else {
	            syncCalcHandler();
	        }
	    }
	
	    return object;
	}
	//# sourceMappingURL=index.js.map

/***/ },
/* 351 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var apply = __webpack_require__(321);
	
	// Returns a function, that, as long as it continues to be invoked, will not
	// be triggered. The function will be called after it stops being called for
	// N milliseconds.
	// (c) https://davidwalsh.name/javascript-debounce-function
	
	module.exports = debounce;
	function debounce(func, givenDelay, thisArg) {
	    var timeout = void 0;
	    var delay = void 0;
	    if (typeof givenDelay !== 'number') {
	        thisArg = givenDelay; // eslint-disable-line no-param-reassign
	        delay = 0;
	    } else {
	        delay = givenDelay || 0;
	    }
	
	    return function debounced() {
	        var args = arguments;
	        var callContext = thisArg || this;
	
	        clearTimeout(timeout);
	
	        timeout = setTimeout(function () {
	            return apply(func, callContext, args);
	        }, delay);
	    };
	}
	//# sourceMappingURL=debounce.js.map

/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var addListener = __webpack_require__(317);
	
	var addTreeListener = __webpack_require__(353);
	
	var matreshkaError = __webpack_require__(325);
	
	// adds a source to a source list and adds needed event listener to a it
	module.exports = addSource;
	function addSource(_ref) {
	    var calcHandler = _ref.calcHandler,
	        allSources = _ref.allSources,
	        sourceKey = _ref.sourceKey,
	        sourceObject = _ref.sourceObject,
	        eventOptions = _ref.eventOptions;
	    var _eventOptions$exactKe = eventOptions.exactKey,
	        exactKey = _eventOptions$exactKe === undefined ? false : _eventOptions$exactKe;
	
	    var isDelegated = false;
	
	    // source key must be a string
	    if (typeof sourceKey !== 'string') {
	        throw matreshkaError('calc:source_key_type', { sourceKey: sourceKey });
	    }
	
	    // source object must be an object
	    if (!sourceObject || typeof sourceObject !== 'object') {
	        throw matreshkaError('calc:source_object_type', { sourceObject: sourceObject });
	    }
	
	    if (!exactKey) {
	        var deepPath = sourceKey.split('.');
	
	        // if something like a.b.c is used as a key
	        if (deepPath.length > 1) {
	            isDelegated = true;
	            // TODO: Avoid collisions with bindings by using another event name
	            // ... instead of _change:tree:xxx
	            addTreeListener(sourceObject, deepPath, calcHandler);
	        } else {
	            exactKey = true;
	        }
	    }
	
	    if (exactKey) {
	        // normal handler
	        addListener(sourceObject, '_change:deps:' + sourceKey, calcHandler);
	    }
	
	    allSources.push({
	        sourceKey: sourceKey,
	        sourceObject: sourceObject,
	        isDelegated: isDelegated
	    });
	}
	//# sourceMappingURL=_addsource.js.map

/***/ },
/* 353 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var delegateListener = __webpack_require__(354);
	
	var removeTreeListener = __webpack_require__(363);
	
	// creates tree listener
	function createTreeListener(_ref) {
	    var handler = _ref.handler,
	        restPath = _ref.restPath;
	
	    var newHandler = function treeListener(changeEvent) {
	        var _keys,
	            _l,
	            _i,
	            _source,
	            _key,
	            _result = {};
	
	        _result.restPath = restPath
	
	        for (_source = changeEvent, _keys = Object.keys(_source), _l = _keys.length, _i = 0; _i < _l; _i++) {
	            _key = _keys[_i];
	            _result[_key] = _source[_key];
	        }
	
	        var extendedChangeEvent = _result;
	        var previousValue = changeEvent.previousValue,
	            value = changeEvent.value;
	
	        // removes listener for all branches of the path on old object
	
	        if (previousValue && typeof previousValue === 'object') {
	            removeTreeListener(previousValue, restPath, handler);
	        }
	
	        // adds listener for all branches of "restPath" path on newly assigned object
	        if (value && typeof value === 'object') {
	            addTreeListener(value, restPath, handler);
	        }
	
	        // call original handler
	        handler.call(this, extendedChangeEvent);
	    };
	
	    newHandler._callback = handler;
	
	    return newHandler;
	}
	
	// listens changes for all branches of given path
	// TODO: Pass context to addTreeListener
	// one of the most hard functions to understand
	module.exports = addTreeListener;
	function addTreeListener(object, deepPath, handler) {
	    if (typeof deepPath === 'string') {
	        deepPath = deepPath.split('.'); // eslint-disable-line no-param-reassign
	    }
	
	    // iterate over all keys and delegate listener for all objects of given branch
	    for (var i = 0; i < deepPath.length; i++) {
	        // TODO: Array.prototype.slice method is slow
	        var listenPath = deepPath.slice(0, i);
	        var restPath = deepPath.slice(i + 1);
	
	        delegateListener(object, listenPath, '_change:tree:' + deepPath[i], createTreeListener({
	            handler: handler,
	            restPath: restPath
	        }));
	    }
	}
	//# sourceMappingURL=_addtreelistener.js.map

/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var addListener = __webpack_require__(317);
	
	var defs = __webpack_require__(319);
	
	var arrayAddHandler = __webpack_require__(355);
	
	var objectSetHandler = __webpack_require__(356);
	
	var arrayRemoveHandler = __webpack_require__(357);
	
	var objectRemoveHandler = __webpack_require__(361);
	
	var changeHandler = __webpack_require__(362);
	
	// adds delegated event listener to an object by given path
	module.exports = delegateListener;
	function delegateListener(object, givenPath, name, callback, context) {
	    var info = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
	
	    // if typeof path is string and path is not empty string then split it
	    var path = typeof givenPath === 'string' && givenPath !== '' ? givenPath.split('.') : givenPath;
	
	    if (!path || !path.length) {
	        // if no path then add simple listener
	        addListener(object, name, callback, context, info);
	    } else {
	        // else do all magic
	        var key = path[0];
	        var pathStr = void 0; // needed for undelegation
	
	        if (path.length > 1) {
	            var _source = path,
	                _l = _source.length,
	                _i = 1 || 0,
	                _end = null || _l,
	                _j = 0,
	                _result = Array(_end - _i);
	
	            while (_i < _end) {
	                _result[_j++] = _source[_i++];
	            }
	
	            path = _result;
	            pathStr = path.join('.');
	        } else {
	            path = [];
	            pathStr = path[0] || '';
	        }
	
	        var delegatedData = {
	            path: path,
	            name: name,
	            callback: callback,
	            context: context,
	            info: info,
	            object: object
	        };
	
	        if (key === '*') {
	            // handling asterisk events
	            // { skipChecks: true } allows to use same event name and event handler few times
	            if (object.isMatreshkaArray) {
	                // the event is triggered when something is added to an array
	                addListener(object, '_asterisk:add', arrayAddHandler, null, {
	                    delegatedData: delegatedData,
	                    pathStr: pathStr,
	                    skipChecks: true
	                });
	
	                // the event is triggered when something is removed from an array
	                addListener(object, '_asterisk:remove', arrayRemoveHandler, null, {
	                    delegatedData: delegatedData,
	                    pathStr: pathStr,
	                    skipChecks: true
	                });
	
	                // call handler manually to delegate listener for currently existing data props
	                arrayAddHandler({
	                    added: object
	                }, delegatedData);
	            } else if (object.isMatreshkaObject) {
	                var def = defs.get(object);
	
	                // the event is triggered when data prop is changed
	                addListener(object, '_asterisk:set', objectSetHandler, null, {
	                    delegatedData: delegatedData,
	                    pathStr: pathStr,
	                    skipChecks: true
	                });
	
	                // the event is triggered when data prop is removed
	                addListener(object, '_asterisk:remove', objectRemoveHandler, null, {
	                    delegatedData: delegatedData,
	                    pathStr: pathStr,
	                    skipChecks: true
	                });
	
	                // delegate listener for currently existing data props
	
	                for (var _target = def.keys, _keys = Object.keys(_target), _i2 = 0, defKey, _, _l2 = _keys.length; (defKey = _keys[_i2], _ = _target[defKey]), _i2 < _l2; _i2++) {
	                    var item = object[defKey];
	                    if (item && typeof item === 'object') {
	                        delegateListener(item, path, name, callback, context, info);
	                    }
	                }
	            }
	        } else {
	            // handling non-asterisk delegated event
	
	            // the event is triggered by "set"
	            addListener(object, '_change:delegated:' + key, changeHandler, null, {
	                delegatedData: delegatedData,
	                pathStr: pathStr
	            });
	
	            // call handler manually
	            changeHandler({
	                value: object[key]
	            }, delegatedData);
	        }
	    }
	}
	//# sourceMappingURL=index.js.map

/***/ },
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var triggerOne = __webpack_require__(320);
	
	// the function is called when something is added to an array
	// it delegates asterisk listener for newly added items
	module.exports = arrayAddHandler;
	function arrayAddHandler(_ref) {
	    var added = _ref.added;
	
	    var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : triggerOne.latestEvent.info.delegatedData,
	        path = _ref2.path,
	        name = _ref2.name,
	        callback = _ref2.callback,
	        context = _ref2.context,
	        info = _ref2.info;
	
	    for (var _target = added, _index = 0, item, _l = _target.length; item = _target[_index], _index < _l; _index++) {
	        if (item && typeof item === 'object') {
	            var delegateListener = __webpack_require__(354); // fixing circular ref
	
	            delegateListener(item, path, name, callback, context, info);
	        }
	    }
	}
	//# sourceMappingURL=arrayaddhandler.js.map

/***/ },
/* 356 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var triggerOne = __webpack_require__(320);
	
	var defs = __webpack_require__(319);
	
	// the function is called when data property is changed in Matreshka.Object
	// it delegates asterisk listener for new value
	module.exports = objectSetHandler;
	function objectSetHandler(_ref) {
	    var key = _ref.key;
	
	    var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : triggerOne.latestEvent.info.delegatedData,
	        path = _ref2.path,
	        name = _ref2.name,
	        callback = _ref2.callback,
	        context = _ref2.context,
	        info = _ref2.info,
	        object = _ref2.object;
	
	    if (key) {
	        var item = object[key];
	
	        if (item && typeof item === 'object') {
	            var def = defs.get(object);
	            if (key in def.keys) {
	                var delegateListener = __webpack_require__(354); // fixing circular ref
	
	                delegateListener(item, path, name, callback, context, info);
	            }
	        }
	    }
	}
	//# sourceMappingURL=objectsethandler.js.map

/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var undelegateListener = __webpack_require__(358);
	
	var triggerOne = __webpack_require__(320);
	
	// the function is called when something is removed from an array
	// it undelegates asterisk listener from removed items
	module.exports = arrayRemoveHandler;
	function arrayRemoveHandler(_ref) {
	    var removed = _ref.removed;
	
	    var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : triggerOne.latestEvent.info.delegatedData,
	        path = _ref2.path,
	        name = _ref2.name,
	        callback = _ref2.callback,
	        context = _ref2.context,
	        info = _ref2.info;
	
	    if (removed && removed.length) {
	        for (var _target = removed, _index = 0, item, _l = _target.length; item = _target[_index], _index < _l; _index++) {
	            if (item && typeof item === 'object') {
	                undelegateListener(item, path, name, callback, context, info);
	            }
	        }
	    }
	}
	//# sourceMappingURL=arrayremovehandler.js.map

/***/ },
/* 358 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var defs = __webpack_require__(319);
	
	var removeListener = __webpack_require__(359);
	
	// the function removes internally used events such as _asterisk:add
	function detatchDelegatedLogic(_ref) {
	    var delegatedEventName = _ref.delegatedEventName,
	        pathStr = _ref.pathStr,
	        allEvents = _ref.allEvents;
	
	    var retain = [];
	    var events = allEvents[delegatedEventName];
	
	    for (var _target = events, _index = 0, event, _l = _target.length; event = _target[_index], _index < _l; _index++) {
	        // pathStr is assigned to info in delegateListener
	        if (event.info.pathStr !== pathStr) {
	            retain.push(event);
	        }
	    }
	
	    if (retain.length) {
	        allEvents[delegatedEventName] = retain;
	    } else {
	        delete allEvents[delegatedEventName];
	    }
	}
	
	// removes delegated event listener from an object by given path
	module.exports = undelegateListener;
	function undelegateListener(object, givenPath, name, callback, context) {
	    var info = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
	
	    var def = defs.get(object);
	
	    // if no definition do nothing
	    if (!def) {
	        return;
	    }
	
	    var allEvents = def.events;
	
	
	    var path = typeof givenPath === 'string' && givenPath !== '' ? givenPath.split('.') : givenPath;
	
	    if (!path || !path.length) {
	        // if no path then remove listener
	        removeListener(object, name, callback, context, info);
	    } else {
	        // else do all magic
	        var key = path[0];
	        var pathStr = void 0;
	
	        if (path.length > 1) {
	            var _source = path,
	                _l2 = _source.length,
	                _i = 1 || 0,
	                _end = null || _l2,
	                _j = 0,
	                _result = Array(_end - _i);
	
	            while (_i < _end) {
	                _result[_j++] = _source[_i++];
	            }
	
	            path = _result;
	            pathStr = path.join('.');
	        } else {
	            path = [];
	            pathStr = path[0] || '';
	        }
	
	        if (key === '*') {
	            // remove asterisk events
	            if (object.isMatreshkaArray) {
	                var delegatedAddEvtName = '_asterisk:add';
	                if (allEvents[delegatedAddEvtName]) {
	                    detatchDelegatedLogic({
	                        delegatedEventName: delegatedAddEvtName,
	                        pathStr: pathStr,
	                        allEvents: allEvents
	                    });
	                }
	
	                var delegatedRemoveEvtName = '_asterisk:remove';
	                if (allEvents[delegatedRemoveEvtName]) {
	                    detatchDelegatedLogic({
	                        delegatedEventName: delegatedRemoveEvtName,
	                        pathStr: pathStr,
	                        allEvents: allEvents
	                    });
	                }
	
	                // undelegate asterisk events for existing items
	                if (object.length) {
	                    for (var _target2 = object, _index2 = 0, item, _l3 = _target2.length; item = _target2[_index2], _index2 < _l3; _index2++) {
	                        if (item && typeof item === 'object') {
	                            undelegateListener(item, path, name, callback, context, info);
	                        }
	                    }
	                }
	            } else if (object.isMatreshkaObject) {
	                var delegatedSetEvtName = '_asterisk:set';
	                if (allEvents[delegatedSetEvtName]) {
	                    detatchDelegatedLogic({
	                        delegatedEventName: delegatedSetEvtName,
	                        pathStr: pathStr,
	                        allEvents: allEvents
	                    });
	                }
	
	                var _delegatedRemoveEvtName = '_asterisk:remove';
	                if (allEvents[_delegatedRemoveEvtName]) {
	                    detatchDelegatedLogic({
	                        delegatedEventName: _delegatedRemoveEvtName,
	                        pathStr: pathStr,
	                        allEvents: allEvents
	                    });
	                }
	
	                object.each(function (item) {
	                    if (item && typeof item === 'object') {
	                        undelegateListener(item, path, name, callback, context, info);
	                    }
	                });
	            }
	        } else {
	            // remove non-asterisk delegated events
	
	            var delegatedChangeEvtName = '_change:delegated:' + key;
	            if (allEvents[delegatedChangeEvtName]) {
	                detatchDelegatedLogic({
	                    delegatedEventName: delegatedChangeEvtName,
	                    pathStr: pathStr,
	                    allEvents: allEvents
	                });
	            }
	
	            if (typeof object[key] === 'object') {
	                undelegateListener(object[key], path, name, callback, context, info);
	            }
	        }
	    }
	}
	//# sourceMappingURL=_undelegatelistener.js.map

/***/ },
/* 359 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var defs = __webpack_require__(319);
	
	var triggerOne = __webpack_require__(320);
	
	var domEventReg = __webpack_require__(327);
	
	// removes simple event listener from an object
	module.exports = removeListener;
	function removeListener(object, name, callback, context, info) {
	    var def = defs.get(object);
	
	    // if no definition do nothing
	    if (!def) {
	        return false;
	    }
	
	    var allEvents = def.events;
	
	    var events = allEvents[name];
	    var retain = [];
	    var noTrigger = name ? name[0] === '_' : false;
	    var domEventExecResult = domEventReg.exec(name);
	
	    if (domEventExecResult) {
	        var eventName = domEventExecResult[1],
	            _domEventExecResult$ = domEventExecResult[2],
	            key = _domEventExecResult$ === undefined ? 'sandbox' : _domEventExecResult$,
	            selector = domEventExecResult[3];
	        // fixing circular reference issue
	
	        var removeDomListener = __webpack_require__(360);
	
	        removeDomListener(object, key, eventName, selector, callback, context, info);
	
	        return true;
	    }
	
	    // if all events need to be removed
	    if (typeof name === 'undefined') {
	        if (!noTrigger) {
	            for (var _target2 = allEvents, _keys = Object.keys(_target2), _i = 0, allEventsName, allEventsItem, _l2 = _keys.length; (allEventsName = _keys[_i], allEventsItem = _target2[allEventsName]), _i < _l2; _i++) {
	                for (var _target = allEventsItem, _index = 0, event, _l = _target.length; event = _target[_index], _index < _l; _index++) {
	                    var removeEventData = {
	                        allEventsName: allEventsName,
	                        callback: event.callback,
	                        context: event.context
	                    };
	
	                    triggerOne(object, 'removeevent:' + name, removeEventData);
	                    triggerOne(object, 'removeevent', removeEventData);
	                }
	            }
	        }
	
	        // restore default value of "events"
	        def.events = {};
	    } else if (events) {
	        for (var _target3 = events, _index2 = 0, event, _l3 = _target3.length; event = _target3[_index2], _index2 < _l3; _index2++) {
	            var argCallback = callback && callback._callback || callback;
	            var eventCallback = event.callback._callback || event.callback;
	
	            if (argCallback && argCallback !== eventCallback || context && context !== event.context) {
	                // keep event
	                retain.push(event);
	            } else {
	                var _removeEventData = {
	                    name: name,
	                    callback: event.callback,
	                    context: event.context
	                };
	
	                if (!noTrigger) {
	                    triggerOne(object, 'removeevent:' + name, _removeEventData);
	                    triggerOne(object, 'removeevent', _removeEventData);
	                }
	            }
	        }
	        // if events with given name are found
	
	
	        if (retain.length) {
	            allEvents[name] = retain;
	        } else {
	            delete def.events[name];
	        }
	    }
	
	    return false;
	}
	//# sourceMappingURL=_removelistener.js.map

/***/ },
/* 360 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var defs = __webpack_require__(319);
	
	var removeListener = __webpack_require__(359);
	
	var dom = __webpack_require__(329);
	
	// removes dom listener from nodes bound to given key
	module.exports = removeDomListener;
	function removeDomListener(object, key, eventName, selector, callback, context, info) {
	    var def = defs.get(object);
	
	    if (!def) {
	        return object;
	    }
	
	    var props = def.props;
	
	    var propDef = props[key];
	
	    if (!propDef) {
	        return object;
	    }
	
	    var bindings = propDef.bindings;
	
	
	    if (bindings) {
	        (function () {
	            // collect bound nodes and remove DOM event listener
	            var nodes = Array(bindings.length);
	            var eventNamespace = def.id + key;
	
	            for (var _target = bindings, index = 0, binding, _l = _target.length; binding = _target[index], index < _l; index++) {
	                nodes[index] = binding.node;
	            }
	
	            dom.$(nodes).off(eventName + '.' + eventNamespace, selector, callback);
	        })();
	    }
	
	    // remove bind and unbind listeners from given key
	    removeListener(object, 'bind:' + key, callback, context, info);
	    removeListener(object, 'unbind:' + key, callback, context, info);
	
	    return object;
	}
	//# sourceMappingURL=_removedomlistener.js.map

/***/ },
/* 361 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var undelegateListener = __webpack_require__(358);
	
	var triggerOne = __webpack_require__(320);
	
	// the function is called when data property is removed from Matreshka.Object
	// it undelegates asterisk listener from removed object
	module.exports = objectRemoveHandler;
	function objectRemoveHandler(_ref) {
	    var item = _ref.value;
	
	    var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : triggerOne.latestEvent.info.delegatedData,
	        path = _ref2.path,
	        name = _ref2.name,
	        callback = _ref2.callback,
	        context = _ref2.context,
	        info = _ref2.info;
	
	    if (item && typeof item === 'object') {
	        undelegateListener(item, path, name, callback, context, info);
	    }
	}
	//# sourceMappingURL=objectremovehandler.js.map

/***/ },
/* 362 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var undelegateListener = __webpack_require__(358);
	
	var triggerOne = __webpack_require__(320);
	
	// the function is called when some part of a path is changed
	// it delegates event listener for new branch of an object and undelegates it for old one
	// used for non-asterisk events
	module.exports = changeHandler;
	function changeHandler(_ref) {
	    var previousValue = _ref.previousValue,
	        value = _ref.value;
	
	    var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : triggerOne.latestEvent.info.delegatedData,
	        path = _ref2.path,
	        name = _ref2.name,
	        callback = _ref2.callback,
	        context = _ref2.context,
	        info = _ref2.info;
	
	    if (value && typeof value === 'object') {
	        var delegateListener = __webpack_require__(354); // fixing circular ref
	
	        delegateListener(value, path, name, callback, context, info);
	    }
	
	    if (previousValue && typeof previousValue === 'object') {
	        undelegateListener(previousValue, path, name, callback, context, info);
	    }
	}
	//# sourceMappingURL=changehandler.js.map

/***/ },
/* 363 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var undelegateListener = __webpack_require__(358);
	
	// removes tree listener from all object tree of fiven path
	// TODO: Pass context to removeTreeListener
	module.exports = removeTreeListener;
	function removeTreeListener(object, deepPath, handler) {
	    if (typeof deepPath === 'string') {
	        deepPath = deepPath.split('.'); // eslint-disable-line no-param-reassign
	    }
	
	    // iterate over keys of the path and undelegate given handler (can be undefined)
	    for (var i = 0; i < deepPath.length; i++) {
	        // TODO: Array.prototype.slice is slow
	        var listenedPath = deepPath.slice(0, i);
	
	        undelegateListener(object, listenedPath, '_change:tree:' + deepPath[i], handler);
	    }
	}
	//# sourceMappingURL=_removetreelistener.js.map

/***/ },
/* 364 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var set = __webpack_require__(323);
	
	var deepFind = __webpack_require__(365);
	
	var apply = __webpack_require__(321);
	
	// creates event handler for target object which will be fired when a source is changed
	module.exports = createCalcHandler;
	function createCalcHandler(_ref) {
	    var object = _ref.object,
	        eventOptions = _ref.eventOptions,
	        allSources = _ref.allSources,
	        target = _ref.target,
	        def = _ref.def,
	        handler = _ref.handler;
	
	    return function calcHandler() {
	        var changeEvent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	        var values = [];
	        var _changeEvent$protecto = changeEvent.protector,
	            protector = _changeEvent$protecto === undefined ? {} : _changeEvent$protecto;
	
	        var protectKey = target + def.id;
	
	        var _keys,
	            _l,
	            _i,
	            _source,
	            _key,
	            _result = {};
	
	        _result.protector = protector
	
	        for (_source = eventOptions, _keys = Object.keys(_source), _l = _keys.length, _i = 0; _i < _l; _i++) {
	            _key = _keys[_i];
	            _result[_key] = _source[_key];
	        }
	
	        for (_source = changeEvent, _keys = Object.keys(_source), _l = _keys.length, _i = 0; _i < _l; _i++) {
	            _key = _keys[_i];
	            _result[_key] = _source[_key];
	        }
	
	        var setEventOptions = _result;
	
	        if (protectKey in protector) {
	            return;
	        }
	
	        protector[protectKey] = true;
	
	        for (var _target = allSources, _index = 0, _ref2, _l2 = _target.length; _ref2 = _target[_index], _index < _l2; _index++) {
	            var sourceObject = _ref2.sourceObject,
	                sourceKey = _ref2.sourceKey,
	                isDelegated = _ref2.isDelegated;
	
	            var value = isDelegated ? deepFind(sourceObject, sourceKey) : sourceObject[sourceKey];
	            values.push(value);
	        }
	
	        var targetValue = apply(handler, object, values);
	        set(object, target, targetValue, setEventOptions);
	    };
	}
	//# sourceMappingURL=_createcalchandler.js.map

/***/ },
/* 365 */
/***/ function(module, exports) {

	'use strict';
	
	// gets value of a property in nested object
	// eg "d" from a.b.c.d
	module.exports = deepFind;
	function deepFind(obj, givenPath) {
	    var paths = typeof givenPath === 'string' ? givenPath.split('.') : givenPath;
	    var current = obj;
	
	    for (var i = 0; i < paths.length; ++i) {
	        if (typeof current[paths[i]] === 'undefined') {
	            return undefined;
	        }
	
	        current = current[paths[i]];
	    }
	
	    return current;
	}
	//# sourceMappingURL=deepfind.js.map

/***/ },
/* 366 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var parserData = __webpack_require__(349);
	
	var bindNode = __webpack_require__(367);
	
	var textNodeBinder = {
	    setValue: function (value) {
	        this.textContent = typeof value === 'undefined' ? '' : value;
	    }
	};
	
	// adds binding for text node
	// it splits up one text node into "simple text nodes"
	// and "bound text nodes" and removes original text node
	module.exports = processTextNode;
	function processTextNode(_ref) {
	    var object = _ref.object,
	        node = _ref.node,
	        textNode = _ref.textNode,
	        eventOptions = _ref.eventOptions;
	    var bindingReg = parserData.bindingReg;
	    var textContent = textNode.textContent;
	    var _window = window,
	        document = _window.document;
	
	
	    bindingReg.lastIndex = 0;
	
	    // tokens variable contains normal text as odd items
	    // and bound keys as even items
	    // 'foo{{x}}bar{{y}}baz{{z}}' -> ['foo', 'x', 'bar', 'y', 'baz', 'z', '']
	    var tokens = textContent.split(bindingReg);
	
	    // fragment contains all new text nodes
	    var fragment = document.createDocumentFragment();
	
	    for (var _target = tokens, index = 0, token, _l = _target.length; token = _target[index], index < _l; index++) {
	        if (token) {
	            var newTextNode = document.createTextNode(token);
	            fragment.appendChild(newTextNode);
	
	            // if tokens item is even then it is a key
	            // which needs to be bound to newly created text node
	            if (index % 2 !== 0) {
	                bindNode(object, token, newTextNode, textNodeBinder, eventOptions);
	            }
	        }
	    }
	
	    node.insertBefore(fragment, textNode);
	    node.removeChild(textNode);
	}
	//# sourceMappingURL=_processtextnode.js.map

/***/ },
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var initMK = __webpack_require__(318);
	
	var defineProp = __webpack_require__(322);
	
	var getNodes = __webpack_require__(368);
	
	var createBindingSwitcher = __webpack_require__(371);
	
	var bindSingleNode = __webpack_require__(374);
	
	var checkObjectType = __webpack_require__(324);
	
	var matreshkaError = __webpack_require__(325);
	
	var addTreeListener = __webpack_require__(353);
	
	// initializes binsing between a property of an object to HTML node
	module.exports = bindNode;
	function bindNode(object, key, node, binder, eventOptions) {
	    if (typeof this === 'object' && this.isMatreshka) {
	        // when context is Matreshka instance, use this as an object and shift other args
	        /* eslint-disable no-param-reassign */
	        eventOptions = binder;
	        binder = node;
	        node = key;
	        key = object;
	        object = this;
	        /* eslint-enable no-param-reassign */
	    } else {
	        // throw error when object type is wrong
	        checkObjectType(object, 'bindNode');
	    }
	
	    eventOptions = eventOptions || {}; // eslint-disable-line no-param-reassign
	    binder = binder || {}; // eslint-disable-line no-param-reassign
	
	    initMK(object);
	
	    var temporaryOptionalFlag = bindNode.temporaryOptionalFlag;
	
	
	    delete bindNode.temporaryOptionalFlag;
	
	    // throw an error when key is falsy
	    if (!key) {
	        throw matreshkaError('binding:falsy_key');
	    }
	
	    if (key instanceof Array) {
	        if (typeof key[0] === 'string') {
	            /*
	             * accept array of keys
	             * this.bindNode(['a', 'b', 'c'], node)
	             */
	            if (temporaryOptionalFlag) {
	                var _keys,
	                    _l,
	                    _i,
	                    _source,
	                    _key,
	                    _result = {};
	
	                for (_source = eventOptions, _keys = Object.keys(_source), _l = _keys.length, _i = 0; _i < _l; _i++) {
	                    _key = _keys[_i];
	                    _result[_key] = _source[_key];
	                }
	
	                _result.optional = true
	
	                // eslint-disable-next-line no-param-reassign
	                eventOptions = _result;
	            }
	
	            for (var _target = key, _index = 0, itemKey, _l2 = _target.length; itemKey = _target[_index], _index < _l2; _index++) {
	                bindNode(object, itemKey, node, binder, eventOptions)
	            }
	        } else {
	            for (var _target2 = key, _index2 = 0, _ref, _l7 = _target2.length; _ref = _target2[_index2], _index2 < _l7; _index2++) {
	                var itemKey = _ref.key,
	                    itemNode = _ref.node,
	                    itemBinder = _ref.binder,
	                    itemEventOptions = _ref.event;
	
	                var commonEventOptions = node;
	                var mergedEventOptions = {};
	
	                if (temporaryOptionalFlag) {
	                    mergedEventOptions.optional = true;
	                }
	
	                if (commonEventOptions) {
	                    var _result2 = mergedEventOptions;
	                    // extend event object by "global" event
	
	                    for (var _source3 = commonEventOptions, _keys3 = Object.keys(_source3), _l4 = _keys3.length, _i3 = 0, _key3; _i3 < _l4; _i3++) {
	                        _key3 = _keys3[_i3];
	                        _result2[_key3] = _source3[_key3];
	                    }
	                }
	
	                if (itemEventOptions) {
	                    var _result3 = mergedEventOptions;
	                    // extend event object by "local" event ("event" key of an object)
	
	                    for (var _source5 = itemEventOptions, _keys5 = Object.keys(_source5), _l6 = _keys5.length, _i5 = 0, _key5; _i5 < _l6; _i5++) {
	                        _key5 = _keys5[_i5];
	                        _result3[_key5] = _source5[_key5];
	                    }
	                }
	
	                bindNode(object, itemKey, itemNode, itemBinder, mergedEventOptions);
	            }
	            /*
	             * accept array of objects
	             * this.bindNode([{key, node, binder, event}], { silent: true });
	             */
	
	        }
	
	        return object;
	    }
	
	    if (typeof key === 'object') {
	        for (var _target4 = key, _keys7 = Object.keys(_target4), _i7 = 0, keyObjKey, keyObjValue, _l10 = _keys7.length; (keyObjKey = _keys7[_i7], keyObjValue = _target4[keyObjKey]), _i7 < _l10; _i7++) {
	            // binder means eventOptions
	            if (temporaryOptionalFlag) {
	                var _keys6,
	                    _l8,
	                    _i6,
	                    _source6,
	                    _key6,
	                    _result4 = {};
	
	                for (_source6 = binder, _keys6 = Object.keys(_source6), _l8 = _keys6.length, _i6 = 0; _i6 < _l8; _i6++) {
	                    _key6 = _keys6[_i6];
	                    _result4[_key6] = _source6[_key6];
	                }
	
	                _result4.optional = true
	
	                // eslint-disable-next-line no-param-reassign
	                eventOptions = binder ? _result4 : { optional: true };
	            } else {
	                eventOptions = binder; // eslint-disable-line no-param-reassign
	            }
	
	            if (keyObjValue && keyObjValue.constructor === Object && 'node' in keyObjValue) {
	                // this.bindNode({ key: { node: $(), binder } ) }, { on: 'evt' }, { silent: true });
	                bindNode(object, keyObjKey, keyObjValue.node, keyObjValue.binder || node, eventOptions);
	            } else if (keyObjValue && keyObjValue.constructor === Array && keyObjValue.length && keyObjValue[0].constructor === Object && 'node' in keyObjValue[0]) {
	                for (var _target3 = keyObjValue, _index3 = 0, keyObjValueItem, _l9 = _target3.length; keyObjValueItem = _target3[_index3], _index3 < _l9; _index3++) {
	                    bindNode(object, keyObjKey, keyObjValueItem.node, keyObjValueItem.binder || node, eventOptions);
	                }
	                // this.bindNode({ key: [{
	                //   node: $(),
	                //   binder
	                // }] ) }, { on: 'evt' }, { silent: true });
	
	            } else {
	                // this.bindNode({ key: $() }, { on: 'evt' }, { silent: true });
	                bindNode(object, keyObjKey, keyObjValue, node, eventOptions);
	            }
	        }
	
	        return object;
	    }
	
	    var _eventOptions = eventOptions,
	        _eventOptions$optiona = _eventOptions.optional,
	        optional = _eventOptions$optiona === undefined ? temporaryOptionalFlag || false : _eventOptions$optiona,
	        _eventOptions$exactKe = _eventOptions.exactKey,
	        exactKey = _eventOptions$exactKe === undefined ? false : _eventOptions$exactKe;
	
	    var $nodes = getNodes(object, node);
	
	    // check node existence
	    if (!$nodes.length) {
	        if (optional) {
	            return object;
	        }
	
	        throw matreshkaError('binding:node_missing', { key: key, node: node });
	    }
	
	    if (!exactKey) {
	        var deepPath = key.split('.');
	        var deepPathLength = deepPath.length;
	
	        if (deepPathLength > 1) {
	            // handle binding when key arg includes dots (eg "a.b.c.d")
	            var bindingSwitcher = createBindingSwitcher({
	                object: object,
	                deepPath: deepPath,
	                $nodes: $nodes,
	                binder: binder,
	                eventOptions: eventOptions,
	                bindNode: bindNode
	            });
	
	            addTreeListener(object, deepPath.slice(0, deepPathLength - 1), bindingSwitcher);
	
	            bindingSwitcher();
	
	            return object;
	        }
	    }
	
	    var propDef = defineProp(object, key);
	
	    if (object.isMatreshka) {
	        // if an object is Matreshka instance then extend "$nodes" and "nodes" objects
	        var _object = object,
	            $allNodes = _object.$nodes,
	            allNodes = _object.nodes;
	
	
	        if (!$allNodes || !allNodes) {
	            throw matreshkaError('binding:instance_nodes_missing', {
	                $nodes: $allNodes,
	                nodes: allNodes
	            });
	        }
	
	        $allNodes[key] = $allNodes[key] && $allNodes[key].length ? $allNodes[key].add($nodes) : $nodes;
	
	        allNodes[key] = $allNodes[key][0];
	    }
	
	    // handle binding for every node separately
	
	    for (var _target5 = $nodes, _index4 = 0, oneNode, _l11 = _target5.length; oneNode = _target5[_index4], _index4 < _l11; _index4++) {
	        bindSingleNode(object, {
	            $nodes: $nodes,
	            node: oneNode,
	            key: key,
	            eventOptions: eventOptions,
	            binder: binder,
	            propDef: propDef
	        })
	    }
	
	    return object;
	}
	//# sourceMappingURL=index.js.map

/***/ },
/* 368 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var selectNodes = __webpack_require__(369);
	
	var dom = __webpack_require__(329);
	
	var htmlReg = /</;
	var customSelectorReg = /:sandbox|:bound\(([^(]*)\)/;
	
	// the function works just like DOM library accepting any kind of arg
	// (HTML string, Node, NodeList etc) bu allows to pass custom selector
	// eg :bound(KEY) and :sandbox
	module.exports = getNodes;
	function getNodes(object, selector) {
	    var nodes = void 0;
	
	    if (typeof selector === 'string' && !htmlReg.test(selector) && customSelectorReg.test(selector)) {
	        nodes = selectNodes(object, selector);
	    } else {
	        nodes = dom.$(selector);
	    }
	
	    return nodes;
	}
	//# sourceMappingURL=_getnodes.js.map

/***/ },
/* 369 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var defs = __webpack_require__(319);
	
	var toArray = __webpack_require__(370);
	
	var dom = __webpack_require__(329);
	
	var customSelectorReg = /\s*:bound\(([^(]*)\)\s*([\S\s]*)\s*|\s*:sandbox\s*([\S\s]*)\s*/;
	var randomAttr = Math.random().toString().replace('0.', 'x') + 'y'; // x12345y
	
	// the function selects nodes based on a selector (including custom values, eg :sandbox)
	// TODO: selectNodes looks not good, it needs to be refactored and accelerated if possible
	module.exports = selectNodes;
	function selectNodes(object, givenSelector) {
	    var _defs$get = defs.get(object),
	        props = _defs$get.props;
	
	    var selectors = givenSelector.split(',');
	    var result = dom.$();
	
	    for (var _target4 = selectors, _index3 = 0, selector, _l4 = _target4.length; selector = _target4[_index3], _index3 < _l4; _index3++) {
	        var execResult = customSelectorReg.exec(selector);
	        if (execResult) {
	            (function () {
	                var boundKey = execResult[3] !== undefined ? 'sandbox' : execResult[1];
	                var subSelector = execResult[3] !== undefined ? execResult[3] : execResult[2];
	                var propDef = props[boundKey];
	
	                if (propDef) {
	                    var bindings = propDef.bindings;
	
	                    if (bindings) {
	                        (function () {
	                            var boundNodes = Array(bindings.length);
	
	                            // if native selector passed after :bound(KEY) is not empty string
	                            // for example ":bound(KEY) .my-selector"
	                            for (var _target = bindings, i = 0, binding, _l = _target.length; binding = _target[i], i < _l; i++) {
	                                boundNodes[i] = binding.node;
	                            }
	
	                            if (subSelector) {
	                                // if native selector contains children selector
	                                // for example ":bound(KEY) > .my-selector"
	                                if (subSelector.indexOf('>') === 0) {
	                                    for (var _target2 = boundNodes, _index = 0, node, _l2 = _target2.length; node = _target2[_index], _index < _l2; _index++) {
	                                        node.setAttribute(randomAttr, randomAttr);
	                                        var selected = node.querySelectorAll('[' + randomAttr + '="' + randomAttr + '"] ' + subSelector);
	                                        result = result.add(toArray(selected));
	                                        node.removeAttribute(randomAttr);
	                                    }
	                                    // selecting children
	
	                                } else {
	                                    for (var _target3 = boundNodes, _index2 = 0, node, _l3 = _target3.length; node = _target3[_index2], _index2 < _l3; _index2++) {
	                                        var selected = node.querySelectorAll(subSelector);
	                                        result = result.add(toArray(selected));
	                                    }
	                                    // if native selector doesn't contain children selector
	
	                                }
	                            } else {
	                                // if native selector is empty string just add bound nodes to result
	                                result = result.add(boundNodes);
	                            }
	                        })();
	                    }
	                }
	            })();
	        } else {
	            // if it's native selector (no custom things)
	            result = result.add(selector);
	        }
	    }
	
	    return result;
	}
	//# sourceMappingURL=_selectnodes.js.map

/***/ },
/* 370 */
/***/ function(module, exports) {

	"use strict";
	
	// cheap conversion of an array-like object to Array instance
	module.exports = toArray;
	function toArray(object) {
	    var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	    var length = object.length;
	
	    var array = Array(length);
	
	    for (var i = start; i < length; i++) {
	        array[i - start] = object[i];
	    }
	
	    return array;
	}
	//# sourceMappingURL=toarray.js.map

/***/ },
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var unbindNode = __webpack_require__(372);
	
	// returns a function which re-adds binding when object branch is changed
	// the function is called by bindNode when something like
	// 'foo.bar.baz' is passed to it as key argument value
	// this is one of the hardest things in the framework to understand
	module.exports = createBindingSwitcher;
	function createBindingSwitcher(_ref) {
	    var object = _ref.object,
	        deepPath = _ref.deepPath,
	        $nodes = _ref.$nodes,
	        binder = _ref.binder,
	        eventOptions = _ref.eventOptions,
	        bindNode = _ref.bindNode;
	
	    return function bindingSwitcher() {
	        var changeEvent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	        var deepPathLength = deepPath.length;
	        var lastDeepPathItem = deepPath[deepPathLength - 1];
	        var value = changeEvent.value,
	            previousValue = changeEvent.previousValue,
	            restPath = changeEvent.restPath;
	
	        var target = void 0; // an object to call bindNode
	        var previousTarget = void 0; // an object to call unbindNode
	
	
	        if (value && typeof value === 'object' && restPath) {
	            // if rest path is given and new value is an object
	            target = value;
	            for (var i = 0; i < restPath.length; i++) {
	                target = target[restPath[i]];
	                if (!target) {
	                    break;
	                }
	            }
	        } else {
	            // if rest path is not given
	            target = object;
	            for (var _i = 0; _i < deepPathLength - 1; _i++) {
	                target = target[deepPath[_i]];
	                if (!target) {
	                    break;
	                }
	            }
	        }
	
	        // if rest path is given and previous value is an object
	        if (previousValue && typeof previousValue === 'object' && restPath) {
	            previousTarget = previousValue;
	            for (var _i2 = 0; _i2 < restPath.length; _i2++) {
	                previousTarget = previousTarget[restPath[_i2]];
	                if (!previousTarget) {
	                    break;
	                }
	            }
	        }
	
	        // add binding for new target
	        if (target && typeof target === 'object') {
	            bindNode(target, lastDeepPathItem, $nodes, binder, eventOptions);
	        }
	
	        // remove binding for previously used object
	        if (previousTarget && typeof previousTarget === 'object') {
	            unbindNode(previousTarget, lastDeepPathItem, $nodes);
	        }
	    };
	}
	//# sourceMappingURL=_createbindingswitcher.js.map

/***/ },
/* 372 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var checkObjectType = __webpack_require__(324);
	
	var defs = __webpack_require__(319);
	
	var getNodes = __webpack_require__(368);
	
	var removeTreeListener = __webpack_require__(363);
	
	var removeBinding = __webpack_require__(373);
	
	var dom = __webpack_require__(329);
	
	// unbinds a node
	module.exports = unbindNode;
	function unbindNode(object, key, node, eventOptions) {
	    if (typeof this === 'object' && this.isMatreshka) {
	        // when context is Matreshka instance, use this as an object and shift other args
	        /* eslint-disable no-param-reassign */
	        eventOptions = node;
	        node = key;
	        key = object;
	        object = this;
	        /* eslint-enable no-param-reassign */
	    } else {
	        // throw error when object type is wrong
	        checkObjectType(object, 'unbindNode');
	    }
	
	    if (key instanceof Array) {
	        if (typeof key[0] === 'string') {
	            for (var _target = key, _index = 0, itemKey, _l = _target.length; itemKey = _target[_index], _index < _l; _index++) {
	                unbindNode(object, itemKey, node, eventOptions)
	            }
	            /*
	             * accept array of keys
	             * this.unbindNode(['a', 'b', 'c'], node)
	             */
	        } else {
	            for (var _target2 = key, _index2 = 0, _ref, _l6 = _target2.length; _ref = _target2[_index2], _index2 < _l6; _index2++) {
	                var itemKey = _ref.key,
	                    itemNode = _ref.node,
	                    itemEventOptions = _ref.event;
	
	                var commonEventOptions = node;
	                var mergedEventOptions = {};
	
	                if (commonEventOptions) {
	                    var _result = mergedEventOptions;
	                    // extend event object by "global" event
	
	                    for (var _source2 = commonEventOptions, _keys2 = Object.keys(_source2), _l3 = _keys2.length, _i2 = 0, _key2; _i2 < _l3; _i2++) {
	                        _key2 = _keys2[_i2];
	                        _result[_key2] = _source2[_key2];
	                    }
	                }
	
	                if (itemEventOptions) {
	                    var _result2 = mergedEventOptions;
	                    // extend event object by "local" event ("event" key of an object)
	
	                    for (var _source4 = itemEventOptions, _keys4 = Object.keys(_source4), _l5 = _keys4.length, _i4 = 0, _key4; _i4 < _l5; _i4++) {
	                        _key4 = _keys4[_i4];
	                        _result2[_key4] = _source4[_key4];
	                    }
	                }
	
	                unbindNode(object, itemKey, itemNode, mergedEventOptions);
	            }
	            /*
	             * acept array of objects
	             * this.unbindNode([{ key, node, binder, event }], { silent: true });
	             */
	
	        }
	
	        return object;
	    }
	
	    if (key && typeof key === 'object') {
	        for (var _target4 = key, _keys5 = Object.keys(_target4), _i5 = 0, keyObjKey, keyObjValue, _l8 = _keys5.length; (keyObjKey = _keys5[_i5], keyObjValue = _target4[keyObjKey]), _i5 < _l8; _i5++) {
	            if (keyObjValue.constructor === Object && 'node' in keyObjValue) {
	                // this.unbindNode({ key: { node: $(), binder } ) }, { silent: true });
	                unbindNode(object, keyObjKey, keyObjValue.node, node);
	            } else if (keyObjValue.constructor === Array && keyObjValue.length && keyObjValue[0].constructor === Object && 'node' in keyObjValue[0]) {
	                for (var _target3 = keyObjValue, _index3 = 0, keyObjValueItem, _l7 = _target3.length; keyObjValueItem = _target3[_index3], _index3 < _l7; _index3++) {
	                    unbindNode(object, keyObjKey, keyObjValueItem.node, node);
	                }
	                // this.unbindNode({ key: [{ node: $(), binder }] ) }, { silent: true });
	
	            } else {
	                // this.unbindNode({ key: $() }, { silent: true });
	                unbindNode(object, keyObjKey, keyObjValue, node);
	            }
	        }
	
	        return object;
	    }
	
	    eventOptions = eventOptions || {}; // eslint-disable-line no-param-reassign
	    var _eventOptions = eventOptions,
	        deep = _eventOptions.deep;
	
	    var def = defs.get(object);
	
	    if (!def) {
	        return object;
	    }
	
	    var props = def.props;
	
	    // allow to pass null or undefined as key
	    // if passed then remove bindings of all keys for given object
	
	    if (key === null || typeof key === 'undefined') {
	        for (var _target5 = props, _keys6 = Object.keys(_target5), _i6 = 0, propsKey, propsItem, _l9 = _keys6.length; (propsKey = _keys6[_i6], propsItem = _target5[propsKey]), _i6 < _l9; _i6++) {
	            unbindNode(object, propsKey, null, eventOptions);
	        }
	
	        return object;
	    }
	
	    // remove delegated binding
	    if (deep !== false) {
	        var deepPath = key.split('.');
	        var deepPathLength = deepPath.length;
	
	        if (deepPathLength > 1) {
	            var target = object;
	
	            for (var i = 0; i < deepPathLength - 1; i++) {
	                // TODO: Do we need to throw an error when a target is falsy?
	                target = target[deepPath[i]];
	            }
	
	            // TODO: Potential bug! This may undelegate listener for all bindings with the same path
	            // ...(cannot reproduce)
	            removeTreeListener(object, deepPath.slice(0, deepPathLength - 2));
	
	            unbindNode(target, deepPath[deepPathLength - 1], node, eventOptions);
	
	            return object;
	        }
	    }
	
	    var propDef = props[key];
	
	    // when no propdef do nothing
	    if (!propDef) {
	        return object;
	    }
	
	    var bindings = propDef.bindings;
	
	    // if the property doesn't have any bindings do nothing
	
	    if (!bindings) {
	        return object;
	    }
	
	    // if no node is pased remove all bindings for given key
	    if (!node) {
	        for (var _target6 = bindings, _index4 = 0, binding, _l10 = _target6.length; binding = _target6[_index4], _index4 < _l10; _index4++) {
	            removeBinding({ object: object, key: key, eventOptions: eventOptions, binding: binding });
	        }
	
	        propDef.bindings = null;
	
	        // update nodes and $nodes for Matreshka instance
	        if (object.isMatreshka) {
	            delete object.nodes[key];
	            delete object.$nodes[key];
	        }
	
	        return object;
	    }
	
	    var $nodes = getNodes(object, node);
	    var retainBindings = [];
	    var retainNodes = [];
	
	    // iterate over all bindngs and compare their node with given nodes
	
	    // update nodes and $nodes for Matreshka instance
	    for (var _target8 = $nodes, _index6 = 0, nodesItem, _l12 = _target8.length; nodesItem = _target8[_index6], _index6 < _l12; _index6++) {
	        for (var _target7 = bindings, _index5 = 0, binding, _l11 = _target7.length; binding = _target7[_index5], _index5 < _l11; _index5++) {
	            if (binding.node === nodesItem) {
	                removeBinding({ object: object, key: key, eventOptions: eventOptions, binding: binding });
	            } else {
	                retainBindings.push(binding);
	                retainNodes.push(nodesItem);
	            }
	        }
	    }
	
	    if (object.isMatreshka) {
	        if (retainNodes.length) {
	            object.nodes[key] = retainNodes[0];
	            object.$nodes[key] = dom.$(retainNodes);
	        } else {
	            delete object.nodes[key];
	            delete object.$nodes[key];
	        }
	    }
	
	    // update bindings object
	    if (retainBindings.length) {
	        propDef.bindings = retainBindings;
	    } else {
	        propDef.bindings = null;
	    }
	
	    return object;
	}
	//# sourceMappingURL=index.js.map

/***/ },
/* 373 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var removeListener = __webpack_require__(359);
	
	var triggerOne = __webpack_require__(320);
	
	var spaceReg = /\s+/;
	
	// the function removes single binding for single object
	// called by unbindNode
	module.exports = removeBinding;
	function removeBinding(_ref) {
	    var object = _ref.object,
	        key = _ref.key,
	        eventOptions = _ref.eventOptions,
	        binding = _ref.binding;
	    var bindingOptions = binding.bindingOptions,
	        binder = binding.binder,
	        node = binding.node,
	        nodeHandler = binding.nodeHandler,
	        objectHandler = binding.objectHandler;
	    var destroy = binder.destroy,
	        on = binder.on;
	    var silent = eventOptions.silent;
	
	    // if "on" is a function then disable it
	    // we cannot "turn off" custom listener defined by a programmer
	    // programmer needs to remove custom listener maually inside binder.destroy
	
	    if (typeof on === 'function') {
	        nodeHandler.disabled = true;
	    } else if (typeof on === 'string') {
	        for (var _target = on.split(spaceReg), _index = 0, evtName, _l = _target.length; evtName = _target[_index], _index < _l; _index++) {
	            node.removeEventListener(evtName, nodeHandler)
	        }
	        // remove DOM event listener
	        // removeEventListener is faster than "on" method from any DOM library
	
	    }
	
	    // remove object event listener
	    removeListener(object, '_change:bindings:' + key, objectHandler);
	
	    // if binder.destroy is given call it
	    if (destroy) {
	        destroy.call(node, bindingOptions);
	    }
	
	    // fire events
	    if (!silent) {
	        var _keys,
	            _l2,
	            _i,
	            _source,
	            _key,
	            _result = {};
	
	        _result.key = key
	        _result.node = node
	
	        for (_source = eventOptions, _keys = Object.keys(_source), _l2 = _keys.length, _i = 0; _i < _l2; _i++) {
	            _key = _keys[_i];
	            _result[_key] = _source[_key];
	        }
	
	        var extendedEventOptions = _result;
	
	        triggerOne(object, 'unbind:' + key, extendedEventOptions);
	        triggerOne(object, 'unbind', extendedEventOptions);
	    }
	}
	//# sourceMappingURL=_removebinding.js.map

/***/ },
/* 374 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var lookForBinder = __webpack_require__(309);
	
	var createNodeHandler = __webpack_require__(375);
	
	var createObjectHandler = __webpack_require__(376);
	
	var triggerOne = __webpack_require__(320);
	
	var addListener = __webpack_require__(317);
	
	var debounce = __webpack_require__(351);
	
	var matreshkaError = __webpack_require__(325);
	
	var spaceReg = /\s+/;
	
	// handles binding for single property & node
	// the function is used at bindNode
	module.exports = bindSingleNode;
	function bindSingleNode(object, _ref) {
	    var givenBinder = _ref.binder,
	        key = _ref.key,
	        $nodes = _ref.$nodes,
	        node = _ref.node,
	        eventOptions = _ref.eventOptions,
	        propDef = _ref.propDef;
	    var silent = eventOptions.silent,
	        getValueOnBind = eventOptions.getValueOnBind,
	        setValueOnBind = eventOptions.setValueOnBind,
	        _eventOptions$debounc = eventOptions.debounceSetValue,
	        debounceSetValue = _eventOptions$debounc === undefined ? true : _eventOptions$debounc,
	        _eventOptions$debounc2 = eventOptions.debounceGetValue,
	        debounceGetValue = _eventOptions$debounc2 === undefined ? true : _eventOptions$debounc2,
	        _eventOptions$debounc3 = eventOptions.debounceSetValueOnBind,
	        debounceSetValueOnBind = _eventOptions$debounc3 === undefined ? false : _eventOptions$debounc3,
	        _eventOptions$debounc4 = eventOptions.debounceGetValueOnBind,
	        debounceGetValueOnBind = _eventOptions$debounc4 === undefined ? false : _eventOptions$debounc4,
	        _eventOptions$debounc5 = eventOptions.debounceSetValueDelay,
	        debounceSetValueDelay = _eventOptions$debounc5 === undefined ? 0 : _eventOptions$debounc5,
	        _eventOptions$debounc6 = eventOptions.debounceGetValueDelay,
	        debounceGetValueDelay = _eventOptions$debounc6 === undefined ? 0 : _eventOptions$debounc6,
	        _eventOptions$useExac = eventOptions.useExactBinder,
	        useExactBinder = _eventOptions$useExac === undefined ? false : _eventOptions$useExac;
	    // create bindings array in property definition object
	
	    var bindings = propDef.bindings = propDef.bindings || [];
	    var value = propDef.value;
	
	    var bindingOptions = {
	        self: object,
	        key: key,
	        value: value,
	        $nodes: $nodes,
	        node: node
	    };
	    var isUndefined = typeof value === 'undefined';
	    var binder = void 0;
	    var objectHandler = void 0;
	    var nodeHandler = void 0;
	
	    // do not allow to bind more than 2 nodes to "sandbox" (for all nodes)
	    // and "container" (for Matreshka.Array)
	    if (bindings.length && (key === 'sandbox' || object.isMatreshkaArray && key === 'container')) {
	        throw matreshkaError('binding:magic_props_nodes_length');
	    }
	
	    // get actual binder
	    if (givenBinder !== null) {
	        // by default binder passed to bindNode is extended by default binder
	        // useExactBinder turns this behavior off
	        if (useExactBinder) {
	            binder = givenBinder;
	        } else {
	            // getting default binder
	            var foundBinder = lookForBinder(node);
	
	            // if default binder is found
	            if (foundBinder) {
	                // extend found binder by given binder
	                if (givenBinder) {
	                    var _result = foundBinder;
	
	                    for (var _source2 = givenBinder, _keys2 = Object.keys(_source2), _l2 = _keys2.length, _i2 = 0, _key2; _i2 < _l2; _i2++) {
	                        _key2 = _keys2[_i2];
	                        _result[_key2] = _source2[_key2];
	                    }
	                }
	
	                binder = foundBinder;
	            } else {
	                // default binder is not found
	                binder = givenBinder || {};
	            }
	        }
	    }
	
	    var _binder = binder,
	        getValue = _binder.getValue,
	        setValue = _binder.setValue,
	        on = _binder.on,
	        initialize = _binder.initialize;
	
	    // call binder.initialize
	
	    if (initialize) {
	        initialize.call(node, bindingOptions);
	    }
	
	    // add needed event handlers to given node when getValue is given
	    if (getValue) {
	        var syncNodeHandler = createNodeHandler({
	            object: object,
	            key: key,
	            node: node,
	            propDef: propDef,
	            binder: binder,
	            bindingOptions: bindingOptions
	        });
	
	        var debouncedNodeHandler = void 0;
	
	        if (debounceGetValue || debounceGetValueOnBind) {
	            debouncedNodeHandler = debounce(syncNodeHandler, debounceGetValueDelay);
	        }
	
	        if (debounceGetValue) {
	            nodeHandler = debouncedNodeHandler;
	        } else {
	            nodeHandler = syncNodeHandler;
	        }
	
	        // TODO: Throw error when "on" and maybe other binder properties has wrong type
	        if (typeof on === 'function') {
	            on.call(node, nodeHandler, bindingOptions);
	        } else if (typeof on === 'string') {
	            for (var _target = on.split(spaceReg), _index = 0, evtName, _l3 = _target.length; evtName = _target[_index], _index < _l3; _index++) {
	                node.addEventListener(evtName, nodeHandler)
	            }
	            // addEventListener is faster than "on" method from any DOM library
	
	        }
	
	        if (isUndefined && getValueOnBind !== false || getValueOnBind === true) {
	            if (debounceGetValueOnBind) {
	                debouncedNodeHandler();
	            } else {
	                syncNodeHandler();
	            }
	        }
	
	        isUndefined = typeof propDef.value === 'undefined';
	    }
	
	    // add needed event handlers to the object when setValue is given
	    if (setValue) {
	        var syncObjectHandler = createObjectHandler({
	            node: node,
	            propDef: propDef,
	            binder: binder,
	            bindingOptions: bindingOptions,
	            eventOptions: eventOptions
	        });
	
	        var debouncedObjectHandler = void 0;
	
	        if (debounceSetValue || debounceSetValueOnBind) {
	            debouncedObjectHandler = debounce(syncObjectHandler, debounceSetValueDelay);
	        }
	
	        if (debounceSetValue) {
	            objectHandler = debouncedObjectHandler;
	        } else {
	            objectHandler = syncObjectHandler;
	        }
	
	        // TODO: Is it possible to get previous value of a property?
	        addListener(object, '_change:bindings:' + key, objectHandler, null, { skipChecks: true });
	
	        if (!isUndefined && setValueOnBind !== false || setValueOnBind === true) {
	            if (debounceSetValueOnBind) {
	                debouncedObjectHandler();
	            } else {
	                syncObjectHandler();
	            }
	        }
	    }
	
	    // add binding data to bindings array
	    bindings.push({
	        on: on,
	        node: node,
	        binder: binder,
	        objectHandler: objectHandler,
	        nodeHandler: nodeHandler,
	        bindingOptions: bindingOptions
	    });
	
	    // fire events
	    if (!silent) {
	        var _keys3,
	            _l4,
	            _i3,
	            _source3,
	            _key3,
	            _result2 = {};
	
	        _result2.key = key
	        _result2.node = node
	
	        for (_source3 = eventOptions, _keys3 = Object.keys(_source3), _l4 = _keys3.length, _i3 = 0; _i3 < _l4; _i3++) {
	            _key3 = _keys3[_i3];
	            _result2[_key3] = _source3[_key3];
	        }
	
	        var extendedEventOptions = _result2;
	
	        triggerOne(object, 'bind:' + key, extendedEventOptions);
	        triggerOne(object, 'bind', extendedEventOptions);
	    }
	}
	//# sourceMappingURL=_bindsinglenode.js.map

/***/ },
/* 375 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var is = __webpack_require__(326);
	
	var set = __webpack_require__(323);
	
	// returns a function which called when bound node state is changed (eg DOM event is fired)
	module.exports = createNodeHandler;
	function createNodeHandler(_ref) {
	    var object = _ref.object,
	        key = _ref.key,
	        node = _ref.node,
	        propDef = _ref.propDef,
	        binder = _ref.binder,
	        bindingOptions = _ref.bindingOptions;
	
	    return function nodeHandler() {
	        var domEvent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	        // nodeHandler.disabled = true is set in unbindNode
	        // we cannot "turn off" binder.on when its value is a function
	        // developer needs to clean memory ("turn off" callback) manualy in binder.destroy
	        if (nodeHandler.disabled) {
	            return;
	        }
	
	        var previousValue = propDef.value;
	        var which = domEvent.which,
	            target = domEvent.target,
	            ctrlKey = domEvent.ctrlKey,
	            altKey = domEvent.altKey;
	        var getValue = binder.getValue;
	
	        var _keys,
	            _l,
	            _i,
	            _source,
	            _key,
	            _result = {};
	
	        _result.previousValue = previousValue
	        _result.domEvent = domEvent
	        _result.originalEvent = domEvent.originalEvent || domEvent
	
	        _result.preventDefault = function () {
	            return domEvent.preventDefault();
	        }
	
	        _result.stopPropagation = function () {
	            return domEvent.stopPropagation();
	        }
	
	        _result.which = which
	        _result.target = target
	        _result.ctrlKey = ctrlKey
	        _result.altKey = altKey
	
	        for (_source = bindingOptions, _keys = Object.keys(_source), _l = _keys.length, _i = 0; _i < _l; _i++) {
	            _key = _keys[_i];
	            _result[_key] = _source[_key];
	        }
	
	        var value = getValue.call(node, _result);
	
	        if (!is(value, previousValue)) {
	            set(object, key, value, {
	                fromNode: true,
	                // the following properties are needed to avoid circular changes
	                // they are used at objectHandler
	                changedNode: node,
	                onChangeValue: value,
	                binder: binder
	            });
	        }
	    };
	}
	//# sourceMappingURL=_createnodehandler.js.map

/***/ },
/* 376 */
/***/ function(module, exports) {

	'use strict';
	
	// returns a function which is called when property value is changed
	module.exports = createObjectHandler;
	function createObjectHandler(_ref) {
	    var node = _ref.node,
	        propDef = _ref.propDef,
	        binder = _ref.binder,
	        bindingOptions = _ref.bindingOptions;
	
	    return function objectHandler() {
	        var eventOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	        var value = propDef.value;
	        var onChangeValue = eventOptions.onChangeValue,
	            changedNode = eventOptions.changedNode,
	            evtBinder = eventOptions.binder;
	        var setValue = binder.setValue;
	        // dirty hack for https://github.com/matreshkajs/matreshka/issues/19
	
	        var dirtyHackValue = onChangeValue === 'string' && typeof value === 'number' ? '' + value : value;
	
	        // don't call setValue if a property is changed via getValue of the same binder
	        if (changedNode === node && onChangeValue === dirtyHackValue && evtBinder === binder) {
	            return;
	        }
	
	        var _keys,
	            _l,
	            _i,
	            _source,
	            _key,
	            _result = {};
	
	        _result.value = value
	
	        for (_source = bindingOptions, _keys = Object.keys(_source), _l = _keys.length, _i = 0; _i < _l; _i++) {
	            _key = _keys[_i];
	            _result[_key] = _source[_key];
	        }
	
	        setValue.call(node, value, _result);
	    };
	}
	//# sourceMappingURL=_createobjecthandler.js.map

/***/ },
/* 377 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var getBindingKey = __webpack_require__(378);
	
	var bindNode = __webpack_require__(367);
	
	var lookForBinder = __webpack_require__(309);
	
	// a binder for instance of Attr
	var attributeBinder = {
	    setValue: function (value) {
	        this.value = value;
	    }
	};
	
	// adds binding for an attribute
	// its logic is much harder than for text node
	// check out imported modules for more info
	module.exports = processAttribute;
	function processAttribute(_ref) {
	    var node = _ref.node,
	        attribute = _ref.attribute,
	        object = _ref.object,
	        eventOptions = _ref.eventOptions;
	    var name = attribute.name,
	        value = attribute.value;
	    var type = node.type;
	    // get a key which will be actually bound to an attribute
	    // getBindingKey analyzes given value, creates computable property and returns its key
	
	    var key = getBindingKey({
	        object: object,
	        text: value
	    });
	    var probablyValueInput = name === 'value' && type !== 'checkbox' && type !== 'radio';
	    var probablyCheckableInput = name === 'checked' && (type === 'checkbox' || type === 'radio');
	
	    var defaultBinder = void 0;
	
	    if (probablyValueInput || probablyCheckableInput) {
	        defaultBinder = lookForBinder(node);
	    }
	
	    if (defaultBinder) {
	        // if deault binder is found then this is default HTML5 form element
	        // remove the attribute and use found binder
	        node.removeAttribute(name);
	        bindNode(object, key, node, defaultBinder, eventOptions);
	    } else {
	        // simply bind an attribute
	        bindNode(object, key, attribute, attributeBinder, eventOptions);
	    }
	}
	//# sourceMappingURL=index.js.map

/***/ },
/* 378 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var parserData = __webpack_require__(349);
	
	var defineHiddenContentProperty = __webpack_require__(379);
	
	// analyzes string and returns only one key which will be actually bound to an attribute
	module.exports = getBindingKey;
	function getBindingKey(_ref) {
	    var object = _ref.object,
	        text = _ref.text;
	    var strictBindingReg = parserData.strictBindingReg,
	        bindingReg = parserData.bindingReg;
	
	    var keys = [];
	
	    var execResult = void 0;
	    var key = void 0;
	
	    strictBindingReg.lastIndex = 0;
	    bindingReg.lastIndex = 0;
	
	    // extract keys given in parser brackers
	    // '{{x}} {{y}}' -> ['x', 'y']
	    while (execResult = bindingReg.exec(text)) {
	        keys.push(execResult[1]);
	    }
	
	    if (keys.length === 1 && strictBindingReg.test(text)) {
	        // if there is only one key and if only binding substring is present in a text
	        // in other words '{{x}}' is given instead of '{{x}} {{y}}' or '{{x}}foo'
	        // then don't create computable property and use that key (eg 'x') for binding
	        key = keys[0];
	    } else {
	        // create hidden computable property
	        key = defineHiddenContentProperty({
	            object: object,
	            keys: keys,
	            text: text
	        });
	    }
	
	    return key;
	}
	//# sourceMappingURL=_getbindingkey.js.map

/***/ },
/* 379 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var calc = __webpack_require__(350);
	
	var parserData = __webpack_require__(349);
	
	var hiddenPropertyPrefix = ('' + Math.random()).replace('0.', 'hidden');
	var hiddenPropertyIndex = 0;
	
	// defines hiden (without accessors) computed property
	// that dependent on given properties ('keys') as text template describes
	// for example if text='{{x}} blah {{y}}', x='foo', y='bar'
	// then the new property should have value 'foo blah bar'
	module.exports = defineHiddenContentProperty;
	function defineHiddenContentProperty(_ref) {
	    var object = _ref.object,
	        keys = _ref.keys,
	        text = _ref.text;
	
	    var key = '' + hiddenPropertyPrefix + hiddenPropertyIndex;
	    var regs = {};
	    var escLeftBracket = parserData.escLeftBracket,
	        escRightBracket = parserData.escRightBracket;
	
	
	    hiddenPropertyIndex += 1;
	
	    // create and cache regular expressions which will help us to
	    // change target property value quickly when sources are changed
	    // TODO: We need better parser!
	    for (var i = 0; i < keys.length; i++) {
	        regs[keys[i]] = new RegExp(escLeftBracket + '\\s*' + keys[i] + '\\s*' + escRightBracket, 'g');
	    }
	
	    calc(object, key, keys, function calcHandler() {
	        var value = text;
	
	        // replace things like {{x}} by actual values
	        for (var _i = 0; _i < keys.length; _i++) {
	            value = value.replace(regs[keys[_i]], arguments[_i]);
	        }
	
	        return value;
	    }, {
	        isTargetPropertyHidden: true,
	        debounceCalc: false
	    });
	
	    return key;
	}
	//# sourceMappingURL=_definehiddencontentproperty.js.map

/***/ },
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var defs = __webpack_require__(319);
	
	var matreshkaError = __webpack_require__(325);
	
	// checks is item already rendered in an array
	// selfDef is given instead of itself (array) for perf optimisation
	module.exports = checkAlreadyRendered;
	function checkAlreadyRendered(_ref) {
	    var item = _ref.item,
	        selfDef = _ref.selfDef;
	
	    var itemDef = defs.get(item);
	    var selfId = selfDef.id;
	
	    // if item object is defined in object defs
	
	    if (itemDef) {
	        var renderedInArrays = itemDef.renderedInArrays;
	
	        // if item's node is already rendered for an array
	        // then throw an error
	
	        if (renderedInArrays && renderedInArrays[selfId]) {
	            throw matreshkaError('array:add_render_twice');
	        }
	    }
	}
	//# sourceMappingURL=checkalreadyrendered.js.map

/***/ },
/* 381 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var renderItemNode = __webpack_require__(347);
	
	var triggerOne = __webpack_require__(320);
	
	var checkAlreadyRendered = __webpack_require__(380);
	
	// this function renders inserted items if possible when unshift or push method is called
	module.exports = processUnshift;
	function processUnshift(_ref) {
	    var self = _ref.self,
	        selfDef = _ref.selfDef,
	        eventOptions = _ref.eventOptions,
	        container = _ref.container;
	    var added = eventOptions.added,
	        silent = eventOptions.silent;
	
	    // iterate over all added items in opposite order
	
	    for (var i = added.length - 1; i + 1; i--) {
	        var item = added[i];
	        if (item && typeof item === 'object') {
	            // if a node of an item is already rendered then throw an error
	            checkAlreadyRendered({
	                item: item,
	                selfDef: selfDef
	            });
	
	            var _renderItemNode = renderItemNode({
	                selfDef: selfDef,
	                self: self,
	                item: item,
	                eventOptions: eventOptions
	            }),
	                node = _renderItemNode.node,
	                itemEventOptions = _renderItemNode.itemEventOptions;
	
	            if (node) {
	                if (container.firstChild) {
	                    container.insertBefore(node, container.firstChild);
	                } else {
	                    container.appendChild(node);
	                }
	
	                if (!silent) {
	                    triggerOne(item, 'afterrender', itemEventOptions);
	                }
	            }
	        }
	    }
	}
	//# sourceMappingURL=processunshift.js.map

/***/ },
/* 382 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var renderItemNode = __webpack_require__(347);
	
	var triggerOne = __webpack_require__(320);
	
	var defs = __webpack_require__(319);
	
	var matreshkaError = __webpack_require__(325);
	
	var getAlreadyRendered = __webpack_require__(383);
	
	// this function renders inserted items if possible when recreate method is called
	module.exports = processRecreate;
	function processRecreate(_ref) {
	    var self = _ref.self,
	        selfDef = _ref.selfDef,
	        eventOptions = _ref.eventOptions,
	        container = _ref.container;
	    var removed = eventOptions.removed,
	        silent = eventOptions.silent;
	    var selfId = selfDef.id;
	
	    // iterate over removed items and remove their nodes
	
	    for (var _target = removed, _index = 0, item, _l = _target.length; item = _target[_index], _index < _l; _index++) {
	        var itemDef = defs.get(item);
	
	        if (itemDef) {
	            var renderedInArrays = itemDef.renderedInArrays;
	
	            var node = renderedInArrays && renderedInArrays[selfId];
	            if (node) {
	                delete itemDef.renderedInArrays[selfId];
	                container.removeChild(node);
	            }
	        }
	    }
	
	    var alreadyRenderedMap = {};
	
	    // iterate over all items
	    // the following approach allows to throw an error when two added objects are the same
	    // (not only compare existing items with old ones)
	
	    for (var _target2 = self, _index2 = 0, item, _l2 = _target2.length; item = _target2[_index2], _index2 < _l2; _index2++) {
	        if (item && typeof item === 'object') {
	            var itemDef = defs.get(item);
	            var alreadyRenderedNode = void 0;
	
	            if (itemDef) {
	                alreadyRenderedNode = getAlreadyRendered({
	                    item: item,
	                    selfDef: selfDef
	                });
	            }
	
	            if (alreadyRenderedNode) {
	                // if an item is already rendered (old item)
	                if (itemDef.id in alreadyRenderedMap) {
	                    // if an item is rendered twice throw an error
	                    throw matreshkaError('array:add_render_twice');
	                }
	
	                alreadyRenderedMap[itemDef.id] = true;
	
	                container.appendChild(alreadyRenderedNode);
	            } else {
	                // this is newly added item
	                var _renderItemNode = renderItemNode({
	                    selfDef: selfDef,
	                    self: self,
	                    item: item,
	                    eventOptions: eventOptions
	                }),
	                    node = _renderItemNode.node,
	                    itemEventOptions = _renderItemNode.itemEventOptions;
	
	                if (node) {
	                    // itemDef is defined at renderItemNode if not defined before
	                    // reload this variable
	                    itemDef = itemDef || defs.get(item);
	
	                    if (itemDef.id in alreadyRenderedMap) {
	                        // if newly added item is rendered twice throw an error
	                        throw matreshkaError('array:add_render_twice');
	                    }
	
	                    alreadyRenderedMap[itemDef.id] = true;
	
	                    container.appendChild(node);
	
	                    if (!silent) {
	                        triggerOne(item, 'afterrender', itemEventOptions);
	                    }
	                }
	            }
	        }
	    }
	}
	//# sourceMappingURL=processrecreate.js.map

/***/ },
/* 383 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var defs = __webpack_require__(319);
	
	// returns already rendered node of an object in given array
	// selfDef is given instead of  itself (array) for perf optimisation
	module.exports = getAlreadyRendered;
	function getAlreadyRendered(_ref) {
	    var item = _ref.item,
	        selfDef = _ref.selfDef;
	
	    var itemDef = defs.get(item);
	    var selfId = selfDef.id;
	
	    // if item object is defined in object defs
	
	    if (itemDef) {
	        var renderedInArrays = itemDef.renderedInArrays;
	
	        // if item's node is already rendered for an array then return it
	
	        if (renderedInArrays && renderedInArrays[selfId]) {
	            return renderedInArrays[selfId];
	        }
	    }
	
	    return undefined;
	}
	//# sourceMappingURL=getalreadyrendered.js.map

/***/ },
/* 384 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var getAlreadyRendered = __webpack_require__(383);
	
	// this function gets called when array is sorted (via sort, orderBy or reverse)
	module.exports = processSort;
	function processSort(_ref) {
	    var self = _ref.self,
	        selfDef = _ref.selfDef,
	        container = _ref.container;
	    // just re-insert rendered nodes in new order
	
	    for (var _target = self, _index = 0, item, _l = _target.length; item = _target[_index], _index < _l; _index++) {
	        if (item && typeof item === 'object') {
	            var node = getAlreadyRendered({
	                item: item,
	                selfDef: selfDef
	            });
	
	            if (node) {
	                container.appendChild(node);
	            }
	        }
	    }
	}
	//# sourceMappingURL=processsort.js.map

/***/ },
/* 385 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var defs = __webpack_require__(319);
	
	// this function removes DOM nodes of removed items
	// called on splice, pull, pop and shift
	module.exports = processRemove;
	function processRemove(_ref) {
	    var selfDef = _ref.selfDef,
	        eventOptions = _ref.eventOptions,
	        container = _ref.container;
	    var removed = eventOptions.removed;
	    var selfId = selfDef.id;
	
	    for (var _target = removed, _index = 0, item, _l = _target.length; item = _target[_index], _index < _l; _index++) {
	        if (item && typeof item === 'object') {
	            var itemDef = defs.get(item);
	            if (itemDef) {
	                var renderedInArrays = itemDef.renderedInArrays;
	
	                var node = renderedInArrays && renderedInArrays[selfId];
	                if (node) {
	                    delete renderedInArrays[selfId];
	                    container.removeChild(node);
	                }
	            }
	        }
	    }
	}
	//# sourceMappingURL=processremove.js.map

/***/ },
/* 386 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var getAlreadyRendered = __webpack_require__(383);
	
	var renderItemNode = __webpack_require__(347);
	
	var triggerOne = __webpack_require__(320);
	
	// this function re-inserts rendered DOM nodes of items
	// if they are rendered and forceRerender is falsy
	// and renders array items from scratch if they aren't rendered yet or forceRerender is truthy
	module.exports = processRerender;
	function processRerender(_ref) {
	    var self = _ref.self,
	        selfDef = _ref.selfDef,
	        eventOptions = _ref.eventOptions,
	        container = _ref.container;
	    var forceRerender = eventOptions.forceRerender,
	        silent = eventOptions.silent;
	
	    // iterate over all items
	
	    for (var i = 0; i < self.length; i++) {
	        var item = self[i];
	        if (item && typeof item === 'object') {
	            var alreadyRenderedNode = getAlreadyRendered({
	                item: item,
	                selfDef: selfDef
	            });
	
	            // if item is already rendered and forceRerender is falsy then re-insert DOM node
	            // go to the next cycle iteration then
	            if (!forceRerender && alreadyRenderedNode) {
	                container.appendChild(alreadyRenderedNode);
	                continue;
	            }
	
	            // node removal is called when an item is rendered
	            // and forceRerender is truty
	            if (alreadyRenderedNode) {
	                if (container.contains(alreadyRenderedNode)) {
	                    container.removeChild(alreadyRenderedNode);
	                }
	            }
	
	            // render new node
	
	            var _renderItemNode = renderItemNode({
	                selfDef: selfDef,
	                self: self,
	                item: item,
	                eventOptions: eventOptions
	            }),
	                node = _renderItemNode.node,
	                itemEventOptions = _renderItemNode.itemEventOptions;
	
	            if (node) {
	                container.appendChild(node);
	
	                if (!silent) {
	                    triggerOne(item, 'afterrender', itemEventOptions);
	                }
	            }
	        }
	    }
	}
	//# sourceMappingURL=processrerender.js.map

/***/ },
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var renderItemNode = __webpack_require__(347);
	
	var triggerOne = __webpack_require__(320);
	
	var checkAlreadyRendered = __webpack_require__(380);
	
	var getAlreadyRendered = __webpack_require__(383);
	
	// the function handles rendering of added items passed as third and rest arguments to splice method
	module.exports = processSpliceAdd;
	function processSpliceAdd(_ref) {
	    var self = _ref.self,
	        selfDef = _ref.selfDef,
	        eventOptions = _ref.eventOptions,
	        container = _ref.container;
	    var added = eventOptions.added,
	        silent = eventOptions.silent;
	
	    var nextIndex = self.lastIndexOf(added[added.length - 1]) + 1;
	    var next = self[nextIndex];
	    var nextNode = void 0;
	
	    // get a node of an item which is placed next to the last added item
	    // it is needed to insert newly rendered items before
	    if (next && typeof next === 'object') {
	        nextNode = getAlreadyRendered({
	            item: next,
	            selfDef: selfDef
	        });
	    }
	
	    for (var _target = added, _index = 0, item, _l = _target.length; item = _target[_index], _index < _l; _index++) {
	        if (item && typeof item === 'object') {
	            // throw an error if node of an item is alread rendered
	            checkAlreadyRendered({
	                item: item,
	                selfDef: selfDef
	            });
	
	            var _renderItemNode = renderItemNode({
	                selfDef: selfDef,
	                self: self,
	                item: item,
	                eventOptions: eventOptions
	            }),
	                node = _renderItemNode.node,
	                itemEventOptions = _renderItemNode.itemEventOptions;
	
	            if (node) {
	                if (nextNode) {
	                    container.insertBefore(node, nextNode);
	                } else {
	                    container.appendChild(node);
	                }
	
	                if (!silent) {
	                    triggerOne(item, 'afterrender', itemEventOptions);
	                }
	            }
	        }
	    }
	}
	//# sourceMappingURL=processspliceadd.js.map

/***/ },
/* 388 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var reportModified = __webpack_require__(344);
	
	var matreshkaError = __webpack_require__(325);
	
	// removes array item by given index
	function shift(arr, index) {
	    for (var i = index; i < arr.length; i++) {
	        arr[i] = arr[i + 1];
	    }
	    delete arr[arr.length - 1];
	    arr.length -= 1;
	}
	
	// finds array item that equals to given value and removes it
	// returns removed value
	function pullByValue(arr, value) {
	    for (var i = 0; i < arr.length; i++) {
	        if (arr[i] === value) {
	            shift(arr, i);
	            return value;
	        }
	    }
	
	    return undefined;
	}
	
	// removes array item by given index if the index is not over array length
	// returns removed value
	function pullByIndex(arr, index) {
	    if (index < arr.length) {
	        var value = arr[index];
	        shift(arr, index);
	        return value;
	    }
	
	    return undefined;
	}
	
	// removes an array item by index (if number is given) or by value (if object is given)
	module.exports = pull;
	function pull(toRemove) {
	    var eventOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    var typeofToRemove = typeof toRemove;
	    var removed = void 0;
	
	    if (toRemove && typeofToRemove === 'object') {
	        removed = pullByValue(this, toRemove);
	    } else if (typeofToRemove === 'number') {
	        removed = pullByIndex(this, toRemove);
	    } else {
	        throw matreshkaError('pull:to_remove_type', { toRemove: toRemove });
	    }
	
	    if (typeof removed !== 'undefined') {
	        var _keys,
	            _l,
	            _i,
	            _source,
	            _key,
	            _result = {};
	
	        _result.method = 'pull'
	        _result.self = this
	        _result.added = []
	        _result.removed = [removed]
	
	        for (_source = eventOptions, _keys = Object.keys(_source), _l = _keys.length, _i = 0; _i < _l; _i++) {
	            _key = _keys[_i];
	            _result[_key] = _source[_key];
	        }
	
	        reportModified(this, _result);
	    }
	
	    return removed;
	}
	//# sourceMappingURL=pull.js.map

/***/ },
/* 389 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var initMK = __webpack_require__(318);
	
	var reportModified = __webpack_require__(344);
	
	var updateTracked = __webpack_require__(390);
	
	// recreates an array
	module.exports = recreate;
	function recreate() {
	    var givenNewItems = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	    var eventOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    var def = initMK(this);
	    var itemMediator = def.itemMediator;
	
	    var newLength = givenNewItems.length;
	    var oldLength = this.length;
	    var lengthDiff = oldLength - newLength;
	    var was = this.toJSON(false);
	    var trackBy = this.trackBy;
	    var skipItemMediator = eventOptions.skipItemMediator,
	        silent = eventOptions.silent,
	        dontRender = eventOptions.dontRender;
	
	    var added = void 0;
	    var removed = void 0;
	    var newItems = void 0;
	
	    if (trackBy) {
	        // if trackBy property is given then update givenNewItems array
	        newItems = updateTracked({
	            arr: this,
	            givenNewItems: givenNewItems,
	            trackBy: trackBy
	        });
	    } else {
	        // if trackBy is not given then use given new items as is
	        newItems = givenNewItems;
	    }
	
	    // call item mediator for every new item (but don't modify passed newItems)
	    if (itemMediator && !skipItemMediator) {
	        var toMediate = newItems;
	        newItems = Array(newLength);
	        for (var i = 0; i < newLength; i++) {
	            newItems[i] = itemMediator(toMediate[i], i);
	        }
	    }
	
	    // update array indexes with new values
	    for (var _i = 0; _i < newLength; _i++) {
	        this[_i] = newItems[_i];
	    }
	
	    // remove old items that is out of new length
	    for (var _i2 = 0; _i2 < lengthDiff; _i2++) {
	        delete this[_i2 + newLength];
	    }
	
	    // update length
	    this.length = newLength;
	
	    if (silent && dontRender) {
	        return this;
	    }
	
	    // create an array of removed items
	    // TODO: Optimize creation of "added" and "removed" options in recreate method
	    // ... (do not use indexOf)
	    if (newLength) {
	        if (oldLength) {
	            removed = [];
	            for (var _i3 = 0; _i3 < oldLength; _i3++) {
	                if (!~newItems.indexOf(was[_i3])) {
	                    removed.push(was[_i3]);
	                }
	            }
	        } else {
	            removed = [];
	        }
	    } else {
	        removed = was;
	    }
	
	    // create an array of added items
	    if (oldLength) {
	        if (newLength) {
	            added = [];
	            for (var _i4 = 0; _i4 < newLength; _i4++) {
	                if (!~was.indexOf(newItems[_i4])) {
	                    added.push(newItems[_i4]);
	                }
	            }
	        } else {
	            added = [];
	        }
	    } else {
	        added = newItems;
	    }
	
	    var _keys,
	        _l,
	        _i5,
	        _source,
	        _key,
	        _result = {};
	
	    _result.added = added
	    _result.removed = removed
	    _result.method = 'recreate'
	    _result.self = this
	
	    for (_source = eventOptions, _keys = Object.keys(_source), _l = _keys.length, _i5 = 0; _i5 < _l; _i5++) {
	        _key = _keys[_i5];
	        _result[_key] = _source[_key];
	    }
	
	    reportModified(this, _result);
	
	    return this;
	}
	//# sourceMappingURL=index.js.map

/***/ },
/* 390 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var updateObject = __webpack_require__(391);
	
	// the function gets called to update new items passed to recreate method when trackBy is present
	// TODO: Throw an error when two or more items of one array has the same value of trackBy
	module.exports = updateTracked;
	function updateTracked(_ref) {
	    var givenNewItems = _ref.givenNewItems,
	        arr = _ref.arr,
	        trackBy = _ref.trackBy;
	
	    var newLength = givenNewItems.length;
	    var oldLength = arr.length;
	    var newItems = Array(newLength);
	
	    if (trackBy === '$index') {
	        // simply update items with the same index
	        for (var i = 0; i < newLength; i++) {
	            var item = arr[i];
	            var newItem = givenNewItems[i];
	
	            if (item && typeof item === 'object' && newItem && typeof newItem === 'object') {
	                newItems[i] = updateObject(item, newItem);
	            } else {
	                newItems[i] = newItem;
	            }
	        }
	    } else {
	        var trackMap = {};
	
	        // fill trackMap object where keys are values of trackBy and values are corresponding items
	        for (var _i = 0; _i < oldLength; _i++) {
	            var _item = arr[_i];
	
	            if (_item && typeof _item === 'object') {
	                if (trackBy in _item) {
	                    trackMap[_item[trackBy]] = _item;
	                }
	            }
	        }
	
	        for (var _i2 = 0; _i2 < newLength; _i2++) {
	            var _newItem = givenNewItems[_i2];
	
	            if (_newItem && typeof _newItem === 'object') {
	                var _item2 = arr[_i2];
	
	                if (_item2 && typeof _item2 === 'object' && _newItem[trackBy] in trackMap) {
	                    // if an item exists at trackMap then update it
	                    newItems[_i2] = updateObject(trackMap[_newItem[trackBy]], _newItem);
	                } else {
	                    // if not then use new value as is
	                    newItems[_i2] = _newItem;
	                }
	            } else {
	                // newItem is not an object
	                newItems[_i2] = _newItem;
	            }
	        }
	    }
	
	    return newItems;
	}
	//# sourceMappingURL=_updatetracked.js.map

/***/ },
/* 391 */
/***/ function(module, exports) {

	"use strict";
	
	// updates one single object by new data
	// for Matreshka.Array instance call recreate method
	// for Matreshka.Object instance call setData method
	// for other objects just extend them by properties of data parameter
	module.exports = updateObject;
	function updateObject(instance, data) {
	    if (instance.isMatreshkaArray) {
	        instance.recreate(data);
	    } else if (instance.isMatreshkaObject) {
	        // QUESTION: Is it OK to just extend but not replace instance data?
	        instance.setData(data);
	    } else {
	        for (var _target = data, _keys = Object.keys(_target), _i = 0, key, value, _l = _keys.length; (key = _keys[_i], value = _target[key]), _i < _l; _i++) {
	            instance[key] = value;
	        }
	    }
	
	    return instance;
	}
	//# sourceMappingURL=_updateobject.js.map

/***/ },
/* 392 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var processRendering = __webpack_require__(345);
	
	// rerenders not rendered items in an array
	// force rerender when forceRerender event option is truthy
	module.exports = rerender;
	function rerender() {
	    var eventOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var _renderIfPossible = this.renderIfPossible,
	        renderIfPossible = _renderIfPossible === undefined ? true : _renderIfPossible;
	
	    if (renderIfPossible) {
	        var _keys,
	            _l,
	            _i,
	            _source,
	            _key,
	            _result = {};
	
	        _result.method = 'rerender'
	        _result.added = []
	        _result.removed = []
	
	        for (_source = eventOptions, _keys = Object.keys(_source), _l = _keys.length, _i = 0; _i < _l; _i++) {
	            _key = _keys[_i];
	            _result[_key] = _source[_key];
	        }
	
	        processRendering({
	            self: this,
	            eventOptions: _result
	        });
	    }
	
	    return this;
	}
	//# sourceMappingURL=rerender.js.map

/***/ },
/* 393 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var initMK = __webpack_require__(318);
	
	var matreshkaError = __webpack_require__(325);
	
	var bindNode = __webpack_require__(367);
	
	var triggerOne = __webpack_require__(320);
	
	var getNodes = __webpack_require__(368);
	
	// restores Matreshka.Array from external nodes
	module.exports = restore;
	function restore(selector) {
	    var _this = this;
	
	    var eventOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    var selfDef = initMK(this);
	    var Model = this.Model;
	    var silent = eventOptions.silent;
	
	    var newItems = [];
	    var nodes = void 0;
	
	    if (typeof selector === 'string') {
	        // get nodes by selector
	        nodes = getNodes(this, selector);
	    } else {
	        // get nodes from rendering container
	        var container = this.nodes.container || this.nodes.sandbox;
	
	        if (container) {
	            nodes = container.children;
	        } else {
	            // no container is bound, throw an error
	            throw matreshkaError('restore:no_nodes');
	        }
	    }
	
	    // recreate an array but don't render newly added items
	    for (var _target = nodes, index = 0, node, _l = _target.length; node = _target[index], index < _l; index++) {
	        var _itemDef$renderedInAr;
	
	        var item = Model ? new Model({}, _this, index) : {}; // create new item
	        var bindRenderedAsSandbox = item.bindRenderedAsSandbox;
	
	        var itemDef = initMK(item);
	
	        itemDef.renderedInArrays = (_itemDef$renderedInAr = {}, _itemDef$renderedInAr[selfDef.id] = node, _itemDef$renderedInAr);
	
	        if (bindRenderedAsSandbox !== false) {
	            bindNode(item, 'sandbox', node, null, eventOptions);
	        }
	
	        if (!silent) {
	            // trigger needed events
	            var itemEventOptions = {
	                node: node,
	                self: item,
	                parentArray: _this
	            };
	
	            var onRender = item.onRender;
	            var onItemRender = _this.onItemRender;
	
	
	            if (onRender) {
	                onRender.call(item, itemEventOptions);
	            }
	
	            if (onItemRender) {
	                onItemRender.call(_this, item, itemEventOptions);
	            }
	
	            triggerOne(item, 'render', itemEventOptions);
	
	            // call afterrender immediately because a node already exists in DOM tree
	            triggerOne(item, 'afterrender', itemEventOptions);
	        }
	
	        newItems.push(item);
	    }
	
	    var _keys,
	        _l2,
	        _i,
	        _source,
	        _key,
	        _result = {};
	
	    _result.dontRender = true
	
	    for (_source = eventOptions, _keys = Object.keys(_source), _l2 = _keys.length, _i = 0; _i < _l2; _i++) {
	        _key = _keys[_i];
	        _result[_key] = _source[_key];
	    }
	
	    return this.recreate(newItems, _result);
	}
	//# sourceMappingURL=restore.js.map

/***/ },
/* 394 */
/***/ function(module, exports) {

	'use strict';
	
	// converts Matreshka.Array instance to ordinary array
	module.exports = toJSON;
	function toJSON() {
	    var recursive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	
	    var result = new Array(this.length);
	
	    for (var _target = this, index = 0, item, _l = _target.length; item = _target[index], index < _l; index++) {
	        // when recursive is true and when an item has toJSON method then call it recusively
	        if (recursive && item && typeof item.toJSON === 'function') {
	            result[index] = item.toJSON(true);
	        } else {
	            result[index] = item;
	        }
	    }
	
	    return result;
	}
	//# sourceMappingURL=tojson.js.map

/***/ },
/* 395 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var createPseudoNativeMethod = __webpack_require__(396);
	
	var concat = __webpack_require__(404);
	
	var keys = __webpack_require__(405);
	
	var values = __webpack_require__(406);
	
	var entries = __webpack_require__(407);
	
	var splitBySpaceReg = /\s+/;
	var methods = { concat: concat, keys: keys, values: values, entries: entries };
	
	'push pop unshift shift sort reverse splice map filter slice every some reduce reduceRight\nforEach join indexOf lastIndexOf copyWithin fill includes find findIndex'.split(splitBySpaceReg).forEach(function (name) {
	    methods[name] = createPseudoNativeMethod(name);
	});
	
	'push pop unshift shift sort reverse splice copyWithin fill'.split(splitBySpaceReg).forEach(function (name) {
	    methods[name + '_'] = createPseudoNativeMethod(name, true);
	});
	
	module.exports = methods;
	//# sourceMappingURL=index.js.map

/***/ },
/* 396 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var toMatreshkaArray = __webpack_require__(397);
	
	var createSortingMethod = __webpack_require__(398);
	
	var createRemovingMethod = __webpack_require__(399);
	
	var createAddingMethod = __webpack_require__(400);
	
	var createSplice = __webpack_require__(401);
	
	var createCopyWithin = __webpack_require__(402);
	
	var createFill = __webpack_require__(403);
	
	var apply = __webpack_require__(321);
	
	var matreshkaError = __webpack_require__(325);
	
	var arrayPrototype = Array.prototype;
	
	// creates pseudo native method and returns it (push, push_, sort, sort_...)
	module.exports = createPseudoNativeMethod;
	function createPseudoNativeMethod(name) {
	    var hasOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	    switch (name) {
	        case 'forEach':
	            return function pseudoNativeMethod(callback, thisArg) {
	                arrayPrototype[name].call(this, callback, thisArg);
	                // return this for nicer chain calls
	                return this;
	            };
	        case 'map':
	        case 'filter':
	        case 'slice':
	            // TODO: Improve readability of pseudoNativeMethod, arguments "a, b" look not good
	            return function pseudoNativeMethod(a, b) {
	                return toMatreshkaArray(arrayPrototype[name].call(this, a, b));
	            };
	        case 'every':
	        case 'some':
	        case 'findIndex':
	        case 'find':
	            return function pseudoNativeMethod(callback, thisArg) {
	                var originalMethod = arrayPrototype[name];
	
	                /* istanbul ignore if  */
	                if (typeof originalMethod !== 'function') {
	                    throw matreshkaError('array:nonexistent_method', { method: name });
	                }
	                return originalMethod.call(this, callback, thisArg);
	            };
	        case 'join':
	            return function pseudoNativeMethod() {
	                var separator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ',';
	
	                return arrayPrototype[name].call(this, separator);
	            };
	        case 'indexOf':
	        case 'lastIndexOf':
	        case 'includes':
	            return function pseudoNativeMethod(searchElement, fromIndex) {
	                var originalMethod = arrayPrototype[name];
	
	                /* istanbul ignore if  */
	                if (typeof originalMethod !== 'function') {
	                    throw matreshkaError('array:nonexistent_method', { method: name });
	                }
	
	                if (typeof fromIndex === 'undefined') {
	                    return originalMethod.call(this, searchElement);
	                }
	
	                return originalMethod.call(this, searchElement, fromIndex);
	            };
	        case 'reduce':
	        case 'reduceRight':
	            return function pseudoNativeMethod() {
	                return apply(arrayPrototype[name], this, arguments);
	            };
	        case 'sort':
	        case 'reverse':
	            return createSortingMethod(name, hasOptions);
	        case 'pop':
	        case 'shift':
	            return createRemovingMethod(name, hasOptions);
	        case 'push':
	        case 'unshift':
	            return createAddingMethod(name, hasOptions);
	        case 'splice':
	            return createSplice(hasOptions);
	        case 'copyWithin':
	            return createCopyWithin(hasOptions);
	        case 'fill':
	            return createFill(hasOptions);
	        default:
	            return undefined;
	    }
	}
	//# sourceMappingURL=createpseudonativemethod.js.map

/***/ },
/* 397 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// converts array-like to Matreshka.Array instance
	module.exports = toMatreshkaArray;
	function toMatreshkaArray(arrayLike) {
	    // fix circular dependency issue
	    var MatreshkaArray = __webpack_require__(312);
	
	    var result = new MatreshkaArray(arrayLike.length);
	
	    for (var _target = arrayLike, index = 0, item, _l = _target.length; item = _target[index], index < _l; index++) {
	        result[index] = item;
	    }
	
	    return result;
	}
	//# sourceMappingURL=_tomatreshkaarray.js.map

/***/ },
/* 398 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var initMK = __webpack_require__(318);
	
	var reportModified = __webpack_require__(344);
	
	// creates sorting method and returns it (sort, reverse, sort_, reverse_)
	module.exports = createSortingMethod;
	function createSortingMethod(name, hasOptions) {
	    return function pseudoNativeMethod(sortCallback) {
	        if (this.length < 2) return this;
	        initMK(this);
	
	        var givenEventOptions = hasOptions ? arguments[arguments.length - 1] : null;
	        var method = Array.prototype[name];
	
	        var eventOptions = {
	            method: name,
	            self: this,
	            added: [],
	            removed: []
	        };
	
	        // call original method
	        if (name === 'sort' && typeof sortCallback === 'function') {
	            method.call(this, sortCallback);
	        } else {
	            method.call(this);
	        }
	
	        // extend event options by custom event options if they are given
	        if (hasOptions) {
	            if (givenEventOptions && typeof givenEventOptions === 'object') {
	                var _result = eventOptions;
	
	                for (var _source2 = givenEventOptions, _keys2 = Object.keys(_source2), _l2 = _keys2.length, _i2 = 0, _key2; _i2 < _l2; _i2++) {
	                    _key2 = _keys2[_i2];
	                    _result[_key2] = _source2[_key2];
	                }
	            }
	        }
	
	        reportModified(this, eventOptions);
	
	        return this;
	    };
	}
	//# sourceMappingURL=createsortingmethod.js.map

/***/ },
/* 399 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var initMK = __webpack_require__(318);
	
	var reportModified = __webpack_require__(344);
	
	// creates removing method and returns it (pop, shift, pop_, shift_)
	module.exports = createRemovingMethod;
	function createRemovingMethod(name, hasOptions) {
	    return function pseudoNativeMethod(givenEventOptions) {
	        if (!this.length) {
	            return undefined;
	        }
	        initMK(this);
	
	        // call original method
	        var returns = Array.prototype[name].call(this);
	        var eventOptions = {
	            method: name,
	            self: this,
	            added: [],
	            removed: [returns]
	        };
	
	        // extend event options by custom event options if they are given
	        if (hasOptions) {
	            if (givenEventOptions && typeof givenEventOptions === 'object') {
	                var _result = eventOptions;
	
	                for (var _source2 = givenEventOptions, _keys2 = Object.keys(_source2), _l2 = _keys2.length, _i2 = 0, _key2; _i2 < _l2; _i2++) {
	                    _key2 = _keys2[_i2];
	                    _result[_key2] = _source2[_key2];
	                }
	            }
	        }
	
	        reportModified(this, eventOptions);
	
	        return returns;
	    };
	}
	//# sourceMappingURL=createremovingmethod.js.map

/***/ },
/* 400 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var initMK = __webpack_require__(318);
	
	var reportModified = __webpack_require__(344);
	
	// creates methods: push, unshift, push_, unshift_
	module.exports = createAddingMethod;
	function createAddingMethod(name, hasOptions) {
	    return function pseudoNativeMethod() {
	        var _initMK = initMK(this),
	            itemMediator = _initMK.itemMediator;
	        // +hasOptions is converted to 0 or 1 depending on its value (false/true)
	
	
	        var argsLength = arguments.length - +hasOptions;
	        var args = Array(argsLength);
	        var givenEventOptions = hasOptions ? arguments[arguments.length - 1] : null;
	        var useMediator = typeof itemMediator === 'function' && (!givenEventOptions || !givenEventOptions.skipItemMediator);
	        var isPush = name === 'push';
	        var length = this.length;
	
	        // if no arguments are passed
	
	        if (!argsLength) {
	            return length;
	        }
	
	        // convert arguments to array and call item mediator on every item if it's possible
	        for (var i = 0; i < argsLength; i++) {
	            var arg = arguments[i];
	            if (useMediator) {
	                var index = isPush ? i + length : i;
	                args[i] = itemMediator(arg, index);
	            } else {
	                args[i] = arg;
	            }
	        }
	
	        if (isPush) {
	            // insert new items to the end of array
	            for (var _i = 0; _i < argsLength; _i++) {
	                this[length + _i] = args[_i];
	            }
	        } else {
	            // move current items to new indexes
	            for (var _i2 = length - 1; _i2 >= 0; _i2--) {
	                this[argsLength + _i2] = this[_i2];
	            }
	            // insert new items to the begin of array
	            for (var _i3 = 0; _i3 < argsLength; _i3++) {
	                this[_i3] = args[_i3];
	            }
	        }
	
	        // update length
	        length += argsLength;
	        this.length = length;
	
	        var eventOptions = {
	            method: name,
	            self: this,
	            added: args,
	            removed: []
	        };
	
	        // extend event options by custom event options if they are given
	        if (hasOptions) {
	            if (givenEventOptions && typeof givenEventOptions === 'object') {
	                var _result = eventOptions;
	
	                for (var _source2 = givenEventOptions, _keys2 = Object.keys(_source2), _l2 = _keys2.length, _i5 = 0, _key2; _i5 < _l2; _i5++) {
	                    _key2 = _keys2[_i5];
	                    _result[_key2] = _source2[_key2];
	                }
	            }
	        }
	
	        reportModified(this, eventOptions);
	
	        return length;
	    };
	}
	//# sourceMappingURL=createaddingmethod.js.map

/***/ },
/* 401 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var initMK = __webpack_require__(318);
	
	var reportModified = __webpack_require__(344);
	
	var toMatreshkaArray = __webpack_require__(397);
	
	var apply = __webpack_require__(321);
	
	// creates splice or splice_ method and returns it
	// TODO: Improve readability of createSplice function
	module.exports = createSplice;
	function createSplice(hasOptions) {
	    return function pseudoNativeMethod() {
	        var _initMK = initMK(this),
	            itemMediator = _initMK.itemMediator;
	
	        var functionArguments = arguments;
	        var argsLength = functionArguments.length - +hasOptions;
	        var args = Array(argsLength);
	        var givenEventOptions = hasOptions ? functionArguments[functionArguments.length - 1] : null;
	        var useMediator = typeof itemMediator === 'function' && (!givenEventOptions || !givenEventOptions.skipItemMediator);
	        var added = [];
	        var start = args[0];
	        var length = this.length;
	
	
	        start = start < 0 ? length + start : start;
	
	        // convert arguments to array and call item mediator on every new item if it's possible
	        args[0] = functionArguments[0];
	        args[1] = functionArguments[1];
	        for (var i = 2; i < argsLength; i++) {
	            var arg = functionArguments[i];
	            if (useMediator) {
	                args[i] = itemMediator(arg, start + (i - 2));
	            } else {
	                args[i] = arg;
	            }
	
	            added[i - 2] = args[i];
	        }
	
	        // call original method
	        // TODO: Change array manually in splice method for better performance
	        var returns = apply(Array.prototype.splice, this, args);
	        // removed items mean returned items
	        var removed = returns;
	
	        // if something is added or removed
	        if (added.length || removed.length) {
	            var eventOptions = {
	                added: added,
	                removed: removed,
	                method: 'splice',
	                self: this
	            };
	
	            // extend event options by custom event options if they are given
	            if (hasOptions) {
	                if (givenEventOptions && typeof givenEventOptions === 'object') {
	                    var _result = eventOptions;
	
	                    for (var _source2 = givenEventOptions, _keys2 = Object.keys(_source2), _l2 = _keys2.length, _i2 = 0, _key2; _i2 < _l2; _i2++) {
	                        _key2 = _keys2[_i2];
	                        _result[_key2] = _source2[_key2];
	                    }
	                }
	            }
	
	            reportModified(this, eventOptions);
	        }
	
	        return toMatreshkaArray(returns);
	    };
	}
	//# sourceMappingURL=createsplice.js.map

/***/ },
/* 402 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var apply = __webpack_require__(321);
	
	var reportModified = __webpack_require__(344);
	
	var matreshkaError = __webpack_require__(325);
	
	module.exports = createCopyWithin;
	function createCopyWithin(hasOptions) {
	    return function copyWithin() {
	        var originalCopyWithin = Array.prototype.copyWithin;
	
	        /* istanbul ignore if  */
	        if (typeof originalCopyWithin !== 'function') {
	            throw matreshkaError('array:nonexistent_method', { method: 'copyWithin' });
	        }
	        // +hasOptions is converted to 0 or 1 depending on its value (false/true)
	        var argsLength = arguments.length - +hasOptions;
	        var args = Array(argsLength);
	        var givenEventOptions = hasOptions ? arguments[arguments.length - 1] : null;
	
	        for (var i = 0; i < argsLength; i++) {
	            args[i] = arguments[i];
	        }
	
	        apply(originalCopyWithin, this, args);
	
	        var eventOptions = {
	            method: 'copyWithin',
	            self: this,
	            added: [],
	            removed: []
	        };
	
	        // extend event options by custom event options if they are given
	        if (hasOptions) {
	            if (givenEventOptions && typeof givenEventOptions === 'object') {
	                var _result = eventOptions;
	
	                for (var _source2 = givenEventOptions, _keys2 = Object.keys(_source2), _l2 = _keys2.length, _i2 = 0, _key2; _i2 < _l2; _i2++) {
	                    _key2 = _keys2[_i2];
	                    _result[_key2] = _source2[_key2];
	                }
	            }
	        }
	
	        reportModified(this, eventOptions);
	
	        return this;
	    };
	}
	//# sourceMappingURL=createcopywithin.js.map

/***/ },
/* 403 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var apply = __webpack_require__(321);
	
	var reportModified = __webpack_require__(344);
	
	var matreshkaError = __webpack_require__(325);
	
	module.exports = createFill;
	function createFill(hasOptions) {
	    return function fill(value) {
	        var originalFill = Array.prototype.fill;
	
	        /* istanbul ignore if  */
	        if (typeof originalFill !== 'function') {
	            throw matreshkaError('array:nonexistent_method', { method: 'fill' });
	        }
	        // +hasOptions is converted to 0 or 1 depending on its value (false/true)
	        var argsLength = arguments.length - +hasOptions;
	        var args = Array(argsLength);
	        var givenEventOptions = hasOptions ? arguments[arguments.length - 1] : null;
	
	        for (var i = 0; i < argsLength; i++) {
	            args[i] = arguments[i];
	        }
	
	        apply(originalFill, this, args);
	
	        var eventOptions = {
	            method: 'fill',
	            self: this,
	            added: [value],
	            removed: []
	        };
	
	        // extend event options by custom event options if they are given
	        if (hasOptions) {
	            if (givenEventOptions && typeof givenEventOptions === 'object') {
	                var _result = eventOptions;
	
	                for (var _source2 = givenEventOptions, _keys2 = Object.keys(_source2), _l2 = _keys2.length, _i2 = 0, _key2; _i2 < _l2; _i2++) {
	                    _key2 = _keys2[_i2];
	                    _result[_key2] = _source2[_key2];
	                }
	            }
	        }
	
	        reportModified(this, eventOptions);
	
	        return this;
	    };
	}
	//# sourceMappingURL=createfill.js.map

/***/ },
/* 404 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var apply = __webpack_require__(321);
	
	// the method works just like Array.prototype.concat but
	// - flattens both Array and Matreshka.Array
	// - returns Matreshka.Array
	module.exports = concat;
	function concat() {
	    // fix circular dependency issue
	    var MatreshkaArray = __webpack_require__(312);
	
	    var args = Array(arguments.length);
	
	    // convert all instances of Matreshka.Array to Array
	
	    // call original concat method
	    for (var _target = arguments, index = 0, arg, _l = _target.length; arg = _target[index], index < _l; index++) {
	        if (arg && typeof arg === 'object' && arg.isMatreshkaArray) {
	            args[index] = arg.toJSON(false);
	        } else {
	            args[index] = arg;
	        }
	    }
	
	    var nativeCallResult = apply(Array.prototype.concat, this.toJSON(false), args);
	
	    // convert returned value to Matreshka.Array
	    var result = new MatreshkaArray();
	
	    for (var _target2 = nativeCallResult, index = 0, item, _l2 = _target2.length; item = _target2[index], index < _l2; index++) {
	        result[index] = item;
	    }
	
	    result.length = nativeCallResult.length;
	
	    return result;
	}
	//# sourceMappingURL=concat.js.map

/***/ },
/* 405 */
/***/ function(module, exports) {

	"use strict";
	
	// returns indexes
	module.exports = keys;
	function keys() {
	    var length = this.length;
	
	    var result = new Array(length);
	
	    for (var i = 0; i < length; i++) {
	        result[i] = i;
	    }
	
	    return result;
	}
	//# sourceMappingURL=keys.js.map

/***/ },
/* 406 */
/***/ function(module, exports) {

	"use strict";
	
	// returns values
	module.exports = values;
	function values() {
	    var length = this.length;
	
	    var result = new Array(length);
	
	    for (var i = 0; i < length; i++) {
	        result[i] = this[i];
	    }
	
	    return result;
	}
	//# sourceMappingURL=values.js.map

/***/ },
/* 407 */
/***/ function(module, exports) {

	"use strict";
	
	// returns pairs like [index, value]
	module.exports = values;
	function values() {
	    var length = this.length;
	
	    var result = new Array(length);
	
	    for (var i = 0; i < length; i++) {
	        result[i] = [i, this[i]];
	    }
	
	    return result;
	}
	//# sourceMappingURL=entries.js.map

/***/ },
/* 408 */
/***/ function(module, exports) {

	"use strict";
	
	// Symbol.iterator of Matreshka.Array instances
	module.exports = matreshkaArrayIterator;
	function matreshkaArrayIterator() {
	    var _this = this;
	
	    var i = 0;
	
	    return {
	        next: function () {
	            if (i > _this.length - 1) {
	                return {
	                    done: true
	                };
	            }
	
	            return {
	                done: false,
	                value: _this[i++] // eslint-disable-line no-plusplus
	            };
	        }
	    };
	}
	//# sourceMappingURL=iterator.js.map

/***/ },
/* 409 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var from = __webpack_require__(410);
	
	var of = __webpack_require__(411);
	
	module.exports = {
	    of: of,
	    from: from
	}; // lol
	//# sourceMappingURL=_staticmembers.js.map

/***/ },
/* 410 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var cheapRecreate = __webpack_require__(342);
	
	// creates a new Matreshka.Array instance from an array-like or iterable object
	module.exports = from;
	function from(arrayLike, mapFn, thisArg) {
	    // allow to inherit this method by child classes
	    // require('./') fixes circular ref issue
	    var ParentClass = typeof this === 'function' ? this : __webpack_require__(312);
	
	    var result = new ParentClass();
	    var length = arrayLike.length;
	    var arrayFrom = Array.from;
	    var newItems = void 0;
	
	    /* istanbul ignore else */
	    if (typeof arrayFrom === 'function') {
	        // if Array.from exist, let it do all the job (work with iterable objects etc)
	        newItems = arrayFrom(arrayLike, mapFn, thisArg);
	    } else {
	        // convert array-like object for older browsers
	        // @IE
	        newItems = Array(length);
	
	        for (var i = 0; i < length; i++) {
	            if (typeof mapFn === 'function') {
	                newItems[i] = mapFn.call(thisArg, arrayLike[i], i, arrayLike);
	            } else {
	                newItems[i] = arrayLike[i];
	            }
	        }
	    }
	
	    return cheapRecreate(result, newItems);
	}
	//# sourceMappingURL=from.js.map

/***/ },
/* 411 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var cheapRecreate = __webpack_require__(342);
	
	// creates a new Matreshka.Array instance with a variable number of arguments,
	// regardless of number or type of the arguments
	module.exports = of;
	function of() {
	    var _arguments = arguments;
	
	    // allow to inherit this method by child classes
	    // require('./') fixes circular ref issue
	    var ParentClass = typeof this === 'function' ? this : __webpack_require__(312);
	
	    var result = new ParentClass();
	    var newItems = Array(arguments.length);
	
	    for (var _target = arguments, index = 0, item, _l = _target.length; item = _target[index], index < _l; index++) {
	        newItems[index] = _arguments[index];
	    }
	
	    return cheapRecreate(result, newItems);
	}
	//# sourceMappingURL=of.js.map

/***/ },
/* 412 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var html = __webpack_require__(413);
	
	var display = __webpack_require__(414);
	
	var className = __webpack_require__(415);
	
	var prop = __webpack_require__(417);
	
	var attr = __webpack_require__(418);
	
	var input = __webpack_require__(304);
	
	var output = __webpack_require__(308);
	
	var textarea = __webpack_require__(305);
	
	var select = __webpack_require__(306);
	
	var progress = __webpack_require__(307);
	
	var text = __webpack_require__(419);
	
	var style = __webpack_require__(420);
	
	var dataset = __webpack_require__(421);
	
	exports.html = html;
	exports.display = display;
	exports.className = className;
	exports.prop = prop;
	exports.attr = attr;
	exports.input = input;
	exports.output = output;
	exports.textarea = textarea;
	exports.select = select;
	exports.progress = progress;
	exports.text = text;
	exports.style = style;
	exports.dataset = dataset;
	//# sourceMappingURL=index.js.map

/***/ },
/* 413 */
/***/ function(module, exports) {

	'use strict';
	
	// returns a binder for innerHTML of an element
	module.exports = html;
	function html(mappingFn) {
	    return {
	        on: 'input', // the event name fires only in contenteditable mode
	        getValue: function () {
	            return this.innerHTML;
	        },
	        setValue: function (value) {
	            var val = typeof mappingFn === 'function' ? mappingFn(value) : value;
	            this.innerHTML = '' + val;
	        }
	    };
	}
	//# sourceMappingURL=html.js.map

/***/ },
/* 414 */
/***/ function(module, exports) {

	'use strict';
	
	//  returns a binder to switch visibility of an element
	module.exports = display;
	function display() {
	    var switcher = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	
	    return {
	        on: null,
	        getValue: function () {
	            var value = this.style.display || window.getComputedStyle(this).getPropertyValue('display');
	            var none = value === 'none';
	            return switcher ? !none : none;
	        },
	        setValue: function (value) {
	            var style = this.style;
	
	            if (switcher) {
	                style.display = value ? '' : 'none';
	            } else {
	                style.display = value ? 'none' : '';
	            }
	        }
	    };
	}
	//# sourceMappingURL=display.js.map

/***/ },
/* 415 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _classlist = __webpack_require__(416);
	
	var toggle = _classlist.toggle;
	var contains = _classlist.contains;
	
	
	// returns a binder for className of an element
	// switcher makes possible to turn property value
	module.exports = className;
	function className(elementClassName) {
	    var switcher = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	
	    return {
	        on: null,
	        getValue: function () {
	            var value = contains(this, elementClassName);
	            return switcher ? value : !value;
	        },
	        setValue: function (value) {
	            toggle(this, elementClassName, switcher ? !!value : !value);
	        }
	    };
	}
	//# sourceMappingURL=classname.js.map

/***/ },
/* 416 */
/***/ function(module, exports) {

	'use strict';
	
	// @IE9
	
	var add = void 0;
	var remove = void 0;
	var contains = void 0; // eslint-disable-line import/no-mutable-exports
	
	/* istanbul ignore else */
	if (window.document.createElement('div').classList) {
	    add = function (node, name) {
	        return node.classList.add(name);
	    };
	    remove = function (node, name) {
	        return node.classList.remove(name);
	    };
	    contains = function (node, name) {
	        return node.classList.contains(name);
	    };
	} else {
	    add = function (node, name) {
	        var re = new RegExp('(^|\\s)' + name + '(\\s|$)', 'g');
	        if (!re.test(node.className)) {
	            node.className = (node.className + ' ' + name).replace(/\s+/g, ' ').replace(/(^ | $)/g, '');
	        }
	    };
	
	    remove = function (node, name) {
	        var re = new RegExp('(^|\\s)' + name + '(\\s|$)', 'g');
	        node.className = node.className.replace(re, '$1').replace(/\s+/g, ' ').replace(/(^ | $)/g, '');
	    };
	
	    contains = function (node, name) {
	        return new RegExp('(\\s|^)' + name + '(\\s|$)').test(node.className);
	    };
	}
	
	var toggle = function (node, name, switcher) {
	    if (switcher) {
	        add(node, name);
	    } else {
	        remove(node, name);
	    }
	};
	
	exports.toggle = toggle;
	exports.contains = contains;
	//# sourceMappingURL=_classlist.js.map

/***/ },
/* 417 */
/***/ function(module, exports) {

	'use strict';
	
	// returns a binder to change properties of an element
	module.exports = prop;
	function prop(propertyName, mappingFn) {
	    return {
	        on: null,
	        getValue: function () {
	            return this[propertyName];
	        },
	        setValue: function (value) {
	            var val = typeof mappingFn === 'function' ? mappingFn(value) : value;
	            // in case when you're trying to set read-only property
	            try {
	                this[propertyName] = val;
	            } catch (e) {
	                // cannot set given property (eg tagName)
	            }
	        }
	    };
	}
	//# sourceMappingURL=prop.js.map

/***/ },
/* 418 */
/***/ function(module, exports) {

	'use strict';
	
	// returns a binder for element attribute
	module.exports = attr;
	function attr(attributeName, mappingFn) {
	    return {
	        on: null,
	        getValue: function () {
	            return this.getAttribute(attributeName);
	        },
	        setValue: function (value) {
	            var val = typeof mappingFn === 'function' ? mappingFn(value) : value;
	            this.setAttribute(attributeName, val);
	        }
	    };
	}
	//# sourceMappingURL=attr.js.map

/***/ },
/* 419 */
/***/ function(module, exports) {

	'use strict';
	
	// returns a binder for textContent of an element
	module.exports = text;
	function text(mappingFn) {
	    return {
	        on: 'input', // the event name fires only in contenteditable mode
	        getValue: function () {
	            return this.textContent;
	        },
	        setValue: function (value) {
	            var val = typeof mappingFn === 'function' ? mappingFn(value) : value;
	            this.textContent = '' + val;
	        }
	    };
	}
	//# sourceMappingURL=text.js.map

/***/ },
/* 420 */
/***/ function(module, exports) {

	'use strict';
	
	// returns a binder for style properties
	module.exports = style;
	function style(property, mappingFn) {
	    return {
	        on: null,
	        getValue: function () {
	            return this.style[property] || window.getComputedStyle(this).getPropertyValue(property);
	        },
	        setValue: function (value) {
	            var val = typeof mappingFn === 'function' ? mappingFn(value) : value;
	            this.style[property] = val;
	        }
	    };
	}
	//# sourceMappingURL=style.js.map

/***/ },
/* 421 */
/***/ function(module, exports) {

	'use strict';
	
	// replace namesLikeThis with names-like-this
	var replacer = function (u) {
	    return '-' + u.toLowerCase();
	};
	var toDashed = function (name) {
	    return 'data-' + name.replace(/([A-Z])/g, replacer);
	};
	
	//  returns a binder for dataset of an element
	// old browsers are also supported @IE9 @IE10
	module.exports = dataset;
	function dataset(prop, mappingFn) {
	    return {
	        on: null,
	        getValue: function () {
	            if (this.dataset) {
	                return this.dataset[prop];
	            }
	
	            return this.getAttribute(toDashed(prop));
	        },
	        setValue: function (value) {
	            var val = typeof mappingFn === 'function' ? mappingFn(value) : value;
	
	            if (this.dataset) {
	                this.dataset[prop] = val;
	            } else {
	                this.setAttribute(toDashed(prop), val);
	            }
	        }
	    };
	}
	//# sourceMappingURL=dataset.js.map

/***/ },
/* 422 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var on = __webpack_require__(423);
	
	var once = __webpack_require__(425);
	
	var onDebounce = __webpack_require__(427);
	
	var off = __webpack_require__(426);
	
	var trigger = __webpack_require__(428);
	
	var calc = __webpack_require__(350);
	
	var bindNode = __webpack_require__(367);
	
	var unbindNode = __webpack_require__(372);
	
	var bindOptionalNode = __webpack_require__(431);
	
	var bindSandbox = __webpack_require__(432);
	
	var parseBindings = __webpack_require__(348);
	
	var select = __webpack_require__(433);
	
	var selectAll = __webpack_require__(434);
	
	var set = __webpack_require__(323);
	
	var remove = __webpack_require__(435);
	
	var instantiate = __webpack_require__(436);
	
	var mediate = __webpack_require__(437);
	
	// the following methods can be used as static methods and as instance methods
	exports.on = on;
	exports.once = once;
	exports.onDebounce = onDebounce;
	exports.off = off;
	exports.trigger = trigger;
	exports.calc = calc;
	exports.bindNode = bindNode;
	exports.unbindNode = unbindNode;
	exports.bindOptionalNode = bindOptionalNode;
	exports.bindSandbox = bindSandbox;
	exports.parseBindings = parseBindings;
	exports.select = select;
	exports.selectAll = selectAll;
	exports.set = set;
	exports.remove = remove;
	exports.instantiate = instantiate;
	exports.mediate = mediate;
	//# sourceMappingURL=_universalmethods.js.map

/***/ },
/* 423 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var splitBySpaceReg = __webpack_require__(424);
	
	var checkObjectType = __webpack_require__(324);
	
	var matreshkaError = __webpack_require__(325);
	
	var addListener = __webpack_require__(317);
	
	var delegateListener = __webpack_require__(354);
	
	// adds event listener
	module.exports = on;
	function on(object, givenNames, callback, triggerOnInit, context) {
	    if (typeof this === 'object' && this.isMatreshka) {
	        // when context is Matreshka instance, use this as an object and shift other args
	        /* eslint-disable no-param-reassign */
	        context = triggerOnInit;
	        triggerOnInit = callback;
	        callback = givenNames;
	        givenNames = object;
	        object = this;
	        /* eslint-enable no-param-reassign */
	    } else {
	        // throw error when object type is wrong
	        checkObjectType(object, 'on');
	    }
	
	    var isNamesVarArray = givenNames instanceof Array;
	
	    // allow to pass name-handler object
	    if (givenNames && typeof givenNames === 'object' && !isNamesVarArray) {
	        for (var _target = givenNames, _keys = Object.keys(_target), _i = 0, namesObjName, namesObjCallback, _l = _keys.length; (namesObjName = _keys[_i], namesObjCallback = _target[namesObjName]), _i < _l; _i++) {
	            on(object, namesObjName, namesObjCallback, callback, triggerOnInit)
	        }
	
	        return object;
	    }
	
	    if (typeof givenNames !== 'string' && !isNamesVarArray) {
	        throw matreshkaError('on:names_type', { names: givenNames });
	    }
	
	    // split by spaces
	    // TODO: Array of names passed to on method is non-documented feature
	    var names = isNamesVarArray ? givenNames : givenNames.split(splitBySpaceReg);
	
	    // flip triggerOnInit and context when triggerOnInit is not boolean
	    if (typeof triggerOnInit !== 'boolean' && typeof triggerOnInit !== 'undefined') {
	        var _ref = [triggerOnInit, context];
	        // eslint-disable-next-line no-param-reassign
	
	        context = _ref[0];
	        triggerOnInit = _ref[1];
	    }
	
	    // call callback immediatelly if triggerOnInit is true
	    for (var _target2 = names, _index = 0, name, _l2 = _target2.length; name = _target2[_index], _index < _l2; _index++) {
	        var delegatedEventParts = name.split('@');
	
	        if (delegatedEventParts.length > 1) {
	            // if @ exists in event name then this is delegated event
	            var path = delegatedEventParts[0],
	                delegatedName = delegatedEventParts[1];
	
	            delegateListener(object, path, delegatedName, callback, context || object);
	        } else {
	            // if not, this is simple event
	            addListener(object, name, callback, context);
	        }
	    }
	
	    if (triggerOnInit === true) {
	        callback.call(context || object, { triggerOnInit: triggerOnInit });
	    }
	
	    return object;
	}
	//# sourceMappingURL=index.js.map

/***/ },
/* 424 */
/***/ function(module, exports) {

	"use strict";
	
	// allows to split by spaces not inclusing ones inside of brackers
	module.exports = /\s+(?![^(]*\))/g;
	//# sourceMappingURL=_splitbyspaceregexp.js.map

/***/ },
/* 425 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var on = __webpack_require__(423);
	
	var checkObjectType = __webpack_require__(324);
	
	var off = __webpack_require__(426);
	
	var apply = __webpack_require__(321);
	
	// adds event listener which will be removed immediately after its first call
	module.exports = once;
	function once(object, names, givenCallback, context) {
	    if (typeof this === 'object' && this.isMatreshka) {
	        // when context is Matreshka instance, use this as an object and shift other args
	        /* eslint-disable no-param-reassign */
	        context = givenCallback;
	        givenCallback = names;
	        names = object;
	        object = this;
	        /* eslint-enable no-param-reassign */
	    } else {
	        // throw error when object type is wrong
	        checkObjectType(object, 'once');
	    }
	
	    var isNamesVarArray = names instanceof Array;
	
	    // allow to pass name-handler object
	    if (names && typeof names === 'object' && !isNamesVarArray) {
	        for (var _target = names, _keys = Object.keys(_target), _i = 0, namesObjName, namesObjCallback, _l = _keys.length; (namesObjName = _keys[_i], namesObjCallback = _target[namesObjName]), _i < _l; _i++) {
	            once(object, namesObjName, namesObjCallback, givenCallback)
	        }
	
	        return object;
	    }
	
	    var callback = function onceCallback() {
	        apply(givenCallback, this, arguments);
	        // remove event listener after its call
	        off(object, names, onceCallback, context);
	    };
	
	    // allow to remove event listener py passing original callback to "off"
	    callback._callback = givenCallback;
	
	    return on(object, names, callback, context);
	}
	//# sourceMappingURL=once.js.map

/***/ },
/* 426 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var splitBySpaceReg = __webpack_require__(424);
	
	var checkObjectType = __webpack_require__(324);
	
	var defs = __webpack_require__(319);
	
	var removeListener = __webpack_require__(359);
	
	var undelegateListener = __webpack_require__(358);
	
	var dom = __webpack_require__(329);
	
	// removes event listener
	module.exports = off;
	function off(object, givenNames, callback, context) {
	    if (typeof this === 'object' && this.isMatreshka) {
	        // when context is Matreshka instance, use this as an object and shift other args
	        /* eslint-disable no-param-reassign */
	        context = callback;
	        callback = givenNames;
	        givenNames = object;
	        object = this;
	        /* eslint-enable no-param-reassign */
	    } else {
	        // throw error when object type is wrong
	        checkObjectType(object, 'off');
	    }
	
	    var isNamesVarArray = givenNames instanceof Array;
	    var def = defs.get(object);
	
	    // allow to pass name-handler object
	    // TODO: Name-handler object passed to off method is non-documented feature
	    if (givenNames && typeof givenNames === 'object' && !isNamesVarArray) {
	        for (var _target = givenNames, _keys = Object.keys(_target), _i = 0, namesObjName, namesObjCallback, _l = _keys.length; (namesObjName = _keys[_i], namesObjCallback = _target[namesObjName]), _i < _l; _i++) {
	            off(object, namesObjName, namesObjCallback, callback)
	        }
	
	        return object;
	    }
	
	    if (!givenNames && !callback && !context) {
	        def.events = {};
	
	        for (var _target3 = def.props, _keys2 = Object.keys(_target3), _i2 = 0, propName, _ref, _l3 = _keys2.length; (propName = _keys2[_i2], _ref = _target3[propName]), _i2 < _l3; _i2++) {
	            var bindings = _ref.bindings;
	
	            if (bindings) {
	                for (var _target2 = bindings, _index = 0, _ref2, _l2 = _target2.length; _ref2 = _target2[_index], _index < _l2; _index++) {
	                    var node = _ref2.node;
	
	                    var eventNamespace = def.id + propName;
	                    dom.$(node).off('.' + eventNamespace);
	                }
	            }
	        }
	
	        return object;
	    }
	
	    // TODO: Array of names passed to off method is non-documented feature
	    // split by spaces
	    var names = isNamesVarArray ? givenNames : givenNames.split(splitBySpaceReg);
	
	    for (var _target4 = names, _index2 = 0, name, _l4 = _target4.length; name = _target4[_index2], _index2 < _l4; _index2++) {
	        var delegatedEventParts = name.split('@');
	        if (delegatedEventParts.length > 1) {
	            var path = delegatedEventParts[0],
	                delegatedName = delegatedEventParts[1];
	
	            undelegateListener(object, path, delegatedName, callback, context);
	        } else {
	            removeListener(object, name, callback, context);
	        }
	    }
	
	    return object;
	}
	//# sourceMappingURL=index.js.map

/***/ },
/* 427 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var on = __webpack_require__(423);
	
	var checkObjectType = __webpack_require__(324);
	
	var debounce = __webpack_require__(351);
	
	// adds debounced event listener
	module.exports = onDebounce;
	function onDebounce(object, names, givenCallback, givenDelay, triggerOnInit, context) {
	    if (typeof this === 'object' && this.isMatreshka) {
	        // when context is Matreshka instance, use this as an object and shift other args
	        /* eslint-disable no-param-reassign */
	        context = triggerOnInit;
	        triggerOnInit = givenDelay;
	        givenDelay = givenCallback;
	        givenCallback = names;
	        names = object;
	        object = this;
	        /* eslint-enable no-param-reassign */
	    } else {
	        // throw error when object type is wrong
	        checkObjectType(object, 'onDebounce');
	    }
	
	    var isNamesVarArray = names instanceof Array;
	
	    // allow to pass name-handler object
	    if (names && typeof names === 'object' && !isNamesVarArray) {
	        for (var _target = names, _keys = Object.keys(_target), _i = 0, namesObjName, namesObjCallback, _l = _keys.length; (namesObjName = _keys[_i], namesObjCallback = _target[namesObjName]), _i < _l; _i++) {
	            onDebounce(object, namesObjName, namesObjCallback, givenCallback, givenDelay, triggerOnInit)
	        }
	
	        return object;
	    }
	
	    var delay = typeof givenDelay === 'number' ? givenDelay : 0;
	
	    var callback = debounce(givenCallback, delay);
	
	    // allow to remove event listener py passing original callback to "off"
	    callback._callback = givenCallback;
	
	    return on(object, names, callback, triggerOnInit, context);
	}
	//# sourceMappingURL=ondebounce.js.map

/***/ },
/* 428 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var domEventReg = __webpack_require__(327);
	
	var checkObjectType = __webpack_require__(324);
	
	var matreshkaError = __webpack_require__(325);
	
	var splitBySpaceReg = __webpack_require__(424);
	
	var defs = __webpack_require__(319);
	
	var triggerOne = __webpack_require__(320);
	
	var triggerDomEvent = __webpack_require__(429);
	
	// triggers an event
	module.exports = trigger;
	function trigger() {
	    var object = void 0;
	    var givenNames = void 0;
	    var triggerArgs = void 0;
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	    }
	
	    if (typeof this === 'object' && this.isMatreshka) {
	        givenNames = args[0];
	        // when context is Matreshka instance, use this as an object and shift other args
	
	        triggerArgs = args.slice(1);
	
	        object = this;
	    } else {
	        // throw error when object type is wrong
	        object = args[0];
	        givenNames = args[1];
	        triggerArgs = args.slice(2);
	        checkObjectType(object, 'trigger');
	    }
	    var names = void 0;
	
	    // allow to use strings only as event name
	    if (typeof givenNames === 'string') {
	        names = givenNames.split(splitBySpaceReg);
	    } else {
	        throw matreshkaError('trigger:names_type', { names: givenNames });
	    }
	
	    var def = defs.get(object);
	
	    // if no definition do nothing
	    if (!def) {
	        return object;
	    }
	
	    var allEvents = def.events;
	
	
	    if (!allEvents) {
	        return object;
	    }
	
	    for (var _target = names, _index = 0, name, _l = _target.length; name = _target[_index], _index < _l; _index++) {
	        var domEvtExecResult = domEventReg.exec(name);
	
	        if (domEvtExecResult) {
	            // if EVT::KEY(SELECTOR) ia passed as event name then trigger DOM event
	            var eventName = domEvtExecResult[1],
	                _domEvtExecResult$ = domEvtExecResult[2],
	                key = _domEvtExecResult$ === undefined ? 'sandbox' : _domEvtExecResult$,
	                selector = domEvtExecResult[3];
	
	            triggerDomEvent(object, key, eventName, selector, triggerArgs);
	        } else {
	            // trigger ordinary event
	            triggerOne(object, name, triggerArgs);
	        }
	    }
	
	    return object;
	}
	//# sourceMappingURL=index.js.map

/***/ },
/* 429 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var triggerOneDOMEvent = __webpack_require__(430);
	
	var defs = __webpack_require__(319);
	
	// triggers DOM event on bound nodes
	module.exports = triggerDOMEvent;
	function triggerDOMEvent(object, key, eventName, selector, triggerArgs) {
	    var def = defs.get(object);
	
	    if (!def) {
	        return;
	    }
	
	    var props = def.props;
	
	    var propDef = props[key];
	
	    if (!propDef) {
	        return;
	    }
	
	    var bindings = propDef.bindings;
	
	
	    if (!bindings) {
	        return;
	    }
	
	    for (var _target2 = bindings, _index2 = 0, _ref, _l2 = _target2.length; _ref = _target2[_index2], _index2 < _l2; _index2++) {
	        var node = _ref.node;
	
	        if (selector) {
	            // if selector is given trigger an event on all node descendants
	            var descendants = node.querySelectorAll(selector);
	
	            for (var _target = descendants, _index = 0, descendant, _l = _target.length; descendant = _target[_index], _index < _l; _index++) {
	                triggerOneDOMEvent({
	                    node: descendant,
	                    eventName: eventName,
	                    triggerArgs: triggerArgs
	                });
	            }
	        } else {
	            // trigger an event for single node
	            triggerOneDOMEvent({
	                node: node,
	                eventName: eventName,
	                triggerArgs: triggerArgs
	            });
	        }
	    }
	
	    return;
	}
	//# sourceMappingURL=_triggerdomevent.js.map

/***/ },
/* 430 */
/***/ function(module, exports) {

	'use strict';
	
	// triggers given DOM event on given node
	module.exports = triggerOneDOMEvent;
	function triggerOneDOMEvent(_ref) {
	    var node = _ref.node,
	        eventName = _ref.eventName,
	        triggerArgs = _ref.triggerArgs;
	    var _window = window,
	        document = _window.document,
	        Event = _window.Event;
	
	    var event = void 0;
	
	    // polyfill for older browsers
	    if (document.createEvent) {
	        /* istanbul ignore next */
	        event = document.createEvent('Event');
	        event.initEvent(eventName, true, true);
	    } else if (typeof Event !== 'undefined') {
	        event = new Event(eventName, {
	            bubbles: true,
	            cancelable: true
	        });
	    }
	
	    // matreshkaTriggerArgs will be used in a handler created by addDOMListener
	    event.matreshkaTriggerArgs = triggerArgs;
	
	    node.dispatchEvent(event);
	}
	//# sourceMappingURL=_triggeronedomevent.js.map

/***/ },
/* 431 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var bindNode = __webpack_require__(367);
	
	var apply = __webpack_require__(321);
	
	// TODO: Adds a binding, not throwing an error when a node is missing
	module.exports = bindOptionalNode;
	function bindOptionalNode() {
	    // this hack allows to keep bindOptionalNode as compact as possible
	    // and doesn't require to flip args and support all bindNode variations
	    bindNode.temporaryOptionalFlag = true;
	    return apply(bindNode, this, arguments);
	}
	//# sourceMappingURL=bindoptionalnode.js.map

/***/ },
/* 432 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var bindNode = __webpack_require__(367);
	
	var unbindNode = __webpack_require__(372);
	
	var checkObjectType = __webpack_require__(324);
	
	// binds or rebinds sandbox node
	module.exports = bindSandbox;
	function bindSandbox(object, node, evt) {
	    if (typeof this === 'object' && this.isMatreshka) {
	        // when context is Matreshka instance, use this as an object and shift other args
	        /* eslint-disable no-param-reassign */
	        evt = node;
	        node = object;
	        object = this;
	        /* eslint-enable no-param-reassign */
	    } else {
	        // throw error when object type is wrong
	        checkObjectType(object, 'bindSandbox');
	    }
	
	    unbindNode(object, 'sandbox', null, evt);
	    return bindNode(object, 'sandbox', node, null, evt);
	}
	//# sourceMappingURL=bindsandbox.js.map

/***/ },
/* 433 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var defs = __webpack_require__(319);
	
	var selectNodes = __webpack_require__(369);
	
	var checkObjectType = __webpack_require__(324);
	
	var customSelectorTestReg = /:sandbox|:bound\(([^(]*)\)/;
	
	// selects one node based on given selector
	module.exports = select;
	function select(object, selector) {
	    if (typeof this === 'object' && this.isMatreshka) {
	        // when context is Matreshka instance, use this as an object and shift other args
	        /* eslint-disable no-param-reassign */
	        selector = object;
	        object = this;
	        /* eslint-enable no-param-reassign */
	    } else {
	        // throw error when object type is wrong
	        checkObjectType(object, 'select');
	    }
	
	    // the selector includes "custom" things like :sandbox or :bound(KEY)
	    if (customSelectorTestReg.test(selector)) {
	        return selectNodes(object, selector)[0] || null;
	    }
	    var def = defs.get(object);
	
	    if (!def || typeof selector !== 'string') {
	        return null;
	    }
	
	    var propDef = def.props.sandbox;
	
	    if (!propDef) {
	        return null;
	    }
	
	    var bindings = propDef.bindings;
	
	
	    if (bindings) {
	        // iterate over all bound nodes trying to find a descendant matched given selector
	        for (var i = 0; i < bindings.length; i++) {
	            var node = bindings[i].node;
	
	            var selected = node.querySelector(selector);
	
	            if (selected) {
	                return selected;
	            }
	        }
	    }
	
	    return null;
	}
	//# sourceMappingURL=select.js.map

/***/ },
/* 434 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var defs = __webpack_require__(319);
	
	var dom = __webpack_require__(329);
	
	var selectNodes = __webpack_require__(369);
	
	var toArray = __webpack_require__(370);
	
	var checkObjectType = __webpack_require__(324);
	
	var customSelectorTestReg = /:sandbox|:bound\(([^(]*)\)/;
	
	// selects nodes based on given selector
	module.exports = selectAll;
	function selectAll(object, selector) {
	    if (typeof this === 'object' && this.isMatreshka) {
	        // when context is Matreshka instance, use this as an object and shift other args
	        /* eslint-disable no-param-reassign */
	        selector = object;
	        object = this;
	        /* eslint-enable no-param-reassign */
	    } else {
	        // throw error when object type is wrong
	        checkObjectType(object, 'selectAll or $');
	    }
	
	    // the selector includes "custom" things like :sandbox or :bound(KEY)
	    if (customSelectorTestReg.test(selector)) {
	        return selectNodes(object, selector);
	    }
	
	    var def = defs.get(object);
	    var result = dom.$();
	
	    if (!def || typeof selector !== 'string') {
	        return result;
	    }
	
	    var propDef = def.props.sandbox;
	
	    if (!propDef) {
	        return result;
	    }
	
	    var bindings = propDef.bindings;
	
	
	    if (bindings) {
	        for (var _target = bindings, _index = 0, _ref, _l = _target.length; _ref = _target[_index], _index < _l; _index++) {
	            var node = _ref.node;
	
	            var selected = node.querySelectorAll(selector);
	            result = result.add(toArray(selected));
	        }
	        // iterate over all bindings and add found nodes
	
	    }
	
	    return result;
	}
	//# sourceMappingURL=selectall.js.map

/***/ },
/* 435 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var unbindNode = __webpack_require__(372);
	
	var triggerOne = __webpack_require__(320);
	
	var removeListener = __webpack_require__(359);
	
	var defs = __webpack_require__(319);
	
	var checkObjectType = __webpack_require__(324);
	
	var matreshkaError = __webpack_require__(325);
	
	// removes a property, its bindings and its events
	// TODO: remove function does not correctly removes delegated events, bindings, tree listeners etc
	module.exports = remove;
	function remove(object, givenKey, eventOptions) {
	    if (typeof this === 'object' && this.isMatreshka) {
	        // when context is Matreshka instance, use this as an object and shift other args
	        /* eslint-disable no-param-reassign */
	        eventOptions = givenKey;
	        givenKey = object;
	        object = this;
	        /* eslint-enable no-param-reassign */
	    } else {
	        // throw error when object type is wrong
	        checkObjectType(object, 'remove');
	    }
	
	    eventOptions = eventOptions || {}; // eslint-disable-line no-param-reassign
	    var def = defs.get(object);
	    var _eventOptions = eventOptions,
	        silent = _eventOptions.silent;
	    // allow to pass single key or an array of keys
	
	    var keys = givenKey instanceof Array ? givenKey : [givenKey];
	
	    var _loop = function (i) {
	        var key = keys[i];
	
	        // if non-string is passed as a key
	        if (typeof key !== 'string') {
	            throw matreshkaError('remove:key_type', { key: key });
	        }
	
	        var props = def && def.props;
	        var propDef = props && props[key];
	
	        // if no object definition then simply delete the property
	        if (!propDef) {
	            delete object[key];
	            return 'continue';
	        }
	
	        var value = propDef.value;
	
	        // remove all bindings
	
	        unbindNode(object, key);
	
	        // TODO: Manual listing of event prefixes may cause problems in future
	        var removeEventPrefies = ['_change:deps', '_change:bindings', '_change:delegated', '_change:tree', 'change', 'beforechange', 'bind', 'unbind'];
	
	        // remove all events
	
	        // delete property definition
	        for (var _target = removeEventPrefies, _index = 0, prefix, _l = _target.length; prefix = _target[_index], _index < _l; _index++) {
	            removeListener(object, prefix + ':' + key)
	        }
	
	        delete props[key];
	
	        // delete the property itself
	        delete object[key];
	
	        var _keys,
	            _l2,
	            _i,
	            _source,
	            _key,
	            _result = {};
	
	        _result.key = key
	        _result.value = value
	
	        for (_source = eventOptions, _keys = Object.keys(_source), _l2 = _keys.length, _i = 0; _i < _l2; _i++) {
	            _key = _keys[_i];
	            _result[_key] = _source[_key];
	        }
	
	        var extendedEventOptions = _result;
	
	        // trigger delegated events logic removal for asterisk events (*.*.*@foo)
	        triggerOne(object, '_delete:delegated', extendedEventOptions);
	
	        // fire events if "silent" is not true
	        if (!silent) {
	            triggerOne(object, 'delete', extendedEventOptions);
	            triggerOne(object, 'delete:' + key, extendedEventOptions);
	        }
	    };
	
	    for (var i = 0; i < keys.length; i++) {
	        var _ret = _loop(i);
	
	        if (_ret === 'continue') continue;
	    }
	}
	//# sourceMappingURL=remove.js.map

/***/ },
/* 436 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var checkObjectType = __webpack_require__(324);
	
	var mediate = __webpack_require__(437);
	
	// the function is used when no update function is given
	function defaultUpdateFunction(instance, data) {
	    if (instance.isMatreshkaArray) {
	        instance.recreate(data);
	    } else if (instance.isMatreshkaObject) {
	        instance.setData(data, { replaceData: true });
	    } else {
	        var _result = instance;
	        // for other objects just extend them with given data
	
	        for (var _source2 = data, _keys2 = Object.keys(_source2), _l2 = _keys2.length, _i2 = 0, _key2; _i2 < _l2; _i2++) {
	            _key2 = _keys2[_i2];
	            _result[_key2] = _source2[_key2];
	        }
	    }
	}
	
	// returns mediator which controls assignments
	function createInstantiateMediator(_ref) {
	    var UsedClass = _ref.UsedClass,
	        updateFunction = _ref.updateFunction;
	
	    return function mediator(value, previousValue, key, object) {
	        if (previousValue instanceof UsedClass) {
	            updateFunction.call(object, previousValue, value, key);
	            return previousValue;
	        }
	
	        return new UsedClass(value, object, key);
	    };
	}
	
	// creates an instance of given class as property value
	// and updates an instance on new value assignment instead of actual assignment
	module.exports = instantiate;
	function instantiate(object, givenKeys, UsedClass, givenUpdateFunction) {
	    if (typeof this === 'object' && this.isMatreshka) {
	        // when context is Matreshka instance, use this as an object and shift other args
	        /* eslint-disable no-param-reassign */
	        givenUpdateFunction = UsedClass;
	        UsedClass = givenKeys;
	        givenKeys = object;
	        object = this;
	        /* eslint-enable no-param-reassign */
	    } else {
	        // throw error when object type is wrong
	        checkObjectType(object, 'instantiate');
	    }
	
	    var isKeysArray = givenKeys instanceof Array;
	
	    // allow to use key-class object
	    if (typeof givenKeys === 'object' && !isKeysArray) {
	        for (var _target = givenKeys, _keys3 = Object.keys(_target), _i3 = 0, objKey, objVal, _l3 = _keys3.length; (objKey = _keys3[_i3], objVal = _target[objKey]), _i3 < _l3; _i3++) {
	            instantiate(object, objKey, objVal, UsedClass)
	        }
	
	        return object;
	    }
	
	    // allow to use both single key and an array of keys
	    var keys = isKeysArray ? givenKeys : [givenKeys];
	    var updateFunction = givenUpdateFunction || defaultUpdateFunction;
	    var mediator = createInstantiateMediator({
	        UsedClass: UsedClass,
	        updateFunction: updateFunction
	    });
	
	    // iterate over all keys and define created mediator for all of them
	
	    for (var _target2 = keys, _index = 0, key, _l4 = _target2.length; key = _target2[_index], _index < _l4; _index++) {
	        mediate(object, key, mediator)
	    }
	
	    return object;
	}
	//# sourceMappingURL=instantiate.js.map

/***/ },
/* 437 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var initMK = __webpack_require__(318);
	
	var defineProp = __webpack_require__(322);
	
	var checkObjectType = __webpack_require__(324);
	
	var set = __webpack_require__(323);
	
	var matreshkaError = __webpack_require__(325);
	
	// creates property mediator
	function createMediator(_ref) {
	    var object = _ref.object,
	        propDef = _ref.propDef,
	        key = _ref.key,
	        mediator = _ref.mediator;
	
	    return function propMediator(value) {
	        // args: value, previousValue, key, object itself
	        return mediator.call(object, value, propDef.value, key, object);
	    };
	}
	
	// transforms property value on its changing
	module.exports = mediate;
	function mediate(object, givenKeys, mediator) {
	    if (typeof this === 'object' && this.isMatreshka) {
	        // when context is Matreshka instance, use this as an object and shift other args
	        /* eslint-disable no-param-reassign */
	        mediator = givenKeys;
	        givenKeys = object;
	        object = this;
	        /* eslint-enable no-param-reassign */
	    } else {
	        // throw error when object type is wrong
	        checkObjectType(object, 'mediate');
	    }
	
	    var isKeysArray = givenKeys instanceof Array;
	
	    // allow to use key-mediator object as another method variation
	    if (typeof givenKeys === 'object' && !isKeysArray) {
	        for (var _target = givenKeys, _keys = Object.keys(_target), _i = 0, objKey, objVal, _l = _keys.length; (objKey = _keys[_i], objVal = _target[objKey]), _i < _l; _i++) {
	            mediate(object, objKey, objVal)
	        }
	
	        return object;
	    }
	
	    initMK(object);
	
	    // allow to use both single key and an array of keys
	    var keys = isKeysArray ? givenKeys : [givenKeys];
	
	    for (var _target2 = keys, _index = 0, key, _l2 = _target2.length; key = _target2[_index], _index < _l2; _index++) {
	        // if non-string is passed as a key
	        if (typeof key !== 'string') {
	            throw matreshkaError('mediate:key_type', { key: key });
	        }
	
	        var propDef = defineProp(object, key);
	
	        var propMediator = propDef.mediator = createMediator({
	            object: object,
	            propDef: propDef,
	            key: key,
	            mediator: mediator
	        });
	
	        // set new value
	        set(object, key, propMediator(propDef.value), {
	            fromMediator: true
	        });
	    }
	
	    return object;
	}
	//# sourceMappingURL=mediate.js.map

/***/ },
/* 438 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var dom = __webpack_require__(329);
	
	var mq = __webpack_require__(331);
	
	// forces Matrsahka to use jQuery-like DOM library for internal stuff
	module.exports = useDOMLibrary;
	function useDOMLibrary(library) {
	    if (typeof library === 'function') {
	        dom.$ = library;
	    } else {
	        dom.$ = mq;
	    }
	}
	//# sourceMappingURL=usedomlibrary.js.map

/***/ },
/* 439 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var checkObjectType = __webpack_require__(324);
	
	var _matreshka_universalmethods = __webpack_require__(422);
	
	var universalMethods = _matreshka_universalmethods;
	
	var Class = __webpack_require__(300);
	
	var apply = __webpack_require__(321);
	
	// create a prototype of ChainClass
	// store target object at "object" property
	var prototype = {
	    constructor: function (object) {
	        this.object = object;
	    }
	};
	
	var methodNames = Object.keys(universalMethods);
	
	// iterate over all universal methods
	
	var _loop = function (i) {
	    var methodName = methodNames[i];
	    var method = universalMethods[methodName];
	
	    // create every chained method
	    prototype[methodName] = function chainedMethod() {
	        var args = [this.object];
	
	        for (var _target = arguments, _index = 0, argument, _l = _target.length; argument = _target[_index], _index < _l; _index++) {
	            args.push(argument);
	        }
	
	        apply(method, undefined, args);
	
	        // returning this is important for chained calls
	        return this;
	    };
	};
	
	for (var i = 0; i < methodNames.length; i++) {
	    _loop(i);
	}
	
	var ChainClass = Class(prototype);
	
	// the function allows to chain static function calls on any object
	module.exports = chain;
	function chain(object) {
	    // check for type and throw an error if it is not an object and is not a function
	    checkObjectType(object, 'chain');
	
	    return new ChainClass(object);
	}
	//# sourceMappingURL=chain.js.map

/***/ },
/* 440 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _universalmethods = __webpack_require__(422);
	
	var universalMethods = _universalmethods;
	
	var assign = __webpack_require__(314);
	
	var _afterInit = __webpack_require__(316);
	
	module.exports = assign({
	    _afterInit: _afterInit,
	    isMatreshka: true,
	    $: universalMethods.selectAll
	}, universalMethods);
	//# sourceMappingURL=_prototype.js.map

/***/ },
/* 441 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _afterInit$setData$ad;
	
	var _afterInit = __webpack_require__(442);
	
	var addDataKeys = __webpack_require__(443);
	
	var removeDataKeys = __webpack_require__(444);
	
	var isDataKey = __webpack_require__(445);
	
	var setData = __webpack_require__(446);
	
	var keyOf = __webpack_require__(447);
	
	var keys = __webpack_require__(448);
	
	var values = __webpack_require__(449);
	
	var entries = __webpack_require__(450);
	
	var toJSON = __webpack_require__(451);
	
	var each = __webpack_require__(452);
	
	var iterator = __webpack_require__(453);
	
	var symbolIterator = typeof Symbol === 'function' ? Symbol.iterator : '@@iterator';
	
	module.exports = (_afterInit$setData$ad = {
	    _afterInit: _afterInit,
	    setData: setData,
	    addDataKeys: addDataKeys,
	    removeDataKeys: removeDataKeys,
	    isDataKey: isDataKey,
	    keys: keys,
	    values: values,
	    entries: entries,
	    keyOf: keyOf,
	    toJSON: toJSON,
	    each: each,
	    isMatreshkaObject: true,
	    jset: setData }, _afterInit$setData$ad[symbolIterator] = iterator, _afterInit$setData$ad);
	//# sourceMappingURL=_prototype.js.map

/***/ },
/* 442 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var afterMatreshkaInit = __webpack_require__(316);
	
	var addListener = __webpack_require__(317);
	
	var triggerOne = __webpack_require__(320);
	
	var defs = __webpack_require__(319);
	
	// called on _change:delegated
	// tiggers asterisk events logic by triggering _asterisk:set
	function changeDelegatedHandler() {
	    var eventOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var key = eventOptions.key;
	
	    var def = defs.get(this);
	
	    if (key && key in def.keys) {
	        triggerOne(this, '_asterisk:set', eventOptions);
	    }
	}
	
	// called on _delete:delegated
	// removes asterisk events logic by triggering _asterisk:remove
	function deleteDelegatedHandler() {
	    var eventOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var key = eventOptions.key;
	
	    var def = defs.get(this);
	
	    if (key && key in def.keys) {
	        triggerOne(this, '_asterisk:remove', eventOptions);
	    }
	}
	
	// called on change
	// triggers set and modify if data keys are changed
	function changeHandler() {
	    var eventOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var key = eventOptions.key,
	        silent = eventOptions.silent;
	
	    var def = defs.get(this);
	
	    if (key && key in def.keys && !silent) {
	        triggerOne(this, 'set', eventOptions);
	        triggerOne(this, 'modify', eventOptions);
	    }
	}
	
	// called on delete
	// triggers remove and modify if data keys are removed
	function deleteHandler() {
	    var eventOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var key = eventOptions.key,
	        silent = eventOptions.silent;
	
	    var def = defs.get(this);
	
	    if (key && key in def.keys) {
	        delete def.keys[key];
	
	        if (!silent) {
	            triggerOne(this, 'remove', eventOptions);
	            triggerOne(this, 'modify', eventOptions);
	        }
	    }
	}
	
	// Matreshka.Object initializer
	module.exports = afterMatreshkaObjectInit;
	function afterMatreshkaObjectInit(def) {
	    // Matreshka initializer
	    afterMatreshkaInit.call(this);
	    // create a set of data keys
	    def.keys = {};
	
	    // trigger asterisk events
	    addListener(this, '_change:delegated', changeDelegatedHandler);
	
	    // trigger asterisk events removal
	    addListener(this, '_delete:delegated', deleteDelegatedHandler);
	
	    // fire "modify" and "set" events when data key is changed
	    addListener(this, 'change', changeHandler);
	
	    // fire "modify" and "remove" events when data key is removed
	    addListener(this, 'delete', deleteHandler);
	}
	//# sourceMappingURL=_afterinit.js.map

/***/ },
/* 443 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var initMK = __webpack_require__(318);
	
	var defineProp = __webpack_require__(322);
	
	var matreshkaError = __webpack_require__(325);
	
	var triggerOne = __webpack_require__(320);
	
	// adds keys to a list of data keys
	module.exports = addDataKeys;
	function addDataKeys(givenKeys) {
	    var _this = this;
	
	    var _initMK = initMK(this),
	        keys = _initMK.keys;
	
	    var newKeys = void 0;
	
	    // accept an array keys or a list of args
	    if (givenKeys instanceof Array) {
	        newKeys = givenKeys;
	    } else {
	        newKeys = arguments;
	    }
	
	    for (var _target = newKeys, _index = 0, key, _l = _target.length; key = _target[_index], _index < _l; _index++) {
	        if (typeof key !== 'string') {
	            throw matreshkaError('adddatakeys:key_type', { key: key });
	        }
	
	        // if key is not in a list of keys
	        if (!(key in keys)) {
	            // define descriptors for this property
	            var _defineProp = defineProp(_this, key),
	                value = _defineProp.value;
	
	            var eventOptions = { key: key, value: value };
	
	            // add a key to the list of keys
	            keys[key] = true;
	
	            // trigger events which say that data is changed
	            triggerOne(_this, 'set', eventOptions);
	            triggerOne(_this, 'modify', eventOptions);
	        }
	    }
	
	    return this;
	}
	//# sourceMappingURL=adddatakeys.js.map

/***/ },
/* 444 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var defs = __webpack_require__(319);
	
	var triggerOne = __webpack_require__(320);
	
	var matreshkaError = __webpack_require__(325);
	
	// removes given keys from a list of data keys
	module.exports = removeDataKeys;
	function removeDataKeys(givenKeys) {
	    var _this = this;
	
	    var def = defs.get(this);
	
	    /* istanbul ignore if */
	    if (!def) {
	        return this;
	    }
	
	    var keys = def.keys;
	
	    var removedKeys = void 0;
	
	    // accept an array keys or a list of args
	    if (givenKeys instanceof Array) {
	        removedKeys = givenKeys;
	    } else {
	        removedKeys = arguments;
	    }
	
	    for (var _target = removedKeys, _index = 0, key, _l = _target.length; key = _target[_index], _index < _l; _index++) {
	        if (typeof key !== 'string') {
	            throw matreshkaError('removedatakeys:key_type', { key: key });
	        }
	
	        if (key in keys) {
	            var eventOptions = {
	                key: key,
	                value: _this[key]
	            };
	
	            delete keys[key];
	
	            // fire "modify" and "remove" events
	            triggerOne(_this, 'modify', eventOptions);
	            triggerOne(_this, 'remove', eventOptions);
	        }
	    }
	
	    return this;
	}
	//# sourceMappingURL=removedatakeys.js.map

/***/ },
/* 445 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var defs = __webpack_require__(319);
	
	// checks is a key present in data keys list
	module.exports = isDataKey;
	function isDataKey(key) {
	    var def = defs.get(this);
	
	    /* istanbul ignore if */
	    if (!def) {
	        return false;
	    }
	
	    return key in def.keys;
	}
	//# sourceMappingURL=isdatakey.js.map

/***/ },
/* 446 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var initMK = __webpack_require__(318);
	
	var defineProp = __webpack_require__(322);
	
	var set = __webpack_require__(323);
	
	// returns an array of keys listed at inObject but not listed at fromObject
	function getNotListedKeys(inObject, fromObject) {
	    var result = [];
	
	    for (var _target = inObject, _keys = Object.keys(_target), _i = 0, key, _, _l = _keys.length; (key = _keys[_i], _ = _target[key]), _i < _l; _i++) {
	        if (!(key in fromObject)) {
	            result.push(key);
	        }
	    }
	
	    return result;
	}
	
	// changes property value and adds given key to a list of data keys
	module.exports = setData;
	function setData(key, value, eventOptions) {
	    var _this = this;
	
	    // if no key or falsy key is given
	    if (!key) {
	        return this;
	    }
	
	    var _initMK = initMK(this),
	        keys = _initMK.keys;
	
	    // allow to pass key-value object
	
	
	    if (typeof key === 'object') {
	        var _ret = function () {
	            eventOptions = value || {}; // eslint-disable-line no-param-reassign
	
	            var _eventOptions = eventOptions,
	                replaceData = _eventOptions.replaceData;
	
	            // do not call setData recursivally for better performance
	
	            for (var _target2 = key, _keys2 = Object.keys(_target2), _i2 = 0, objKey, objVal, _l2 = _keys2.length; (objKey = _keys2[_i2], objVal = _target2[objKey]), _i2 < _l2; _i2++) {
	                // remove data keys not listed at key-value object
	                if (replaceData) {
	                    var notListedKeys = getNotListedKeys(keys, key);
	
	                    if (notListedKeys.length) {
	                        _this.removeDataKeys(notListedKeys);
	                    }
	                }
	
	                // define descriptors for given property
	                defineProp(_this, objKey);
	
	                // add a key to a list of keys
	                keys[objKey] = 1;
	
	                // do other things with set method
	                set(_this, objKey, objVal, eventOptions);
	            }
	
	            return {
	                v: _this
	            };
	        }();
	
	        if (typeof _ret === "object") return _ret.v;
	    }
	
	    eventOptions = eventOptions || {}; // eslint-disable-line no-param-reassign
	
	    var _eventOptions2 = eventOptions,
	        replaceData = _eventOptions2.replaceData;
	
	    // remove all data keys except given key
	
	    if (replaceData) {
	        var _getNotListedKeys;
	
	        var notListedKeys = getNotListedKeys(keys, (_getNotListedKeys = {}, _getNotListedKeys[key] = true, _getNotListedKeys));
	
	        if (notListedKeys.length) {
	            this.removeDataKeys(notListedKeys);
	        }
	    }
	
	    // define descriptors for given property
	    defineProp(this, key);
	
	    // add a key to a list of keys
	    keys[key] = 1;
	
	    // do other things with set method
	    return set(this, key, value, eventOptions);
	}
	//# sourceMappingURL=setdata.js.map

/***/ },
/* 447 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var defs = __webpack_require__(319);
	
	// iterates over data keys looking for a property with given value
	// and returns a key of found property
	module.exports = keyOf;
	function keyOf(value) {
	    var def = defs.get(this);
	
	    /* istanbul ignore if */
	    if (!def) {
	        return null;
	    }
	
	    var keysArray = Object.keys(def.keys);
	
	    for (var i = 0; i < keysArray.length; i++) {
	        var key = keysArray[i];
	        if (this[key] === value) {
	            return key;
	        }
	    }
	
	    return null;
	}
	//# sourceMappingURL=keyof.js.map

/***/ },
/* 448 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var defs = __webpack_require__(319);
	
	// returns an array which contains all data keys
	module.exports = keys;
	function keys() {
	    var def = defs.get(this);
	
	    /* istanbul ignore if */
	    if (!def) {
	        return [];
	    }
	
	    return Object.keys(def.keys);
	}
	//# sourceMappingURL=keys.js.map

/***/ },
/* 449 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var defs = __webpack_require__(319);
	
	// returns an array which contains all data values
	module.exports = keys;
	function keys() {
	    var def = defs.get(this);
	
	    /* istanbul ignore if */
	    if (!def) {
	        return [];
	    }
	
	    var keysArr = Object.keys(def.keys);
	    var length = keysArr.length;
	
	    var result = new Array(length);
	
	    for (var i = 0; i < keysArr.length; i++) {
	        result[i] = this[keysArr[i]];
	    }
	
	    return result;
	}
	//# sourceMappingURL=values.js.map

/***/ },
/* 450 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var defs = __webpack_require__(319);
	
	// returns an array which contains things like [key, value]
	module.exports = keys;
	function keys() {
	    var def = defs.get(this);
	
	    /* istanbul ignore if */
	    if (!def) {
	        return [];
	    }
	
	    var keysArr = Object.keys(def.keys);
	    var length = keysArr.length;
	
	    var result = new Array(length);
	
	    for (var i = 0; i < keysArr.length; i++) {
	        var key = keysArr[i];
	        result[i] = [key, this[key]];
	    }
	
	    return result;
	}
	//# sourceMappingURL=entries.js.map

/***/ },
/* 451 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var initMK = __webpack_require__(318);
	
	// converts Matreshka.Object instance to ordinary object
	module.exports = toJSON;
	function toJSON() {
	    var _this = this;
	
	    var recursive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	
	    var _initMK = initMK(this),
	        keys = _initMK.keys;
	
	    var result = {};
	
	    for (var _target = keys, _keys = Object.keys(_target), _i = 0, key, _, _l = _keys.length; (key = _keys[_i], _ = _target[key]), _i < _l; _i++) {
	        var value = _this[key];
	        // when recursive is true and when value has toJSON method then call it recusively
	        if (recursive && value && typeof value.toJSON === 'function') {
	            result[key] = value.toJSON(true);
	        } else {
	            result[key] = value;
	        }
	    }
	
	    return result;
	}
	//# sourceMappingURL=tojson.js.map

/***/ },
/* 452 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var defs = __webpack_require__(319);
	
	// iterates over data keys and calls callback on every iteration
	// @IE for..of is preferable and the method will be removed in one of major versions
	module.exports = each;
	function each(callback, thisArg) {
	    var _this = this;
	
	    var def = defs.get(this);
	    var ctx = typeof thisArg !== 'undefined' ? thisArg : this;
	
	    /* istanbul ignore if */
	    if (!def) {
	        return this;
	    }
	
	    for (var _target = def.keys, _keys = Object.keys(_target), _i = 0, key, _, _l = _keys.length; (key = _keys[_i], _ = _target[key]), _i < _l; _i++) {
	        callback.call(ctx, _this[key], key, _this);
	    }
	
	    return this;
	}
	//# sourceMappingURL=each.js.map

/***/ },
/* 453 */
/***/ function(module, exports) {

	"use strict";
	
	// Symbol.iterator of Matreshka.Object instances
	module.exports = matreshkaObjectIterator;
	function matreshkaObjectIterator() {
	    var _this = this;
	
	    var keys = this.keys();
	    var i = 0;
	
	    return {
	        next: function () {
	            if (i > keys.length - 1) {
	                return { done: true };
	            }
	
	            return {
	                done: false,
	                value: _this[keys[i++]] // eslint-disable-line no-plusplus
	            };
	        }
	    };
	}
	//# sourceMappingURL=iterator.js.map

/***/ },
/* 454 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _classname = __webpack_require__(415);
	
	var _classname2 = _interopRequireDefault(_classname);
	
	var _matreshkaBindersFile = __webpack_require__(455);
	
	var _tab = __webpack_require__(461);
	
	var _tab2 = _interopRequireDefault(_tab);
	
	var _fileList = __webpack_require__(462);
	
	var _fileList2 = _interopRequireDefault(_fileList);
	
	var _validate2 = __webpack_require__(463);
	
	var _validate3 = _interopRequireDefault(_validate2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Upload = function (_Tab) {
	    _inherits(Upload, _Tab);
	
	    function Upload() {
	        var _ref;
	
	        var _this;
	
	        _classCallCheck(this, Upload);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        (_this = _possibleConstructorReturn(this, (_ref = Upload.__proto__ || Object.getPrototypeOf(Upload)).call.apply(_ref, [this].concat(args))), _this).instantiate('fileList', _fileList2.default).bindNode({
	            fileWrapper: ':sandbox .file-wrapper',
	            files: [{
	                node: ':bound(fileWrapper)',
	                binder: (0, _matreshkaBindersFile.dropFiles)('text')
	            }, {
	                node: ':sandbox .file-input',
	                binder: (0, _matreshkaBindersFile.file)('text')
	            }],
	            dragovered: [{
	                node: ':bound(fileWrapper)',
	                binder: (0, _matreshkaBindersFile.dragOver)()
	            }, {
	                node: ':bound(fileWrapper)',
	                binder: (0, _classname2.default)('dragovered')
	            }],
	            'fileList.length': {
	                node: ':sandbox .clear, :sandbox .compress',
	                binder: {
	                    setValue: function setValue(v) {
	                        this.disabled = !v;
	                    }
	                }
	            }
	        }).on({
	            'change:files': function changeFiles() {
	                var _this$fileList;
	
	                (_this$fileList = _this.fileList).push.apply(_this$fileList, _toConsumableArray(_this.files.map(function (_ref2) {
	                    var name = _ref2.name,
	                        readerResult = _ref2.readerResult;
	                    return { name: name, readerResult: readerResult };
	                })));
	            },
	            'click::(.clear)': function clickClear() {
	                _this.fileList.recreate();
	                _this.error = '';
	            },
	            'click::(.compress)': function clickCompress() {
	                var errors = [];
	                var results = [];
	
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;
	
	                try {
	                    for (var _iterator = _this.fileList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var item = _step.value;
	                        var readerResult = item.readerResult,
	                            name = item.name;
	
	                        var _validate = (0, _validate3.default)(readerResult),
	                            isValid = _validate.isValid,
	                            error = _validate.error;
	
	                        results.push(readerResult);
	
	                        if (!isValid) {
	                            errors.push('File ' + name + ': ' + error);
	                        }
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator.return) {
	                            _iterator.return();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }
	
	                if (errors.length) {
	                    _this.error = errors.join('\n');
	                } else {
	                    _this.error = '';
	
	                    _this.trigger('submitCode', results.join(';'));
	                }
	            }
	        });
	        return _this;
	    }
	
	    return Upload;
	}(_tab2.default);
	
	exports.default = Upload;

/***/ },
/* 455 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var file = __webpack_require__(456);
	
	var dropFiles = __webpack_require__(459);
	
	var dragOver = __webpack_require__(460);
	
	// extend binders object in browser environment
	if (typeof Matreshka === 'function') {
	    var _Matreshka = Matreshka;
	    var binders = _Matreshka.binders;
	
	
	    binders.file = file;
	    binders.dropFiles = dropFiles;
	    binders.dragOver = dragOver;
	}
	
	// export these binders in CJS environment
	/* globals Matreshka */
	module.exports = {
	    file: file,
	    dropFiles: dropFiles,
	    dragOver: dragOver
	};

/***/ },
/* 456 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var getFileReaderMethodName = __webpack_require__(457);
	
	var readFiles = __webpack_require__(458);
	
	function createFileChangeHandler(_ref) {
	    var callback = _ref.callback;
	    var methodName = _ref.methodName;
	
	    return function fileChangeHandler() {
	        var files = this.files;
	
	
	        if (files.length) {
	            readFiles(files, methodName, callback);
	        } else {
	            callback([]);
	        }
	    };
	}
	
	module.exports = fileBinder;
	function fileBinder(readAs) {
	    var methodName = readAs ? getFileReaderMethodName(readAs) : null;
	    var fileChangeHandler = void 0;
	
	    return {
	        on: function (callback) {
	            fileChangeHandler = createFileChangeHandler({
	                callback: callback,
	                methodName: methodName
	            });
	            this.addEventListener('change', fileChangeHandler);
	        },
	        destroy: function () {
	            this.removeEventListener('change', fileChangeHandler);
	        },
	        getValue: function (_ref2) {
	            var domEvent = _ref2.domEvent;
	
	            var files = domEvent || [];
	            return this.multiple ? files : files[0] || null;
	        },
	
	        setValue: null
	    };
	}

/***/ },
/* 457 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = getFileReaderMethodName;
	function getFileReaderMethodName(readAs) {
	    var _window = window;
	    var FileReader = _window.FileReader;
	    /* istanbul ignore if  */
	
	    if (typeof FileReader === 'undefined') {
	        throw Error('FileReader is not supported by this browser');
	    }
	
	    var methodName = 'readAs' + readAs[0].toUpperCase() + readAs.slice(1);
	
	    if (!FileReader.prototype[methodName]) {
	        throw Error('Method ' + methodName + ' is not supported by FileReader');
	    }
	
	    return methodName;
	}

/***/ },
/* 458 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = readFiles;
	function readFiles(files, fileReaderMethodName, callback) {
	    var length = files.length;
	
	    var arrayOfFiles = Array(length);
	    var j = 0;
	
	    function createLoadendHandler(_ref) {
	        var file = _ref.file;
	        var reader = _ref.reader;
	
	        return function loadendHandler() {
	            file.readerResult = reader.result; // eslint-disable-line no-param-reassign
	            j += 1;
	            if (j === length) {
	                callback(arrayOfFiles);
	            }
	
	            reader.removeEventListener('loadend', loadendHandler);
	        };
	    }
	
	    if (fileReaderMethodName) {
	        for (var i = 0; i < length; i += 1) {
	            var reader = new window.FileReader();
	            var file = files[i];
	
	            arrayOfFiles[i] = file;
	
	            reader.addEventListener('loadend', createLoadendHandler({
	                file: file,
	                reader: reader
	            }));
	
	            reader[fileReaderMethodName](file);
	        }
	    } else {
	        for (var _i = 0; _i < length; _i += 1) {
	            arrayOfFiles[_i] = files[_i];
	        }
	
	        callback(arrayOfFiles);
	    }
	}

/***/ },
/* 459 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var getFileReaderMethodName = __webpack_require__(457);
	
	var readFiles = __webpack_require__(458);
	
	function createDropHandler(_ref) {
	    var callback = _ref.callback;
	    var methodName = _ref.methodName;
	
	    return function dropHandler(event) {
	        event.preventDefault();
	        var files = event.dataTransfer.files;
	
	        if (files.length) {
	            readFiles(files, methodName, callback);
	        } else {
	            callback([]);
	        }
	    };
	}
	
	function createDragoverHandler() {
	    return function dragoverHandler(event) {
	        event.preventDefault();
	        event.dataTransfer.dropEffect = 'copy'; // eslint-disable-line no-param-reassign
	    };
	}
	
	module.exports = dropFilesBinder;
	function dropFilesBinder(readAs) {
	    var methodName = readAs ? getFileReaderMethodName(readAs) : null;
	    var dropHandler = void 0;
	    var dragoverHandler = void 0;
	
	    return {
	        on: function (callback) {
	            dropHandler = createDropHandler({
	                callback: callback,
	                methodName: methodName
	            });
	            dragoverHandler = createDragoverHandler();
	
	            this.addEventListener('drop', dropHandler);
	            this.addEventListener('dragover', dragoverHandler);
	        },
	        destroy: function () {
	            this.removeEventListener('drop', dropHandler);
	            this.removeEventListener('dragover', dragoverHandler);
	        },
	        getValue: function (_ref2) {
	            var domEvent = _ref2.domEvent;
	
	            return domEvent || [];
	        },
	
	        setValue: null
	    };
	}

/***/ },
/* 460 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = dragOver;
	function dragOver() {
	    return {
	        on: 'dragover dragenter dragleave dragend drop',
	        getValue: function (_ref) {
	            var domEvent = _ref.domEvent;
	
	            var eventType = domEvent && domEvent.type;
	
	            return eventType === 'dragover' || eventType === 'dragenter';
	        },
	
	        setValue: null
	    };
	}

/***/ },
/* 461 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _object = __webpack_require__(299);
	
	var _object2 = _interopRequireDefault(_object);
	
	var _classname = __webpack_require__(415);
	
	var _classname2 = _interopRequireDefault(_classname);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Tab = function (_MatreshkaObject) {
	    _inherits(Tab, _MatreshkaObject);
	
	    function Tab() {
	        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	        var parent = arguments[1];
	
	        var _this;
	
	        var name = arguments[2];
	
	        _classCallCheck(this, Tab);
	
	        (_this = _possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).call(this, data)), _this).set({
	            active: false
	        }).bindNode({
	            sandbox: '#' + name,
	            navItem: '.tab-nav-item[data-tab="' + name + '"]',
	            active: [{
	                node: ':sandbox',
	                binder: (0, _classname2.default)('hide', false)
	            }, {
	                node: ':bound(navItem)',
	                binder: (0, _classname2.default)('active')
	            }]
	        }).bindOptionalNode('error', ':sandbox .error').on({
	            'click::navItem': function clickNavItem() {
	                _this.active = true;
	            }
	        });
	        return _this;
	    }
	
	    return Tab;
	}(_object2.default);
	
	exports.default = Tab;

/***/ },
/* 462 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _array = __webpack_require__(312);
	
	var _array2 = _interopRequireDefault(_array);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FileList = function (_MatreshkaArray) {
	    _inherits(FileList, _MatreshkaArray);
	
	    function FileList() {
	        var _ref;
	
	        var _temp, _this;
	
	        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	
	        _classCallCheck(this, FileList);
	
	        (_temp = (_this = _possibleConstructorReturn(this, (_ref = FileList.__proto__ || Object.getPrototypeOf(FileList)).call.apply(_ref, [this].concat(_toConsumableArray(data)))), _this), _this.itemRenderer = '\n        <div class="file-item">\n            {{name}}\n            <span class="remove"></span>\n        </div>\n    ', _temp).bindNode({
	            sandbox: '#upload',
	            container: ':sandbox .file-list'
	        }).on({
	            '*@click::(.remove)': function clickRemove(_ref2) {
	                var self = _ref2.self;
	                return _this.pull(self);
	            }
	        }).rerender();
	        return _this;
	    }
	
	    return FileList;
	}(_array2.default);
	
	exports.default = FileList;

/***/ },
/* 463 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = validate;
	
	var _getUglifyJs = __webpack_require__(464);
	
	var _getUglifyJs2 = _interopRequireDefault(_getUglifyJs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function validate(code) {
	    var UglifyJS = (0, _getUglifyJs2.default)();
	    var isValid = true;
	    var error = null;
	
	    if (!code) {
	        isValid = false;
	        error = 'Falsy value is not valid code';
	    } else {
	        try {
	            UglifyJS.parse(code);
	        } catch (e) {
	            var line = e.line,
	                col = e.col,
	                _e$message = e.message,
	                message = _e$message === undefined ? 'Unknown error' : _e$message;
	
	            var info = '';
	
	            if (line || col) {
	                info = ' (line: ' + line + ', col: ' + col + ')';
	            }
	
	            isValid = false;
	            error = message + info;
	        }
	    }
	
	    return { isValid: isValid, error: error };
	}

/***/ },
/* 464 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.setUseECMAScriptNext = undefined;
	exports.default = getUglifyJS;
	
	var _uglifyJsBrowser = __webpack_require__(465);
	
	var _uglifyJsBrowser2 = _interopRequireDefault(_uglifyJsBrowser);
	
	var _uglifyJsBrowser3 = __webpack_require__(466);
	
	var _uglifyJsBrowser4 = _interopRequireDefault(_uglifyJsBrowser3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint-disable max-len, import/no-unresolved, import/no-extraneous-dependencies, import/extensions, import/no-webpack-loader-syntax */
	var useNext = false;
	var setUseECMAScriptNext = exports.setUseECMAScriptNext = function setUseECMAScriptNext(value) {
	    useNext = value;
	};
	
	function getUglifyJS() {
	    return useNext ? _uglifyJsBrowser4.default : _uglifyJsBrowser2.default;
	}

/***/ },
/* 465 */
/***/ function(module, exports, __webpack_require__) {

	!function(n,e){"use strict";function t(n){for(var e=Object.create(null),t=0;t<n.length;++t)e[n[t]]=!0;return e}function r(n){return n.split("")}function i(n,e){return e.indexOf(n)>=0}function o(n,e){for(var t=0,r=e.length;t<r;++t)if(n(e[t]))return e[t]}function a(n,e){if(e<=0)return"";if(1==e)return n;var t=a(n,e>>1);return t+=t,1&e&&(t+=n),t}function u(n,e){Error.call(this,n),this.msg=n,this.defs=e}function s(n,e,t){n===!0&&(n={});var r=n||{};if(t)for(var i in r)g(r,i)&&!g(e,i)&&u.croak("`"+i+"` is not a supported option",e);for(var i in e)g(e,i)&&(r[i]=n&&g(n,i)?n[i]:e[i]);return r}function c(n,e){var t=0;for(var r in e)g(e,r)&&(n[r]=e[r],t++);return t}function f(){}function l(n,e){n.indexOf(e)<0&&n.push(e)}function p(n,e){return n.replace(/\{(.+?)\}/g,function(n,t){return e[t]})}function d(n,e){for(var t=n.length;--t>=0;)n[t]===e&&n.splice(t,1)}function h(n,e){function t(n,t){for(var r=[],i=0,o=0,a=0;i<n.length&&o<t.length;)e(n[i],t[o])<=0?r[a++]=n[i++]:r[a++]=t[o++];return i<n.length&&r.push.apply(r,n.slice(i)),o<t.length&&r.push.apply(r,t.slice(o)),r}function r(n){if(n.length<=1)return n;var e=Math.floor(n.length/2),i=n.slice(0,e),o=n.slice(e);return i=r(i),o=r(o),t(i,o)}return n.length<2?n.slice():r(n)}function v(n){function e(n){return JSON.stringify(n).replace(/[\u2028\u2029]/g,function(n){switch(n){case"\u2028":return"\\u2028";case"\u2029":return"\\u2029"}return n})}function t(n){if(1==n.length)return r+="return str === "+e(n[0])+";";r+="switch(str){";for(var t=0;t<n.length;++t)r+="case "+e(n[t])+":";r+="return true}return false;"}n instanceof Array||(n=n.split(" "));var r="",i=[];n:for(var o=0;o<n.length;++o){for(var a=0;a<i.length;++a)if(i[a][0].length==n[o].length){i[a].push(n[o]);continue n}i.push([n[o]])}if(i.length>3){i.sort(function(n,e){return e.length-n.length}),r+="switch(str.length){";for(var o=0;o<i.length;++o){var u=i[o];r+="case "+u[0].length+":",t(u)}r+="}"}else t(n);return new Function("str",r)}function m(n,e){for(var t=n.length;--t>=0;)if(!e(n[t]))return!1;return!0}function _(){this._values=Object.create(null),this._size=0}function g(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function b(e,t,r,i){arguments.length<4&&(i=W),t=t?t.split(/\s+/):[];var o=t;i&&i.PROPS&&(t=t.concat(i.PROPS));for(var a="return function AST_"+e+"(props){ if (props) { ",u=t.length;--u>=0;)a+="this."+t[u]+" = props."+t[u]+";";var s=i&&new i;(s&&s.initialize||r&&r.initialize)&&(a+="this.initialize();"),a+="}}";var c=new Function(a)();if(s&&(c.prototype=s,c.BASE=i),i&&i.SUBCLASSES.push(c),c.prototype.CTOR=c,c.PROPS=t||null,c.SELF_PROPS=o,c.SUBCLASSES=[],e&&(c.prototype.TYPE=c.TYPE=e),r)for(u in r)g(r,u)&&(/^\$/.test(u)?c[u.substr(1)]=r[u]:c.prototype[u]=r[u]);return c.DEFMETHOD=function(n,e){this.prototype[n]=e},n["AST_"+e]=c,c}function y(n,e){n.body instanceof G?n.body._walk(e):n.body.forEach(function(n){n._walk(e)})}function A(n){this.visit=n,this.stack=[],this.directives=Object.create(null)}function w(n){return n>=97&&n<=122||n>=65&&n<=90||n>=170&&Ne.letter.test(String.fromCharCode(n))}function E(n){return n>=48&&n<=57}function D(n){return E(n)||w(n)}function x(n){return Ne.digit.test(String.fromCharCode(n))}function k(n){return Ne.non_spacing_mark.test(n)||Ne.space_combining_mark.test(n)}function F(n){return Ne.connector_punctuation.test(n)}function C(n){return!Ce(n)&&/^[a-z_$][a-z0-9_$]*$/i.test(n)}function B(n){return 36==n||95==n||w(n)}function S(n){var e=n.charCodeAt(0);return B(e)||E(e)||8204==e||8205==e||k(n)||F(n)||x(e)}function T(n){return/^[a-z_$][a-z0-9_$]*$/i.test(n)}function $(n){if(Te.test(n))return parseInt(n.substr(2),16);if($e.test(n))return parseInt(n.substr(1),8);var e=parseFloat(n);return e==n?e:void 0}function O(n,e,t,r,i){this.message=n,this.filename=e,this.line=t,this.col=r,this.pos=i,this.stack=(new Error).stack}function q(n,e,t,r,i){throw new O(n,e,t,r,i)}function M(n,e,t){return n.type==e&&(null==t||n.value==t)}function z(n,e,t,r){function i(){return T.text.charAt(T.pos)}function o(n,e){var t=T.text.charAt(T.pos++);if(n&&!t)throw je;return Me(t)?(T.newline_before=T.newline_before||!e,++T.line,T.col=0,e||"\r"!=t||"\n"!=i()||(++T.pos,t="\n")):++T.col,t}function a(n){for(;n-- >0;)o()}function u(n){return T.text.substr(T.pos,n.length)==n}function s(){for(var n=T.text,e=T.pos,t=T.text.length;e<t;++e){var r=n[e];if(Me(r))return e}return-1}function c(n,e){var t=T.text.indexOf(n,T.pos);if(e&&t==-1)throw je;return t}function f(){T.tokline=T.line,T.tokcol=T.col,T.tokpos=T.pos}function l(t,r,i){T.regex_allowed="operator"==t&&!Ie(r)||"keyword"==t&&Be(r)||"punc"==t&&ze(r),O="punc"==t&&"."==r;var o={type:t,value:r,line:T.tokline,col:T.tokcol,pos:T.tokpos,endline:T.line,endcol:T.col,endpos:T.pos,nlb:T.newline_before,file:e};if(/^(?:num|string|regexp)$/i.test(t)&&(o.raw=n.substring(o.pos,o.endpos)),!i){o.comments_before=T.comments_before,T.comments_before=[];for(var a=0,u=o.comments_before.length;a<u;a++)o.nlb=o.nlb||o.comments_before[a].nlb}return T.newline_before=!1,new Y(o)}function p(){for(;qe(i());)o()}function d(n){for(var e,t="",r=0;(e=i())&&n(e,r++);)t+=o();return t}function h(n){q(n,e,T.tokline,T.tokcol,T.tokpos)}function v(n){var e=!1,t=!1,r=!1,i="."==n,o=d(function(o,a){var u=o.charCodeAt(0);switch(u){case 120:case 88:return!r&&(r=!0);case 101:case 69:return!!r||!e&&(e=t=!0);case 45:return t||0==a&&!n;case 43:return t;case t=!1,46:return!(i||r||e)&&(i=!0)}return D(u)});n&&(o=n+o),$e.test(o)&&C.has_directive("use strict")&&h("SyntaxError: Legacy octal literals are not allowed in strict mode");var a=$(o);return isNaN(a)?void h("SyntaxError: Invalid syntax: "+o):l("num",a)}function m(n){var e=o(!0,n);switch(e.charCodeAt(0)){case 110:return"\n";case 114:return"\r";case 116:return"\t";case 98:return"\b";case 118:return"\v";case 102:return"\f";case 120:return String.fromCharCode(g(2));case 117:return String.fromCharCode(g(4));case 10:return"";case 13:if("\n"==i())return o(!0,n),""}return e>="0"&&e<="7"?_(e):e}function _(n){var e=i();return e>="0"&&e<="7"&&(n+=o(!0),n[0]<="3"&&(e=i())>="0"&&e<="7"&&(n+=o(!0))),"0"===n?"\0":(n.length>0&&C.has_directive("use strict")&&h("SyntaxError: Legacy octal escape sequences are not allowed in strict mode"),String.fromCharCode(parseInt(n,8)))}function g(n){for(var e=0;n>0;--n){var t=parseInt(o(!0),16);isNaN(t)&&h("SyntaxError: Invalid hex-character pattern in string"),e=e<<4|t}return e}function b(n){var e,t=T.regex_allowed,r=s();return r==-1?(e=T.text.substr(T.pos),T.pos=T.text.length):(e=T.text.substring(T.pos,r),T.pos=r),T.col=T.tokcol+(T.pos-T.tokpos),T.comments_before.push(l(n,e,!0)),T.regex_allowed=t,C}function y(){for(var n,e,t=!1,r="",a=!1;null!=(n=i());)if(t)"u"!=n&&h("SyntaxError: Expecting UnicodeEscapeSequence -- uXXXX"),n=m(),S(n)||h("SyntaxError: Unicode char: "+n.charCodeAt(0)+" is not valid in identifier"),r+=n,t=!1;else if("\\"==n)a=t=!0,o();else{if(!S(n))break;r+=o()}return ke(r)&&a&&(e=r.charCodeAt(0).toString(16).toUpperCase(),r="\\u"+"0000".substr(e.length)+e+r.slice(1)),r}function A(n){function e(n){if(!i())return n;var t=n+i();return Oe(t)?(o(),e(t)):n}return l("operator",e(n||o()))}function w(){switch(o(),i()){case"/":return o(),b("comment1");case"*":return o(),z()}return T.regex_allowed?H(""):A("/")}function x(){return o(),E(i().charCodeAt(0))?v("."):l("punc",".")}function k(){var n=y();return O?l("name",n):Fe(n)?l("atom",n):ke(n)?Oe(n)?l("operator",n):l("keyword",n):l("name",n)}function F(n,e){return function(t){try{return e(t)}catch(e){if(e!==je)throw e;h(n)}}}function C(n){if(null!=n)return H(n);for(;;){if(p(),f(),t){if(u("<!--")){a(4),b("comment3");continue}if(u("-->")&&T.newline_before){a(3),b("comment4");continue}}var e=i();if(!e)return l("eof");var s=e.charCodeAt(0);switch(s){case 34:case 39:return M(e);case 46:return x();case 47:var c=w();if(c===C)continue;return c}if(E(s))return v();if(He(e))return l("punc",o());if(Se(e))return A();if(92==s||B(s))return k();if(!r||0!=T.pos||!u("#!"))break;a(2),b("comment5")}h("SyntaxError: Unexpected character '"+e+"'")}var T={text:n,filename:e,pos:0,tokpos:0,line:1,tokline:0,col:0,tokcol:0,newline_before:!1,regex_allowed:!1,comments_before:[],directives:{},directive_stack:[]},O=!1,M=F("SyntaxError: Unterminated string constant",function(n){for(var e=o(),t="";;){var r=o(!0,!0);if("\\"==r)r=m(!0);else if(Me(r))h("SyntaxError: Unterminated string constant");else if(r==e)break;t+=r}var i=l("string",t);return i.quote=n,i}),z=F("SyntaxError: Unterminated multiline comment",function(){var n=T.regex_allowed,e=c("*/",!0),t=T.text.substring(T.pos,e).replace(/\r\n|\r|\u2028|\u2029/g,"\n");return a(t.length+2),T.comments_before.push(l("comment2",t,!0)),T.regex_allowed=n,C}),H=F("SyntaxError: Unterminated regular expression",function(n){for(var e,t=!1,r=!1;e=o(!0);)if(Me(e))h("SyntaxError: Unexpected line terminator");else if(t)n+="\\"+e,t=!1;else if("["==e)r=!0,n+=e;else if("]"==e&&r)r=!1,n+=e;else{if("/"==e&&!r)break;"\\"==e?t=!0:n+=e}var i=y();try{return l("regexp",new RegExp(n,i))}catch(n){h("SyntaxError: "+n.message)}});return C.context=function(n){return n&&(T=n),T},C.add_directive=function(n){T.directive_stack[T.directive_stack.length-1].push(n),void 0===T.directives[n]?T.directives[n]=1:T.directives[n]++},C.push_directives_stack=function(){T.directive_stack.push([])},C.pop_directives_stack=function(){for(var n=T.directive_stack[T.directive_stack.length-1],e=0;e<n.length;e++)T.directives[n[e]]--;T.directive_stack.pop()},C.has_directive=function(n){return void 0!==T.directives[n]&&T.directives[n]>0},C}function H(n,e){function t(n,e){return M(U.token,n,e)}function r(){return U.peeked||(U.peeked=U.input())}function i(){return U.prev=U.token,U.peeked?(U.token=U.peeked,U.peeked=null):U.token=U.input(),U.in_directives=U.in_directives&&("string"==U.token.type||t("punc",";")),U.token}function a(){return U.prev}function u(n,e,t,r){var i=U.input.context();q(n,i.filename,null!=e?e:i.tokline,null!=t?t:i.tokcol,null!=r?r:i.tokpos)}function c(n,e){u(e,n.line,n.col)}function f(n){null==n&&(n=U.token),c(n,"SyntaxError: Unexpected token: "+n.type+" ("+n.value+")")}function l(n,e){return t(n,e)?i():void c(U.token,"SyntaxError: Unexpected token "+U.token.type+" «"+U.token.value+"», expected "+n+" «"+e+"»")}function p(n){return l("punc",n)}function d(){return!e.strict&&(U.token.nlb||t("eof")||t("punc","}"))}function h(n){t("punc",";")?i():n||d()||f()}function v(){p("(");var n=kn(!0);return p(")"),n}function m(n){return function(){var e=U.token,t=n(),r=a();return t.start=e,t.end=r,t}}function _(){(t("operator","/")||t("operator","/="))&&(U.peeked=null,U.token=U.input(U.token.value.substr(1)))}function g(){var n=N(ce);o(function(e){return e.name==n.name},U.labels)&&u("SyntaxError: Label "+n.name+" defined twice"),p(":"),U.labels.push(n);var e=L();return U.labels.pop(),e instanceof rn||n.references.forEach(function(e){e instanceof En&&(e=e.label.start,u("SyntaxError: Continue label `"+n.name+"` refers to non-IterationStatement.",e.line,e.col,e.pos))}),new tn({body:e,label:n})}function b(n){return new Z({body:(n=kn(!0),h(),n)})}function y(n){var e,t=null;d()||(t=N(le,!0)),null!=t?(e=o(function(n){return n.name==t.name},U.labels),e||u("SyntaxError: Undefined label "+t.name),t.thedef=e):0==U.in_loop&&u("SyntaxError: "+n.TYPE+" not inside a loop or switch"),h();var r=new n({label:t});return e&&e.references.push(r),r}function A(){p("(");var n=null;return!t("punc",";")&&(n=t("keyword","var")?(i(),Y(!0)):kn(!0,!0),t("operator","in"))?(n instanceof On&&n.definitions.length>1&&u("SyntaxError: Only one variable declaration allowed in for..in loop"),i(),E(n)):w(n)}function w(n){p(";");var e=t("punc",";")?null:kn(!0);p(";");var r=t("punc",")")?null:kn(!0);return p(")"),new sn({init:n,condition:e,step:r,body:P(L)})}function E(n){var e=n instanceof On?n.definitions[0].name:null,t=kn(!0);return p(")"),new cn({init:n,name:e,object:t,body:P(L)})}function D(){var n=v(),e=L(),r=null;return t("keyword","else")&&(i(),r=L()),new Dn({condition:n,body:e,alternative:r})}function x(){p("{");for(var n=[];!t("punc","}");)t("eof")&&f(),n.push(L());return i(),n}function k(){p("{");for(var n,e=[],r=null,o=null;!t("punc","}");)t("eof")&&f(),t("keyword","case")?(o&&(o.end=a()),r=[],o=new Cn({start:(n=U.token,i(),n),expression:kn(!0),body:r}),e.push(o),p(":")):t("keyword","default")?(o&&(o.end=a()),r=[],o=new Fn({start:(n=U.token,i(),p(":"),n),body:r}),e.push(o)):(r||f(),r.push(L()));return o&&(o.end=a()),i(),e}function F(){var n=x(),e=null,r=null;if(t("keyword","catch")){var o=U.token;i(),p("(");var s=N(se);p(")"),e=new Sn({start:o,argname:s,body:x(),end:a()})}if(t("keyword","finally")){var o=U.token;i(),r=new Tn({start:o,body:x(),end:a()})}return e||r||u("SyntaxError: Missing catch/finally blocks"),new Bn({body:n,bcatch:e,bfinally:r})}function C(n,e){for(var r=[];r.push(new Mn({start:U.token,name:N(e?ie:re),value:t("operator","=")?(i(),kn(!1,n)):null,end:a()})),t("punc",",");)i();return r}function B(){var n,e=U.token;switch(e.type){case"name":case"keyword":n=H(fe);break;case"num":n=new ve({start:e,end:e,value:e.value});break;case"string":n=new he({start:e,end:e,value:e.value,quote:e.quote});break;case"regexp":n=new me({start:e,end:e,value:e.value});break;case"atom":switch(e.value){case"false":n=new De({start:e,end:e});break;case"true":n=new xe({start:e,end:e});break;case"null":n=new ge({start:e,end:e})}break;case"operator":T(e.value)||u("SyntaxError: Invalid getter/setter name: "+e.value,e.line,e.col,e.pos),n=H(fe)}return i(),n}function S(n,e,r){for(var o=!0,a=[];!t("punc",n)&&(o?o=!1:p(","),!e||!t("punc",n));)t("punc",",")&&r?a.push(new Ae({start:U.token,end:U.token})):a.push(kn(!1));return i(),a}function $(){var n=U.token;switch(i(),n.type){case"num":case"string":case"name":case"operator":case"keyword":case"atom":return n.value;default:f()}}function O(){var n=U.token;switch(i(),n.type){case"name":case"operator":case"keyword":case"atom":return n.value;default:f()}}function H(n){var e=U.token.value;return new("this"==e?pe:n)({name:String(e),start:U.token,end:U.token})}function N(n,e){if(!t("name"))return e||u("SyntaxError: Name expected"),null;var r=H(n);return i(),r}function j(n,e,t){return"++"!=e&&"--"!=e||I(t)||u("SyntaxError: Invalid use of "+e+" operator"),new n({operator:e,expression:t})}function R(n){return _n(dn(!0),0,n)}function I(n){return!e.strict||!(n instanceof pe)&&(n instanceof jn||n instanceof ne)}function P(n){++U.in_loop;var e=n();return--U.in_loop,e}e=s(e,{strict:!1,filename:null,toplevel:null,expression:!1,html5_comments:!0,bare_returns:!1,shebang:!0});var U={input:"string"==typeof n?z(n,e.filename,e.html5_comments,e.shebang):n,token:null,prev:null,peeked:null,in_function:0,in_directives:!0,in_loop:0,labels:[]};U.token=i();var L=m(function(){var n;switch(_(),U.token.type){case"string":var o=!1;U.in_directives===!0&&((M(r(),"punc",";")||r().nlb)&&U.token.raw.indexOf("\\")===-1?U.input.add_directive(U.token.value):U.in_directives=!1);var o=U.in_directives,s=b();return o?new X({start:s.body.start,end:s.body.end,quote:s.body.quote,value:s.body.value}):s;case"num":case"regexp":case"operator":case"atom":return b();case"name":return M(r(),"punc",":")?g():b();case"punc":switch(U.token.value){case"{":return new Q({start:U.token,body:x(),end:a()});case"[":case"(":return b();case";":return U.in_directives=!1,i(),new nn;default:f()}case"keyword":switch(n=U.token.value,i(),n){case"break":return y(wn);case"continue":return y(En);case"debugger":return h(),new J;case"do":return new an({body:P(L),condition:(l("keyword","while"),n=v(),h(!0),n)});case"while":return new un({condition:v(),body:P(L)});case"for":return A();case"function":return V(mn);case"if":return D();case"return":return 0!=U.in_function||e.bare_returns||u("SyntaxError: 'return' outside of function"),new bn({value:t("punc",";")?(i(),null):d()?null:(n=kn(!0),h(),n)});case"switch":return new xn({expression:v(),body:P(k)});case"throw":return U.token.nlb&&u("SyntaxError: Illegal newline after 'throw'"),new yn({value:(n=kn(!0),h(),n)});case"try":return F();case"var":return n=Y(),h(),n;case"const":return n=W(),h(),n;case"with":return U.input.has_directive("use strict")&&u("SyntaxError: Strict mode may not include a with statement"),new fn({expression:v(),body:L()});default:f()}}}),V=function(n){var e=n===mn,r=t("name")?N(e?ae:ue):null;return e&&!r&&f(),p("("),new n({name:r,argnames:function(n,e){for(;!t("punc",")");)n?n=!1:p(","),e.push(N(oe));return i(),e}(!0,[]),body:function(n,e){++U.in_function,U.in_directives=!0,U.input.push_directives_stack(),U.in_loop=0,U.labels=[];var t=x();return U.input.pop_directives_stack(),--U.in_function,U.in_loop=n,U.labels=e,t}(U.in_loop,U.labels)})},Y=function(n){return new On({start:a(),definitions:C(n,!1),end:a()})},W=function(){return new qn({start:a(),definitions:C(!1,!0),end:a()})},G=function(n){var e=U.token;l("operator","new");var r,o=K(!1);return t("punc","(")?(i(),r=S(")")):r=[],ln(new Hn({start:e,expression:o,args:r,end:a()}),n)},K=function(n){if(t("operator","new"))return G(n);var e=U.token;if(t("punc")){switch(e.value){case"(":i();var r=kn(!0);return r.start=e,r.end=U.token,p(")"),ln(r,n);case"[":return ln(en(),n);case"{":return ln(on(),n)}f()}if(t("keyword","function")){i();var o=V(vn);return o.start=e,o.end=a(),ln(o,n)}return Le[U.token.type]?ln(B(),n):void f()},en=m(function(){return p("["),new Gn({elements:S("]",!e.strict,!0)})}),on=m(function(){p("{");for(var n=!0,r=[];!t("punc","}")&&(n?n=!1:p(","),e.strict||!t("punc","}"));){var o=U.token,u=o.type,s=$();if("name"==u&&!t("punc",":")){if("get"==s){r.push(new Qn({start:o,key:B(),value:V(hn),end:a()}));continue}if("set"==s){r.push(new Kn({start:o,key:B(),value:V(hn),end:a()}));continue}}p(":"),r.push(new Zn({start:o,quote:o.quote,key:s,value:kn(!1),end:a()}))}return i(),new Jn({properties:r})}),ln=function(n,e){var r=n.start;if(t("punc","."))return i(),ln(new Rn({start:r,expression:n,property:O(),end:a()}),e);if(t("punc","[")){i();var o=kn(!0);return p("]"),ln(new In({start:r,expression:n,property:o,end:a()}),e)}return e&&t("punc","(")?(i(),ln(new zn({start:r,expression:n,args:S(")"),end:a()}),!0)):n},dn=function(n){var e=U.token;if(t("operator")&&Re(e.value)){i(),_();var r=j(Un,e.value,dn(n));return r.start=e,r.end=a(),r}for(var o=K(n);t("operator")&&Ie(U.token.value)&&!U.token.nlb;)o=j(Ln,U.token.value,o),o.start=e,o.end=U.token,i();return o},_n=function(n,e,r){var o=t("operator")?U.token.value:null;"in"==o&&r&&(o=null);var a=null!=o?Ue[o]:null;if(null!=a&&a>e){i();var u=_n(dn(!0),a,r);return _n(new Vn({start:n.start,left:n,operator:o,right:u,end:u.end}),e,r)}return n},gn=function(n){var e=U.token,r=R(n);if(t("operator","?")){i();var o=kn(!1);return p(":"),new Yn({start:e,condition:r,consequent:o,alternative:kn(!1,n),end:a()})}return r},An=function(n){var e=U.token,r=gn(n),o=U.token.value;if(t("operator")&&Pe(o)){if(I(r))return i(),new Wn({start:e,left:r,operator:o,right:An(n),end:a()});u("SyntaxError: Invalid assignment")}return r},kn=function(n,e){var o=U.token,a=An(e);return n&&t("punc",",")?(i(),new Nn({start:o,car:a,cdr:kn(!0,e),end:r()})):a};return e.expression?kn(!0):function(){var n=U.token,r=[];for(U.input.push_directives_stack();!t("eof");)r.push(L());U.input.pop_directives_stack();var i=a(),o=e.toplevel;return o?(o.body=o.body.concat(r),o.end=i):o=new pn({start:n,body:r,end:i}),o}()}function N(n,e){A.call(this),this.before=n,this.after=e}function j(n,e,t){this.name=t.name,this.orig=[t],this.scope=n,this.references=[],this.global=!1,this.mangled_name=null,this.undeclared=!1,this.constant=!1,this.index=e,this.id=j.next_id++}function R(n){function e(n,e){return n.replace(/[\u0000-\u001f\u007f-\uffff]/g,function(n){var t=n.charCodeAt(0).toString(16);if(t.length<=2&&!e){for(;t.length<2;)t="0"+t;return"\\x"+t}for(;t.length<4;)t="0"+t;return"\\u"+t})}function t(t,r){function i(){return"'"+t.replace(/\x27/g,"\\'")+"'"}function o(){return'"'+t.replace(/\x22/g,'\\"')+'"'}var a=0,u=0;switch(t=t.replace(/[\\\b\f\n\r\v\t\x22\x27\u2028\u2029\0\ufeff]/g,function(e,r){switch(e){case'"':return++a,'"';case"'":return++u,"'";case"\\":return"\\\\";case"\n":return"\\n";case"\r":return"\\r";case"\t":return"\\t";case"\b":return"\\b";case"\f":return"\\f";case"\v":return n.screw_ie8?"\\v":"\\x0B";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";case"\ufeff":return"\\ufeff";case"\0":return/[0-7]/.test(t.charAt(r+1))?"\\x00":"\\0"}return e}),n.ascii_only&&(t=e(t)),n.quote_style){case 1:return i();case 2:return o();case 3:return"'"==r?i():o();default:return a>u?i():o()}}function r(e,r){var i=t(e,r);return n.inline_script&&(i=i.replace(/<\x2fscript([>\/\t\n\f\r ])/gi,"<\\/script$1"),i=i.replace(/\x3c!--/g,"\\x3c!--"),i=i.replace(/--\x3e/g,"--\\x3e")),i}function i(t){return t=t.toString(),n.ascii_only&&(t=e(t,!0)),t}function o(e){return a(" ",n.indent_start+w-e*n.indent_level)}function u(){return B.charAt(B.length-1)}function c(){n.max_line_len&&E>n.max_line_len&&l("\n")}function l(e){e=String(e);var t=e.charAt(0);if(C&&(C=!1,t&&!(";}".indexOf(t)<0)||/[;]$/.test(B)||(n.semicolons||T(t)?(k+=";",E++,x++):(k+="\n",x++,D++,E=0,/^\s+$/.test(e)&&(C=!0)),n.beautify||(F=!1))),!n.beautify&&n.preserve_line&&N[N.length-1])for(var r=N[N.length-1].start.line;D<r;)k+="\n",x++,D++,E=0,F=!1;if(F){var i=u();(S(i)&&(S(t)||"\\"==t)||/^[\+\-\/]$/.test(t)&&t==i)&&(k+=" ",E++,x++),F=!1}var o=e.split(/\r?\n/),a=o.length-1;D+=a,0==a?E+=o[a].length:E=o[a].length,x+=e.length,B=e,k+=e}function p(){C=!1,l(";")}function d(){return w+n.indent_level}function h(n){var e;return l("{"),M(),q(d(),function(){e=n()}),O(),l("}"),e}function m(n){l("(");var e=n();return l(")"),e}function _(n){l("[");var e=n();return l("]"),e}function g(){l(","),$()}function b(){l(":"),n.space_colon&&$()}function y(){return k}if(n=s(n,{indent_start:0,indent_level:4,quote_keys:!1,space_colon:!0,ascii_only:!1,unescape_regexps:!1,inline_script:!1,width:80,max_line_len:32e3,beautify:!1,source_map:null,bracketize:!1,semicolons:!0,comments:!1,shebang:!0,preserve_line:!1,screw_ie8:!0,preamble:null,quote_style:0,keep_quoted_props:!1,wrap_iife:!1},!0),"string"==typeof n.comments&&/^\/.*\/[a-zA-Z]*$/.test(n.comments)){var A=n.comments.lastIndexOf("/");n.comments=new RegExp(n.comments.substr(1,A-1),n.comments.substr(A+1))}n.comments instanceof RegExp?n.comments=function(n){return function(e){return"comment5"==e.type||n.test(e.value)}}(n.comments):"function"==typeof n.comments?n.comments=function(n){return function(e){return"comment5"==e.type||n(this,e)}}(n.comments):"some"===n.comments?n.comments=function(n){var e=n.value,t=n.type;return"comment2"==t?/@preserve|@license|@cc_on/i.test(e):"comment5"==t}:n.comments?n.comments=function(){return!0}:n.comments=function(n){return"comment5"==n.type};var w=0,E=0,D=1,x=0,k="",F=!1,C=!1,B=null,T=v("( [ + * / - , ."),$=n.beautify?function(){l(" ")}:function(){F=!0},O=n.beautify?function(e){n.beautify&&l(o(e?.5:0))}:f,q=n.beautify?function(n,e){n===!0&&(n=d());var t=w;w=n;var r=e();return w=t,r}:function(n,e){return e()},M=n.beautify?function(){l("\n")}:c,z=n.beautify?function(){l(";")}:function(){C=!0},H=n.source_map?function(e,t){try{e&&n.source_map.add(e.file||"?",D,E,e.line,e.col,t||"name"!=e.type?t:e.value)}catch(n){W.warn("Couldn't figure out mapping for {file}:{line},{col} → {cline},{ccol} [{name}]",{file:e.file,line:e.line,col:e.col,cline:D,ccol:E,name:t||""})}}:f;n.preamble&&l(n.preamble.replace(/\r\n?|[\n\u2028\u2029]|\s*$/g,"\n"));var N=[];return{get:y,toString:y,indent:O,indentation:function(){return w},current_width:function(){return E-w},should_break:function(){return n.width&&this.current_width()>=n.width},newline:M,print:l,space:$,comma:g,colon:b,last:function(){return B},semicolon:z,force_semicolon:p,to_ascii:e,print_name:function(n){l(i(n))},print_string:function(n,e,t){var i=r(n,e);t===!0&&i.indexOf("\\")===-1&&(Ye.test(k)||p(),p()),l(i)},encode_string:r,next_indent:d,with_indent:q,with_block:h,with_parens:m,with_square:_,add_mapping:H,option:function(e){return n[e]},line:function(){return D},col:function(){return E},pos:function(){return x},push_node:function(n){N.push(n)},pop_node:function(){return N.pop()},stack:function(){return N},parent:function(n){return N[N.length-2-(n||0)]}}}function I(n,e){if(!(this instanceof I))return new I(n,e);N.call(this,this.before,this.after),this.options=s(n,{sequences:!e,properties:!e,dead_code:!e,drop_debugger:!e,unsafe:!1,unsafe_comps:!1,conditionals:!e,comparisons:!e,evaluate:!e,booleans:!e,loops:!e,unused:!e,hoist_funs:!e,keep_fargs:!0,keep_fnames:!1,hoist_vars:!1,if_return:!e,join_vars:!e,collapse_vars:!1,reduce_vars:!1,cascade:!e,side_effects:!e,pure_getters:!1,pure_funcs:null,negate_iife:!e,screw_ie8:!0,drop_console:!1,angular:!1,warnings:!0,global_defs:{},passes:1},!0);var t=this.options.sequences;this.sequences_limit=1==t?200:0|t,this.warnings_produced={}}function P(n){function e(e,i,o,a,u,s){if(r){var c=r.originalPositionFor({line:a,column:u});if(null===c.source)return;e=c.source,a=c.line,u=c.column,s=c.name||s}t.addMapping({generated:{line:i+n.dest_line_diff,column:o},original:{line:a+n.orig_line_diff,column:u},source:e,name:s})}n=s(n,{file:null,root:null,orig:null,orig_line_diff:0,dest_line_diff:0});var t=new MOZ_SourceMap.SourceMapGenerator({file:n.file,sourceRoot:n.root}),r=n.orig&&new MOZ_SourceMap.SourceMapConsumer(n.orig);return r&&Array.isArray(n.orig.sources)&&n.orig.sources.forEach(function(n){var e=r.sourceContentFor(n,!0);e&&t.setSourceContent(n,e)}),{add:e,get:function(){return t},toString:function(){return JSON.stringify(t.toJSON())}}}function U(){function n(n){l(e,n)}var e=[];return[Object,Array,Function,Number,String,Boolean,Error,Math,Date,RegExp].forEach(function(e){Object.getOwnPropertyNames(e).map(n),e.prototype&&Object.getOwnPropertyNames(e.prototype).map(n)}),e}function L(n,e){function t(n){return!(v.indexOf(n)>=0)&&(!(c.indexOf(n)>=0)&&(e.only_cache?f.props.has(n):!/^[0-9.]+$/.test(n)))}function r(n){return!(d&&n in m)&&(!(p&&!p.test(n))&&(!(c.indexOf(n)>=0)&&(f.props.has(n)||h.indexOf(n)>=0)))}function i(n,e){return e?void(m[n]=!0):(t(n)&&l(h,n),void(r(n)||l(v,n)))}function o(n){if(!r(n))return n;var e=f.props.get(n);if(!e){do e=Ve(++f.cname);while(!t(e));f.props.set(n,e)}return e}function a(n,e){var t={};try{!function n(r){r.walk(new A(function(r){if(r instanceof Nn)return n(r.cdr),!0;if(r instanceof he)return i(r.value,e),!0;if(r instanceof Yn)return n(r.consequent),n(r.alternative),!0;throw t}))}(n)}catch(n){if(n!==t)throw n}}function u(n){return n.transform(new N(function(n){return n instanceof Nn?n.cdr=u(n.cdr):n instanceof he?n.value=o(n.value):n instanceof Yn&&(n.consequent=u(n.consequent),n.alternative=u(n.alternative)),n}))}e=s(e,{reserved:null,cache:null,only_cache:!1,regex:null,ignore_quoted:!1});var c=e.reserved;null==c&&(c=U());var f=e.cache;null==f&&(f={cname:-1,props:new _});var p=e.regex,d=e.ignore_quoted,h=[],v=[],m={};return n.walk(new A(function(n){n instanceof Zn?i(n.key,d&&n.quote):n instanceof Xn?i(n.key.name):n instanceof Rn?i(n.property):n instanceof In&&a(n.property,d)})),n.transform(new N(function(n){n instanceof Zn?d&&n.quote||(n.key=o(n.key)):n instanceof Xn?n.key.name=o(n.key.name):n instanceof Rn?n.property=o(n.property):n instanceof In&&(d||(n.property=u(n.property)))}))}u.prototype=Object.create(Error.prototype),u.prototype.constructor=u,u.croak=function(n,e){throw new u(n,e)};var V=function(){function n(n,o,a){function u(){var u=o(n[s],s),l=u instanceof r;return l&&(u=u.v),u instanceof e?(u=u.v,u instanceof t?f.push.apply(f,a?u.v.slice().reverse():u.v):f.push(u)):u!==i&&(u instanceof t?c.push.apply(c,a?u.v.slice().reverse():u.v):c.push(u)),l}var s,c=[],f=[];if(n instanceof Array)if(a){for(s=n.length;--s>=0&&!u(););c.reverse(),f.reverse()}else for(s=0;s<n.length&&!u();++s);else for(s in n)if(g(n,s)&&u())break;return f.concat(c)}function e(n){this.v=n}function t(n){this.v=n}function r(n){this.v=n}n.at_top=function(n){return new e(n)},n.splice=function(n){return new t(n)},n.last=function(n){return new r(n)};var i=n.skip={};return n}();_.prototype={set:function(n,e){return this.has(n)||++this._size,this._values["$"+n]=e,this},add:function(n,e){return this.has(n)?this.get(n).push(e):this.set(n,[e]),this},get:function(n){return this._values["$"+n]},del:function(n){return this.has(n)&&(--this._size,delete this._values["$"+n]),this},has:function(n){return"$"+n in this._values},each:function(n){for(var e in this._values)n(this._values[e],e.substr(1))},size:function(){return this._size},map:function(n){var e=[];for(var t in this._values)e.push(n(this._values[t],t.substr(1)));return e},toObject:function(){return this._values}},_.fromObject=function(n){var e=new _;return e._size=c(e._values,n),e};var Y=b("Token","type value line col pos endline endcol endpos nlb comments_before file raw",{},null),W=b("Node","start end",{clone:function(){return new this.CTOR(this)},$documentation:"Base class of all AST nodes",$propdoc:{start:"[AST_Token] The first token of this node",end:"[AST_Token] The last token of this node"},_walk:function(n){return n._visit(this)},walk:function(n){return this._walk(n)}},null);W.warn_function=null,W.warn=function(n,e){W.warn_function&&W.warn_function(p(n,e))};var G=b("Statement",null,{$documentation:"Base class of all statements"}),J=b("Debugger",null,{$documentation:"Represents a debugger statement"},G),X=b("Directive","value scope quote",{$documentation:'Represents a directive, like "use strict";',$propdoc:{value:"[string] The value of this directive as a plain string (it's not an AST_String!)",scope:"[AST_Scope/S] The scope that this directive affects",quote:"[string] the original quote character"}},G),Z=b("SimpleStatement","body",{$documentation:"A statement consisting of an expression, i.e. a = 1 + 2",$propdoc:{body:"[AST_Node] an expression node (should not be instanceof AST_Statement)"},_walk:function(n){return n._visit(this,function(){this.body._walk(n)})}},G),K=b("Block","body",{$documentation:"A body of statements (usually bracketed)",$propdoc:{body:"[AST_Statement*] an array of statements"},_walk:function(n){return n._visit(this,function(){y(this,n)})}},G),Q=b("BlockStatement",null,{$documentation:"A block statement"},K),nn=b("EmptyStatement",null,{$documentation:"The empty statement (empty block or simply a semicolon)",_walk:function(n){return n._visit(this)}},G),en=b("StatementWithBody","body",{$documentation:"Base class for all statements that contain one nested body: `For`, `ForIn`, `Do`, `While`, `With`",$propdoc:{body:"[AST_Statement] the body; this should always be present, even if it's an AST_EmptyStatement"},_walk:function(n){return n._visit(this,function(){this.body._walk(n)})}},G),tn=b("LabeledStatement","label",{$documentation:"Statement with a label",$propdoc:{label:"[AST_Label] a label definition"},_walk:function(n){return n._visit(this,function(){this.label._walk(n),this.body._walk(n)})}},en),rn=b("IterationStatement",null,{$documentation:"Internal class.  All loops inherit from it."},en),on=b("DWLoop","condition",{$documentation:"Base class for do/while statements",$propdoc:{condition:"[AST_Node] the loop condition.  Should not be instanceof AST_Statement"}},rn),an=b("Do",null,{$documentation:"A `do` statement",_walk:function(n){return n._visit(this,function(){this.body._walk(n),this.condition._walk(n)})}},on),un=b("While",null,{$documentation:"A `while` statement",_walk:function(n){return n._visit(this,function(){this.condition._walk(n),this.body._walk(n)})}},on),sn=b("For","init condition step",{$documentation:"A `for` statement",$propdoc:{init:"[AST_Node?] the `for` initialization code, or null if empty",condition:"[AST_Node?] the `for` termination clause, or null if empty",step:"[AST_Node?] the `for` update clause, or null if empty"},_walk:function(n){return n._visit(this,function(){this.init&&this.init._walk(n),this.condition&&this.condition._walk(n),this.step&&this.step._walk(n),this.body._walk(n)})}},rn),cn=b("ForIn","init name object",{$documentation:"A `for ... in` statement",$propdoc:{init:"[AST_Node] the `for/in` initialization code",
	name:"[AST_SymbolRef?] the loop variable, only if `init` is AST_Var",object:"[AST_Node] the object that we're looping through"},_walk:function(n){return n._visit(this,function(){this.init._walk(n),this.object._walk(n),this.body._walk(n)})}},rn),fn=b("With","expression",{$documentation:"A `with` statement",$propdoc:{expression:"[AST_Node] the `with` expression"},_walk:function(n){return n._visit(this,function(){this.expression._walk(n),this.body._walk(n)})}},en),ln=b("Scope","directives variables functions uses_with uses_eval parent_scope enclosed cname",{$documentation:"Base class for all statements introducing a lexical scope",$propdoc:{directives:"[string*/S] an array of directives declared in this scope",variables:"[Object/S] a map of name -> SymbolDef for all variables/functions defined in this scope",functions:"[Object/S] like `variables`, but only lists function declarations",uses_with:"[boolean/S] tells whether this scope uses the `with` statement",uses_eval:"[boolean/S] tells whether this scope contains a direct call to the global `eval`",parent_scope:"[AST_Scope?/S] link to the parent scope",enclosed:"[SymbolDef*/S] a list of all symbol definitions that are accessed from this scope or any subscopes",cname:"[integer/S] current index for mangling variables (used internally by the mangler)"}},K),pn=b("Toplevel","globals",{$documentation:"The toplevel scope",$propdoc:{globals:"[Object/S] a map of name -> SymbolDef for all undeclared names"},wrap_enclose:function(n){var e=this,t=[],r=[];n.forEach(function(n){var e=n.lastIndexOf(":");t.push(n.substr(0,e)),r.push(n.substr(e+1))});var i="(function("+r.join(",")+"){ '$ORIG'; })("+t.join(",")+")";return i=H(i),i=i.transform(new N(function(n){if(n instanceof X&&"$ORIG"==n.value)return V.splice(e.body)}))},wrap_commonjs:function(n,e){var t=this,r=[];e&&(t.figure_out_scope(),t.walk(new A(function(n){n instanceof te&&n.definition().global&&(o(function(e){return e.name==n.name},r)||r.push(n))})));var i="(function(exports, global){ '$ORIG'; '$EXPORTS'; global['"+n+"'] = exports; }({}, (function(){return this}())))";return i=H(i),i=i.transform(new N(function(n){if(n instanceof X)switch(n.value){case"$ORIG":return V.splice(t.body);case"$EXPORTS":var e=[];return r.forEach(function(n){e.push(new Z({body:new Wn({left:new In({expression:new fe({name:"exports"}),property:new he({value:n.name})}),operator:"=",right:new fe(n)})}))}),V.splice(e)}}))}},ln),dn=b("Lambda","name argnames uses_arguments",{$documentation:"Base class for functions",$propdoc:{name:"[AST_SymbolDeclaration?] the name of this function",argnames:"[AST_SymbolFunarg*] array of function arguments",uses_arguments:"[boolean/S] tells whether this function accesses the arguments array"},_walk:function(n){return n._visit(this,function(){this.name&&this.name._walk(n),this.argnames.forEach(function(e){e._walk(n)}),y(this,n)})}},ln),hn=b("Accessor",null,{$documentation:"A setter/getter function.  The `name` property is always null."},dn),vn=b("Function",null,{$documentation:"A function expression"},dn),mn=b("Defun",null,{$documentation:"A function definition"},dn),_n=b("Jump",null,{$documentation:"Base class for “jumps” (for now that's `return`, `throw`, `break` and `continue`)"},G),gn=b("Exit","value",{$documentation:"Base class for “exits” (`return` and `throw`)",$propdoc:{value:"[AST_Node?] the value returned or thrown by this statement; could be null for AST_Return"},_walk:function(n){return n._visit(this,this.value&&function(){this.value._walk(n)})}},_n),bn=b("Return",null,{$documentation:"A `return` statement"},gn),yn=b("Throw",null,{$documentation:"A `throw` statement"},gn),An=b("LoopControl","label",{$documentation:"Base class for loop control statements (`break` and `continue`)",$propdoc:{label:"[AST_LabelRef?] the label, or null if none"},_walk:function(n){return n._visit(this,this.label&&function(){this.label._walk(n)})}},_n),wn=b("Break",null,{$documentation:"A `break` statement"},An),En=b("Continue",null,{$documentation:"A `continue` statement"},An),Dn=b("If","condition alternative",{$documentation:"A `if` statement",$propdoc:{condition:"[AST_Node] the `if` condition",alternative:"[AST_Statement?] the `else` part, or null if not present"},_walk:function(n){return n._visit(this,function(){this.condition._walk(n),this.body._walk(n),this.alternative&&this.alternative._walk(n)})}},en),xn=b("Switch","expression",{$documentation:"A `switch` statement",$propdoc:{expression:"[AST_Node] the `switch` “discriminant”"},_walk:function(n){return n._visit(this,function(){this.expression._walk(n),y(this,n)})}},K),kn=b("SwitchBranch",null,{$documentation:"Base class for `switch` branches"},K),Fn=b("Default",null,{$documentation:"A `default` switch branch"},kn),Cn=b("Case","expression",{$documentation:"A `case` switch branch",$propdoc:{expression:"[AST_Node] the `case` expression"},_walk:function(n){return n._visit(this,function(){this.expression._walk(n),y(this,n)})}},kn),Bn=b("Try","bcatch bfinally",{$documentation:"A `try` statement",$propdoc:{bcatch:"[AST_Catch?] the catch block, or null if not present",bfinally:"[AST_Finally?] the finally block, or null if not present"},_walk:function(n){return n._visit(this,function(){y(this,n),this.bcatch&&this.bcatch._walk(n),this.bfinally&&this.bfinally._walk(n)})}},K),Sn=b("Catch","argname",{$documentation:"A `catch` node; only makes sense as part of a `try` statement",$propdoc:{argname:"[AST_SymbolCatch] symbol for the exception"},_walk:function(n){return n._visit(this,function(){this.argname._walk(n),y(this,n)})}},K),Tn=b("Finally",null,{$documentation:"A `finally` node; only makes sense as part of a `try` statement"},K),$n=b("Definitions","definitions",{$documentation:"Base class for `var` or `const` nodes (variable declarations/initializations)",$propdoc:{definitions:"[AST_VarDef*] array of variable definitions"},_walk:function(n){return n._visit(this,function(){this.definitions.forEach(function(e){e._walk(n)})})}},G),On=b("Var",null,{$documentation:"A `var` statement"},$n),qn=b("Const",null,{$documentation:"A `const` statement"},$n),Mn=b("VarDef","name value",{$documentation:"A variable declaration; only appears in a AST_Definitions node",$propdoc:{name:"[AST_SymbolVar|AST_SymbolConst] name of the variable",value:"[AST_Node?] initializer, or null of there's no initializer"},_walk:function(n){return n._visit(this,function(){this.name._walk(n),this.value&&this.value._walk(n)})}}),zn=b("Call","expression args",{$documentation:"A function call expression",$propdoc:{expression:"[AST_Node] expression to invoke as function",args:"[AST_Node*] array of arguments"},_walk:function(n){return n._visit(this,function(){this.expression._walk(n),this.args.forEach(function(e){e._walk(n)})})}}),Hn=b("New",null,{$documentation:"An object instantiation.  Derives from a function call since it has exactly the same properties"},zn),Nn=b("Seq","car cdr",{$documentation:"A sequence expression (two comma-separated expressions)",$propdoc:{car:"[AST_Node] first element in sequence",cdr:"[AST_Node] second element in sequence"},$cons:function(n,e){var t=new Nn(n);return t.car=n,t.cdr=e,t},$from_array:function(n){if(0==n.length)return null;if(1==n.length)return n[0].clone();for(var e=null,t=n.length;--t>=0;)e=Nn.cons(n[t],e);for(var r=e;r;){if(r.cdr&&!r.cdr.cdr){r.cdr=r.cdr.car;break}r=r.cdr}return e},to_array:function(){for(var n=this,e=[];n;){if(e.push(n.car),n.cdr&&!(n.cdr instanceof Nn)){e.push(n.cdr);break}n=n.cdr}return e},add:function(n){for(var e=this;e;){if(!(e.cdr instanceof Nn)){var t=Nn.cons(e.cdr,n);return e.cdr=t}e=e.cdr}},len:function(){return this.cdr instanceof Nn?this.cdr.len()+1:2},_walk:function(n){return n._visit(this,function(){this.car._walk(n),this.cdr&&this.cdr._walk(n)})}}),jn=b("PropAccess","expression property",{$documentation:'Base class for property access expressions, i.e. `a.foo` or `a["foo"]`',$propdoc:{expression:"[AST_Node] the “container” expression",property:"[AST_Node|string] the property to access.  For AST_Dot this is always a plain string, while for AST_Sub it's an arbitrary AST_Node"}}),Rn=b("Dot",null,{$documentation:"A dotted property access expression",_walk:function(n){return n._visit(this,function(){this.expression._walk(n)})}},jn),In=b("Sub",null,{$documentation:'Index-style property access, i.e. `a["foo"]`',_walk:function(n){return n._visit(this,function(){this.expression._walk(n),this.property._walk(n)})}},jn),Pn=b("Unary","operator expression",{$documentation:"Base class for unary expressions",$propdoc:{operator:"[string] the operator",expression:"[AST_Node] expression that this unary operator applies to"},_walk:function(n){return n._visit(this,function(){this.expression._walk(n)})}}),Un=b("UnaryPrefix",null,{$documentation:"Unary prefix expression, i.e. `typeof i` or `++i`"},Pn),Ln=b("UnaryPostfix",null,{$documentation:"Unary postfix expression, i.e. `i++`"},Pn),Vn=b("Binary","left operator right",{$documentation:"Binary expression, i.e. `a + b`",$propdoc:{left:"[AST_Node] left-hand side expression",operator:"[string] the operator",right:"[AST_Node] right-hand side expression"},_walk:function(n){return n._visit(this,function(){this.left._walk(n),this.right._walk(n)})}}),Yn=b("Conditional","condition consequent alternative",{$documentation:"Conditional expression using the ternary operator, i.e. `a ? b : c`",$propdoc:{condition:"[AST_Node]",consequent:"[AST_Node]",alternative:"[AST_Node]"},_walk:function(n){return n._visit(this,function(){this.condition._walk(n),this.consequent._walk(n),this.alternative._walk(n)})}}),Wn=b("Assign",null,{$documentation:"An assignment expression — `a = b + 5`"},Vn),Gn=b("Array","elements",{$documentation:"An array literal",$propdoc:{elements:"[AST_Node*] array of elements"},_walk:function(n){return n._visit(this,function(){this.elements.forEach(function(e){e._walk(n)})})}}),Jn=b("Object","properties",{$documentation:"An object literal",$propdoc:{properties:"[AST_ObjectProperty*] array of properties"},_walk:function(n){return n._visit(this,function(){this.properties.forEach(function(e){e._walk(n)})})}}),Xn=b("ObjectProperty","key value",{$documentation:"Base class for literal object properties",$propdoc:{key:"[string] the property name converted to a string for ObjectKeyVal.  For setters and getters this is an arbitrary AST_Node.",value:"[AST_Node] property value.  For setters and getters this is an AST_Function."},_walk:function(n){return n._visit(this,function(){this.value._walk(n)})}}),Zn=b("ObjectKeyVal","quote",{$documentation:"A key: value object property",$propdoc:{quote:"[string] the original quote character"}},Xn),Kn=b("ObjectSetter",null,{$documentation:"An object setter property"},Xn),Qn=b("ObjectGetter",null,{$documentation:"An object getter property"},Xn),ne=b("Symbol","scope name thedef",{$propdoc:{name:"[string] name of this symbol",scope:"[AST_Scope/S] the current scope (not necessarily the definition scope)",thedef:"[SymbolDef/S] the definition of this symbol"},$documentation:"Base class for all symbols"}),ee=b("SymbolAccessor",null,{$documentation:"The name of a property accessor (setter/getter function)"},ne),te=b("SymbolDeclaration","init",{$documentation:"A declaration symbol (symbol in var/const, function name or argument, symbol in catch)",$propdoc:{init:"[AST_Node*/S] array of initializers for this declaration."}},ne),re=b("SymbolVar",null,{$documentation:"Symbol defining a variable"},te),ie=b("SymbolConst",null,{$documentation:"A constant declaration"},te),oe=b("SymbolFunarg",null,{$documentation:"Symbol naming a function argument"},re),ae=b("SymbolDefun",null,{$documentation:"Symbol defining a function"},te),ue=b("SymbolLambda",null,{$documentation:"Symbol naming a function expression"},te),se=b("SymbolCatch",null,{$documentation:"Symbol naming the exception in catch"},te),ce=b("Label","references",{$documentation:"Symbol naming a label (declaration)",$propdoc:{references:"[AST_LoopControl*] a list of nodes referring to this label"},initialize:function(){this.references=[],this.thedef=this}},ne),fe=b("SymbolRef",null,{$documentation:"Reference to some symbol (not definition/declaration)"},ne),le=b("LabelRef",null,{$documentation:"Reference to a label symbol"},ne),pe=b("This",null,{$documentation:"The `this` symbol"},ne),de=b("Constant",null,{$documentation:"Base class for all constants",getValue:function(){return this.value}}),he=b("String","value quote",{$documentation:"A string literal",$propdoc:{value:"[string] the contents of this string",quote:"[string] the original quote character"}},de),ve=b("Number","value literal",{$documentation:"A number literal",$propdoc:{value:"[number] the numeric value",literal:"[string] numeric value as string (optional)"}},de),me=b("RegExp","value",{$documentation:"A regexp literal",$propdoc:{value:"[RegExp] the actual regexp"}},de),_e=b("Atom",null,{$documentation:"Base class for atoms"},de),ge=b("Null",null,{$documentation:"The `null` atom",value:null},_e),be=b("NaN",null,{$documentation:"The impossible value",value:NaN},_e),ye=b("Undefined",null,{$documentation:"The `undefined` value",value:void 0},_e),Ae=b("Hole",null,{$documentation:"A hole in an array",value:void 0},_e),we=b("Infinity",null,{$documentation:"The `Infinity` value",value:1/0},_e),Ee=b("Boolean",null,{$documentation:"Base class for booleans"},_e),De=b("False",null,{$documentation:"The `false` atom",value:!1},Ee),xe=b("True",null,{$documentation:"The `true` atom",value:!0},Ee);A.prototype={_visit:function(n,e){this.push(n);var t=this.visit(n,e?function(){e.call(n)}:f);return!t&&e&&e.call(n),this.pop(n),t},parent:function(n){return this.stack[this.stack.length-2-(n||0)]},push:function(n){n instanceof dn?this.directives=Object.create(this.directives):n instanceof X&&(this.directives[n.value]=!this.directives[n.value]||"up"),this.stack.push(n)},pop:function(n){this.stack.pop(),n instanceof dn&&(this.directives=Object.getPrototypeOf(this.directives))},self:function(){return this.stack[this.stack.length-1]},find_parent:function(n){for(var e=this.stack,t=e.length;--t>=0;){var r=e[t];if(r instanceof n)return r}},has_directive:function(n){var e=this.directives[n];if(e)return e;var t=this.stack[this.stack.length-1];if(t instanceof ln)for(var r=0;r<t.body.length;++r){var i=t.body[r];if(!(i instanceof X))break;if(i.value==n)return!0}},in_boolean_context:function(){for(var n=this.stack,e=n.length,t=n[--e];e>0;){var r=n[--e];if(r instanceof Dn&&r.condition===t||r instanceof Yn&&r.condition===t||r instanceof on&&r.condition===t||r instanceof sn&&r.condition===t||r instanceof Un&&"!"==r.operator&&r.expression===t)return!0;if(!(r instanceof Vn)||"&&"!=r.operator&&"||"!=r.operator)return!1;t=r}},loopcontrol_target:function(n){var e=this.stack;if(n)for(var t=e.length;--t>=0;){var r=e[t];if(r instanceof tn&&r.label.name==n.name)return r.body}else for(var t=e.length;--t>=0;){var r=e[t];if(r instanceof xn||r instanceof rn)return r}}};var ke="break case catch const continue debugger default delete do else finally for function if in instanceof new return switch throw try typeof var void while with",Fe="false null true",Ce="abstract boolean byte char class double enum export extends final float goto implements import int interface let long native package private protected public short static super synchronized this throws transient volatile yield "+Fe+" "+ke,Be="return new delete throw else case";ke=v(ke),Ce=v(Ce),Be=v(Be),Fe=v(Fe);var Se=v(r("+-*&%=<>!?|~^")),Te=/^0x[0-9a-f]+$/i,$e=/^0[0-7]+$/,Oe=v(["in","instanceof","typeof","new","void","delete","++","--","+","-","!","~","&","|","^","*","/","%",">>","<<",">>>","<",">","<=",">=","==","===","!=","!==","?","=","+=","-=","/=","*=","%=",">>=","<<=",">>>=","|=","^=","&=","&&","||"]),qe=v(r("  \n\r\t\f\v​           \u2028\u2029  　\ufeff")),Me=v(r("\n\r\u2028\u2029")),ze=v(r("[{(,.;:")),He=v(r("[]{}(),;:")),Ne=(v(r("gmsiy")),{letter:new RegExp("[\\u0041-\\u005A\\u0061-\\u007A\\u00AA\\u00B5\\u00BA\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0370-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u048A-\\u052F\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0620-\\u064A\\u066E\\u066F\\u0671-\\u06D3\\u06D5\\u06E5\\u06E6\\u06EE\\u06EF\\u06FA-\\u06FC\\u06FF\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\u07CA-\\u07EA\\u07F4\\u07F5\\u07FA\\u0800-\\u0815\\u081A\\u0824\\u0828\\u0840-\\u0858\\u08A0-\\u08B2\\u0904-\\u0939\\u093D\\u0950\\u0958-\\u0961\\u0971-\\u0980\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BD\\u09CE\\u09DC\\u09DD\\u09DF-\\u09E1\\u09F0\\u09F1\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A59-\\u0A5C\\u0A5E\\u0A72-\\u0A74\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABD\\u0AD0\\u0AE0\\u0AE1\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3D\\u0B5C\\u0B5D\\u0B5F-\\u0B61\\u0B71\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BD0\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D\\u0C58\\u0C59\\u0C60\\u0C61\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBD\\u0CDE\\u0CE0\\u0CE1\\u0CF1\\u0CF2\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D\\u0D4E\\u0D60\\u0D61\\u0D7A-\\u0D7F\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0E01-\\u0E30\\u0E32\\u0E33\\u0E40-\\u0E46\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD-\\u0EB0\\u0EB2\\u0EB3\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EDC-\\u0EDF\\u0F00\\u0F40-\\u0F47\\u0F49-\\u0F6C\\u0F88-\\u0F8C\\u1000-\\u102A\\u103F\\u1050-\\u1055\\u105A-\\u105D\\u1061\\u1065\\u1066\\u106E-\\u1070\\u1075-\\u1081\\u108E\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FC-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u1380-\\u138F\\u13A0-\\u13F4\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16EE-\\u16F8\\u1700-\\u170C\\u170E-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176C\\u176E-\\u1770\\u1780-\\u17B3\\u17D7\\u17DC\\u1820-\\u1877\\u1880-\\u18A8\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1950-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19C1-\\u19C7\\u1A00-\\u1A16\\u1A20-\\u1A54\\u1AA7\\u1B05-\\u1B33\\u1B45-\\u1B4B\\u1B83-\\u1BA0\\u1BAE\\u1BAF\\u1BBA-\\u1BE5\\u1C00-\\u1C23\\u1C4D-\\u1C4F\\u1C5A-\\u1C7D\\u1CE9-\\u1CEC\\u1CEE-\\u1CF1\\u1CF5\\u1CF6\\u1D00-\\u1DBF\\u1E00-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u2071\\u207F\\u2090-\\u209C\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2160-\\u2188\\u2C00-\\u2C2E\\u2C30-\\u2C5E\\u2C60-\\u2CE4\\u2CEB-\\u2CEE\\u2CF2\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D80-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2E2F\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303C\\u3041-\\u3096\\u309D-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31BA\\u31F0-\\u31FF\\u3400-\\u4DB5\\u4E00-\\u9FCC\\uA000-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA61F\\uA62A\\uA62B\\uA640-\\uA66E\\uA67F-\\uA69D\\uA6A0-\\uA6EF\\uA717-\\uA71F\\uA722-\\uA788\\uA78B-\\uA78E\\uA790-\\uA7AD\\uA7B0\\uA7B1\\uA7F7-\\uA801\\uA803-\\uA805\\uA807-\\uA80A\\uA80C-\\uA822\\uA840-\\uA873\\uA882-\\uA8B3\\uA8F2-\\uA8F7\\uA8FB\\uA90A-\\uA925\\uA930-\\uA946\\uA960-\\uA97C\\uA984-\\uA9B2\\uA9CF\\uA9E0-\\uA9E4\\uA9E6-\\uA9EF\\uA9FA-\\uA9FE\\uAA00-\\uAA28\\uAA40-\\uAA42\\uAA44-\\uAA4B\\uAA60-\\uAA76\\uAA7A\\uAA7E-\\uAAAF\\uAAB1\\uAAB5\\uAAB6\\uAAB9-\\uAABD\\uAAC0\\uAAC2\\uAADB-\\uAADD\\uAAE0-\\uAAEA\\uAAF2-\\uAAF4\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uAB30-\\uAB5A\\uAB5C-\\uAB5F\\uAB64\\uAB65\\uABC0-\\uABE2\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF21-\\uFF3A\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]"),digit:new RegExp("[\\u0030-\\u0039\\u0660-\\u0669\\u06F0-\\u06F9\\u07C0-\\u07C9\\u0966-\\u096F\\u09E6-\\u09EF\\u0A66-\\u0A6F\\u0AE6-\\u0AEF\\u0B66-\\u0B6F\\u0BE6-\\u0BEF\\u0C66-\\u0C6F\\u0CE6-\\u0CEF\\u0D66-\\u0D6F\\u0DE6-\\u0DEF\\u0E50-\\u0E59\\u0ED0-\\u0ED9\\u0F20-\\u0F29\\u1040-\\u1049\\u1090-\\u1099\\u17E0-\\u17E9\\u1810-\\u1819\\u1946-\\u194F\\u19D0-\\u19D9\\u1A80-\\u1A89\\u1A90-\\u1A99\\u1B50-\\u1B59\\u1BB0-\\u1BB9\\u1C40-\\u1C49\\u1C50-\\u1C59\\uA620-\\uA629\\uA8D0-\\uA8D9\\uA900-\\uA909\\uA9D0-\\uA9D9\\uA9F0-\\uA9F9\\uAA50-\\uAA59\\uABF0-\\uABF9\\uFF10-\\uFF19]"),non_spacing_mark:new RegExp("[\\u0300-\\u036F\\u0483-\\u0487\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u064B-\\u065E\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0900-\\u0902\\u093C\\u0941-\\u0948\\u094D\\u0951-\\u0955\\u0962\\u0963\\u0981\\u09BC\\u09C1-\\u09C4\\u09CD\\u09E2\\u09E3\\u0A01\\u0A02\\u0A3C\\u0A41\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81\\u0A82\\u0ABC\\u0AC1-\\u0AC5\\u0AC7\\u0AC8\\u0ACD\\u0AE2\\u0AE3\\u0B01\\u0B3C\\u0B3F\\u0B41-\\u0B44\\u0B4D\\u0B56\\u0B62\\u0B63\\u0B82\\u0BC0\\u0BCD\\u0C3E-\\u0C40\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0CBC\\u0CBF\\u0CC6\\u0CCC\\u0CCD\\u0CE2\\u0CE3\\u0D41-\\u0D44\\u0D4D\\u0D62\\u0D63\\u0DCA\\u0DD2-\\u0DD4\\u0DD6\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EB9\\u0EBB\\u0EBC\\u0EC8-\\u0ECD\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F71-\\u0F7E\\u0F80-\\u0F84\\u0F86\\u0F87\\u0F90-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102D-\\u1030\\u1032-\\u1037\\u1039\\u103A\\u103D\\u103E\\u1058\\u1059\\u105E-\\u1060\\u1071-\\u1074\\u1082\\u1085\\u1086\\u108D\\u109D\\u135F\\u1712-\\u1714\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B7-\\u17BD\\u17C6\\u17C9-\\u17D3\\u17DD\\u180B-\\u180D\\u18A9\\u1920-\\u1922\\u1927\\u1928\\u1932\\u1939-\\u193B\\u1A17\\u1A18\\u1A56\\u1A58-\\u1A5E\\u1A60\\u1A62\\u1A65-\\u1A6C\\u1A73-\\u1A7C\\u1A7F\\u1B00-\\u1B03\\u1B34\\u1B36-\\u1B3A\\u1B3C\\u1B42\\u1B6B-\\u1B73\\u1B80\\u1B81\\u1BA2-\\u1BA5\\u1BA8\\u1BA9\\u1C2C-\\u1C33\\u1C36\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE0\\u1CE2-\\u1CE8\\u1CED\\u1DC0-\\u1DE6\\u1DFD-\\u1DFF\\u20D0-\\u20DC\\u20E1\\u20E5-\\u20F0\\u2CEF-\\u2CF1\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F\\uA67C\\uA67D\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA825\\uA826\\uA8C4\\uA8E0-\\uA8F1\\uA926-\\uA92D\\uA947-\\uA951\\uA980-\\uA982\\uA9B3\\uA9B6-\\uA9B9\\uA9BC\\uAA29-\\uAA2E\\uAA31\\uAA32\\uAA35\\uAA36\\uAA43\\uAA4C\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uABE5\\uABE8\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE26]"),space_combining_mark:new RegExp("[\\u0903\\u093E-\\u0940\\u0949-\\u094C\\u094E\\u0982\\u0983\\u09BE-\\u09C0\\u09C7\\u09C8\\u09CB\\u09CC\\u09D7\\u0A03\\u0A3E-\\u0A40\\u0A83\\u0ABE-\\u0AC0\\u0AC9\\u0ACB\\u0ACC\\u0B02\\u0B03\\u0B3E\\u0B40\\u0B47\\u0B48\\u0B4B\\u0B4C\\u0B57\\u0BBE\\u0BBF\\u0BC1\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCC\\u0BD7\\u0C01-\\u0C03\\u0C41-\\u0C44\\u0C82\\u0C83\\u0CBE\\u0CC0-\\u0CC4\\u0CC7\\u0CC8\\u0CCA\\u0CCB\\u0CD5\\u0CD6\\u0D02\\u0D03\\u0D3E-\\u0D40\\u0D46-\\u0D48\\u0D4A-\\u0D4C\\u0D57\\u0D82\\u0D83\\u0DCF-\\u0DD1\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0F3E\\u0F3F\\u0F7F\\u102B\\u102C\\u1031\\u1038\\u103B\\u103C\\u1056\\u1057\\u1062-\\u1064\\u1067-\\u106D\\u1083\\u1084\\u1087-\\u108C\\u108F\\u109A-\\u109C\\u17B6\\u17BE-\\u17C5\\u17C7\\u17C8\\u1923-\\u1926\\u1929-\\u192B\\u1930\\u1931\\u1933-\\u1938\\u19B0-\\u19C0\\u19C8\\u19C9\\u1A19-\\u1A1B\\u1A55\\u1A57\\u1A61\\u1A63\\u1A64\\u1A6D-\\u1A72\\u1B04\\u1B35\\u1B3B\\u1B3D-\\u1B41\\u1B43\\u1B44\\u1B82\\u1BA1\\u1BA6\\u1BA7\\u1BAA\\u1C24-\\u1C2B\\u1C34\\u1C35\\u1CE1\\u1CF2\\uA823\\uA824\\uA827\\uA880\\uA881\\uA8B4-\\uA8C3\\uA952\\uA953\\uA983\\uA9B4\\uA9B5\\uA9BA\\uA9BB\\uA9BD-\\uA9C0\\uAA2F\\uAA30\\uAA33\\uAA34\\uAA4D\\uAA7B\\uABE3\\uABE4\\uABE6\\uABE7\\uABE9\\uABEA\\uABEC]"),connector_punctuation:new RegExp("[\\u005F\\u203F\\u2040\\u2054\\uFE33\\uFE34\\uFE4D-\\uFE4F\\uFF3F]")});O.prototype.toString=function(){return this.message+" (line: "+this.line+", col: "+this.col+", pos: "+this.pos+")\n\n"+this.stack};var je={},Re=v(["typeof","void","delete","--","++","!","~","-","+"]),Ie=v(["--","++"]),Pe=v(["=","+=","-=","/=","*=","%=",">>=","<<=",">>>=","|=","^=","&="]),Ue=function(n,e){for(var t=0;t<n.length;++t)for(var r=n[t],i=0;i<r.length;++i)e[r[i]]=t+1;return e}([["||"],["&&"],["|"],["^"],["&"],["==","===","!=","!=="],["<",">","<=",">=","in","instanceof"],[">>","<<",">>>"],["+","-"],["*","/","%"]],{}),Le=(t(["for","do","while","switch"]),t(["atom","num","string","regexp","name"]));N.prototype=new A,function(n){function e(e,t){e.DEFMETHOD("transform",function(e,r){var i,o;return e.push(this),e.before&&(i=e.before(this,t,r)),i===n&&(e.after?(e.stack[e.stack.length-1]=i=this,t(i,e),o=e.after(i,r),o!==n&&(i=o)):(i=this,t(i,e))),e.pop(this),i})}function t(n,e){return V(n,function(n){return n.transform(e,!0)})}e(W,f),e(tn,function(n,e){n.label=n.label.transform(e),n.body=n.body.transform(e)}),e(Z,function(n,e){n.body=n.body.transform(e)}),e(K,function(n,e){n.body=t(n.body,e)}),e(on,function(n,e){n.condition=n.condition.transform(e),n.body=n.body.transform(e)}),e(sn,function(n,e){n.init&&(n.init=n.init.transform(e)),n.condition&&(n.condition=n.condition.transform(e)),n.step&&(n.step=n.step.transform(e)),n.body=n.body.transform(e)}),e(cn,function(n,e){n.init=n.init.transform(e),n.object=n.object.transform(e),n.body=n.body.transform(e)}),e(fn,function(n,e){n.expression=n.expression.transform(e),n.body=n.body.transform(e)}),e(gn,function(n,e){n.value&&(n.value=n.value.transform(e))}),e(An,function(n,e){n.label&&(n.label=n.label.transform(e))}),e(Dn,function(n,e){n.condition=n.condition.transform(e),n.body=n.body.transform(e),n.alternative&&(n.alternative=n.alternative.transform(e))}),e(xn,function(n,e){n.expression=n.expression.transform(e),n.body=t(n.body,e)}),e(Cn,function(n,e){n.expression=n.expression.transform(e),n.body=t(n.body,e)}),e(Bn,function(n,e){n.body=t(n.body,e),n.bcatch&&(n.bcatch=n.bcatch.transform(e)),n.bfinally&&(n.bfinally=n.bfinally.transform(e))}),e(Sn,function(n,e){n.argname=n.argname.transform(e),n.body=t(n.body,e)}),e($n,function(n,e){n.definitions=t(n.definitions,e)}),e(Mn,function(n,e){n.name=n.name.transform(e),n.value&&(n.value=n.value.transform(e))}),e(dn,function(n,e){n.name&&(n.name=n.name.transform(e)),n.argnames=t(n.argnames,e),n.body=t(n.body,e)}),e(zn,function(n,e){n.expression=n.expression.transform(e),n.args=t(n.args,e)}),e(Nn,function(n,e){n.car=n.car.transform(e),n.cdr=n.cdr.transform(e)}),e(Rn,function(n,e){n.expression=n.expression.transform(e)}),e(In,function(n,e){n.expression=n.expression.transform(e),n.property=n.property.transform(e)}),e(Pn,function(n,e){n.expression=n.expression.transform(e)}),e(Vn,function(n,e){n.left=n.left.transform(e),n.right=n.right.transform(e)}),e(Yn,function(n,e){n.condition=n.condition.transform(e),n.consequent=n.consequent.transform(e),n.alternative=n.alternative.transform(e)}),e(Gn,function(n,e){n.elements=t(n.elements,e)}),e(Jn,function(n,e){n.properties=t(n.properties,e)}),e(Xn,function(n,e){n.value=n.value.transform(e)})}(),j.next_id=1,j.prototype={unmangleable:function(n){return n||(n={}),this.global&&!n.toplevel||this.undeclared||!n.eval&&(this.scope.uses_eval||this.scope.uses_with)||n.keep_fnames&&(this.orig[0]instanceof ue||this.orig[0]instanceof ae)},mangle:function(n){var e=n.cache&&n.cache.props;if(this.global&&e&&e.has(this.name))this.mangled_name=e.get(this.name);else if(!this.mangled_name&&!this.unmangleable(n)){var t=this.scope;!n.screw_ie8&&this.orig[0]instanceof ue&&(t=t.parent_scope),this.mangled_name=t.next_mangled(n,this),this.global&&e&&e.set(this.name,this.mangled_name)}}},pn.DEFMETHOD("figure_out_scope",function(n){n=s(n,{screw_ie8:!0,cache:null});var e=this,t=e.parent_scope=null,r=new _,i=null,o=!1,a=0,u=new A(function(e,s){if(n.screw_ie8&&e instanceof Sn){var c=t;return t=new ln(e),t.init_scope_vars(a),t.parent_scope=c,s(),t=c,!0}if(e instanceof ln){e.init_scope_vars(a);var c=e.parent_scope=t,f=i,l=r;return i=t=e,r=new _,++a,s(),--a,t=c,i=f,r=l,!0}if(e instanceof tn){var d=e.label;if(r.has(d.name))throw new Error(p("Label {name} defined twice",d));return r.set(d.name,d),s(),r.del(d.name),!0}if(e instanceof fn)for(var h=t;h;h=h.parent_scope)h.uses_with=!0;else if(e instanceof ne&&(e.scope=t),e instanceof ce&&(e.thedef=e,e.references=[]),e instanceof ue)i.def_function(e);else if(e instanceof ae)(e.scope=i.parent_scope).def_function(e);else if(e instanceof On)o=e.has_const_pragma();else if(e instanceof re||e instanceof ie){var v=i.def_variable(e);v.constant=e instanceof ie||o,v.init=u.parent().value}else if(e instanceof se)(n.screw_ie8?t:i).def_variable(e);else if(e instanceof le){var m=r.get(e.name);if(!m)throw new Error(p("Undefined label {name} [{line},{col}]",{name:e.name,line:e.start.line,col:e.start.col}));e.thedef=m}});e.walk(u);var c=null,f=e.globals=new _,u=new A(function(n,t){if(n instanceof dn){var r=c;return c=n,t(),c=r,!0}if(n instanceof An&&n.label)return n.label.thedef.references.push(n),!0;if(n instanceof fe){var i=n.name,o=u.parent();if("eval"==i&&o instanceof zn)for(var a=n.scope;a&&!a.uses_eval;a=a.parent_scope)a.uses_eval=!0;var s=n.scope.find_variable(i);if(n.scope instanceof dn&&"arguments"==i&&(n.scope.uses_arguments=!0),!s){var l;f.has(i)?l=f.get(i):(l=new j(e,f.size(),n),l.undeclared=!0,l.global=!0,f.set(i,l)),s=l}return n.thedef=s,(o instanceof Pn&&("++"===o.operator||"--"===o.operator)||o instanceof Wn&&o.left===n)&&(s.modified=!0),n.reference(),!0}});e.walk(u),n.cache&&(this.cname=n.cache.cname)}),ln.DEFMETHOD("init_scope_vars",function(n){this.variables=new _,this.functions=new _,this.uses_with=!1,this.uses_eval=!1,this.parent_scope=null,this.enclosed=[],this.cname=-1,this.nesting=n}),dn.DEFMETHOD("init_scope_vars",function(){ln.prototype.init_scope_vars.apply(this,arguments),this.uses_arguments=!1;var n=new Mn({name:"arguments",start:this.start,end:this.end}),e=new j(this,this.variables.size(),n);this.variables.set(n.name,e)}),fe.DEFMETHOD("reference",function(){var n=this.definition();n.references.push(this);for(var e=this.scope;e&&(l(e.enclosed,n),e!==n.scope);)e=e.parent_scope;this.frame=this.scope.nesting-n.scope.nesting}),ln.DEFMETHOD("find_variable",function(n){return n instanceof ne&&(n=n.name),this.variables.get(n)||this.parent_scope&&this.parent_scope.find_variable(n)}),ln.DEFMETHOD("def_function",function(n){this.functions.set(n.name,this.def_variable(n))}),ln.DEFMETHOD("def_variable",function(n){var e;return this.variables.has(n.name)?(e=this.variables.get(n.name),e.orig.push(n)):(e=new j(this,this.variables.size(),n),this.variables.set(n.name,e),e.global=!this.parent_scope),n.thedef=e}),ln.DEFMETHOD("next_mangled",function(n){var e=this.enclosed;n:for(;;){var t=Ve(++this.cname);if(C(t)&&!(n.except.indexOf(t)>=0)){for(var r=e.length;--r>=0;){var i=e[r],o=i.mangled_name||i.unmangleable(n)&&i.name;if(t==o)continue n}return t}}}),vn.DEFMETHOD("next_mangled",function(n,e){for(var t=e.orig[0]instanceof oe&&this.name&&this.name.definition(),r=t?t.mangled_name||t.name:null;;){
	var i=dn.prototype.next_mangled.call(this,n,e);if(!r||r!=i)return i}}),ln.DEFMETHOD("references",function(n){return n instanceof ne&&(n=n.definition()),this.enclosed.indexOf(n)<0?null:n}),ne.DEFMETHOD("unmangleable",function(n){return this.definition().unmangleable(n)}),ee.DEFMETHOD("unmangleable",function(){return!0}),ce.DEFMETHOD("unmangleable",function(){return!1}),ne.DEFMETHOD("unreferenced",function(){return 0==this.definition().references.length&&!(this.scope.uses_eval||this.scope.uses_with)}),ne.DEFMETHOD("undeclared",function(){return this.definition().undeclared}),le.DEFMETHOD("undeclared",function(){return!1}),ce.DEFMETHOD("undeclared",function(){return!1}),ne.DEFMETHOD("definition",function(){return this.thedef}),ne.DEFMETHOD("global",function(){return this.definition().global}),On.DEFMETHOD("has_const_pragma",function(){var n=this.start&&this.start.comments_before,e=n&&n[n.length-1];return e&&/@const\b/.test(e.value)}),pn.DEFMETHOD("_default_mangler_options",function(n){return s(n,{except:[],eval:!1,sort:!1,toplevel:!1,screw_ie8:!0,keep_fnames:!1})}),pn.DEFMETHOD("mangle_names",function(n){n=this._default_mangler_options(n),n.except.push("arguments");var e=-1,t=[];n.cache&&this.globals.each(function(e){n.except.indexOf(e.name)<0&&t.push(e)});var r=new A(function(i,o){if(i instanceof tn){var a=e;return o(),e=a,!0}if(i instanceof ln){var u=(r.parent(),[]);return i.variables.each(function(e){n.except.indexOf(e.name)<0&&u.push(e)}),void t.push.apply(t,u)}if(i instanceof ce){var s;do s=Ve(++e);while(!C(s));return i.mangled_name=s,!0}if(n.screw_ie8&&i instanceof se)return void t.push(i.definition())});this.walk(r),t.forEach(function(e){e.mangle(n)}),n.cache&&(n.cache.cname=this.cname)}),pn.DEFMETHOD("compute_char_frequency",function(n){n=this._default_mangler_options(n);var e=new A(function(e){e instanceof de?Ve.consider(e.print_to_string()):e instanceof bn?Ve.consider("return"):e instanceof yn?Ve.consider("throw"):e instanceof En?Ve.consider("continue"):e instanceof wn?Ve.consider("break"):e instanceof J?Ve.consider("debugger"):e instanceof X?Ve.consider(e.value):e instanceof un?Ve.consider("while"):e instanceof an?Ve.consider("do while"):e instanceof Dn?(Ve.consider("if"),e.alternative&&Ve.consider("else")):e instanceof On?Ve.consider("var"):e instanceof qn?Ve.consider("const"):e instanceof dn?Ve.consider("function"):e instanceof sn?Ve.consider("for"):e instanceof cn?Ve.consider("for in"):e instanceof xn?Ve.consider("switch"):e instanceof Cn?Ve.consider("case"):e instanceof Fn?Ve.consider("default"):e instanceof fn?Ve.consider("with"):e instanceof Kn?Ve.consider("set"+e.key):e instanceof Qn?Ve.consider("get"+e.key):e instanceof Zn?Ve.consider(e.key):e instanceof Hn?Ve.consider("new"):e instanceof pe?Ve.consider("this"):e instanceof Bn?Ve.consider("try"):e instanceof Sn?Ve.consider("catch"):e instanceof Tn?Ve.consider("finally"):e instanceof ne&&e.unmangleable(n)?Ve.consider(e.name):e instanceof Pn||e instanceof Vn?Ve.consider(e.operator):e instanceof Rn&&Ve.consider(e.property)});this.walk(e),Ve.sort()});var Ve=function(){function n(){r=Object.create(null),t=i.split("").map(function(n){return n.charCodeAt(0)}),t.forEach(function(n){r[n]=0})}function e(n){var e="",r=54;n++;do n--,e+=String.fromCharCode(t[n%r]),n=Math.floor(n/r),r=64;while(n>0);return e}var t,r,i="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_0123456789";return e.consider=function(n){for(var e=n.length;--e>=0;){var t=n.charCodeAt(e);t in r&&++r[t]}},e.sort=function(){t=h(t,function(n,e){return E(n)&&!E(e)?1:E(e)&&!E(n)?-1:r[e]-r[n]})},e.reset=n,n(),e.get=function(){return t},e.freq=function(){return r},e}();pn.DEFMETHOD("scope_warnings",function(n){n=s(n,{undeclared:!1,unreferenced:!0,assign_to_global:!0,func_arguments:!0,nested_defuns:!0,eval:!0});var e=new A(function(t){if(n.undeclared&&t instanceof fe&&t.undeclared()&&W.warn("Undeclared symbol: {name} [{file}:{line},{col}]",{name:t.name,file:t.start.file,line:t.start.line,col:t.start.col}),n.assign_to_global){var r=null;t instanceof Wn&&t.left instanceof fe?r=t.left:t instanceof cn&&t.init instanceof fe&&(r=t.init),r&&(r.undeclared()||r.global()&&r.scope!==r.definition().scope)&&W.warn("{msg}: {name} [{file}:{line},{col}]",{msg:r.undeclared()?"Accidental global?":"Assignment to global",name:r.name,file:r.start.file,line:r.start.line,col:r.start.col})}n.eval&&t instanceof fe&&t.undeclared()&&"eval"==t.name&&W.warn("Eval is used [{file}:{line},{col}]",t.start),n.unreferenced&&(t instanceof te||t instanceof ce)&&!(t instanceof se)&&t.unreferenced()&&W.warn("{type} {name} is declared but not referenced [{file}:{line},{col}]",{type:t instanceof ce?"Label":"Symbol",name:t.name,file:t.start.file,line:t.start.line,col:t.start.col}),n.func_arguments&&t instanceof dn&&t.uses_arguments&&W.warn("arguments used in function {name} [{file}:{line},{col}]",{name:t.name?t.name.name:"anonymous",file:t.start.file,line:t.start.line,col:t.start.col}),n.nested_defuns&&t instanceof mn&&!(e.parent()instanceof ln)&&W.warn('Function {name} declared in nested statement "{type}" [{file}:{line},{col}]',{name:t.name.name,type:e.parent().TYPE,file:t.start.file,line:t.start.line,col:t.start.col})});this.walk(e)});var Ye=/^$|[;{][\s\n]*$/;!function(){function n(n,e){n.DEFMETHOD("_codegen",e)}function e(n,t){Array.isArray(n)?n.forEach(function(n){e(n,t)}):n.DEFMETHOD("needs_parens",t)}function t(n,e,t,r){var i=n.length-1;_=r,n.forEach(function(n,r){_!==!0||n instanceof X||n instanceof nn||n instanceof Z&&n.body instanceof he||(_=!1),n instanceof nn||(t.indent(),n.print(t),r==i&&e||(t.newline(),e&&t.newline())),_===!0&&n instanceof Z&&n.body instanceof he&&(_=!1)}),_=!1}function r(n,e,r){n.length>0?e.with_block(function(){t(n,!1,e,r)}):e.print("{}")}function i(n,e){if(e.option("bracketize"))return void d(n.body,e);if(!n.body)return e.force_semicolon();if(n.body instanceof an)return void d(n.body,e);for(var t=n.body;;)if(t instanceof Dn){if(!t.alternative)return void d(n.body,e);t=t.alternative}else{if(!(t instanceof en))break;t=t.body}u(n.body,e)}function o(n,e,t){if(t)try{n.walk(new A(function(n){if(n instanceof Vn&&"in"==n.operator)throw e})),n.print(e)}catch(t){if(t!==e)throw t;n.print(e,!0)}else n.print(e)}function a(n){return[92,47,46,43,42,63,40,41,91,93,123,125,36,94,58,124,33,10,13,0,65279,8232,8233].indexOf(n)<0}function u(n,e){e.option("bracketize")?!n||n instanceof nn?e.print("{}"):n instanceof Q?n.print(e):e.with_block(function(){e.indent(),n.print(e),e.newline()}):!n||n instanceof nn?e.force_semicolon():n.print(e)}function s(n){for(var e=n.stack(),t=e.length,r=e[--t],i=e[--t];t>0;){if(i instanceof G&&i.body===r)return!0;if(!(i instanceof Nn&&i.car===r||i instanceof zn&&i.expression===r&&!(i instanceof Hn)||i instanceof Rn&&i.expression===r||i instanceof In&&i.expression===r||i instanceof Yn&&i.condition===r||i instanceof Vn&&i.left===r||i instanceof Ln&&i.expression===r))return!1;r=i,i=e[--t]}}function c(n,e){return n.args.length>0||e.option("beautify")}function l(n){for(var e=n[0],t=e.length,r=1;r<n.length;++r)n[r].length<t&&(e=n[r],t=e.length);return e}function p(n){var e,t=n.toString(10),r=[t.replace(/^0\./,".").replace("e+","e")];return Math.floor(n)===n?(n>=0?r.push("0x"+n.toString(16).toLowerCase(),"0"+n.toString(8)):r.push("-0x"+(-n).toString(16).toLowerCase(),"-0"+(-n).toString(8)),(e=/^(.*?)(0+)$/.exec(n))&&r.push(e[1]+"e"+e[2].length)):(e=/^0?\.(0+)(.*)$/.exec(n))&&r.push(e[2]+"e-"+(e[1].length+e[2].length),t.substr(t.indexOf("."))),l(r)}function d(n,e){return n instanceof Q?void n.print(e):void e.with_block(function(){e.indent(),n.print(e),e.newline()})}function h(n,e){n.DEFMETHOD("add_source_map",function(n){e(this,n)})}function v(n,e){e.add_mapping(n.start)}var m=!1,_=!1;W.DEFMETHOD("print",function(n,e){function t(){r.add_comments(n),r.add_source_map(n),i(r,n)}var r=this,i=r._codegen,o=m;r instanceof X&&"use asm"==r.value&&n.parent()instanceof ln&&(m=!0),n.push_node(r),e||r.needs_parens(n)?n.with_parens(t):t(),n.pop_node(),r instanceof ln&&(m=o)}),W.DEFMETHOD("print_to_string",function(n){var e=R(n);return n||(e._readonly=!0),this.print(e),e.get()}),W.DEFMETHOD("add_comments",function(n){if(!n._readonly){var e=this,t=e.start;if(t&&!t._comments_dumped){t._comments_dumped=!0;var r=t.comments_before||[];e instanceof gn&&e.value&&e.value.walk(new A(function(n){if(n.start&&n.start.comments_before&&(r=r.concat(n.start.comments_before),n.start.comments_before=[]),n instanceof vn||n instanceof Gn||n instanceof Jn)return!0})),r=r.filter(n.option("comments"),e),!n.option("beautify")&&r.length>0&&/comment[134]/.test(r[0].type)&&0!==n.col()&&r[0].nlb&&n.print("\n"),r.forEach(function(e){/comment[134]/.test(e.type)?(n.print("//"+e.value+"\n"),n.indent()):"comment2"==e.type?(n.print("/*"+e.value+"*/"),t.nlb?(n.print("\n"),n.indent()):n.space()):0===n.pos()&&"comment5"==e.type&&n.option("shebang")&&(n.print("#!"+e.value+"\n"),n.indent())})}}}),e(W,function(){return!1}),e(vn,function(n){if(s(n))return!0;if(n.option("wrap_iife")){var e=n.parent();return e instanceof zn&&e.expression===this}return!1}),e(Jn,function(n){return s(n)}),e([Pn,ye],function(n){var e=n.parent();return e instanceof jn&&e.expression===this||e instanceof zn&&e.expression===this}),e(Nn,function(n){var e=n.parent();return e instanceof zn||e instanceof Pn||e instanceof Vn||e instanceof Mn||e instanceof jn||e instanceof Gn||e instanceof Xn||e instanceof Yn}),e(Vn,function(n){var e=n.parent();if(e instanceof zn&&e.expression===this)return!0;if(e instanceof Pn)return!0;if(e instanceof jn&&e.expression===this)return!0;if(e instanceof Vn){var t=e.operator,r=Ue[t],i=this.operator,o=Ue[i];if(r>o||r==o&&this===e.right)return!0}}),e(jn,function(n){var e=n.parent();if(e instanceof Hn&&e.expression===this)try{this.walk(new A(function(n){if(n instanceof zn)throw e}))}catch(n){if(n!==e)throw n;return!0}}),e(zn,function(n){var e,t=n.parent();return t instanceof Hn&&t.expression===this||this.expression instanceof vn&&t instanceof jn&&t.expression===this&&(e=n.parent(1))instanceof Wn&&e.left===t}),e(Hn,function(n){var e=n.parent();if(!c(this,n)&&(e instanceof jn||e instanceof zn&&e.expression===this))return!0}),e(ve,function(n){var e=n.parent();if(e instanceof jn&&e.expression===this){var t=this.getValue();if(t<0||/^0/.test(p(t)))return!0}}),e([Wn,Yn],function(n){var e=n.parent();return e instanceof Pn||(e instanceof Vn&&!(e instanceof Wn)||(e instanceof zn&&e.expression===this||(e instanceof Yn&&e.condition===this||(e instanceof jn&&e.expression===this||void 0))))}),n(X,function(n,e){e.print_string(n.value,n.quote),e.semicolon()}),n(J,function(n,e){e.print("debugger"),e.semicolon()}),en.DEFMETHOD("_do_print_body",function(n){u(this.body,n)}),n(G,function(n,e){n.body.print(e),e.semicolon()}),n(pn,function(n,e){t(n.body,!0,e,!0),e.print("")}),n(tn,function(n,e){n.label.print(e),e.colon(),n.body.print(e)}),n(Z,function(n,e){n.body.print(e),e.semicolon()}),n(Q,function(n,e){r(n.body,e)}),n(nn,function(n,e){e.semicolon()}),n(an,function(n,e){e.print("do"),e.space(),n._do_print_body(e),e.space(),e.print("while"),e.space(),e.with_parens(function(){n.condition.print(e)}),e.semicolon()}),n(un,function(n,e){e.print("while"),e.space(),e.with_parens(function(){n.condition.print(e)}),e.space(),n._do_print_body(e)}),n(sn,function(n,e){e.print("for"),e.space(),e.with_parens(function(){!n.init||n.init instanceof nn?e.print(";"):(n.init instanceof $n?n.init.print(e):o(n.init,e,!0),e.print(";"),e.space()),n.condition?(n.condition.print(e),e.print(";"),e.space()):e.print(";"),n.step&&n.step.print(e)}),e.space(),n._do_print_body(e)}),n(cn,function(n,e){e.print("for"),e.space(),e.with_parens(function(){n.init.print(e),e.space(),e.print("in"),e.space(),n.object.print(e)}),e.space(),n._do_print_body(e)}),n(fn,function(n,e){e.print("with"),e.space(),e.with_parens(function(){n.expression.print(e)}),e.space(),n._do_print_body(e)}),dn.DEFMETHOD("_do_print",function(n,e){var t=this;e||n.print("function"),t.name&&(n.space(),t.name.print(n)),n.with_parens(function(){t.argnames.forEach(function(e,t){t&&n.comma(),e.print(n)})}),n.space(),r(t.body,n,!0)}),n(dn,function(n,e){n._do_print(e)}),gn.DEFMETHOD("_do_print",function(n,e){n.print(e),this.value&&(n.space(),this.value.print(n)),n.semicolon()}),n(bn,function(n,e){n._do_print(e,"return")}),n(yn,function(n,e){n._do_print(e,"throw")}),An.DEFMETHOD("_do_print",function(n,e){n.print(e),this.label&&(n.space(),this.label.print(n)),n.semicolon()}),n(wn,function(n,e){n._do_print(e,"break")}),n(En,function(n,e){n._do_print(e,"continue")}),n(Dn,function(n,e){e.print("if"),e.space(),e.with_parens(function(){n.condition.print(e)}),e.space(),n.alternative?(i(n,e),e.space(),e.print("else"),e.space(),u(n.alternative,e)):n._do_print_body(e)}),n(xn,function(n,e){e.print("switch"),e.space(),e.with_parens(function(){n.expression.print(e)}),e.space(),n.body.length>0?e.with_block(function(){n.body.forEach(function(n,t){t&&e.newline(),e.indent(!0),n.print(e)})}):e.print("{}")}),kn.DEFMETHOD("_do_print_body",function(n){this.body.length>0&&(n.newline(),this.body.forEach(function(e){n.indent(),e.print(n),n.newline()}))}),n(Fn,function(n,e){e.print("default:"),n._do_print_body(e)}),n(Cn,function(n,e){e.print("case"),e.space(),n.expression.print(e),e.print(":"),n._do_print_body(e)}),n(Bn,function(n,e){e.print("try"),e.space(),r(n.body,e),n.bcatch&&(e.space(),n.bcatch.print(e)),n.bfinally&&(e.space(),n.bfinally.print(e))}),n(Sn,function(n,e){e.print("catch"),e.space(),e.with_parens(function(){n.argname.print(e)}),e.space(),r(n.body,e)}),n(Tn,function(n,e){e.print("finally"),e.space(),r(n.body,e)}),$n.DEFMETHOD("_do_print",function(n,e){n.print(e),n.space(),this.definitions.forEach(function(e,t){t&&n.comma(),e.print(n)});var t=n.parent(),r=t instanceof sn||t instanceof cn,i=r&&t.init===this;i||n.semicolon()}),n(On,function(n,e){n._do_print(e,"var")}),n(qn,function(n,e){n._do_print(e,"const")}),n(Mn,function(n,e){if(n.name.print(e),n.value){e.space(),e.print("="),e.space();var t=e.parent(1),r=t instanceof sn||t instanceof cn;o(n.value,e,r)}}),n(zn,function(n,e){n.expression.print(e),n instanceof Hn&&!c(n,e)||e.with_parens(function(){n.args.forEach(function(n,t){t&&e.comma(),n.print(e)})})}),n(Hn,function(n,e){e.print("new"),e.space(),zn.prototype._codegen(n,e)}),Nn.DEFMETHOD("_do_print",function(n){this.car.print(n),this.cdr&&(n.comma(),n.should_break()&&(n.newline(),n.indent()),this.cdr.print(n))}),n(Nn,function(n,e){n._do_print(e)}),n(Rn,function(n,e){var t=n.expression;t.print(e),t instanceof ve&&t.getValue()>=0&&(/[xa-f.)]/i.test(e.last())||e.print(".")),e.print("."),e.add_mapping(n.end),e.print_name(n.property)}),n(In,function(n,e){n.expression.print(e),e.print("["),n.property.print(e),e.print("]")}),n(Un,function(n,e){var t=n.operator;e.print(t),(/^[a-z]/i.test(t)||/[+-]$/.test(t)&&n.expression instanceof Un&&/^[+-]/.test(n.expression.operator))&&e.space(),n.expression.print(e)}),n(Ln,function(n,e){n.expression.print(e),e.print(n.operator)}),n(Vn,function(n,e){var t=n.operator;n.left.print(e),">"==t[0]&&n.left instanceof Ln&&"--"==n.left.operator?e.print(" "):e.space(),e.print(t),("<"==t||"<<"==t)&&n.right instanceof Un&&"!"==n.right.operator&&n.right.expression instanceof Un&&"--"==n.right.expression.operator?e.print(" "):e.space(),n.right.print(e)}),n(Yn,function(n,e){n.condition.print(e),e.space(),e.print("?"),e.space(),n.consequent.print(e),e.space(),e.colon(),n.alternative.print(e)}),n(Gn,function(n,e){e.with_square(function(){var t=n.elements,r=t.length;r>0&&e.space(),t.forEach(function(n,t){t&&e.comma(),n.print(e),t===r-1&&n instanceof Ae&&e.comma()}),r>0&&e.space()})}),n(Jn,function(n,e){n.properties.length>0?e.with_block(function(){n.properties.forEach(function(n,t){t&&(e.print(","),e.newline()),e.indent(),n.print(e)}),e.newline()}):e.print("{}")}),n(Zn,function(n,e){var t=n.key,r=n.quote;e.option("quote_keys")?e.print_string(t+""):("number"==typeof t||!e.option("beautify")&&+t+""==t)&&parseFloat(t)>=0?e.print(p(t)):(Ce(t)?e.option("screw_ie8"):T(t))?r&&e.option("keep_quoted_props")?e.print_string(t,r):e.print_name(t):e.print_string(t,r),e.colon(),n.value.print(e)}),n(Kn,function(n,e){e.print("set"),e.space(),n.key.print(e),n.value._do_print(e,!0)}),n(Qn,function(n,e){e.print("get"),e.space(),n.key.print(e),n.value._do_print(e,!0)}),n(ne,function(n,e){var t=n.definition();e.print_name(t?t.mangled_name||t.name:n.name)}),n(ye,function(n,e){e.print("void 0")}),n(Ae,f),n(we,function(n,e){e.print("Infinity")}),n(be,function(n,e){e.print("NaN")}),n(pe,function(n,e){e.print("this")}),n(de,function(n,e){e.print(n.getValue())}),n(he,function(n,e){e.print_string(n.getValue(),n.quote,_)}),n(ve,function(n,e){m&&n.start&&null!=n.start.raw?e.print(n.start.raw):e.print(p(n.getValue()))}),n(me,function(n,e){var t=n.getValue().toString();e.option("ascii_only")?t=e.to_ascii(t):e.option("unescape_regexps")&&(t=t.split("\\\\").map(function(n){return n.replace(/\\u[0-9a-fA-F]{4}|\\x[0-9a-fA-F]{2}/g,function(n){var e=parseInt(n.substr(2),16);return a(e)?String.fromCharCode(e):n})}).join("\\\\")),e.print(t);var r=e.parent();r instanceof Vn&&/^in/.test(r.operator)&&r.left===n&&e.print(" ")}),h(W,f),h(X,v),h(J,v),h(ne,v),h(_n,v),h(en,v),h(tn,f),h(dn,v),h(xn,v),h(kn,v),h(Q,v),h(pn,f),h(Hn,v),h(Bn,v),h(Sn,v),h(Tn,v),h($n,v),h(de,v),h(Kn,function(n,e){e.add_mapping(n.start,n.key.name)}),h(Qn,function(n,e){e.add_mapping(n.start,n.key.name)}),h(Xn,function(n,e){e.add_mapping(n.start,n.key)})}(),I.prototype=new N,c(I.prototype,{option:function(n){return this.options[n]},compress:function(n){for(var e=+this.options.passes||1,t=0;t<e&&t<3;++t)t>0&&n.clear_opt_flags(),n=n.transform(this);return n},warn:function(n,e){if(this.options.warnings){var t=p(n,e);t in this.warnings_produced||(this.warnings_produced[t]=!0,W.warn.apply(W,arguments))}},clear_warnings:function(){this.warnings_produced={}},before:function(n,e,t){if(n._squeezed)return n;var r=!1;return n instanceof ln&&(n=n.hoist_declarations(this),r=!0),e(n,this),n=n.optimize(this),r&&n instanceof ln&&(n.drop_unused(this),e(n,this)),n._squeezed=!0,n}}),function(){function n(n,e){n.DEFMETHOD("optimize",function(n){var t=this;if(t._optimized)return t;if(n.has_directive("use asm"))return t;var r=e(t,n);return r._optimized=!0,r===t?r:r.transform(n)})}function e(n,e,t){return t||(t={}),e&&(t.start||(t.start=e.start),t.end||(t.end=e.end)),new n(t)}function t(n,t,r){if(t instanceof W)return t.transform(n);switch(typeof t){case"string":return e(he,r,{value:t}).optimize(n);case"number":return isNaN(t)?e(be,r):1/t<0?e(Un,r,{operator:"-",expression:e(ve,r,{value:-t})}):e(ve,r,{value:t}).optimize(n);case"boolean":return e(t?xe:De,r).optimize(n);case"undefined":return e(ye,r).optimize(n);default:if(null===t)return e(ge,r,{value:null}).optimize(n);if(t instanceof RegExp)return e(me,r,{value:t}).optimize(n);throw new Error(p("Can't handle constant of type: {type}",{type:typeof t}))}}function r(n,t,r){return n instanceof zn&&n.expression===t&&(r instanceof jn||r instanceof fe&&"eval"===r.name)?e(Nn,t,{car:e(ve,t,{value:0}),cdr:r}):r}function a(n){if(null===n)return[];if(n instanceof Q)return n.body;if(n instanceof nn)return[];if(n instanceof G)return[n];throw new Error("Can't convert thing to statement array")}function u(n){return null===n||(n instanceof nn||n instanceof Q&&0==n.body.length)}function s(n){return n instanceof xn?n:(n instanceof sn||n instanceof cn||n instanceof on)&&n.body instanceof Q?n.body:n}function c(n,t){function i(n,t){function o(n,e){return n instanceof fe&&(e instanceof Wn&&n===e.left||e instanceof Pn&&e.expression===n&&("++"==e.operator||"--"==e.operator))}function a(i,a,c){if(o(i,a))return i;var p=r(a,i,y.value);return y.value=null,d.splice(g,1),0===d.length&&(n[l]=e(nn,u),s=!0),f.clear_opt_flags(),t.warn("Replacing "+(c?"constant":"variable")+" "+w+" [{file}:{line},{col}]",i.start),b=!0,p}for(var u=t.self(),s=!1,c=n.length;--c>=0;){var f=n[c];if(!(f instanceof $n)){if([f,f.body,f.alternative,f.bcatch,f.bfinally].forEach(function(n){n&&n.body&&i(n.body,t)}),c<=0)break;var l=c-1,p=n[l];if(p instanceof $n){var d=p.definitions;if(null!=d)for(var h={},v=!1,m=!1,_={},g=d.length;--g>=0;){var y=d[g];if(null==y.value)break;var w=y.name.name;if(!w||!w.length)break;if(w in h)break;h[w]=!0;var E=u.find_variable&&u.find_variable(w);if(E&&E.references&&1===E.references.length&&"arguments"!=w){var D=E.references[0];if(D.scope.uses_eval||D.scope.uses_with)break;if(y.value instanceof me||!y.value.is_constant(t)){if(!(v|=m))if(D.scope===u){var x=new A(function(n){n instanceof fe&&o(n,x.parent())&&(_[n.name]=m=!0)});y.value.walk(x);var k=!1,F=new N(function(n){if(k)return n;var e=F.parent();return n instanceof dn||n instanceof Bn||n instanceof fn||n instanceof Cn||n instanceof rn||e instanceof Dn&&n!==e.condition||e instanceof Yn&&n!==e.condition||e instanceof Vn&&("&&"==e.operator||"||"==e.operator)&&n===e.right||e instanceof xn&&n!==e.expression?(v=k=!0,n):void 0},function(n){return k?n:n===D?(k=!0,a(n,F.parent(),!1)):(v|=n.has_side_effects(t))?(k=!0,n):m&&n instanceof fe&&n.name in _?(v=!0,k=!0,n):void 0});f.transform(F)}else v|=y.value.has_side_effects(t)}else{var C=new N(function(n){if(n===D)return a(n,C.parent(),!0)});f.transform(C)}}else v=!0}}}}if(s)for(var B=n.length;--B>=0;)n.length>1&&n[B]instanceof nn&&n.splice(B,1);return n}function o(n){function r(n){return/@ngInject/.test(n.value)}function i(n){return n.argnames.map(function(n){return e(he,n,{value:n.name})})}function o(n,t){return e(Gn,n,{elements:t})}function a(n,t){return e(Z,n,{body:e(Wn,n,{operator:"=",left:e(Rn,t,{expression:e(fe,t,t),property:"$inject"}),right:o(n,i(n))})})}function u(n){n&&n.args&&(n.args.forEach(function(n,e,t){var a=n.start.comments_before;n instanceof dn&&a.length&&r(a[0])&&(t[e]=o(n,i(n).concat(n)))}),n.expression&&n.expression.expression&&u(n.expression.expression))}return n.reduce(function(n,e){if(n.push(e),e.body&&e.body.args)u(e.body);else{var i=e.start,o=i.comments_before;if(o&&o.length>0){var s=o.pop();r(s)&&(e instanceof mn?n.push(a(e,e.name)):e instanceof $n?e.definitions.forEach(function(e){e.value&&e.value instanceof dn&&n.push(a(e.value,e.name))}):t.warn("Unknown statement marked with @ngInject [{file}:{line},{col}]",i))}}return n},[])}function u(n){var e=[];return n.reduce(function(n,t){return t instanceof Q?(b=!0,n.push.apply(n,u(t.body))):t instanceof nn?b=!0:t instanceof X?e.indexOf(t.value)<0?(n.push(t),e.push(t.value)):b=!0:n.push(t),n},[])}function c(n,t){function r(n){for(var e=0,t=n.length;--t>=0;){var r=n[t];if(r instanceof Dn&&r.body instanceof bn&&++e>1)return!0}return!1}var i=t.self(),o=r(n),u=i instanceof dn,c=[];n:for(var l=n.length;--l>=0;){var p=n[l];switch(!0){case u&&p instanceof bn&&!p.value&&0==c.length:b=!0;continue n;case p instanceof Dn:if(p.body instanceof bn){if((u&&0==c.length||c[0]instanceof bn&&!c[0].value)&&!p.body.value&&!p.alternative){b=!0;var h=e(Z,p.condition,{body:p.condition});c.unshift(h);continue n}if(c[0]instanceof bn&&p.body.value&&c[0].value&&!p.alternative){b=!0,p=p.clone(),p.alternative=c[0],c[0]=p.transform(t);continue n}if(o&&(0==c.length||c[0]instanceof bn)&&p.body.value&&!p.alternative&&u){b=!0,p=p.clone(),p.alternative=c[0]||e(bn,p,{value:e(ye,p)}),c[0]=p.transform(t);continue n}if(!p.body.value&&u){b=!0,p=p.clone(),p.condition=p.condition.negate(t);var v=a(p.alternative).concat(c),m=f(v);p.body=e(Q,p,{body:v}),p.alternative=null,c=m.concat([p.transform(t)]);continue n}if(t.option("sequences")&&1==c.length&&u&&c[0]instanceof Z&&(!p.alternative||p.alternative instanceof Z)){b=!0,c.push(e(bn,c[0],{value:e(ye,c[0])}).transform(t)),c=a(p.alternative).concat(c),c.unshift(p);continue n}}var _=y(p.body),g=_ instanceof An?t.loopcontrol_target(_.label):null;if(_&&(_ instanceof bn&&!_.value&&u||_ instanceof En&&i===s(g)||_ instanceof wn&&g instanceof Q&&i===g)){_.label&&d(_.label.thedef.references,_),b=!0;var v=a(p.body).slice(0,-1);p=p.clone(),p.condition=p.condition.negate(t),p.body=e(Q,p,{body:a(p.alternative).concat(c)}),p.alternative=e(Q,p,{body:v}),c=[p.transform(t)];continue n}var _=y(p.alternative),g=_ instanceof An?t.loopcontrol_target(_.label):null;if(_&&(_ instanceof bn&&!_.value&&u||_ instanceof En&&i===s(g)||_ instanceof wn&&g instanceof Q&&i===g)){_.label&&d(_.label.thedef.references,_),b=!0,p=p.clone(),p.body=e(Q,p.body,{body:a(p.body).concat(c)}),p.alternative=e(Q,p.alternative,{body:a(p.alternative).slice(0,-1)}),c=[p.transform(t)];continue n}c.unshift(p);break;default:c.unshift(p)}}return c}function p(n,e){var t=!1,r=n.length,i=e.self();return n=n.reduce(function(n,r){if(t)l(e,r,n);else{if(r instanceof An){var o=e.loopcontrol_target(r.label);r instanceof wn&&o instanceof Q&&s(o)===i||r instanceof En&&s(o)===i?r.label&&d(r.label.thedef.references,r):n.push(r)}else n.push(r);y(r)&&(t=!0)}return n},[]),b=n.length!=r,n}function h(n,t){function r(){i=Nn.from_array(i),i&&o.push(e(Z,i,{body:i})),i=[]}if(n.length<2)return n;var i=[],o=[];return n.forEach(function(n){n instanceof Z&&v(i)<t.sequences_limit?i.push(n.body):(r(),o.push(n))}),r(),o=m(o,t),b=o.length!=n.length,o}function v(n){for(var e=0,t=0;t<n.length;++t){var r=n[t];r instanceof Nn?e+=r.len():e++}return e}function m(n,t){function r(n){i.pop();var e=o.body;return e instanceof Nn?e.add(n):e=Nn.cons(e,n),e.transform(t)}var i=[],o=null;return n.forEach(function(n){if(o)if(n instanceof sn){var t={};try{o.body.walk(new A(function(n){if(n instanceof Vn&&"in"==n.operator)throw t})),!n.init||n.init instanceof $n?n.init||(n.init=o.body,i.pop()):n.init=r(n.init)}catch(n){if(n!==t)throw n}}else n instanceof Dn?n.condition=r(n.condition):n instanceof fn?n.expression=r(n.expression):n instanceof gn&&n.value?n.value=r(n.value):n instanceof gn?n.value=r(e(ye,n)):n instanceof xn&&(n.expression=r(n.expression));i.push(n),o=n instanceof Z?n:null}),i}function _(n,e){var t=null;return n.reduce(function(n,e){return e instanceof $n&&t&&t.TYPE==e.TYPE?(t.definitions=t.definitions.concat(e.definitions),b=!0):e instanceof sn&&t instanceof On&&(!e.init||e.init.TYPE==t.TYPE)?(b=!0,n.pop(),e.init?e.init.definitions=t.definitions.concat(e.init.definitions):e.init=t,n.push(e),t=e):(t=e,n.push(e)),n},[])}function g(n,t){function r(n){return n instanceof zn&&(n.expression instanceof vn||r(n.expression))}n.forEach(function(n){n instanceof Z&&(n.body=function n(t){return t.transform(new N(function(t){if(t instanceof Hn)return t;if(r(t))return e(Un,t,{operator:"!",expression:t});if(t instanceof zn)t.expression=n(t.expression);else if(t instanceof Nn)t.car=n(t.car);else if(t instanceof Yn){var i=n(t.condition);if(i!==t.condition){t.condition=i;var o=t.consequent;t.consequent=t.alternative,t.alternative=o}}return t}))}(n.body))})}var b,w=10;do b=!1,t.option("angular")&&(n=o(n)),n=u(n),t.option("dead_code")&&(n=p(n,t)),t.option("if_return")&&(n=c(n,t)),t.sequences_limit>0&&(n=h(n,t)),t.option("join_vars")&&(n=_(n,t)),t.option("collapse_vars")&&(n=i(n,t));while(b&&w-- >0);return t.option("negate_iife")&&g(n,t),n}function f(n){for(var e=[],t=n.length-1;t>=0;--t){var r=n[t];r instanceof mn&&(n.splice(t,1),e.unshift(r))}return e}function l(n,e,t){e instanceof mn||n.warn("Dropping unreachable code [{file}:{line},{col}]",e.start),e.walk(new A(function(e){return e instanceof $n?(n.warn("Declarations in unreachable code! [{file}:{line},{col}]",e.start),e.remove_initializers(),t.push(e),!0):e instanceof mn?(t.push(e),!0):e instanceof ln||void 0}))}function b(n,e){return n.print_to_string().length>e.print_to_string().length?e:n}function y(n){return n&&n.aborts()}function w(n,t){function r(r){r=a(r),n.body instanceof Q?(n.body=n.body.clone(),n.body.body=r.concat(n.body.body.slice(1)),n.body=n.body.transform(t)):n.body=e(Q,n.body,{body:r}).transform(t),w(n,t)}var i=n.body instanceof Q?n.body.body[0]:n.body;i instanceof Dn&&(i.body instanceof wn&&t.loopcontrol_target(i.body.label)===n?(n.condition?n.condition=e(Vn,n.condition,{left:n.condition,operator:"&&",right:i.condition.negate(t)}):n.condition=i.condition.negate(t),r(i.alternative)):i.alternative instanceof wn&&t.loopcontrol_target(i.alternative.label)===n&&(n.condition?n.condition=e(Vn,n.condition,{left:n.condition,operator:"&&",right:i.condition}):n.condition=i.condition,r(i.body)))}function E(n,e){var t=e.option("pure_getters");e.options.pure_getters=!1;var r=n.has_side_effects(e);return e.options.pure_getters=t,r}function D(n,t){return t.option("booleans")&&t.in_boolean_context()&&!n.has_side_effects(t)?e(xe,n):n}n(W,function(n,e){return n}),W.DEFMETHOD("equivalent_to",function(n){return this.print_to_string()==n.print_to_string()}),W.DEFMETHOD("clear_opt_flags",function(){this.walk(new A(function(n){n instanceof X||n instanceof de||(n._squeezed=!1,n._optimized=!1)}))}),function(n){var e=["!","delete"],t=["in","instanceof","==","!=","===","!==","<","<=",">=",">"];n(W,function(){return!1}),n(Un,function(){return i(this.operator,e)}),n(Vn,function(){return i(this.operator,t)||("&&"==this.operator||"||"==this.operator)&&this.left.is_boolean()&&this.right.is_boolean()}),n(Yn,function(){return this.consequent.is_boolean()&&this.alternative.is_boolean()}),n(Wn,function(){return"="==this.operator&&this.right.is_boolean()}),n(Nn,function(){return this.cdr.is_boolean()}),n(xe,function(){return!0}),n(De,function(){return!0})}(function(n,e){n.DEFMETHOD("is_boolean",e)}),function(n){n(W,function(){return!1}),n(he,function(){return!0}),n(Un,function(){return"typeof"==this.operator}),n(Vn,function(n){return"+"==this.operator&&(this.left.is_string(n)||this.right.is_string(n))}),n(Wn,function(n){return("="==this.operator||"+="==this.operator)&&this.right.is_string(n)}),n(Nn,function(n){return this.cdr.is_string(n)}),n(Yn,function(n){return this.consequent.is_string(n)&&this.alternative.is_string(n)}),n(zn,function(n){return n.option("unsafe")&&this.expression instanceof fe&&"String"==this.expression.name&&this.expression.undeclared()})}(function(n,e){n.DEFMETHOD("is_string",e)}),function(n){function e(n,e){if(!e)throw new Error("Compressor must be passed");return n._eval(e)}W.DEFMETHOD("evaluate",function(e){if(!e.option("evaluate"))return[this];try{var r=this._eval(e);return[b(t(e,r,this),this),r]}catch(e){if(e!==n)throw e;return[this]}}),W.DEFMETHOD("is_constant",function(n){return this instanceof de||this instanceof Un&&"!"==this.operator&&this.expression instanceof de||this.evaluate(n).length>1}),W.DEFMETHOD("constant_value",function(n){if(this instanceof de)return this.value;if(this instanceof Un&&"!"==this.operator&&this.expression instanceof de)return!this.expression.value;var e=this.evaluate(n);return e.length>1?e[1]:void 0}),n(G,function(){throw new Error(p("Cannot evaluate a statement [{file}:{line},{col}]",this.start))}),n(vn,function(){throw n}),n(W,function(){throw n}),n(de,function(){return this.getValue()}),n(Un,function(t){var r=this.expression;switch(this.operator){case"!":return!e(r,t);case"typeof":if(r instanceof vn)return"function";if(r=e(r,t),r instanceof RegExp)throw n;return typeof r;case"void":return void e(r,t);case"~":return~e(r,t);case"-":return-e(r,t);case"+":return+e(r,t)}throw n}),n(Vn,function(t){var r,i=this.left,o=this.right;switch(this.operator){case"&&":r=e(i,t)&&e(o,t);break;case"||":r=e(i,t)||e(o,t);break;case"|":r=e(i,t)|e(o,t);break;case"&":r=e(i,t)&e(o,t);break;case"^":r=e(i,t)^e(o,t);break;case"+":r=e(i,t)+e(o,t);break;case"*":r=e(i,t)*e(o,t);break;case"/":r=e(i,t)/e(o,t);break;case"%":r=e(i,t)%e(o,t);break;case"-":r=e(i,t)-e(o,t);break;case"<<":r=e(i,t)<<e(o,t);break;case">>":r=e(i,t)>>e(o,t);break;case">>>":r=e(i,t)>>>e(o,t);break;case"==":r=e(i,t)==e(o,t);break;case"===":r=e(i,t)===e(o,t);break;case"!=":r=e(i,t)!=e(o,t);break;case"!==":r=e(i,t)!==e(o,t);break;case"<":r=e(i,t)<e(o,t);break;case"<=":r=e(i,t)<=e(o,t);break;case">":r=e(i,t)>e(o,t);break;case">=":r=e(i,t)>=e(o,t);break;default:throw n}if(isNaN(r)&&t.find_parent(fn))throw n;return r}),n(Yn,function(n){return e(this.condition,n)?e(this.consequent,n):e(this.alternative,n)}),n(fe,function(t){
	if(this._evaluating)throw n;this._evaluating=!0;try{var r=this.definition();if(r&&(r.constant||t.option("reduce_vars")&&!r.modified)&&r.init)return e(r.init,t)}finally{this._evaluating=!1}throw n}),n(Rn,function(t){if(t.option("unsafe")&&"length"==this.property){var r=e(this.expression,t);if("string"==typeof r)return r.length}throw n})}(function(n,e){n.DEFMETHOD("_eval",e)}),function(n){function t(n){return e(Un,n,{operator:"!",expression:n})}n(W,function(){return t(this)}),n(G,function(){throw new Error("Cannot negate a statement")}),n(vn,function(){return t(this)}),n(Un,function(){return"!"==this.operator?this.expression:t(this)}),n(Nn,function(n){var e=this.clone();return e.cdr=e.cdr.negate(n),e}),n(Yn,function(n){var e=this.clone();return e.consequent=e.consequent.negate(n),e.alternative=e.alternative.negate(n),b(t(this),e)}),n(Vn,function(n){var e=this.clone(),r=this.operator;if(n.option("unsafe_comps"))switch(r){case"<=":return e.operator=">",e;case"<":return e.operator=">=",e;case">=":return e.operator="<",e;case">":return e.operator="<=",e}switch(r){case"==":return e.operator="!=",e;case"!=":return e.operator="==",e;case"===":return e.operator="!==",e;case"!==":return e.operator="===",e;case"&&":return e.operator="||",e.left=e.left.negate(n),e.right=e.right.negate(n),b(t(this),e);case"||":return e.operator="&&",e.left=e.left.negate(n),e.right=e.right.negate(n),b(t(this),e)}return t(this)})}(function(n,e){n.DEFMETHOD("negate",function(n){return e.call(this,n)})}),function(n){n(W,function(n){return!0}),n(nn,function(n){return!1}),n(de,function(n){return!1}),n(pe,function(n){return!1}),n(zn,function(n){var e=n.option("pure_funcs");return!e||("function"==typeof e?e(this):e.indexOf(this.expression.print_to_string())<0)}),n(K,function(n){for(var e=this.body.length;--e>=0;)if(this.body[e].has_side_effects(n))return!0;return!1}),n(Z,function(n){return this.body.has_side_effects(n)}),n(mn,function(n){return!0}),n(vn,function(n){return!1}),n(Vn,function(n){return this.left.has_side_effects(n)||this.right.has_side_effects(n)}),n(Wn,function(n){return!0}),n(Yn,function(n){return this.condition.has_side_effects(n)||this.consequent.has_side_effects(n)||this.alternative.has_side_effects(n)}),n(Pn,function(n){return"delete"==this.operator||"++"==this.operator||"--"==this.operator||this.expression.has_side_effects(n)}),n(fe,function(n){return this.global()&&this.undeclared()}),n(Jn,function(n){for(var e=this.properties.length;--e>=0;)if(this.properties[e].has_side_effects(n))return!0;return!1}),n(Xn,function(n){return this.value.has_side_effects(n)}),n(Gn,function(n){for(var e=this.elements.length;--e>=0;)if(this.elements[e].has_side_effects(n))return!0;return!1}),n(Rn,function(n){return!n.option("pure_getters")||this.expression.has_side_effects(n)}),n(In,function(n){return!n.option("pure_getters")||(this.expression.has_side_effects(n)||this.property.has_side_effects(n))}),n(jn,function(n){return!n.option("pure_getters")}),n(Nn,function(n){return this.car.has_side_effects(n)||this.cdr.has_side_effects(n)})}(function(n,e){n.DEFMETHOD("has_side_effects",e)}),function(n){function e(){var n=this.body.length;return n>0&&y(this.body[n-1])}n(G,function(){return null}),n(_n,function(){return this}),n(Q,e),n(kn,e),n(Dn,function(){return this.alternative&&y(this.body)&&y(this.alternative)&&this})}(function(n,e){n.DEFMETHOD("aborts",e)}),n(X,function(n,t){return"up"===t.has_directive(n.value)?e(nn,n):n}),n(J,function(n,t){return t.option("drop_debugger")?e(nn,n):n}),n(tn,function(n,t){return n.body instanceof wn&&t.loopcontrol_target(n.body.label)===n.body?e(nn,n):0==n.label.references.length?n.body:n}),n(K,function(n,e){return n.body=c(n.body,e),n}),n(Q,function(n,t){switch(n.body=c(n.body,t),n.body.length){case 1:return n.body[0];case 0:return e(nn,n)}return n}),ln.DEFMETHOD("drop_unused",function(n){var t=this;if(n.has_directive("use asm"))return t;if(n.option("unused")&&!(t instanceof pn)&&!t.uses_eval&&!t.uses_with){var r=[],i={},o=new _,a=this,u=new A(function(e,s){if(e!==t){if(e instanceof mn)return o.add(e.name.name,e),!0;if(e instanceof $n&&a===t)return e.definitions.forEach(function(e){e.value&&(o.add(e.name.name,e.value),e.value.has_side_effects(n)&&e.value.walk(u))}),!0;if(e instanceof fe){var c=e.definition();return c.id in i||(i[c.id]=!0,r.push(c)),!0}if(e instanceof ln){var f=a;return a=e,s(),a=f,!0}}});t.walk(u);for(var s=0;s<r.length;++s)r[s].orig.forEach(function(n){var e=o.get(n.name);e&&e.forEach(function(n){var e=new A(function(n){if(n instanceof fe){var e=n.definition();e.id in i||(i[e.id]=!0,r.push(e))}});n.walk(e)})});var c=new N(function(r,o,a){if(r instanceof dn&&!(r instanceof hn)&&!n.option("keep_fargs"))for(var u=r.argnames,s=u.length;--s>=0;){var f=u[s];if(!f.unreferenced())break;u.pop(),n.warn("Dropping unused function argument {name} [{file}:{line},{col}]",{name:f.name,file:f.start.file,line:f.start.line,col:f.start.col})}if(r instanceof mn&&r!==t)return r.name.definition().id in i?r:(n.warn("Dropping unused function {name} [{file}:{line},{col}]",{name:r.name.name,file:r.name.start.file,line:r.name.start.line,col:r.name.start.col}),e(nn,r));if(r instanceof $n&&!(c.parent()instanceof cn)){var l=r.definitions.filter(function(e){if(e.name.definition().id in i)return!0;var t={name:e.name.name,file:e.name.start.file,line:e.name.start.line,col:e.name.start.col};return e.value&&e.value.has_side_effects(n)?(e._unused_side_effects=!0,n.warn("Side effects in initialization of unused variable {name} [{file}:{line},{col}]",t),!0):(n.warn("Dropping unused variable {name} [{file}:{line},{col}]",t),!1)});l=h(l,function(n,e){return!n.value&&e.value?-1:!e.value&&n.value?1:0});for(var p=[],s=0;s<l.length;){var d=l[s];d._unused_side_effects?(p.push(d.value),l.splice(s,1)):(p.length>0&&(p.push(d.value),d.value=Nn.from_array(p),p=[]),++s)}return p=p.length>0?e(Q,r,{body:[e(Z,r,{body:Nn.from_array(p)})]}):null,0!=l.length||p?0==l.length?a?V.splice(p.body):p:(r.definitions=l,p?(p.body.unshift(r),a?V.splice(p.body):p):r):e(nn,r)}if(r instanceof sn&&(o(r,this),r.init instanceof Q)){var v=r.init.body.slice(0,-1);return r.init=r.init.body.slice(-1)[0].body,v.push(r),a?V.splice(v):e(Q,r,{body:v})}return r instanceof ln&&r!==t?r:void 0});t.transform(c)}}),ln.DEFMETHOD("hoist_declarations",function(n){var t=this;if(n.has_directive("use asm"))return t;var r=n.option("hoist_funs"),i=n.option("hoist_vars");if(r||i){var a=[],u=[],s=new _,c=0,f=0;t.walk(new A(function(n){return n instanceof ln&&n!==t||(n instanceof On?(++f,!0):void 0)})),i=i&&f>1;var l=new N(function(n){if(n!==t){if(n instanceof X)return a.push(n),e(nn,n);if(n instanceof mn&&r)return u.push(n),e(nn,n);if(n instanceof On&&i){n.definitions.forEach(function(n){s.set(n.name.name,n),++c});var o=n.to_assignments(),f=l.parent();if(f instanceof cn&&f.init===n){if(null==o){var p=n.definitions[0].name;return e(fe,p,p)}return o}return f instanceof sn&&f.init===n?o:o?e(Z,n,{body:o}):e(nn,n)}if(n instanceof ln)return n}});if(t=t.transform(l),c>0){var p=[];if(s.each(function(n,e){t instanceof dn&&o(function(e){return e.name==n.name.name},t.argnames)?s.del(e):(n=n.clone(),n.value=null,p.push(n),s.set(e,n))}),p.length>0){for(var h=0;h<t.body.length;){if(t.body[h]instanceof Z){var v,m,g=t.body[h].body;if(g instanceof Wn&&"="==g.operator&&(v=g.left)instanceof ne&&s.has(v.name)){var b=s.get(v.name);if(b.value)break;b.value=g.right,d(p,b),p.push(b),t.body.splice(h,1);continue}if(g instanceof Nn&&(m=g.car)instanceof Wn&&"="==m.operator&&(v=m.left)instanceof ne&&s.has(v.name)){var b=s.get(v.name);if(b.value)break;b.value=m.right,d(p,b),p.push(b),t.body[h].body=g.cdr;continue}}if(t.body[h]instanceof nn)t.body.splice(h,1);else{if(!(t.body[h]instanceof Q))break;var y=[h,1].concat(t.body[h].body);t.body.splice.apply(t.body,y)}}p=e(On,t,{definitions:p}),u.push(p)}}t.body=a.concat(u,t.body)}return t}),n(Z,function(n,t){return t.option("side_effects")&&!n.body.has_side_effects(t)?(t.warn("Dropping side-effect-free statement [{file}:{line},{col}]",n.start),e(nn,n)):n}),n(on,function(n,t){var r=n.condition.evaluate(t);if(n.condition=r[0],!t.option("loops"))return n;if(r.length>1){if(r[1])return e(sn,n,{body:n.body});if(n instanceof un&&t.option("dead_code")){var i=[];return l(t,n.body,i),e(Q,n,{body:i})}}return n}),n(un,function(n,t){return t.option("loops")?(n=on.prototype.optimize.call(n,t),n instanceof un&&(w(n,t),n=e(sn,n,n).transform(t)),n):n}),n(sn,function(n,t){var r=n.condition;if(r&&(r=r.evaluate(t),n.condition=r[0]),!t.option("loops"))return n;if(r&&r.length>1&&!r[1]&&t.option("dead_code")){var i=[];return n.init instanceof G?i.push(n.init):n.init&&i.push(e(Z,n.init,{body:n.init})),l(t,n.body,i),e(Q,n,{body:i})}return w(n,t),n}),n(Dn,function(n,t){if(!t.option("conditionals"))return n;var r=n.condition.evaluate(t);if(n.condition=r[0],r.length>1)if(r[1]){if(t.warn("Condition always true [{file}:{line},{col}]",n.condition.start),t.option("dead_code")){var i=[];return n.alternative&&l(t,n.alternative,i),i.push(n.body),e(Q,n,{body:i}).transform(t)}}else if(t.warn("Condition always false [{file}:{line},{col}]",n.condition.start),t.option("dead_code")){var i=[];return l(t,n.body,i),n.alternative&&i.push(n.alternative),e(Q,n,{body:i}).transform(t)}u(n.alternative)&&(n.alternative=null);var o=n.condition.negate(t),a=n.condition.print_to_string().length,s=o.print_to_string().length,c=s<a;if(n.alternative&&c){c=!1,n.condition=o;var f=n.body;n.body=n.alternative||e(nn),n.alternative=f}if(u(n.body)&&u(n.alternative))return e(Z,n.condition,{body:n.condition}).transform(t);if(n.body instanceof Z&&n.alternative instanceof Z)return e(Z,n,{body:e(Yn,n,{condition:n.condition,consequent:n.body.body,alternative:n.alternative.body})}).transform(t);if(u(n.alternative)&&n.body instanceof Z)return a===s&&!c&&n.condition instanceof Vn&&"||"==n.condition.operator&&(c=!0),c?e(Z,n,{body:e(Vn,n,{operator:"||",left:o,right:n.body.body})}).transform(t):e(Z,n,{body:e(Vn,n,{operator:"&&",left:n.condition,right:n.body.body})}).transform(t);if(n.body instanceof nn&&n.alternative&&n.alternative instanceof Z)return e(Z,n,{body:e(Vn,n,{operator:"||",left:n.condition,right:n.alternative.body})}).transform(t);if(n.body instanceof gn&&n.alternative instanceof gn&&n.body.TYPE==n.alternative.TYPE)return e(n.body.CTOR,n,{value:e(Yn,n,{condition:n.condition,consequent:n.body.value||e(ye,n.body).optimize(t),alternative:n.alternative.value||e(ye,n.alternative).optimize(t)})}).transform(t);if(n.body instanceof Dn&&!n.body.alternative&&!n.alternative&&(n.condition=e(Vn,n.condition,{operator:"&&",left:n.condition,right:n.body.condition}).transform(t),n.body=n.body.body),y(n.body)&&n.alternative){var p=n.alternative;return n.alternative=null,e(Q,n,{body:[n,p]}).transform(t)}if(y(n.alternative)){var d=n.body;return n.body=n.alternative,n.condition=c?o:n.condition.negate(t),n.alternative=null,e(Q,n,{body:[n,d]}).transform(t)}return n}),n(xn,function(n,t){if(0==n.body.length&&t.option("conditionals"))return e(Z,n,{body:n.expression}).transform(t);for(;;){var r=n.body[n.body.length-1];if(r){var i=r.body[r.body.length-1];if(i instanceof wn&&s(t.loopcontrol_target(i.label))===n&&r.body.pop(),r instanceof Fn&&0==r.body.length){n.body.pop();continue}}break}var o=n.expression.evaluate(t);n:if(2==o.length)try{if(n.expression=o[0],!t.option("dead_code"))break n;var a=o[1],u=!1,c=!1,f=!1,l=!1,p=!1,d=new N(function(r,i,o){if(r instanceof dn||r instanceof Z)return r;if(r instanceof xn&&r===n)return r=r.clone(),i(r,this),p?r:e(Q,r,{body:r.body.reduce(function(n,e){return n.concat(e.body)},[])}).transform(t);if(r instanceof Dn||r instanceof Bn){var s=u;return u=!c,i(r,this),u=s,r}if(r instanceof en||r instanceof xn){var s=c;return c=!0,i(r,this),c=s,r}if(r instanceof wn&&this.loopcontrol_target(r.label)===n)return u?(p=!0,r):c?r:(l=!0,o?V.skip:e(nn,r));if(r instanceof kn&&this.parent()===n){if(l)return V.skip;if(r instanceof Cn){var d=r.expression.evaluate(t);if(d.length<2)throw n;return d[1]===a||f?(f=!0,y(r)&&(l=!0),i(r,this),r):V.skip}return i(r,this),r}});d.stack=t.stack.slice(),n=n.transform(d)}catch(e){if(e!==n)throw e}return n}),n(Cn,function(n,e){return n.body=c(n.body,e),n}),n(Bn,function(n,e){return n.body=c(n.body,e),n}),$n.DEFMETHOD("remove_initializers",function(){this.definitions.forEach(function(n){n.value=null})}),$n.DEFMETHOD("to_assignments",function(){var n=this.definitions.reduce(function(n,t){if(t.value){var r=e(fe,t.name,t.name);n.push(e(Wn,t,{operator:"=",left:r,right:t.value}))}return n},[]);return 0==n.length?null:Nn.from_array(n)}),n($n,function(n,t){return 0==n.definitions.length?e(nn,n):n}),n(vn,function(n,e){return n=dn.prototype.optimize.call(n,e),e.option("unused")&&!e.option("keep_fnames")&&n.name&&n.name.unreferenced()&&(n.name=null),n}),n(zn,function(n,r){if(r.option("unsafe")){var i=n.expression;if(i instanceof fe&&i.undeclared())switch(i.name){case"Array":if(1!=n.args.length)return e(Gn,n,{elements:n.args}).transform(r);break;case"Object":if(0==n.args.length)return e(Jn,n,{properties:[]});break;case"String":if(0==n.args.length)return e(he,n,{value:""});if(n.args.length<=1)return e(Vn,n,{left:n.args[0],operator:"+",right:e(he,n,{value:""})}).transform(r);break;case"Number":if(0==n.args.length)return e(ve,n,{value:0});if(1==n.args.length)return e(Un,n,{expression:n.args[0],operator:"+"}).transform(r);case"Boolean":if(0==n.args.length)return e(De,n);if(1==n.args.length)return e(Un,n,{expression:e(Un,null,{expression:n.args[0],operator:"!"}),operator:"!"}).transform(r);break;case"Function":if(0==n.args.length)return e(vn,n,{argnames:[],body:[]});if(m(n.args,function(n){return n instanceof he}))try{var o="(function("+n.args.slice(0,-1).map(function(n){return n.value}).join(",")+"){"+n.args[n.args.length-1].value+"})()",a=H(o);a.figure_out_scope({screw_ie8:r.option("screw_ie8")});var u=new I(r.options);a=a.transform(u),a.figure_out_scope({screw_ie8:r.option("screw_ie8")}),a.mangle_names();var s;try{a.walk(new A(function(n){if(n instanceof dn)throw s=n,a}))}catch(n){if(n!==a)throw n}if(!s)return n;var c=s.argnames.map(function(t,r){return e(he,n.args[r],{value:t.print_to_string()})}),o=R();return Q.prototype._codegen.call(s,s,o),o=o.toString().replace(/^\{|\}$/g,""),c.push(e(he,n.args[n.args.length-1],{value:o})),n.args=c,n}catch(e){if(!(e instanceof O))throw console.log(e),e;r.warn("Error parsing code passed to new Function [{file}:{line},{col}]",n.args[n.args.length-1].start),r.warn(e.toString())}}else{if(i instanceof Rn&&"toString"==i.property&&0==n.args.length)return e(Vn,n,{left:e(he,n,{value:""}),operator:"+",right:i.expression}).transform(r);if(i instanceof Rn&&i.expression instanceof Gn&&"join"==i.property){var f=0==n.args.length?",":n.args[0].evaluate(r)[1];if(null!=f){var l=i.expression.elements.reduce(function(n,e){if(e=e.evaluate(r),0==n.length||1==e.length)n.push(e);else{var i=n[n.length-1];if(2==i.length){var o=""+i[1]+f+e[1];n[n.length-1]=[t(r,o,i[0]),o]}else n.push(e)}return n},[]);if(0==l.length)return e(he,n,{value:""});if(1==l.length)return l[0][0];if(""==f){var p;return p=l[0][0]instanceof he||l[1][0]instanceof he?l.shift()[0]:e(he,n,{value:""}),l.reduce(function(n,t){return e(Vn,t[0],{operator:"+",left:n,right:t[0]})},p).transform(r)}var d=n.clone();return d.expression=d.expression.clone(),d.expression.expression=d.expression.expression.clone(),d.expression.expression.elements=l.map(function(n){return n[0]}),b(n,d)}}}}if(r.option("side_effects")&&n.expression instanceof vn&&0==n.args.length&&!K.prototype.has_side_effects.call(n.expression,r))return e(ye,n).transform(r);if(r.option("drop_console")&&n.expression instanceof jn){for(var h=n.expression.expression;h.expression;)h=h.expression;if(h instanceof fe&&"console"==h.name&&h.undeclared())return e(ye,n).transform(r)}return n.evaluate(r)[0]}),n(Hn,function(n,t){if(t.option("unsafe")){var r=n.expression;if(r instanceof fe&&r.undeclared())switch(r.name){case"Object":case"RegExp":case"Function":case"Error":case"Array":return e(zn,n,n).transform(t)}}return n}),n(Nn,function(n,t){if(!t.option("side_effects"))return n;if(!n.car.has_side_effects(t))return r(t.parent(),n,n.cdr);if(t.option("cascade")){if(n.car instanceof Wn&&!n.car.left.has_side_effects(t)){if(n.car.left.equivalent_to(n.cdr))return n.car;if(n.cdr instanceof zn&&n.cdr.expression.equivalent_to(n.car.left))return n.cdr.expression=n.car,n.cdr}if(!n.car.has_side_effects(t)&&!n.cdr.has_side_effects(t)&&n.car.equivalent_to(n.cdr))return n.car}return n.cdr instanceof Un&&"void"==n.cdr.operator&&!n.cdr.expression.has_side_effects(t)?(n.cdr.expression=n.car,n.cdr):n.cdr instanceof ye?e(Un,n,{operator:"void",expression:n.car}):n}),Pn.DEFMETHOD("lift_sequences",function(n){if(n.option("sequences")&&this.expression instanceof Nn){var e=this.expression,t=e.to_array();return this.expression=t.pop(),t.push(this),e=Nn.from_array(t).transform(n)}return this}),n(Ln,function(n,e){return n.lift_sequences(e)}),n(Un,function(n,t){n=n.lift_sequences(t);var r=n.expression;if(t.option("booleans")&&t.in_boolean_context()){switch(n.operator){case"!":if(r instanceof Un&&"!"==r.operator)return r.expression;break;case"typeof":return t.warn("Boolean expression always true [{file}:{line},{col}]",n.start),n.expression.has_side_effects(t)?e(Nn,n,{car:n.expression,cdr:e(xe,n)}):e(xe,n)}r instanceof Vn&&"!"==n.operator&&(n=b(n,r.negate(t)))}return n.evaluate(t)[0]}),Vn.DEFMETHOD("lift_sequences",function(n){if(n.option("sequences")){if(this.left instanceof Nn){var e=this.left,t=e.to_array();return this.left=t.pop(),t.push(this),e=Nn.from_array(t).transform(n)}if(this.right instanceof Nn&&this instanceof Wn&&!E(this.left,n)){var e=this.right,t=e.to_array();return this.right=t.pop(),t.push(this),e=Nn.from_array(t).transform(n)}}return this});var x=v("== === != !== * & | ^");n(Vn,function(n,t){function i(e,r){if(r||!n.left.has_side_effects(t)&&!n.right.has_side_effects(t)){e&&(n.operator=e);var i=n.left;n.left=n.right,n.right=i}}if(x(n.operator)&&(n.right instanceof de&&!(n.left instanceof de)&&(n.left instanceof Vn&&Ue[n.left.operator]>=Ue[n.operator]||i(null,!0)),/^[!=]==?$/.test(n.operator))){if(n.left instanceof fe&&n.right instanceof Yn){if(n.right.consequent instanceof fe&&n.right.consequent.definition()===n.left.definition()){if(/^==/.test(n.operator))return n.right.condition;if(/^!=/.test(n.operator))return n.right.condition.negate(t)}if(n.right.alternative instanceof fe&&n.right.alternative.definition()===n.left.definition()){if(/^==/.test(n.operator))return n.right.condition.negate(t);if(/^!=/.test(n.operator))return n.right.condition}}if(n.right instanceof fe&&n.left instanceof Yn){if(n.left.consequent instanceof fe&&n.left.consequent.definition()===n.right.definition()){if(/^==/.test(n.operator))return n.left.condition;if(/^!=/.test(n.operator))return n.left.condition.negate(t)}if(n.left.alternative instanceof fe&&n.left.alternative.definition()===n.right.definition()){if(/^==/.test(n.operator))return n.left.condition.negate(t);if(/^!=/.test(n.operator))return n.left.condition}}}if(n=n.lift_sequences(t),t.option("comparisons"))switch(n.operator){case"===":case"!==":(n.left.is_string(t)&&n.right.is_string(t)||n.left.is_boolean()&&n.right.is_boolean())&&(n.operator=n.operator.substr(0,2));case"==":case"!=":n.left instanceof he&&"undefined"==n.left.value&&n.right instanceof Un&&"typeof"==n.right.operator&&t.option("unsafe")&&(n.right.expression instanceof fe&&n.right.expression.undeclared()||(n.right=n.right.expression,n.left=e(ye,n.left).optimize(t),2==n.operator.length&&(n.operator+="=")))}if(t.option("conditionals"))if("&&"==n.operator){var o=n.left.evaluate(t);if(o.length>1)return o[1]?(t.warn("Condition left of && always true [{file}:{line},{col}]",n.start),r(t.parent(),n,n.right.evaluate(t)[0])):(t.warn("Condition left of && always false [{file}:{line},{col}]",n.start),r(t.parent(),n,o[0]))}else if("||"==n.operator){var o=n.left.evaluate(t);if(o.length>1)return o[1]?(t.warn("Condition left of || always true [{file}:{line},{col}]",n.start),r(t.parent(),n,o[0])):(t.warn("Condition left of || always false [{file}:{line},{col}]",n.start),r(t.parent(),n,n.right.evaluate(t)[0]))}if(t.option("booleans")&&t.in_boolean_context())switch(n.operator){case"&&":var o=n.left.evaluate(t),a=n.right.evaluate(t);if(o.length>1&&!o[1]||a.length>1&&!a[1])return t.warn("Boolean && always false [{file}:{line},{col}]",n.start),n.left.has_side_effects(t)?e(Nn,n,{car:n.left,cdr:e(De)}).optimize(t):e(De,n);if(o.length>1&&o[1])return a[0];if(a.length>1&&a[1])return o[0];break;case"||":var o=n.left.evaluate(t),a=n.right.evaluate(t);if(o.length>1&&o[1]||a.length>1&&a[1])return t.warn("Boolean || always true [{file}:{line},{col}]",n.start),n.left.has_side_effects(t)?e(Nn,n,{car:n.left,cdr:e(xe)}).optimize(t):e(xe,n);if(o.length>1&&!o[1])return a[0];if(a.length>1&&!a[1])return o[0];break;case"+":var o=n.left.evaluate(t),a=n.right.evaluate(t);if(o.length>1&&o[0]instanceof he&&o[1]&&!n.right.has_side_effects(t)||a.length>1&&a[0]instanceof he&&a[1]&&!n.left.has_side_effects(t))return t.warn("+ in boolean context always true [{file}:{line},{col}]",n.start),e(xe,n)}if(t.option("comparisons")&&n.is_boolean()){if(!(t.parent()instanceof Vn)||t.parent()instanceof Wn){var u=e(Un,n,{operator:"!",expression:n.negate(t)});n=b(n,u)}if(t.option("unsafe_comps"))switch(n.operator){case"<":i(">");break;case"<=":i(">=")}}return"+"==n.operator&&n.right instanceof he&&""===n.right.getValue()&&n.left instanceof Vn&&"+"==n.left.operator&&n.left.is_string(t)?n.left:(t.option("evaluate")&&"+"==n.operator&&(n.left instanceof de&&n.right instanceof Vn&&"+"==n.right.operator&&n.right.left instanceof de&&n.right.is_string(t)&&(n=e(Vn,n,{operator:"+",left:e(he,null,{value:""+n.left.getValue()+n.right.left.getValue(),start:n.left.start,end:n.right.left.end}),right:n.right.right})),n.right instanceof de&&n.left instanceof Vn&&"+"==n.left.operator&&n.left.right instanceof de&&n.left.is_string(t)&&(n=e(Vn,n,{operator:"+",left:n.left.left,right:e(he,null,{value:""+n.left.right.getValue()+n.right.getValue(),start:n.left.right.start,end:n.right.end})})),n.left instanceof Vn&&"+"==n.left.operator&&n.left.is_string(t)&&n.left.right instanceof de&&n.right instanceof Vn&&"+"==n.right.operator&&n.right.left instanceof de&&n.right.is_string(t)&&(n=e(Vn,n,{operator:"+",left:e(Vn,n.left,{operator:"+",left:n.left.left,right:e(he,null,{value:""+n.left.right.getValue()+n.right.left.getValue(),start:n.left.right.start,end:n.right.left.end})}),right:n.right.right}))),n.right instanceof Vn&&n.right.operator==n.operator&&("&&"==n.operator||"||"==n.operator)?(n.left=e(Vn,n.left,{operator:n.operator,left:n.left,right:n.right.left}),n.right=n.right.right,n.transform(t)):n.evaluate(t)[0])}),n(fe,function(n,r){function i(n,e){return e instanceof Vn&&"="===e.operator&&e.left===n}if(n.undeclared()&&!i(n,r.parent())){var o=r.option("global_defs");if(o&&g(o,n.name))return t(r,o[n.name],n);if(!n.scope.uses_with||!r.find_parent(fn))switch(n.name){case"undefined":return e(ye,n);case"NaN":return e(be,n).transform(r);case"Infinity":return e(we,n).transform(r)}}return n}),n(we,function(n,t){return e(Vn,n,{operator:"/",left:e(ve,n,{value:1}),right:e(ve,n,{value:0})})}),n(ye,function(n,t){if(t.option("unsafe")){var r=t.find_parent(ln),i=r.find_variable("undefined");if(i){var o=e(fe,n,{name:"undefined",scope:r,thedef:i});return o.reference(),o}}return n});var k=["+","-","/","*","%",">>","<<",">>>","|","^","&"],F=["*","|","^","&"];n(Wn,function(n,e){return n=n.lift_sequences(e),"="==n.operator&&n.left instanceof fe&&n.right instanceof Vn&&(n.right.left instanceof fe&&n.right.left.name==n.left.name&&i(n.right.operator,k)?(n.operator=n.right.operator+"=",n.right=n.right.right):n.right.right instanceof fe&&n.right.right.name==n.left.name&&i(n.right.operator,F)&&!n.right.left.has_side_effects(e)&&(n.operator=n.right.operator+"=",n.right=n.right.left)),n}),n(Yn,function(n,i){function o(n){return n.is_boolean()?n:e(Un,n,{operator:"!",expression:n.negate(i)})}function a(n){return n instanceof xe||n instanceof Un&&"!"==n.operator&&n.expression instanceof de&&!n.expression.value}function u(n){return n instanceof De||n instanceof Un&&"!"==n.operator&&n.expression instanceof de&&!!n.expression.value}if(!i.option("conditionals"))return n;if(n.condition instanceof Nn){var s=n.condition.car;return n.condition=n.condition.cdr,Nn.cons(s,n)}var c=n.condition.evaluate(i);if(c.length>1)return c[1]?(i.warn("Condition always true [{file}:{line},{col}]",n.start),r(i.parent(),n,n.consequent)):(i.warn("Condition always false [{file}:{line},{col}]",n.start),r(i.parent(),n,n.alternative));var f=c[0].negate(i);b(c[0],f)===f&&(n=e(Yn,n,{condition:f,consequent:n.alternative,alternative:n.consequent}));var l=n.consequent,p=n.alternative;if(l instanceof Wn&&p instanceof Wn&&l.operator==p.operator&&l.left.equivalent_to(p.left)&&!l.left.has_side_effects(i))return e(Wn,n,{operator:l.operator,left:l.left,right:e(Yn,n,{condition:n.condition,consequent:l.right,alternative:p.right})});if(l instanceof zn&&p.TYPE===l.TYPE&&l.args.length==p.args.length&&!l.expression.has_side_effects(i)&&l.expression.equivalent_to(p.expression)){if(0==l.args.length)return e(Nn,n,{car:n.condition,cdr:l});if(1==l.args.length)return l.args[0]=e(Yn,n,{condition:n.condition,consequent:l.args[0],alternative:p.args[0]}),l}if(l instanceof Yn&&l.alternative.equivalent_to(p))return e(Yn,n,{condition:e(Vn,n,{left:n.condition,operator:"&&",right:l.condition}),consequent:l.consequent,alternative:p});if(l.is_constant(i)&&p.is_constant(i)&&l.equivalent_to(p)){var d=l.constant_value(i);return n.condition.has_side_effects(i)?Nn.from_array([n.condition,t(i,d,n)]):t(i,d,n)}return a(n.consequent)?u(n.alternative)?o(n.condition):e(Vn,n,{operator:"||",left:o(n.condition),right:n.alternative}):u(n.consequent)?a(n.alternative)?o(n.condition.negate(i)):e(Vn,n,{operator:"&&",left:o(n.condition.negate(i)),right:n.alternative}):a(n.alternative)?e(Vn,n,{operator:"||",left:o(n.condition.negate(i)),right:n.consequent}):u(n.alternative)?e(Vn,n,{operator:"&&",left:o(n.condition),right:n.consequent}):n}),n(Ee,function(n,t){if(t.option("booleans")){var r=t.parent();return r instanceof Vn&&("=="==r.operator||"!="==r.operator)?(t.warn("Non-strict equality against boolean: {operator} {value} [{file}:{line},{col}]",{operator:r.operator,value:n.value,file:r.start.file,line:r.start.line,col:r.start.col}),e(ve,n,{value:+n.value})):e(Un,n,{operator:"!",expression:e(ve,n,{value:1-n.value})})}return n}),n(In,function(n,t){var r=n.property;if(r instanceof he&&t.option("properties")){if(r=r.getValue(),Ce(r)?t.option("screw_ie8"):T(r))return e(Rn,n,{expression:n.expression,property:r}).optimize(t);var i=parseFloat(r);isNaN(i)||i.toString()!=r||(n.property=e(ve,n.property,{value:i}))}return n}),n(Rn,function(n,t){var r=n.property;return Ce(r)&&!t.option("screw_ie8")?e(In,n,{expression:n.expression,property:e(he,n,{value:r})}).optimize(t):n.evaluate(t)[0]}),n(Gn,D),n(Jn,D),n(me,D),n(bn,function(n,e){return n.value instanceof ye&&(n.value=null),n})}(),function(){function e(n){if("Literal"==n.type)return null!=n.raw?n.raw:n.value+""}function t(n){var t=n.loc,r=t&&t.start,i=n.range;return new Y({file:t&&t.source,line:r&&r.line,col:r&&r.column,pos:i?i[0]:n.start,endline:r&&r.line,endcol:r&&r.column,endpos:i?i[0]:n.start,raw:e(n)})}function r(n){var t=n.loc,r=t&&t.end,i=n.range;return new Y({file:t&&t.source,line:r&&r.line,col:r&&r.column,pos:i?i[1]:n.end,endline:r&&r.line,endcol:r&&r.column,endpos:i?i[1]:n.end,raw:e(n)})}function i(e,i,a){var f="function From_Moz_"+e+"(M){\n";f+="return new U2."+i.name+"({\nstart: my_start_token(M),\nend: my_end_token(M)";var p="function To_Moz_"+e+"(M){\n";p+="return {\ntype: "+JSON.stringify(e),a&&a.split(/\s*,\s*/).forEach(function(n){var e=/([a-z0-9$_]+)(=|@|>|%)([a-z0-9$_]+)/i.exec(n);if(!e)throw new Error("Can't understand property map: "+n);var t=e[1],r=e[2],i=e[3];switch(f+=",\n"+i+": ",p+=",\n"+t+": ",r){case"@":f+="M."+t+".map(from_moz)",p+="M."+i+".map(to_moz)";break;case">":f+="from_moz(M."+t+")",p+="to_moz(M."+i+")";break;case"=":f+="M."+t,p+="M."+i;break;case"%":f+="from_moz(M."+t+").body",p+="to_moz_block(M)";break;default:throw new Error("Can't understand operator in propmap: "+n)}}),f+="\n})\n}",p+="\n}\n}",f=new Function("U2","my_start_token","my_end_token","from_moz","return("+f+")")(n,t,r,o),p=new Function("to_moz","to_moz_block","return("+p+")")(s,c),l[e]=f,u(i,p)}function o(n){p.push(n);var e=null!=n?l[n.type](n):null;return p.pop(),e}function a(n,e,t){var r=n.start,i=n.end;return null!=r.pos&&null!=i.endpos&&(e.range=[r.pos,i.endpos]),r.line&&(e.loc={start:{line:r.line,column:r.col},end:i.endline?{line:i.endline,column:i.endcol}:null},r.file&&(e.loc.source=r.file)),e}function u(n,e){n.DEFMETHOD("to_mozilla_ast",function(){return a(this,e(this))})}function s(n){return null!=n?n.to_mozilla_ast():null}function c(n){return{type:"BlockStatement",body:n.body.map(s)}}var f=function(n){for(var e=!0,t=0;t<n.length;t++)e&&n[t]instanceof G&&n[t].body instanceof he?n[t]=new X({start:n[t].start,end:n[t].end,value:n[t].body.value}):!e||n[t]instanceof G&&n[t].body instanceof he||(e=!1);return n},l={Program:function(n){return new pn({start:t(n),end:r(n),body:f(n.body.map(o))})},FunctionDeclaration:function(n){return new mn({start:t(n),end:r(n),name:o(n.id),argnames:n.params.map(o),body:f(o(n.body).body)})},FunctionExpression:function(n){return new vn({start:t(n),end:r(n),name:o(n.id),argnames:n.params.map(o),body:f(o(n.body).body)})},ExpressionStatement:function(n){return new Z({start:t(n),end:r(n),body:o(n.expression)})},TryStatement:function(n){var e=n.handlers||[n.handler];if(e.length>1||n.guardedHandlers&&n.guardedHandlers.length)throw new Error("Multiple catch clauses are not supported.");return new Bn({start:t(n),end:r(n),body:o(n.block).body,bcatch:o(e[0]),bfinally:n.finalizer?new Tn(o(n.finalizer)):null})},Property:function(n){var e=n.key,i="Identifier"==e.type?e.name:e.value,a={start:t(e),end:r(n.value),key:i,value:o(n.value)};switch(n.kind){case"init":return new Zn(a);case"set":return a.value.name=o(e),new Kn(a);case"get":return a.value.name=o(e),new Qn(a)}},ArrayExpression:function(n){return new Gn({start:t(n),end:r(n),elements:n.elements.map(function(n){return null===n?new Ae:o(n)})})},ObjectExpression:function(n){return new Jn({start:t(n),end:r(n),properties:n.properties.map(function(n){return n.type="Property",o(n)})})},SequenceExpression:function(n){return Nn.from_array(n.expressions.map(o))},MemberExpression:function(n){return new(n.computed?In:Rn)({start:t(n),end:r(n),property:n.computed?o(n.property):n.property.name,expression:o(n.object)})},SwitchCase:function(n){return new(n.test?Cn:Fn)({start:t(n),end:r(n),expression:o(n.test),body:n.consequent.map(o)})},VariableDeclaration:function(n){return new("const"===n.kind?qn:On)({start:t(n),end:r(n),definitions:n.declarations.map(o)})},Literal:function(n){var e=n.value,i={start:t(n),end:r(n)};if(null===e)return new ge(i);switch(typeof e){case"string":return i.value=e,new he(i);case"number":return i.value=e,new ve(i);case"boolean":return new(e?xe:De)(i);default:var o=n.regex;return o&&o.pattern?i.value=new RegExp(o.pattern,o.flags).toString():i.value=n.regex&&n.raw?n.raw:e,new me(i)}},Identifier:function(n){var e=p[p.length-2];return new("LabeledStatement"==e.type?ce:"VariableDeclarator"==e.type&&e.id===n?"const"==e.kind?ie:re:"FunctionExpression"==e.type?e.id===n?ue:oe:"FunctionDeclaration"==e.type?e.id===n?ae:oe:"CatchClause"==e.type?se:"BreakStatement"==e.type||"ContinueStatement"==e.type?le:fe)({start:t(n),end:r(n),name:n.name})}};l.UpdateExpression=l.UnaryExpression=function(n){var e="prefix"in n?n.prefix:"UnaryExpression"==n.type;return new(e?Un:Ln)({start:t(n),end:r(n),operator:n.operator,expression:o(n.argument)})},i("EmptyStatement",nn),i("BlockStatement",Q,"body@body"),i("IfStatement",Dn,"test>condition, consequent>body, alternate>alternative"),i("LabeledStatement",tn,"label>label, body>body"),
	i("BreakStatement",wn,"label>label"),i("ContinueStatement",En,"label>label"),i("WithStatement",fn,"object>expression, body>body"),i("SwitchStatement",xn,"discriminant>expression, cases@body"),i("ReturnStatement",bn,"argument>value"),i("ThrowStatement",yn,"argument>value"),i("WhileStatement",un,"test>condition, body>body"),i("DoWhileStatement",an,"test>condition, body>body"),i("ForStatement",sn,"init>init, test>condition, update>step, body>body"),i("ForInStatement",cn,"left>init, right>object, body>body"),i("DebuggerStatement",J),i("VariableDeclarator",Mn,"id>name, init>value"),i("CatchClause",Sn,"param>argname, body%body"),i("ThisExpression",pe),i("BinaryExpression",Vn,"operator=operator, left>left, right>right"),i("LogicalExpression",Vn,"operator=operator, left>left, right>right"),i("AssignmentExpression",Wn,"operator=operator, left>left, right>right"),i("ConditionalExpression",Yn,"test>condition, consequent>consequent, alternate>alternative"),i("NewExpression",Hn,"callee>expression, arguments@args"),i("CallExpression",zn,"callee>expression, arguments@args"),u(pn,function(n){return{type:"Program",body:n.body.map(s)}}),u(mn,function(n){return{type:"FunctionDeclaration",id:s(n.name),params:n.argnames.map(s),body:c(n)}}),u(vn,function(n){return{type:"FunctionExpression",id:s(n.name),params:n.argnames.map(s),body:c(n)}}),u(X,function(n){return{type:"ExpressionStatement",expression:{type:"Literal",value:n.value}}}),u(Z,function(n){return{type:"ExpressionStatement",expression:s(n.body)}}),u(kn,function(n){return{type:"SwitchCase",test:s(n.expression),consequent:n.body.map(s)}}),u(Bn,function(n){return{type:"TryStatement",block:c(n),handler:s(n.bcatch),guardedHandlers:[],finalizer:s(n.bfinally)}}),u(Sn,function(n){return{type:"CatchClause",param:s(n.argname),guard:null,body:c(n)}}),u($n,function(n){return{type:"VariableDeclaration",kind:n instanceof qn?"const":"var",declarations:n.definitions.map(s)}}),u(Nn,function(n){return{type:"SequenceExpression",expressions:n.to_array().map(s)}}),u(jn,function(n){var e=n instanceof In;return{type:"MemberExpression",object:s(n.expression),computed:e,property:e?s(n.property):{type:"Identifier",name:n.property}}}),u(Pn,function(n){return{type:"++"==n.operator||"--"==n.operator?"UpdateExpression":"UnaryExpression",operator:n.operator,prefix:n instanceof Un,argument:s(n.expression)}}),u(Vn,function(n){return{type:"&&"==n.operator||"||"==n.operator?"LogicalExpression":"BinaryExpression",left:s(n.left),operator:n.operator,right:s(n.right)}}),u(Gn,function(n){return{type:"ArrayExpression",elements:n.elements.map(s)}}),u(Jn,function(n){return{type:"ObjectExpression",properties:n.properties.map(s)}}),u(Xn,function(n){var e,t=C(n.key)?{type:"Identifier",name:n.key}:{type:"Literal",value:n.key};return n instanceof Zn?e="init":n instanceof Qn?e="get":n instanceof Kn&&(e="set"),{type:"Property",kind:e,key:t,value:s(n.value)}}),u(ne,function(n){var e=n.definition();return{type:"Identifier",name:e?e.mangled_name||e.name:n.name}}),u(me,function(n){var e=n.value;return{type:"Literal",value:e,raw:e.toString(),regex:{pattern:e.source,flags:e.toString().match(/[gimuy]*$/)[0]}}}),u(de,function(n){var e=n.value;return"number"==typeof e&&(e<0||0===e&&1/e<0)?{type:"UnaryExpression",operator:"-",prefix:!0,argument:{type:"Literal",value:-e,raw:n.start.raw}}:{type:"Literal",value:e,raw:n.start.raw}}),u(_e,function(n){return{type:"Identifier",name:String(n.value)}}),Ee.DEFMETHOD("to_mozilla_ast",de.prototype.to_mozilla_ast),ge.DEFMETHOD("to_mozilla_ast",de.prototype.to_mozilla_ast),Ae.DEFMETHOD("to_mozilla_ast",function(){return null}),K.DEFMETHOD("to_mozilla_ast",Q.prototype.to_mozilla_ast),dn.DEFMETHOD("to_mozilla_ast",vn.prototype.to_mozilla_ast);var p=null;W.from_mozilla_ast=function(n){var e=p;p=[];var t=o(n);return p=e,t}}(),n.Compressor=I,n.DefaultsError=u,n.Dictionary=_,n.JS_Parse_Error=O,n.MAP=V,n.OutputStream=R,n.SourceMap=P,n.TreeTransformer=N,n.TreeWalker=A,n.base54=Ve,n.defaults=s,n.mangle_properties=L,n.merge=c,n.parse=H,n.push_uniq=l,n.string_template=p,n.tokenizer=z,n.is_identifier=C,n.SymbolDef=j,"undefined"!="boolean"&&(false)&&(n.EXPECT_DIRECTIVE=Ye),e.UglifyJS=n}({},function(){return this}());
	
	/*** EXPORTS FROM exports-loader ***/
	module.exports = UglifyJS;

/***/ },
/* 466 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,n){"use strict";function t(e){for(var n=Object.create(null),t=0;t<e.length;++t)n[e[t]]=!0;return n}function r(e){return e.split("")}function i(e,n){return n.indexOf(e)>=0}function o(e,n){for(var t=0,r=n.length;t<r;++t)if(e(n[t]))return n[t]}function u(e,n){if(n<=0)return"";if(1==n)return e;var t=u(e,n>>1);return t+=t,1&n&&(t+=e),t}function a(e,n){Error.call(this,e),this.msg=e,this.defs=n}function s(e,n,t){e===!0&&(e={});var r=e||{};if(t)for(var i in r)_(r,i)&&!_(n,i)&&a.croak("`"+i+"` is not a supported option",n);for(var i in n)_(n,i)&&(r[i]=e&&_(e,i)?e[i]:n[i]);return r}function c(e,n){var t=0;for(var r in n)_(n,r)&&(e[r]=n[r],t++);return t}function f(){}function l(e,n){e.indexOf(n)<0&&e.push(n)}function p(e,n){return e.replace(/\{(.+?)\}/g,function(e,t){return n[t]})}function d(e,n){for(var t=e.length;--t>=0;)e[t]===n&&e.splice(t,1)}function h(e,n){function t(e,t){for(var r=[],i=0,o=0,u=0;i<e.length&&o<t.length;)n(e[i],t[o])<=0?r[u++]=e[i++]:r[u++]=t[o++];return i<e.length&&r.push.apply(r,e.slice(i)),o<t.length&&r.push.apply(r,t.slice(o)),r}function r(e){if(e.length<=1)return e;var n=Math.floor(e.length/2),i=e.slice(0,n),o=e.slice(n);return i=r(i),o=r(o),t(i,o)}return e.length<2?e.slice():r(e)}function D(e){function n(e){return JSON.stringify(e).replace(/[\u2028\u2029]/g,function(e){switch(e){case"\u2028":return"\\u2028";case"\u2029":return"\\u2029"}return e})}function t(e){if(1==e.length)return r+="return str === "+n(e[0])+";";r+="switch(str){";for(var t=0;t<e.length;++t)r+="case "+n(e[t])+":";r+="return true}return false;"}e instanceof Array||(e=e.split(" "));var r="",i=[];e:for(var o=0;o<e.length;++o){for(var u=0;u<i.length;++u)if(i[u][0].length==e[o].length){i[u].push(e[o]);continue e}i.push([e[o]])}if(i.length>3){i.sort(function(e,n){return n.length-e.length}),r+="switch(str.length){";for(var o=0;o<i.length;++o){var a=i[o];r+="case "+a[0].length+":",t(a)}r+="}"}else t(e);return new Function("str",r)}function m(e,n){for(var t=e.length;--t>=0;)if(!n(e[t]))return!1;return!0}function v(){this._values=Object.create(null),this._size=0}function _(e,n){return Object.prototype.hasOwnProperty.call(e,n)}function g(n,t,r,i){arguments.length<4&&(i=X),t=t?t.split(/\s+/):[];var o=t;i&&i.PROPS&&(t=t.concat(i.PROPS));for(var u="return function AST_"+n+"(props){ if (props) { ",a=t.length;--a>=0;)u+="this."+t[a]+" = props."+t[a]+";";var s=i&&new i;(s&&s.initialize||r&&r.initialize)&&(u+="this.initialize();"),u+="}}";var c=new Function(u)();if(s&&(c.prototype=s,c.BASE=i),i&&i.SUBCLASSES.push(c),c.prototype.CTOR=c,c.PROPS=t||null,c.SELF_PROPS=o,c.SUBCLASSES=[],n&&(c.prototype.TYPE=c.TYPE=n),r)for(a in r)_(r,a)&&(/^\$/.test(a)?c[a.substr(1)]=r[a]:c.prototype[a]=r[a]);return c.DEFMETHOD=function(e,n){this.prototype[e]=n},e["AST_"+n]=c,c}function y(e,n){e.body instanceof X?e.body._walk(n):e.body.forEach(function(e){e._walk(n)})}function b(e){this.visit=e,this.stack=[],this.directives=Object.create(null)}function E(e,n){var t=e.charAt(n);return t>="�"&&t<="�"?t+e.charAt(n+1):t}function A(e,n){return C(e.charAt(n))?65536+(e.charCodeAt(n)-55296<<10)+e.charCodeAt(n+1)-56320:e.charCodeAt(n)}function F(e){for(var n=0,t=0;t<e.length;t++)e.charCodeAt(t)>=55296&&e.charCodeAt(t)<=56319&&e.charCodeAt(t+1)>=56320&&e.charCodeAt(t+1)<=57343&&(n++,t++);return e.length-n}function w(e){return e>65535?(e-=65536,String.fromCharCode((e>>10)+55296)+String.fromCharCode(e%1024+56320)):String.fromCharCode(e)}function C(e){return"string"==typeof e&&(e=e.charCodeAt(0)),e>=55296&&e<=56319}function k(e){return"string"==typeof e&&(e=e.charCodeAt(0)),e>=56320&&e<=57343}function x(e){return e>=48&&e<=57}function B(e){return"string"==typeof e&&!nt(e)}function S(e){var n=e.charCodeAt(0);return mt.ID_Start.test(e)||36==n||95==n}function T(e){var n=e.charCodeAt(0);return mt.ID_Continue.test(e)||36==n||95==n||8204==n||8205==n}function $(e){return/^[a-z_$][a-z0-9_$]*$/i.test(e)}function O(e){if(ot.test(e))return parseInt(e.substr(2),16);if(ut.test(e))return parseInt(e.substr(1),8);if(at.test(e))return parseInt(e.substr(2),8);if(st.test(e))return parseInt(e.substr(2),2);if(ct.test(e))return parseFloat(e);var n=parseFloat(e);return n==e?n:void 0}function q(e,n,t,r,i){this.message=e,this.filename=n,this.line=t,this.col=r,this.pos=i,this.stack=(new Error).stack}function M(e,n,t,r,i){throw new q(e,n,t,r,i)}function z(e,n,t){return e.type==n&&(null==t||e.value==t)}function N(e,n,t,r){function i(){return E(z.text,z.pos)}function o(e,n){var t=E(z.text,z.pos++);if(e&&!t)throw vt;return pt(t)?(z.newline_before=z.newline_before||!n,++z.line,z.col=0,n||"\r"!=t||"\n"!=i()||(++z.pos,t="\n")):(C(t)&&(++z.pos,++z.col),++z.col),t}function u(e){for(;e-- >0;)o()}function a(e){return z.text.substr(z.pos,e.length)==e}function s(){for(var e=z.text,n=z.pos,t=z.text.length;n<t;++n){var r=e[n];if(pt(r))return n}return-1}function c(e,n){var t=z.text.indexOf(e,z.pos);if(n&&t==-1)throw vt;return t}function f(){z.tokline=z.line,z.tokcol=z.col,z.tokpos=z.pos}function l(t,r,i){z.regex_allowed="operator"==t&&!gt(r)||"keyword"==t&&tt(r)||"punc"==t&&ht(r),N="punc"==t&&"."==r;var o={type:t,value:r,line:z.tokline,col:z.tokcol,pos:z.tokpos,endline:z.line,endcol:z.col,endpos:z.pos,nlb:z.newline_before,file:n};if(/^(?:num|string|regexp)$/i.test(t)&&(o.raw=e.substring(o.pos,o.endpos)),!i){o.comments_before=z.comments_before,z.comments_before=[];for(var u=0,a=o.comments_before.length;u<a;u++)o.nlb=o.nlb||o.comments_before[u].nlb}return z.newline_before=!1,new Y(o)}function p(){for(;lt(i());)o()}function d(e){for(var n,t="",r=0;(n=i())&&e(n,r++);)t+=o();return t}function h(e){M(e,n,z.tokline,z.tokcol,z.tokpos)}function D(e){var n=!1,t=!1,r=!1,i="."==e,o=d(function(o,u){var a=o.charCodeAt(0);switch(a){case 98:case 66:return r=!0;case 111:case 79:case 120:case 88:return!r&&(r=!0);case 101:case 69:return!!r||!n&&(n=t=!0);case 45:return t||0==u&&!e;case 43:return t;case t=!1,46:return!(i||r||n)&&(i=!0)}return it.test(o)});e&&(o=e+o),ut.test(o)&&q.has_directive("use strict")&&h("SyntaxError: Legacy octal literals are not allowed in strict mode");var u=O(o);return isNaN(u)?void h("SyntaxError: Invalid syntax: "+o):l("num",u)}function m(e){var n=o(!0,e);switch(n.charCodeAt(0)){case 110:return"\n";case 114:return"\r";case 116:return"\t";case 98:return"\b";case 118:return"\v";case 102:return"\f";case 120:return String.fromCharCode(_(2));case 117:if("{"==i()){for(o(!0),"}"===i()&&h("SyntaxError: Expecting hex-character between {}");"0"==i();)o(!0);var t,r=c("}",!0)-z.pos;return(r>6||(t=_(r))>1114111)&&h("SyntaxError: Unicode reference out of bounce"),o(!0),w(t)}return String.fromCharCode(_(4));case 10:return"";case 13:if("\n"==i())return o(!0,e),""}return n>="0"&&n<="7"?v(n):n}function v(e){var n=i();return n>="0"&&n<="7"&&(e+=o(!0),e[0]<="3"&&(n=i())>="0"&&n<="7"&&(e+=o(!0))),"0"===e?"\0":(e.length>0&&q.has_directive("use strict")&&h("SyntaxError: Legacy octal escape sequences are not allowed in strict mode"),String.fromCharCode(parseInt(e,8)))}function _(e){for(var n=0;e>0;--e){var t=parseInt(o(!0),16);isNaN(t)&&h("SyntaxError: Invalid hex-character pattern in string"),n=n<<4|t}return n}function g(e){var n,t=z.regex_allowed,r=s();return r==-1?(n=z.text.substr(z.pos),z.pos=z.text.length):(n=z.text.substring(z.pos,r),z.pos=r),z.col=z.tokcol+(z.pos-z.tokpos),z.comments_before.push(l(e,n,!0)),z.regex_allowed=t,q}function y(e){function n(e){if(!i())return e;var t=e+i();return ft(t)?(o(),n(t)):e}return l("operator",n(e||o()))}function b(){switch(o(),i()){case"/":return o(),g("comment1");case"*":return o(),I()}return z.regex_allowed?P(""):y("/")}function A(){return o(),">"===i()?(o(),l("arrow","=>")):y("=")}function k(){return o(),x(i().charCodeAt(0))?D("."):"."===i()?(o(),o(),l("expand","...")):l("punc",".")}function B(){var e=U();return N?l("name",e):et(e)?l("atom",e):Qn(e)?ft(e)?l("operator",e):l("keyword",e):l("name",e)}function $(e,n){return function(t){try{return n(t)}catch(n){if(n!==vt)throw n;h(e)}}}function q(e){if(null!=e)return P(e);for(;;){if(p(),f(),t){if(a("<!--")){u(4),g("comment3");continue}if(a("-->")&&z.newline_before){u(3),g("comment4");continue}}var n=i();if(!n)return l("eof");var s=n.charCodeAt(0);switch(s){case 34:case 39:return H(n);case 46:return k();case 47:var c=b();if(c===q)continue;return c;case 61:return A();case 96:return j(!0);case 123:z.brace_counter++;break;case 125:if(z.brace_counter--,z.template_braces.length>0&&z.template_braces[z.template_braces.length-1]===z.brace_counter)return j(!1)}if(x(s))return D();if(Dt(n))return l("punc",o());if(rt(n))return y();if(92==s||S(n))return B();if(!r||0!=z.pos||!a("#!"))break;u(2),g("comment5")}h("SyntaxError: Unexpected character '"+n+"'")}var z={text:e,filename:n,pos:0,tokpos:0,line:1,tokline:0,col:0,tokcol:0,newline_before:!1,regex_allowed:!1,brace_counter:0,template_braces:[],comments_before:[],directives:{},directive_stack:[]},N=!1,H=$("SyntaxError: Unterminated string constant",function(e){for(var n=o(),t="";;){var r=o(!0,!0);if("\\"==r)r=m(!0);else if(pt(r))h("SyntaxError: Unterminated string constant");else if(r==n)break;t+=r}var i=l("string",t);return i.quote=e,i}),j=$("SyntaxError: Unterminated template",function(e){e&&z.template_braces.push(z.brace_counter);var n,t,r="",u="";for(o();"`"!==(n=o(!0));){if("$"===n&&"{"===i())return o(),z.brace_counter++,t=l(e?"template_head":"template_substitution",r),t.begin=e,t.raw=u,t.end=!1,t;if(u+=n,"\\"===n){var a=z.pos;n=m(),u+=z.text.substr(a,z.pos-a)}r+=n}return z.template_braces.pop(),t=l(e?"template_head":"template_substitution",r),t.begin=e,t.raw=u,t.end=!0,t}),I=$("SyntaxError: Unterminated multiline comment",function(){var e=z.regex_allowed,n=c("*/",!0),t=z.text.substring(z.pos,n).replace(/\r\n|\r|\u2028|\u2029/g,"\n");return u(F(t)+2),z.comments_before.push(l("comment2",t,!0)),z.newline_before=z.newline_before||t.indexOf("\n")>=0,z.regex_allowed=e,q}),U=$("SyntaxError: Unterminated identifier name",function(){var e,n="",t=!1,r=function(){return t=!0,o(),"u"!==i()&&h("SyntaxError: Expecting UnicodeEscapeSequence -- uXXXX or u{XXXX}"),m()};if("\\"===(n=i()))n=r(),S(n)||h("SyntaxError: First identifier char is an invalid identifier char");else{if(!S(n))return"";o()}for(;null!=(e=i());){if("\\"===(e=i()))e=r(),T(e)||h("SyntaxError: Invalid escaped identifier char");else{if(!T(e))break;o()}n+=e}return nt(n)&&t&&h("SyntaxError: Escaped characters are not allowed in keywords"),n}),P=$("SyntaxError: Unterminated regular expression",function(e){for(var n,t=!1,r=!1;n=o(!0);)if(pt(n))h("SyntaxError: Unexpected line terminator");else if(t)e+="\\"+n,t=!1;else if("["==n)r=!0,e+=n;else if("]"==n&&r)r=!1,e+=n;else{if("/"==n&&!r)break;"\\"==n?t=!0:e+=n}var i=U();try{return l("regexp",new RegExp(e,i))}catch(e){h("SyntaxError: "+e.message)}});return q.next=o,q.peek=i,q.context=function(e){return e&&(z=e),z},q.add_directive=function(e){z.directive_stack[z.directive_stack.length-1].push(e),void 0===z.directives[e]?z.directives[e]=1:z.directives[e]++},q.push_directives_stack=function(){z.directive_stack.push([])},q.pop_directives_stack=function(){for(var e=z.directive_stack[z.directive_stack.length-1],n=0;n<e.length;n++)z.directives[e[n]]--;z.directive_stack.pop()},q.has_directive=function(e){return void 0!==z.directives[e]&&z.directives[e]>0},q}function H(e,n){function t(e,n){return z(qe.token,e,n)}function r(){return qe.peeked||(qe.peeked=qe.input())}function i(){return qe.prev=qe.token,qe.peeked?(qe.token=qe.peeked,qe.peeked=null):qe.token=qe.input(),qe.in_directives=qe.in_directives&&("string"==qe.token.type||t("punc",";")),qe.token}function u(){return qe.prev}function a(e,n,t,r){var i=qe.input.context();M(e,i.filename,null!=n?n:i.tokline,null!=t?t:i.tokcol,null!=r?r:i.tokpos)}function c(e,n){a(n,e.line,e.col)}function f(e){null==e&&(e=qe.token),c(e,"SyntaxError: Unexpected token: "+e.type+" ("+e.value+")")}function l(e,n){return t(e,n)?i():void c(qe.token,"SyntaxError: Unexpected token "+qe.token.type+" «"+qe.token.value+"», expected "+e+" «"+n+"»")}function p(e){return l("punc",e)}function d(){return!n.strict&&(qe.token.nlb||t("eof")||t("punc","}"))}function h(){return qe.in_generator===qe.in_function}function D(e){t("punc",";")?i():e||d()||f()}function m(){p("(");var e=it(!0);return p(")"),e}function v(e){return function(){var n=qe.token,t=e.apply(null,arguments),r=u();return t.start=n,t.end=r,t}}function _(){(t("operator","/")||t("operator","/="))&&(qe.peeked=null,qe.token=qe.input(qe.token.value.substr(1)))}function g(){var e=pe(qn);"yield"===e.name&&h()&&c(qe.prev,"SyntaxError: Yield cannot be used as label inside generators"),o(function(n){return n.name==e.name},qe.labels)&&a("SyntaxError: Label "+e.name+" defined twice"),p(":"),qe.labels.push(e);var n=en();return qe.labels.pop(),n instanceof ie||e.references.forEach(function(n){n instanceof Te&&(n=n.label.start,a("SyntaxError: Continue label `"+e.name+"` refers to non-IterationStatement.",n.line,n.col,n.pos))}),new re({body:n,label:e})}function y(e){return new K({body:(e=it(!0),D(),e)})}function b(e){var n,t=null;d()||(t=pe(zn,!0)),null!=t?(n=o(function(e){return e.name==t.name},qe.labels),n||a("SyntaxError: Undefined label "+t.name),t.thedef=n):0==qe.in_loop&&a("SyntaxError: "+e.TYPE+" not inside a loop or switch"),D();var r=new e({label:t});return n&&n.references.push(r),r}function E(){p("(");var e=null;if(!t("punc",";")){e=t("keyword","var")?(i(),gn(!0)):t("keyword","let")?(i(),yn(!0)):t("keyword","const")?(i(),En(!0)):it(!0,!0);var n=t("operator","in"),r=t("name","of");if(n||r)return e instanceof Ie&&e.definitions.length>1&&a("SyntaxError: Only one variable declaration allowed in for..in loop"),i(),n?w(e):F(e)}return A(e)}function A(e){p(";");var n=t("punc",";")?null:it(!0);p(";");var r=t("punc",")")?null:it(!0);return p(")"),new se({init:e,condition:n,step:r,body:Be(en)})}function F(e){var n=e instanceof Ie?e.definitions[0].name:null,t=it(!0);return p(")"),new fe({init:e,name:n,object:t,body:Be(en)})}function w(e){var n=e instanceof Ie?e.definitions[0].name:null,t=it(!0);return p(")"),new ce({init:e,name:n,object:t,body:Be(en)})}function C(e,n){var t={},r=!1,i=!1,o=!1,u=!!n,a={add_parameter:function(n){if(void 0!==t["$"+n.value])r===!1&&(r=n),a.check_strict();else if(t["$"+n.value]=!0,e)switch(n.value){case"arguments":case"eval":case"yield":u&&c(n,"SyntaxError: Unexpected "+n.value+" identifier as parameter inside strict mode");break;default:nt(n.value)&&f()}},mark_default_assignment:function(e){i===!1&&(i=e)},mark_spread:function(e){o===!1&&(o=e)},mark_strict_mode:function(){u=!0},is_strict:function(){return i!==!1||o!==!1||u},check_strict:function(){a.is_strict()&&r!==!1&&c(r,"SyntaxError: Parameter "+r.value+" was used already")}};return a}function k(){var e=(qe.token,!0),n=[],r=C(!0,qe.input.has_directive("use strict"));for(p("(");!t("punc",")");){e?e=!1:p(",");var o=x(r);if(n.push(o),o instanceof he)break}return i(),n}function x(e,n){var r,o=!1;return void 0===e&&(e=C(!0,qe.input.has_directive("use strict"))),t("expand","...")&&(o=qe.token,e.mark_spread(qe.token),i()),r=B(e,n),t("operator","=")&&o===!1&&(e.mark_default_assignment(qe.token),i(),r.default=it(!1)),o!==!1&&(t("punc",")")||f(),r=new he({start:o,expression:r,end:o})),e.check_strict(),r}function B(e,n){var o,s=[],c=!0,l=!1,d=qe.token;if(void 0===e&&(e=C(!1,qe.input.has_directive("use strict"))),n=void 0===n?wn:n,t("punc","[")){for(i();!t("punc","]");){if(c?c=!1:p(","),t("expand","...")&&(l=!0,o=qe.token,e.mark_spread(qe.token),i()),t("punc"))switch(qe.token.value){case",":s.push(new Yn({start:qe.token,end:qe.token}));continue;case"]":break;case"[":case"{":s.push(B(e,n));break;default:f()}else t("name")?(e.add_parameter(qe.token),s.push(new n({start:qe.token,name:qe.token.value,end:qe.token})),i()):a("SyntaxError: Invalid function parameter");t("operator","=")&&l===!1&&(e.mark_default_assignment(qe.token),i(),s[s.length-1].default=it(!1)),l&&(t("punc","]")||f(),s[s.length-1]=new he({start:o,expression:s[s.length-1],end:o}))}return p("]"),e.check_strict(),new be({start:d,names:s,is_array:!0,end:u()})}if(t("punc","{")){for(i();!t("punc","}");){if(c?c=!1:p(","),t("name")&&(z(r(),"punc")||z(r(),"operator"))&&[",","}","="].indexOf(r().value)!==-1)e.add_parameter(qe.token),s.push(new n({start:qe.token,name:qe.token.value,end:qe.token})),i();else{if(t("punc","}"))continue;var h=qe.token,D=Q();null===D?f(u()):"name"!==u().type||t("punc",":")?(p(":"),s.push(new fn({start:h,quote:h.quote,end:u(),key:D,value:B(e,n)}))):s.push(new wn({start:u(),name:h,end:u()}))}t("operator","=")&&(e.mark_default_assignment(qe.token),i(),s[s.length-1].default=it(!1))}return p("}"),e.check_strict(),new be({start:d,names:s,is_array:!1,end:u()})}return t("name")?(e.add_parameter(qe.token),i(),new n({start:u(),name:u().value,end:u()})):void a("SyntaxError: Invalid function parameter")}function S(){var e=qe.token;p("(");for(var n=!0,r=[];!t("punc",")");)if(n?n=!1:p(","),t("expand","...")){var o=qe.token;i(),r.push(new he({start:u(),expression:B(void 0,wn),end:qe.token})),t("punc",")")||f(o)}else r.push(it(!1));var a=qe.token;return i(),new De({start:e,end:a,expressions:r})}function T(e,n){var t=qe.in_loop,r=qe.labels,i=qe.in_generator;if(++qe.in_function,n&&(qe.in_generator=qe.in_function),e&&(qe.in_directives=!0),qe.in_loop=0,qe.labels=[],e){qe.input.push_directives_stack();var o=H();qe.input.pop_directives_stack()}else var o=it(!1);return--qe.in_function,qe.in_loop=t,qe.labels=r,qe.in_generator=i,o}function O(){h()||a("SyntaxError: Unexpected yield expression outside generator function",qe.prev.line,qe.prev.col,qe.prev.pos);var e=!1,n=!0;return d()||t("punc")&&dt(qe.token.value)?n=!1:t("operator","*")&&(e=!0,i()),new Kn({is_star:e,expression:n?it():null})}function q(){var e=m(),n=en(),r=null;return t("keyword","else")&&(i(),r=en()),new $e({condition:e,body:n,alternative:r})}function H(){p("{");for(var e=[];!t("punc","}");)t("eof")&&f(),e.push(en());return i(),e}function j(){p("{");for(var e,n=[],r=null,o=null;!t("punc","}");)t("eof")&&f(),t("keyword","case")?(o&&(o.end=u()),r=[],o=new ze({start:(e=qe.token,i(),e),expression:it(!0),body:r}),n.push(o),p(":")):t("keyword","default")?(o&&(o.end=u()),r=[],o=new Me({start:(e=qe.token,i(),p(":"),e),body:r}),n.push(o)):(r||f(),r.push(en()));return o&&(o.end=u()),i(),n}function I(){var e=H(),n=null,r=null;if(t("keyword","catch")){var o=qe.token;i(),p("(");var s=x(void 0,Tn);p(")"),n=new He({start:o,argname:s,body:H(),end:u()})}if(t("keyword","finally")){var o=qe.token;i(),r=new je({start:o,body:H(),end:u()})}return n||r||a("SyntaxError: Missing catch/finally blocks"),new Ne({body:e,bcatch:n,bfinally:r})}function U(e,n){for(var r,o=[];;){var a="var"===n?bn:"const"===n?An:"let"===n?Fn:null;if(r=new Ye(t("punc","{")||t("punc","[")?{start:qe.token,name:B(void 0,a),value:t("operator","=")?(l("operator","="),it(!1,e)):null,end:u()}:{start:qe.token,name:pe(a),value:t("operator","=")?(i(),it(!1,e)):null,end:u()}),o.push(r),!t("punc",","))break;i()}return o}function P(){var e,n=qe.token;switch(n.type){case"name":case"keyword":e=oe(Mn);break;case"num":e=new Un({start:n,end:n,value:n.value});break;case"string":e=new In({start:n,end:n,value:n.value,quote:n.quote});break;case"regexp":e=new Pn({start:n,end:n,value:n.value});break;case"atom":switch(n.value){case"false":e=new Jn({start:n,end:n});break;case"true":e=new Zn({start:n,end:n});break;case"null":e=new Ln({start:n,end:n})}break;case"operator":$(n.value)||a("SyntaxError: Invalid getter/setter name: "+n.value,n.line,n.col,n.pos),e=oe(Mn)}return i(),e}function R(){var e=[],n=qe.token;for(e.push(new Fe({start:qe.token,raw:qe.token.raw,value:qe.token.value,end:qe.token}));qe.token.end===!1;)i(),e.push(it()),z("template_substitution")||f(),e.push(new Fe({start:qe.token,raw:qe.token.raw,value:qe.token.value,end:qe.token}));return i(),new Ae({start:n,segments:e,end:qe.token})}function L(e,n,r){for(var o=!0,u=[];!t("punc",e)&&(o?o=!1:p(","),!n||!t("punc",e));)t("punc",",")&&r?u.push(new Yn({start:qe.token,end:qe.token})):t("expand","...")?(i(),u.push(new he({start:qe.token,expression:it(),end:qe.token}))):u.push(it(!1));return i(),u}function V(e){var n,r,o,a,s=[];for(qe.input.push_directives_stack(),qe.input.add_directive("use strict"),"name"==qe.token.type&&"extends"!=qe.token.value&&(o=pe(e===Dn?Bn:Sn)),e!==Dn||o||f(),"extends"==qe.token.value&&(i(),a=it(!0)),p("{"),t("punc",";")&&i();!t("punc","}");)n=qe.token,r=W(Q(),n,!0),r||f(),s.push(r),t("punc",";")&&i();return qe.input.pop_directives_stack(),i(),new e({start:n,name:o,extends:a,properties:s,end:u()})}function W(e,n,r){var i=function(e,n){return"string"==typeof e||"number"==typeof e?new kn({start:n,name:e,end:u()}):(null===e&&f(),e)},o=!1,a=!1,s=n;if(r&&"static"===e&&!t("punc","(")&&(o=!0,s=qe.token,e=Q()),null===e&&(a=!0,s=qe.token,e=Q(),null===e&&f()),t("punc","(")){e=i(e,n);var c=new dn({start:n,static:o,is_generator:a,key:e,quote:e instanceof kn?s.quote:void 0,value:hn(ve,a),end:u()});return c}if(s=qe.token,"get"==e){if(!t("punc")||t("punc","["))return e=i(Q(),n),new pn({start:n,static:o,key:e,quote:e instanceof kn?s.quote:void 0,value:hn(ve),end:u()})}else if("set"==e&&(!t("punc")||t("punc","[")))return e=i(Q(),n),new ln({start:n,static:o,key:e,quote:e instanceof kn?s.quote:void 0,value:hn(ve),end:u()})}function Y(){var e,n,r=u();if(t("name")&&(e=pe($n)),t("punc",",")&&i(),t("punc","{")){for(i(),n=[];!t("punc","}");)n.push(X()),t("punc",",")&&i();i()}(n||e)&&l("name","from");var o=qe.token;return"string"!==o.type&&f(),i(),new Ve({start:r,imported_name:e,imported_names:n,module_name:new In({start:o,value:o.value,quote:o.quote,end:o}),end:qe.token})}function X(){var e,n,t=qe.token;return"as"===r().value&&"name"===r().type&&(e=pe(On),i()),n=pe($n),void 0===e&&(e=new On({name:n.name,start:n.start,end:n.end})),new Le({start:t,foreign_name:e,name:n,end:u()})}function G(){var e,n,r,o=qe.token;t("keyword","default")&&(e=!0,i());var a=t("keyword","var")||t("keyword","let")||t("keyword","const")||t("keyword","class")||t("keyword","function");return a?r=en():(n=it(),D()),new We({start:o,is_default:e,exported_value:n,exported_definition:r,end:u()})}function Q(){var e=qe.token;switch(i(),e.type){case"punc":if("["===e.value){var n=it(!1);return p("]"),n}f(e);case"operator":if("*"===e.value)return null;["delete","in","instanceof","new","typeof","void"].indexOf(e.value)===-1&&f(e);case"name":"yield"===e.value&&qe.input.has_directive("use strict")&&!h()&&c(e,"SyntaxError: Unexpected yield identifier inside strict mode");case"string":case"num":case"keyword":case"atom":return e.value;default:f(e)}}function te(){var e=qe.token;switch(i(),e.type){case"name":case"operator":case"keyword":case"atom":return e.value;default:f()}}function oe(e){var n=qe.token.value;return new("this"==n?Nn:"super"==n?Hn:e)({name:String(n),start:qe.token,end:qe.token})}function pe(e,n){if(!t("name"))return n||a("SyntaxError: Name expected"),null;t("name","yield")&&qe.input.has_directive("use strict")&&c(qe.prev,"SyntaxError: Unexpected yield identifier inside strict mode");var r=oe(e);return i(),r}function me(e,n,t){return"++"!=n&&"--"!=n||Ce(t)||a("SyntaxError: Invalid use of "+n+" operator"),new e({operator:n,expression:t})}function we(e){return et(Qn(!0),0,e)}function Ce(e){return!n.strict||!(e instanceof Nn)&&(!(e instanceof Hn)&&(e instanceof Ze||e instanceof vn))}function Be(e){++qe.in_loop;var n=e();return--qe.in_loop,n}n=s(n,{strict:!1,filename:null,toplevel:null,expression:!1,html5_comments:!0,bare_returns:!1,shebang:!0});var qe={input:"string"==typeof e?N(e,n.filename,n.html5_comments,n.shebang):e,token:null,prev:null,peeked:null,in_function:0,in_generator:-1,in_directives:!0,in_loop:0,labels:[]};qe.token=i();var en=v(function(){var e;switch(_(),qe.token.type){case"string":var o=!1;qe.in_directives===!0&&((z(r(),"punc",";")||r().nlb)&&qe.token.raw.indexOf("\\")===-1?qe.input.add_directive(qe.token.value):qe.in_directives=!1);var o=qe.in_directives,s=y();return o?new Z({start:s.body.start,end:s.body.end,quote:s.body.quote,value:s.body.value}):s;case"template_head":case"num":case"regexp":case"operator":case"atom":return y();case"name":return z(r(),"punc",":")?g():y();case"punc":switch(qe.token.value){case"{":return new ee({start:qe.token,body:H(),end:u()});case"[":case"(":return y();case";":return qe.in_directives=!1,i(),new ne;default:f()}case"keyword":switch(e=qe.token.value,i(),e){case"break":return b(Se);case"continue":return b(Te);case"debugger":return D(),new J;case"do":return new ue({body:Be(en),condition:(l("keyword","while"),e=m(),D(!0),e)});case"while":return new ae({condition:m(),body:Be(en)});case"for":return E();case"class":return V(Dn);case"function":return hn(ye);case"if":return q();case"return":return 0!=qe.in_function||n.bare_returns||a("SyntaxError: 'return' outside of function"),new ke({value:t("punc",";")?(i(),null):d()?null:(e=it(!0),D(),e)});case"switch":return new Oe({expression:m(),body:Be(j)});case"throw":return qe.token.nlb&&a("SyntaxError: Illegal newline after 'throw'"),new xe({value:(e=it(!0),D(),e)});case"try":return I();case"var":return e=gn(),D(),e;case"let":return e=yn(),D(),e;case"const":return e=En(),D(),e;case"with":return qe.input.has_directive("use strict")&&a("SyntaxError: Strict mode may not include a with statement"),new le({expression:m(),body:en()});case"import":return e=Y(),D(),e;case"export":return G();default:f()}}}),cn=function(e){qe.token.nlb&&a("SyntaxError: Unexpected newline before arrow (=>)"),l("arrow","=>");var n;n="number"==typeof e.length?e:e.as_params(a);var r=T(t("punc","{")?!0:!1);return new ge({start:e.start,end:r.end,argnames:n,body:r})},hn=function(e,n){var r=(qe.token,e===ye),o=t("operator","*");o&&i();var u=t("name")?pe(r?Cn:xn):null;r&&!u&&f();var a=k(),s=T(!0,o||n);return new e({start:a.start,end:s.end,is_generator:o,name:u,argnames:a,body:s})},gn=function(e){return new Ue({start:u(),definitions:U(e,"var"),end:u()})},yn=function(e){return new Pe({start:u(),definitions:U(e,"let"),end:u()})},En=function(){return new Re({start:u(),definitions:U(!1,"const"),end:u()})},jn=function(e){var n=qe.token;if(l("operator","new"),t("punc","."))return i(),l("name","target"),Xn(new _n({start:n,end:u()}),e);var r,o=Rn(!1);return t("punc","(")?(i(),r=L(")")):r=[],Xn(new Ge({start:n,expression:o,args:r,end:u()}),e)},Rn=function(e){if(t("operator","new"))return jn(e);var n=qe.token;if(t("punc")){switch(n.value){case"(":var r=S();return r.start=n,r.end=qe.token,t("arrow","=>")?cn(r):Xn(r.as_expr(a),e);case"[":return Xn(Vn(),e);case"{":return Xn(Wn(),e)}f()}if(t("keyword","function")){i();var o=hn(_e);return o.start=n,o.end=u(),Xn(o,e)}if(t("keyword","class")){i();var s=V(mn);return s.start=n,s.end=u(),Xn(s,e)}return t("template_head")?Xn(R(),e):Et[qe.token.type]?Xn(P(),e):void f()},Vn=v(function(){return p("["),new an({elements:L("]",!n.strict,!0)})}),Wn=v(function(){var e=qe.token,r=!0,o=[];for(p("{");!t("punc","}")&&(r?r=!1:p(","),n.strict||!t("punc","}"));){e=qe.token;var a=e.type,s=Q();if(t("punc",":"))null===s&&f(u());else{var c=W(s,e);if(c){o.push(c);continue}}"punc"!=a||"["!=e.value?t("operator","=")?(i(),o.push(new un({start:e,left:new Mn({start:e,end:e,name:s}),operator:"=",right:it(!1),end:u()}))):t("punc",":")?(p(":"),o.push(new fn({start:e,quote:e.quote,key:s,value:it(!1),end:u()}))):o.push(new fn({start:e,key:s,value:new Mn({start:e,end:u(),name:s}),end:e})):(p(":"),o.push(new fn({start:e,key:s,value:it(!1),end:u()})))}return i(),new sn({properties:o})}),Xn=function(e,n){var r=e.start;if(t("punc","."))return i(),Xn(new Ke({start:r,expression:e,property:te(),end:u()}),n);if(t("punc","[")){i();var o=it(!0);return p("]"),Xn(new Qe({start:r,expression:e,property:o,end:u()}),n)}return n&&t("punc","(")?(i(),Xn(new Xe({start:r,expression:e,args:Gn(),end:u()}),!0)):t("template_head")?Xn(new Ee({start:r,prefix:e,template_string:R()}),n):e},Gn=v(function(){for(var e=!0,n=[];!t("punc",")");)e?e=!1:p(","),t("expand","...")?(i(),n.push(new he({start:u(),expression:it(!1)}))):n.push(it(!1));return i(),n}),Qn=function(e){var n=qe.token;if(t("operator")&&_t(n.value)){i(),_();var r=me(nn,n.value,Qn(e));return r.start=n,r.end=u(),r}for(var o=Rn(e);t("operator")&&gt(qe.token.value)&&!qe.token.nlb;)o=me(tn,qe.token.value,o),o.start=n,o.end=qe.token,i();return o},et=function(e,n,r){var o=t("operator")?qe.token.value:null;"in"==o&&r&&(o=null),"**"==o&&e instanceof nn&&e.end===qe.prev&&"--"!==e.operator&&"++"!==e.operator&&f(e.start);var u=null!=o?bt[o]:null;if(null!=u&&(u>n||"**"===o&&n===u)){i();var a=et(Qn(!0),u,r);return et(new rn({start:e.start,left:e,operator:o,right:a,end:a.end}),n,r)}return e},tt=function(e){var n=qe.token,r=we(e);if(t("operator","?")){i();var o=it(!1);return p(":"),new on({start:n,condition:r,consequent:o,alternative:it(!1,e),end:u()})}return r},rt=function(e){var n=qe.token;if("name"==n.type&&"yield"==n.value){if(h())return i(),O();qe.input.has_directive("use strict")&&c(qe.token,"SyntaxError: Unexpected yield identifier inside strict mode")}if("punc"==n.type&&"("==n.value&&")"==r().value)return i(),i(),cn([]);var o=tt(e),s=qe.token.value;if(t("operator")&&yt(s)){if(Ce(o))return i(),new un({start:n,left:o,operator:s,right:rt(e),end:u()});a("SyntaxError: Invalid assignment")}return t("arrow")?(o=new wn({name:o.name,start:o.start,end:o.end}),cn([o])):o},it=function(e,n){var o=qe.token,u=rt(n);return u instanceof Mn&&t("arrow","=>")?(u=new De({start:u.start,end:u.end,expressions:[u]}),cn(u)):e&&t("punc",",")?(i(),new Je({start:o,car:u,cdr:it(!0,n),end:r()})):u};return n.expression?it(!0):function(){var e=qe.token,r=[];for(qe.input.push_directives_stack();!t("eof");)r.push(en());qe.input.pop_directives_stack();var i=u(),o=n.toplevel;return o?(o.body=o.body.concat(r),o.end=i):o=new de({start:e,body:r,end:i}),o}()}function j(e,n){b.call(this),this.before=e,this.after=n}function I(e,n,t){this.name=t.name,this.orig=[t],this.scope=e,this.references=[],this.global=!1,this.export=!1,this.mangled_name=null,this.object_destructuring_arg=!1,this.undeclared=!1,this.constant=!1,this.index=n,this.id=I.next_id++}function U(e){function n(n,t){return n.replace(/[\ud800-\udbff][\udc00-\udfff]|[\u0000-\u001f\u007f-\uffff]/g,function(n){var r=A(n,0).toString(16);if(t&&1===r.length&&e.ecma>=6||r.length>4)return e.ecma<6?t?n:"\\u"+n.charCodeAt(0).toString(16)+"\\u"+n.charCodeAt(1).toString(16):"\\u{"+r+"}";if(r.length<=2&&!t){for(;r.length<2;)r="0"+r;return"\\x"+r}for(;r.length<4;)r="0"+r;return"\\u"+r})}function t(t,r){function i(){return"'"+t.replace(/\x27/g,"\\'")+"'"}function o(){return'"'+t.replace(/\x22/g,'\\"')+'"'}function u(){return e.ascii_only||(t=t.replace(/\\(n|r|u2028|u2029)/g,function(e,n){switch(n){case"n":return"\n";case"r":return"\r";case"u2028":return"\u2028";case"u2029":return"\u2029"}return e})),"`"+t.replace(/`/g,"\\`")+"`"}var a=0,s=0;if(t=t.replace(/[\\\b\f\n\r\v\t\x22\x27\u2028\u2029\0\ufeff]/g,function(n,r){switch(n){case'"':return++a,'"';case"'":return++s,"'";case"\\":return"\\\\";case"\n":return"\\n";case"\r":return"\\r";case"\t":return"\\t";case"\b":return"\\b";case"\f":return"\\f";case"\v":return e.screw_ie8?"\\v":"\\x0B";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";case"\ufeff":return"\\ufeff";case"\0":return/[0-7]/.test(E(t,r+1))?"\\x00":"\\0"}return n}),e.ascii_only&&(t=n(t)),"`"===r)return u();switch(e.quote_style){case 1:return i();case 2:return o();case 3:return"'"==r?i():o();default:return a>s?i():o()}}function r(n,r){var i=t(n,r);return e.inline_script&&(i=i.replace(/<\x2fscript([>\/\t\n\f\r ])/gi,"<\\/script$1"),i=i.replace(/\x3c!--/g,"\\x3c!--"),i=i.replace(/--\x3e/g,"--\\x3e")),i}function i(t){return t=t.toString(),e.ascii_identifiers&&(t=n(t,!0)),t}function o(n){return u(" ",e.indent_start+F-n*e.indent_level)}function a(){var e=O.charAt(O.length-1);return k(e)?O.charAt(O.length-2)+e:e}function c(){e.max_line_len&&w>e.max_line_len&&l("\n")}function l(n){n=String(n);var t=E(n,0);if($&&($=!1,t&&!(";}".indexOf(t)<0)||/[;]$/.test(O)||(e.semicolons||q(t)?(B+=";",w++,x++):(B+="\n",x++,C++,
	w=0,/^\s+$/.test(n)&&($=!0)),e.beautify||(S=!1))),!e.beautify&&e.preserve_line&&P[P.length-1])for(var r=P[P.length-1].start.line;C<r;)B+="\n",x++,C++,w=0,S=!1;if(S){var i=a();(T(i)&&(T(t)||"\\"==t)||/^[\+\-\/]$/.test(t)&&t==i)&&(B+=" ",w++,x++),S=!1}var o=n.split(/\r?\n/),u=o.length-1;C+=u,0==u?w+=o[u].length:w=o[u].length,x+=n.length,O=n,B+=n}function p(){$=!1,l(";")}function d(){return F+e.indent_level}function h(e){var n;return l("{"),j(),H(d(),function(){n=e()}),N(),l("}"),n}function m(e){l("(");var n=e();return l(")"),n}function v(e){l("[");var n=e();return l("]"),n}function _(){l(","),z()}function g(){l(":"),e.space_colon&&z()}function y(){return B}if(e=s(e,{indent_start:0,indent_level:4,quote_keys:!1,space_colon:!0,ascii_only:!1,ascii_identifiers:void 0,unescape_regexps:!1,inline_script:!1,width:80,max_line_len:32e3,beautify:!1,source_map:null,bracketize:!1,semicolons:!0,comments:!1,shebang:!0,preserve_line:!1,screw_ie8:!0,preamble:null,quote_style:0,keep_quoted_props:!1,shorthand:void 0,ecma:5,wrap_iife:!1},!0),"undefined"==typeof e.ascii_identifiers&&(e.ascii_identifiers=e.ascii_only),void 0===e.shorthand&&(e.shorthand=e.ecma>5),"string"==typeof e.comments&&/^\/.*\/[a-zA-Z]*$/.test(e.comments)){var b=e.comments.lastIndexOf("/");e.comments=new RegExp(e.comments.substr(1,b-1),e.comments.substr(b+1))}e.comments instanceof RegExp?e.comments=function(e){return function(n){return"comment5"==n.type||e.test(n.value)}}(e.comments):"function"==typeof e.comments?e.comments=function(e){return function(n){return"comment5"==n.type||e(this,n)}}(e.comments):"some"===e.comments?e.comments=function(e){var n=e.value,t=e.type;return"comment2"==t?/@preserve|@license|@cc_on/i.test(n):"comment5"==t}:e.comments?e.comments=function(){return!0}:e.comments=function(e){return"comment5"==e.type};var F=0,w=0,C=1,x=0,B="",S=!1,$=!1,O=null,q=D("( [ + * / - , ."),M=function(){l("*")},z=e.beautify?function(){l(" ")}:function(){S=!0},N=e.beautify?function(n){e.beautify&&l(o(n?.5:0))}:f,H=e.beautify?function(e,n){e===!0&&(e=d());var t=F;F=e;var r=n();return F=t,r}:function(e,n){return n()},j=e.beautify?function(){l("\n")}:c,I=e.beautify?function(){l(";")}:function(){$=!0},U=e.source_map?function(n,t){try{n&&e.source_map.add(n.file||"?",C,w,n.line,n.col,t||"name"!=n.type?t:n.value)}catch(e){X.warn("Couldn't figure out mapping for {file}:{line},{col} → {cline},{ccol} [{name}]",{file:n.file,line:n.line,col:n.col,cline:C,ccol:w,name:t||""})}}:f;e.preamble&&l(e.preamble.replace(/\r\n?|[\n\u2028\u2029]|\s*$/g,"\n"));var P=[];return{get:y,toString:y,indent:N,indentation:function(){return F},current_width:function(){return w-F},should_break:function(){return e.width&&this.current_width()>=e.width},newline:j,print:l,star:M,space:z,comma:_,colon:g,last:function(){return O},semicolon:I,force_semicolon:p,to_ascii:n,print_name:function(e){l(i(e))},print_string:function(e,n,t){var i=r(e,n);t===!0&&i.indexOf("\\")===-1&&(Ft.test(B)||p(),p()),l(i)},print_template_string_chars:function(e){var n=r(e,"`").replace(/\${/g,"\\${");return l(n.substr(1,n.length-2))},encode_string:r,next_indent:d,with_indent:H,with_block:h,with_parens:m,with_square:v,add_mapping:U,option:function(n){return e[n]},line:function(){return C},col:function(){return w},pos:function(){return x},push_node:function(e){P.push(e)},pop_node:function(){return P.pop()},stack:function(){return P},parent:function(e){return P[P.length-2-(e||0)]}}}function P(e,n){if(!(this instanceof P))return new P(e,n);j.call(this,this.before,this.after),this.options=s(e,{sequences:!n,properties:!n,dead_code:!n,drop_debugger:!n,unsafe:!1,unsafe_comps:!1,conditionals:!n,comparisons:!n,evaluate:!n,booleans:!n,loops:!n,unused:!n,hoist_funs:!n,keep_fargs:!0,keep_fnames:!1,hoist_vars:!1,if_return:!n,join_vars:!n,collapse_vars:!1,reduce_vars:!1,cascade:!n,side_effects:!n,pure_getters:!1,pure_funcs:null,negate_iife:!n,screw_ie8:!0,drop_console:!1,angular:!1,warnings:!0,global_defs:{},passes:1},!0);var t=this.options.sequences;this.sequences_limit=1==t?200:0|t,this.warnings_produced={}}function R(e){function n(n,i,o,u,a,s){if(r){var c=r.originalPositionFor({line:u,column:a});if(null===c.source)return;n=c.source,u=c.line,a=c.column,s=c.name||s}t.addMapping({generated:{line:i+e.dest_line_diff,column:o},original:{line:u+e.orig_line_diff,column:a},source:n,name:s})}e=s(e,{file:null,root:null,orig:null,orig_line_diff:0,dest_line_diff:0});var t=new MOZ_SourceMap.SourceMapGenerator({file:e.file,sourceRoot:e.root}),r=e.orig&&new MOZ_SourceMap.SourceMapConsumer(e.orig);return r&&Array.isArray(e.orig.sources)&&e.orig.sources.forEach(function(e){var n=r.sourceContentFor(e,!0);n&&t.setSourceContent(e,n)}),{add:n,get:function(){return t},toString:function(){return JSON.stringify(t.toJSON())}}}function L(){function e(e){l(i,e)}var t=["Symbol","Map","Promise","Proxy","Reflect","Set","WeakMap","WeakSet"],r={};t.forEach(function(e){r[e]=n[e]||new Function});var i=[];return[Object,Array,Function,Number,String,Boolean,Error,Math,Date,RegExp,r.Symbol,ArrayBuffer,DataView,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,eval,EvalError,Float32Array,Float64Array,Int8Array,Int16Array,Int32Array,isFinite,isNaN,JSON,r.Map,parseFloat,parseInt,r.Promise,r.Proxy,RangeError,ReferenceError,r.Reflect,r.Set,SyntaxError,TypeError,Uint8Array,Uint8ClampedArray,Uint16Array,Uint32Array,URIError,r.WeakMap,r.WeakSet].forEach(function(n){Object.getOwnPropertyNames(n).map(e),n.prototype&&Object.getOwnPropertyNames(n.prototype).map(e)}),i}function V(e,n){function t(e){return!(D.indexOf(e)>=0)&&(!(c.indexOf(e)>=0)&&(n.only_cache?f.props.has(e):!/^[0-9.]+$/.test(e)))}function r(e){return!(d&&e in m)&&(!(p&&!p.test(e))&&(!(c.indexOf(e)>=0)&&(f.props.has(e)||h.indexOf(e)>=0)))}function i(e,n){return n?void(m[e]=!0):(t(e)&&l(h,e),void(r(e)||l(D,e)))}function o(e){if(!r(e))return e;var n=f.props.get(e);if(!n){do n=At(++f.cname);while(!t(n));f.props.set(e,n)}return n}function u(e,n){var t={};try{!function e(r){r.walk(new b(function(r){if(r instanceof Je)return e(r.cdr),!0;if(r instanceof In)return i(r.value,n),!0;if(r instanceof on)return e(r.consequent),e(r.alternative),!0;throw t}))}(e)}catch(e){if(e!==t)throw e}}function a(e){return e.transform(new j(function(e){return e instanceof Je?e.cdr=a(e.cdr):e instanceof In?e.value=o(e.value):e instanceof on&&(e.consequent=a(e.consequent),e.alternative=a(e.alternative)),e}))}n=s(n,{reserved:null,cache:null,only_cache:!1,regex:null,ignore_quoted:!1});var c=n.reserved;null==c&&(c=L());var f=n.cache;null==f&&(f={cname:-1,props:new v});var p=n.regex,d=n.ignore_quoted,h=[],D=[],m={};return e.walk(new b(function(e){e instanceof fn?i(e.key,d&&e.quote):e instanceof cn?i(e.key.name):e instanceof Ke?i(e.property):e instanceof Qe?u(e.property,d):e instanceof dn&&i(e.name.name)})),e.transform(new j(function(e){e instanceof fn?d&&e.quote||(e.key=o(e.key)):e instanceof cn?e.key.name=o(e.key.name):e instanceof Ke?e.property=o(e.property):e instanceof Qe?d||(e.property=a(e.property)):e instanceof dn&&r(e.name.name)&&(e.name.name=o(e.name.name))}))}a.prototype=Object.create(Error.prototype),a.prototype.constructor=a,a.croak=function(e,n){throw new a(e,n)};var W=function(){function e(e,o,u){function a(){var a=o(e[s],s),l=a instanceof r;return l&&(a=a.v),a instanceof n?(a=a.v,a instanceof t?f.push.apply(f,u?a.v.slice().reverse():a.v):f.push(a)):a!==i&&(a instanceof t?c.push.apply(c,u?a.v.slice().reverse():a.v):c.push(a)),l}var s,c=[],f=[];if(e instanceof Array)if(u){for(s=e.length;--s>=0&&!a(););c.reverse(),f.reverse()}else for(s=0;s<e.length&&!a();++s);else for(s in e)if(_(e,s)&&a())break;return f.concat(c)}function n(e){this.v=e}function t(e){this.v=e}function r(e){this.v=e}e.at_top=function(e){return new n(e)},e.splice=function(e){return new t(e)},e.last=function(e){return new r(e)};var i=e.skip={};return e}();v.prototype={set:function(e,n){return this.has(e)||++this._size,this._values["$"+e]=n,this},add:function(e,n){return this.has(e)?this.get(e).push(n):this.set(e,[n]),this},get:function(e){return this._values["$"+e]},del:function(e){return this.has(e)&&(--this._size,delete this._values["$"+e]),this},has:function(e){return"$"+e in this._values},each:function(e){for(var n in this._values)e(this._values[n],n.substr(1))},size:function(){return this._size},map:function(e){var n=[];for(var t in this._values)n.push(e(this._values[t],t.substr(1)));return n},toObject:function(){return this._values}},v.fromObject=function(e){var n=new v;return n._size=c(n._values,e),n};var Y=g("Token","type value line col pos endline endcol endpos nlb comments_before file raw",{},null),X=g("Node","start end",{clone:function(){return new this.CTOR(this)},$documentation:"Base class of all AST nodes",$propdoc:{start:"[AST_Token] The first token of this node",end:"[AST_Token] The last token of this node"},_walk:function(e){return e._visit(this)},walk:function(e){return this._walk(e)}},null);X.warn_function=null,X.warn=function(e,n){X.warn_function&&X.warn_function(p(e,n))};var G=g("Statement",null,{$documentation:"Base class of all statements"}),J=g("Debugger",null,{$documentation:"Represents a debugger statement"},G),Z=g("Directive","value scope quote",{$documentation:'Represents a directive, like "use strict";',$propdoc:{value:"[string] The value of this directive as a plain string (it's not an AST_String!)",scope:"[AST_Scope/S] The scope that this directive affects",quote:"[string] the original quote character"}},G),K=g("SimpleStatement","body",{$documentation:"A statement consisting of an expression, i.e. a = 1 + 2",$propdoc:{body:"[AST_Node] an expression node (should not be instanceof AST_Statement)"},_walk:function(e){return e._visit(this,function(){this.body._walk(e)})}},G),Q=g("Block","body",{$documentation:"A body of statements (usually bracketed)",$propdoc:{body:"[AST_Statement*] an array of statements"},_walk:function(e){return e._visit(this,function(){y(this,e)})}},G),ee=g("BlockStatement",null,{$documentation:"A block statement"},Q),ne=g("EmptyStatement",null,{$documentation:"The empty statement (empty block or simply a semicolon)",_walk:function(e){return e._visit(this)}},G),te=g("StatementWithBody","body",{$documentation:"Base class for all statements that contain one nested body: `For`, `ForIn`, `Do`, `While`, `With`",$propdoc:{body:"[AST_Statement] the body; this should always be present, even if it's an AST_EmptyStatement"},_walk:function(e){return e._visit(this,function(){this.body._walk(e)})}},G),re=g("LabeledStatement","label",{$documentation:"Statement with a label",$propdoc:{label:"[AST_Label] a label definition"},_walk:function(e){return e._visit(this,function(){this.label._walk(e),this.body._walk(e)})}},te),ie=g("IterationStatement",null,{$documentation:"Internal class.  All loops inherit from it."},te),oe=g("DWLoop","condition",{$documentation:"Base class for do/while statements",$propdoc:{condition:"[AST_Node] the loop condition.  Should not be instanceof AST_Statement"}},ie),ue=g("Do",null,{$documentation:"A `do` statement",_walk:function(e){return e._visit(this,function(){this.body._walk(e),this.condition._walk(e)})}},oe),ae=g("While",null,{$documentation:"A `while` statement",_walk:function(e){return e._visit(this,function(){this.condition._walk(e),this.body._walk(e)})}},oe),se=g("For","init condition step",{$documentation:"A `for` statement",$propdoc:{init:"[AST_Node?] the `for` initialization code, or null if empty",condition:"[AST_Node?] the `for` termination clause, or null if empty",step:"[AST_Node?] the `for` update clause, or null if empty"},_walk:function(e){return e._visit(this,function(){this.init&&this.init._walk(e),this.condition&&this.condition._walk(e),this.step&&this.step._walk(e),this.body._walk(e)})}},ie),ce=g("ForIn","init name object",{$documentation:"A `for ... in` statement",$propdoc:{init:"[AST_Node] the `for/in` initialization code",name:"[AST_SymbolRef?] the loop variable, only if `init` is AST_Var",object:"[AST_Node] the object that we're looping through"},_walk:function(e){return e._visit(this,function(){this.init._walk(e),this.object._walk(e),this.body._walk(e)})}},ie),fe=g("ForOf",null,{$documentation:"A `for ... of` statement"},ce),le=g("With","expression",{$documentation:"A `with` statement",$propdoc:{expression:"[AST_Node] the `with` expression"},_walk:function(e){return e._visit(this,function(){this.expression._walk(e),this.body._walk(e)})}},te),pe=g("Scope","is_block_scope directives variables functions uses_with uses_eval parent_scope enclosed cname",{$documentation:"Base class for all statements introducing a lexical scope",$propdoc:{is_block_scope:"[boolean] identifies a block scope",directives:"[string*/S] an array of directives declared in this scope",variables:"[Object/S] a map of name -> SymbolDef for all variables/functions defined in this scope",functions:"[Object/S] like `variables`, but only lists function declarations",uses_with:"[boolean/S] tells whether this scope uses the `with` statement",uses_eval:"[boolean/S] tells whether this scope contains a direct call to the global `eval`",parent_scope:"[AST_Scope?/S] link to the parent scope",enclosed:"[SymbolDef*/S] a list of all symbol definitions that are accessed from this scope or any subscopes",cname:"[integer/S] current index for mangling variables (used internally by the mangler)"},get_defun_scope:function(){for(var e=this;e.is_block_scope&&e.parent_scope;)e=e.parent_scope;return e}},Q),de=g("Toplevel","globals",{$documentation:"The toplevel scope",$propdoc:{globals:"[Object/S] a map of name -> SymbolDef for all undeclared names"},wrap_enclose:function(e){var n=this,t=[],r=[];e.forEach(function(e){var n=e.lastIndexOf(":");t.push(e.substr(0,n)),r.push(e.substr(n+1))});var i="(function("+r.join(",")+"){ '$ORIG'; })("+t.join(",")+")";return i=H(i),i=i.transform(new j(function(e){if(e instanceof Z&&"$ORIG"==e.value)return W.splice(n.body)}))},wrap_commonjs:function(e,n){var t=this,r=[];n&&(t.figure_out_scope(),t.walk(new b(function(e){e instanceof yn&&e.definition().global&&(o(function(n){return n.name==e.name},r)||r.push(e))})));var i="(function(exports, global){ '$ORIG'; '$EXPORTS'; global['"+e+"'] = exports; }({}, (function(){return this}())))";return i=H(i),i=i.transform(new j(function(e){if(e instanceof Z)switch(e.value){case"$ORIG":return W.splice(t.body);case"$EXPORTS":var n=[];return r.forEach(function(e){n.push(new K({body:new un({left:new Qe({expression:new Mn({name:"exports"}),property:new In({value:e.name})}),operator:"=",right:new Mn(e)})}))}),W.splice(n)}}))}},pe),he=g("Expansion","expression",{$documentation:"An expandible argument, such as ...rest, a splat, such as [1,2,...all], or an expansion in a variable declaration, such as var [first, ...rest] = list",$propdoc:{expression:"AST_Symbol the thing to be expanded"},_walk:function(e){var n=this;return e._visit(this,function(){n.expression.walk(e)})}}),De=g("ArrowParametersOrSeq","expressions",{$documentation:'A set of arrow function parameters or a sequence expression. This is used because when the parser sees a "(" it could be the start of a seq, or the start of a parameter list of an arrow function.',$propdoc:{expressions:"[AST_Expression|AST_Destructuring|AST_Expansion*] array of expressions or argument names or destructurings."},as_params:function(e){return this.expressions.map(function n(t,r,i,o){return t instanceof sn?new be({start:t.start,end:t.end,is_array:!1,default:o,names:t.properties.map(n)}):t instanceof fn?(t.key instanceof Mn&&(t.key=n(t.key,0,[t.key],t.default)),t.value=n(t.value,0,[t.key],t.default),t):t instanceof Yn?t:t instanceof be?(0==t.names.length&&e("Invalid destructuring function parameter",t.start.line,t.start.col),t.names=t.names.map(n),t):t instanceof Mn?new wn({name:t.name,default:o,start:t.start,end:t.end}):t instanceof he?t:t instanceof an?new be({start:t.start,end:t.end,is_array:!0,default:o,names:t.elements.map(n)}):t instanceof un?n(t.left,void 0,void 0,t.right):void e("Invalid function parameter",t.start.line,t.start.col)})},as_expr:function(e){return Je.from_array(this.expressions)}}),me=g("Lambda","name argnames uses_arguments is_generator",{$documentation:"Base class for functions",$propdoc:{is_generator:"[boolean] is generatorFn or not",name:"[AST_SymbolDeclaration?] the name of this function",argnames:"[AST_SymbolFunarg|AST_Destructuring|AST_Expansion*] array of function arguments, destructurings, or expanding arguments",uses_arguments:"[boolean/S] tells whether this function accesses the arguments array"},args_as_names:function(){for(var e=[],n=0;n<this.argnames.length;n++)this.argnames[n]instanceof be?e=e.concat(this.argnames[n].all_symbols()):e.push(this.argnames[n]);return e},_walk:function(e){return e._visit(this,function(){this.name&&this.name._walk(e),this.argnames.forEach(function(n){n._walk(e)}),y(this,e)})}},pe),ve=g("Accessor",null,{$documentation:"A setter/getter function.  The `name` property is always null."},me),_e=g("Function",null,{$documentation:"A function expression"},me),ge=g("Arrow",null,{$documentation:"An ES6 Arrow function ((a) => b)"},me),ye=g("Defun",null,{$documentation:"A function definition"},me),be=g("Destructuring","names is_array default",{$documentation:"A destructuring of several names. Used in destructuring assignment and with destructuring function argument names",$propdoc:{names:"[AST_Destructuring|AST_Expansion|AST_Hole|AST_ObjectKeyVal|AST_Symbol] Array of properties or elements",is_array:"[Boolean] Whether the destructuring represents an object or array",default:"[AST_Node?] Default assign value"},_walk:function(e){return e._visit(this,function(){this.names.forEach(function(n){n._walk(e)})})},all_symbols:function(){var e=[];return this.walk(new b(function(n){n instanceof vn&&e.push(n),n instanceof he&&e.push(n.expression)})),e}}),Ee=g("PrefixedTemplateString","template_string prefix",{$documentation:"A templatestring with a prefix, such as String.raw`foobarbaz`",$propdoc:{template_string:"[AST_TemplateString] The template string",prefix:"[AST_SymbolRef|AST_PropAccess] The prefix, which can be a symbol such as `foo` or a dotted expression such as `String.raw`."},_walk:function(e){this.prefix._walk(e),this.template_string._walk(e)}}),Ae=g("TemplateString","segments",{$documentation:"A template string literal",$propdoc:{segments:"[AST_TemplateSegment|AST_Expression]* One or more segments, starting with AST_TemplateSegment. AST_Expression may follow AST_TemplateSegment, but each AST_Expression must be followed by AST_TemplateSegment."},_walk:function(e){return e._visit(this,function(){this.segments.forEach(function(n,t){t%2!==0&&n._walk(e)})})}}),Fe=g("TemplateSegment","value raw",{$documentation:"A segment of a template string literal",$propdoc:{value:"Content of the segment",raw:"Raw content of the segment"}}),we=g("Jump",null,{$documentation:"Base class for “jumps” (for now that's `return`, `throw`, `break` and `continue`)"},G),Ce=g("Exit","value",{$documentation:"Base class for “exits” (`return` and `throw`)",$propdoc:{value:"[AST_Node?] the value returned or thrown by this statement; could be null for AST_Return"},_walk:function(e){return e._visit(this,this.value&&function(){this.value._walk(e)})}},we),ke=g("Return",null,{$documentation:"A `return` statement"},Ce),xe=g("Throw",null,{$documentation:"A `throw` statement"},Ce),Be=g("LoopControl","label",{$documentation:"Base class for loop control statements (`break` and `continue`)",$propdoc:{label:"[AST_LabelRef?] the label, or null if none"},_walk:function(e){return e._visit(this,this.label&&function(){this.label._walk(e)})}},we),Se=g("Break",null,{$documentation:"A `break` statement"},Be),Te=g("Continue",null,{$documentation:"A `continue` statement"},Be),$e=g("If","condition alternative",{$documentation:"A `if` statement",$propdoc:{condition:"[AST_Node] the `if` condition",alternative:"[AST_Statement?] the `else` part, or null if not present"},_walk:function(e){return e._visit(this,function(){this.condition._walk(e),this.body._walk(e),this.alternative&&this.alternative._walk(e)})}},te),Oe=g("Switch","expression",{$documentation:"A `switch` statement",$propdoc:{expression:"[AST_Node] the `switch` “discriminant”"},_walk:function(e){return e._visit(this,function(){this.expression._walk(e),y(this,e)})}},Q),qe=g("SwitchBranch",null,{$documentation:"Base class for `switch` branches"},Q),Me=g("Default",null,{$documentation:"A `default` switch branch"},qe),ze=g("Case","expression",{$documentation:"A `case` switch branch",$propdoc:{expression:"[AST_Node] the `case` expression"},_walk:function(e){return e._visit(this,function(){this.expression._walk(e),y(this,e)})}},qe),Ne=g("Try","bcatch bfinally",{$documentation:"A `try` statement",$propdoc:{bcatch:"[AST_Catch?] the catch block, or null if not present",bfinally:"[AST_Finally?] the finally block, or null if not present"},_walk:function(e){return e._visit(this,function(){y(this,e),this.bcatch&&this.bcatch._walk(e),this.bfinally&&this.bfinally._walk(e)})}},Q),He=g("Catch","argname",{$documentation:"A `catch` node; only makes sense as part of a `try` statement",$propdoc:{argname:"[AST_SymbolCatch] symbol for the exception"},_walk:function(e){return e._visit(this,function(){this.argname._walk(e),y(this,e)})}},Q),je=g("Finally",null,{$documentation:"A `finally` node; only makes sense as part of a `try` statement"},Q),Ie=g("Definitions","definitions",{$documentation:"Base class for `var` or `const` nodes (variable declarations/initializations)",$propdoc:{definitions:"[AST_VarDef*] array of variable definitions"},_walk:function(e){return e._visit(this,function(){this.definitions.forEach(function(n){n._walk(e)})})}},G),Ue=g("Var",null,{$documentation:"A `var` statement"},Ie),Pe=g("Let",null,{$documentation:"A `let` statement"},Ie),Re=g("Const",null,{$documentation:"A `const` statement"},Ie),Le=g("NameImport","foreign_name name",{$documentation:"The part of the import statement that imports names from a module.",$propdoc:{foreign_name:"[AST_SymbolImportForeign] The name being imported (as specified in the module)",name:"[AST_SymbolImport] The name as it becomes available to this module."},_walk:function(e){return e._visit(this,function(){this.foreign_name._walk(e),this.name._walk(e)})}}),Ve=g("Import","imported_name imported_names module_name",{$documentation:"An `import` statement",$propdoc:{imported_name:"[AST_SymbolImport] The name of the variable holding the module's default export.",imported_names:"[AST_NameImport*] The names of non-default imported variables",module_name:"[AST_String] String literal describing where this module came from"},_walk:function(e){return e._visit(this,function(){this.imported_name&&this.imported_name._walk(e),this.imported_names&&this.imported_names.forEach(function(n){n._walk(e)}),this.module_name._walk(e)})}}),We=g("Export","exported_definition exported_value is_default",{$documentation:"An `export` statement",$propdoc:{exported_definition:"[AST_Defun|AST_Definitions|AST_DefClass?] An exported definition",exported_value:"[AST_Node?] An exported value",is_default:"[Boolean] Whether this is the default exported value of this module"},_walk:function(e){e._visit(this,function(){this.exported_definition&&this.exported_definition._walk(e),this.exported_value&&this.exported_value._walk(e)})}},G),Ye=g("VarDef","name value",{$documentation:"A variable declaration; only appears in a AST_Definitions node",$propdoc:{name:"[AST_SymbolVar|AST_SymbolConst|AST_Destructuring] name of the variable",value:"[AST_Node?] initializer, or null of there's no initializer"},is_destructuring:function(){return this.name instanceof be},_walk:function(e){return e._visit(this,function(){this.name._walk(e),this.value&&this.value._walk(e)})}}),Xe=g("Call","expression args",{$documentation:"A function call expression",$propdoc:{expression:"[AST_Node] expression to invoke as function",args:"[AST_Node*] array of arguments"},_walk:function(e){return e._visit(this,function(){this.expression._walk(e),this.args.forEach(function(n){n._walk(e)})})}}),Ge=g("New",null,{$documentation:"An object instantiation.  Derives from a function call since it has exactly the same properties"},Xe),Je=g("Seq","car cdr",{$documentation:"A sequence expression (two comma-separated expressions)",$propdoc:{car:"[AST_Node] first element in sequence",cdr:"[AST_Node] second element in sequence"},$cons:function(e,n){var t=new Je(e);return t.car=e,t.cdr=n,t},$from_array:function(e){if(0==e.length)return null;if(1==e.length)return e[0].clone();for(var n=null,t=e.length;--t>=0;)n=Je.cons(e[t],n);for(var r=n;r;){if(r.cdr&&!r.cdr.cdr){r.cdr=r.cdr.car;break}r=r.cdr}return n},to_array:function(){for(var e=this,n=[];e;){if(n.push(e.car),e.cdr&&!(e.cdr instanceof Je)){n.push(e.cdr);break}e=e.cdr}return n},add:function(e){for(var n=this;n;){if(!(n.cdr instanceof Je)){var t=Je.cons(n.cdr,e);return n.cdr=t}n=n.cdr}},len:function(){return this.cdr instanceof Je?this.cdr.len()+1:2},_walk:function(e){return e._visit(this,function(){this.car._walk(e),this.cdr&&this.cdr._walk(e)})}}),Ze=g("PropAccess","expression property",{$documentation:'Base class for property access expressions, i.e. `a.foo` or `a["foo"]`',$propdoc:{expression:"[AST_Node] the “container” expression",property:"[AST_Node|string] the property to access.  For AST_Dot this is always a plain string, while for AST_Sub it's an arbitrary AST_Node"}}),Ke=g("Dot",null,{$documentation:"A dotted property access expression",_walk:function(e){return e._visit(this,function(){this.expression._walk(e)})}},Ze),Qe=g("Sub",null,{$documentation:'Index-style property access, i.e. `a["foo"]`',_walk:function(e){return e._visit(this,function(){this.expression._walk(e),this.property._walk(e)})}},Ze),en=g("Unary","operator expression",{$documentation:"Base class for unary expressions",$propdoc:{operator:"[string] the operator",expression:"[AST_Node] expression that this unary operator applies to"},_walk:function(e){return e._visit(this,function(){this.expression._walk(e)})}}),nn=g("UnaryPrefix",null,{$documentation:"Unary prefix expression, i.e. `typeof i` or `++i`"},en),tn=g("UnaryPostfix",null,{$documentation:"Unary postfix expression, i.e. `i++`"},en),rn=g("Binary","left operator right",{$documentation:"Binary expression, i.e. `a + b`",$propdoc:{left:"[AST_Node] left-hand side expression",operator:"[string] the operator",right:"[AST_Node] right-hand side expression"},_walk:function(e){return e._visit(this,function(){this.left._walk(e),this.right._walk(e)})}}),on=g("Conditional","condition consequent alternative",{$documentation:"Conditional expression using the ternary operator, i.e. `a ? b : c`",$propdoc:{condition:"[AST_Node]",consequent:"[AST_Node]",alternative:"[AST_Node]"},_walk:function(e){return e._visit(this,function(){this.condition._walk(e),this.consequent._walk(e),this.alternative._walk(e)})}}),un=g("Assign",null,{$documentation:"An assignment expression — `a = b + 5`"},rn),an=g("Array","elements",{$documentation:"An array literal",$propdoc:{elements:"[AST_Node*] array of elements"},_walk:function(e){return e._visit(this,function(){this.elements.forEach(function(n){n._walk(e)})})}}),sn=g("Object","properties",{$documentation:"An object literal",$propdoc:{properties:"[AST_ObjectProperty*] array of properties"},_walk:function(e){return e._visit(this,function(){this.properties.forEach(function(n){n._walk(e)})})}}),cn=g("ObjectProperty","key value",{$documentation:"Base class for literal object properties",$propdoc:{key:"[string|AST_Node] the property name converted to a string for ObjectKeyVal. For setters, getters and computed property this is an arbitrary AST_Node",value:"[AST_Node] property value. For setters and getters this is an AST_Function.",default:"[AST_Expression] The default for this parameter, only used when nested inside a binding pattern"},_walk:function(e){return e._visit(this,function(){this.key instanceof X&&this.key._walk(e),this.value._walk(e)})}}),fn=g("ObjectKeyVal","quote default",{$documentation:"A key: value object property",$propdoc:{quote:"[string] the original quote character",default:"[AST_Expression] The default parameter value, only used when nested inside a binding pattern"}},cn),ln=g("ObjectSetter","quote static",{$propdoc:{quote:"[string|undefined] the original quote character, if any",static:"[boolean] whether this is a static setter (classes only)"},$documentation:"An object setter property"},cn),pn=g("ObjectGetter","quote static",{$propdoc:{quote:"[string|undefined] the original quote character, if any",static:"[boolean] whether this is a static getter (classes only)"},$documentation:"An object getter property"},cn),dn=g("ConciseMethod","quote static is_generator",{$propdoc:{quote:"[string|undefined] the original quote character, if any",static:"[boolean] whether this method is static (classes only)",is_generator:"[boolean] is generatorFn or not"},$documentation:"An ES6 concise method inside an object or class"},cn),hn=g("Class","name extends properties",{$propdoc:{name:"[AST_SymbolClass|AST_SymbolDefClass?] optional class name.",extends:"[AST_Node]? optional parent class",properties:"[AST_ObjectProperty*] array of properties"},$documentation:"An ES6 class",_walk:function(e){return e._visit(this,function(){this.name&&this.name._walk(e),this.extends&&this.extends._walk(e),this.properties.forEach(function(n){n._walk(e)})})}},pe),Dn=g("DefClass",null,{$documentation:"A class definition"},hn),mn=g("ClassExpression",null,{$documentation:"A class expression."},hn),vn=g("Symbol","scope name thedef default",{$propdoc:{name:"[string] name of this symbol",scope:"[AST_Scope/S] the current scope (not necessarily the definition scope)",thedef:"[SymbolDef/S] the definition of this symbol",default:"[AST_Expression] The default parameter value, only used when nested inside a binding pattern"},$documentation:"Base class for all symbols",_walk:function(e){return e._visit(this,function(){this.default&&this.default._walk(e)})}}),_n=g("NewTarget",null,{$documentation:"A reference to new.target"}),gn=g("SymbolAccessor",null,{$documentation:"The name of a property accessor (setter/getter function)"},vn),yn=g("SymbolDeclaration","init",{$documentation:"A declaration symbol (symbol in var/const, function name or argument, symbol in catch)",$propdoc:{init:"[AST_Node*/S] array of initializers for this declaration."}},vn),bn=g("SymbolVar",null,{$documentation:"Symbol defining a variable"},yn),En=g("SymbolBlockDeclaration",null,{$documentation:"Base class for block-scoped declaration symbols"},yn),An=g("SymbolConst",null,{$documentation:"A constant declaration"},En),Fn=g("SymbolLet",null,{$documentation:"A block-scoped `let` declaration"},En),wn=g("SymbolFunarg",null,{$documentation:"Symbol naming a function argument"},bn),Cn=g("SymbolDefun",null,{$documentation:"Symbol defining a function"},yn),kn=g("SymbolMethod",null,{$documentation:"Symbol in an object defining a method"},vn),xn=g("SymbolLambda",null,{$documentation:"Symbol naming a function expression"},yn),Bn=g("SymbolDefClass",null,{$documentation:"Symbol naming a class's name in a class declaration. Lexically scoped to its containing scope, and accessible within the class."},En),Sn=g("SymbolClass",null,{$documentation:"Symbol naming a class's name. Lexically scoped to the class."},yn),Tn=g("SymbolCatch",null,{$documentation:"Symbol naming the exception in catch"},En),$n=g("SymbolImport",null,{$documentation:"Symbol refering to an imported name"},En),On=g("SymbolImportForeign",null,{$documentation:"A symbol imported from a module, but it is defined in the other module, and its real name is irrelevant for this module's purposes"},vn),qn=g("Label","references",{$documentation:"Symbol naming a label (declaration)",$propdoc:{references:"[AST_LoopControl*] a list of nodes referring to this label"},initialize:function(){this.references=[],this.thedef=this}},vn),Mn=g("SymbolRef",null,{$documentation:"Reference to some symbol (not definition/declaration)"},vn),zn=g("LabelRef",null,{$documentation:"Reference to a label symbol"
	},vn),Nn=g("This",null,{$documentation:"The `this` symbol"},vn),Hn=g("Super",null,{$documentation:"The `super` symbol"},vn),jn=g("Constant",null,{$documentation:"Base class for all constants",getValue:function(){return this.value}}),In=g("String","value quote",{$documentation:"A string literal",$propdoc:{value:"[string] the contents of this string",quote:"[string] the original quote character"}},jn),Un=g("Number","value literal",{$documentation:"A number literal",$propdoc:{value:"[number] the numeric value",literal:"[string] numeric value as string (optional)"}},jn),Pn=g("RegExp","value",{$documentation:"A regexp literal",$propdoc:{value:"[RegExp] the actual regexp"}},jn),Rn=g("Atom",null,{$documentation:"Base class for atoms"},jn),Ln=g("Null",null,{$documentation:"The `null` atom",value:null},Rn),Vn=g("NaN",null,{$documentation:"The impossible value",value:NaN},Rn),Wn=g("Undefined",null,{$documentation:"The `undefined` value",value:void 0},Rn),Yn=g("Hole",null,{$documentation:"A hole in an array",value:void 0},Rn),Xn=g("Infinity",null,{$documentation:"The `Infinity` value",value:1/0},Rn),Gn=g("Boolean",null,{$documentation:"Base class for booleans"},Rn),Jn=g("False",null,{$documentation:"The `false` atom",value:!1},Gn),Zn=g("True",null,{$documentation:"The `true` atom",value:!0},Gn),Kn=g("Yield","expression is_star",{$documentation:"A `yield` statement",$propdoc:{expression:"[AST_Node?] the value returned or thrown by this statement; could be null (representing undefined) but only when is_star is set to false",is_star:"[Boolean] Whether this is a yield or yield* statement"},_walk:function(e){return e._visit(this,this.expression&&function(){this.expression._walk(e)})}});b.prototype={_visit:function(e,n){this.push(e);var t=this.visit(e,n?function(){n.call(e)}:f);return!t&&n&&n.call(e),this.pop(e),t},parent:function(e){return this.stack[this.stack.length-2-(e||0)]},push:function(e){e instanceof me?this.directives=Object.create(this.directives):e instanceof Z?this.directives[e.value]=!this.directives[e.value]||"up":e instanceof hn&&(this.directives=Object.create(this.directives),this.directives["use strict"]=!this.directives["use strict"]||"up"),this.stack.push(e)},pop:function(e){this.stack.pop(),(e instanceof me||e instanceof hn)&&(this.directives=Object.getPrototypeOf(this.directives))},self:function(){return this.stack[this.stack.length-1]},find_parent:function(e){for(var n=this.stack,t=n.length;--t>=0;){var r=n[t];if(r instanceof e)return r}},has_directive:function(e){var n=this.directives[e];if(n)return n;var t=this.stack[this.stack.length-1];if(t instanceof pe&&t.body)for(var r=0;r<t.body.length;++r){var i=t.body[r];if(!(i instanceof Z))break;if(i.value==e)return!0}},in_boolean_context:function(){for(var e=this.stack,n=e.length,t=e[--n];n>0;){var r=e[--n];if(r instanceof $e&&r.condition===t||r instanceof on&&r.condition===t||r instanceof oe&&r.condition===t||r instanceof se&&r.condition===t||r instanceof nn&&"!"==r.operator&&r.expression===t)return!0;if(!(r instanceof rn)||"&&"!=r.operator&&"||"!=r.operator)return!1;t=r}},loopcontrol_target:function(e){var n=this.stack;if(e)for(var t=n.length;--t>=0;){var r=n[t];if(r instanceof re&&r.label.name==e.name)return r.body}else for(var t=n.length;--t>=0;){var r=n[t];if(r instanceof Oe||r instanceof ie)return r}}};var Qn="break case catch class const continue debugger default delete do else export extends finally for function if in instanceof new return switch throw try typeof var let void while with import",et="false null true",nt="enum implements interface package private protected public static super this "+et+" "+Qn,tt="return new delete throw else case yield";Qn=D(Qn),nt=D(nt),tt=D(tt),et=D(et);var rt=D(r("+-*&%=<>!?|~^")),it=/[0-9a-f]/i,ot=/^0x[0-9a-f]+$/i,ut=/^0[0-7]+$/,at=/^0o[0-7]+$/i,st=/^0b[01]+$/i,ct=/^\d*\.?\d*(?:e[+-]?\d*(?:\d\.?|\.?\d)\d*)?$/i,ft=D(["in","instanceof","typeof","new","void","delete","++","--","+","-","!","~","&","|","^","*","**","/","%",">>","<<",">>>","<",">","<=",">=","==","===","!=","!==","?","=","+=","-=","/=","*=","**=","%=",">>=","<<=",">>>=","|=","^=","&=","&&","||"]),lt=D(r("  \n\r\t\f\v​           \u2028\u2029  　\ufeff")),pt=D(r("\n\r\u2028\u2029")),dt=D(r(";]),:")),ht=D(r("[{(,.;:")),Dt=D(r("[]{}(),;:")),mt=(D(r("gmsiy")),{ID_Start:/[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,ID_Continue:/[0-9A-Z_a-z\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/});q.prototype.toString=function(){return this.message+" (line: "+this.line+", col: "+this.col+", pos: "+this.pos+")\n\n"+this.stack};var vt={},_t=D(["typeof","void","delete","--","++","!","~","-","+"]),gt=D(["--","++"]),yt=D(["=","+=","-=","/=","*=","**=","%=",">>=","<<=",">>>=","|=","^=","&="]),bt=function(e,n){for(var t=0;t<e.length;++t)for(var r=e[t],i=0;i<r.length;++i)n[r[i]]=t+1;return n}([["||"],["&&"],["|"],["^"],["&"],["==","===","!=","!=="],["<",">","<=",">=","in","instanceof"],[">>","<<",">>>"],["+","-"],["*","/","%"],["**"]],{}),Et=(t(["for","do","while","switch"]),t(["atom","num","string","regexp","name"]));j.prototype=new b,function(e){function n(n,t){n.DEFMETHOD("transform",function(n,r){var i,o;return n.push(this),n.before&&(i=n.before(this,t,r)),i===e&&(n.after?(n.stack[n.stack.length-1]=i=this,t(i,n),o=n.after(i,r),o!==e&&(i=o)):(i=this,t(i,n))),n.pop(this),i})}function t(e,n){return W(e,function(e){return e.transform(n,!0)})}n(X,f),n(re,function(e,n){e.label=e.label.transform(n),e.body=e.body.transform(n)}),n(K,function(e,n){e.body=e.body.transform(n)}),n(Q,function(e,n){e.body=t(e.body,n)}),n(oe,function(e,n){e.condition=e.condition.transform(n),e.body=e.body.transform(n)}),n(se,function(e,n){e.init&&(e.init=e.init.transform(n)),e.condition&&(e.condition=e.condition.transform(n)),e.step&&(e.step=e.step.transform(n)),e.body=e.body.transform(n)}),n(ce,function(e,n){e.init=e.init.transform(n),e.object=e.object.transform(n),e.body=e.body.transform(n)}),n(le,function(e,n){e.expression=e.expression.transform(n),e.body=e.body.transform(n)}),n(Ce,function(e,n){e.value&&(e.value=e.value.transform(n))}),n(Be,function(e,n){e.label&&(e.label=e.label.transform(n))}),n($e,function(e,n){e.condition=e.condition.transform(n),e.body=e.body.transform(n),e.alternative&&(e.alternative=e.alternative.transform(n))}),n(Oe,function(e,n){e.expression=e.expression.transform(n),e.body=t(e.body,n)}),n(ze,function(e,n){e.expression=e.expression.transform(n),e.body=t(e.body,n)}),n(Ne,function(e,n){e.body=t(e.body,n),e.bcatch&&(e.bcatch=e.bcatch.transform(n)),e.bfinally&&(e.bfinally=e.bfinally.transform(n))}),n(He,function(e,n){e.argname=e.argname.transform(n),e.body=t(e.body,n)}),n(Ie,function(e,n){e.definitions=t(e.definitions,n)}),n(Ye,function(e,n){e.name=e.name.transform(n),e.value&&(e.value=e.value.transform(n))}),n(be,function(e,n){e.names=t(e.names,n)}),n(me,function(e,n){e.name&&(e.name=e.name.transform(n)),e.argnames=t(e.argnames,n),e.body instanceof X?e.body=e.body.transform(n):e.body=t(e.body,n)}),n(Xe,function(e,n){e.expression=e.expression.transform(n),e.args=t(e.args,n)}),n(Je,function(e,n){e.car=e.car.transform(n),e.cdr=e.cdr.transform(n)}),n(Ke,function(e,n){e.expression=e.expression.transform(n)}),n(Qe,function(e,n){e.expression=e.expression.transform(n),e.property=e.property.transform(n)}),n(Kn,function(e,n){e.expression&&(e.expression=e.expression.transform(n))}),n(en,function(e,n){e.expression=e.expression.transform(n)}),n(rn,function(e,n){e.left=e.left.transform(n),e.right=e.right.transform(n)}),n(on,function(e,n){e.condition=e.condition.transform(n),e.consequent=e.consequent.transform(n),e.alternative=e.alternative.transform(n)}),n(an,function(e,n){e.elements=t(e.elements,n)}),n(sn,function(e,n){e.properties=t(e.properties,n)}),n(cn,function(e,n){e.key instanceof X&&(e.key=e.key.transform(n)),e.value=e.value.transform(n)}),n(hn,function(e,n){e.name&&(e.name=e.name.transform(n)),e.extends&&(e.extends=e.extends.transform(n)),e.properties=t(e.properties,n)}),n(he,function(e,n){e.expression=e.expression.transform(n)}),n(Ae,function(e,n){for(var t=0;t<e.segments.length;t++)e.segments[t]instanceof Fe||(e.segments[t]=e.segments[t].transform(n))}),n(Ee,function(e,n){e.template_string=e.template_string.transform(n)})}(),I.next_id=1,I.prototype={unmangleable:function(e){return e||(e={}),this.global&&!e.toplevel||this.export||this.object_destructuring_arg||this.undeclared||!e.eval&&(this.scope.uses_eval||this.scope.uses_with)||e.keep_fnames&&(this.orig[0]instanceof xn||this.orig[0]instanceof Cn)||this.orig[0]instanceof kn||e.keep_classnames&&(this.orig[0]instanceof Sn||this.orig[0]instanceof Bn)},mangle:function(e){var n=e.cache&&e.cache.props;if(this.global&&n&&n.has(this.name))this.mangled_name=n.get(this.name);else if(!this.mangled_name&&!this.unmangleable(e)){var t=this.scope;!e.screw_ie8&&this.orig[0]instanceof xn&&(t=t.parent_scope),this.mangled_name=t.next_mangled(e,this),this.global&&n&&n.set(this.name,this.mangled_name)}}},de.DEFMETHOD("figure_out_scope",function(e){e=s(e,{screw_ie8:!0,cache:null});var n,t=this,r=t.parent_scope=null,i=new v,o=null,u=!1,a=0,c=null,f=new b(function(t,s){var l=e.screw_ie8&&t instanceof He||t instanceof Q&&t.creates_block_scope();if(l){var d=r;return r=new pe(t),r.init_scope_vars(a),r.parent_scope=d,r.is_block_scope=!0,t instanceof pe||(r.uses_with=d.uses_with,r.uses_eval=d.uses_eval,r.directives=d.directives),s(),r=d,!0}if(t instanceof be&&t.is_array===!1)return c=t,s(),c=null,!0;if(t instanceof pe){t.init_scope_vars(a);var d=t.parent_scope=r,h=o,D=i;return o=r=t,i=new v,++a,s(),--a,r=d,o=h,i=D,!0}if(t instanceof We&&(n=!0,s(),n=!1),t instanceof re){var m=t.label;if(i.has(m.name))throw new Error(p("Label {name} defined twice",m));return i.set(m.name,m),s(),i.del(m.name),!0}if(t instanceof le)for(var _=r;_;_=_.parent_scope)_.uses_with=!0;else if(t instanceof vn&&(t.scope=r),t instanceof wn&&(t.object_destructuring_arg=!!c,o.def_variable(t,n)),t instanceof qn&&(t.thedef=t,t.references=[]),t instanceof xn)o.def_function(t,n);else if(t instanceof Cn){for(var g=o.parent_scope;g.is_block_scope;)g=g.parent_scope;(t.scope=g).def_function(t,n)}else if(t instanceof Sn)o.def_variable(t,n);else if(t instanceof $n)r.def_variable(t,n);else if(t instanceof Bn)(t.scope=o.parent_scope).def_function(t,n);else if(t instanceof Ue)u=t.has_const_pragma();else if(t instanceof bn||t instanceof An||t instanceof Fn){var y=(t instanceof En?r:o).def_variable(t,n);y.constant=t instanceof An||u,y.destructuring=c,y.init=f.parent().value}else if(t instanceof Tn)(e.screw_ie8?r:o).def_variable(t);else if(t instanceof zn){var b=i.get(t.name);if(!b)throw new Error(p("Undefined label {name} [{line},{col}]",{name:t.name,line:t.start.line,col:t.start.col}));t.thedef=b}});t.walk(f);var l=null,d=null,h=t.globals=new v,f=new b(function(e,n){if(e instanceof me){var r=l;return l=e,n(),l=r,!0}if(e instanceof hn){var i=d;return d=e,n(),d=i,!0}if(e instanceof Be&&e.label)return e.label.thedef.references.push(e),!0;if(e instanceof Mn){var o=e.name,u=f.parent();if("eval"==o&&u instanceof Xe)for(var a=e.scope;a&&!a.uses_eval;a=a.parent_scope)a.uses_eval=!0;var s=e.scope.find_variable(o);if(e.scope instanceof me&&"arguments"==o&&(e.scope.uses_arguments=!0),!s){var c;h.has(o)?c=h.get(o):(c=new I(t,h.size(),e),c.undeclared=!0,c.global=!0,h.set(o,c)),s=c}return e.thedef=s,(u instanceof en&&("++"===u.operator||"--"===u.operator)||u instanceof un&&u.left===e)&&(s.modified=!0),e.reference(),!0}});t.walk(f),e.cache&&(this.cname=e.cache.cname)}),pe.DEFMETHOD("init_scope_vars",function(e){this.variables=new v,this.functions=new v,this.uses_with=!1,this.uses_eval=!1,this.parent_scope=null,this.enclosed=[],this.cname=-1,this.nesting=e}),Q.DEFMETHOD("creates_block_scope",function(){return!(this instanceof me||this instanceof de||this instanceof hn)}),me.DEFMETHOD("init_scope_vars",function(){pe.prototype.init_scope_vars.apply(this,arguments),this.uses_arguments=!1;var e=new Ye({name:"arguments",start:this.start,end:this.end}),n=new I(this,this.variables.size(),e);this.variables.set(e.name,n)}),Mn.DEFMETHOD("reference",function(){var e=this.definition();e.references.push(this);for(var n=this.scope;n&&(l(n.enclosed,e),n!==e.scope);)n=n.parent_scope;this.frame=this.scope.nesting-e.scope.nesting}),pe.DEFMETHOD("find_variable",function(e){return e instanceof vn&&(e=e.name),this.variables.get(e)||this.parent_scope&&this.parent_scope.find_variable(e)}),pe.DEFMETHOD("def_function",function(e,n){this.functions.set(e.name,this.def_variable(e,n))}),pe.DEFMETHOD("def_variable",function(e,n){var t;return this.variables.has(e.name)?(t=this.variables.get(e.name),t.orig.push(e)):(t=new I(this,this.variables.size(),e),this.variables.set(e.name,t),t.object_destructuring_arg=e.object_destructuring_arg,n&&(t.export=!0),t.global=!(this.parent_scope||e instanceof En)),e.thedef=t}),pe.DEFMETHOD("next_mangled",function(e){var n=this.enclosed;e:for(;;){var t=At(++this.cname);if(B(t)&&!(e.except.indexOf(t)>=0)){for(var r=n.length;--r>=0;){var i=n[r],o=i.mangled_name||i.unmangleable(e)&&i.name;if(t==o)continue e}return t}}}),_e.DEFMETHOD("next_mangled",function(e,n){for(var t=n.orig[0]instanceof wn&&this.name&&this.name.definition(),r=t?t.mangled_name||t.name:null;;){var i=me.prototype.next_mangled.call(this,e,n);if(!r||r!=i)return i}}),pe.DEFMETHOD("references",function(e){return e instanceof vn&&(e=e.definition()),this.enclosed.indexOf(e)<0?null:e}),vn.DEFMETHOD("unmangleable",function(e){var n=this.definition();return n&&n.unmangleable(e)}),gn.DEFMETHOD("unmangleable",function(){return!0}),qn.DEFMETHOD("unmangleable",function(){return!1}),vn.DEFMETHOD("unreferenced",function(){return 0==this.definition().references.length&&!(this.scope.uses_eval||this.scope.uses_with)}),vn.DEFMETHOD("undeclared",function(){return this.definition().undeclared}),zn.DEFMETHOD("undeclared",function(){return!1}),qn.DEFMETHOD("undeclared",function(){return!1}),vn.DEFMETHOD("definition",function(){return this.thedef}),vn.DEFMETHOD("global",function(){return this.definition().global}),Ue.DEFMETHOD("has_const_pragma",function(){var e=this.start&&this.start.comments_before,n=e&&e[e.length-1];return n&&/@const\b/.test(n.value)}),de.DEFMETHOD("_default_mangler_options",function(e){return s(e,{except:[],eval:!1,sort:!1,toplevel:!1,screw_ie8:!0,keep_fnames:!1,keep_classnames:!1})}),de.DEFMETHOD("mangle_names",function(e){e=this._default_mangler_options(e),e.except.push("arguments");var n=-1,t=[];e.cache&&this.globals.each(function(n){e.except.indexOf(n.name)<0&&t.push(n)});var r=new b(function(i,o){if(i instanceof re){var u=n;return o(),n=u,!0}if(i instanceof pe){var a=(r.parent(),[]);return i.variables.each(function(n){e.except.indexOf(n.name)<0&&a.push(n)}),void t.push.apply(t,a)}if(i instanceof qn){var s;do s=At(++n);while(!B(s));return i.mangled_name=s,!0}var c=e.screw_ie8&&i instanceof Tn||i instanceof En;if(c)return void t.push(i.definition())});this.walk(r),t.forEach(function(n){n.destructuring&&!n.destructuring.is_array||n.mangle(e)}),e.cache&&(e.cache.cname=this.cname)}),de.DEFMETHOD("compute_char_frequency",function(e){e=this._default_mangler_options(e);var n=new b(function(n){n instanceof jn?At.consider(n.print_to_string()):n instanceof ke?At.consider("return"):n instanceof xe?At.consider("throw"):n instanceof Te?At.consider("continue"):n instanceof Se?At.consider("break"):n instanceof J?At.consider("debugger"):n instanceof Z?At.consider(n.value):n instanceof ae?At.consider("while"):n instanceof ue?At.consider("do while"):n instanceof $e?(At.consider("if"),n.alternative&&At.consider("else")):n instanceof Ue?At.consider("var"):n instanceof Re?At.consider("const"):n instanceof me?At.consider("function"):n instanceof se?At.consider("for"):n instanceof ce?At.consider("for in"):n instanceof Oe?At.consider("switch"):n instanceof ze?At.consider("case"):n instanceof Me?At.consider("default"):n instanceof le?At.consider("with"):n instanceof ln?At.consider("set"+("string"==typeof n.key?n.key:"")):n instanceof pn?At.consider("get"+("string"==typeof n.key?n.key:"")):n instanceof fn&&"string"==typeof n.key?At.consider(n.key):n instanceof dn&&"string"==typeof n.key?At.consider(n.key):n instanceof Ge?At.consider("new"):n instanceof Nn?At.consider("this"):n instanceof Hn?At.consider("super"):n instanceof Ne?At.consider("try"):n instanceof He?At.consider("catch"):n instanceof je?At.consider("finally"):n instanceof Kn?At.consider("yield"):n instanceof vn&&n.unmangleable(e)?At.consider(n.name):n instanceof en||n instanceof rn?At.consider(n.operator):n instanceof Ke&&At.consider(n.property)});this.walk(n),At.sort()});var At=function(){function e(){r=Object.create(null),t=i.split("").map(function(e){return e.charCodeAt(0)}),t.forEach(function(e){r[e]=0})}function n(e){var n="",r=54;e++;do e--,n+=String.fromCharCode(t[e%r]),e=Math.floor(e/r),r=64;while(e>0);return n}var t,r,i="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_0123456789";return n.consider=function(e){for(var n=e.length;--n>=0;){var t=e.charCodeAt(n);t in r&&++r[t]}},n.sort=function(){t=h(t,function(e,n){return x(e)&&!x(n)?1:x(n)&&!x(e)?-1:r[n]-r[e]})},n.reset=e,e(),n.get=function(){return t},n.freq=function(){return r},n}();de.DEFMETHOD("scope_warnings",function(e){e=s(e,{undeclared:!1,unreferenced:!0,assign_to_global:!0,func_arguments:!0,nested_defuns:!0,eval:!0});var n=new b(function(t){if(e.undeclared&&t instanceof Mn&&t.undeclared()&&X.warn("Undeclared symbol: {name} [{file}:{line},{col}]",{name:t.name,file:t.start.file,line:t.start.line,
	col:t.start.col}),e.assign_to_global){var r=null;t instanceof un&&t.left instanceof Mn?r=t.left:t instanceof ce&&t.init instanceof Mn&&(r=t.init),r&&(r.undeclared()||r.global()&&r.scope!==r.definition().scope)&&X.warn("{msg}: {name} [{file}:{line},{col}]",{msg:r.undeclared()?"Accidental global?":"Assignment to global",name:r.name,file:r.start.file,line:r.start.line,col:r.start.col})}e.eval&&t instanceof Mn&&t.undeclared()&&"eval"==t.name&&X.warn("Eval is used [{file}:{line},{col}]",t.start),e.unreferenced&&(t instanceof yn||t instanceof qn)&&!(t instanceof Tn)&&t.unreferenced()&&X.warn("{type} {name} is declared but not referenced [{file}:{line},{col}]",{type:t instanceof qn?"Label":"Symbol",name:t.name,file:t.start.file,line:t.start.line,col:t.start.col}),e.func_arguments&&t instanceof me&&t.uses_arguments&&X.warn("arguments used in function {name} [{file}:{line},{col}]",{name:t.name?t.name.name:"anonymous",file:t.start.file,line:t.start.line,col:t.start.col}),e.nested_defuns&&t instanceof ye&&!(n.parent()instanceof pe)&&X.warn('Function {name} declared in nested statement "{type}" [{file}:{line},{col}]',{name:t.name.name,type:n.parent().TYPE,file:t.start.file,line:t.start.line,col:t.start.col})});this.walk(n)});var Ft=/^$|[;{][\s\n]*$/;!function(){function e(e,n){e.DEFMETHOD("_codegen",n)}function n(e,t){Array.isArray(e)?e.forEach(function(e){n(e,t)}):e.DEFMETHOD("needs_parens",t)}function t(e,n,t,r){var i=e.length-1;v=r,e.forEach(function(e,r){v!==!0||e instanceof Z||e instanceof ne||e instanceof K&&e.body instanceof In||(v=!1),e instanceof ne||(t.indent(),e.print(t),r==i&&n||(t.newline(),n&&t.newline())),v===!0&&e instanceof K&&e.body instanceof In&&(v=!1)}),v=!1}function r(e,n,r){e.length>0?n.with_block(function(){t(e,!1,n,r)}):n.print("{}")}function i(e,n){if(n.option("bracketize"))return void d(e.body,n);if(!e.body)return n.force_semicolon();if(e.body instanceof ue)return void d(e.body,n);for(var t=e.body;;)if(t instanceof $e){if(!t.alternative)return void d(e.body,n);t=t.alternative}else{if(!(t instanceof te))break;t=t.body}a(e.body,n)}function o(e,n,t){if(t)try{e.walk(new b(function(e){if(e instanceof rn&&"in"==e.operator)throw n})),e.print(n)}catch(t){if(t!==n)throw t;e.print(n,!0)}else e.print(n)}function u(e){return[92,47,46,43,42,63,40,41,91,93,123,125,36,94,58,124,33,10,13,0,65279,8232,8233].indexOf(e)<0}function a(e,n){n.option("bracketize")?!e||e instanceof ne?n.print("{}"):e instanceof ee?e.print(n):n.with_block(function(){n.indent(),e.print(n),n.newline()}):!e||e instanceof ne?n.force_semicolon():e.print(n)}function s(e){for(var n=e.stack(),t=n.length,r=n[--t],i=n[--t];t>0;){if(i instanceof G&&i.body===r)return!0;if(!(i instanceof Je&&i.car===r||i instanceof Xe&&i.expression===r&&!(i instanceof Ge)||i instanceof Ke&&i.expression===r||i instanceof Qe&&i.expression===r||i instanceof on&&i.condition===r||i instanceof rn&&i.left===r||i instanceof tn&&i.expression===r))return!1;r=i,i=n[--t]}}function c(e,n){return e.args.length>0||n.option("beautify")}function l(e){for(var n=e[0],t=n.length,r=1;r<e.length;++r)e[r].length<t&&(n=e[r],t=n.length);return n}function p(e){var n,t=e.toString(10),r=[t.replace(/^0\./,".").replace("e+","e")];return Math.floor(e)===e?(e>=0?r.push("0x"+e.toString(16).toLowerCase(),"0"+e.toString(8)):r.push("-0x"+(-e).toString(16).toLowerCase(),"-0"+(-e).toString(8)),(n=/^(.*?)(0+)$/.exec(e))&&r.push(n[1]+"e"+n[2].length)):(n=/^0?\.(0+)(.*)$/.exec(e))&&r.push(n[2]+"e-"+(n[1].length+n[2].length),t.substr(t.indexOf("."))),l(r)}function d(e,n){return e instanceof ee?void e.print(n):void n.with_block(function(){n.indent(),e.print(n),n.newline()})}function h(e,n){e.DEFMETHOD("add_source_map",function(e){n(this,e)})}function D(e,n){n.add_mapping(e.start)}var m=!1,v=!1;X.DEFMETHOD("print",function(e,n){function t(){r.add_comments(e),r.add_source_map(e),i(r,e)}var r=this,i=r._codegen,o=m;r instanceof Z&&"use asm"==r.value&&e.parent()instanceof pe&&(m=!0),e.push_node(r),n||r.needs_parens(e)?e.with_parens(t):t(),e.pop_node(),r instanceof pe&&(m=o)}),X.DEFMETHOD("print_to_string",function(e){var n=U(e);return e||(n._readonly=!0),this.print(n),n.get()}),X.DEFMETHOD("add_comments",function(e){if(!e._readonly){var n=this,t=n.start;if(t&&!t._comments_dumped){t._comments_dumped=!0;var r=t.comments_before||[];n instanceof Ce&&n.value&&n.value.walk(new b(function(e){if(e.start&&e.start.comments_before&&(r=r.concat(e.start.comments_before),e.start.comments_before=[]),e instanceof _e||e instanceof an||e instanceof sn)return!0})),r=r.filter(e.option("comments"),n),!e.option("beautify")&&r.length>0&&/comment[134]/.test(r[0].type)&&0!==e.col()&&r[0].nlb&&e.print("\n"),r.forEach(function(n){/comment[134]/.test(n.type)?(e.print("//"+n.value+"\n"),e.indent()):"comment2"==n.type?(e.print("/*"+n.value+"*/"),t.nlb?(e.print("\n"),e.indent()):e.space()):0===e.pos()&&"comment5"==n.type&&e.option("shebang")&&(e.print("#!"+n.value+"\n"),e.indent())})}}}),n(X,function(){return!1}),n(_e,function(e){if(s(e))return!0;if(e.option("wrap_iife")){var n=e.parent();return n instanceof Xe&&n.expression===this}return!1}),n(sn,function(e){return s(e)}),n([en,Wn],function(e){var n=e.parent();return n instanceof Ze&&n.expression===this||n instanceof Xe&&n.expression===this||n instanceof rn&&"**"===n.operator&&this instanceof nn&&n.left===this&&"++"!==this.operator&&"--"!==this.operator}),n(Je,function(e){var n=e.parent();return n instanceof Xe||n instanceof en||n instanceof rn||n instanceof Ye||n instanceof Ze||n instanceof an||n instanceof cn||n instanceof An&&n.default===this||n instanceof Fn&&n.default===this||n instanceof bn&&n.default===this||n instanceof Tn&&n.default===this||n instanceof on||n instanceof ge}),n(rn,function(e){var n=e.parent();if(n instanceof Xe&&n.expression===this)return!0;if(n instanceof en)return!0;if(n instanceof Ze&&n.expression===this)return!0;if(n instanceof rn){var t=n.operator,r=bt[t],i=this.operator,o=bt[i];if(r>o||r==o&&this===n.right)return!0}}),n(Kn,function(e){var n=e.parent();return n instanceof rn&&"="!==n.operator||(n instanceof on&&n.condition===this||(n instanceof en||void 0))}),n(Ze,function(e){var n=e.parent();if(n instanceof Ge&&n.expression===this)try{this.walk(new b(function(e){if(e instanceof Xe)throw n}))}catch(e){if(e!==n)throw e;return!0}}),n(Xe,function(e){var n,t=e.parent();return t instanceof Ge&&t.expression===this||this.expression instanceof _e&&t instanceof Ze&&t.expression===this&&(n=e.parent(1))instanceof un&&n.left===t}),n(Ge,function(e){var n=e.parent();if(!c(this,e)&&(n instanceof Ze||n instanceof Xe&&n.expression===this))return!0}),n(Un,function(e){var n=e.parent();if(n instanceof Ze&&n.expression===this){var t=this.getValue();if(t<0||/^0/.test(p(t)))return!0}}),n([un,on],function(e){var n=e.parent();return n instanceof en||(n instanceof rn&&!(n instanceof un)||(n instanceof Xe&&n.expression===this||(n instanceof on&&n.condition===this||(n instanceof Ze&&n.expression===this||void 0))))}),e(Z,function(e,n){n.print_string(e.value,e.quote),n.semicolon()}),e(he,function(e,n){n.print("..."),e.expression.print(n)}),e(be,function(e,n){n.print(e.is_array?"[":"{");var t=!0,r=e.names.length;e.names.forEach(function(e,i){t?t=!1:(n.comma(),n.space()),e.print(n),i===r-1&&e instanceof Yn&&n.comma()}),n.print(e.is_array?"]":"}"),e.default&&(n.space(),n.print("="),n.space(),e.default.print(n))}),e(J,function(e,n){n.print("debugger"),n.semicolon()}),te.DEFMETHOD("_do_print_body",function(e){a(this.body,e)}),e(G,function(e,n){e.body.print(n),n.semicolon()}),e(de,function(e,n){t(e.body,!0,n,!0),n.print("")}),e(re,function(e,n){e.label.print(n),n.colon(),e.body.print(n)}),e(K,function(e,n){e.body.print(n),n.semicolon()}),e(ee,function(e,n){r(e.body,n)}),e(ne,function(e,n){n.semicolon()}),e(ue,function(e,n){n.print("do"),n.space(),e._do_print_body(n),n.space(),n.print("while"),n.space(),n.with_parens(function(){e.condition.print(n)}),n.semicolon()}),e(ae,function(e,n){n.print("while"),n.space(),n.with_parens(function(){e.condition.print(n)}),n.space(),e._do_print_body(n)}),e(se,function(e,n){n.print("for"),n.space(),n.with_parens(function(){!e.init||e.init instanceof ne?n.print(";"):(e.init instanceof Ie?e.init.print(n):o(e.init,n,!0),n.print(";"),n.space()),e.condition?(e.condition.print(n),n.print(";"),n.space()):n.print(";"),e.step&&e.step.print(n)}),n.space(),e._do_print_body(n)}),e(ce,function(e,n){n.print("for"),n.space(),n.with_parens(function(){e.init.print(n),n.space(),e instanceof fe?n.print("of"):n.print("in"),n.space(),e.object.print(n)}),n.space(),e._do_print_body(n)}),e(le,function(e,n){n.print("with"),n.space(),n.with_parens(function(){e.expression.print(n)}),n.space(),e._do_print_body(n)}),me.DEFMETHOD("_do_print",function(e,n){var t=this;n||(e.print("function"),this.is_generator&&e.star(),t.name&&e.space()),t.name instanceof vn?"string"!=typeof t.name.name||$(t.name.name)?t.name.print(e):e.print_string(t.name.name):n&&t.name instanceof X&&e.with_square(function(){t.name.print(e)}),e.with_parens(function(){t.argnames.forEach(function(n,t){t&&e.comma(),n.print(e)})}),e.space(),r(t.body,e,!0)}),e(me,function(e,n){e._do_print(n)}),e(Ee,function(e,n){e.prefix.print(n),e.template_string.print(n)}),e(Ae,function(e,n){var t=n.parent()instanceof Ee;n.print("`");for(var r=0;r<e.segments.length;r++)e.segments[r]instanceof Fe?t?n.print(e.segments[r].raw):n.print_template_string_chars(e.segments[r].value):(n.print("${"),e.segments[r].print(n),n.print("}"));n.print("`")}),ge.DEFMETHOD("_do_print",function(e){var n=this,t=e.parent(),i=t instanceof rn||t instanceof en||t instanceof Xe&&n===t.expression;i&&e.print("("),1===n.argnames.length&&n.argnames[0]instanceof vn&&!n.argnames[0].default?n.argnames[0].print(e):e.with_parens(function(){n.argnames.forEach(function(n,t){t&&e.comma(),n.print(e)})}),e.space(),e.print("=>"),e.space(),n.body instanceof X?this.body.print(e):r(this.body,e),i&&e.print(")")}),Ce.DEFMETHOD("_do_print",function(e,n){e.print(n),this.value&&(e.space(),this.value.print(e)),e.semicolon()}),e(ke,function(e,n){e._do_print(n,"return")}),e(xe,function(e,n){e._do_print(n,"throw")}),e(Kn,function(e,n){var t=e.is_star?"*":"";n.print("yield"+t),e.expression&&(n.space(),e.expression.print(n))}),Be.DEFMETHOD("_do_print",function(e,n){e.print(n),this.label&&(e.space(),this.label.print(e)),e.semicolon()}),e(Se,function(e,n){e._do_print(n,"break")}),e(Te,function(e,n){e._do_print(n,"continue")}),e($e,function(e,n){n.print("if"),n.space(),n.with_parens(function(){e.condition.print(n)}),n.space(),e.alternative?(i(e,n),n.space(),n.print("else"),n.space(),a(e.alternative,n)):e._do_print_body(n)}),e(Oe,function(e,n){n.print("switch"),n.space(),n.with_parens(function(){e.expression.print(n)}),n.space(),e.body.length>0?n.with_block(function(){e.body.forEach(function(e,t){t&&n.newline(),n.indent(!0),e.print(n)})}):n.print("{}")}),qe.DEFMETHOD("_do_print_body",function(e){this.body.length>0&&(e.newline(),this.body.forEach(function(n){e.indent(),n.print(e),e.newline()}))}),e(Me,function(e,n){n.print("default:"),e._do_print_body(n)}),e(ze,function(e,n){n.print("case"),n.space(),e.expression.print(n),n.print(":"),e._do_print_body(n)}),e(Ne,function(e,n){n.print("try"),n.space(),r(e.body,n),e.bcatch&&(n.space(),e.bcatch.print(n)),e.bfinally&&(n.space(),e.bfinally.print(n))}),e(He,function(e,n){n.print("catch"),n.space(),n.with_parens(function(){e.argname.print(n)}),n.space(),r(e.body,n)}),e(je,function(e,n){n.print("finally"),n.space(),r(e.body,n)}),Ie.DEFMETHOD("_do_print",function(e,n){e.print(n),e.space(),this.definitions.forEach(function(n,t){t&&e.comma(),n.print(e)});var t=e.parent(),r=t instanceof se||t instanceof ce,i=r&&t.init===this;i||e.semicolon()}),e(Pe,function(e,n){e._do_print(n,"let")}),e(Ue,function(e,n){e._do_print(n,"var")}),e(Re,function(e,n){e._do_print(n,"const")}),e(Ve,function(e,n){n.print("import"),n.space(),e.imported_name&&e.imported_name.print(n),e.imported_name&&e.imported_names&&(n.print(","),n.space()),e.imported_names&&(n.print("{"),e.imported_names.forEach(function(t,r){n.space(),t.print(n),r<e.imported_names.length-1&&(n.print(","),n.space())}),n.space(),n.print("}")),(e.imported_name||e.imported_names)&&(n.space(),n.print("from"),n.space()),e.module_name.print(n),n.semicolon()}),e(Le,function(e,n){var t=e.name.definition(),r=(t&&t.mangled_name||e.name.name)!==e.foreign_name.name;r?(n.print(e.foreign_name.name),n.space(),n.print("as"),n.space(),e.name.print(n)):e.name.print(n)}),e(We,function(e,n){n.print("export"),n.space(),e.is_default&&(n.print("default"),n.space()),e.exported_value?e.exported_value.print(n):e.exported_definition&&e.exported_definition.print(n),n.semicolon()}),e(Ye,function(e,n){if(e.name.print(n),e.value){n.space(),n.print("="),n.space();var t=n.parent(1),r=t instanceof se||t instanceof ce;o(e.value,n,r)}}),e(Xe,function(e,n){e.expression.print(n),e instanceof Ge&&!c(e,n)||n.with_parens(function(){e.args.forEach(function(e,t){t&&n.comma(),e.print(n)})})}),e(Ge,function(e,n){n.print("new"),n.space(),Xe.prototype._codegen(e,n)}),Je.DEFMETHOD("_do_print",function(e){this.car.print(e),this.cdr&&(e.comma(),e.should_break()&&(e.newline(),e.indent()),this.cdr.print(e))}),e(Je,function(e,n){e._do_print(n)}),e(Ke,function(e,n){var t=e.expression;t.print(n),t instanceof Un&&t.getValue()>=0&&(/[xa-f.)]/i.test(n.last())||n.print(".")),n.print("."),n.add_mapping(e.end),n.print_name(e.property)}),e(Qe,function(e,n){e.expression.print(n),n.print("["),e.property.print(n),n.print("]")}),e(nn,function(e,n){var t=e.operator;n.print(t),(/^[a-z]/i.test(t)||/[+-]$/.test(t)&&e.expression instanceof nn&&/^[+-]/.test(e.expression.operator))&&n.space(),e.expression.print(n)}),e(tn,function(e,n){e.expression.print(n),n.print(e.operator)}),e(rn,function(e,n){var t=e.operator;e.left.print(n),">"==t[0]&&e.left instanceof tn&&"--"==e.left.operator?n.print(" "):n.space(),n.print(t),("<"==t||"<<"==t)&&e.right instanceof nn&&"!"==e.right.operator&&e.right.expression instanceof nn&&"--"==e.right.expression.operator?n.print(" "):n.space(),e.right.print(n)}),e(on,function(e,n){e.condition.print(n),n.space(),n.print("?"),n.space(),e.consequent.print(n),n.space(),n.colon(),e.alternative.print(n)}),e(an,function(e,n){n.with_square(function(){var t=e.elements,r=t.length;r>0&&n.space(),t.forEach(function(e,t){t&&n.comma(),e.print(n),t===r-1&&e instanceof Yn&&n.comma()}),r>0&&n.space()})}),e(sn,function(e,n){e.properties.length>0?n.with_block(function(){e.properties.forEach(function(e,t){t&&(n.print(","),n.newline()),n.indent(),e.print(n)}),n.newline()}):n.print("{}")}),e(hn,function(e,n){n.print("class"),n.space(),e.name&&(e.name.print(n),n.space()),e.extends&&(n.print("extends"),n.space(),e.extends.print(n),n.space()),e.properties.length>0?n.with_block(function(){e.properties.forEach(function(e,t){t&&n.newline(),n.indent(),e.print(n)}),n.newline()}):n.print("{}")}),e(_n,function(e,n){n.print("new.target")}),cn.DEFMETHOD("print_property_name",function(e,n,t){t.option("quote_keys")?t.print_string(e+""):("number"==typeof e||!t.option("beautify")&&+e+""==e)&&parseFloat(e)>=0?t.print(p(e)):(nt(e)?t.option("screw_ie8"):$(e))?n&&t.option("keep_quoted_props")?t.print_string(e,n):t.print_name(e):t.print_string(e,n)}),e(fn,function(e,n){function t(e){var n=e.value.definition();return n?n.mangled_name||n.name:e.value.name}n.option("shorthand")&&e.value instanceof vn&&$(e.key)&&t(e)===e.key?e.print_property_name(e.key,e.quote,n):(!(e.key instanceof X)||e.key instanceof vn?e.print_property_name(e.key,e.quote,n):n.with_square(function(){e.key.print(n)}),n.colon(),e.value.print(n)),e.default&&(n.space(),n.print("="),n.space(),e.default.print(n))}),cn.DEFMETHOD("_print_getter_setter",function(e,n,t){n.static&&(t.print("static"),t.space()),t.print(e),t.space(),n.key instanceof kn?n.print_property_name(n.key.name,n.quote,t):t.with_square(function(){n.key.print(t)}),n.value._do_print(t,!0)}),e(ln,function(e,n){e._print_getter_setter("set",e,n)}),e(pn,function(e,n){e._print_getter_setter("get",e,n)}),e(dn,function(e,n){e.static&&(n.print("static"),n.space()),e.is_generator&&n.print("*"),n.space(),e.key instanceof kn?e.print_property_name(e.key.name,e.quote,n):n.with_square(function(){e.key.print(n)}),e.value._do_print(n,!0)}),vn.DEFMETHOD("_do_print",function(e){var n=this.definition();e.print_name(n?n.mangled_name||n.name:this.name)}),e(vn,function(e,n){e._do_print(n)}),e(yn,function(e,n){e._do_print(n),e.default&&(n.space(),n.print("="),n.space(),e.default.print(n))}),e(Wn,function(e,n){n.print("void 0")}),e(Yn,f),e(Xn,function(e,n){n.print("Infinity")}),e(Vn,function(e,n){n.print("NaN")}),e(Nn,function(e,n){n.print("this")}),e(Hn,function(e,n){n.print("super")}),e(jn,function(e,n){n.print(e.getValue())}),e(In,function(e,n){n.print_string(e.getValue(),e.quote,v)}),e(Un,function(e,n){m&&e.start&&null!=e.start.raw?n.print(e.start.raw):n.print(p(e.getValue()))}),e(Pn,function(e,n){var t=e.getValue().toString();n.option("ascii_only")?t=n.to_ascii(t):n.option("unescape_regexps")&&(t=t.split("\\\\").map(function(e){return e.replace(/\\u[0-9a-fA-F]{4}|\\x[0-9a-fA-F]{2}/g,function(e){var n=parseInt(e.substr(2),16);return u(n)?String.fromCharCode(n):e})}).join("\\\\")),n.print(t);var r=n.parent();r instanceof rn&&/^in/.test(r.operator)&&r.left===e&&n.print(" ")}),h(X,f),h(Z,D),h(J,D),h(vn,D),h(we,D),h(te,D),h(re,f),h(me,D),h(Oe,D),h(qe,D),h(ee,D),h(de,f),h(Ge,D),h(Ne,D),h(He,D),h(je,D),h(Ie,D),h(jn,D),h(ln,function(e,n){n.add_mapping(e.start,e.key.name)}),h(pn,function(e,n){n.add_mapping(e.start,e.key.name)}),h(cn,function(e,n){n.add_mapping(e.start,e.key)})}(),P.prototype=new j,c(P.prototype,{option:function(e){return this.options[e]},compress:function(e){for(var n=+this.options.passes||1,t=0;t<n&&t<3;++t)t>0&&e.clear_opt_flags(),e=e.transform(this);return e},warn:function(e,n){if(this.options.warnings){var t=p(e,n);t in this.warnings_produced||(this.warnings_produced[t]=!0,X.warn.apply(X,arguments))}},clear_warnings:function(){this.warnings_produced={}},before:function(e,n,t){if(e._squeezed)return e;var r=!1;return e instanceof pe&&(e=e.hoist_declarations(this),r=!0),n(e,this),e=e.optimize(this),r&&e instanceof pe&&(e.drop_unused(this),n(e,this)),e._squeezed=!0,e}}),function(){function e(e,n){e.DEFMETHOD("optimize",function(e){var t=this;if(t._optimized)return t;if(e.has_directive("use asm"))return t;var r=n(t,e);return r._optimized=!0,r===t?r:r.transform(e)})}function n(e,n,t){return t||(t={}),n&&(t.start||(t.start=n.start),t.end||(t.end=n.end)),new e(t)}function t(e,t,r){if(t instanceof X)return t.transform(e);switch(typeof t){case"string":return n(In,r,{value:t}).optimize(e);case"number":return isNaN(t)?n(Vn,r):1/t<0?n(nn,r,{operator:"-",expression:n(Un,r,{value:-t})}):n(Un,r,{value:t}).optimize(e);case"boolean":return n(t?Zn:Jn,r).optimize(e);case"undefined":return n(Wn,r).optimize(e);default:if(null===t)return n(Ln,r,{value:null}).optimize(e);if(t instanceof RegExp)return n(Pn,r,{value:t}).optimize(e);throw new Error(p("Can't handle constant of type: {type}",{type:typeof t}))}}function r(e,t,r){return e instanceof Xe&&e.expression===t&&(r instanceof Ze||r instanceof Mn&&"eval"===r.name)?n(Je,t,{car:n(Un,t,{value:0}),cdr:r}):r}function u(e){if(null===e)return[];if(e instanceof ee)return e.body;if(e instanceof ne)return[];if(e instanceof G)return[e];throw new Error("Can't convert thing to statement array")}function a(e){return null===e||(e instanceof ne||e instanceof ee&&0==e.body.length)}function s(e){return!(e instanceof Dn||e instanceof Pe||e instanceof Re)}function c(e){return e instanceof Oe?e:(e instanceof se||e instanceof ce||e instanceof oe)&&e.body instanceof ee?e.body:e}function f(e,t){function i(e,t){function o(e,n){return e instanceof Mn&&(n instanceof un&&e===n.left||n instanceof en&&n.expression===e&&("++"==n.operator||"--"==n.operator))}function u(i,u,c){if(o(i,u))return i;var p=r(u,i,g.value);return g.value=null,d.splice(_,1),0===d.length&&(e[l]=n(ne,a),s=!0),f.clear_opt_flags(),t.warn("Replacing "+(c?"constant":"variable")+" "+y+" [{file}:{line},{col}]",i.start),A=!0,p}for(var a=t.self(),s=!1,c=e.length;--c>=0;){var f=e[c];if(!(f instanceof Ie)){if([f,f.body,f.alternative,f.bcatch,f.bfinally].forEach(function(e){e&&e.body&&i(e.body,t)}),c<=0)break;var l=c-1,p=e[l];if(p instanceof Ie){var d=p.definitions;if(null!=d)for(var h={},D=!1,m=!1,v={},_=d.length;--_>=0;){var g=d[_];if(null==g.value)break;var y=g.name.name;if(!y||!y.length)break;if(y in h)break;h[y]=!0;var E=a.find_variable&&a.find_variable(y);if(E&&E.references&&1===E.references.length&&"arguments"!=y){var F=E.references[0];if(F.scope.uses_eval||F.scope.uses_with)break;if(g.value instanceof Pn||!g.value.is_constant(t)){if(!(D|=m))if(F.scope.get_defun_scope()===a){var w=new b(function(e){e instanceof Mn&&o(e,w.parent())&&(v[e.name]=m=!0)});g.value.walk(w);var C=!1,k=new j(function(e){if(C)return e;var n=k.parent();return e instanceof me||e instanceof Ne||e instanceof le||e instanceof ze||e instanceof ie||n instanceof $e&&e!==n.condition||n instanceof on&&e!==n.condition||n instanceof rn&&("&&"==n.operator||"||"==n.operator)&&e===n.right||n instanceof Oe&&e!==n.expression?(D=C=!0,e):void 0},function(e){return C?e:e===F?(C=!0,u(e,k.parent(),!1)):(D|=e.has_side_effects(t))?(C=!0,e):m&&e instanceof Mn&&e.name in v?(D=!0,C=!0,e):void 0});f.transform(k)}else D|=g.value.has_side_effects(t)}else{var x=new j(function(e){if(e===F)return u(e,x.parent(),!0)});f.transform(x)}}else D=!0}}}}if(s)for(var B=e.length;--B>=0;)e.length>1&&e[B]instanceof ne&&e.splice(B,1);return e}function o(e){function r(e){return/@ngInject/.test(e.value)}function i(e){var r=!1;return e.argnames.map(function(e){return e instanceof be&&(t.warn("Function with destructuring arguments marked with @ngInject [{file}:{line},{col}]",token),r=!0),r?null:n(In,e,{value:e.name})}).filter(function(e){return null!==e})}function o(e,t){return n(an,e,{elements:t})}function u(e,t){return n(K,e,{body:n(un,e,{operator:"=",left:n(Ke,t,{expression:n(Mn,t,t),property:"$inject"}),right:o(e,i(e))})})}function a(e){e&&e.args&&(e.args.forEach(function(e,n,t){var u=e.start.comments_before;e instanceof me&&u.length&&r(u[0])&&(t[n]=o(e,i(e).concat(e)))}),e.expression&&e.expression.expression&&a(e.expression.expression))}return e.reduce(function(e,n){if(e.push(n),n.body&&n.body.args)a(n.body);else{var i=n.start,o=i.comments_before;if(o&&o.length>0){var s=o.pop();r(s)&&(n instanceof ye?e.push(u(n,n.name)):n instanceof Ie?n.definitions.forEach(function(n){n.value&&n.value instanceof me&&e.push(u(n.value,n.name))}):t.warn("Unknown statement marked with @ngInject [{file}:{line},{col}]",i))}}return e},[])}function a(e){var n=[];return e.reduce(function(e,t){return t instanceof ee&&m(t.body,s)?(A=!0,e.push.apply(e,a(t.body))):t instanceof ne?A=!0:t instanceof Z?n.indexOf(t.value)<0?(e.push(t),n.push(t.value)):A=!0:e.push(t),e},[])}function f(e,t){function r(e){for(var n=0,t=e.length;--t>=0;){var r=e[t];if(r instanceof $e&&r.body instanceof ke&&++n>1)return!0}return!1}var i=t.self(),o=r(e),a=i instanceof me,s=[];e:for(var f=e.length;--f>=0;){var p=e[f];switch(!0){case a&&p instanceof ke&&!p.value&&0==s.length:A=!0;continue e;case p instanceof $e:if(p.body instanceof ke){if((a&&0==s.length||s[0]instanceof ke&&!s[0].value)&&!p.body.value&&!p.alternative){A=!0;var h=n(K,p.condition,{body:p.condition});s.unshift(h);continue e}if(s[0]instanceof ke&&p.body.value&&s[0].value&&!p.alternative){A=!0,p=p.clone(),p.alternative=s[0],s[0]=p.transform(t);continue e}if(o&&(0==s.length||s[0]instanceof ke)&&p.body.value&&!p.alternative&&a){A=!0,p=p.clone(),p.alternative=s[0]||n(ke,p,{value:n(Wn,p)}),s[0]=p.transform(t);continue e}if(!p.body.value&&a){A=!0,p=p.clone(),p.condition=p.condition.negate(t);var D=u(p.alternative).concat(s),m=l(D);p.body=n(ee,p,{body:D}),p.alternative=null,s=m.concat([p.transform(t)]);continue e}if(t.option("sequences")&&1==s.length&&a&&s[0]instanceof K&&(!p.alternative||p.alternative instanceof K)){A=!0,s.push(n(ke,s[0],{value:n(Wn,s[0])}).transform(t)),s=u(p.alternative).concat(s),s.unshift(p);continue e}}var v=E(p.body),_=v instanceof Be?t.loopcontrol_target(v.label):null;if(v&&(v instanceof ke&&!v.value&&a||v instanceof Te&&i===c(_)||v instanceof Se&&_ instanceof ee&&i===_)){v.label&&d(v.label.thedef.references,v),A=!0;var D=u(p.body).slice(0,-1);p=p.clone(),p.condition=p.condition.negate(t),p.body=n(ee,p,{body:u(p.alternative).concat(s)}),p.alternative=n(ee,p,{body:D}),s=[p.transform(t)];continue e}var v=E(p.alternative),_=v instanceof Be?t.loopcontrol_target(v.label):null;if(v&&(v instanceof ke&&!v.value&&a||v instanceof Te&&i===c(_)||v instanceof Se&&_ instanceof ee&&i===_)){v.label&&d(v.label.thedef.references,v),A=!0,p=p.clone(),p.body=n(ee,p.body,{body:u(p.body).concat(s)}),p.alternative=n(ee,p.alternative,{body:u(p.alternative).slice(0,-1)}),s=[p.transform(t)];continue e}s.unshift(p);break;default:s.unshift(p)}}return s}function p(e,n){var t=!1,r=e.length,i=n.self();return e=e.reduce(function(e,r){if(t)g(n,r,e);else{if(r instanceof Be){var o=n.loopcontrol_target(r.label);r instanceof Se&&o instanceof ee&&c(o)===i||r instanceof Te&&c(o)===i?r.label&&d(r.label.thedef.references,r):e.push(r)}else e.push(r);E(r)&&(t=!0)}return e},[]),A=e.length!=r,e}function h(e,t){function r(){i=Je.from_array(i),i&&o.push(n(K,i,{body:i})),i=[]}if(e.length<2)return e;var i=[],o=[];return e.forEach(function(e){e instanceof K&&D(i)<t.sequences_limit?i.push(e.body):(r(),o.push(e))}),r(),o=v(o,t),A=o.length!=e.length,o}function D(e){for(var n=0,t=0;t<e.length;++t){var r=e[t];r instanceof Je?n+=r.len():n++}return n}function v(e,t){function r(e){i.pop();var n=o.body;return n instanceof Je?n.add(e):n=Je.cons(n,e),n.transform(t)}var i=[],o=null;return e.forEach(function(e){if(o)if(e instanceof se){var t={};try{o.body.walk(new b(function(e){if(e instanceof rn&&"in"==e.operator)throw t})),!e.init||e.init instanceof Ie?e.init||(e.init=o.body,i.pop()):e.init=r(e.init)}catch(e){if(e!==t)throw e}}else e instanceof $e?e.condition=r(e.condition):e instanceof le?e.expression=r(e.expression):e instanceof Ce&&e.value?e.value=r(e.value):e instanceof Ce?e.value=r(n(Wn,e)):e instanceof Oe&&(e.expression=r(e.expression));i.push(e),o=e instanceof K?e:null}),i}function _(e,n){var t=null;return e.reduce(function(e,n){return n instanceof Ie&&t&&t.TYPE==n.TYPE?(t.definitions=t.definitions.concat(n.definitions),A=!0):n instanceof se&&t instanceof Ue&&(!n.init||n.init.TYPE==t.TYPE)?(A=!0,e.pop(),n.init?n.init.definitions=t.definitions.concat(n.init.definitions):n.init=t,e.push(n),t=n):(t=n,e.push(n)),e},[])}function y(e,t){function r(e){return e instanceof Xe&&(e.expression instanceof _e||r(e.expression))}e.forEach(function(e){e instanceof K&&(e.body=function e(t){return t.transform(new j(function(t){if(t instanceof Ge)return t;if(r(t))return n(nn,t,{operator:"!",expression:t});if(t instanceof Xe)t.expression=e(t.expression);else if(t instanceof Je)t.car=e(t.car);else if(t instanceof on){var i=e(t.condition);if(i!==t.condition){t.condition=i;var o=t.consequent;t.consequent=t.alternative,t.alternative=o}}return t}))}(e.body))})}var A,F=10;do A=!1,t.option("angular")&&(e=o(e)),e=a(e),t.option("dead_code")&&(e=p(e,t)),t.option("if_return")&&(e=f(e,t)),t.sequences_limit>0&&(e=h(e,t)),t.option("join_vars")&&(e=_(e,t)),t.option("collapse_vars")&&(e=i(e,t));while(A&&F-- >0);return t.option("negate_iife")&&y(e,t),e}function l(e){for(var n=[],t=e.length-1;t>=0;--t){var r=e[t];r instanceof ye&&(e.splice(t,1),n.unshift(r))}return n}function g(e,n,t){n instanceof ye||e.warn("Dropping unreachable code [{file}:{line},{col}]",n.start),n.walk(new b(function(n){return n instanceof Ue?(e.warn("Declarations in unreachable code! [{file}:{line},{col}]",n.start),n.remove_initializers(),t.push(n),!0):n instanceof ye?(t.push(n),!0):n instanceof pe||void 0}))}function y(e,n){return e.print_to_string().length>n.print_to_string().length?n:e}function E(e){return e&&e.aborts()}function A(e,t){function r(r){r=u(r),e.body instanceof ee?(e.body=e.body.clone(),e.body.body=r.concat(e.body.body.slice(1)),e.body=e.body.transform(t)):e.body=n(ee,e.body,{body:r}).transform(t),A(e,t)}var i=e.body instanceof ee?e.body.body[0]:e.body;i instanceof $e&&(i.body instanceof Se&&t.loopcontrol_target(i.body.label)===e?(e.condition?e.condition=n(rn,e.condition,{left:e.condition,operator:"&&",right:i.condition.negate(t)}):e.condition=i.condition.negate(t),r(i.alternative)):i.alternative instanceof Se&&t.loopcontrol_target(i.alternative.label)===e&&(e.condition?e.condition=n(rn,e.condition,{left:e.condition,operator:"&&",right:i.condition}):e.condition=i.condition,r(i.body)))}function F(e,n){var t=n.option("pure_getters");n.options.pure_getters=!1;var r=e.has_side_effects(n);return n.options.pure_getters=t,r}function w(e,t){return t.option("booleans")&&t.in_boolean_context()&&!e.has_side_effects(t)?n(Zn,e):e}e(X,function(e,n){return e}),X.DEFMETHOD("equivalent_to",function(e){return this.print_to_string()==e.print_to_string()}),X.DEFMETHOD("clear_opt_flags",function(){this.walk(new b(function(e){e instanceof Z||e instanceof jn||(e._squeezed=!1,e._optimized=!1)}))}),function(e){var n=["!","delete"],t=["in","instanceof","==","!=","===","!==","<","<=",">=",">"];e(X,function(){return!1}),e(nn,function(){return i(this.operator,n)}),e(rn,function(){return i(this.operator,t)||("&&"==this.operator||"||"==this.operator)&&this.left.is_boolean()&&this.right.is_boolean()}),e(on,function(){return this.consequent.is_boolean()&&this.alternative.is_boolean()}),e(un,function(){return"="==this.operator&&this.right.is_boolean()}),e(Je,function(){return this.cdr.is_boolean()}),e(Zn,function(){return!0}),e(Jn,function(){return!0})}(function(e,n){e.DEFMETHOD("is_boolean",n)}),function(e){e(X,function(){return!1}),e(In,function(){return!0}),e(Ae,function(){return 1===this.segments.length}),e(nn,function(){return"typeof"==this.operator}),e(rn,function(e){return"+"==this.operator&&(this.left.is_string(e)||this.right.is_string(e))}),e(un,function(e){return("="==this.operator||"+="==this.operator)&&this.right.is_string(e)}),e(Je,function(e){return this.cdr.is_string(e)}),e(on,function(e){return this.consequent.is_string(e)&&this.alternative.is_string(e)}),e(Xe,function(e){return e.option("unsafe")&&this.expression instanceof Mn&&"String"==this.expression.name&&this.expression.undeclared()})}(function(e,n){e.DEFMETHOD("is_string",n)}),function(e){function n(e,n){if(!n)throw new Error("Compressor must be passed");return e._eval(n)}X.DEFMETHOD("evaluate",function(n){if(!n.option("evaluate"))return[this];try{var r=this._eval(n);return[y(t(n,r,this),this),r]}catch(n){if(n!==e)throw n;return[this]}}),X.DEFMETHOD("is_constant",function(e){return this instanceof jn||this instanceof nn&&"!"==this.operator&&this.expression instanceof jn||this.evaluate(e).length>1}),X.DEFMETHOD("constant_value",function(e){if(this instanceof jn)return this.value;if(this instanceof nn&&"!"==this.operator&&this.expression instanceof jn)return!this.expression.value;var n=this.evaluate(e);return n.length>1?n[1]:void 0}),e(G,function(){throw new Error(p("Cannot evaluate a statement [{file}:{line},{col}]",this.start))}),e(_e,function(){throw e}),e(ge,function(){throw e}),e(hn,function(){throw e}),e(X,function(){throw e}),e(jn,function(){return this.getValue()}),e(Ae,function(){if(1!==this.segments.length)throw e;return this.segments[0].value}),e(nn,function(t){var r=this.expression;switch(this.operator){case"!":return!n(r,t);case"typeof":if(r instanceof _e||r instanceof ge)return"function";if(r=n(r,t),r instanceof RegExp)throw e;return typeof r;case"void":return void n(r,t);case"~":return~n(r,t);case"-":return-n(r,t);case"+":return+n(r,t)}throw e}),e(rn,function(t){var r,i=this.left,o=this.right;switch(this.operator){case"&&":r=n(i,t)&&n(o,t);break;case"||":r=n(i,t)||n(o,t);break;case"|":r=n(i,t)|n(o,t);break;case"&":r=n(i,t)&n(o,t);break;case"^":r=n(i,t)^n(o,t);break;case"+":r=n(i,t)+n(o,t);break;case"*":
	r=n(i,t)*n(o,t);break;case"**":r=Math.pow(n(i,t),n(o,t));break;case"/":r=n(i,t)/n(o,t);break;case"%":r=n(i,t)%n(o,t);break;case"-":r=n(i,t)-n(o,t);break;case"<<":r=n(i,t)<<n(o,t);break;case">>":r=n(i,t)>>n(o,t);break;case">>>":r=n(i,t)>>>n(o,t);break;case"==":r=n(i,t)==n(o,t);break;case"===":r=n(i,t)===n(o,t);break;case"!=":r=n(i,t)!=n(o,t);break;case"!==":r=n(i,t)!==n(o,t);break;case"<":r=n(i,t)<n(o,t);break;case"<=":r=n(i,t)<=n(o,t);break;case">":r=n(i,t)>n(o,t);break;case">=":r=n(i,t)>=n(o,t);break;default:throw e}if(isNaN(r)&&t.find_parent(le))throw e;return r}),e(on,function(e){return n(this.condition,e)?n(this.consequent,e):n(this.alternative,e)}),e(Mn,function(t){if(this._evaluating)throw e;this._evaluating=!0;try{var r=this.definition();if(r&&(r.constant||t.option("reduce_vars")&&!r.modified)&&r.init)return n(r.init,t)}finally{this._evaluating=!1}throw e}),e(Ke,function(t){if(t.option("unsafe")&&"length"==this.property){var r=n(this.expression,t);if("string"==typeof r)return r.length}throw e})}(function(e,n){e.DEFMETHOD("_eval",n)}),function(e){function t(e){return n(nn,e,{operator:"!",expression:e})}e(X,function(){return t(this)}),e(G,function(){throw new Error("Cannot negate a statement")}),e(_e,function(){return t(this)}),e(nn,function(){return"!"==this.operator?this.expression:t(this)}),e(Je,function(e){var n=this.clone();return n.cdr=n.cdr.negate(e),n}),e(on,function(e){var n=this.clone();return n.consequent=n.consequent.negate(e),n.alternative=n.alternative.negate(e),y(t(this),n)}),e(rn,function(e){var n=this.clone(),r=this.operator;if(e.option("unsafe_comps"))switch(r){case"<=":return n.operator=">",n;case"<":return n.operator=">=",n;case">=":return n.operator="<",n;case">":return n.operator="<=",n}switch(r){case"==":return n.operator="!=",n;case"!=":return n.operator="==",n;case"===":return n.operator="!==",n;case"!==":return n.operator="===",n;case"&&":return n.operator="||",n.left=n.left.negate(e),n.right=n.right.negate(e),y(t(this),n);case"||":return n.operator="&&",n.left=n.left.negate(e),n.right=n.right.negate(e),y(t(this),n)}return t(this)})}(function(e,n){e.DEFMETHOD("negate",function(e){return n.call(this,e)})}),function(e){e(X,function(e){return!0}),e(ne,function(e){return!1}),e(jn,function(e){return!1}),e(Nn,function(e){return!1}),e(Xe,function(e){var n=e.option("pure_funcs");return!n||("function"==typeof n?n(this):n.indexOf(this.expression.print_to_string())<0)}),e(Q,function(e){for(var n=this.body.length;--n>=0;)if(this.body[n].has_side_effects(e))return!0;return!1}),e(K,function(e){return this.body.has_side_effects(e)}),e(ye,function(e){return!0}),e(_e,function(e){return!1}),e(hn,function(e){return!1}),e(Dn,function(e){return!0}),e(rn,function(e){return this.left.has_side_effects(e)||this.right.has_side_effects(e)}),e(un,function(e){return!0}),e(on,function(e){return this.condition.has_side_effects(e)||this.consequent.has_side_effects(e)||this.alternative.has_side_effects(e)}),e(en,function(e){return i(this.operator,["delete","++","--"])||this.expression.has_side_effects(e)}),e(Mn,function(e){return this.global()&&this.undeclared()}),e(sn,function(e){for(var n=this.properties.length;--n>=0;)if(this.properties[n].has_side_effects(e))return!0;return!1}),e(cn,function(e){return!!(this.key instanceof fn&&this.key.has_side_effects(e))||this.value.has_side_effects(e)}),e(an,function(e){for(var n=this.elements.length;--n>=0;)if(this.elements[n].has_side_effects(e))return!0;return!1}),e(Ke,function(e){return!e.option("pure_getters")||this.expression.has_side_effects(e)}),e(Qe,function(e){return!e.option("pure_getters")||(this.expression.has_side_effects(e)||this.property.has_side_effects(e))}),e(Ze,function(e){return!e.option("pure_getters")}),e(Je,function(e){return this.car.has_side_effects(e)||this.cdr.has_side_effects(e)})}(function(e,n){e.DEFMETHOD("has_side_effects",n)}),function(e){function n(){var e=this.body.length;return e>0&&E(this.body[e-1])}e(G,function(){return null}),e(we,function(){return this}),e(Ve,function(){return null}),e(ee,n),e(qe,n),e($e,function(){return this.alternative&&E(this.body)&&E(this.alternative)&&this})}(function(e,n){e.DEFMETHOD("aborts",n)}),e(Z,function(e,t){return"up"===t.has_directive(e.value)?n(ne,e):e}),e(J,function(e,t){return t.option("drop_debugger")?n(ne,e):e}),e(re,function(e,t){return e.body instanceof Se&&t.loopcontrol_target(e.body.label)===e.body?n(ne,e):0==e.label.references.length?e.body:e}),e(Q,function(e,n){return e.body instanceof X?e:(e.body=f(e.body,n),e)}),e(ee,function(e,t){switch(e.body=f(e.body,t),e.body.length){case 1:if(s(e.body[0]))return e.body[0];break;case 0:return n(ne,e)}return e}),pe.DEFMETHOD("drop_unused",function(e){var t=this;if(e.has_directive("use asm"))return t;if(e.option("unused")&&!t.uses_eval&&!t.uses_with){var r=[],i={},o=new v,u=this,a=new b(function(n,s){if(n!==t){if(n instanceof ye||n instanceof Dn)return o.add(n.name.name,n),!0;if(n instanceof Ie&&u===t)return n.definitions.forEach(function(n){n.is_destructuring()||n.value&&(o.add(n.name.name,n.value),n.value.has_side_effects(e)&&n.value.walk(a))}),!0;if(n instanceof Mn){var c=n.definition();return c.id in i||(i[c.id]=!0,r.push(c)),!0}if(n instanceof pe){var f=u;return u=n,s(),u=f,!0}}});t.walk(a);for(var c=0;c<r.length;++c)r[c].orig.forEach(function(e){var n=o.get(e.name);n&&n.forEach(function(e){var n=new b(function(e){if(e instanceof Mn){var n=e.definition();n.id in i||(i[n.id]=!0,r.push(n))}});e.walk(n)})});var f=new j(function(r,o,u){if(r instanceof me&&!(r instanceof ve)&&!e.option("keep_fargs"))for(var a=r.argnames,c=a.length;--c>=0&&!(a[c]instanceof be);){var l=a[c];if(l instanceof he&&(l=l.symbol),!l.unreferenced())break;a.pop(),e.warn("Dropping unused function argument {name} [{file}:{line},{col}]",{name:l.name,file:l.start.file,line:l.start.line,col:l.start.col})}if((r instanceof ye||r instanceof Dn)&&r!==t){var p=r.name.definition().id in i||r.name.definition().global;return p?r:(e.warn("Dropping unused function {name} [{file}:{line},{col}]",{name:r.name.name,file:r.name.start.file,line:r.name.start.line,col:r.name.start.col}),n(ne,r))}if(r instanceof Ie&&!(f.parent()instanceof ce)){var d=r.definitions.filter(function(n){if(n.is_destructuring())return!0;if(n.name.definition().id in i)return!0;if(n.name.definition().global)return!0;var t={name:n.name.name,file:n.name.start.file,line:n.name.start.line,col:n.name.start.col};return n.value&&n.value.has_side_effects(e)?(n._unused_side_effects=!0,e.warn("Side effects in initialization of unused variable {name} [{file}:{line},{col}]",t),!0):(e.warn("Dropping unused variable {name} [{file}:{line},{col}]",t),!1)});d=h(d,function(e,n){return!e.value&&n.value?-1:!n.value&&e.value?1:0});for(var D=[],c=0;c<d.length;){var v=d[c];v._unused_side_effects?(D.push(v.value),d.splice(c,1)):(D.length>0&&(D.push(v.value),v.value=Je.from_array(D),D=[]),++c)}return D=D.length>0?n(ee,r,{body:[n(K,r,{body:Je.from_array(D)})]}):null,0!=d.length||D?0==d.length?u?W.splice(D.body):D:(r.definitions=d,D?(D.body.unshift(r),u?W.splice(D.body):D):r):n(ne,r)}if(r instanceof se&&(o(r,this),r.init instanceof ee)){var _=r.init.body.slice(0,-1);return r.init=r.init.body.slice(-1)[0].body,_.push(r),u?W.splice(_):n(ee,r,{body:_})}return r instanceof ee&&(o(r,this),u&&m(r.body,s))?W.splice(r.body):r instanceof pe&&r!==t?r:void 0});t.transform(f)}}),pe.DEFMETHOD("hoist_declarations",function(e){var t=this;if(e.has_directive("use asm"))return t;if(!Array.isArray(t.body))return t;var r=e.option("hoist_funs"),i=e.option("hoist_vars");if(r||i){var u=[],a=[],s=new v,c=0,f=0;t.walk(new b(function(e){return e instanceof pe&&e!==t||(e instanceof Ue?(++f,!0):void 0)})),i=i&&f>1;var l=new j(function(e){if(e!==t){if(e instanceof Z)return u.push(e),n(ne,e);if(e instanceof ye&&r)return a.push(e),n(ne,e);if(e instanceof Ue&&i){e.definitions.forEach(function(e){e.is_destructuring()||(s.set(e.name.name,e),++c)});var o=e.to_assignments(),f=l.parent();if(f instanceof ce&&f.init===e){if(null==o){var p=e.definitions[0].name;return n(Mn,p,p)}return o}return f instanceof se&&f.init===e?o:o?n(K,e,{body:o}):n(ne,e)}if(e instanceof pe)return e}});if(t=t.transform(l),c>0){var p=[];if(s.each(function(e,n){t instanceof me&&o(function(n){return n.name==e.name.name},t.args_as_names())?s.del(n):(e=e.clone(),e.value=null,p.push(e),s.set(n,e))}),p.length>0){for(var h=0;h<t.body.length;){if(t.body[h]instanceof K){var D,m,_=t.body[h].body;if(_ instanceof un&&"="==_.operator&&(D=_.left)instanceof vn&&s.has(D.name)){var g=s.get(D.name);if(g.value)break;g.value=_.right,d(p,g),p.push(g),t.body.splice(h,1);continue}if(_ instanceof Je&&(m=_.car)instanceof un&&"="==m.operator&&(D=m.left)instanceof vn&&s.has(D.name)){var g=s.get(D.name);if(g.value)break;g.value=m.right,d(p,g),p.push(g),t.body[h].body=_.cdr;continue}}if(t.body[h]instanceof ne)t.body.splice(h,1);else{if(!(t.body[h]instanceof ee))break;var y=[h,1].concat(t.body[h].body);t.body.splice.apply(t.body,y)}}p=n(Ue,t,{definitions:p}),a.push(p)}}t.body=u.concat(a,t.body)}return t}),e(K,function(e,t){return t.option("side_effects")&&!e.body.has_side_effects(t)?(t.warn("Dropping side-effect-free statement [{file}:{line},{col}]",e.start),n(ne,e)):e}),e(oe,function(e,t){var r=e.condition.evaluate(t);if(e.condition=r[0],!t.option("loops"))return e;if(r.length>1){if(r[1])return n(se,e,{body:e.body});if(e instanceof ae&&t.option("dead_code")){var i=[];return g(t,e.body,i),n(ee,e,{body:i})}}return e}),e(ae,function(e,t){return t.option("loops")?(e=oe.prototype.optimize.call(e,t),e instanceof ae&&(A(e,t),e=n(se,e,e).transform(t)),e):e}),e(se,function(e,t){var r=e.condition;if(r&&(r=r.evaluate(t),e.condition=r[0]),!t.option("loops"))return e;if(r&&r.length>1&&!r[1]&&t.option("dead_code")){var i=[];return e.init instanceof G?i.push(e.init):e.init&&i.push(n(K,e.init,{body:e.init})),g(t,e.body,i),n(ee,e,{body:i})}return A(e,t),e}),e($e,function(e,t){if(!t.option("conditionals"))return e;var r=e.condition.evaluate(t);if(e.condition=r[0],r.length>1)if(r[1]){if(t.warn("Condition always true [{file}:{line},{col}]",e.condition.start),t.option("dead_code")){var i=[];return e.alternative&&g(t,e.alternative,i),i.push(e.body),n(ee,e,{body:i}).transform(t)}}else if(t.warn("Condition always false [{file}:{line},{col}]",e.condition.start),t.option("dead_code")){var i=[];return g(t,e.body,i),e.alternative&&i.push(e.alternative),n(ee,e,{body:i}).transform(t)}a(e.alternative)&&(e.alternative=null);var o=e.condition.negate(t),u=e.condition.print_to_string().length,s=o.print_to_string().length,c=s<u;if(e.alternative&&c){c=!1,e.condition=o;var f=e.body;e.body=e.alternative||n(ne),e.alternative=f}if(a(e.body)&&a(e.alternative))return n(K,e.condition,{body:e.condition}).transform(t);if(e.body instanceof K&&e.alternative instanceof K)return n(K,e,{body:n(on,e,{condition:e.condition,consequent:e.body.body,alternative:e.alternative.body})}).transform(t);if(a(e.alternative)&&e.body instanceof K)return u===s&&!c&&e.condition instanceof rn&&"||"==e.condition.operator&&(c=!0),c?n(K,e,{body:n(rn,e,{operator:"||",left:o,right:e.body.body})}).transform(t):n(K,e,{body:n(rn,e,{operator:"&&",left:e.condition,right:e.body.body})}).transform(t);if(e.body instanceof ne&&e.alternative&&e.alternative instanceof K)return n(K,e,{body:n(rn,e,{operator:"||",left:e.condition,right:e.alternative.body})}).transform(t);if(e.body instanceof Ce&&e.alternative instanceof Ce&&e.body.TYPE==e.alternative.TYPE)return n(e.body.CTOR,e,{value:n(on,e,{condition:e.condition,consequent:e.body.value||n(Wn,e.body).optimize(t),alternative:e.alternative.value||n(Wn,e.alternative).optimize(t)})}).transform(t);if(e.body instanceof $e&&!e.body.alternative&&!e.alternative&&(e.condition=n(rn,e.condition,{operator:"&&",left:e.condition,right:e.body.condition}).transform(t),e.body=e.body.body),E(e.body)&&e.alternative){var l=e.alternative;return e.alternative=null,n(ee,e,{body:[e,l]}).transform(t)}if(E(e.alternative)){var p=e.body;return e.body=e.alternative,e.condition=c?o:e.condition.negate(t),e.alternative=null,n(ee,e,{body:[e,p]}).transform(t)}return e}),e(Oe,function(e,t){if(0==e.body.length&&t.option("conditionals"))return n(K,e,{body:e.expression}).transform(t);for(;;){var r=e.body[e.body.length-1];if(r){var i=r.body[r.body.length-1];if(i instanceof Se&&c(t.loopcontrol_target(i.label))===e&&r.body.pop(),r instanceof Me&&0==r.body.length){e.body.pop();continue}}break}var o=e.expression.evaluate(t);e:if(2==o.length)try{if(e.expression=o[0],!t.option("dead_code"))break e;var u=o[1],a=!1,s=!1,f=!1,l=!1,p=!1,d=new j(function(r,i,o){if(r instanceof me||r instanceof K)return r;if(r instanceof Oe&&r===e)return r=r.clone(),i(r,this),p?r:n(ee,r,{body:r.body.reduce(function(e,n){return e.concat(n.body)},[])}).transform(t);if(r instanceof $e||r instanceof Ne){var c=a;return a=!s,i(r,this),a=c,r}if(r instanceof te||r instanceof Oe){var c=s;return s=!0,i(r,this),s=c,r}if(r instanceof Se&&this.loopcontrol_target(r.label)===e)return a?(p=!0,r):s?r:(l=!0,o?W.skip:n(ne,r));if(r instanceof qe&&this.parent()===e){if(l)return W.skip;if(r instanceof ze){var d=r.expression.evaluate(t);if(d.length<2)throw e;return d[1]===u||f?(f=!0,E(r)&&(l=!0),i(r,this),r):W.skip}return i(r,this),r}});d.stack=t.stack.slice(),e=e.transform(d)}catch(n){if(n!==e)throw n}return e}),e(ze,function(e,n){return e.body=f(e.body,n),e}),e(Ne,function(e,n){return e.body=f(e.body,n),e}),Ie.DEFMETHOD("remove_initializers",function(){this.definitions.forEach(function(e){e.value=null})}),Ie.DEFMETHOD("to_assignments",function(){var e=this.definitions.reduce(function(e,t){if(t.value&&!t.is_destructuring()){var r=n(Mn,t.name,t.name);e.push(n(un,t,{operator:"=",left:r,right:t.value}))}else if(t.value){var i=n(Ye,t,{name:t.name,value:t.value}),o=n(Ue,t,{definitions:[i]});e.push(o)}return e},[]);return 0==e.length?null:Je.from_array(e)}),e(Ie,function(e,t){return 0==e.definitions.length?n(ne,e):e}),e(Ve,function(e,n){return e}),e(_e,function(e,n){return e=me.prototype.optimize.call(e,n),n.option("unused")&&!n.option("keep_fnames")&&e.name&&e.name.unreferenced()&&(e.name=null),e}),e(Xe,function(e,r){if(r.option("unsafe")){var i=e.expression;if(i instanceof Mn&&i.undeclared())switch(i.name){case"Array":if(1!=e.args.length)return n(an,e,{elements:e.args}).transform(r);break;case"Object":if(0==e.args.length)return n(sn,e,{properties:[]});break;case"String":if(0==e.args.length)return n(In,e,{value:""});if(e.args.length<=1)return n(rn,e,{left:e.args[0],operator:"+",right:n(In,e,{value:""})}).transform(r);break;case"Number":if(0==e.args.length)return n(Un,e,{value:0});if(1==e.args.length)return n(nn,e,{expression:e.args[0],operator:"+"}).transform(r);case"Boolean":if(0==e.args.length)return n(Jn,e);if(1==e.args.length)return n(nn,e,{expression:n(nn,null,{expression:e.args[0],operator:"!"}),operator:"!"}).transform(r);break;case"Function":if(0==e.args.length)return n(_e,e,{argnames:[],body:[]});if(m(e.args,function(e){return e instanceof In}))try{var o="(function("+e.args.slice(0,-1).map(function(e){return e.value}).join(",")+"){"+e.args[e.args.length-1].value+"})()",u=H(o);u.figure_out_scope({screw_ie8:r.option("screw_ie8")});var a=new P(r.options);u=u.transform(a),u.figure_out_scope({screw_ie8:r.option("screw_ie8")}),u.mangle_names();var s;try{u.walk(new b(function(e){if(e instanceof me)throw s=e,u}))}catch(e){if(e!==u)throw e}if(!s)return e;var c=s.argnames.map(function(t,r){return n(In,e.args[r],{value:t.print_to_string()})}),o=U();return ee.prototype._codegen.call(s,s,o),o=o.toString().replace(/^\{|\}$/g,""),c.push(n(In,e.args[e.args.length-1],{value:o})),e.args=c,e}catch(n){if(!(n instanceof q))throw console.log(n),n;r.warn("Error parsing code passed to new Function [{file}:{line},{col}]",e.args[e.args.length-1].start),r.warn(n.toString())}break;case"Symbol":return e.args=[],e}else{if(i instanceof Ke&&"toString"==i.property&&0==e.args.length)return n(rn,e,{left:n(In,e,{value:""}),operator:"+",right:i.expression}).transform(r);if(i instanceof Ke&&i.expression instanceof an&&"join"==i.property){var f=0==e.args.length?",":e.args[0].evaluate(r)[1];if(null!=f){var l=i.expression.elements.reduce(function(e,n){if(n=n.evaluate(r),0==e.length||1==n.length)e.push(n);else{var i=e[e.length-1];if(2==i.length){var o=""+i[1]+f+n[1];e[e.length-1]=[t(r,o,i[0]),o]}else e.push(n)}return e},[]);if(0==l.length)return n(In,e,{value:""});if(1==l.length)return l[0][0];if(""==f){var p;return p=l[0][0]instanceof In||l[1][0]instanceof In?l.shift()[0]:n(In,e,{value:""}),l.reduce(function(e,t){return n(rn,t[0],{operator:"+",left:e,right:t[0]})},p).transform(r)}var d=e.clone();return d.expression=d.expression.clone(),d.expression.expression=d.expression.expression.clone(),d.expression.expression.elements=l.map(function(e){return e[0]}),y(e,d)}}}}if(r.option("side_effects")&&e.expression instanceof _e&&!e.expression.is_generator&&0==e.args.length&&!Q.prototype.has_side_effects.call(e.expression,r))return n(Wn,e).transform(r);if(r.option("drop_console")&&e.expression instanceof Ze){for(var h=e.expression.expression;h.expression;)h=h.expression;if(h instanceof Mn&&"console"==h.name&&h.undeclared())return n(Wn,e).transform(r)}return e.evaluate(r)[0]}),e(Ge,function(e,t){if(t.option("unsafe")){var r=e.expression;if(r instanceof Mn&&r.undeclared())switch(r.name){case"Object":case"RegExp":case"Function":case"Error":case"Array":return n(Xe,e,e).transform(t)}}return e}),e(Je,function(e,t){if(!t.option("side_effects"))return e;if(!e.car.has_side_effects(t))return r(t.parent(),e,e.cdr);if(t.option("cascade")){if(e.car instanceof un&&!e.car.left.has_side_effects(t)){if(e.car.left.equivalent_to(e.cdr))return e.car;if(e.cdr instanceof Xe&&e.cdr.expression.equivalent_to(e.car.left))return e.cdr.expression=e.car,e.cdr}if(!e.car.has_side_effects(t)&&!e.cdr.has_side_effects(t)&&e.car.equivalent_to(e.cdr))return e.car}return e.cdr instanceof nn&&"void"==e.cdr.operator&&!e.cdr.expression.has_side_effects(t)?(e.cdr.expression=e.car,e.cdr):e.cdr instanceof Wn?n(nn,e,{operator:"void",expression:e.car}):e}),en.DEFMETHOD("lift_sequences",function(e){if(e.option("sequences")&&this.expression instanceof Je){var n=this.expression,t=n.to_array();return this.expression=t.pop(),t.push(this),n=Je.from_array(t).transform(e)}return this}),e(tn,function(e,n){return e.lift_sequences(n)}),e(nn,function(e,t){e=e.lift_sequences(t);var r=e.expression;if(t.option("booleans")&&t.in_boolean_context()){switch(e.operator){case"!":if(r instanceof nn&&"!"==r.operator)return r.expression;break;case"typeof":return t.warn("Boolean expression always true [{file}:{line},{col}]",e.start),e.expression.has_side_effects(t)?n(Je,e,{car:e.expression,cdr:n(Zn,e)}):n(Zn,e)}r instanceof rn&&"!"==e.operator&&(e=y(e,r.negate(t)))}return e.evaluate(t)[0]}),rn.DEFMETHOD("lift_sequences",function(e){if(e.option("sequences")){if(this.left instanceof Je){var n=this.left,t=n.to_array();return this.left=t.pop(),t.push(this),n=Je.from_array(t).transform(e)}if(this.right instanceof Je&&this instanceof un&&!F(this.left,e)){var n=this.right,t=n.to_array();return this.right=t.pop(),t.push(this),n=Je.from_array(t).transform(e)}}return this});var C=D("== === != !== * & | ^");e(rn,function(e,t){function i(n,r){if(r||!e.left.has_side_effects(t)&&!e.right.has_side_effects(t)){n&&(e.operator=n);var i=e.left;e.left=e.right,e.right=i}}if(C(e.operator)&&(e.right instanceof jn&&!(e.left instanceof jn)&&(e.left instanceof rn&&bt[e.left.operator]>=bt[e.operator]||i(null,!0)),/^[!=]==?$/.test(e.operator))){if(e.left instanceof Mn&&e.right instanceof on){if(e.right.consequent instanceof Mn&&e.right.consequent.definition()===e.left.definition()){if(/^==/.test(e.operator))return e.right.condition;if(/^!=/.test(e.operator))return e.right.condition.negate(t)}if(e.right.alternative instanceof Mn&&e.right.alternative.definition()===e.left.definition()){if(/^==/.test(e.operator))return e.right.condition.negate(t);if(/^!=/.test(e.operator))return e.right.condition}}if(e.right instanceof Mn&&e.left instanceof on){if(e.left.consequent instanceof Mn&&e.left.consequent.definition()===e.right.definition()){if(/^==/.test(e.operator))return e.left.condition;if(/^!=/.test(e.operator))return e.left.condition.negate(t)}if(e.left.alternative instanceof Mn&&e.left.alternative.definition()===e.right.definition()){if(/^==/.test(e.operator))return e.left.condition.negate(t);if(/^!=/.test(e.operator))return e.left.condition}}}if(e=e.lift_sequences(t),t.option("comparisons"))switch(e.operator){case"===":case"!==":(e.left.is_string(t)&&e.right.is_string(t)||e.left.is_boolean()&&e.right.is_boolean())&&(e.operator=e.operator.substr(0,2));case"==":case"!=":e.left instanceof In&&"undefined"==e.left.value&&e.right instanceof nn&&"typeof"==e.right.operator&&t.option("unsafe")&&(e.right.expression instanceof Mn&&e.right.expression.undeclared()||(e.right=e.right.expression,e.left=n(Wn,e.left).optimize(t),2==e.operator.length&&(e.operator+="=")))}if(t.option("conditionals"))if("&&"==e.operator){var o=e.left.evaluate(t);if(o.length>1)return o[1]?(t.warn("Condition left of && always true [{file}:{line},{col}]",e.start),r(t.parent(),e,e.right.evaluate(t)[0])):(t.warn("Condition left of && always false [{file}:{line},{col}]",e.start),r(t.parent(),e,o[0]))}else if("||"==e.operator){var o=e.left.evaluate(t);if(o.length>1)return o[1]?(t.warn("Condition left of || always true [{file}:{line},{col}]",e.start),r(t.parent(),e,o[0])):(t.warn("Condition left of || always false [{file}:{line},{col}]",e.start),r(t.parent(),e,e.right.evaluate(t)[0]))}if(t.option("booleans")&&t.in_boolean_context())switch(e.operator){case"&&":var o=e.left.evaluate(t),u=e.right.evaluate(t);if(o.length>1&&!o[1]||u.length>1&&!u[1])return t.warn("Boolean && always false [{file}:{line},{col}]",e.start),e.left.has_side_effects(t)?n(Je,e,{car:e.left,cdr:n(Jn)}).optimize(t):n(Jn,e);if(o.length>1&&o[1])return u[0];if(u.length>1&&u[1])return o[0];break;case"||":var o=e.left.evaluate(t),u=e.right.evaluate(t);if(o.length>1&&o[1]||u.length>1&&u[1])return t.warn("Boolean || always true [{file}:{line},{col}]",e.start),e.left.has_side_effects(t)?n(Je,e,{car:e.left,cdr:n(Zn)}).optimize(t):n(Zn,e);if(o.length>1&&!o[1])return u[0];if(u.length>1&&!u[1])return o[0];break;case"+":var o=e.left.evaluate(t),u=e.right.evaluate(t);if(o.length>1&&o[0]instanceof In&&o[1]&&!e.right.has_side_effects(t)||u.length>1&&u[0]instanceof In&&u[1]&&!e.left.has_side_effects(t))return t.warn("+ in boolean context always true [{file}:{line},{col}]",e.start),n(Zn,e)}if(t.option("comparisons")&&e.is_boolean()){if(!(t.parent()instanceof rn)||t.parent()instanceof un){var a=n(nn,e,{operator:"!",expression:e.negate(t)});e=y(e,a)}if(t.option("unsafe_comps"))switch(e.operator){case"<":i(">");break;case"<=":i(">=")}}return"+"==e.operator&&e.right instanceof In&&""===e.right.getValue()&&e.left instanceof rn&&"+"==e.left.operator&&e.left.is_string(t)?e.left:(t.option("evaluate")&&"+"==e.operator&&(e.left instanceof jn&&e.right instanceof rn&&"+"==e.right.operator&&e.right.left instanceof jn&&e.right.is_string(t)&&(e=n(rn,e,{operator:"+",left:n(In,null,{value:""+e.left.getValue()+e.right.left.getValue(),start:e.left.start,end:e.right.left.end}),right:e.right.right})),e.right instanceof jn&&e.left instanceof rn&&"+"==e.left.operator&&e.left.right instanceof jn&&e.left.is_string(t)&&(e=n(rn,e,{operator:"+",left:e.left.left,right:n(In,null,{value:""+e.left.right.getValue()+e.right.getValue(),start:e.left.right.start,end:e.right.end})})),e.left instanceof rn&&"+"==e.left.operator&&e.left.is_string(t)&&e.left.right instanceof jn&&e.right instanceof rn&&"+"==e.right.operator&&e.right.left instanceof jn&&e.right.is_string(t)&&(e=n(rn,e,{operator:"+",left:n(rn,e.left,{operator:"+",left:e.left.left,right:n(In,null,{value:""+e.left.right.getValue()+e.right.left.getValue(),start:e.left.right.start,end:e.right.left.end})}),right:e.right.right}))),e.right instanceof rn&&e.right.operator==e.operator&&("&&"==e.operator||"||"==e.operator)?(e.left=n(rn,e.left,{operator:e.operator,left:e.left,right:e.right.left}),e.right=e.right.right,e.transform(t)):e.evaluate(t)[0])}),e(Mn,function(e,r){function i(e,n){return n instanceof rn&&"="===n.operator&&n.left===e}if(e.undeclared()&&!i(e,r.parent())){var o=r.option("global_defs");if(o&&_(o,e.name))return t(r,o[e.name],e);if(!e.scope.uses_with||!r.find_parent(le))switch(e.name){case"undefined":return n(Wn,e);case"NaN":return n(Vn,e).transform(r);case"Infinity":return n(Xn,e).transform(r)}}return e}),e(Xn,function(e,t){return n(rn,e,{operator:"/",left:n(Un,e,{value:1}),right:n(Un,e,{value:0})})}),e(Wn,function(e,t){if(t.option("unsafe")){var r=t.find_parent(pe),i=r.find_variable("undefined");if(i){var o=n(Mn,e,{name:"undefined",scope:r,thedef:i});return o.reference(),o}}return e});var k=["+","-","/","*","%",">>","<<",">>>","|","^","&"],x=["*","|","^","&"];e(un,function(e,n){return e=e.lift_sequences(n),"="==e.operator&&e.left instanceof Mn&&e.right instanceof rn&&(e.right.left instanceof Mn&&e.right.left.name==e.left.name&&i(e.right.operator,k)?(e.operator=e.right.operator+"=",e.right=e.right.right):e.right.right instanceof Mn&&e.right.right.name==e.left.name&&i(e.right.operator,x)&&!e.right.left.has_side_effects(n)&&(e.operator=e.right.operator+"=",e.right=e.right.left)),e}),e(on,function(e,i){function o(e){return e.is_boolean()?e:n(nn,e,{operator:"!",expression:e.negate(i)})}function u(e){return e instanceof Zn||e instanceof nn&&"!"==e.operator&&e.expression instanceof jn&&!e.expression.value}function a(e){return e instanceof Jn||e instanceof nn&&"!"==e.operator&&e.expression instanceof jn&&!!e.expression.value}if(!i.option("conditionals"))return e;if(e.condition instanceof Je){var s=e.condition.car;return e.condition=e.condition.cdr,Je.cons(s,e)}var c=e.condition.evaluate(i);if(c.length>1)return c[1]?(i.warn("Condition always true [{file}:{line},{col}]",e.start),r(i.parent(),e,e.consequent)):(i.warn("Condition always false [{file}:{line},{col}]",e.start),r(i.parent(),e,e.alternative));var f=c[0].negate(i);y(c[0],f)===f&&(e=n(on,e,{condition:f,consequent:e.alternative,alternative:e.consequent}));var l=e.consequent,p=e.alternative;if(l instanceof un&&p instanceof un&&l.operator==p.operator&&l.left.equivalent_to(p.left)&&!l.left.has_side_effects(i))return n(un,e,{operator:l.operator,left:l.left,right:n(on,e,{condition:e.condition,consequent:l.right,alternative:p.right})});if(l instanceof Xe&&p.TYPE===l.TYPE&&l.args.length==p.args.length&&!l.expression.has_side_effects(i)&&l.expression.equivalent_to(p.expression)){if(0==l.args.length)return n(Je,e,{car:e.condition,cdr:l});if(1==l.args.length)return l.args[0]=n(on,e,{condition:e.condition,consequent:l.args[0],alternative:p.args[0]}),l}if(l instanceof on&&l.alternative.equivalent_to(p))return n(on,e,{condition:n(rn,e,{left:e.condition,operator:"&&",right:l.condition}),consequent:l.consequent,alternative:p});if(l.is_constant(i)&&p.is_constant(i)&&l.equivalent_to(p)){var d=l.constant_value(i);return e.condition.has_side_effects(i)?Je.from_array([e.condition,t(i,d,e)]):t(i,d,e)}return u(e.consequent)?a(e.alternative)?o(e.condition):n(rn,e,{operator:"||",left:o(e.condition),right:e.alternative}):a(e.consequent)?u(e.alternative)?o(e.condition.negate(i)):n(rn,e,{operator:"&&",left:o(e.condition.negate(i)),right:e.alternative}):u(e.alternative)?n(rn,e,{operator:"||",left:o(e.condition.negate(i)),right:e.consequent}):a(e.alternative)?n(rn,e,{operator:"&&",left:o(e.condition),right:e.consequent}):e}),e(Gn,function(e,t){if(t.option("booleans")){var r=t.parent();return r instanceof rn&&("=="==r.operator||"!="==r.operator)?(t.warn("Non-strict equality against boolean: {operator} {value} [{file}:{line},{col}]",{operator:r.operator,value:e.value,file:r.start.file,line:r.start.line,col:r.start.col}),n(Un,e,{value:+e.value})):n(nn,e,{operator:"!",expression:n(Un,e,{value:1-e.value})})}return e}),e(Qe,function(e,t){var r=e.property;if(r instanceof In&&t.option("properties")){if(r=r.getValue(),nt(r)?t.option("screw_ie8"):$(r))return n(Ke,e,{expression:e.expression,property:r}).optimize(t);var i=parseFloat(r);isNaN(i)||i.toString()!=r||(e.property=n(Un,e.property,{value:i}))}return e}),e(Ke,function(e,t){var r=e.property;return nt(r)&&!t.option("screw_ie8")?n(Qe,e,{expression:e.expression,property:n(In,e,{value:r})}).optimize(t):e.evaluate(t)[0]}),e(an,w),e(sn,w),e(Pn,w),e(ke,function(e,n){return e.value instanceof Wn&&(e.value=null),e}),e(hn,function(e,n){return e}),e(Kn,function(e,n){return!e.is_star&&e.expression instanceof Wn&&(e.expression=null),e}),e(Ae,function(e,n){if(!n.option("evaluate")||n.parent()instanceof Ee)return e;for(var t=[],r=0;r<e.segments.length;r++)if(e.segments[r]instanceof X){var i=e.segments[r].evaluate(n);if(1===i.length){t.push(i[0]);continue}if(i[0].print_to_string().length+3<(i[1]+"").length){t.push(i[0]);continue}t[t.length-1].value=t[t.length-1].value+i[1]+e.segments[++r].value}else t.push(e.segments[r]);return e.segments=t,e}),e(Ee,function(e,n){return e})}(),function(){function n(e){if("Literal"==e.type)return null!=e.raw?e.raw:e.value+""}function t(e){var t=e.loc,r=t&&t.start,i=e.range;return new Y({file:t&&t.source,line:r&&r.line,col:r&&r.column,pos:i?i[0]:e.start,endline:r&&r.line,endcol:r&&r.column,endpos:i?i[0]:e.start,raw:n(e)})}function r(e){var t=e.loc,r=t&&t.end,i=e.range;return new Y({file:t&&t.source,line:r&&r.line,col:r&&r.column,pos:i?i[1]:e.end,endline:r&&r.line,endcol:r&&r.column,endpos:i?i[1]:e.end,raw:n(e)})}function i(n,i,u){var f="function From_Moz_"+n+"(M){\n";f+="return new U2."+i.name+"({\nstart: my_start_token(M),\nend: my_end_token(M)";var p="function To_Moz_"+n+"(M){\n";p+="return {\ntype: "+JSON.stringify(n),u&&u.split(/\s*,\s*/).forEach(function(e){var n=/([a-z0-9$_]+)(=|@|>|%)([a-z0-9$_]+)/i.exec(e);if(!n)throw new Error("Can't understand property map: "+e);var t=n[1],r=n[2],i=n[3];switch(f+=",\n"+i+": ",p+=",\n"+t+": ",r){case"@":f+="M."+t+".map(from_moz)",p+="M."+i+".map(to_moz)";break;case">":f+="from_moz(M."+t+")",p+="to_moz(M."+i+")";break;case"=":f+="M."+t,p+="M."+i;break;case"%":f+="from_moz(M."+t+").body",p+="to_moz_block(M)";break;default:throw new Error("Can't understand operator in propmap: "+e)}}),f+="\n})\n}",p+="\n}\n}",f=new Function("U2","my_start_token","my_end_token","from_moz","return("+f+")")(e,t,r,o),p=new Function("to_moz","to_moz_block","return("+p+")")(s,c),l[n]=f,a(i,p)}function o(e){p.push(e);var n=null!=e?l[e.type](e):null;return p.pop(),n}function u(e,n,t){var r=e.start,i=e.end;return null!=r.pos&&null!=i.endpos&&(n.range=[r.pos,i.endpos]),r.line&&(n.loc={start:{line:r.line,column:r.col},end:i.endline?{line:i.endline,column:i.endcol}:null},r.file&&(n.loc.source=r.file)),n}function a(e,n){e.DEFMETHOD("to_mozilla_ast",function(){return u(this,n(this))})}function s(e){return null!=e?e.to_mozilla_ast():null}function c(e){return{type:"BlockStatement",body:e.body.map(s)}}var f=function(e){for(var n=!0,t=0;t<e.length;t++)n&&e[t]instanceof G&&e[t].body instanceof In?e[t]=new Z({start:e[t].start,end:e[t].end,value:e[t].body.value}):!n||e[t]instanceof G&&e[t].body instanceof In||(n=!1);return e},l={Program:function(e){return new de({start:t(e),end:r(e),body:f(e.body.map(o))})},FunctionDeclaration:function(e){return new ye({start:t(e),end:r(e),name:o(e.id),argnames:e.params.map(o),body:f(o(e.body).body)})},FunctionExpression:function(e){return new _e({start:t(e),end:r(e),name:o(e.id),argnames:e.params.map(o),body:f(o(e.body).body)})},ExpressionStatement:function(e){return new K({start:t(e),end:r(e),body:o(e.expression)})},TryStatement:function(e){var n=e.handlers||[e.handler];if(n.length>1||e.guardedHandlers&&e.guardedHandlers.length)throw new Error("Multiple catch clauses are not supported.");return new Ne({start:t(e),end:r(e),body:o(e.block).body,bcatch:o(n[0]),bfinally:e.finalizer?new je(o(e.finalizer)):null})},Property:function(e){var n=e.key,i="Identifier"==n.type?n.name:n.value,u={start:t(n),end:r(e.value),key:i,value:o(e.value)};switch(e.kind){
	case"init":return new fn(u);case"set":return u.value.name=o(n),new ln(u);case"get":return u.value.name=o(n),new pn(u)}},ArrayExpression:function(e){return new an({start:t(e),end:r(e),elements:e.elements.map(function(e){return null===e?new Yn:o(e)})})},ObjectExpression:function(e){return new sn({start:t(e),end:r(e),properties:e.properties.map(function(e){return e.type="Property",o(e)})})},SequenceExpression:function(e){return Je.from_array(e.expressions.map(o))},MemberExpression:function(e){return new(e.computed?Qe:Ke)({start:t(e),end:r(e),property:e.computed?o(e.property):e.property.name,expression:o(e.object)})},SwitchCase:function(e){return new(e.test?ze:Me)({start:t(e),end:r(e),expression:o(e.test),body:e.consequent.map(o)})},VariableDeclaration:function(e){return new("const"===e.kind?Re:Ue)({start:t(e),end:r(e),definitions:e.declarations.map(o)})},Literal:function(e){var n=e.value,i={start:t(e),end:r(e)};if(null===n)return new Ln(i);switch(typeof n){case"string":return i.value=n,new In(i);case"number":return i.value=n,new Un(i);case"boolean":return new(n?Zn:Jn)(i);default:var o=e.regex;return o&&o.pattern?i.value=new RegExp(o.pattern,o.flags).toString():i.value=e.regex&&e.raw?e.raw:n,new Pn(i)}},Identifier:function(e){var n=p[p.length-2];return new("LabeledStatement"==n.type?qn:"VariableDeclarator"==n.type&&n.id===e?"const"==n.kind?An:bn:"FunctionExpression"==n.type?n.id===e?xn:wn:"FunctionDeclaration"==n.type?n.id===e?Cn:wn:"CatchClause"==n.type?Tn:"BreakStatement"==n.type||"ContinueStatement"==n.type?zn:Mn)({start:t(e),end:r(e),name:e.name})}};l.UpdateExpression=l.UnaryExpression=function(e){var n="prefix"in e?e.prefix:"UnaryExpression"==e.type;return new(n?nn:tn)({start:t(e),end:r(e),operator:e.operator,expression:o(e.argument)})},i("EmptyStatement",ne),i("BlockStatement",ee,"body@body"),i("IfStatement",$e,"test>condition, consequent>body, alternate>alternative"),i("LabeledStatement",re,"label>label, body>body"),i("BreakStatement",Se,"label>label"),i("ContinueStatement",Te,"label>label"),i("WithStatement",le,"object>expression, body>body"),i("SwitchStatement",Oe,"discriminant>expression, cases@body"),i("ReturnStatement",ke,"argument>value"),i("ThrowStatement",xe,"argument>value"),i("WhileStatement",ae,"test>condition, body>body"),i("DoWhileStatement",ue,"test>condition, body>body"),i("ForStatement",se,"init>init, test>condition, update>step, body>body"),i("ForInStatement",ce,"left>init, right>object, body>body"),i("DebuggerStatement",J),i("VariableDeclarator",Ye,"id>name, init>value"),i("CatchClause",He,"param>argname, body%body"),i("ThisExpression",Nn),i("BinaryExpression",rn,"operator=operator, left>left, right>right"),i("LogicalExpression",rn,"operator=operator, left>left, right>right"),i("AssignmentExpression",un,"operator=operator, left>left, right>right"),i("ConditionalExpression",on,"test>condition, consequent>consequent, alternate>alternative"),i("NewExpression",Ge,"callee>expression, arguments@args"),i("CallExpression",Xe,"callee>expression, arguments@args"),a(de,function(e){return{type:"Program",body:e.body.map(s)}}),a(ye,function(e){return{type:"FunctionDeclaration",id:s(e.name),params:e.argnames.map(s),body:c(e)}}),a(_e,function(e){return{type:"FunctionExpression",id:s(e.name),params:e.argnames.map(s),body:c(e)}}),a(Z,function(e){return{type:"ExpressionStatement",expression:{type:"Literal",value:e.value}}}),a(K,function(e){return{type:"ExpressionStatement",expression:s(e.body)}}),a(qe,function(e){return{type:"SwitchCase",test:s(e.expression),consequent:e.body.map(s)}}),a(Ne,function(e){return{type:"TryStatement",block:c(e),handler:s(e.bcatch),guardedHandlers:[],finalizer:s(e.bfinally)}}),a(He,function(e){return{type:"CatchClause",param:s(e.argname),guard:null,body:c(e)}}),a(Ie,function(e){return{type:"VariableDeclaration",kind:e instanceof Re?"const":"var",declarations:e.definitions.map(s)}}),a(Je,function(e){return{type:"SequenceExpression",expressions:e.to_array().map(s)}}),a(Ze,function(e){var n=e instanceof Qe;return{type:"MemberExpression",object:s(e.expression),computed:n,property:n?s(e.property):{type:"Identifier",name:e.property}}}),a(en,function(e){return{type:"++"==e.operator||"--"==e.operator?"UpdateExpression":"UnaryExpression",operator:e.operator,prefix:e instanceof nn,argument:s(e.expression)}}),a(rn,function(e){return{type:"&&"==e.operator||"||"==e.operator?"LogicalExpression":"BinaryExpression",left:s(e.left),operator:e.operator,right:s(e.right)}}),a(an,function(e){return{type:"ArrayExpression",elements:e.elements.map(s)}}),a(sn,function(e){return{type:"ObjectExpression",properties:e.properties.map(s)}}),a(cn,function(e){var n,t=B(e.key)?{type:"Identifier",name:e.key}:{type:"Literal",value:e.key};return e instanceof fn?n="init":e instanceof pn?n="get":e instanceof ln&&(n="set"),{type:"Property",kind:n,key:t,value:s(e.value)}}),a(vn,function(e){var n=e.definition();return{type:"Identifier",name:n?n.mangled_name||n.name:e.name}}),a(Pn,function(e){var n=e.value;return{type:"Literal",value:n,raw:n.toString(),regex:{pattern:n.source,flags:n.toString().match(/[gimuy]*$/)[0]}}}),a(jn,function(e){var n=e.value;return"number"==typeof n&&(n<0||0===n&&1/n<0)?{type:"UnaryExpression",operator:"-",prefix:!0,argument:{type:"Literal",value:-n,raw:e.start.raw}}:{type:"Literal",value:n,raw:e.start.raw}}),a(Rn,function(e){return{type:"Identifier",name:String(e.value)}}),Gn.DEFMETHOD("to_mozilla_ast",jn.prototype.to_mozilla_ast),Ln.DEFMETHOD("to_mozilla_ast",jn.prototype.to_mozilla_ast),Yn.DEFMETHOD("to_mozilla_ast",function(){return null}),Q.DEFMETHOD("to_mozilla_ast",ee.prototype.to_mozilla_ast),me.DEFMETHOD("to_mozilla_ast",_e.prototype.to_mozilla_ast);var p=null;X.from_mozilla_ast=function(e){var n=p;p=[];var t=o(e);return p=n,t}}(),e.Compressor=P,e.DefaultsError=a,e.Dictionary=v,e.JS_Parse_Error=q,e.MAP=W,e.OutputStream=U,e.SourceMap=R,e.TreeTransformer=j,e.TreeWalker=b,e.base54=At,e.defaults=s,e.mangle_properties=V,e.merge=c,e.parse=H,e.push_uniq=l,e.string_template=p,e.tokenizer=N,e.is_identifier=B,e.SymbolDef=I,"undefined"!="boolean"&&(false)&&(e.EXPECT_DIRECTIVE=Ft),n.UglifyJS=e}({},function(){return this}());
	
	/*** EXPORTS FROM exports-loader ***/
	module.exports = UglifyJS;

/***/ },
/* 467 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _tab = __webpack_require__(461);
	
	var _tab2 = _interopRequireDefault(_tab);
	
	var _validate2 = __webpack_require__(463);
	
	var _validate3 = _interopRequireDefault(_validate2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CopyPaste = function (_Tab) {
	    _inherits(CopyPaste, _Tab);
	
	    function CopyPaste() {
	        var _ref;
	
	        var _this;
	
	        _classCallCheck(this, CopyPaste);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        (_this = _possibleConstructorReturn(this, (_ref = CopyPaste.__proto__ || Object.getPrototypeOf(CopyPaste)).call.apply(_ref, [this].concat(args))), _this).set({
	            active: true
	        }).bindNode({
	            form: ':sandbox form[name="copyPasteForm"]',
	            code: ':bound(form) [name="code"]'
	        }).on({
	            'submit::form': function submitForm(evt) {
	                evt.preventDefault();
	
	                var _this2 = _this,
	                    code = _this2.code;
	
	                var _validate = (0, _validate3.default)(code),
	                    isValid = _validate.isValid,
	                    error = _validate.error;
	
	                if (!isValid) {
	                    _this.error = error;
	                } else {
	                    _this.error = '';
	                    _this.trigger('submitCode', code);
	                }
	            },
	            'change:code': function changeCode() {
	                _this.error = '';
	            }
	        });
	        return _this;
	    }
	
	    return CopyPaste;
	}(_tab2.default);
	
	exports.default = CopyPaste;

/***/ },
/* 468 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _lodash = __webpack_require__(469);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _prop = __webpack_require__(417);
	
	var _prop2 = _interopRequireDefault(_prop);
	
	var _tab = __webpack_require__(461);
	
	var _tab2 = _interopRequireDefault(_tab);
	
	var _minify = __webpack_require__(470);
	
	var _minify2 = _interopRequireDefault(_minify);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var getJSBlob = function getJSBlob(data) {
	    return new Blob([data], { type: 'text/javascript' });
	};
	
	var getBlobSize = function getBlobSize(blob) {
	    return blob.size;
	};
	
	var Output = function (_Tab) {
	    _inherits(Output, _Tab);
	
	    function Output() {
	        var _ref;
	
	        var _this;
	
	        _classCallCheck(this, Output);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        (_this = _possibleConstructorReturn(this, (_ref = Output.__proto__ || Object.getPrototypeOf(Output)).call.apply(_ref, [this].concat(args))), _this).set({
	            inputCode: ''
	        }).bindNode({
	            compression: ':sandbox .compression',
	            saving: ':sandbox .saving',
	            outputCode: ':sandbox .output-code',
	            outputDataURI: {
	                node: ':sandbox .download',
	                binder: (0, _prop2.default)('href')
	            }
	        }).calc({
	            inputBlob: {
	                source: 'inputCode',
	                handler: getJSBlob
	            },
	            inputSize: {
	                source: 'inputBlob',
	                handler: getBlobSize
	            },
	            outputCode: {
	                source: 'inputCode',
	                handler: _minify2.default,
	                event: { setOnInit: false }
	            },
	            outputBlob: {
	                source: 'outputCode',
	                handler: getJSBlob
	            },
	            outputSize: {
	                source: 'outputBlob',
	                handler: getBlobSize
	            },
	            outputDataURI: {
	                source: 'outputBlob',
	                handler: URL.createObjectURL
	            },
	            compression: {
	                source: ['inputSize', 'outputSize'],
	                handler: function handler(inSize, outSize) {
	                    return (0, _lodash2.default)(100 - 100 * outSize / inSize || 0, 2);
	                }
	            },
	            saving: {
	                source: ['inputSize', 'outputSize'],
	                handler: function handler(inSize, outSize) {
	                    return (0, _lodash2.default)((inSize - outSize) / 1024, 2);
	                }
	            }
	        }).on({
	            'keypress::outputCode': function keypressOutputCode(_ref2) {
	                var domEvent = _ref2.domEvent;
	
	                // alolow to use ctrl + A, ctrl + C etc
	                if (!domEvent.ctrlKey) {
	                    domEvent.preventDefault();
	                }
	            }
	        });
	        return _this;
	    }
	
	    return Output;
	}(_tab2.default);
	
	exports.default = Output;

/***/ },
/* 469 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308,
	    NAN = 0 / 0;
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;
	
	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	
	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;
	
	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;
	
	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;
	
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Built-in value references. */
	var Symbol = root.Symbol;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMin = Math.min;
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;
	
	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}
	
	/**
	 * Creates a function like `_.round`.
	 *
	 * @private
	 * @param {string} methodName The name of the `Math` method to use when rounding.
	 * @returns {Function} Returns the new round function.
	 */
	function createRound(methodName) {
	  var func = Math[methodName];
	  return function(number, precision) {
	    number = toNumber(number);
	    precision = nativeMin(toInteger(precision), 292);
	    if (precision) {
	      // Shift with exponential notation to avoid floating-point issues.
	      // See [MDN](https://mdn.io/round#Examples) for more details.
	      var pair = (toString(number) + 'e').split('e'),
	          value = func(pair[0] + 'e' + (+pair[1] + precision));
	
	      pair = (toString(value) + 'e').split('e');
	      return +(pair[0] + 'e' + (+pair[1] - precision));
	    }
	    return func(number);
	  };
	}
	
	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}
	
	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
	function toFinite(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}
	
	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3.2);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3.2');
	 * // => 3
	 */
	function toInteger(value) {
	  var result = toFinite(value),
	      remainder = result % 1;
	
	  return result === result ? (remainder ? result - remainder : result) : 0;
	}
	
	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}
	
	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}
	
	/**
	 * Computes `number` rounded to `precision`.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.10.0
	 * @category Math
	 * @param {number} number The number to round.
	 * @param {number} [precision=0] The precision to round to.
	 * @returns {number} Returns the rounded number.
	 * @example
	 *
	 * _.round(4.006);
	 * // => 4
	 *
	 * _.round(4.006, 2);
	 * // => 4.01
	 *
	 * _.round(4060, -2);
	 * // => 4100
	 */
	var round = createRound('round');
	
	module.exports = round;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 470 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = minify;
	
	var _getUglifyJs = __webpack_require__(464);
	
	var _getUglifyJs2 = _interopRequireDefault(_getUglifyJs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function minify(code) {
	    var UglifyJS = (0, _getUglifyJs2.default)();
	    var compressor = UglifyJS.Compressor({});
	    var ast = UglifyJS.parse(code);
	
	    ast.figure_out_scope();
	    ast = ast.transform(compressor);
	    ast.mangle_names();
	    return ast.print_to_string();
	}

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map
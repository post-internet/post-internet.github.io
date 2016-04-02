/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/postcss-loader/index.js!./style.pcss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/postcss-loader/index.js!./style.pcss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "/* Basscss Modules */\n/* Basscss Type Scale */\n.h1 { font-size: 2rem }\n.h2 { font-size: 1.5rem }\n.h3 { font-size: 1.25rem }\n.h4 { font-size: 1rem }\n.h5 { font-size: .875rem }\n.h6 { font-size: .75rem }\n/* Basscss Typography */\n.font-family-inherit { font-family: inherit }\n.font-size-inherit { font-size: inherit }\n.text-decoration-none { text-decoration: none }\n.bold    { font-weight: bold; font-weight: bold }\n.regular { font-weight: normal }\n.italic  { font-style: italic }\n.caps    { text-transform: uppercase; letter-spacing: .2em; }\n.left-align   { text-align: left }\n.center       { text-align: center }\n.right-align  { text-align: right }\n.justify      { text-align: justify }\n.nowrap { white-space: nowrap }\n.break-word { word-wrap: break-word }\n.line-height-1 { line-height: 1 }\n.line-height-2 { line-height: 1.125 }\n.line-height-3 { line-height: 1.25 }\n.line-height-4 { line-height: 1.5 }\n.list-style-none { list-style: none }\n.underline { text-decoration: underline }\n.truncate {\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.list-reset {\n  list-style: none;\n  padding-left: 0;\n}\n/* Basscss Layout */\n.inline       { display: inline }\n.block        { display: block }\n.inline-block { display: inline-block }\n.table        { display: table }\n.table-cell   { display: table-cell }\n.overflow-hidden { overflow: hidden }\n.overflow-scroll { overflow: scroll }\n.overflow-auto   { overflow: auto }\n.clearfix:before, .clearfix:after {\n  content: \" \";\n  display: table\n}\n.clearfix:after { clear: both }\n.left  { float: left }\n.right { float: right }\n.fit { max-width: 100% }\n.max-width-1 { max-width: 24rem }\n.max-width-2 { max-width: 32rem }\n.max-width-3 { max-width: 48rem }\n.max-width-4 { max-width: 64rem }\n.border-box { box-sizing: border-box }\n/* Basscss Align */\n.align-baseline { vertical-align: baseline }\n.align-top      { vertical-align: top }\n.align-middle   { vertical-align: middle }\n.align-bottom   { vertical-align: bottom }\n/* Basscss Margin */\n.m0  { margin:        0 }\n.mt0 { margin-top:    0 }\n.mr0 { margin-right:  0 }\n.mb0 { margin-bottom: 0 }\n.ml0 { margin-left:   0 }\n.mx0 { margin-left:   0; margin-right:  0 }\n.my0 { margin-top:    0; margin-bottom: 0 }\n.m1  { margin: .5rem }\n.mt1 { margin-top: .5rem }\n.mr1 { margin-right: .5rem }\n.mb1 { margin-bottom: .5rem }\n.ml1 { margin-left: .5rem }\n.mx1 { margin-left: .5rem; margin-right: .5rem }\n.my1 { margin-top: .5rem; margin-bottom: .5rem }\n.m2  { margin: 1rem }\n.mt2 { margin-top: 1rem }\n.mr2 { margin-right: 1rem }\n.mb2 { margin-bottom: 1rem }\n.ml2 { margin-left: 1rem }\n.mx2 { margin-left: 1rem; margin-right: 1rem }\n.my2 { margin-top: 1rem; margin-bottom: 1rem }\n.m3  { margin: 2rem }\n.mt3 { margin-top: 2rem }\n.mr3 { margin-right: 2rem }\n.mb3 { margin-bottom: 2rem }\n.ml3 { margin-left: 2rem }\n.mx3 { margin-left: 2rem; margin-right: 2rem }\n.my3 { margin-top: 2rem; margin-bottom: 2rem }\n.m4  { margin: 4rem }\n.mt4 { margin-top: 4rem }\n.mr4 { margin-right: 4rem }\n.mb4 { margin-bottom: 4rem }\n.ml4 { margin-left: 4rem }\n.mx4 { margin-left: 4rem; margin-right: 4rem }\n.my4 { margin-top: 4rem; margin-bottom: 4rem }\n.mxn1 { margin-left: -.5rem; margin-right: -.5rem; }\n.mxn2 { margin-left: -1rem; margin-right: -1rem; }\n.mxn3 { margin-left: -2rem; margin-right: -2rem; }\n.mxn4 { margin-left: -4rem; margin-right: -4rem; }\n.ml-auto { margin-left: auto }\n.mr-auto { margin-right: auto }\n.mx-auto { margin-left: auto; margin-right: auto; }\n/* Basscss Padding */\n.p0  { padding: 0 }\n.pt0 { padding-top: 0 }\n.pr0 { padding-right: 0 }\n.pb0 { padding-bottom: 0 }\n.pl0 { padding-left: 0 }\n.px0 { padding-left: 0; padding-right:  0 }\n.py0 { padding-top: 0;  padding-bottom: 0 }\n.p1  { padding: .5rem }\n.pt1 { padding-top: .5rem }\n.pr1 { padding-right: .5rem }\n.pb1 { padding-bottom: .5rem }\n.pl1 { padding-left: .5rem }\n.py1 { padding-top: .5rem; padding-bottom: .5rem }\n.px1 { padding-left: .5rem; padding-right: .5rem }\n.p2  { padding: 1rem }\n.pt2 { padding-top: 1rem }\n.pr2 { padding-right: 1rem }\n.pb2 { padding-bottom: 1rem }\n.pl2 { padding-left: 1rem }\n.py2 { padding-top: 1rem; padding-bottom: 1rem }\n.px2 { padding-left: 1rem; padding-right: 1rem }\n.p3  { padding: 2rem }\n.pt3 { padding-top: 2rem }\n.pr3 { padding-right: 2rem }\n.pb3 { padding-bottom: 2rem }\n.pl3 { padding-left: 2rem }\n.py3 { padding-top: 2rem; padding-bottom: 2rem }\n.px3 { padding-left: 2rem; padding-right: 2rem }\n.p4  { padding: 4rem }\n.pt4 { padding-top: 4rem }\n.pr4 { padding-right: 4rem }\n.pb4 { padding-bottom: 4rem }\n.pl4 { padding-left: 4rem }\n.py4 { padding-top: 4rem; padding-bottom: 4rem }\n.px4 { padding-left: 4rem; padding-right: 4rem }\n/* Basscss Grid */\n.col {\n  float: left;\n  box-sizing: border-box;\n}\n.col-right {\n  float: right;\n  box-sizing: border-box;\n}\n.col-1 {\n  width: calc(1/12 * 100%);\n}\n.col-2 {\n  width: calc(2/12 * 100%);\n}\n.col-3 {\n  width: calc(3/12 * 100%);\n}\n.col-4 {\n  width: calc(4/12 * 100%);\n}\n.col-5 {\n  width: calc(5/12 * 100%);\n}\n.col-6 {\n  width: calc(6/12 * 100%);\n}\n.col-7 {\n  width: calc(7/12 * 100%);\n}\n.col-8 {\n  width: calc(8/12 * 100%);\n}\n.col-9 {\n  width: calc(9/12 * 100%);\n}\n.col-10 {\n  width: calc(10/12 * 100%);\n}\n.col-11 {\n  width: calc(11/12 * 100%);\n}\n.col-12 {\n  width: 100%;\n}\n@media (min-width: 40em) {\n\n  .sm-col {\n    float: left;\n    box-sizing: border-box;\n  }\n\n  .sm-col-right {\n    float: right;\n    box-sizing: border-box;\n  }\n\n  .sm-col-1 {\n    width: calc(1/12 * 100%);\n  }\n\n  .sm-col-2 {\n    width: calc(2/12 * 100%);\n  }\n\n  .sm-col-3 {\n    width: calc(3/12 * 100%);\n  }\n\n  .sm-col-4 {\n    width: calc(4/12 * 100%);\n  }\n\n  .sm-col-5 {\n    width: calc(5/12 * 100%);\n  }\n\n  .sm-col-6 {\n    width: calc(6/12 * 100%);\n  }\n\n  .sm-col-7 {\n    width: calc(7/12 * 100%);\n  }\n\n  .sm-col-8 {\n    width: calc(8/12 * 100%);\n  }\n\n  .sm-col-9 {\n    width: calc(9/12 * 100%);\n  }\n\n  .sm-col-10 {\n    width: calc(10/12 * 100%);\n  }\n\n  .sm-col-11 {\n    width: calc(11/12 * 100%);\n  }\n\n  .sm-col-12 {\n    width: 100%;\n  }\n\n}\n@media (min-width: 52em) {\n\n  .md-col {\n    float: left;\n    box-sizing: border-box;\n  }\n\n  .md-col-right {\n    float: right;\n    box-sizing: border-box;\n  }\n\n  .md-col-1 {\n    width: calc(1/12 * 100%);\n  }\n\n  .md-col-2 {\n    width: calc(2/12 * 100%);\n  }\n\n  .md-col-3 {\n    width: calc(3/12 * 100%);\n  }\n\n  .md-col-4 {\n    width: calc(4/12 * 100%);\n  }\n\n  .md-col-5 {\n    width: calc(5/12 * 100%);\n  }\n\n  .md-col-6 {\n    width: calc(6/12 * 100%);\n  }\n\n  .md-col-7 {\n    width: calc(7/12 * 100%);\n  }\n\n  .md-col-8 {\n    width: calc(8/12 * 100%);\n  }\n\n  .md-col-9 {\n    width: calc(9/12 * 100%);\n  }\n\n  .md-col-10 {\n    width: calc(10/12 * 100%);\n  }\n\n  .md-col-11 {\n    width: calc(11/12 * 100%);\n  }\n\n  .md-col-12 {\n    width: 100%;\n  }\n\n}\n@media (min-width: 64em) {\n\n  .lg-col {\n    float: left;\n    box-sizing: border-box;\n  }\n\n  .lg-col-right {\n    float: right;\n    box-sizing: border-box;\n  }\n\n  .lg-col-1 {\n    width: calc(1/12 * 100%);\n  }\n\n  .lg-col-2 {\n    width: calc(2/12 * 100%);\n  }\n\n  .lg-col-3 {\n    width: calc(3/12 * 100%);\n  }\n\n  .lg-col-4 {\n    width: calc(4/12 * 100%);\n  }\n\n  .lg-col-5 {\n    width: calc(5/12 * 100%);\n  }\n\n  .lg-col-6 {\n    width: calc(6/12 * 100%);\n  }\n\n  .lg-col-7 {\n    width: calc(7/12 * 100%);\n  }\n\n  .lg-col-8 {\n    width: calc(8/12 * 100%);\n  }\n\n  .lg-col-9 {\n    width: calc(9/12 * 100%);\n  }\n\n  .lg-col-10 {\n    width: calc(10/12 * 100%);\n  }\n\n  .lg-col-11 {\n    width: calc(11/12 * 100%);\n  }\n\n  .lg-col-12 {\n    width: 100%;\n  }\n\n}\n.flex { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex }\n@media (min-width: 40em) {\n  .sm-flex { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex }\n}\n@media (min-width: 52em) {\n  .md-flex { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex }\n}\n@media (min-width: 64em) {\n  .lg-flex { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex }\n}\n.flex-column  { -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column }\n.flex-wrap    { -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap }\n.items-start    { -webkit-box-align: start; -webkit-align-items: flex-start; -ms-flex-align: start; -ms-grid-row-align: flex-start; align-items: flex-start }\n.items-end      { -webkit-box-align: end; -webkit-align-items: flex-end; -ms-flex-align: end; -ms-grid-row-align: flex-end; align-items: flex-end }\n.items-center   { -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; -ms-grid-row-align: center; align-items: center }\n.items-baseline { -webkit-box-align: baseline; -webkit-align-items: baseline; -ms-flex-align: baseline; -ms-grid-row-align: baseline; align-items: baseline }\n.items-stretch  { -webkit-box-align: stretch; -webkit-align-items: stretch; -ms-flex-align: stretch; -ms-grid-row-align: stretch; align-items: stretch }\n.self-start    { -webkit-align-self: flex-start; -ms-flex-item-align: start; align-self: flex-start }\n.self-end      { -webkit-align-self: flex-end; -ms-flex-item-align: end; align-self: flex-end }\n.self-center   { -webkit-align-self: center; -ms-flex-item-align: center; align-self: center }\n.self-baseline { -webkit-align-self: baseline; -ms-flex-item-align: baseline; align-self: baseline }\n.self-stretch  { -webkit-align-self: stretch; -ms-flex-item-align: stretch; align-self: stretch }\n.justify-start   { -webkit-box-pack: start; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start }\n.justify-end     { -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end }\n.justify-center  { -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center }\n.justify-between { -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between }\n.justify-around  { -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around }\n.content-start   { -webkit-align-content: flex-start; -ms-flex-line-pack: start; align-content: flex-start }\n.content-end     { -webkit-align-content: flex-end; -ms-flex-line-pack: end; align-content: flex-end }\n.content-center  { -webkit-align-content: center; -ms-flex-line-pack: center; align-content: center }\n.content-between { -webkit-align-content: space-between; -ms-flex-line-pack: justify; align-content: space-between }\n.content-around  { -webkit-align-content: space-around; -ms-flex-line-pack: distribute; align-content: space-around }\n.content-stretch { -webkit-align-content: stretch; -ms-flex-line-pack: stretch; align-content: stretch }\n/* 1. Fix for Chrome 44 bug. https://code.google.com/p/chromium/issues/detail?id=506893 */\n.flex-auto {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  min-width: 0; /* 1 */\n  min-height: 0; /* 1 */\n}\n.flex-none { -webkit-box-flex: 0; -webkit-flex: none; -ms-flex: none; flex: none }\n.order-0 { -webkit-box-ordinal-group: 1; -webkit-order: 0; -ms-flex-order: 0; order: 0 }\n.order-1 { -webkit-box-ordinal-group: 2; -webkit-order: 1; -ms-flex-order: 1; order: 1 }\n.order-2 { -webkit-box-ordinal-group: 3; -webkit-order: 2; -ms-flex-order: 2; order: 2 }\n.order-3 { -webkit-box-ordinal-group: 4; -webkit-order: 3; -ms-flex-order: 3; order: 3 }\n.order-last { -webkit-box-ordinal-group: 100000; -webkit-order: 99999; -ms-flex-order: 99999; order: 99999 }\n/* Basscss Position */\n.relative { position: relative }\n.absolute { position: absolute }\n.fixed    { position: fixed }\n.top-0    { top: 0 }\n.right-0  { right: 0 }\n.bottom-0 { bottom: 0 }\n.left-0   { left: 0 }\n.z1 { z-index: 1 }\n.z2 { z-index: 2 }\n.z3 { z-index: 3 }\n.z4 { z-index: 4 }\n/* Basscss Border */\n.border {\n  border-style: solid;\n  border-width: 1px;\n}\n.border-top {\n  border-top-style: solid;\n  border-top-width: 1px;\n}\n.border-right {\n  border-right-style: solid;\n  border-right-width: 1px;\n}\n.border-bottom {\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n}\n.border-left {\n  border-left-style: solid;\n  border-left-width: 1px;\n}\n.border-none { border: 0 }\n.rounded { border-radius: 3px }\n.circle  { border-radius: 50% }\n.rounded-top    { border-radius: 3px 3px 0 0 }\n.rounded-right  { border-radius: 0 3px 3px 0 }\n.rounded-bottom { border-radius: 0 0 3px 3px }\n.rounded-left   { border-radius: 3px 0 0 3px }\n.not-rounded { border-radius: 0 }\n/* Basscss Hide */\n.hide {\n  position: absolute !important;\n  height: 1px;\n  width: 1px;\n  overflow: hidden;\n  clip: rect(1px, 1px, 1px, 1px);\n}\n@media (max-width: 40em) {\n  .xs-hide { display: none !important }\n}\n@media (min-width: 40em) and (max-width: 52em) {\n  .sm-hide { display: none !important }\n}\n@media (min-width: 52em) and (max-width: 64em) {\n  .md-hide { display: none !important }\n}\n@media (min-width: 64em) {\n  .lg-hide { display: none !important }\n}\n.display-none { display: none !important }\nbody {\n  background-color: #FAF4EF;\n  color: #2F3448;\n}\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);
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
	exports.push([module.id, "/*! normalize.css v4.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Prevent adjustments of font size after orientation changes in IE and iOS.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n * 2. Add the correct display in IE.\n */\n\narticle, aside, details, figcaption, figure, footer, header, main, menu, nav, section, summary { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio, canvas, progress, video {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Add the correct display in IE 10-.\n * 1. Add the correct display in IE.\n */\n\ntemplate, [hidden] {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active, a:hover {\n  outline-width: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb, strong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb, strong {\n  font-weight: bolder;\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub, sup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode, kbd, pre, samp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * Change font properties to `inherit` in all browsers (opinionated).\n */\n\nbutton, input, select, textarea {\n  font: inherit;\n}\n\n/**\n * Restore the font weight unset by the previous rule.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n * 2. Show the overflow in Edge, Firefox, and IE.\n */\n\nbutton, input, select { /* 2 */\n  overflow: visible;\n}\n\n/**\n * Remove the margin in Safari.\n * 1. Remove the margin in Firefox and Safari.\n */\n\nbutton, input, select, textarea { /* 1 */\n  margin: 0;\n}\n\n/**\n * Remove the inheritence of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritence of text transform in Firefox.\n */\n\nbutton, select { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Change the cursor in all browsers (opinionated).\n */\n\nbutton, [type=\"button\"], [type=\"reset\"], [type=\"submit\"] {\n  cursor: pointer;\n}\n\n/**\n * Restore the default cursor to disabled elements unset by the previous rule.\n */\n\n[disabled] {\n  cursor: default;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS.\n */\n\nbutton, html [type=\"button\"], [type=\"reset\"], [type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner, input::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring, input:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"], [type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button, [type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * Correct the odd appearance of search inputs in Chrome and Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome on OS X and\n * Safari on OS X.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button, [type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/* Basscss Modules */\n\n/* Basscss Type Scale */\n\n.h1 { font-size: 2rem }\n\n.h2 { font-size: 1.5rem }\n\n.h3 { font-size: 1.25rem }\n\n.h4 { font-size: 1rem }\n\n.h5 { font-size: .875rem }\n\n.h6 { font-size: .75rem }\n\n/* Basscss Typography */\n\n.font-family-inherit { font-family: inherit }\n\n.font-size-inherit { font-size: inherit }\n\n.text-decoration-none { text-decoration: none }\n\n.bold    { font-weight: bold; font-weight: bold }\n\n.regular { font-weight: normal }\n\n.italic  { font-style: italic }\n\n.caps    { text-transform: uppercase; letter-spacing: .2em; }\n\n.left-align   { text-align: left }\n\n.center       { text-align: center }\n\n.right-align  { text-align: right }\n\n.justify      { text-align: justify }\n\n.nowrap { white-space: nowrap }\n\n.break-word { word-wrap: break-word }\n\n.line-height-1 { line-height: 1 }\n\n.line-height-2 { line-height: 1.125 }\n\n.line-height-3 { line-height: 1.25 }\n\n.line-height-4 { line-height: 1.5 }\n\n.list-style-none { list-style: none }\n\n.underline { text-decoration: underline }\n\n.truncate {\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.list-reset {\n  list-style: none;\n  padding-left: 0;\n}\n\n/* Basscss Layout */\n\n.inline       { display: inline }\n\n.block        { display: block }\n\n.inline-block { display: inline-block }\n\n.table        { display: table }\n\n.table-cell   { display: table-cell }\n\n.overflow-hidden { overflow: hidden }\n\n.overflow-scroll { overflow: scroll }\n\n.overflow-auto   { overflow: auto }\n\n.clearfix:before, .clearfix:after {\n  content: \" \";\n  display: table\n}\n\n.clearfix:after { clear: both }\n\n.left  { float: left }\n\n.right { float: right }\n\n.fit { max-width: 100% }\n\n.max-width-1 { max-width: 24rem }\n\n.max-width-2 { max-width: 32rem }\n\n.max-width-3 { max-width: 48rem }\n\n.max-width-4 { max-width: 64rem }\n\n.border-box { box-sizing: border-box }\n\n/* Basscss Align */\n\n.align-baseline { vertical-align: baseline }\n\n.align-top      { vertical-align: top }\n\n.align-middle   { vertical-align: middle }\n\n.align-bottom   { vertical-align: bottom }\n\n/* Basscss Margin */\n\n.m0  { margin:        0 }\n\n.mt0 { margin-top:    0 }\n\n.mr0 { margin-right:  0 }\n\n.mb0 { margin-bottom: 0 }\n\n.ml0 { margin-left:   0 }\n\n.mx0 { margin-left:   0; margin-right:  0 }\n\n.my0 { margin-top:    0; margin-bottom: 0 }\n\n.m1  { margin: .5rem }\n\n.mt1 { margin-top: .5rem }\n\n.mr1 { margin-right: .5rem }\n\n.mb1 { margin-bottom: .5rem }\n\n.ml1 { margin-left: .5rem }\n\n.mx1 { margin-left: .5rem; margin-right: .5rem }\n\n.my1 { margin-top: .5rem; margin-bottom: .5rem }\n\n.m2  { margin: 1rem }\n\n.mt2 { margin-top: 1rem }\n\n.mr2 { margin-right: 1rem }\n\n.mb2 { margin-bottom: 1rem }\n\n.ml2 { margin-left: 1rem }\n\n.mx2 { margin-left: 1rem; margin-right: 1rem }\n\n.my2 { margin-top: 1rem; margin-bottom: 1rem }\n\n.m3  { margin: 2rem }\n\n.mt3 { margin-top: 2rem }\n\n.mr3 { margin-right: 2rem }\n\n.mb3 { margin-bottom: 2rem }\n\n.ml3 { margin-left: 2rem }\n\n.mx3 { margin-left: 2rem; margin-right: 2rem }\n\n.my3 { margin-top: 2rem; margin-bottom: 2rem }\n\n.m4  { margin: 4rem }\n\n.mt4 { margin-top: 4rem }\n\n.mr4 { margin-right: 4rem }\n\n.mb4 { margin-bottom: 4rem }\n\n.ml4 { margin-left: 4rem }\n\n.mx4 { margin-left: 4rem; margin-right: 4rem }\n\n.my4 { margin-top: 4rem; margin-bottom: 4rem }\n\n.mxn1 { margin-left: -.5rem; margin-right: -.5rem; }\n\n.mxn2 { margin-left: -1rem; margin-right: -1rem; }\n\n.mxn3 { margin-left: -2rem; margin-right: -2rem; }\n\n.mxn4 { margin-left: -4rem; margin-right: -4rem; }\n\n.ml-auto { margin-left: auto }\n\n.mr-auto { margin-right: auto }\n\n.mx-auto { margin-left: auto; margin-right: auto; }\n\n/* Basscss Padding */\n\n.p0  { padding: 0 }\n\n.pt0 { padding-top: 0 }\n\n.pr0 { padding-right: 0 }\n\n.pb0 { padding-bottom: 0 }\n\n.pl0 { padding-left: 0 }\n\n.px0 { padding-left: 0; padding-right:  0 }\n\n.py0 { padding-top: 0;  padding-bottom: 0 }\n\n.p1  { padding: .5rem }\n\n.pt1 { padding-top: .5rem }\n\n.pr1 { padding-right: .5rem }\n\n.pb1 { padding-bottom: .5rem }\n\n.pl1 { padding-left: .5rem }\n\n.py1 { padding-top: .5rem; padding-bottom: .5rem }\n\n.px1 { padding-left: .5rem; padding-right: .5rem }\n\n.p2  { padding: 1rem }\n\n.pt2 { padding-top: 1rem }\n\n.pr2 { padding-right: 1rem }\n\n.pb2 { padding-bottom: 1rem }\n\n.pl2 { padding-left: 1rem }\n\n.py2 { padding-top: 1rem; padding-bottom: 1rem }\n\n.px2 { padding-left: 1rem; padding-right: 1rem }\n\n.p3  { padding: 2rem }\n\n.pt3 { padding-top: 2rem }\n\n.pr3 { padding-right: 2rem }\n\n.pb3 { padding-bottom: 2rem }\n\n.pl3 { padding-left: 2rem }\n\n.py3 { padding-top: 2rem; padding-bottom: 2rem }\n\n.px3 { padding-left: 2rem; padding-right: 2rem }\n\n.p4  { padding: 4rem }\n\n.pt4 { padding-top: 4rem }\n\n.pr4 { padding-right: 4rem }\n\n.pb4 { padding-bottom: 4rem }\n\n.pl4 { padding-left: 4rem }\n\n.py4 { padding-top: 4rem; padding-bottom: 4rem }\n\n.px4 { padding-left: 4rem; padding-right: 4rem }\n\n/* Basscss Grid */\n\n.col {\n  float: left;\n  box-sizing: border-box;\n}\n\n.col-right {\n  float: right;\n  box-sizing: border-box;\n}\n\n.col-1 {\n  width: calc(1/12 * 100%);\n}\n\n.col-2 {\n  width: calc(2/12 * 100%);\n}\n\n.col-3 {\n  width: calc(3/12 * 100%);\n}\n\n.col-4 {\n  width: calc(4/12 * 100%);\n}\n\n.col-5 {\n  width: calc(5/12 * 100%);\n}\n\n.col-6 {\n  width: calc(6/12 * 100%);\n}\n\n.col-7 {\n  width: calc(7/12 * 100%);\n}\n\n.col-8 {\n  width: calc(8/12 * 100%);\n}\n\n.col-9 {\n  width: calc(9/12 * 100%);\n}\n\n.col-10 {\n  width: calc(10/12 * 100%);\n}\n\n.col-11 {\n  width: calc(11/12 * 100%);\n}\n\n.col-12 {\n  width: 100%;\n}\n\n@media (min-width: 40em) {\n\n  .sm-col {\n    float: left;\n    box-sizing: border-box;\n  }\n\n  .sm-col-right {\n    float: right;\n    box-sizing: border-box;\n  }\n\n  .sm-col-1 {\n    width: calc(1/12 * 100%);\n  }\n\n  .sm-col-2 {\n    width: calc(2/12 * 100%);\n  }\n\n  .sm-col-3 {\n    width: calc(3/12 * 100%);\n  }\n\n  .sm-col-4 {\n    width: calc(4/12 * 100%);\n  }\n\n  .sm-col-5 {\n    width: calc(5/12 * 100%);\n  }\n\n  .sm-col-6 {\n    width: calc(6/12 * 100%);\n  }\n\n  .sm-col-7 {\n    width: calc(7/12 * 100%);\n  }\n\n  .sm-col-8 {\n    width: calc(8/12 * 100%);\n  }\n\n  .sm-col-9 {\n    width: calc(9/12 * 100%);\n  }\n\n  .sm-col-10 {\n    width: calc(10/12 * 100%);\n  }\n\n  .sm-col-11 {\n    width: calc(11/12 * 100%);\n  }\n\n  .sm-col-12 {\n    width: 100%;\n  }\n\n}\n\n@media (min-width: 52em) {\n\n  .md-col {\n    float: left;\n    box-sizing: border-box;\n  }\n\n  .md-col-right {\n    float: right;\n    box-sizing: border-box;\n  }\n\n  .md-col-1 {\n    width: calc(1/12 * 100%);\n  }\n\n  .md-col-2 {\n    width: calc(2/12 * 100%);\n  }\n\n  .md-col-3 {\n    width: calc(3/12 * 100%);\n  }\n\n  .md-col-4 {\n    width: calc(4/12 * 100%);\n  }\n\n  .md-col-5 {\n    width: calc(5/12 * 100%);\n  }\n\n  .md-col-6 {\n    width: calc(6/12 * 100%);\n  }\n\n  .md-col-7 {\n    width: calc(7/12 * 100%);\n  }\n\n  .md-col-8 {\n    width: calc(8/12 * 100%);\n  }\n\n  .md-col-9 {\n    width: calc(9/12 * 100%);\n  }\n\n  .md-col-10 {\n    width: calc(10/12 * 100%);\n  }\n\n  .md-col-11 {\n    width: calc(11/12 * 100%);\n  }\n\n  .md-col-12 {\n    width: 100%;\n  }\n\n}\n\n@media (min-width: 64em) {\n\n  .lg-col {\n    float: left;\n    box-sizing: border-box;\n  }\n\n  .lg-col-right {\n    float: right;\n    box-sizing: border-box;\n  }\n\n  .lg-col-1 {\n    width: calc(1/12 * 100%);\n  }\n\n  .lg-col-2 {\n    width: calc(2/12 * 100%);\n  }\n\n  .lg-col-3 {\n    width: calc(3/12 * 100%);\n  }\n\n  .lg-col-4 {\n    width: calc(4/12 * 100%);\n  }\n\n  .lg-col-5 {\n    width: calc(5/12 * 100%);\n  }\n\n  .lg-col-6 {\n    width: calc(6/12 * 100%);\n  }\n\n  .lg-col-7 {\n    width: calc(7/12 * 100%);\n  }\n\n  .lg-col-8 {\n    width: calc(8/12 * 100%);\n  }\n\n  .lg-col-9 {\n    width: calc(9/12 * 100%);\n  }\n\n  .lg-col-10 {\n    width: calc(10/12 * 100%);\n  }\n\n  .lg-col-11 {\n    width: calc(11/12 * 100%);\n  }\n\n  .lg-col-12 {\n    width: 100%;\n  }\n\n}\n\n.flex { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex }\n\n@media (min-width: 40em) {\n  .sm-flex { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex }\n}\n\n@media (min-width: 52em) {\n  .md-flex { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex }\n}\n\n@media (min-width: 64em) {\n  .lg-flex { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex }\n}\n\n.flex-column  { -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column }\n\n.flex-wrap    { -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap }\n\n.items-start    { -webkit-box-align: start; -webkit-align-items: flex-start; -ms-flex-align: start; -ms-grid-row-align: flex-start; align-items: flex-start }\n\n.items-end      { -webkit-box-align: end; -webkit-align-items: flex-end; -ms-flex-align: end; -ms-grid-row-align: flex-end; align-items: flex-end }\n\n.items-center   { -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; -ms-grid-row-align: center; align-items: center }\n\n.items-baseline { -webkit-box-align: baseline; -webkit-align-items: baseline; -ms-flex-align: baseline; -ms-grid-row-align: baseline; align-items: baseline }\n\n.items-stretch  { -webkit-box-align: stretch; -webkit-align-items: stretch; -ms-flex-align: stretch; -ms-grid-row-align: stretch; align-items: stretch }\n\n.self-start    { -webkit-align-self: flex-start; -ms-flex-item-align: start; align-self: flex-start }\n\n.self-end      { -webkit-align-self: flex-end; -ms-flex-item-align: end; align-self: flex-end }\n\n.self-center   { -webkit-align-self: center; -ms-flex-item-align: center; align-self: center }\n\n.self-baseline { -webkit-align-self: baseline; -ms-flex-item-align: baseline; align-self: baseline }\n\n.self-stretch  { -webkit-align-self: stretch; -ms-flex-item-align: stretch; align-self: stretch }\n\n.justify-start   { -webkit-box-pack: start; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start }\n\n.justify-end     { -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end }\n\n.justify-center  { -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center }\n\n.justify-between { -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between }\n\n.justify-around  { -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around }\n\n.content-start   { -webkit-align-content: flex-start; -ms-flex-line-pack: start; align-content: flex-start }\n\n.content-end     { -webkit-align-content: flex-end; -ms-flex-line-pack: end; align-content: flex-end }\n\n.content-center  { -webkit-align-content: center; -ms-flex-line-pack: center; align-content: center }\n\n.content-between { -webkit-align-content: space-between; -ms-flex-line-pack: justify; align-content: space-between }\n\n.content-around  { -webkit-align-content: space-around; -ms-flex-line-pack: distribute; align-content: space-around }\n\n.content-stretch { -webkit-align-content: stretch; -ms-flex-line-pack: stretch; align-content: stretch }\n\n/* 1. Fix for Chrome 44 bug. https://code.google.com/p/chromium/issues/detail?id=506893 */\n\n.flex-auto {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  min-width: 0; /* 1 */\n  min-height: 0; /* 1 */\n}\n\n.flex-none { -webkit-box-flex: 0; -webkit-flex: none; -ms-flex: none; flex: none }\n\n.order-0 { -webkit-box-ordinal-group: 1; -webkit-order: 0; -ms-flex-order: 0; order: 0 }\n\n.order-1 { -webkit-box-ordinal-group: 2; -webkit-order: 1; -ms-flex-order: 1; order: 1 }\n\n.order-2 { -webkit-box-ordinal-group: 3; -webkit-order: 2; -ms-flex-order: 2; order: 2 }\n\n.order-3 { -webkit-box-ordinal-group: 4; -webkit-order: 3; -ms-flex-order: 3; order: 3 }\n\n.order-last { -webkit-box-ordinal-group: 100000; -webkit-order: 99999; -ms-flex-order: 99999; order: 99999 }\n\n/* Basscss Position */\n\n.relative { position: relative }\n\n.absolute { position: absolute }\n\n.fixed    { position: fixed }\n\n.top-0    { top: 0 }\n\n.right-0  { right: 0 }\n\n.bottom-0 { bottom: 0 }\n\n.left-0   { left: 0 }\n\n.z1 { z-index: 1 }\n\n.z2 { z-index: 2 }\n\n.z3 { z-index: 3 }\n\n.z4 { z-index: 4 }\n\n/* Basscss Border */\n\n.border {\n  border-style: solid;\n  border-width: 1px;\n}\n\n.border-top {\n  border-top-style: solid;\n  border-top-width: 1px;\n}\n\n.border-right {\n  border-right-style: solid;\n  border-right-width: 1px;\n}\n\n.border-bottom {\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n}\n\n.border-left {\n  border-left-style: solid;\n  border-left-width: 1px;\n}\n\n.border-none { border: 0 }\n\n.rounded { border-radius: 3px }\n\n.circle  { border-radius: 50% }\n\n.rounded-top    { border-radius: 3px 3px 0 0 }\n\n.rounded-right  { border-radius: 0 3px 3px 0 }\n\n.rounded-bottom { border-radius: 0 0 3px 3px }\n\n.rounded-left   { border-radius: 3px 0 0 3px }\n\n.not-rounded { border-radius: 0 }\n\n/* Basscss Hide */\n\n.hide {\n  position: absolute !important;\n  height: 1px;\n  width: 1px;\n  overflow: hidden;\n  clip: rect(1px, 1px, 1px, 1px);\n}\n\n@media (max-width: 40em) {\n  .xs-hide { display: none !important }\n}\n\n@media (min-width: 40em) and (max-width: 52em) {\n  .sm-hide { display: none !important }\n}\n\n@media (min-width: 52em) and (max-width: 64em) {\n  .md-hide { display: none !important }\n}\n\n@media (min-width: 64em) {\n  .lg-hide { display: none !important }\n}\n\n.display-none { display: none !important }\n\n/* Basscss Responsive Margin */\n\n@media (min-width: 40em) {\n\n  .sm-m0  { margin:        0 }\n  .sm-mt0 { margin-top:    0 }\n  .sm-mr0 { margin-right:  0 }\n  .sm-mb0 { margin-bottom: 0 }\n  .sm-ml0 { margin-left:   0 }\n  .sm-mx0 { margin-left:   0; margin-right:  0 }\n  .sm-my0 { margin-top:    0; margin-bottom: 0 }\n\n  .sm-m1  { margin: .5rem }\n  .sm-mt1 { margin-top: .5rem }\n  .sm-mr1 { margin-right: .5rem }\n  .sm-mb1 { margin-bottom: .5rem }\n  .sm-ml1 { margin-left: .5rem }\n  .sm-mx1 { margin-left: .5rem; margin-right: .5rem }\n  .sm-my1 { margin-top: .5rem; margin-bottom: .5rem }\n\n  .sm-m2  { margin: 1rem }\n  .sm-mt2 { margin-top: 1rem }\n  .sm-mr2 { margin-right: 1rem }\n  .sm-mb2 { margin-bottom: 1rem }\n  .sm-ml2 { margin-left: 1rem }\n  .sm-mx2 { margin-left: 1rem; margin-right: 1rem }\n  .sm-my2 { margin-top: 1rem; margin-bottom: 1rem }\n\n  .sm-m3  { margin: 2rem }\n  .sm-mt3 { margin-top: 2rem }\n  .sm-mr3 { margin-right: 2rem }\n  .sm-mb3 { margin-bottom: 2rem }\n  .sm-ml3 { margin-left: 2rem }\n  .sm-mx3 { margin-left: 2rem; margin-right: 2rem }\n  .sm-my3 { margin-top: 2rem; margin-bottom: 2rem }\n\n  .sm-m4  { margin: 4rem }\n  .sm-mt4 { margin-top: 4rem }\n  .sm-mr4 { margin-right: 4rem }\n  .sm-mb4 { margin-bottom: 4rem }\n  .sm-ml4 { margin-left: 4rem }\n  .sm-mx4 { margin-left: 4rem; margin-right: 4rem }\n  .sm-my4 { margin-top: 4rem; margin-bottom: 4rem }\n\n  .sm-mxn1 { margin-left: -.5rem; margin-right: -.5rem }\n  .sm-mxn2 { margin-left: -1rem; margin-right: -1rem }\n  .sm-mxn3 { margin-left: -2rem; margin-right: -2rem }\n  .sm-mxn4 { margin-left: -4rem; margin-right: -4rem }\n\n  .sm-ml-auto { margin-left:  auto }\n  .sm-mr-auto { margin-right: auto }\n  .sm-mx-auto { margin-left:  auto; margin-right: auto }\n\n}\n\n@media (min-width: 52em) {\n\n  .md-m0  { margin:        0 }\n  .md-mt0 { margin-top:    0 }\n  .md-mr0 { margin-right:  0 }\n  .md-mb0 { margin-bottom: 0 }\n  .md-ml0 { margin-left:   0 }\n  .md-mx0 { margin-left:   0; margin-right:  0 }\n  .md-my0 { margin-top:    0; margin-bottom: 0 }\n\n  .md-m1  { margin: .5rem }\n  .md-mt1 { margin-top: .5rem }\n  .md-mr1 { margin-right: .5rem }\n  .md-mb1 { margin-bottom: .5rem }\n  .md-ml1 { margin-left: .5rem }\n  .md-mx1 { margin-left: .5rem; margin-right: .5rem }\n  .md-my1 { margin-top: .5rem; margin-bottom: .5rem }\n\n  .md-m2  { margin: 1rem }\n  .md-mt2 { margin-top: 1rem }\n  .md-mr2 { margin-right: 1rem }\n  .md-mb2 { margin-bottom: 1rem }\n  .md-ml2 { margin-left: 1rem }\n  .md-mx2 { margin-left: 1rem; margin-right: 1rem }\n  .md-my2 { margin-top: 1rem; margin-bottom: 1rem }\n\n  .md-m3  { margin: 2rem }\n  .md-mt3 { margin-top: 2rem }\n  .md-mr3 { margin-right: 2rem }\n  .md-mb3 { margin-bottom: 2rem }\n  .md-ml3 { margin-left: 2rem }\n  .md-mx3 { margin-left: 2rem; margin-right: 2rem }\n  .md-my3 { margin-top: 2rem; margin-bottom: 2rem }\n\n  .md-m4  { margin: 4rem }\n  .md-mt4 { margin-top: 4rem }\n  .md-mr4 { margin-right: 4rem }\n  .md-mb4 { margin-bottom: 4rem }\n  .md-ml4 { margin-left: 4rem }\n  .md-mx4 { margin-left: 4rem; margin-right: 4rem }\n  .md-my4 { margin-top: 4rem; margin-bottom: 4rem }\n\n  .md-mxn1 { margin-left: -.5rem; margin-right: -.5rem; }\n  .md-mxn2 { margin-left: -1rem; margin-right: -1rem; }\n  .md-mxn3 { margin-left: -2rem; margin-right: -2rem; }\n  .md-mxn4 { margin-left: -4rem; margin-right: -4rem; }\n\n  .md-ml-auto { margin-left:  auto }\n  .md-mr-auto { margin-right: auto }\n  .md-mx-auto { margin-left: auto; margin-right: auto; }\n\n}\n\n@media (min-width: 64em) {\n\n  .lg-m0  { margin:        0 }\n  .lg-mt0 { margin-top:    0 }\n  .lg-mr0 { margin-right:  0 }\n  .lg-mb0 { margin-bottom: 0 }\n  .lg-ml0 { margin-left:   0 }\n  .lg-mx0 { margin-left:   0; margin-right:  0 }\n  .lg-my0 { margin-top:    0; margin-bottom: 0 }\n\n  .lg-m1  { margin: .5rem }\n  .lg-mt1 { margin-top: .5rem }\n  .lg-mr1 { margin-right: .5rem }\n  .lg-mb1 { margin-bottom: .5rem }\n  .lg-ml1 { margin-left: .5rem }\n  .lg-mx1 { margin-left: .5rem; margin-right: .5rem }\n  .lg-my1 { margin-top: .5rem; margin-bottom: .5rem }\n\n  .lg-m2  { margin: 1rem }\n  .lg-mt2 { margin-top: 1rem }\n  .lg-mr2 { margin-right: 1rem }\n  .lg-mb2 { margin-bottom: 1rem }\n  .lg-ml2 { margin-left: 1rem }\n  .lg-mx2 { margin-left: 1rem; margin-right: 1rem }\n  .lg-my2 { margin-top: 1rem; margin-bottom: 1rem }\n\n  .lg-m3  { margin: 2rem }\n  .lg-mt3 { margin-top: 2rem }\n  .lg-mr3 { margin-right: 2rem }\n  .lg-mb3 { margin-bottom: 2rem }\n  .lg-ml3 { margin-left: 2rem }\n  .lg-mx3 { margin-left: 2rem; margin-right: 2rem }\n  .lg-my3 { margin-top: 2rem; margin-bottom: 2rem }\n\n  .lg-m4  { margin: 4rem }\n  .lg-mt4 { margin-top: 4rem }\n  .lg-mr4 { margin-right: 4rem }\n  .lg-mb4 { margin-bottom: 4rem }\n  .lg-ml4 { margin-left: 4rem }\n  .lg-mx4 { margin-left: 4rem; margin-right: 4rem }\n  .lg-my4 { margin-top: 4rem; margin-bottom: 4rem }\n\n  .lg-mxn1 { margin-left: -.5rem; margin-right: -.5rem; }\n  .lg-mxn2 { margin-left: -1rem; margin-right: -1rem; }\n  .lg-mxn3 { margin-left: -2rem; margin-right: -2rem; }\n  .lg-mxn4 { margin-left: -4rem; margin-right: -4rem; }\n\n  .lg-ml-auto { margin-left:  auto }\n  .lg-mr-auto { margin-right: auto }\n  .lg-mx-auto { margin-left: auto; margin-right: auto; }\n\n}\n\n/* Basscss Responsive Padding */\n\n@media (min-width: 40em) {\n\n  .sm-p0  { padding:        0 }\n  .sm-pt0 { padding-top:    0 }\n  .sm-pr0 { padding-right:  0 }\n  .sm-pb0 { padding-bottom: 0 }\n  .sm-pl0 { padding-left:   0 }\n  .sm-px0 { padding-left:   0; padding-right:  0 }\n  .sm-py0 { padding-top:    0; padding-bottom: 0 }\n\n  .sm-p1  { padding: .5rem }\n  .sm-pt1 { padding-top: .5rem }\n  .sm-pr1 { padding-right: .5rem }\n  .sm-pb1 { padding-bottom: .5rem }\n  .sm-pl1 { padding-left: .5rem }\n  .sm-px1 { padding-left: .5rem; padding-right: .5rem }\n  .sm-py1 { padding-top: .5rem; padding-bottom: .5rem }\n\n  .sm-p2  { padding: 1rem }\n  .sm-pt2 { padding-top: 1rem }\n  .sm-pr2 { padding-right: 1rem }\n  .sm-pb2 { padding-bottom: 1rem }\n  .sm-pl2 { padding-left: 1rem }\n  .sm-px2 { padding-left: 1rem; padding-right: 1rem }\n  .sm-py2 { padding-top: 1rem; padding-bottom: 1rem }\n\n  .sm-p3  { padding: 2rem }\n  .sm-pt3 { padding-top: 2rem }\n  .sm-pr3 { padding-right: 2rem }\n  .sm-pb3 { padding-bottom: 2rem }\n  .sm-pl3 { padding-left: 2rem }\n  .sm-px3 { padding-left: 2rem; padding-right: 2rem }\n  .sm-py3 { padding-top: 2rem; padding-bottom: 2rem }\n\n  .sm-p4  { padding: 4rem }\n  .sm-pt4 { padding-top: 4rem }\n  .sm-pr4 { padding-right: 4rem }\n  .sm-pb4 { padding-bottom: 4rem }\n  .sm-pl4 { padding-left: 4rem }\n  .sm-px4 { padding-left: 4rem; padding-right: 4rem }\n  .sm-py4 { padding-top: 4rem; padding-bottom: 4rem }\n\n}\n\n@media (min-width: 52em) {\n\n  .md-p0  { padding:        0 }\n  .md-pt0 { padding-top:    0 }\n  .md-pr0 { padding-right:  0 }\n  .md-pb0 { padding-bottom: 0 }\n  .md-pl0 { padding-left:   0 }\n  .md-px0 { padding-left:   0; padding-right:  0 }\n  .md-py0 { padding-top:    0; padding-bottom: 0 }\n\n  .md-p1  { padding: .5rem }\n  .md-pt1 { padding-top: .5rem }\n  .md-pr1 { padding-right: .5rem }\n  .md-pb1 { padding-bottom: .5rem }\n  .md-pl1 { padding-left: .5rem }\n  .md-px1 { padding-left: .5rem; padding-right: .5rem }\n  .md-py1 { padding-top: .5rem; padding-bottom: .5rem }\n\n  .md-p2  { padding: 1rem }\n  .md-pt2 { padding-top: 1rem }\n  .md-pr2 { padding-right: 1rem }\n  .md-pb2 { padding-bottom: 1rem }\n  .md-pl2 { padding-left: 1rem }\n  .md-px2 { padding-left: 1rem; padding-right: 1rem }\n  .md-py2 { padding-top: 1rem; padding-bottom: 1rem }\n\n  .md-p3  { padding: 2rem }\n  .md-pt3 { padding-top: 2rem }\n  .md-pr3 { padding-right: 2rem }\n  .md-pb3 { padding-bottom: 2rem }\n  .md-pl3 { padding-left: 2rem }\n  .md-px3 { padding-left: 2rem; padding-right: 2rem }\n  .md-py3 { padding-top: 2rem; padding-bottom: 2rem }\n\n  .md-p4  { padding: 4rem }\n  .md-pt4 { padding-top: 4rem }\n  .md-pr4 { padding-right: 4rem }\n  .md-pb4 { padding-bottom: 4rem }\n  .md-pl4 { padding-left: 4rem }\n  .md-px4 { padding-left: 4rem; padding-right: 4rem }\n  .md-py4 { padding-top: 4rem; padding-bottom: 4rem }\n\n}\n\n@media (min-width: 64em) {\n\n  .lg-p0  { padding:        0 }\n  .lg-pt0 { padding-top:    0 }\n  .lg-pr0 { padding-right:  0 }\n  .lg-pb0 { padding-bottom: 0 }\n  .lg-pl0 { padding-left:   0 }\n  .lg-px0 { padding-left:   0; padding-right:  0 }\n  .lg-py0 { padding-top:    0; padding-bottom: 0 }\n\n  .lg-p1  { padding: .5rem }\n  .lg-pt1 { padding-top: .5rem }\n  .lg-pr1 { padding-right: .5rem }\n  .lg-pb1 { padding-bottom: .5rem }\n  .lg-pl1 { padding-left: .5rem }\n  .lg-px1 { padding-left: .5rem; padding-right: .5rem }\n  .lg-py1 { padding-top: .5rem; padding-bottom: .5rem }\n\n  .lg-p2  { padding: 1rem }\n  .lg-pt2 { padding-top: 1rem }\n  .lg-pr2 { padding-right: 1rem }\n  .lg-pb2 { padding-bottom: 1rem }\n  .lg-pl2 { padding-left: 1rem }\n  .lg-px2 { padding-left: 1rem; padding-right: 1rem }\n  .lg-py2 { padding-top: 1rem; padding-bottom: 1rem }\n\n  .lg-p3  { padding: 2rem }\n  .lg-pt3 { padding-top: 2rem }\n  .lg-pr3 { padding-right: 2rem }\n  .lg-pb3 { padding-bottom: 2rem }\n  .lg-pl3 { padding-left: 2rem }\n  .lg-px3 { padding-left: 2rem; padding-right: 2rem }\n  .lg-py3 { padding-top: 2rem; padding-bottom: 2rem }\n\n  .lg-p4  { padding: 4rem }\n  .lg-pt4 { padding-top: 4rem }\n  .lg-pr4 { padding-right: 4rem }\n  .lg-pb4 { padding-bottom: 4rem }\n  .lg-pl4 { padding-left: 4rem }\n  .lg-px4 { padding-left: 4rem; padding-right: 4rem }\n  .lg-py4 { padding-top: 4rem; padding-bottom: 4rem }\n\n}\n\nbody {\n  background-color: #FAF4EF;\n  color: #2F3448;\n  font-family:\n    游ゴシック体, 'Yu Gothic', YuGothic, '\\30D2\\30E9\\30AE\\30CE\\89D2\\30B4\\30B7\\30C3\\30AF   Pro',\n    'Hiragino Kaku Gothic Pro', メイリオ, Meiryo, Osaka,\n    '\\FF2D\\FF33   \\FF30\\30B4\\30B7\\30C3\\30AF', 'MS PGothic', sans-serif;\n}\n\n.nav-link {\n  position: relative;\n}\n\n.nav-link a {\n  color: inherit;\n  text-decoration: none;\n}\n\n.nav-link .nav-link-bottom {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  width: 100%;\n  border-bottom: solid #2F3448 3px;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  -webkit-transition: 0.1s;\n  transition: 0.1s;\n}\n\n.nav-link:hover .nav-link-bottom {\n  width: calc(100% + 1rem);\n  -webkit-transition: 0.1s;\n  transition: 0.1s;\n}\n\nheader {\n  height: 28rem;\n  background-color: #6699A6;\n}\n\nheader .header-wrap {\n  width: 100%;\n}\n\nheader h1 {\n  line-height: 1.25em;\n  font-size: 3rem;\n}\n\nmain {\n  line-height: 1.75em;\n}\n\nmain h2 {\n  line-height: 1.5em;\n}\n", ""]);

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
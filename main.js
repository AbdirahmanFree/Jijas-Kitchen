/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    margin: 0;\n}\n\n\n#container {\n  overflow: auto;              \n  scrollbar-width: none;        \n  -ms-overflow-style: none;     \n}\n\n\n\n#container {\n    width: 100vw;\n    height: 100vh;\n    background-color: #E6E8E6;\n    display: grid;\n    grid-template-rows: 1fr 4fr 1fr;\n    grid-template-columns: 1fr;\n    color: #2B2B2B;\n    font-family: \"Inter\", sans-serif;\n    overflow-x: hidden;\n}\n\n#header {\n    background-color: #EEEEEE;\n    grid-area: 1/1/2/2;\n    position: sticky;\n    top: 0;\n    display: grid;\n    grid-template-rows: 1fr 3fr;\n    grid-template-columns: 1fr;\n    z-index: 2;\n}\n\n#navBar-header {\n    grid-area: 2/1/3/2;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    position: relative;\n}\n\n.flex {\n    display: flex;\n    align-items: center;\n}\n\n#logo-text {\n    font-size: 24;\n    font-weight: 700;\n\n}\n\n#logo-section {\n    justify-content: start;\n    position: relative;\n    right: 200px;\n}\n\n.nav-btn {\n    width: 70px;\n    padding-bottom: 20px;\n    height: 20px;\n    font-size: 20px;\n    background-color: #EEEEEE;\n    font-weight: 600;\n    border: none;\n}\n\n#nav-btn-section {\n    width: 220px;\n    gap: 10px;\n    justify-content: space-between;\n}\n\n.toolBar-header {\n    position: relative;\n}\n\n\n.tool-image {\n    max-width: 20px;\n    max-height: 20px;\n}\n\n#tool-images {\n    display: flex;\n    justify-content: end;\n    padding: 3px;\n    position: relative;\n    right: 20px;\n}\n\n#footer {\n    background-color: #EEEEEE;\n    grid-area: 3/1/4/2;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(6, 1fr);\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n}\n\n#footer > div {\n    align-self: center;\n    justify-self: center;\n    font-weight: 600;\n}\n\n#socials {\n    display: flex;\n}\n\n#socials img {\n    max-width: 20px;\n    max-height: 20px;\n    width: 20px;\n    height: 20px;\n}\n\n.food-image {\n    width: 100%;\n    height: auto;\n}\n\n.button {\n    width: 80px;\n    height: 40px;\n    border: none;\n    font-size: 30px;\n    opacity: 0.5;\n}\n\n.button-up {\n    background-color: #2B2B2B;\n    color: #EEEEEE;\n}\n\n.button-down {\n    background-color: #EEEEEE;\n    color: #2B2B2B;\n}\n\n#hero {\n    width: 1440px;\n    height: 960px;\n    z-index: 1;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    \n}\n\n#home {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n}\n\n#hours {\n    display: flex;\n    flex-direction: column;\n    background-color: #EEEEEE;\n    width: max-content;\n    height: max-content;\n    justify-self: center;\n    gap: 20px;\n    padding: 70px;\n    margin-bottom: 50px;\n    padding-bottom: 100px;\n    border-radius: 20px;\n    border: double #E6E8E6 10px;\n    align-self: center;\n}\n#hoursHead {\n    padding-bottom: 40px;\n\n}\n\n.food-Card {\n    width: 300px;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 3fr 1fr 2fr 1fr;\n    background-color: #EEEEEE;\n    border: double #E6E8E6 10px;\n    gap: 10px;\n    padding: 5px;\n    border-radius: 10px;\n}\n.food-Card-Image {\n    width: 100%;\n    height: auto;\n}\n\n#menu {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: auto;\n    justify-content: space-evenly;\n    row-gap: 20px;\n\n}\n\n#about {\n    background-color: #EEEEEE;\n    width: 900px;\n    height: 500px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    padding: 20px;\n    border-radius: 20px;\n    margin: 10px;\n    font-weight: 500;\n    justify-self: center;\n}\n\n#about-head {\n    margin-bottom: 70px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://jijas-kitchen/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://jijas-kitchen/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://jijas-kitchen/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://jijas-kitchen/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://jijas-kitchen/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://jijas-kitchen/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://jijas-kitchen/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://jijas-kitchen/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://jijas-kitchen/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   about: () => (/* binding */ about)\n/* harmony export */ });\nconst about = document.createElement(\"div\")\nabout.id = \"about\";\nconst about_head = document.createElement(\"h1\")\nabout_head.id = \"about-head\"\nabout_head.textContent = \"About Us\"\nconst about_text1 = document.createElement(\"p\")\nconst about_text2 = document.createElement(\"p\")\nabout_text1.textContent = \"Jija’s Kitchen started as a tiny apartment pop-up where late-night cravings turned into test-kitchen rituals. Friends kept coming back for “just one more bite,” and those kitchen-table experiments became our menu: smash burgers with lacy edges, Philly cheesesteaks loaded and melty, blistered margherita pizzas, and cozy bowls of chicken Alfredo. We cook like family—simple ingredients, hot griddles, fresh dough, real butter and cream—done with care and a little swagger.\"\nabout_text2.textContent = \"We believe great food should feel like home: welcoming, unpretentious, and made to share. From the first sizzle of a patty to the basil on a pizza fresh from the oven, everything here is made to order. Come hungry, leave happy, and bring a friend—there’s always a seat and a warm plate waiting at Jija’s Kitchen.\"\nabout.appendChild(about_head)\nabout.appendChild(about_text1)\nabout.appendChild(about_text2)\n\n\n\n//# sourceURL=webpack://jijas-kitchen/./src/about.js?\n}");

/***/ }),

/***/ "./src/assets/account.svg":
/*!********************************!*\
  !*** ./src/assets/account.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"d53d4267b335c525a47c.svg\";\n\n//# sourceURL=webpack://jijas-kitchen/./src/assets/account.svg?\n}");

/***/ }),

/***/ "./src/assets/cart.svg":
/*!*****************************!*\
  !*** ./src/assets/cart.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"a97e6118fdc6331ef39d.svg\";\n\n//# sourceURL=webpack://jijas-kitchen/./src/assets/cart.svg?\n}");

/***/ }),

/***/ "./src/assets/chickenAlfredo.webp":
/*!****************************************!*\
  !*** ./src/assets/chickenAlfredo.webp ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"3e6c9182c900f84bb230.webp\";\n\n//# sourceURL=webpack://jijas-kitchen/./src/assets/chickenAlfredo.webp?\n}");

/***/ }),

/***/ "./src/assets/instagram.svg":
/*!**********************************!*\
  !*** ./src/assets/instagram.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"51f90461c0dfed370bf6.svg\";\n\n//# sourceURL=webpack://jijas-kitchen/./src/assets/instagram.svg?\n}");

/***/ }),

/***/ "./src/assets/linkedin.svg":
/*!*********************************!*\
  !*** ./src/assets/linkedin.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"eaccfc4b453ff94aff73.svg\";\n\n//# sourceURL=webpack://jijas-kitchen/./src/assets/linkedin.svg?\n}");

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"22d3e04f67dc51330218.png\";\n\n//# sourceURL=webpack://jijas-kitchen/./src/assets/logo.png?\n}");

/***/ }),

/***/ "./src/assets/phillyCheeseSteak.jpg":
/*!******************************************!*\
  !*** ./src/assets/phillyCheeseSteak.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"ed418b2f265f80c8f204.jpg\";\n\n//# sourceURL=webpack://jijas-kitchen/./src/assets/phillyCheeseSteak.jpg?\n}");

/***/ }),

/***/ "./src/assets/pizza.jpg":
/*!******************************!*\
  !*** ./src/assets/pizza.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"8e0b75b98af0645f9d93.jpg\";\n\n//# sourceURL=webpack://jijas-kitchen/./src/assets/pizza.jpg?\n}");

/***/ }),

/***/ "./src/assets/smashBurger.jpg":
/*!************************************!*\
  !*** ./src/assets/smashBurger.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"b966a1e1f643bb4172bb.jpg\";\n\n//# sourceURL=webpack://jijas-kitchen/./src/assets/smashBurger.jpg?\n}");

/***/ }),

/***/ "./src/assets/twitter.svg":
/*!********************************!*\
  !*** ./src/assets/twitter.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"77a2f5734999924fb343.svg\";\n\n//# sourceURL=webpack://jijas-kitchen/./src/assets/twitter.svg?\n}");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   footer: () => (/* binding */ footer)\n/* harmony export */ });\n/* harmony import */ var _assets_linkedin_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/linkedin.svg */ \"./src/assets/linkedin.svg\");\n/* harmony import */ var _assets_instagram_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/instagram.svg */ \"./src/assets/instagram.svg\");\n/* harmony import */ var _assets_twitter_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/twitter.svg */ \"./src/assets/twitter.svg\");\n\n\n\nconst footer = document.createElement(\"div\");\nconst name = document.createElement(\"div\");\nconst location = document.createElement(\"div\");\nconst number = document.createElement(\"div\");\nconst email = document.createElement(\"div\");\nconst socials = document.createElement(\"div\");\nconst copyrwrite = document.createElement(\"div\")\nconst linkedin = document.createElement(\"img\")\nconst instagram = document.createElement(\"img\")\nconst twitter = document.createElement(\"img\")\n\n\n///name \nname.id = \"name\"\nname.textContent = \"Jija's Kitchen\"\n\n//location\nlocation.id = \"location\"\nlocation.textContent = \"80 Brock Rd S, Aberfoyle, Ontario, Canada, N1H 6H9\"\n\n//number\nnumber.id = \"number\"\nnumber.textContent = \"(519) 763-1070\"\n\n// email\nemail.id = \"email\"\nemail.textContent = \"info@jijaskitchen.com\"\n\n// socials\nlinkedin.src = _assets_linkedin_svg__WEBPACK_IMPORTED_MODULE_0__\ntwitter.src = _assets_twitter_svg__WEBPACK_IMPORTED_MODULE_2__;\ninstagram.src = _assets_instagram_svg__WEBPACK_IMPORTED_MODULE_1__;\nsocials.id = \"socials\"\nsocials.appendChild(linkedin)\nsocials.appendChild(twitter)\nsocials.appendChild(instagram)\n\n// copywrite \ncopyrwrite.id = \"copywrite\"\ncopyrwrite.textContent = \"© 2025 Jija's Kitchen.\"\n\n\n\n\n\nfooter.appendChild(name)\nfooter.appendChild(location)\nfooter.appendChild(number)\nfooter.appendChild(email)\nfooter.appendChild(socials)\nfooter.appendChild(copyrwrite)\n\nfooter.id = \"footer\"\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://jijas-kitchen/./src/footer.js?\n}");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getPage: () => (/* binding */ getPage),\n/* harmony export */   header: () => (/* binding */ header)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/logo.png */ \"./src/assets/logo.png\");\n/* harmony import */ var _assets_account_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/account.svg */ \"./src/assets/account.svg\");\n/* harmony import */ var _assets_cart_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/cart.svg */ \"./src/assets/cart.svg\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\n\n\n\n\n\n\n\n\nlet page = \"home\"\n\n// The necessary dom elements\nconst header = document.createElement(\"div\");\nconst toolbar = document.createElement(\"div\");\nconst navBar = document.createElement(\"div\");\nconst logoText = document.createElement(\"div\");\nconst image = document.createElement(\"img\");\nconst homeBtn = document.createElement(\"button\");\nconst menuBtn = document.createElement(\"button\");\nconst aboutBtn = document.createElement(\"button\")\nconst navBtns = document.createElement(\"div\");\nconst toolImages = document.createElement(\"div\");\nconst accountImage = document.createElement(\"img\");\nconst cartImage = document.createElement(\"img\");\nconst smallText = document.createElement(\"div\");\n\n// Adding Id's\nheader.id = \"header\";\ntoolbar.id = \"toolBar-header\";\nnavBar.id = \"navBar-header\";\n\n// Tool Bar sectiorn\nheader.appendChild(toolbar);\ntoolImages.id = \"tool-images\";\naccountImage.src = _assets_account_svg__WEBPACK_IMPORTED_MODULE_2__;\ncartImage.src = _assets_cart_svg__WEBPACK_IMPORTED_MODULE_3__;\ncartImage.classList.add(\"tool-image\")\naccountImage.classList.add(\"tool-image\")\ntoolImages.appendChild(accountImage)\ntoolImages.appendChild(cartImage)\ntoolbar.appendChild(toolImages)\n\n\n//Nav Bar section\nheader.appendChild(navBar)\n\n// Logo and text\nlogoText.classList.add(\"flex\")\nlogoText.id = \"logo-section\"\n\nsmallText.textContent = \"Jija's Kitchen\";\nsmallText.id = \"logo-text\"\nimage.src = _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__\nlogoText.appendChild(image)\nlogoText.appendChild(smallText)\nnavBar.appendChild(logoText)\n\n////// Nav button section\n\nnavBtns.classList.add(\"flex\")\nnavBtns.id = \"nav-btn-section\"\n\n//Home Button\nhomeBtn.classList.add(\"nav-btn\")\nhomeBtn.style.borderBottom = \"3px solid orange\"\nhomeBtn.id = \"home-btn\";\nhomeBtn.textContent = \"Home\";\nhomeBtn.addEventListener(\"click\", () => {\n    homeBtn.style.borderBottom = \"3px solid orange\"\n    menuBtn.style.borderBottom = \"none\"\n    aboutBtn.style.borderBottom = \"none\"\n    page = \"home\"\n    ;(0,_index_js__WEBPACK_IMPORTED_MODULE_7__.changeContent)(_home__WEBPACK_IMPORTED_MODULE_4__.home)\n\n})\nnavBtns.appendChild(homeBtn)\n\n// Menu Button\nmenuBtn.classList.add(\"nav-btn\")\nmenuBtn.id = \"menu-btn\";\nmenuBtn.textContent = \"Menu\";\nmenuBtn.addEventListener(\"click\", () => {\n    menuBtn.style.borderBottom = \"3px solid orange\"\n    homeBtn.style.borderBottom = \"none\"\n    aboutBtn.style.borderBottom = \"none\"\n    page = \"menu\"\n    ;(0,_index_js__WEBPACK_IMPORTED_MODULE_7__.changeContent)(_menu__WEBPACK_IMPORTED_MODULE_5__.menu)\n\n\n})\nnavBtns.appendChild(menuBtn)\n\n// About Button\naboutBtn.classList.add(\"nav-btn\")\naboutBtn.id = \"about-btn\";\naboutBtn.textContent = \"About\";\naboutBtn.addEventListener(\"click\", () => {\n    aboutBtn.style.borderBottom = \"3px solid orange\"\n    homeBtn.style.borderBottom = \"none\"\n    menuBtn.style.borderBottom = \"none\"\n    page = \"about\"\n    ;(0,_index_js__WEBPACK_IMPORTED_MODULE_7__.changeContent)(_about__WEBPACK_IMPORTED_MODULE_6__.about)\n\n})\n\nnavBtns.appendChild(aboutBtn)\n\nnavBar.appendChild(navBtns)\n\n///////////////////////////////////\n\nfunction getPage(){\n    return page;\n}\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://jijas-kitchen/./src/header.js?\n}");

/***/ }),

/***/ "./src/hero.js":
/*!*********************!*\
  !*** ./src/hero.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   hero: () => (/* binding */ hero)\n/* harmony export */ });\n/* harmony import */ var _assets_smashBurger_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/smashBurger.jpg */ \"./src/assets/smashBurger.jpg\");\n/* harmony import */ var _assets_phillyCheeseSteak_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/phillyCheeseSteak.jpg */ \"./src/assets/phillyCheeseSteak.jpg\");\n/* harmony import */ var _assets_chickenAlfredo_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/chickenAlfredo.webp */ \"./src/assets/chickenAlfredo.webp\");\n/* harmony import */ var _assets_pizza_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/pizza.jpg */ \"./src/assets/pizza.jpg\");\n\n\n\n\n\nlet itemIndex = 0\n\nconst hero = document.createElement(\"div\");\nhero.id = \"hero\"\nhero.style.position = \"relative\"\n\nconst smashBurger = document.createElement(\"img\");\nsmashBurger.id =\"smash\";\nsmashBurger.src = _assets_smashBurger_jpg__WEBPACK_IMPORTED_MODULE_0__;\nsmashBurger.classList.add(\"food-image\")\n\nconst phillyCheeseSteak = document.createElement(\"img\");\nphillyCheeseSteak.id = \"philly\";\nphillyCheeseSteak.src = _assets_phillyCheeseSteak_jpg__WEBPACK_IMPORTED_MODULE_1__;\nphillyCheeseSteak.classList.add(\"food-image\")\n\n\nconst chickenAlfredo = document.createElement(\"img\");\nchickenAlfredo.id = \"alfredo\";\nchickenAlfredo.src = _assets_chickenAlfredo_webp__WEBPACK_IMPORTED_MODULE_2__;\nchickenAlfredo.classList.add(\"food-image\")\n\nconst pizza = document.createElement(\"img\");\npizza.id = \"pizza\";\npizza.src = _assets_pizza_jpg__WEBPACK_IMPORTED_MODULE_3__;\npizza.classList.add(\"food-image\")\n\n\n\n/// add burger to hero (default)\nhero.style.backgroundImage = `url(${smashBurger.src})`\n\nconst foodWheel = [smashBurger, phillyCheeseSteak, chickenAlfredo, pizza]\n\n// buttons to control which image we see\nconst nextBtn = document.createElement(\"button\");\nnextBtn.id =\"next\"\nnextBtn.classList.add(\"button\")\nnextBtn.classList.add(\"button-up\")\nnextBtn.textContent = \"→\"\nnextBtn.addEventListener(\"click\", () => {\n    nextImage();\n\n})\nnextBtn.addEventListener(\"mousedown\", () => {\n    nextBtn.classList.remove(\"button-up\");\n    nextBtn.classList.add(\"button-down\");\n})\nnextBtn.addEventListener(\"mouseup\", () => {\n    nextBtn.classList.remove(\"button-down\");\n    nextBtn.classList.add(\"button-up\");\n})\n\n\n\nconst previousBtn = document.createElement(\"button\")\npreviousBtn.id = \"previous\"\npreviousBtn.classList.add(\"button\")\npreviousBtn.classList.add(\"button-up\")\npreviousBtn.textContent = \"←\"\n\npreviousBtn.addEventListener(\"click\", () => {\n    previousImage();\n})\npreviousBtn.addEventListener(\"mousedown\", () => {\n    previousBtn.classList.remove(\"button-up\");\n    previousBtn.classList.add(\"button-down\");\n})\npreviousBtn.addEventListener(\"mouseup\", () => {\n    previousBtn.classList.remove(\"button-down\");\n    previousBtn.classList.add(\"button-up\");\n})\n\n\nhero.appendChild(previousBtn)\nhero.appendChild(nextBtn)\n\nfunction nextImage(){\n    itemIndex+=1\n    if (itemIndex >3) {\n        itemIndex = 0\n    }\n    hero.style.backgroundImage = `url(${foodWheel[itemIndex].src})`\n}\n\nfunction previousImage(){\n    itemIndex -=1\n    if (itemIndex <0){\n        itemIndex = 3\n    }\n     hero.style.backgroundImage = `url(${foodWheel[itemIndex].src})`\n\n}\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://jijas-kitchen/./src/hero.js?\n}");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   home: () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero */ \"./src/hero.js\");\n\nconst home = document.createElement(\"div\");\nhome.id = \"home\";\n\n/// build Hours section\nconst hours = document.createElement(\"div\");\nhours.id = \"hours\";\nconst hoursHead = document.createElement(\"h1\");\nhoursHead.textContent = \"Hours\"\nhoursHead.id = \"hoursHead\"\nhours.appendChild(hoursHead)\n\n\n\nconst days = [\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"];\n\nfor (const day of days){\n    const dayHours = document.createElement(\"h2\");\n    dayHours.id = `${day}`;\n    if (day == \"Sunday\"){\n        dayHours.textContent = `${day}: 11am - 8pm`;\n    }\n    else if( day == \"Saturday\") {\n        dayHours.textContent = `${day}: 11am - 12pm`;\n    }\n    else {\n        dayHours.textContent = `${day}: 10am - 12pm`\n    }\n    hours.appendChild(dayHours)\n}\n\n///////\nhome.appendChild(_hero__WEBPACK_IMPORTED_MODULE_0__.hero)\nhome.appendChild(hours)\n\n\n\n\n\n\n//# sourceURL=webpack://jijas-kitchen/./src/home.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changeContent: () => (/* binding */ changeContent)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n\n\n\n// Creating sections\nconst body = document.querySelector(\"body\");\nconst container = document.createElement(\"div\");\nconst content = document.createElement(\"div\");\n\n\n\n\n\n// Adding Id's to our main sections\ncontainer.id = \"container\";\ncontent.id = \"content\"\n\n// addind our main dections to the dom\ncontainer.appendChild(_header__WEBPACK_IMPORTED_MODULE_1__.header)\ncontent.appendChild(_home__WEBPACK_IMPORTED_MODULE_3__.home)\ncontainer.appendChild(content)\ncontainer.appendChild(_footer__WEBPACK_IMPORTED_MODULE_2__.footer)\nbody.appendChild(container)\n\nfunction changeContent(page){\n    const oldPage = content.firstChild\n    content.removeChild(oldPage)\n    content.appendChild(page)\n}\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://jijas-kitchen/./src/index.js?\n}");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menu: () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _assets_smashBurger_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/smashBurger.jpg */ \"./src/assets/smashBurger.jpg\");\n/* harmony import */ var _assets_phillyCheeseSteak_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/phillyCheeseSteak.jpg */ \"./src/assets/phillyCheeseSteak.jpg\");\n/* harmony import */ var _assets_chickenAlfredo_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/chickenAlfredo.webp */ \"./src/assets/chickenAlfredo.webp\");\n/* harmony import */ var _assets_pizza_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/pizza.jpg */ \"./src/assets/pizza.jpg\");\n\n\n\n\n\nconst menu = document.createElement(\"div\")\nmenu.id = \"menu\"\n\nclass FoodCard {\n    constructor(name, ingredients, img_url, calories){\n        this.name = name;\n        this.ingredients = ingredients;\n        this.img_url = img_url;\n        this.calories = calories;\n    }\n\n    createCard() {\n        const foodCard = document.createElement(\"div\");\n        foodCard.id = `${this.name}`;\n        foodCard.classList.add(\"food-Card\");\n        const foodImage = document.createElement(\"img\");\n        foodImage.classList.add(\"food-Card-Image\");\n        foodImage.src = `${this.img_url}`;\n        const name = document.createElement(\"h2\")\n        name.textContent = `${this.name}`\n        const ingredients =  document.createElement(\"p\");\n        ingredients.textContent = `${this.ingredients}`;\n        const calories = document.createElement(\"h3\");\n        calories.textContent = `Calories: ${this.calories}`;\n        foodCard.appendChild(foodImage);\n        foodCard.appendChild(name);\n        foodCard.appendChild(ingredients);\n        foodCard.appendChild(calories)\n        menu.appendChild(foodCard)\n\n    }\n}\nconst smashBurger = new FoodCard(\n    \"Smash Burger\",\n    \"ground beef (3 oz balls), salt and black pepper, Canadian cheese, soft buns (brioche), thin-sliced white onion, dill pickles, a quick smash sauce (mayo + ketchup + mustard), and a little butter for toasting the buns.\",\n    _assets_smashBurger_jpg__WEBPACK_IMPORTED_MODULE_0__,\n    \"800\"\n)\nconst phillyCheeseSteak = new FoodCard(\n    \"Philly Cheese Steak\",\n    \"Thin-sliced ribeye, sautéed onions, provolone, a soft hoagie roll, a touch of oil/butter, salt and pepper, mushrooms, peppers.\",\n    _assets_phillyCheeseSteak_jpg__WEBPACK_IMPORTED_MODULE_1__,\n    \"750\"\n\n)\nconst chickenAlfredo = new FoodCard(\n    \"Fettuccine Alfredo\",\n    \"Fettuccine, sautéed chicken breast, butter, heavy cream, Parmesan, garlic, salt, pepper; finish with parsley.\",\n    _assets_chickenAlfredo_webp__WEBPACK_IMPORTED_MODULE_2__,\n    \"820\"\n)\nconst margheritaPizza = new FoodCard(\n    \"Margherita Pizza\",\n    \"Pizza dough, crushed tomatoes (lightly salted), fresh mozzarella, fresh basil, extra-virgin olive oil, pinch of salt; bake hot for a blistered crust.\",\n    _assets_pizza_jpg__WEBPACK_IMPORTED_MODULE_3__,\n    \"720\"\n)\n\nsmashBurger.createCard()\nphillyCheeseSteak.createCard()\nchickenAlfredo.createCard()\nmargheritaPizza.createCard()\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://jijas-kitchen/./src/menu.js?\n}");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://jijas-kitchen/./src/style.css?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
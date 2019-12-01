(this["webpackJsonpreact-app"] = this["webpackJsonpreact-app"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "html, body {\n  max-width: 100%;\n  overflow-x: hidden;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/componets/Backdrop/Backdrop.css":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/componets/Backdrop/Backdrop.css ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".backdrop {\n    position: fixed;\n    top: 64px;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    background: rgb(50, 50, 50);\n    background: rgba(0, 0, 0, 0.5);\n    z-index: 100;\n}\n\n@media screen and (min-width: 600px) {\n    .backdrop {\n        display: none;\n    }\n   \n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/componets/Footer/Footer.css":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/componets/Footer/Footer.css ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".footer {\n    margin: 0px;\n    width: 100%;\n    height: 64px;\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    overflow: hidden;\n    background-color: var(--primary);\n}\n.footer p {\n    font-size: 1.0rem;\n    color: lightgray;\n    padding: 8px;\n}\n.social-media-bar {\n    padding: 10px;\n    padding-left: 20px;\n    margin: 0px;\n}\n.social-media-bar p {\n    font-size: 1.1rem;\n    color: white;\n    padding: 0px;\n    margin: 0px;\n}\n.social-media-icons {\n    padding: 0px;\n    margin-bottom: -30px;\n}\n.social-media-icons img {\n    padding: 5px;\n    margin-left: -5px;\n    height: 32px;\n    width: 32px;\n}\n\n.social-media-icons img:hover {\n    padding: 2px;\n    height: 38px;\n    width: 38px;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/componets/HamburgerMenu/HamburgerMenu.css":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/componets/HamburgerMenu/HamburgerMenu.css ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".hamburgerButton {\n    margin: 10px;\n    position: relative;\n    width: 30px;\n    height: 30px;\n  }\n  \n  .line {\n    position: absolute;\n    height: 4px;\n    width: 100%;\n    background-color: lightGray;\n    border-radius: 2px;\n    transition: all cubic-bezier(0.25, 0.1, 0.3, 1.5) 0.3s;\n  }\n  \n  #hamburger:hover .line {\n    background-color: white;\n  }\n  \n  .line1 {\n    top: 5%;\n  }\n  .line2 {\n    top: 43%;\n  }\n  .line3 {\n    top: 81%;\n  }\n  \n  #hamburger {\n    visibility: hidden;\n    cursor: pointer;\n  }\n  \n  #hamburger.close .line1 {\n    transform: rotate(45deg);\n    top: 48%;\n  }\n  \n  #hamburger.close .line2, #hamburger.close .line3 {\n    transform: rotate(-45deg);\n    top: 48%;\n  }\n  \n  \n  \n  #hamburgerMenu {\n    visibility: visible;\n  }\n  \n  #hamburgerMenu ul {\n    display: inline-block;\n    width: 100%;\n    height: 100%;\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    background-color: #6c7373;\n  }\n  \n  #hamburgerMenu ul li a:hover {\n    background-color: white;\n    text-decoration: underline;\n  }\n\n  @media screen and (max-width: 600px) {\n \n    #hamburger {\n      visibility: visible;\n    }\n    #hamburgerMenu li {\n      width: 100%;\n  \n    }\n  \n    #hamburgerMenu {\n      visibility: hidden;\n      height: 0px;\n    }\n  \n    #hamburgerMenu.close {\n      height: auto;\n      visibility: visible;\n    }\n  \n  }\n  \n  ", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/componets/HamburgerMenu/SideDrawer.css":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/componets/HamburgerMenu/SideDrawer.css ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".side-drawer {\n    height: 100%;\n    background: var(--background-primary);\n    position: fixed;\n    top: 64px;\n    left: 0;\n    width: 70%;\n    max-width: 300px;\n    z-index: 200;\n    transform: translateX(-100%);\n    transition: transform 0.3s ease-out;\n\n}\n\n.side-drawer ul{\n    height: 100%;\n    list-style: none;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.side-drawer li {\n    margin: 0.5rem 0;\n    color: var(--primary);\n    font-size: 1.3rem;\n}\n\n.side-drawer a{\n    color: var(--primary);\n    text-decoration: none;\n}\n\n.side-drawer a:hover, .side-drawer a:active {\n    color: var(--secondary);\n    text-decoration: none;\n}\n\n\n\n.open {\n    transform: translateX(0%);\n    box-shadow: 1px 0px 1px rgba(0, 0, 0);\n    box-shadow: 2px 0px 3px rgba(0, 0, 0, 0.5);\n}\n\n.side-drawer-spacing {\n    flex: 1.0 1;\n}\n\n@media screen and (min-width: 600px) {\n    .side-drawer {\n        display: none;\n    }\n   \n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/componets/Navbar/Navbar.css":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/componets/Navbar/Navbar.css ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".navbar {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    background-color: var(--primary);\n    height: 64px;\n    z-index: 100;\n}\n\n.navbar-nav {\n    display: flex;\n    align-items: center;\n    height: 100%;\n    padding: 0 1rem;\n}\n\n.nav-spacing {\n    flex: 1.0 1;\n}\n\n.navbar-items ul {\n    list-style: none;\n    text-decoration: none;\n    padding: 0;\n    display: flex;\n}\n\n.navbar-items li{\n    padding: 0 0.5rem;\n}\n\n .navbar-items a {\n   background-color: var(--primary);\n   color: white;\n   text-decoration: none;\n   border-width: 0px;\n   font-size: 1.3em;\n   transition: 0.33s;\n }\n\n.navbar-items a:hover {\n    color: var(--secondary);\n    text-decoration: none;\n    outline-style: none;\n    cursor: pointer;\n}\n\n.logo a {\n    color: white;\n    text-decoration: none;\n    font-size: 2.3rem;\n    margin-left: 4rem;\n}\n\n.logo img {\n  position: absolute;\n  top: -10px;\n  left: -0.5px;\n  width:70px;\n}\n\n\n@media screen and (max-width: 600px) {\n    .navbar-items {\n        display: none;\n    }\n\n    .logo img {\n      display: none;\n    }\n\n    .home img {\n      display: none;\n    }\n}\n@media screen and (min-width: 600px) {\n    .hamburger-menu{\n        width: 0;\n    }\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nhtml, body {\n  max-width: 100%;\n  overflow-x: hidden;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/About/About.css":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/pages/About/About.css ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/Calendar/Calendar.css":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/pages/Calendar/Calendar.css ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/Home/Home.css":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/pages/Home/Home.css ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/Login/Login.css":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/pages/Login/Login.css ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".card {\n    width: 64vw;\n    min-width: 512px;\n    max-width: 512px;\n}    \n\n@media screen and (max-width: 650px) {\n    .card {\n        min-width: 85%;\n        max-width: 85%;\n        width: 85%;\n        margin: 8px;\n        padding: 16px;\n        margin-left: auto;\n        margin-right: auto;\n    }  \n    .padding {\n        padding: 2px;\n    }\n    .button, input {\n        font-size: 1rem;\n        height: 18px;\n        line-height: 18px;\n    }\n    input {\n        width: 80%;\n        margin-left: auto;\n        margin-right: auto;\n    }\n    h1 {\n        font-size: 1.7rem;\n    }\n    .header-title {\n        font-size: 1.9rem;\n    }\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/Root/Root.css":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/pages/Root/Root.css ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/Signup/Signup.css":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/pages/Signup/Signup.css ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/stylesheets/main.css":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/stylesheets/main.css ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../assets/fonts/ROCKET_WILDNESS.ttf */ "./src/assets/fonts/ROCKET_WILDNESS.ttf"));

// Module
exports.push([module.i, ":root {\n    /* Main colors used  for the website */\n    --primary: #007360;\n    /* Meant to be a slightly brighter color for buttons and gradients */\n    --primary-accent: #037764;\n\n\n    /* Colors for complimenting the other colors on the page */\n    --secondary: #a51417;\n    --secondary-accent: #af181b;\n\n    /* Colors used for the background */\n    --background-primary: #f9f9f9;\n    --background-secondary: #ffffff;\n}\n\n@font-face {\n    font-family: 'rocket';\n    src: url(" + ___CSS_LOADER_URL___0___ + ");\n}\nhtml, body {\n    max-width: 100%;\n    overflow-x: hidden;\n}\nbody {\n    margin: 0;\n    color: white;\n    background-color: var(--background-primary);\n\n}\n.header-title {\n    font-family: 'rocket';\n    font-size: 2.4rem;\n}\n.container {\n    background-color: var(--background-primary);\n    margin-top: 64px;\n    margin-bottom: 64px;\n    overflow: scroll;\n}\n.center {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 50%;\n}\n.padding {\n    padding: 32px;\n}\n.dark-text {\n    color: #6c7373;\n}\n.center-text {\n    text-align: center;\n}\n.card {\n    background-color: var(--background-secondary);\n    border-radius: 2px;\n    padding: 32px;\n    box-shadow: 0 2px 4px 0 rgb(0, 0, 0);\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);\n}\n.line-break {\n    height: 0.5px;\n    width: 90%;\n    margin: 20px auto;\n    background-color: rgb(150,150,150);\n\n}\n.hidden {\n    display: none;\n}\nform {\n    display: block;\n    margin: 0px;\n}\n.light {\n    background: #6c7373 !important; \n}\ninput {\n    font-size: 1.25rem;\n    padding: 0.75rem;\n    margin: 0.5rem;\n    line-height: 32px;\n    width: 91%;\n}\n.button {\n    font-size: 1.3rem;\n    padding: 0.75rem;\n    margin: 0.5rem;\n    text-align: center;\n    vertical-align: center;\n    background: var(--primary-accent);\n    color: white;\n    height: 32px;\n    line-height: 32px;\n    box-shadow: 0 1px 2px 0 rgb(0, 0, 0);\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);\n}\n.round {\n    border-radius: 32px;\n}\n.box {\n    border-radius: 0.25rem;\n}\n.button:hover{\n    cursor: pointer;\n}\n\n.button:active{\n    box-shadow: 0 1px 2px 0 rgb(0, 0, 0);\n    box-shadow: 0 8px 16px 0 RGBA(0, 0, 0, 0.2);\n}\n.input-block {\n    display: block;\n    width: 100%;\n}\n.error-message {\n    color: rgb(210, 0, 0);\n}\na, a:link {\n    color: #1264a3;\n    text-decoration: none;\n}", ""]);



/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stylesheets_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stylesheets/main.css */ "./src/stylesheets/main.css");
/* harmony import */ var _stylesheets_main_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_main_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_Root_Root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/Root/Root */ "./src/pages/Root/Root.jsx");
/* harmony import */ var _pages_Home_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/Home/Home */ "./src/pages/Home/Home.jsx");
/* harmony import */ var _pages_About_About__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/About/About */ "./src/pages/About/About.jsx");
/* harmony import */ var _pages_Calendar_Calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/Calendar/Calendar */ "./src/pages/Calendar/Calendar.jsx");
/* harmony import */ var _pages_Login_Login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/Login/Login */ "./src/pages/Login/Login.jsx");
/* harmony import */ var _pages_Signup_Signup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/Signup/Signup */ "./src/pages/Signup/Signup.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/brad/Documents/washU/xctf/wulogger/website/react-app/src/App.js";











class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.aboutRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    console.log("Componet mounted");
  }

  componentWillUnmount() {
    console.log("Componet unmount");
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["BrowserRouter"], {
      basename: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_Root_Root__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Switch"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Route"], {
      path: "/login",
      component: _pages_Login_Login__WEBPACK_IMPORTED_MODULE_7__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Route"], {
      path: "/signup",
      component: _pages_Signup_Signup__WEBPACK_IMPORTED_MODULE_8__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Route"], {
      path: "/home",
      component: _pages_Home_Home__WEBPACK_IMPORTED_MODULE_4__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Route"], {
      path: "/calendar",
      component: _pages_Calendar_Calendar__WEBPACK_IMPORTED_MODULE_6__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Route"], {
      path: "/about",
      component: _pages_About_About__WEBPACK_IMPORTED_MODULE_5__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Route"], {
      path: "/",
      render: () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_Home_Home__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/assets/fonts/ROCKET_WILDNESS.ttf":
/*!**********************************************!*\
  !*** ./src/assets/fonts/ROCKET_WILDNESS.ttf ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ROCKET_WILDNESS.414afed1.ttf";

/***/ }),

/***/ "./src/assets/images/washu_mascot.png":
/*!********************************************!*\
  !*** ./src/assets/images/washu_mascot.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/washu_mascot.bf6fa415.png";

/***/ }),

/***/ "./src/componets/Backdrop/Backdrop.css":
/*!*********************************************!*\
  !*** ./src/componets/Backdrop/Backdrop.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Backdrop.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/componets/Backdrop/Backdrop.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Backdrop.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/componets/Backdrop/Backdrop.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Backdrop.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/componets/Backdrop/Backdrop.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/componets/Backdrop/Backdrop.jsx":
/*!*********************************************!*\
  !*** ./src/componets/Backdrop/Backdrop.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Backdrop_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Backdrop.css */ "./src/componets/Backdrop/Backdrop.css");
/* harmony import */ var _Backdrop_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Backdrop_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/brad/Documents/washU/xctf/wulogger/website/react-app/src/componets/Backdrop/Backdrop.jsx";



const backdrop = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "backdrop",
  onClick: props.click,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
});

/* harmony default export */ __webpack_exports__["default"] = (backdrop);

/***/ }),

/***/ "./src/componets/Footer/Footer.css":
/*!*****************************************!*\
  !*** ./src/componets/Footer/Footer.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Footer.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/componets/Footer/Footer.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Footer.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/componets/Footer/Footer.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Footer.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/componets/Footer/Footer.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/componets/Footer/Footer.jsx":
/*!*****************************************!*\
  !*** ./src/componets/Footer/Footer.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Footer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.css */ "./src/componets/Footer/Footer.css");
/* harmony import */ var _Footer_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Footer_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/brad/Documents/washU/xctf/wulogger/website/react-app/src/componets/Footer/Footer.jsx";



const footer = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "footer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, "Designed and built by members of WUXC"))) // <div></div>
;

/* harmony default export */ __webpack_exports__["default"] = (footer);

/***/ }),

/***/ "./src/componets/HamburgerMenu/HamburgerMenu.css":
/*!*******************************************************!*\
  !*** ./src/componets/HamburgerMenu/HamburgerMenu.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./HamburgerMenu.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/componets/HamburgerMenu/HamburgerMenu.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./HamburgerMenu.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/componets/HamburgerMenu/HamburgerMenu.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./HamburgerMenu.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/componets/HamburgerMenu/HamburgerMenu.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/componets/HamburgerMenu/HamburgerMenu.jsx":
/*!*******************************************************!*\
  !*** ./src/componets/HamburgerMenu/HamburgerMenu.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HamburgerMenu_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HamburgerMenu.css */ "./src/componets/HamburgerMenu/HamburgerMenu.css");
/* harmony import */ var _HamburgerMenu_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_HamburgerMenu_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/brad/Documents/washU/xctf/wulogger/website/react-app/src/componets/HamburgerMenu/HamburgerMenu.jsx";



const hamburgerMenu = props => {
  let hamburgerMenuClasses = "hamburgerMenu";

  if (props.showSideDrawer) {
    hamburgerMenuClasses = "hamburgerMenu close";
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: hamburgerMenuClasses,
    id: "hamburger",
    onClick: props.click,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hamburgerButton",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "line line1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "line line2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "line line3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (hamburgerMenu);

/***/ }),

/***/ "./src/componets/HamburgerMenu/SideDrawer.css":
/*!****************************************************!*\
  !*** ./src/componets/HamburgerMenu/SideDrawer.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./SideDrawer.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/componets/HamburgerMenu/SideDrawer.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./SideDrawer.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/componets/HamburgerMenu/SideDrawer.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./SideDrawer.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/componets/HamburgerMenu/SideDrawer.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/componets/HamburgerMenu/SideDrawer.jsx":
/*!****************************************************!*\
  !*** ./src/componets/HamburgerMenu/SideDrawer.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SideDrawer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideDrawer.css */ "./src/componets/HamburgerMenu/SideDrawer.css");
/* harmony import */ var _SideDrawer_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_SideDrawer_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/brad/Documents/washU/xctf/wulogger/website/react-app/src/componets/HamburgerMenu/SideDrawer.jsx";




const sideDrawer = props => {
  let drawerClasses = 'side-drawer';

  if (props.showSideDrawer) {
    drawerClasses = 'side-drawer open';
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: drawerClasses,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    onClick: props.closeSideDrawer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    onClick: props.closeSideDrawer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/calendar/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "Calendar")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    onClick: props.closeSideDrawer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/about/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "About")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    onClick: props.closeSideDrawer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/login/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "Login")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "side-drawer-spacing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (sideDrawer);

/***/ }),

/***/ "./src/componets/Navbar/Navbar.css":
/*!*****************************************!*\
  !*** ./src/componets/Navbar/Navbar.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Navbar.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/componets/Navbar/Navbar.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Navbar.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/componets/Navbar/Navbar.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Navbar.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/componets/Navbar/Navbar.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/componets/Navbar/Navbar.jsx":
/*!*****************************************!*\
  !*** ./src/componets/Navbar/Navbar.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.css */ "./src/componets/Navbar/Navbar.css");
/* harmony import */ var _Navbar_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Navbar_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HamburgerMenu_HamburgerMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../HamburgerMenu/HamburgerMenu */ "./src/componets/HamburgerMenu/HamburgerMenu.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/brad/Documents/washU/xctf/wulogger/website/react-app/src/componets/Navbar/Navbar.jsx";





class Navbar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      toggleSideDrawer: props.toggleSideDrawer,
      showSideDrawer: false
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      showSideDrawer: nextProps.showSideDrawer
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
      className: "navbar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
      className: "navbar-nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "hamburger-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HamburgerMenu_HamburgerMenu__WEBPACK_IMPORTED_MODULE_2__["default"], {
      click: this.state.toggleSideDrawer,
      showSideDrawer: this.state.showSideDrawer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "header-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "WuLogger"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "nav-spacing",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "navbar-items",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: "/calendar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, "Calendar")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: "/about",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, "About")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: "/login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "Login"))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/brad/Documents/washU/xctf/wulogger/website/react-app/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById('root')); // If we want this app to be a progressive webapp this is where we do it
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/pages/About/About.css":
/*!***********************************!*\
  !*** ./src/pages/About/About.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./About.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/About/About.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./About.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/About/About.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./About.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/About/About.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/pages/About/About.jsx":
/*!***********************************!*\
  !*** ./src/pages/About/About.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _About_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About.css */ "./src/pages/About/About.css");
/* harmony import */ var _About_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_About_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/brad/Documents/washU/xctf/wulogger/website/react-app/src/pages/About/About.jsx";




class About extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState(state => ({}));
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "about",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "padding dark-text center-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "About")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/pages/Calendar/Calendar.css":
/*!*****************************************!*\
  !*** ./src/pages/Calendar/Calendar.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Calendar.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/Calendar/Calendar.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Calendar.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/Calendar/Calendar.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Calendar.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/Calendar/Calendar.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/pages/Calendar/Calendar.jsx":
/*!*****************************************!*\
  !*** ./src/pages/Calendar/Calendar.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Calendar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Calendar.css */ "./src/pages/Calendar/Calendar.css");
/* harmony import */ var _Calendar_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Calendar_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/brad/Documents/washU/xctf/wulogger/website/react-app/src/pages/Calendar/Calendar.jsx";




class Calendar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState(state => ({}));
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "calendar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "padding dark-text center-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "Calendar")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Calendar);

/***/ }),

/***/ "./src/pages/Home/Home.css":
/*!*********************************!*\
  !*** ./src/pages/Home/Home.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Home.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/Home/Home.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Home.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/Home/Home.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Home.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/Home/Home.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/pages/Home/Home.jsx":
/*!*********************************!*\
  !*** ./src/pages/Home/Home.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.css */ "./src/pages/Home/Home.css");
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Home_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/brad/Documents/washU/xctf/wulogger/website/react-app/src/pages/Home/Home.jsx";




class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState(state => ({}));
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "padding dark-text center-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "Welcome to WuLogger!")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "center padding",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: __webpack_require__(/*! ../../assets/images/washu_mascot.png */ "./src/assets/images/washu_mascot.png"),
      alt: "bear",
      className: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/pages/Login/Login.css":
/*!***********************************!*\
  !*** ./src/pages/Login/Login.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Login.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/Login/Login.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Login.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/Login/Login.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Login.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/Login/Login.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/pages/Login/Login.jsx":
/*!***********************************!*\
  !*** ./src/pages/Login/Login.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Login_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.css */ "./src/pages/Login/Login.css");
/* harmony import */ var _Login_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Login_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/brad/Documents/washU/xctf/wulogger/website/react-app/src/pages/Login/Login.jsx";




function validateEmail(email) {
  var email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email_regex.test(String(email).toLowerCase());
}

class Login extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.formIsValid = () => {
      if (this.state.email === "") {
        this.setState({
          errorMessage: "Email field is required."
        });
        return false;
      }

      if (!validateEmail(this.state.email)) {
        this.setState({
          errorMessage: "Email invalid, should be in format you@example.com"
        });
        return false;
      }

      if (this.state.password === "") {
        this.setState({
          errorMessage: "Password field is required."
        });
        return false;
      }

      this.setState({
        errorMessage: ""
      });
      return true;
    };

    this.login = event => {
      event.preventDefault();

      if (this.formIsValid()) {
        //TODO auth with AWS cognito
        console.log("Form is valid");
      } else {
        console.log(this.state.errorMessage);
      }
    };

    this.signup = event => {
      event.preventDefault();
      console.log("signup");
    };

    this.updateState = event => {
      this.setState({
        [event.target.name]: String(event.target.value)
      });
    };

    this.state = {
      email: "",
      password: "",
      errorMessage: ""
    };
  }

  componentDidMount() {
    this.setState(state => ({}));
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "padding dark-text center-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, "Sign In to WULogger"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, "Enter your email address and password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      onChange: this.updateState,
      type: "email",
      name: "email",
      placeholder: "Email",
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      onKeyDown: this.enterKeyPress,
      onChange: this.updateState,
      type: "password",
      name: "password",
      placeholder: "Password",
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "error-message",
      ref: "errorMessage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, this.state.errorMessage), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "button box",
      onClick: this.login,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, "Login"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/signup",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "button box light",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, "Sign Up"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://www.google.com",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, "I forgot my password")))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./src/pages/Root/Root.css":
/*!*********************************!*\
  !*** ./src/pages/Root/Root.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Root.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/Root/Root.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Root.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/Root/Root.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Root.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/Root/Root.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/pages/Root/Root.jsx":
/*!*********************************!*\
  !*** ./src/pages/Root/Root.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Root_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Root.css */ "./src/pages/Root/Root.css");
/* harmony import */ var _Root_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Root_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _componets_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../componets/Navbar/Navbar */ "./src/componets/Navbar/Navbar.jsx");
/* harmony import */ var _componets_HamburgerMenu_SideDrawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../componets/HamburgerMenu/SideDrawer */ "./src/componets/HamburgerMenu/SideDrawer.jsx");
/* harmony import */ var _componets_Backdrop_Backdrop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../componets/Backdrop/Backdrop */ "./src/componets/Backdrop/Backdrop.jsx");
/* harmony import */ var _componets_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../componets/Footer/Footer */ "./src/componets/Footer/Footer.jsx");
var _jsxFileName = "/Users/brad/Documents/washU/xctf/wulogger/website/react-app/src/pages/Root/Root.jsx";







class Root extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.toggleSideDrawer = () => {
      this.setState(prevState => {
        return {
          sideDrawerOpen: !prevState.sideDrawerOpen
        };
      });
    };

    this.closeSideDrawer = () => {
      this.setState({
        sideDrawerOpen: false
      });
    };

    this.state = {
      sideDrawerOpen: false
    };
    this.aboutRef = this.props.aboutRef;
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_componets_Backdrop_Backdrop__WEBPACK_IMPORTED_MODULE_4__["default"], {
        click: this.closeSideDrawer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "app",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_componets_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      toggleSideDrawer: this.toggleSideDrawer,
      showSideDrawer: this.state.sideDrawerOpen,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_componets_HamburgerMenu_SideDrawer__WEBPACK_IMPORTED_MODULE_3__["default"], {
      showSideDrawer: this.state.sideDrawerOpen,
      toggleSideDrawer: this.toggleSideDrawer,
      closeSideDrawer: this.closeSideDrawer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }), backdrop, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, this.props.children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_componets_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Root);

/***/ }),

/***/ "./src/pages/Signup/Signup.css":
/*!*************************************!*\
  !*** ./src/pages/Signup/Signup.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Signup.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/Signup/Signup.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Signup.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/Signup/Signup.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Signup.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/Signup/Signup.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/pages/Signup/Signup.jsx":
/*!*************************************!*\
  !*** ./src/pages/Signup/Signup.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Signup_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Signup.css */ "./src/pages/Signup/Signup.css");
/* harmony import */ var _Signup_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Signup_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/brad/Documents/washU/xctf/wulogger/website/react-app/src/pages/Signup/Signup.jsx";




function validateEmail(email) {
  var email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email_regex.test(String(email).toLowerCase());
} //password validator checks for 1 lower, 1 upper, 1 digit, 1 special, at least 6 letter long


function validatePassword(password) {
  var password_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/;
  return password_regex.test(String(password));
}

class Signup extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.formIsValid = () => {
      if (this.state.email === "") {
        this.setState({
          errorMessage: "Email field is required."
        });
        return false;
      }

      if (!validateEmail(this.state.email)) {
        this.setState({
          errorMessage: "Email invalid, should be in format you@example.com"
        });
        return false;
      }

      if (this.state.password === "") {
        this.setState({
          errorMessage: "Password field is required."
        });
        return false;
      }

      this.setState({
        errorMessage: ""
      });
      return true;
    };

    this.login = event => {
      event.preventDefault();
      console.log("login");
    };

    this.signup = event => {
      event.preventDefault();

      if (this.formIsValid()) {
        //TODO auth with AWS cognito
        console.log("Form is valid");
      } else {
        console.log(this.state.errorMessage);
      }
    };

    this.updateState = event => {
      this.setState({
        [event.target.name]: String(event.target.value)
      });
    };

    this.state = {
      email: "",
      password: "",
      errorMessage: ""
    };
  }

  componentDidMount() {
    this.setState(state => ({}));
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "padding dark-text center-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, "Create a New Account"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      onChange: this.updateState,
      type: "text",
      name: "firstName",
      placeholder: "First Name",
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      onChange: this.updateState,
      type: "text",
      name: "lastName",
      placeholder: "Last Name",
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      onChange: this.updateState,
      type: "email",
      name: "email",
      placeholder: "Email",
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      onChange: this.updateState,
      type: "password",
      name: "password",
      placeholder: "Password",
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      onChange: this.updateState,
      type: "password",
      name: "renterPassword",
      placeholder: "Reenter Password",
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "error-message",
      ref: "errorMessage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, this.state.errorMessage), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "button box",
      onClick: this.signup,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, "Create Account"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "button box light",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, "Login"))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Signup);

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/stylesheets/main.css":
/*!**********************************!*\
  !*** ./src/stylesheets/main.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./main.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/stylesheets/main.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./main.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/stylesheets/main.css",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./main.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/stylesheets/main.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/brad/Documents/washU/xctf/wulogger/website/react-app/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/brad/Documents/washU/xctf/wulogger/website/react-app/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map
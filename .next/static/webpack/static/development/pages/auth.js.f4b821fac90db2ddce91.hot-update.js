webpackHotUpdate("static/development/pages/auth.js",{

/***/ "./pages/auth/index.js":
/*!*****************************!*\
  !*** ./pages/auth/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/User */ "./components/User.js");

var _jsxFileName = "/Users/ryanmoore/Documents/Udemy/React/nextjs/pages/auth/index.js";



var authIndexPage = function authIndexPage(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Auth Index Page - ", props.appName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_User__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "Rick",
    age: 22,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }));
};

authIndexPage.getInitialProps = function (context) {
  var promise = new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
    setTimeout(function () {
      // initializing props
      resolve({
        appName: "Super App"
      });
    }, 1000);
  });
  return promise;
};

/* harmony default export */ __webpack_exports__["default"] = (authIndexPage);

/***/ })

})
//# sourceMappingURL=auth.js.f4b821fac90db2ddce91.hot-update.js.map
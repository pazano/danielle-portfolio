webpackHotUpdate_N_E("pages/index",{

/***/ "./layout/components/ImageComponent.js":
/*!*********************************************!*\
  !*** ./layout/components/ImageComponent.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ImageComponent_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageComponent.scss */ \"./layout/components/ImageComponent.scss\");\n/* harmony import */ var _ImageComponent_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ImageComponent_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/paul/Projects/_Sites/Danielle Portfolio/layout/components/ImageComponent.js\",\n    _this = undefined;\n\n\n\n\nvar ImageComponent = function ImageComponent(_ref) {\n  var url = _ref.url,\n      alt = _ref.alt,\n      aspectRatio = _ref.aspectRatio,\n      respectAspect = _ref.respectAspect,\n      _ref$style = _ref.style,\n      style = _ref$style === void 0 ? '' : _ref$style;\n\n  if (respectAspect) {\n    var _splitParams = aspectRatio && aspectRatio.split(\"x\");\n\n    var viewBoxParams = _splitParams[0] + \" \" + _splitParams[1];\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"image__respect-aspect \".concat(style),\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n        viewBox: \"0 0 \".concat(viewBoxParams)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: \"/public\".concat(url),\n        alt: alt,\n        width: _splitParams[0] * 500,\n        height: _splitParams[1] * 500\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, _this);\n  } else {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: style,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: \"/public\".concat(url),\n        alt: alt,\n        width: splitParams[0] * 500,\n        height: splitParams[1] * 500\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, _this);\n  }\n};\n\n_c = ImageComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageComponent);\n\nvar _c;\n\n$RefreshReg$(_c, \"ImageComponent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0L2NvbXBvbmVudHMvSW1hZ2VDb21wb25lbnQuanM/M2M5OCJdLCJuYW1lcyI6WyJJbWFnZUNvbXBvbmVudCIsInVybCIsImFsdCIsImFzcGVjdFJhdGlvIiwicmVzcGVjdEFzcGVjdCIsInN0eWxlIiwic3BsaXRQYXJhbXMiLCJzcGxpdCIsInZpZXdCb3hQYXJhbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUEwRDtBQUFBLE1BQXZEQyxHQUF1RCxRQUF2REEsR0FBdUQ7QUFBQSxNQUFsREMsR0FBa0QsUUFBbERBLEdBQWtEO0FBQUEsTUFBN0NDLFdBQTZDLFFBQTdDQSxXQUE2QztBQUFBLE1BQWhDQyxhQUFnQyxRQUFoQ0EsYUFBZ0M7QUFBQSx3QkFBakJDLEtBQWlCO0FBQUEsTUFBakJBLEtBQWlCLDJCQUFULEVBQVM7O0FBRS9FLE1BQUdELGFBQUgsRUFBa0I7QUFFaEIsUUFBTUUsWUFBVyxHQUFHSCxXQUFXLElBQUlBLFdBQVcsQ0FBQ0ksS0FBWixDQUFrQixHQUFsQixDQUFuQzs7QUFDQSxRQUFNQyxhQUFhLEdBQUdGLFlBQVcsQ0FBQyxDQUFELENBQVgsR0FBaUIsR0FBakIsR0FBdUJBLFlBQVcsQ0FBQyxDQUFELENBQXhEO0FBRUEsd0JBQ0U7QUFBSyxlQUFTLGtDQUEyQkQsS0FBM0IsQ0FBZDtBQUFBLDhCQUNFO0FBQUssZUFBTyxnQkFBU0csYUFBVDtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUdFO0FBQUssV0FBRyxtQkFBWVAsR0FBWixDQUFSO0FBQTJCLFdBQUcsRUFBRUMsR0FBaEM7QUFBcUMsYUFBSyxFQUFFSSxZQUFXLENBQUMsQ0FBRCxDQUFYLEdBQWlCLEdBQTdEO0FBQWtFLGNBQU0sRUFBRUEsWUFBVyxDQUFDLENBQUQsQ0FBWCxHQUFpQjtBQUEzRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFPRCxHQVpELE1BYUs7QUFDSCx3QkFDRTtBQUFLLGVBQVMsRUFBRUQsS0FBaEI7QUFBQSw2QkFFRTtBQUFLLFdBQUcsbUJBQVlKLEdBQVosQ0FBUjtBQUEyQixXQUFHLEVBQUVDLEdBQWhDO0FBQXFDLGFBQUssRUFBRUksV0FBVyxDQUFDLENBQUQsQ0FBWCxHQUFpQixHQUE3RDtBQUFrRSxjQUFNLEVBQUVBLFdBQVcsQ0FBQyxDQUFELENBQVgsR0FBaUI7QUFBM0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQU1EO0FBQ0YsQ0F2QkQ7O0tBQU1OLGM7QUF5QlNBLDZFQUFmIiwiZmlsZSI6Ii4vbGF5b3V0L2NvbXBvbmVudHMvSW1hZ2VDb21wb25lbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vSW1hZ2VDb21wb25lbnQuc2Nzcyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cbmNvbnN0IEltYWdlQ29tcG9uZW50ID0gKHsgdXJsLCBhbHQsIGFzcGVjdFJhdGlvLCByZXNwZWN0QXNwZWN0LCBzdHlsZSA9ICcnIH0pID0+IHtcblxuICBpZihyZXNwZWN0QXNwZWN0KSB7XG5cbiAgICBjb25zdCBzcGxpdFBhcmFtcyA9IGFzcGVjdFJhdGlvICYmIGFzcGVjdFJhdGlvLnNwbGl0KFwieFwiKTtcbiAgICBjb25zdCB2aWV3Qm94UGFyYW1zID0gc3BsaXRQYXJhbXNbMF0gKyBcIiBcIiArIHNwbGl0UGFyYW1zWzFdO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgaW1hZ2VfX3Jlc3BlY3QtYXNwZWN0ICR7c3R5bGV9YH0+XG4gICAgICAgIDxzdmcgdmlld0JveD17YDAgMCAke3ZpZXdCb3hQYXJhbXN9YH0+PC9zdmc+XG4gICAgICAgIHsvKiA8SW1hZ2Ugc3JjPXt1cmx9IGFsdD17YWx0fSB3aWR0aD17c3BsaXRQYXJhbXNbMF0gKiA1MDB9IGhlaWdodD17c3BsaXRQYXJhbXNbMV0gKiA1MDB9IC8+ICovfVxuICAgICAgICA8aW1nIHNyYz17YC9wdWJsaWMke3VybH1gfSBhbHQ9e2FsdH0gd2lkdGg9e3NwbGl0UGFyYW1zWzBdICogNTAwfSBoZWlnaHQ9e3NwbGl0UGFyYW1zWzFdICogNTAwfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGV9PlxuICAgICAgICB7LyogPEltYWdlIHNyYz17YCR7dXJsfWB9IGFsdD17YWx0fSB3aWR0aD17c3BsaXRQYXJhbXNbMF0gKiA1MDB9IGhlaWdodD17c3BsaXRQYXJhbXNbMV0gKiA1MDB9IC8+ICovfVxuICAgICAgICA8aW1nIHNyYz17YC9wdWJsaWMke3VybH1gfSBhbHQ9e2FsdH0gd2lkdGg9e3NwbGl0UGFyYW1zWzBdICogNTAwfSBoZWlnaHQ9e3NwbGl0UGFyYW1zWzFdICogNTAwfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlQ29tcG9uZW50OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./layout/components/ImageComponent.js\n");

/***/ })

})
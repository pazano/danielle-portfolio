webpackHotUpdate_N_E("pages/index",{

/***/ "./layout/components/Image.js":
/*!************************************!*\
  !*** ./layout/components/Image.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Image_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Image.scss */ \"./layout/components/Image.scss\");\n/* harmony import */ var _Image_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Image_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/Users/paul/Projects/_Sites/Danielle Portfolio/layout/components/Image.js\",\n    _this = undefined;\n\n\n\nvar buildSizeList = function buildSizeList(responsiveLoaderObject, stretchTolerance) {\n  var counter = 1;\n  return responsiveLoaderObject.images.reduce(function (sizeList, _ref) {\n    var width = _ref.width;\n\n    if (counter == responsiveLoaderObject.images.length) {\n      return sizeList + \"\".concat(width, \"px\");\n    } else {\n      counter++;\n      return sizeList + \"(max-width: \".concat(width + width * (stretchTolerance / 100), \"px) \").concat(width, \"px, \");\n    }\n  }, \"\");\n};\n\nvar Image = function Image(_ref2) {\n  var renditions = _ref2.renditions,\n      alt = _ref2.alt,\n      aspectRatio = _ref2.aspectRatio,\n      respectAspect = _ref2.respectAspect,\n      _ref2$style = _ref2.style,\n      style = _ref2$style === void 0 ? '' : _ref2$style;\n\n  if (respectAspect) {\n    var splitParams = aspectRatio && aspectRatio.split(\"x\");\n    var viewBoxParams = splitParams[0] + \" \" + splitParams[1];\n\n    var _sizeList = buildSizeList(renditions, 20);\n\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"image__respect-aspect \".concat(style),\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n        viewBox: \"0 0 \".concat(viewBoxParams)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"picture\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          srcSet: renditions.srcSet,\n          sizes: _sizeList,\n          src: renditions.src,\n          alt: alt\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, _this);\n  } else {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: style,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"picture\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          srcSet: renditions.srcSet,\n          sizes: sizeList,\n          src: renditions.src,\n          alt: alt\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, _this);\n  }\n};\n\n_c = Image;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Image);\n\nvar _c;\n\n$RefreshReg$(_c, \"Image\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0L2NvbXBvbmVudHMvSW1hZ2UuanM/ZWU0MCJdLCJuYW1lcyI6WyJidWlsZFNpemVMaXN0IiwicmVzcG9uc2l2ZUxvYWRlck9iamVjdCIsInN0cmV0Y2hUb2xlcmFuY2UiLCJjb3VudGVyIiwiaW1hZ2VzIiwicmVkdWNlIiwic2l6ZUxpc3QiLCJ3aWR0aCIsImxlbmd0aCIsIkltYWdlIiwicmVuZGl0aW9ucyIsImFsdCIsImFzcGVjdFJhdGlvIiwicmVzcGVjdEFzcGVjdCIsInN0eWxlIiwic3BsaXRQYXJhbXMiLCJzcGxpdCIsInZpZXdCb3hQYXJhbXMiLCJzcmNTZXQiLCJzcmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFHQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLHNCQUFELEVBQXlCQyxnQkFBekIsRUFBOEM7QUFDbEUsTUFBSUMsT0FBTyxHQUFHLENBQWQ7QUFDQSxTQUFPRixzQkFBc0IsQ0FBQ0csTUFBdkIsQ0FBOEJDLE1BQTlCLENBQXFDLFVBQUNDLFFBQUQsUUFBdUI7QUFBQSxRQUFYQyxLQUFXLFFBQVhBLEtBQVc7O0FBQ2pFLFFBQUdKLE9BQU8sSUFBSUYsc0JBQXNCLENBQUNHLE1BQXZCLENBQThCSSxNQUE1QyxFQUFvRDtBQUNsRCxhQUFPRixRQUFRLGFBQU1DLEtBQU4sT0FBZjtBQUNELEtBRkQsTUFFTztBQUNMSixhQUFPO0FBQ1AsYUFBT0csUUFBUSx5QkFBa0JDLEtBQUssR0FBR0EsS0FBSyxJQUFJTCxnQkFBZ0IsR0FBRyxHQUF2QixDQUEvQixpQkFBaUVLLEtBQWpFLFNBQWY7QUFDRDtBQUNGLEdBUE0sRUFPSixFQVBJLENBQVA7QUFRRCxDQVZEOztBQVlBLElBQU1FLEtBQUssR0FBRyxTQUFSQSxLQUFRLFFBQWlFO0FBQUEsTUFBOURDLFVBQThELFNBQTlEQSxVQUE4RDtBQUFBLE1BQWxEQyxHQUFrRCxTQUFsREEsR0FBa0Q7QUFBQSxNQUE3Q0MsV0FBNkMsU0FBN0NBLFdBQTZDO0FBQUEsTUFBaENDLGFBQWdDLFNBQWhDQSxhQUFnQztBQUFBLDBCQUFqQkMsS0FBaUI7QUFBQSxNQUFqQkEsS0FBaUIsNEJBQVQsRUFBUzs7QUFFN0UsTUFBR0QsYUFBSCxFQUFrQjtBQUVoQixRQUFNRSxXQUFXLEdBQUdILFdBQVcsSUFBSUEsV0FBVyxDQUFDSSxLQUFaLENBQWtCLEdBQWxCLENBQW5DO0FBQ0EsUUFBTUMsYUFBYSxHQUFHRixXQUFXLENBQUMsQ0FBRCxDQUFYLEdBQWlCLEdBQWpCLEdBQXVCQSxXQUFXLENBQUMsQ0FBRCxDQUF4RDs7QUFFQSxRQUFNVCxTQUFRLEdBQUdOLGFBQWEsQ0FBQ1UsVUFBRCxFQUFhLEVBQWIsQ0FBOUI7O0FBRUEsd0JBQ0U7QUFBSyxlQUFTLGtDQUEyQkksS0FBM0IsQ0FBZDtBQUFBLDhCQUNFO0FBQUssZUFBTyxnQkFBU0csYUFBVDtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQUEsK0JBQ0U7QUFDRSxnQkFBTSxFQUFFUCxVQUFVLENBQUNRLE1BRHJCO0FBRUUsZUFBSyxFQUFFWixTQUZUO0FBR0UsYUFBRyxFQUFFSSxVQUFVLENBQUNTLEdBSGxCO0FBR3VCLGFBQUcsRUFBRVI7QUFINUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQVdELEdBbEJELE1BbUJLO0FBQ0gsd0JBQ0U7QUFBSyxlQUFTLEVBQUVHLEtBQWhCO0FBQUEsNkJBQ0U7QUFBQSwrQkFDRTtBQUNFLGdCQUFNLEVBQUVKLFVBQVUsQ0FBQ1EsTUFEckI7QUFFRSxlQUFLLEVBQUVaLFFBRlQ7QUFHRSxhQUFHLEVBQUVJLFVBQVUsQ0FBQ1MsR0FIbEI7QUFHdUIsYUFBRyxFQUFFUjtBQUg1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQVVEO0FBQ0YsQ0FqQ0Q7O0tBQU1GLEs7QUFtQ1NBLG9FQUFmIiwiZmlsZSI6Ii4vbGF5b3V0L2NvbXBvbmVudHMvSW1hZ2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vSW1hZ2Uuc2Nzcyc7XG5cblxuY29uc3QgYnVpbGRTaXplTGlzdCA9IChyZXNwb25zaXZlTG9hZGVyT2JqZWN0LCBzdHJldGNoVG9sZXJhbmNlKSA9PiB7XG4gIGxldCBjb3VudGVyID0gMTtcbiAgcmV0dXJuIHJlc3BvbnNpdmVMb2FkZXJPYmplY3QuaW1hZ2VzLnJlZHVjZSgoc2l6ZUxpc3QsIHt3aWR0aH0pID0+IHtcbiAgICBpZihjb3VudGVyID09IHJlc3BvbnNpdmVMb2FkZXJPYmplY3QuaW1hZ2VzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHNpemVMaXN0ICsgYCR7d2lkdGh9cHhgO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb3VudGVyKys7XG4gICAgICByZXR1cm4gc2l6ZUxpc3QgKyBgKG1heC13aWR0aDogJHt3aWR0aCArIHdpZHRoICogKHN0cmV0Y2hUb2xlcmFuY2UgLyAxMDApfXB4KSAke3dpZHRofXB4LCBgO1xuICAgIH1cbiAgfSwgXCJcIilcbn1cblxuY29uc3QgSW1hZ2UgPSAoeyByZW5kaXRpb25zLCBhbHQsIGFzcGVjdFJhdGlvLCByZXNwZWN0QXNwZWN0LCBzdHlsZSA9ICcnIH0pID0+IHtcblxuICBpZihyZXNwZWN0QXNwZWN0KSB7XG5cbiAgICBjb25zdCBzcGxpdFBhcmFtcyA9IGFzcGVjdFJhdGlvICYmIGFzcGVjdFJhdGlvLnNwbGl0KFwieFwiKTtcbiAgICBjb25zdCB2aWV3Qm94UGFyYW1zID0gc3BsaXRQYXJhbXNbMF0gKyBcIiBcIiArIHNwbGl0UGFyYW1zWzFdO1xuXG4gICAgY29uc3Qgc2l6ZUxpc3QgPSBidWlsZFNpemVMaXN0KHJlbmRpdGlvbnMsIDIwKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGltYWdlX19yZXNwZWN0LWFzcGVjdCAke3N0eWxlfWB9PlxuICAgICAgICA8c3ZnIHZpZXdCb3g9e2AwIDAgJHt2aWV3Qm94UGFyYW1zfWB9Pjwvc3ZnPlxuICAgICAgICA8cGljdHVyZT5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmNTZXQ9e3JlbmRpdGlvbnMuc3JjU2V0fVxuICAgICAgICAgICAgc2l6ZXM9e3NpemVMaXN0fVxuICAgICAgICAgICAgc3JjPXtyZW5kaXRpb25zLnNyY30gYWx0PXthbHR9IC8+XG4gICAgICAgIDwvcGljdHVyZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlfT5cbiAgICAgICAgPHBpY3R1cmU+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjU2V0PXtyZW5kaXRpb25zLnNyY1NldH1cbiAgICAgICAgICAgIHNpemVzPXtzaXplTGlzdH1cbiAgICAgICAgICAgIHNyYz17cmVuZGl0aW9ucy5zcmN9IGFsdD17YWx0fSAvPlxuICAgICAgICA8L3BpY3R1cmU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./layout/components/Image.js\n");

/***/ })

})
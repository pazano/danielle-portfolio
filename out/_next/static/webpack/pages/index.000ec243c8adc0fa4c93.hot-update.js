webpackHotUpdate_N_E("pages/index",{

/***/ "./layout/components/Navigation.js":
/*!*****************************************!*\
  !*** ./layout/components/Navigation.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _Navigation_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Navigation.scss */ \"./layout/components/Navigation.scss\");\n/* harmony import */ var _Navigation_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Navigation_scss__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/paul/Projects/_Sites/Danielle Portfolio/layout/components/Navigation.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar NavigationItem = function NavigationItem(_ref) {\n  var label = _ref.label,\n      target = _ref.target;\n  return __jsx(\"div\", {\n    className: \"navigation__menu-item\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {\n    href: target,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, label)));\n};\n\n_c = NavigationItem;\n\nvar Navigation = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Navigation, _Component);\n\n  var _super = _createSuper(Navigation);\n\n  function Navigation(props) {\n    var _this2;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Navigation);\n\n    _this2 = _super.call(this, props);\n    _this2.state = {\n      mobileMenu: false,\n      menu: _this2.props.menuItems\n    };\n    _this2.toggleMobile = _this2.toggleMobile.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this2));\n    return _this2;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Navigation, [{\n    key: \"toggleMobile\",\n    value: function toggleMobile(e) {\n      var _this3 = this;\n\n      e.preventDefault();\n      this.setState({\n        mobileMenu: !this.state.mobileMenu\n      }, function () {\n        return _this3.state.mobileMenu ? console.log('on') : console.log('off');\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this4 = this;\n\n      return __jsx(\"div\", {\n        className: \"navigation\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 7\n        }\n      }, __jsx(\"div\", {\n        className: \"navigation__mobile-menu\",\n        onClick: function onClick(e) {\n          return _this4.toggleMobile(e);\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 9\n        }\n      }, this.state.mobileMenu ? __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__[\"FontAwesomeIcon\"], {\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__[\"faTimes\"],\n        size: \"lg\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 13\n        }\n      }) : __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__[\"FontAwesomeIcon\"], {\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__[\"faBars\"],\n        size: \"lg\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 13\n        }\n      })), __jsx(\"div\", {\n        className: \"navigation__menu \".concat(this.state.mobileMenu ? 'mobile-on' : 'mobile-off'),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 9\n        }\n      }, this.state.menu.map(function (item) {\n        return __jsx(NavigationItem, {\n          label: item.label,\n          target: item.target,\n          key: item.key,\n          __self: _this4,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 13\n          }\n        });\n      }), __jsx(\"div\", {\n        className: \"navigation__menu-item\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 11\n        }\n      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {\n        href: \"https://instagram.com/ellerouphoto\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 13\n        }\n      }, __jsx(\"a\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 15\n        }\n      }, __jsx(\"svg\", {\n        viewBox: \"0 0 671.78668 671.78668\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 17\n        }\n      }, __jsx(\"g\", {\n        transform: \"matrix(1.3333333,0,0,-1.3333333,0,671.78667)\",\n        id: \"instagram\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 19\n        }\n      }, __jsx(\"g\", {\n        transform: \"scale(0.1)\",\n        id: \"g12\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 21\n        }\n      }, __jsx(\"path\", {\n        id: \"path14\",\n        style: {\n          fillOpacity: 1,\n          fillRule: nonzero,\n          stroke: none\n        },\n        d: \"m 2519.21,5038.41 c -684.18,0 -769.97,-2.9 -1038.67,-15.16 C 1212.4,5011.02 1029.27,4968.43 869.027,4906.16 703.367,4841.78 562.879,4755.64 422.824,4615.59 282.773,4475.54 196.633,4335.04 132.254,4169.38 69.9805,4009.14 27.3945,3826.01 15.1563,3557.87 2.89844,3289.17 0,3203.38 0,2519.2 0,1835.03 2.89844,1749.24 15.1563,1480.54 27.3945,1212.4 69.9805,1029.27 132.254,869.031 196.633,703.371 282.773,562.879 422.824,422.82 562.879,282.77 703.367,196.629 869.027,132.25 1029.27,69.9805 1212.4,27.3906 1480.54,15.1602 1749.24,2.90234 1835.03,0 2519.21,0 c 684.17,0 769.96,2.90234 1038.66,15.1602 268.14,12.2304 451.27,54.8203 611.51,117.0898 165.66,64.379 306.15,150.52 446.21,290.57 140.05,140.059 226.19,280.551 290.57,446.211 62.27,160.239 104.86,343.369 117.09,611.509 12.26,268.7 15.16,354.49 15.16,1038.66 0,684.18 -2.9,769.97 -15.16,1038.67 -12.23,268.14 -54.82,451.27 -117.09,611.51 -64.38,165.66 -150.52,306.16 -290.57,446.21 -140.06,140.05 -280.55,226.19 -446.21,290.57 -160.24,62.27 -343.37,104.86 -611.51,117.09 -268.7,12.26 -354.49,15.16 -1038.66,15.16 z m 0,-453.91 c 672.65,0 752.33,-2.57 1017.97,-14.69 245.62,-11.2 379.01,-52.24 467.78,-86.74 117.59,-45.7 201.51,-100.29 289.66,-188.44 88.16,-88.16 142.75,-172.08 188.45,-289.67 34.5,-88.77 75.54,-222.16 86.74,-467.78 12.12,-265.64 14.69,-345.32 14.69,-1017.98 0,-672.65 -2.57,-752.33 -14.69,-1017.97 -11.2,-245.62 -52.24,-379.01 -86.74,-467.78 -45.7,-117.591 -100.29,-201.509 -188.45,-289.661 -88.15,-88.16 -172.07,-142.75 -289.66,-188.449 -88.77,-34.5 -222.16,-75.539 -467.78,-86.738 -265.6,-12.122 -345.27,-14.692 -1017.97,-14.692 -672.71,0 -752.37,2.57 -1017.98,14.692 -245.62,11.199 -379.01,52.238 -467.78,86.738 -117.591,45.699 -201.509,100.289 -289.661,188.449 -88.152,88.152 -142.75,172.07 -188.449,289.661 -34.5,88.77 -75.535,222.16 -86.742,467.78 -12.121,265.64 -14.688,345.32 -14.688,1017.97 0,672.66 2.567,752.34 14.688,1017.98 11.207,245.62 52.242,379.01 86.742,467.78 45.699,117.59 100.293,201.51 188.445,289.66 88.156,88.16 172.074,142.75 289.665,188.45 88.77,34.5 222.16,75.54 467.78,86.74 265.64,12.12 345.32,14.69 1017.98,14.69\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 23\n        }\n      }), __jsx(\"path\", {\n        id: \"path16\",\n        style: {\n          fillOpacity: 1,\n          fillRule: nonzero,\n          stroke: none\n        },\n        d: \"m 2519.21,1679.47 c -463.78,0 -839.74,375.96 -839.74,839.73 0,463.78 375.96,839.74 839.74,839.74 463.77,0 839.73,-375.96 839.73,-839.74 0,-463.77 -375.96,-839.73 -839.73,-839.73 z m 0,2133.38 c -714.47,0 -1293.65,-579.18 -1293.65,-1293.65 0,-714.46 579.18,-1293.64 1293.65,-1293.64 714.46,0 1293.64,579.18 1293.64,1293.64 0,714.47 -579.18,1293.65 -1293.64,1293.65\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 23\n        }\n      }), __jsx(\"path\", {\n        id: \"path18\",\n        style: {\n          fillOpacity: 1,\n          fillRule: nonzero,\n          stroke: none\n        },\n        d: \"m 4166.27,3863.96 c 0,-166.96 -135.35,-302.3 -302.31,-302.3 -166.95,0 -302.3,135.34 -302.3,302.3 0,166.96 135.35,302.31 302.3,302.31 166.96,0 302.31,-135.35 302.31,-302.31\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 23\n        }\n      })))))))));\n    }\n  }]);\n\n  return Navigation;\n}(react__WEBPACK_IMPORTED_MODULE_6__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\n\nvar _c;\n\n$RefreshReg$(_c, \"NavigationItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0L2NvbXBvbmVudHMvTmF2aWdhdGlvbi5qcz8xNzc3Il0sIm5hbWVzIjpbIk5hdmlnYXRpb25JdGVtIiwibGFiZWwiLCJ0YXJnZXQiLCJOYXZpZ2F0aW9uIiwicHJvcHMiLCJzdGF0ZSIsIm1vYmlsZU1lbnUiLCJtZW51IiwibWVudUl0ZW1zIiwidG9nZ2xlTW9iaWxlIiwiYmluZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsImZhVGltZXMiLCJmYUJhcnMiLCJtYXAiLCJpdGVtIiwia2V5IiwiZmlsbE9wYWNpdHkiLCJmaWxsUnVsZSIsIm5vbnplcm8iLCJzdHJva2UiLCJub25lIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUF1QjtBQUFBLE1BQXBCQyxLQUFvQixRQUFwQkEsS0FBb0I7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7QUFDNUMsU0FDRTtBQUFLLGFBQVMsRUFBQyx1QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRUEsTUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJRCxLQUFKLENBREYsQ0FERixDQURGO0FBT0QsQ0FSRDs7S0FBTUQsYzs7SUFVQUcsVTs7Ozs7QUFFSixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiwrQkFBTUEsS0FBTjtBQUNBLFdBQUtDLEtBQUwsR0FBYTtBQUNYQyxnQkFBVSxFQUFFLEtBREQ7QUFFWEMsVUFBSSxFQUFFLE9BQUtILEtBQUwsQ0FBV0k7QUFGTixLQUFi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QUFFQztBQUE3QyxTQUZUO0FBR0UsU0FBQyxFQUFDLDZXQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFKRixFQVFFO0FBQ0UsVUFBRSxFQUFDLFFBREw7QUFFRSxhQUFLLEVBQUU7QUFBRUoscUJBQVcsRUFBRSxDQUFmO0FBQWtCQyxrQkFBUSxFQUFFQyxPQUE1QjtBQUFxQ0MsZ0JBQU0sRUFBRUM7QUFBN0MsU0FGVDtBQUdFLFNBQUMsRUFBQyw2S0FISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBUkYsQ0FERixDQURGLENBREYsQ0FERixDQURGLENBUkYsQ0FSRixDQURGO0FBNENEOzs7O0VBL0RzQkMsK0M7O0FBa0VWdkIseUVBQWYiLCJmaWxlIjoiLi9sYXlvdXQvY29tcG9uZW50cy9OYXZpZ2F0aW9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IGZhQmFycywgZmFUaW1lcyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbXBvcnQgJy4vTmF2aWdhdGlvbi5zY3NzJztcblxuY29uc3QgTmF2aWdhdGlvbkl0ZW0gPSAoeyBsYWJlbCwgdGFyZ2V0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb25fX21lbnUtaXRlbVwiPlxuICAgICAgPExpbmsgaHJlZj17dGFyZ2V0fT5cbiAgICAgICAgPGE+e2xhYmVsfTwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jbGFzcyBOYXZpZ2F0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbW9iaWxlTWVudTogZmFsc2UsXG4gICAgICBtZW51OiB0aGlzLnByb3BzLm1lbnVJdGVtcyxcbiAgICB9XG4gICAgdGhpcy50b2dnbGVNb2JpbGUgPSB0aGlzLnRvZ2dsZU1vYmlsZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgdG9nZ2xlTW9iaWxlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtb2JpbGVNZW51OiAhdGhpcy5zdGF0ZS5tb2JpbGVNZW51LFxuICAgIH0sICgpID0+IHRoaXMuc3RhdGUubW9iaWxlTWVudSA/IGNvbnNvbGUubG9nKCdvbicpIDogY29uc29sZS5sb2coJ29mZicpKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BuYXZpZ2F0aW9uX19tb2JpbGUtbWVudWB9IG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnRvZ2dsZU1vYmlsZShlKX0+XG4gICAgICAgICAgeyB0aGlzLnN0YXRlLm1vYmlsZU1lbnUgP1xuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRpbWVzfSBzaXplPVwibGdcIiAvPlxuICAgICAgICAgICAgOlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUJhcnN9IHNpemU9XCJsZ1wiIC8+XG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BuYXZpZ2F0aW9uX19tZW51ICR7dGhpcy5zdGF0ZS5tb2JpbGVNZW51ID8gJ21vYmlsZS1vbicgOiAnbW9iaWxlLW9mZid9YH0+XG4gICAgICAgICAge3RoaXMuc3RhdGUubWVudS5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICA8TmF2aWdhdGlvbkl0ZW1cbiAgICAgICAgICAgICAgbGFiZWw9e2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgIHRhcmdldD17aXRlbS50YXJnZXR9XG4gICAgICAgICAgICAgIGtleT17aXRlbS5rZXl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2aWdhdGlvbl9fbWVudS1pdGVtXCI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9pbnN0YWdyYW0uY29tL2VsbGVyb3VwaG90b1wiPlxuICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgNjcxLjc4NjY4IDY3MS43ODY2OFwiPlxuICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwibWF0cml4KDEuMzMzMzMzMywwLDAsLTEuMzMzMzMzMywwLDY3MS43ODY2NylcIiBpZD1cImluc3RhZ3JhbVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJzY2FsZSgwLjEpXCIgaWQ9XCJnMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBpZD1cInBhdGgxNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmaWxsT3BhY2l0eTogMSwgZmlsbFJ1bGU6IG5vbnplcm8sIHN0cm9rZTogbm9uZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIm0gMjUxOS4yMSw1MDM4LjQxIGMgLTY4NC4xOCwwIC03NjkuOTcsLTIuOSAtMTAzOC42NywtMTUuMTYgQyAxMjEyLjQsNTAxMS4wMiAxMDI5LjI3LDQ5NjguNDMgODY5LjAyNyw0OTA2LjE2IDcwMy4zNjcsNDg0MS43OCA1NjIuODc5LDQ3NTUuNjQgNDIyLjgyNCw0NjE1LjU5IDI4Mi43NzMsNDQ3NS41NCAxOTYuNjMzLDQzMzUuMDQgMTMyLjI1NCw0MTY5LjM4IDY5Ljk4MDUsNDAwOS4xNCAyNy4zOTQ1LDM4MjYuMDEgMTUuMTU2MywzNTU3Ljg3IDIuODk4NDQsMzI4OS4xNyAwLDMyMDMuMzggMCwyNTE5LjIgMCwxODM1LjAzIDIuODk4NDQsMTc0OS4yNCAxNS4xNTYzLDE0ODAuNTQgMjcuMzk0NSwxMjEyLjQgNjkuOTgwNSwxMDI5LjI3IDEzMi4yNTQsODY5LjAzMSAxOTYuNjMzLDcwMy4zNzEgMjgyLjc3Myw1NjIuODc5IDQyMi44MjQsNDIyLjgyIDU2Mi44NzksMjgyLjc3IDcwMy4zNjcsMTk2LjYyOSA4NjkuMDI3LDEzMi4yNSAxMDI5LjI3LDY5Ljk4MDUgMTIxMi40LDI3LjM5MDYgMTQ4MC41NCwxNS4xNjAyIDE3NDkuMjQsMi45MDIzNCAxODM1LjAzLDAgMjUxOS4yMSwwIGMgNjg0LjE3LDAgNzY5Ljk2LDIuOTAyMzQgMTAzOC42NiwxNS4xNjAyIDI2OC4xNCwxMi4yMzA0IDQ1MS4yNyw1NC44MjAzIDYxMS41MSwxMTcuMDg5OCAxNjUuNjYsNjQuMzc5IDMwNi4xNSwxNTAuNTIgNDQ2LjIxLDI5MC41NyAxNDAuMDUsMTQwLjA1OSAyMjYuMTksMjgwLjU1MSAyOTAuNTcsNDQ2LjIxMSA2Mi4yNywxNjAuMjM5IDEwNC44NiwzNDMuMzY5IDExNy4wOSw2MTEuNTA5IDEyLjI2LDI2OC43IDE1LjE2LDM1NC40OSAxNS4xNiwxMDM4LjY2IDAsNjg0LjE4IC0yLjksNzY5Ljk3IC0xNS4xNiwxMDM4LjY3IC0xMi4yMywyNjguMTQgLTU0LjgyLDQ1MS4yNyAtMTE3LjA5LDYxMS41MSAtNjQuMzgsMTY1LjY2IC0xNTAuNTIsMzA2LjE2IC0yOTAuNTcsNDQ2LjIxIC0xNDAuMDYsMTQwLjA1IC0yODAuNTUsMjI2LjE5IC00NDYuMjEsMjkwLjU3IC0xNjAuMjQsNjIuMjcgLTM0My4zNywxMDQuODYgLTYxMS41MSwxMTcuMDkgLTI2OC43LDEyLjI2IC0zNTQuNDksMTUuMTYgLTEwMzguNjYsMTUuMTYgeiBtIDAsLTQ1My45MSBjIDY3Mi42NSwwIDc1Mi4zMywtMi41NyAxMDE3Ljk3LC0xNC42OSAyNDUuNjIsLTExLjIgMzc5LjAxLC01Mi4yNCA0NjcuNzgsLTg2Ljc0IDExNy41OSwtNDUuNyAyMDEuNTEsLTEwMC4yOSAyODkuNjYsLTE4OC40NCA4OC4xNiwtODguMTYgMTQyLjc1LC0xNzIuMDggMTg4LjQ1LC0yODkuNjcgMzQuNSwtODguNzcgNzUuNTQsLTIyMi4xNiA4Ni43NCwtNDY3Ljc4IDEyLjEyLC0yNjUuNjQgMTQuNjksLTM0NS4zMiAxNC42OSwtMTAxNy45OCAwLC02NzIuNjUgLTIuNTcsLTc1Mi4zMyAtMTQuNjksLTEwMTcuOTcgLTExLjIsLTI0NS42MiAtNTIuMjQsLTM3OS4wMSAtODYuNzQsLTQ2Ny43OCAtNDUuNywtMTE3LjU5MSAtMTAwLjI5LC0yMDEuNTA5IC0xODguNDUsLTI4OS42NjEgLTg4LjE1LC04OC4xNiAtMTcyLjA3LC0xNDIuNzUgLTI4OS42NiwtMTg4LjQ0OSAtODguNzcsLTM0LjUgLTIyMi4xNiwtNzUuNTM5IC00NjcuNzgsLTg2LjczOCAtMjY1LjYsLTEyLjEyMiAtMzQ1LjI3LC0xNC42OTIgLTEwMTcuOTcsLTE0LjY5MiAtNjcyLjcxLDAgLTc1Mi4zNywyLjU3IC0xMDE3Ljk4LDE0LjY5MiAtMjQ1LjYyLDExLjE5OSAtMzc5LjAxLDUyLjIzOCAtNDY3Ljc4LDg2LjczOCAtMTE3LjU5MSw0NS42OTkgLTIwMS41MDksMTAwLjI4OSAtMjg5LjY2MSwxODguNDQ5IC04OC4xNTIsODguMTUyIC0xNDIuNzUsMTcyLjA3IC0xODguNDQ5LDI4OS42NjEgLTM0LjUsODguNzcgLTc1LjUzNSwyMjIuMTYgLTg2Ljc0Miw0NjcuNzggLTEyLjEyMSwyNjUuNjQgLTE0LjY4OCwzNDUuMzIgLTE0LjY4OCwxMDE3Ljk3IDAsNjcyLjY2IDIuNTY3LDc1Mi4zNCAxNC42ODgsMTAxNy45OCAxMS4yMDcsMjQ1LjYyIDUyLjI0MiwzNzkuMDEgODYuNzQyLDQ2Ny43OCA0NS42OTksMTE3LjU5IDEwMC4yOTMsMjAxLjUxIDE4OC40NDUsMjg5LjY2IDg4LjE1Niw4OC4xNiAxNzIuMDc0LDE0Mi43NSAyODkuNjY1LDE4OC40NSA4OC43NywzNC41IDIyMi4xNiw3NS41NCA0NjcuNzgsODYuNzQgMjY1LjY0LDEyLjEyIDM0NS4zMiwxNC42OSAxMDE3Ljk4LDE0LjY5XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXRoMTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZmlsbE9wYWNpdHk6IDEsIGZpbGxSdWxlOiBub256ZXJvLCBzdHJva2U6IG5vbmUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJtIDI1MTkuMjEsMTY3OS40NyBjIC00NjMuNzgsMCAtODM5Ljc0LDM3NS45NiAtODM5Ljc0LDgzOS43MyAwLDQ2My43OCAzNzUuOTYsODM5Ljc0IDgzOS43NCw4MzkuNzQgNDYzLjc3LDAgODM5LjczLC0zNzUuOTYgODM5LjczLC04MzkuNzQgMCwtNDYzLjc3IC0zNzUuOTYsLTgzOS43MyAtODM5LjczLC04MzkuNzMgeiBtIDAsMjEzMy4zOCBjIC03MTQuNDcsMCAtMTI5My42NSwtNTc5LjE4IC0xMjkzLjY1LC0xMjkzLjY1IDAsLTcxNC40NiA1NzkuMTgsLTEyOTMuNjQgMTI5My42NSwtMTI5My42NCA3MTQuNDYsMCAxMjkzLjY0LDU3OS4xOCAxMjkzLjY0LDEyOTMuNjQgMCw3MTQuNDcgLTU3OS4xOCwxMjkzLjY1IC0xMjkzLjY0LDEyOTMuNjVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhdGgxOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmaWxsT3BhY2l0eTogMSwgZmlsbFJ1bGU6IG5vbnplcm8sIHN0cm9rZTogbm9uZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIm0gNDE2Ni4yNywzODYzLjk2IGMgMCwtMTY2Ljk2IC0xMzUuMzUsLTMwMi4zIC0zMDIuMzEsLTMwMi4zIC0xNjYuOTUsMCAtMzAyLjMsMTM1LjM0IC0zMDIuMywzMDIuMyAwLDE2Ni45NiAxMzUuMzUsMzAyLjMxIDMwMi4zLDMwMi4zMSAxNjYuOTYsMCAzMDIuMzEsLTEzNS4zNSAzMDIuMzEsLTMwMi4zMVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./layout/components/Navigation.js\n");

/***/ })

})
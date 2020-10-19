webpackHotUpdate_N_E("pages/index",{

/***/ "./layout/components/Navigation.js":
/*!*****************************************!*\
  !*** ./layout/components/Navigation.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _Navigation_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Navigation.scss */ \"./layout/components/Navigation.scss\");\n/* harmony import */ var _Navigation_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Navigation_scss__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/paul/Projects/_Sites/Danielle Portfolio/layout/components/Navigation.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar NavigationItem = function NavigationItem(_ref) {\n  var label = _ref.label,\n      target = _ref.target;\n  return __jsx(\"div\", {\n    className: \"navigation__menu-item\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {\n    href: target,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, label)));\n};\n\n_c = NavigationItem;\n\nvar Navigation = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Navigation, _Component);\n\n  var _super = _createSuper(Navigation);\n\n  function Navigation(props) {\n    var _this2;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Navigation);\n\n    _this2 = _super.call(this, props);\n    _this2.state = {\n      mobileMenu: false,\n      menu: _this2.props.menuItems\n    };\n    _this2.toggleMobile = _this2.toggleMobile.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this2));\n    return _this2;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Navigation, [{\n    key: \"toggleMobile\",\n    value: function toggleMobile(e) {\n      var _this3 = this;\n\n      e.preventDefault();\n      this.setState({\n        mobileMenu: !this.state.mobileMenu\n      }, function () {\n        return _this3.state.mobileMenu ? console.log('on') : console.log('off');\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this4 = this;\n\n      return __jsx(\"div\", {\n        className: \"navigation\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 7\n        }\n      }, __jsx(\"div\", {\n        className: \"navigation__mobile-menu\",\n        onClick: function onClick(e) {\n          return _this4.toggleMobile(e);\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 9\n        }\n      }, this.state.mobileMenu ? __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__[\"FontAwesomeIcon\"], {\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__[\"faTimes\"],\n        size: \"lg\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 13\n        }\n      }) : __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__[\"FontAwesomeIcon\"], {\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__[\"faBars\"],\n        size: \"lg\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 13\n        }\n      })), __jsx(\"div\", {\n        className: \"navigation__menu \".concat(this.state.mobileMenu ? 'mobile-on' : 'mobile-off'),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 9\n        }\n      }, this.state.menu.map(function (item) {\n        return __jsx(NavigationItem, {\n          label: item.label,\n          target: item.target,\n          key: item.key,\n          __self: _this4,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 13\n          }\n        });\n      }), __jsx(\"div\", {\n        className: \"navigation__menu-item\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 11\n        }\n      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {\n        href: \"https://instagram.com/ellerouphoto\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 13\n        }\n      }, __jsx(\"a\", {\n        className: \"social_link\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 15\n        }\n      }, __jsx(\"svg\", {\n        width: \"400\",\n        height: \"400\",\n        viewBox: \"0, 0, 400,400\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 17\n        }\n      }, __jsx(\"g\", {\n        id: \"svgg\",\n        transform: \"scale(0.1)\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 18\n        }\n      }, __jsx(\"path\", {\n        id: \"path0\",\n        d: \"\",\n        stroke: \"none\",\n        \"fill-rule\": \"evenodd\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 21\n        }\n      }), __jsx(\"path\", {\n        id: \"path1\",\n        d: \"\",\n        stroke: \"none\",\n        \"fill-rule\": \"evenodd\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 21\n        }\n      }), __jsx(\"path\", {\n        id: \"path2\",\n        d: \"\",\n        stroke: \"none\",\n        \"fill-rule\": \"evenodd\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 21\n        }\n      }), __jsx(\"path\", {\n        id: \"path3\",\n        d: \"\",\n        stroke: \"none\",\n        \"fill-rule\": \"evenodd\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 21\n        }\n      }), __jsx(\"path\", {\n        id: \"path4\",\n        d: \"\",\n        stroke: \"none\",\n        \"fill-rule\": \"evenodd\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 21\n        }\n      }))))))));\n    }\n  }]);\n\n  return Navigation;\n}(react__WEBPACK_IMPORTED_MODULE_6__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\n\nvar _c;\n\n$RefreshReg$(_c, \"NavigationItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0L2NvbXBvbmVudHMvTmF2aWdhdGlvbi5qcz8xNzc3Il0sIm5hbWVzIjpbIk5hdmlnYXRpb25JdGVtIiwibGFiZWwiLCJ0YXJnZXQiLCJOYXZpZ2F0aW9uIiwicHJvcHMiLCJzdGF0ZSIsIm1vYmlsZU1lbnUiLCJtZW51IiwibWVudUl0ZW1zIiwidG9nZ2xlTW9iaWxlIiwiYmluZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsImZhVGltZXMiLCJmYUJhcnMiLCJtYXAiLCJpdGVtIiwia2V5IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUF1QjtBQUFBLE1BQXBCQyxLQUFvQixRQUFwQkEsS0FBb0I7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7QUFDNUMsU0FDRTtBQUFLLGFBQVMsRUFBQyx1QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRUEsTUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJRCxLQUFKLENBREYsQ0FERixDQURGO0FBT0QsQ0FSRDs7S0FBTUQsYzs7SUFVQUcsVTs7Ozs7QUFFSixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiwrQkFBTUEsS0FBTjtBQUNBLFdBQUtDLEtBQUwsR0FBYTtBQUNYQyxnQkFBVSxFQUFFLEtBREQ7QUFFWEMsVUFBSSxFQUFFLE9BQUtILEtBQUwsQ0FBV0k7QUFGTixLQUFiO0FBSUEsV0FBS0MsWUFBTCxHQUFvQixPQUFLQSxZQUFMLENBQWtCQyxJQUFsQiwwR0FBcEI7QUFOaUI7QUFPbEI7Ozs7aUNBRVlDLEMsRUFBRztBQUFBOztBQUNkQSxPQUFDLENBQUNDLGNBQUY7QUFDQSxXQUFLQyxRQUFMLENBQWM7QUFDWlAsa0JBQVUsRUFBRSxDQUFDLEtBQUtELEtBQUwsQ0FBV0M7QUFEWixPQUFkLEVBRUc7QUFBQSxlQUFNLE1BQUksQ0FBQ0QsS0FBTCxDQUFXQyxVQUFYLEdBQXdCUSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFaLENBQXhCLEdBQTRDRCxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaLENBQWxEO0FBQUEsT0FGSDtBQUdEOzs7NkJBRVE7QUFBQTs7QUFDUCxhQUNFO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFLLGlCQUFTLDJCQUFkO0FBQTJDLGVBQU8sRUFBRSxpQkFBQ0osQ0FBRDtBQUFBLGlCQUFPLE1BQUksQ0FBQ0YsWUFBTCxDQUFrQkUsQ0FBbEIsQ0FBUDtBQUFBLFNBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxLQUFLTixLQUFMLENBQVdDLFVBQVgsR0FDQSxNQUFDLDhFQUFEO0FBQWlCLFlBQUksRUFBRVUseUVBQXZCO0FBQWdDLFlBQUksRUFBQyxJQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREEsR0FHQSxNQUFDLDhFQUFEO0FBQWlCLFlBQUksRUFBRUMsd0VBQXZCO0FBQStCLFlBQUksRUFBQyxJQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSkosQ0FERixFQVFFO0FBQUssaUJBQVMsNkJBQXNCLEtBQUtaLEtBQUwsQ0FBV0MsVUFBWCxHQUF3QixXQUF4QixHQUFzQyxZQUE1RCxDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRyxLQUFLRCxLQUFMLENBQVdFLElBQVgsQ0FBZ0JXLEdBQWhCLENBQW9CLFVBQUFDLElBQUk7QUFBQSxlQUN2QixNQUFDLGNBQUQ7QUFDRSxlQUFLLEVBQUVBLElBQUksQ0FBQ2xCLEtBRGQ7QUFFRSxnQkFBTSxFQUFFa0IsSUFBSSxDQUFDakIsTUFGZjtBQUdFLGFBQUcsRUFBRWlCLElBQUksQ0FBQ0MsR0FIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRHVCO0FBQUEsT0FBeEIsQ0FESCxFQVFFO0FBQUssaUJBQVMsRUFBQyx1QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxvQ0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBRyxpQkFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssYUFBSyxFQUFDLEtBQVg7QUFBaUIsY0FBTSxFQUFDLEtBQXhCO0FBQThCLGVBQU8sRUFBQyxlQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0M7QUFBRyxVQUFFLEVBQUMsTUFBTjtBQUFhLGlCQUFTLEVBQUMsWUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHO0FBQU0sVUFBRSxFQUFDLE9BQVQ7QUFBaUIsU0FBQyxFQUFDLEVBQW5CO0FBQXNCLGNBQU0sRUFBQyxNQUE3QjtBQUFvQyxxQkFBVSxTQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREgsRUFFRztBQUFNLFVBQUUsRUFBQyxPQUFUO0FBQWlCLFNBQUMsRUFBQyxFQUFuQjtBQUFzQixjQUFNLEVBQUMsTUFBN0I7QUFBb0MscUJBQVUsU0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZILEVBR0c7QUFBTSxVQUFFLEVBQUMsT0FBVDtBQUFpQixTQUFDLEVBQUMsRUFBbkI7QUFBc0IsY0FBTSxFQUFDLE1BQTdCO0FBQW9DLHFCQUFVLFNBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFISCxFQUlHO0FBQU0sVUFBRSxFQUFDLE9BQVQ7QUFBaUIsU0FBQyxFQUFDLEVBQW5CO0FBQXNCLGNBQU0sRUFBQyxNQUE3QjtBQUFvQyxxQkFBVSxTQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSkgsRUFLRztBQUFNLFVBQUUsRUFBQyxPQUFUO0FBQWlCLFNBQUMsRUFBQyxFQUFuQjtBQUFzQixjQUFNLEVBQUMsTUFBN0I7QUFBb0MscUJBQVUsU0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUxILENBREQsQ0FERixDQURGLENBREYsQ0FSRixDQVJGLENBREY7QUFvQ0Q7Ozs7RUF2RHNCQywrQzs7QUEwRFZsQix5RUFBZiIsImZpbGUiOiIuL2xheW91dC9jb21wb25lbnRzL05hdmlnYXRpb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgZmFCYXJzLCBmYVRpbWVzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmltcG9ydCAnLi9OYXZpZ2F0aW9uLnNjc3MnO1xuXG5jb25zdCBOYXZpZ2F0aW9uSXRlbSA9ICh7IGxhYmVsLCB0YXJnZXQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2aWdhdGlvbl9fbWVudS1pdGVtXCI+XG4gICAgICA8TGluayBocmVmPXt0YXJnZXR9PlxuICAgICAgICA8YT57bGFiZWx9PC9hPlxuICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNsYXNzIE5hdmlnYXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtb2JpbGVNZW51OiBmYWxzZSxcbiAgICAgIG1lbnU6IHRoaXMucHJvcHMubWVudUl0ZW1zLFxuICAgIH1cbiAgICB0aGlzLnRvZ2dsZU1vYmlsZSA9IHRoaXMudG9nZ2xlTW9iaWxlLmJpbmQodGhpcyk7XG4gIH1cblxuICB0b2dnbGVNb2JpbGUoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1vYmlsZU1lbnU6ICF0aGlzLnN0YXRlLm1vYmlsZU1lbnUsXG4gICAgfSwgKCkgPT4gdGhpcy5zdGF0ZS5tb2JpbGVNZW51ID8gY29uc29sZS5sb2coJ29uJykgOiBjb25zb2xlLmxvZygnb2ZmJykpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2aWdhdGlvblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG5hdmlnYXRpb25fX21vYmlsZS1tZW51YH0gb25DbGljaz17KGUpID0+IHRoaXMudG9nZ2xlTW9iaWxlKGUpfT5cbiAgICAgICAgICB7IHRoaXMuc3RhdGUubW9iaWxlTWVudSA/XG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVGltZXN9IHNpemU9XCJsZ1wiIC8+XG4gICAgICAgICAgICA6XG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQmFyc30gc2l6ZT1cImxnXCIgLz5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG5hdmlnYXRpb25fX21lbnUgJHt0aGlzLnN0YXRlLm1vYmlsZU1lbnUgPyAnbW9iaWxlLW9uJyA6ICdtb2JpbGUtb2ZmJ31gfT5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5tZW51Lm1hcChpdGVtID0+IChcbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uSXRlbVxuICAgICAgICAgICAgICBsYWJlbD17aXRlbS5sYWJlbH1cbiAgICAgICAgICAgICAgdGFyZ2V0PXtpdGVtLnRhcmdldH1cbiAgICAgICAgICAgICAga2V5PXtpdGVtLmtleX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uX19tZW51LWl0ZW1cIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL2luc3RhZ3JhbS5jb20vZWxsZXJvdXBob3RvXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInNvY2lhbF9saW5rXCI+XG4gICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjQwMFwiIGhlaWdodD1cIjQwMFwiIHZpZXdCb3g9XCIwLCAwLCA0MDAsNDAwXCI+XG4gICAgICAgICAgICAgICAgIDxnIGlkPVwic3ZnZ1wiIHRyYW5zZm9ybT1cInNjYWxlKDAuMSlcIj5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggaWQ9XCJwYXRoMFwiIGQ9XCJcIiBzdHJva2U9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggaWQ9XCJwYXRoMVwiIGQ9XCJcIiBzdHJva2U9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggaWQ9XCJwYXRoMlwiIGQ9XCJcIiBzdHJva2U9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggaWQ9XCJwYXRoM1wiIGQ9XCJcIiBzdHJva2U9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggaWQ9XCJwYXRoNFwiIGQ9XCJcIiBzdHJva2U9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./layout/components/Navigation.js\n");

/***/ })

})
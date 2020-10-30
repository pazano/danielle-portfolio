webpackHotUpdate_N_E("pages/index",{

/***/ "./layout/components/Gallery.js":
/*!**************************************!*\
  !*** ./layout/components/Gallery.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ImageComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageComponent */ \"./layout/components/ImageComponent.js\");\n/* harmony import */ var _Gallery_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Gallery.scss */ \"./layout/components/Gallery.scss\");\n/* harmony import */ var _Gallery_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Gallery_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/paul/Projects/_Sites/Danielle Portfolio/layout/components/Gallery.js\",\n    _this = undefined;\n\n\n\n\n\nvar GalleryImageRow = function GalleryImageRow(_ref) {\n  var galleryImages = _ref.galleryImages,\n      respectAspect = _ref.respectAspect,\n      withLinks = _ref.withLinks,\n      rowKey = _ref.rowKey;\n  var rowClassName = galleryImages.reduce(function (result, galleryImage) {\n    return result ? result + '-' + galleryImage.orientation : galleryImage.orientation;\n  }, \"\");\n  var counter = 0;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"gallery__row \".concat(rowClassName),\n    children: galleryImages && galleryImages.map(function (_ref2) {\n      var url = _ref2.url,\n          alt = _ref2.alt,\n          aspectRatio = _ref2.aspectRatio,\n          metadata = _ref2.metadata;\n      var image = {\n        url: url,\n        alt: alt,\n        aspectRatio: aspectRatio,\n        slug: metadata.slug,\n        respectAspect: respectAspect,\n        style: 'image-' + counter\n      };\n\n      if (withLinks) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(GalleryImageLink, {\n          image: image,\n          imageKey: \"gallery-image-\".concat(++counter)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 17\n        }, _this);\n      } else {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(GalleryImage, {\n          image: image,\n          imageKey: \"gallery-image-\".concat(++counter)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 17\n        }, _this);\n      }\n    })\n  }, rowKey, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = GalleryImageRow;\n\nvar GalleryImage = function GalleryImage(_ref3) {\n  var image = _ref3.image,\n      imageKey = _ref3.imageKey;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"gallery__image \".concat(image.style),\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ImageComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      url: image.url,\n      alt: image.alt,\n      aspectRatio: image.aspectRatio,\n      respectAspect: image.respectAspect\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, _this)\n  }, imageKey, false, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 5\n  }, _this);\n}; // image:  {url, renditions, alt, style, aspectRatio, respectAspect}\n// link:  {label, target, slug}\n\n\n_c2 = GalleryImage;\n\nvar GalleryImageLink = function GalleryImageLink(_ref4) {\n  var image = _ref4.image,\n      imageKey = _ref4.imageKey;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/photography/[slug]\",\n    as: \"photography/\".concat(image.slug),\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"gallery__image link \".concat(image.style),\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ImageComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        url: image.url,\n        alt: image.alt,\n        aspectRatio: image.aspectRatio,\n        respectAspect: image.respectAspect\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 11\n      }, _this)\n    }, imageKey, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 61,\n    columnNumber: 7\n  }, _this);\n}; // Gallery\n//    Type indicates layout width -- Hero uses smaller gutters than Page\n//    Links looks to display a label and link over Gallery entries\n\n\n_c3 = GalleryImageLink;\n\nvar Gallery = function Gallery(_ref5) {\n  var galleryRows = _ref5.galleryRows,\n      _ref5$type = _ref5.type,\n      type = _ref5$type === void 0 ? \"page\" : _ref5$type,\n      _ref5$withLinks = _ref5.withLinks,\n      withLinks = _ref5$withLinks === void 0 ? false : _ref5$withLinks,\n      _ref5$visibleLinks = _ref5.visibleLinks,\n      visibleLinks = _ref5$visibleLinks === void 0 ? false : _ref5$visibleLinks;\n  //  Test for aspects in the list, disable strict aspect management if mixed\n  var respectAspect = galleryRows.reduce(function (result, row) {\n    return result += new Set(row.map(function (image) {\n      return image.orientation;\n    })).size;\n  }, 0) > galleryRows.length ? false : true;\n  var rowCounter = 0;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"content__gallery\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"gallery__container \".concat(\"gallery__\" + type, \" \").concat(visibleLinks ? \"gallery__with-link-labels\" : ''),\n      children: galleryRows && galleryRows.map(function (images) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(GalleryImageRow, {\n          galleryImages: images,\n          respectAspect: respectAspect,\n          withLinks: withLinks,\n          rowKey: \"gallery-image-row-\".concat(++rowCounter)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 89,\n    columnNumber: 5\n  }, _this);\n};\n\n_c4 = Gallery;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gallery);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"GalleryImageRow\");\n$RefreshReg$(_c2, \"GalleryImage\");\n$RefreshReg$(_c3, \"GalleryImageLink\");\n$RefreshReg$(_c4, \"Gallery\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0L2NvbXBvbmVudHMvR2FsbGVyeS5qcz9iYTg4Il0sIm5hbWVzIjpbIkdhbGxlcnlJbWFnZVJvdyIsImdhbGxlcnlJbWFnZXMiLCJyZXNwZWN0QXNwZWN0Iiwid2l0aExpbmtzIiwicm93S2V5Iiwicm93Q2xhc3NOYW1lIiwicmVkdWNlIiwicmVzdWx0IiwiZ2FsbGVyeUltYWdlIiwib3JpZW50YXRpb24iLCJjb3VudGVyIiwibWFwIiwidXJsIiwiYWx0IiwiYXNwZWN0UmF0aW8iLCJtZXRhZGF0YSIsImltYWdlIiwic2x1ZyIsInN0eWxlIiwiR2FsbGVyeUltYWdlIiwiaW1hZ2VLZXkiLCJHYWxsZXJ5SW1hZ2VMaW5rIiwiR2FsbGVyeSIsImdhbGxlcnlSb3dzIiwidHlwZSIsInZpc2libGVMaW5rcyIsInJvdyIsIlNldCIsInNpemUiLCJsZW5ndGgiLCJyb3dDb3VudGVyIiwiaW1hZ2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsT0FBeUQ7QUFBQSxNQUF0REMsYUFBc0QsUUFBdERBLGFBQXNEO0FBQUEsTUFBdkNDLGFBQXVDLFFBQXZDQSxhQUF1QztBQUFBLE1BQXhCQyxTQUF3QixRQUF4QkEsU0FBd0I7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7QUFFL0UsTUFBTUMsWUFBWSxHQUFHSixhQUFhLENBQUNLLE1BQWQsQ0FBcUIsVUFBQ0MsTUFBRCxFQUFTQyxZQUFUO0FBQUEsV0FBMEJELE1BQU0sR0FBR0EsTUFBTSxHQUFHLEdBQVQsR0FBZUMsWUFBWSxDQUFDQyxXQUEvQixHQUE2Q0QsWUFBWSxDQUFDQyxXQUExRjtBQUFBLEdBQXJCLEVBQTRILEVBQTVILENBQXJCO0FBRUEsTUFBSUMsT0FBTyxHQUFHLENBQWQ7QUFDQSxzQkFDRTtBQUFLLGFBQVMseUJBQWtCTCxZQUFsQixDQUFkO0FBQUEsY0FDSUosYUFB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QVosS0FBWTtBQUVyRjtBQUNBLE1BQU12QixhQUFhLEdBQUdxQixXQUFXLENBQUNqQixNQUFaLENBQW9CLFVBQUNDLE1BQUQsRUFBU21CLEdBQVQsRUFBaUI7QUFDekQsV0FBT25CLE1BQU0sSUFBSSxJQUFJb0IsR0FBSixDQUFRRCxHQUFHLENBQUNmLEdBQUosQ0FBUSxVQUFBSyxLQUFLO0FBQUEsYUFBSUEsS0FBSyxDQUFDUCxXQUFWO0FBQUEsS0FBYixDQUFSLEVBQTZDbUIsSUFBOUQ7QUFDRCxHQUZxQixFQUVsQixDQUZrQixJQUViTCxXQUFXLENBQUNNLE1BRkMsR0FFUSxLQUZSLEdBRWdCLElBRnRDO0FBSUEsTUFBSUMsVUFBVSxHQUFHLENBQWpCO0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQSwyQkFDRTtBQUFLLGVBQVMsK0JBQXdCLGNBQWNOLElBQXRDLGNBQThDQyxZQUFZLEdBQUcsMkJBQUgsR0FBaUMsRUFBM0YsQ0FBZDtBQUFBLGdCQUNHRixXQUFXLElBQ1ZBLFdBQVcsQ0FBQ1osR0FBWixDQUFnQixVQUFDb0IsTUFBRDtBQUFBLDRCQUNkLHFFQUFDLGVBQUQ7QUFDRSx1QkFBYSxFQUFFQSxNQURqQjtBQUVFLHVCQUFhLEVBQUU3QixhQUZqQjtBQUdFLG1CQUFTLEVBQUVDLFNBSGI7QUFJRSxnQkFBTSw4QkFBdUIsRUFBRTJCLFVBQXpCO0FBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYztBQUFBLE9BQWhCO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWVELENBeEJEOztNQUFNUixPO0FBMEJTQSxzRUFBZiIsImZpbGUiOiIuL2xheW91dC9jb21wb25lbnRzL0dhbGxlcnkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEltYWdlQ29tcG9uZW50IGZyb20gJy4vSW1hZ2VDb21wb25lbnQnO1xuaW1wb3J0ICcuL0dhbGxlcnkuc2Nzcyc7XG5cbmNvbnN0IEdhbGxlcnlJbWFnZVJvdyA9ICh7IGdhbGxlcnlJbWFnZXMsIHJlc3BlY3RBc3BlY3QsIHdpdGhMaW5rcywgcm93S2V5IH0pID0+IHtcblxuICBjb25zdCByb3dDbGFzc05hbWUgPSBnYWxsZXJ5SW1hZ2VzLnJlZHVjZSgocmVzdWx0LCBnYWxsZXJ5SW1hZ2UpID0+IHJlc3VsdCA/IHJlc3VsdCArICctJyArIGdhbGxlcnlJbWFnZS5vcmllbnRhdGlvbiA6IGdhbGxlcnlJbWFnZS5vcmllbnRhdGlvbiwgXCJcIik7XG5cbiAgbGV0IGNvdW50ZXIgPSAwO1xuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9e2BnYWxsZXJ5X19yb3cgJHtyb3dDbGFzc05hbWV9YH0ga2V5PXtyb3dLZXl9PlxuICAgICAgeyBnYWxsZXJ5SW1hZ2VzICYmXG4gICAgICAgIGdhbGxlcnlJbWFnZXMubWFwKCh7IHVybCwgYWx0LCBhc3BlY3RSYXRpbywgbWV0YWRhdGEgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSB7XG4gICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgYWx0LFxuICAgICAgICAgICAgICBhc3BlY3RSYXRpbyxcbiAgICAgICAgICAgICAgc2x1ZzogbWV0YWRhdGEuc2x1ZyxcbiAgICAgICAgICAgICAgcmVzcGVjdEFzcGVjdCxcbiAgICAgICAgICAgICAgc3R5bGU6ICdpbWFnZS0nICsgY291bnRlcixcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh3aXRoTGlua3MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgIDxHYWxsZXJ5SW1hZ2VMaW5rXG4gICAgICAgICAgICAgICAgICBpbWFnZT17aW1hZ2V9XG4gICAgICAgICAgICAgICAgICBpbWFnZUtleT17YGdhbGxlcnktaW1hZ2UtJHsrK2NvdW50ZXJ9YH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgPEdhbGxlcnlJbWFnZVxuICAgICAgICAgICAgICAgICAgaW1hZ2U9e2ltYWdlfVxuICAgICAgICAgICAgICAgICAgaW1hZ2VLZXk9e2BnYWxsZXJ5LWltYWdlLSR7Kytjb3VudGVyfWB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IEdhbGxlcnlJbWFnZSA9ICh7IGltYWdlLCBpbWFnZUtleSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BnYWxsZXJ5X19pbWFnZSAke2ltYWdlLnN0eWxlfWB9IGtleT17aW1hZ2VLZXl9PlxuICAgICAgPEltYWdlQ29tcG9uZW50XG4gICAgICAgIHVybD17aW1hZ2UudXJsfVxuICAgICAgICBhbHQ9e2ltYWdlLmFsdH1cbiAgICAgICAgYXNwZWN0UmF0aW89e2ltYWdlLmFzcGVjdFJhdGlvfVxuICAgICAgICByZXNwZWN0QXNwZWN0PXtpbWFnZS5yZXNwZWN0QXNwZWN0fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBpbWFnZTogIHt1cmwsIHJlbmRpdGlvbnMsIGFsdCwgc3R5bGUsIGFzcGVjdFJhdGlvLCByZXNwZWN0QXNwZWN0fVxuLy8gbGluazogIHtsYWJlbCwgdGFyZ2V0LCBzbHVnfVxuY29uc3QgR2FsbGVyeUltYWdlTGluayA9ICh7IGltYWdlLCBpbWFnZUtleSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgICA8TGluayBocmVmPVwiL3Bob3RvZ3JhcGh5L1tzbHVnXVwiIGFzPXtgcGhvdG9ncmFwaHkvJHtpbWFnZS5zbHVnfWB9ID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BnYWxsZXJ5X19pbWFnZSBsaW5rICR7aW1hZ2Uuc3R5bGV9YH0ga2V5PXtpbWFnZUtleX0+XG4gICAgICAgICAgPEltYWdlQ29tcG9uZW50XG4gICAgICAgICAgICB1cmw9e2ltYWdlLnVybH1cbiAgICAgICAgICAgIGFsdD17aW1hZ2UuYWx0fVxuICAgICAgICAgICAgYXNwZWN0UmF0aW89e2ltYWdlLmFzcGVjdFJhdGlvfVxuICAgICAgICAgICAgcmVzcGVjdEFzcGVjdD17aW1hZ2UucmVzcGVjdEFzcGVjdH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGluaz5cbiAgKVxufVxuXG5cbi8vIEdhbGxlcnlcbi8vICAgIFR5cGUgaW5kaWNhdGVzIGxheW91dCB3aWR0aCAtLSBIZXJvIHVzZXMgc21hbGxlciBndXR0ZXJzIHRoYW4gUGFnZVxuLy8gICAgTGlua3MgbG9va3MgdG8gZGlzcGxheSBhIGxhYmVsIGFuZCBsaW5rIG92ZXIgR2FsbGVyeSBlbnRyaWVzXG5cbmNvbnN0IEdhbGxlcnkgPSAoeyBnYWxsZXJ5Um93cywgdHlwZT1cInBhZ2VcIiwgd2l0aExpbmtzPWZhbHNlLCB2aXNpYmxlTGlua3M9ZmFsc2UgfSkgPT4ge1xuXG4gIC8vICBUZXN0IGZvciBhc3BlY3RzIGluIHRoZSBsaXN0LCBkaXNhYmxlIHN0cmljdCBhc3BlY3QgbWFuYWdlbWVudCBpZiBtaXhlZFxuICBjb25zdCByZXNwZWN0QXNwZWN0ID0gZ2FsbGVyeVJvd3MucmVkdWNlKCgocmVzdWx0LCByb3cpID0+IHtcbiAgICByZXR1cm4gcmVzdWx0ICs9IG5ldyBTZXQocm93Lm1hcChpbWFnZSA9PiBpbWFnZS5vcmllbnRhdGlvbikpLnNpemU7XG4gIH0pLCAwKSA+IGdhbGxlcnlSb3dzLmxlbmd0aCA/IGZhbHNlIDogdHJ1ZTtcblxuICBsZXQgcm93Q291bnRlciA9IDA7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2dhbGxlcnlcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZ2FsbGVyeV9fY29udGFpbmVyICR7XCJnYWxsZXJ5X19cIiArIHR5cGV9ICR7dmlzaWJsZUxpbmtzID8gXCJnYWxsZXJ5X193aXRoLWxpbmstbGFiZWxzXCIgOiAnJ31gfT5cbiAgICAgICAge2dhbGxlcnlSb3dzICYmXG4gICAgICAgICAgZ2FsbGVyeVJvd3MubWFwKChpbWFnZXMpID0+XG4gICAgICAgICAgICA8R2FsbGVyeUltYWdlUm93XG4gICAgICAgICAgICAgIGdhbGxlcnlJbWFnZXM9e2ltYWdlc31cbiAgICAgICAgICAgICAgcmVzcGVjdEFzcGVjdD17cmVzcGVjdEFzcGVjdH1cbiAgICAgICAgICAgICAgd2l0aExpbmtzPXt3aXRoTGlua3N9XG4gICAgICAgICAgICAgIHJvd0tleT17YGdhbGxlcnktaW1hZ2Utcm93LSR7Kytyb3dDb3VudGVyfWB9XG4gICAgICAgICAgICAvPilcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FsbGVyeTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./layout/components/Gallery.js\n");

/***/ })

})
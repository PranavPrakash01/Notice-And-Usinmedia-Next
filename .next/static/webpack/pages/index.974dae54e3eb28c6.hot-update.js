"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/UsInMedia.js":
/*!*********************************!*\
  !*** ./components/UsInMedia.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_coder_Documents_nitc_website_us_in_media_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_coder_Documents_nitc_website_us_in_media_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_coder_Documents_nitc_website_us_in_media_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_UsInMedia_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/UsInMedia.module.css */ \"./styles/UsInMedia.module.css\");\n/* harmony import */ var _styles_UsInMedia_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_UsInMedia_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar UsInMedia = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), cardData = ref[0], setCardData = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(_asyncToGenerator(_home_coder_Documents_nitc_website_us_in_media_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        return _home_coder_Documents_nitc_website_us_in_media_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return axios__WEBPACK_IMPORTED_MODULE_3___default().get('http://localhost:1337/api/scraper').then(function(res) {\n                        try {\n                            setCardData(res.data.articles);\n                        } catch (err) {\n                            console.log(err);\n                        }\n                    }).catch(function(err) {\n                        console.log(err);\n                    });\n                case 2:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    })), []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n        className: (_styles_UsInMedia_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        __source: {\n            fileName: \"/home/coder/Documents/nitc-website/us-in-media-next/components/UsInMedia.js\",\n            lineNumber: 30,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h1\", {\n                className: (_styles_UsInMedia_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                __source: {\n                    fileName: \"/home/coder/Documents/nitc-website/us-in-media-next/components/UsInMedia.js\",\n                    lineNumber: 32,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: \"US IN MEDIA\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n                className: (_styles_UsInMedia_module_css__WEBPACK_IMPORTED_MODULE_4___default().viewAll),\n                __source: {\n                    fileName: \"/home/coder/Documents/nitc-website/us-in-media-next/components/UsInMedia.js\",\n                    lineNumber: 33,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: \"VIEW ALL\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                className: (_styles_UsInMedia_module_css__WEBPACK_IMPORTED_MODULE_4___default().cardsContainer),\n                __source: {\n                    fileName: \"/home/coder/Documents/nitc-website/us-in-media-next/components/UsInMedia.js\",\n                    lineNumber: 34,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: cardData.slice(0, 5).map(function(e) {\n                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                        className: (_styles_UsInMedia_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),\n                        __source: {\n                            fileName: \"/home/coder/Documents/nitc-website/us-in-media-next/components/UsInMedia.js\",\n                            lineNumber: 38,\n                            columnNumber: 21\n                        },\n                        __self: _this1,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"img\", {\n                                className: (_styles_UsInMedia_module_css__WEBPACK_IMPORTED_MODULE_4___default().image),\n                                src: e.image,\n                                alt: \"template\",\n                                __source: {\n                                    fileName: \"/home/coder/Documents/nitc-website/us-in-media-next/components/UsInMedia.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 25\n                                },\n                                __self: _this1\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                                className: \"newsTitleBox\",\n                                __source: {\n                                    fileName: \"/home/coder/Documents/nitc-website/us-in-media-next/components/UsInMedia.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 25\n                                },\n                                __self: _this1,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h2\", {\n                                    className: (_styles_UsInMedia_module_css__WEBPACK_IMPORTED_MODULE_4___default().newsTitle),\n                                    __source: {\n                                        fileName: \"/home/coder/Documents/nitc-website/us-in-media-next/components/UsInMedia.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 29\n                                    },\n                                    __self: _this1,\n                                    children: e.title\n                                })\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h3\", {\n                                className: (_styles_UsInMedia_module_css__WEBPACK_IMPORTED_MODULE_4___default().newsSource),\n                                __source: {\n                                    fileName: \"/home/coder/Documents/nitc-website/us-in-media-next/components/UsInMedia.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 25\n                                },\n                                __self: _this1,\n                                children: e.source\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h3\", {\n                                className: (_styles_UsInMedia_module_css__WEBPACK_IMPORTED_MODULE_4___default().publishDate),\n                                __source: {\n                                    fileName: \"/home/coder/Documents/nitc-website/us-in-media-next/components/UsInMedia.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 25\n                                },\n                                __self: _this1,\n                                children: e.time\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"a\", {\n                                href: e.link,\n                                target: \"_blank\",\n                                __source: {\n                                    fileName: \"/home/coder/Documents/nitc-website/us-in-media-next/components/UsInMedia.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 25\n                                },\n                                __self: _this1,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"button\", {\n                                    className: (_styles_UsInMedia_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),\n                                    __source: {\n                                        fileName: \"/home/coder/Documents/nitc-website/us-in-media-next/components/UsInMedia.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 29\n                                    },\n                                    __self: _this1,\n                                    children: \"READ MORE\"\n                                })\n                            })\n                        ]\n                    }, e.title);\n                })\n            })\n        ]\n    }));\n};\n_s(UsInMedia, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = UsInMedia;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UsInMedia);\nvar _c;\n$RefreshReg$(_c, \"UsInMedia\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzSW5NZWRpYS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE0RDtBQUVqQjtBQUNsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLekIsR0FBSyxDQUFDSSxTQUFTLEdBQUcsUUFDbEIsR0FEd0IsQ0FBQzs7O0lBRXJCLEdBQUssQ0FBMkJGLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsR0FBcENHLFFBQVEsR0FBaUJILEdBQVksS0FBM0JJLFdBQVcsR0FBSUosR0FBWTtJQUU1Q0QsZ0RBQVMsK0pBQUMsUUFBUSxXQUFJLENBQUM7Ozs7OzJCQUNiRSxnREFBUyxDQUFDLENBQW1DLG9DQUM5Q0ssSUFBSSxDQUFDQyxRQUFRLENBQVJBLEdBQUcsRUFBSSxDQUFDO3dCQUNWLEdBQUcsRUFBQzs0QkFDQUgsV0FBVyxDQUFDRyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsUUFBUTt3QkFFakMsQ0FBQyxNQUFLLEVBQUNDLEdBQUcsRUFBQyxDQUFDOzRCQUNSQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRzt3QkFDbkIsQ0FBQztvQkFFTCxDQUFDLEVBQ0FHLEtBQUssQ0FBQ0gsUUFBUSxDQUFSQSxHQUFHLEVBQUksQ0FBQzt3QkFDWEMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEdBQUc7b0JBQ25CLENBQUM7Ozs7OztJQUNULENBQUMsSUFBRSxDQUFDLENBQUM7SUFFTCxNQUFNLHVFQUNESSxDQUFHO1FBQUNDLFNBQVMsRUFBRWpCLCtFQUF5Qjs7Ozs7Ozs7aUZBRXBDbUIsQ0FBRTtnQkFBQ0YsU0FBUyxFQUFFakIsMkVBQXFCOzs7Ozs7OzBCQUFFLENBQVc7O2lGQUNoRHFCLENBQUM7Z0JBQUNKLFNBQVMsRUFBRWpCLDZFQUF1Qjs7Ozs7OzswQkFBRSxDQUFROztpRkFDOUNnQixDQUFHO2dCQUFDQyxTQUFTLEVBQUVqQixvRkFBOEI7Ozs7Ozs7MEJBRXpDSyxRQUFRLENBQUNtQixLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRUMsR0FBRyxDQUFDQyxRQUUxQyxDQUYwQ0EsQ0FBQztrQ0FFdkIsTUFBTSx5REFBTFYsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFFakIsMEVBQW9COzs7Ozs7OztpR0FDL0I0QixDQUFHO2dDQUFDWCxTQUFTLEVBQUVqQiwyRUFBcUI7Z0NBQUU4QixHQUFHLEVBQUVKLENBQUMsQ0FBQ0csS0FBSztnQ0FBRUUsR0FBRyxFQUFDLENBQVU7Ozs7Ozs7O2lHQUNsRWYsQ0FBRztnQ0FBQ0MsU0FBUyxFQUFDLENBQWM7Ozs7Ozs7K0dBQ3hCZSxDQUFFO29DQUFDZixTQUFTLEVBQUVqQiwrRUFBeUI7Ozs7Ozs7OENBQUcwQixDQUFDLENBQUNOLEtBQUs7OztpR0FFckRjLENBQUU7Z0NBQUNqQixTQUFTLEVBQUVqQixnRkFBMEI7Ozs7Ozs7MENBQUcwQixDQUFDLENBQUNVLE1BQU07O2lHQUNuREYsQ0FBRTtnQ0FBQ2pCLFNBQVMsRUFBRWpCLGlGQUEyQjs7Ozs7OzswQ0FBRzBCLENBQUMsQ0FBQ1ksSUFBSTs7aUdBQ2xEQyxDQUFDO2dDQUFDQyxJQUFJLEVBQUVkLENBQUMsQ0FBQ2UsSUFBSTtnQ0FBRUMsTUFBTSxFQUFDLENBQVE7Ozs7Ozs7K0dBQzNCQyxDQUFNO29DQUFDMUIsU0FBUyxFQUFFakIsNEVBQXNCOzs7Ozs7OzhDQUFFLENBQVM7Ozs7dUJBUmpCMEIsQ0FBQyxDQUFDTixLQUFLOzs7OztBQW1CdEUsQ0FBQztHQWhES2hCLFNBQVM7S0FBVEEsU0FBUztBQWtEZiwrREFBZUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1VzSW5NZWRpYS5qcz9mZmQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c0luTWVkaWFTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL1VzSW5NZWRpYS5tb2R1bGUuY3NzJ1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cblxuXG5cbmNvbnN0IFVzSW5NZWRpYSA9ICgpID0+IHtcblxuICAgIGNvbnN0IFtjYXJkRGF0YSwgc2V0Q2FyZERhdGFdID0gdXNlU3RhdGUoW10pXG5cbiAgICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9hcGkvc2NyYXBlcicpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICAgICAgc2V0Q2FyZERhdGEocmVzLmRhdGEuYXJ0aWNsZXMpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9Y2F0Y2goZXJyKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgfSlcbiAgICB9LCBbXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt1c0luTWVkaWFTdHlsZXMuY29udGFpbmVyfT5cblxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17dXNJbk1lZGlhU3R5bGVzLnRpdGxlfT5VUyBJTiBNRURJQTwvaDE+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3VzSW5NZWRpYVN0eWxlcy52aWV3QWxsfT5WSUVXIEFMTDwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt1c0luTWVkaWFTdHlsZXMuY2FyZHNDb250YWluZXJ9PlxuXG4gICAgICAgICAgICAgICAge2NhcmREYXRhLnNsaWNlKDAsIDUpLm1hcChlID0+IChcblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dXNJbk1lZGlhU3R5bGVzLmNhcmR9IGtleT17ZS50aXRsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17dXNJbk1lZGlhU3R5bGVzLmltYWdlfSBzcmM9e2UuaW1hZ2V9IGFsdD1cInRlbXBsYXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3c1RpdGxlQm94XCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3VzSW5NZWRpYVN0eWxlcy5uZXdzVGl0bGV9PntlLnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3VzSW5NZWRpYVN0eWxlcy5uZXdzU291cmNlfT57ZS5zb3VyY2V9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3VzSW5NZWRpYVN0eWxlcy5wdWJsaXNoRGF0ZX0+e2UudGltZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17ZS5saW5rfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17dXNJbk1lZGlhU3R5bGVzLmJ1dHRvbn0+UkVBRCBNT1JFPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzSW5NZWRpYVxuIl0sIm5hbWVzIjpbInVzSW5NZWRpYVN0eWxlcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJVc0luTWVkaWEiLCJjYXJkRGF0YSIsInNldENhcmREYXRhIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJhcnRpY2xlcyIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImgxIiwidGl0bGUiLCJwIiwidmlld0FsbCIsImNhcmRzQ29udGFpbmVyIiwic2xpY2UiLCJtYXAiLCJlIiwiY2FyZCIsImltZyIsImltYWdlIiwic3JjIiwiYWx0IiwiaDIiLCJuZXdzVGl0bGUiLCJoMyIsIm5ld3NTb3VyY2UiLCJzb3VyY2UiLCJwdWJsaXNoRGF0ZSIsInRpbWUiLCJhIiwiaHJlZiIsImxpbmsiLCJ0YXJnZXQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/UsInMedia.js\n");

/***/ })

});
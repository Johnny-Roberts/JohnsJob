/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/johnnyroberts/Documents/JohnsJob/JohnsJob.ro/root/pages/index.js\";\n\n\n\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_2__.Component {\n  static async getInitialProps() {\n    let response = await axios__WEBPACK_IMPORTED_MODULE_3___default().get('http://localhost:3000/api/posts');\n    return {\n      posts: response.data\n    };\n  }\n\n  render() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"jsx-2673726414\" + \" \" + 'container',\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n        id: \"2673726414\",\n        children: \".header.jsx-2673726414{padding:16px 16px;}.content.jsx-2673726414{padding:16px 16px;}.post.jsx-2673726414{margin-bottom:16px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2hubnlyb2JlcnRzL0RvY3VtZW50cy9Kb2huc0pvYi9Kb2huc0pvYi5yby9yb290L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFvQixBQUdpQyxBQUdBLEFBR0Msa0JBTHJCLEFBR0EsQ0FHQSIsImZpbGUiOiIvVXNlcnMvam9obm55cm9iZXJ0cy9Eb2N1bWVudHMvSm9obnNKb2IvSm9obnNKb2Iucm8vcm9vdC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wb3N0cycpO1xuICAgIHJldHVybiB7IHBvc3RzOiByZXNwb25zZS5kYXRhIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTZweCAxNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxNnB4IDE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucG9zdCB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlcic+XG4gICAgICAgICAgPGgxPktleXN0b25lIE5leHQgRXhhbXBsZTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XG4gICAgICAgICAgeyB0aGlzLnByb3BzLnBvc3RzLm1hcCgocG9zdCwgaSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwb3N0JyBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtMTIgY29sLW1kLTQnPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdpbWctZmx1aWQnIHNyYz17cG9zdC5pbWFnZS5zZWN1cmVfdXJsfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTEyIGNvbC1tZC04Jz5cbiAgICAgICAgICAgICAgICAgICAgICA8aDI+e3Bvc3QudGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBwb3N0LmNvbnRlbnQuYnJpZWZ9fT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7Il19 */\\n/*@ sourceURL=/Users/johnnyroberts/Documents/JohnsJob/JohnsJob.ro/root/pages/index.js */\"\n      }, void 0, false, void 0, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-2673726414\" + \" \" + 'header',\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n          className: \"jsx-2673726414\",\n          children: \"Keystone Next Example\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-2673726414\" + \" \" + 'content',\n        children: this.props.posts.map((post, i) => {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"jsx-2673726414\" + \" \" + 'post',\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: \"jsx-2673726414\" + \" \" + 'row',\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-2673726414\" + \" \" + 'col-12 col-md-4',\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                  src: post.image.secure_url,\n                  className: \"jsx-2673726414\" + \" \" + 'img-fluid'\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 34,\n                  columnNumber: 23\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 33,\n                columnNumber: 21\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-2673726414\" + \" \" + 'col-12 col-md-8',\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                  className: \"jsx-2673726414\",\n                  children: post.title\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 37,\n                  columnNumber: 23\n                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                  dangerouslySetInnerHTML: {\n                    __html: post.content.brief\n                  },\n                  className: \"jsx-2673726414\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 38,\n                  columnNumber: 23\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 36,\n                columnNumber: 21\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 32,\n              columnNumber: 19\n            }, this)\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 17\n          }, this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qb2huc2pvYi8uL3BhZ2VzL2luZGV4LmpzPzQ0ZDgiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzcG9uc2UiLCJheGlvcyIsInBvc3RzIiwiZGF0YSIsInJlbmRlciIsInByb3BzIiwibWFwIiwicG9zdCIsImkiLCJpbWFnZSIsInNlY3VyZV91cmwiLCJ0aXRsZSIsIl9faHRtbCIsImNvbnRlbnQiLCJicmllZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxHQUFOLFNBQWtCQyw0Q0FBbEIsQ0FBNEI7QUFFMUIsZUFBYUMsZUFBYixHQUErQjtBQUM3QixRQUFJQyxRQUFRLEdBQUcsTUFBTUMsZ0RBQUEsQ0FBVSxpQ0FBVixDQUFyQjtBQUNBLFdBQU87QUFBRUMsV0FBSyxFQUFFRixRQUFRLENBQUNHO0FBQWxCLEtBQVA7QUFDRDs7QUFFREMsUUFBTSxHQUFHO0FBQ1Asd0JBQ0U7QUFBQSwwQ0FBZSxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0RBWUU7QUFBQSw0Q0FBZSxRQUFmO0FBQUEsK0JBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaRixlQWVFO0FBQUEsNENBQWUsU0FBZjtBQUFBLGtCQUNJLEtBQUtDLEtBQUwsQ0FBV0gsS0FBWCxDQUFpQkksR0FBakIsQ0FBcUIsQ0FBQ0MsSUFBRCxFQUFPQyxDQUFQLEtBQWE7QUFDaEMsOEJBQ0U7QUFBQSxnREFBZSxNQUFmO0FBQUEsbUNBQ0U7QUFBQSxrREFBZSxLQUFmO0FBQUEsc0NBQ0U7QUFBQSxvREFBZSxpQkFBZjtBQUFBLHVDQUNFO0FBQTJCLHFCQUFHLEVBQUVELElBQUksQ0FBQ0UsS0FBTCxDQUFXQyxVQUEzQztBQUFBLHNEQUFlO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFJRTtBQUFBLG9EQUFlLGlCQUFmO0FBQUEsd0NBQ0U7QUFBQTtBQUFBLDRCQUFLSCxJQUFJLENBQUNJO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixlQUVFO0FBQUsseUNBQXVCLEVBQUU7QUFBQ0MsMEJBQU0sRUFBRUwsSUFBSSxDQUFDTSxPQUFMLENBQWFDO0FBQXRCLG1CQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsYUFBMkJOLENBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREY7QUFhRCxTQWREO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBbUNEOztBQTNDeUI7O0FBOEM1QiwrREFBZVgsR0FBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Bvc3RzJyk7XG4gICAgcmV0dXJuIHsgcG9zdHM6IHJlc3BvbnNlLmRhdGEgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxNnB4IDE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDE2cHggMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wb3N0IHtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGVhZGVyJz5cbiAgICAgICAgICA8aDE+S2V5c3RvbmUgTmV4dCBFeGFtcGxlPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cbiAgICAgICAgICB7IHRoaXMucHJvcHMucG9zdHMubWFwKChwb3N0LCBpKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Bvc3QnIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC0xMiBjb2wtbWQtNCc+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2ltZy1mbHVpZCcgc3JjPXtwb3N0LmltYWdlLnNlY3VyZV91cmx9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtMTIgY29sLW1kLTgnPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMj57cG9zdC50aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHBvc3QuY29udGVudC5icmllZn19PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSkgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/style");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
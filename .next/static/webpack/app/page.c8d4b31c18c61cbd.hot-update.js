"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/Portfolio.js":
/*!*********************************!*\
  !*** ./components/Portfolio.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Portfolio; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../../../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../../../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/../../../node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Portfolio() {\n    _s();\n    const fullText = \"hey there! i'm freya\";\n    const [typedText, setTypedText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let index = 0;\n        const typingInterval = setInterval(()=>{\n            console.log(fullText[index]);\n            index += 1;\n            setTypedText((prevText)=>prevText + fullText[index]);\n            if (index === fullText.length) {\n                clearInterval(typingInterval);\n            }\n        }, 150); // Adjust typing speed (in ms)\n        return ()=>clearInterval(typingInterval); // Cleanup on unmount\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bread\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                src: \"/computer.png\" // The image is accessed as if it's at the root\n                ,\n                alt: \"Logo\",\n                width: 325,\n                height: 300,\n                className: \"animated-image\"\n            }, void 0, false, {\n                fileName: \"/Users/freyafuglo/Desktop/5. semester/my-next-project/components/Portfolio.js\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"header-text\",\n                children: typedText\n            }, void 0, false, {\n                fileName: \"/Users/freyafuglo/Desktop/5. semester/my-next-project/components/Portfolio.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Welcome to my portfolio page. More content coming soon!\"\n            }, void 0, false, {\n                fileName: \"/Users/freyafuglo/Desktop/5. semester/my-next-project/components/Portfolio.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"I'm a software engineer from Copenhagen, Denmark. I have a deep passion for system development, and I am dedicated to pushing the boundaries of what is possible in the world of technology.\"\n            }, void 0, false, {\n                fileName: \"/Users/freyafuglo/Desktop/5. semester/my-next-project/components/Portfolio.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/freyafuglo/Desktop/5. semester/my-next-project/components/Portfolio.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(Portfolio, \"6zza8CsKZ3FS4k7jFDh4FB9Gp5Q=\");\n_c = Portfolio;\nvar _c;\n$RefreshReg$(_c, \"Portfolio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUG9ydGZvbGlvLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDNEM7QUFDYjtBQUdoQixTQUFTRzs7SUFDdEIsTUFBTUMsV0FBVztJQUNqQixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR04sK0NBQVFBLENBQUM7SUFFM0NDLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSU0sUUFBUTtRQUNaLE1BQU1DLGlCQUFpQkMsWUFBWTtZQUNqQ0MsUUFBUUMsR0FBRyxDQUFDUCxRQUFRLENBQUNHLE1BQU07WUFDM0JBLFNBQVM7WUFDVEQsYUFBYSxDQUFDTSxXQUFhQSxXQUFXUixRQUFRLENBQUNHLE1BQU07WUFFckQsSUFBSUEsVUFBVUgsU0FBU1MsTUFBTSxFQUFFO2dCQUM3QkMsY0FBY047WUFDaEI7UUFFRixHQUFHLE1BQU0sOEJBQThCO1FBRXZDLE9BQU8sSUFBTU0sY0FBY04saUJBQWlCLHFCQUFxQjtJQUNuRSxHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ087UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNkLGtEQUFLQTtnQkFDTmUsS0FBSSxnQkFBc0IsK0NBQStDOztnQkFDekVDLEtBQUk7Z0JBQ0pDLE9BQU87Z0JBQ1BDLFFBQVE7Z0JBQ1JKLFdBQVU7Ozs7OzswQkFFWiw4REFBQ0s7Z0JBQUdMLFdBQVU7MEJBQWVYOzs7Ozs7MEJBQzdCLDhEQUFDaUI7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7MEJBQUU7Ozs7Ozs7Ozs7OztBQUtUO0dBcEN3QnBCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUG9ydGZvbGlvLmpzPzY0NjMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnOyAvLyBFbmFibGVzIGludGVyYWN0aXZpdHkgaW4gTmV4dC5qc1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3J0Zm9saW8oKSB7XG4gIGNvbnN0IGZ1bGxUZXh0ID0gXCJoZXkgdGhlcmUhIGknbSBmcmV5YVwiO1xuICBjb25zdCBbdHlwZWRUZXh0LCBzZXRUeXBlZFRleHRdID0gdXNlU3RhdGUoJycpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBjb25zdCB0eXBpbmdJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGZ1bGxUZXh0W2luZGV4XSlcbiAgICAgIGluZGV4ICs9IDE7XG4gICAgICBzZXRUeXBlZFRleHQoKHByZXZUZXh0KSA9PiBwcmV2VGV4dCArIGZ1bGxUZXh0W2luZGV4XSk7XG4gICAgICBcbiAgICAgIGlmIChpbmRleCA9PT0gZnVsbFRleHQubGVuZ3RoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodHlwaW5nSW50ZXJ2YWwpO1xuICAgICAgfVxuICAgICAgXG4gICAgfSwgMTUwKTsgLy8gQWRqdXN0IHR5cGluZyBzcGVlZCAoaW4gbXMpXG4gICAgXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwodHlwaW5nSW50ZXJ2YWwpOyAvLyBDbGVhbnVwIG9uIHVubW91bnRcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJicmVhZFwiPlxuICAgICAgICA8SW1hZ2UgXG4gICAgICAgIHNyYz1cIi9jb21wdXRlci5wbmdcIiAgICAgICAvLyBUaGUgaW1hZ2UgaXMgYWNjZXNzZWQgYXMgaWYgaXQncyBhdCB0aGUgcm9vdFxuICAgICAgICBhbHQ9XCJMb2dvXCJcbiAgICAgICAgd2lkdGg9ezMyNX0gICAgICAgICAgIC8vIFNwZWNpZnkgdGhlIHdpZHRoIChpbiBwaXhlbHMpXG4gICAgICAgIGhlaWdodD17MzAwfSAgICAgICAgICAvLyBTcGVjaWZ5IHRoZSBoZWlnaHQgKGluIHBpeGVscylcbiAgICAgICAgY2xhc3NOYW1lPVwiYW5pbWF0ZWQtaW1hZ2VcIlxuICAgICAgLz5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJoZWFkZXItdGV4dFwiPnt0eXBlZFRleHR9PC9oMT5cbiAgICAgIDxoMj5XZWxjb21lIHRvIG15IHBvcnRmb2xpbyBwYWdlLiBNb3JlIGNvbnRlbnQgY29taW5nIHNvb24hPC9oMj5cbiAgICAgIDxwPkknbSBhIHNvZnR3YXJlIGVuZ2luZWVyIGZyb20gQ29wZW5oYWdlbiwgRGVubWFyay4gSSBoYXZlIGEgZGVlcCBwYXNzaW9uIGZvciBcbiAgICAgICAgc3lzdGVtIGRldmVsb3BtZW50LCBhbmQgSSBhbSBkZWRpY2F0ZWQgdG8gcHVzaGluZyB0aGUgYm91bmRhcmllcyBvZiB3aGF0IGlzIFxuICAgICAgICBwb3NzaWJsZSBpbiB0aGUgd29ybGQgb2YgdGVjaG5vbG9neS48L3A+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbWFnZSIsIlBvcnRmb2xpbyIsImZ1bGxUZXh0IiwidHlwZWRUZXh0Iiwic2V0VHlwZWRUZXh0IiwiaW5kZXgiLCJ0eXBpbmdJbnRlcnZhbCIsInNldEludGVydmFsIiwiY29uc29sZSIsImxvZyIsInByZXZUZXh0IiwibGVuZ3RoIiwiY2xlYXJJbnRlcnZhbCIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiaDEiLCJoMiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Portfolio.js\n"));

/***/ })

});
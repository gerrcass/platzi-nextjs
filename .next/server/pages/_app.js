/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store_Cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/Cart */ \"./store/Cart.tsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_store_Cart__WEBPACK_IMPORTED_MODULE_1__.ShopProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/home/sophie/code/platzi/platzi-nextjs/pages/_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/sophie/code/platzi/platzi-nextjs/pages/_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUMwQztBQUNaO0FBRWYsU0FBU0MsTUFBTSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBWSxFQUFFO0lBQzlELHFCQUNJLDhEQUFDSCxxREFBWUE7a0JBQ1QsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHcEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BsYXR6aS1uZXh0anMvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgeyBTaG9wUHJvdmlkZXIgfSBmcm9tICdAc3RvcmUvQ2FydCdcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFNob3BQcm92aWRlcj5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9TaG9wUHJvdmlkZXI+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJTaG9wUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./store/Cart.tsx":
/*!************************!*\
  !*** ./store/Cart.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ShopProvider\": () => (/* binding */ ShopProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst defaultState = {\n    items: [],\n    total: 0\n};\nconst defaultContextState = {};\n//\nconst ShopContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(defaultContextState);\nconst ShopProvider = ({ children  })=>{\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(shopReducer, defaultState);\n    const addToCart = (product, quantity)=>{\n        const existingCartItem = state.items.find((itemInCart)=>itemInCart.id === product.id);\n        let updatedCart;\n        if (existingCartItem === undefined) {\n            updatedCart = state.items.concat({\n                ...product,\n                quantity\n            });\n        } else {\n            updatedCart = state.items.map((currentItem)=>{\n                if (currentItem.id === product.id) {\n                    return {\n                        ...currentItem,\n                        quantity: currentItem.quantity + quantity\n                    };\n                } else {\n                    return currentItem;\n                }\n            });\n        }\n        dispatch({\n            type: \"add\",\n            payload: {\n                items: updatedCart,\n                total: getCartTotal(updatedCart)\n            }\n        });\n    };\n    const removeFromCart = (product)=>{\n        const updatedCart = state.items.filter((currentItem)=>currentItem.id !== product.id);\n        dispatch({\n            type: \"remove\",\n            payload: {\n                items: updatedCart,\n                total: getCartTotal(updatedCart)\n            }\n        });\n    };\n    const getCartTotal = (products)=>{\n        return products.reduce((sum, item)=>sum + item.quantity * item.price, 0);\n    };\n    const value = {\n        items: state.items,\n        total: state.total,\n        count: state.items.length,\n        addToCart,\n        removeFromCart\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ShopContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/sophie/code/platzi/platzi-nextjs/store/Cart.tsx\",\n        lineNumber: 86,\n        columnNumber: 9\n    }, undefined);\n};\nconst useShop = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ShopContext);\n    if (context === undefined) {\n        throw new Error(\"useShop must be used within ShopContext\");\n    }\n    return context;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useShop);\nconst shopReducer = (state, { type , payload  })=>{\n    switch(type){\n        case \"add\":\n            {\n                console.log(\"ADD_TO_CART\", payload);\n                return {\n                    ...state,\n                    items: payload.items,\n                    total: payload.total\n                };\n            }\n        case \"remove\":\n            {\n                console.log(\"REMOVE_FROM_CART\", payload);\n                return {\n                    ...state,\n                    items: payload.items,\n                    total: payload.total\n                };\n            }\n        default:\n            throw new Error(`No case for type ${type} found in shopReducer.`) // This is for developer only and shouldn't be seen by any end user\n            ;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixRQUFRdEIsS0FBSztvQkFDcEJDLE9BQU9xQixRQUFRckIsS0FBSztnQkFDeEI7WUFDSjtRQUNBO1lBQ0ksTUFBTSxJQUFJb0MsTUFBTSxDQUFDLGlCQUFpQixFQUFFaEIsS0FBSyxzQkFBc0IsQ0FBQyxFQUFFLG1FQUFtRTthQUFwRTtJQUN6RTtBQUVKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGxhdHppLW5leHRqcy8uL3N0b3JlL0NhcnQudHN4PzY2NDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IHR5cGUgQ2FydEl0ZW1UeXBlID0gVFByb2R1Y3QgJiB7IHF1YW50aXR5OiBudW1iZXIgfVxuXG5leHBvcnQgdHlwZSBBbGxDYXJ0SXRlbXNUeXBlID0gQ2FydEl0ZW1UeXBlW11cblxuZXhwb3J0IHR5cGUgQ2FydFN0YXRlID0ge1xuICAgIGl0ZW1zOiBBbGxDYXJ0SXRlbXNUeXBlXG4gICAgdG90YWw6IG51bWJlclxufVxudHlwZSBDb250ZXh0VHlwZSA9IENhcnRTdGF0ZSAmIHsgY291bnQ6IG51bWJlciB9ICYge1xuICAgIGFkZFRvQ2FydChwcm9kdWN0OiBUUHJvZHVjdCwgcXVhbnRpdHk6IG51bWJlcik6IGFueVxuICAgIHJlbW92ZUZyb21DYXJ0KHByb2R1Y3Q6IFRQcm9kdWN0KTogYW55XG59XG5cbmV4cG9ydCB0eXBlIENhcnRBY3Rpb24gPSB7XG4gICAgdHlwZTogJ2FkZCcgfCAncmVtb3ZlJ1xuICAgIHBheWxvYWQ6IENhcnRTdGF0ZVxufVxuXG5jb25zdCBkZWZhdWx0U3RhdGUgPSB7IGl0ZW1zOiBbXSwgdG90YWw6IDAgfSBhcyBDYXJ0U3RhdGVcbmNvbnN0IGRlZmF1bHRDb250ZXh0U3RhdGUgPSB7fSBhcyBDb250ZXh0VHlwZVxuLy9cbmNvbnN0IFNob3BDb250ZXh0ID0gY3JlYXRlQ29udGV4dChkZWZhdWx0Q29udGV4dFN0YXRlKVxuXG5leHBvcnQgY29uc3QgU2hvcFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pID0+IHtcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoc2hvcFJlZHVjZXIsIGRlZmF1bHRTdGF0ZSlcblxuICAgIGNvbnN0IGFkZFRvQ2FydCA9IChwcm9kdWN0OiBUUHJvZHVjdCwgcXVhbnRpdHk6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBleGlzdGluZ0NhcnRJdGVtID0gc3RhdGUuaXRlbXMuZmluZCgoaXRlbUluQ2FydDogQ2FydEl0ZW1UeXBlKSA9PiBpdGVtSW5DYXJ0LmlkID09PSBwcm9kdWN0LmlkKVxuICAgICAgICBsZXQgdXBkYXRlZENhcnQ6IEFsbENhcnRJdGVtc1R5cGVcblxuICAgICAgICBpZiAoZXhpc3RpbmdDYXJ0SXRlbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB1cGRhdGVkQ2FydCA9IHN0YXRlLml0ZW1zLmNvbmNhdCh7XG4gICAgICAgICAgICAgICAgLi4ucHJvZHVjdCxcbiAgICAgICAgICAgICAgICBxdWFudGl0eVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVwZGF0ZWRDYXJ0ID0gc3RhdGUuaXRlbXMubWFwKChjdXJyZW50SXRlbTogQ2FydEl0ZW1UeXBlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJdGVtLmlkID09PSBwcm9kdWN0LmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5jdXJyZW50SXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiBjdXJyZW50SXRlbS5xdWFudGl0eSArIHF1YW50aXR5XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudEl0ZW1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogJ2FkZCcsXG4gICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgaXRlbXM6IHVwZGF0ZWRDYXJ0LFxuICAgICAgICAgICAgICAgIHRvdGFsOiBnZXRDYXJ0VG90YWwodXBkYXRlZENhcnQpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSlcblxuICAgIH1cbiAgICBjb25zdCByZW1vdmVGcm9tQ2FydCA9IChwcm9kdWN0OiBUUHJvZHVjdCkgPT4ge1xuICAgICAgICBjb25zdCB1cGRhdGVkQ2FydCA9IHN0YXRlLml0ZW1zLmZpbHRlcigoY3VycmVudEl0ZW06IENhcnRJdGVtVHlwZSkgPT4gY3VycmVudEl0ZW0uaWQgIT09IHByb2R1Y3QuaWQpXG5cbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogJ3JlbW92ZScsXG4gICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgaXRlbXM6IHVwZGF0ZWRDYXJ0LFxuICAgICAgICAgICAgICAgIHRvdGFsOiBnZXRDYXJ0VG90YWwodXBkYXRlZENhcnQpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIGNvbnN0IGdldENhcnRUb3RhbCA9IChwcm9kdWN0czogQWxsQ2FydEl0ZW1zVHlwZSkgPT4ge1xuICAgICAgICByZXR1cm4gcHJvZHVjdHMucmVkdWNlKChzdW0sIGl0ZW0pID0+IHN1bSArIChpdGVtLnF1YW50aXR5ICogaXRlbS5wcmljZSksIDApXG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWUgPSB7XG4gICAgICAgIGl0ZW1zOiBzdGF0ZS5pdGVtcyxcbiAgICAgICAgdG90YWw6IHN0YXRlLnRvdGFsLFxuICAgICAgICBjb3VudDogc3RhdGUuaXRlbXMubGVuZ3RoLFxuICAgICAgICBhZGRUb0NhcnQsXG4gICAgICAgIHJlbW92ZUZyb21DYXJ0XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFNob3BDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvU2hvcENvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxufVxuXG5jb25zdCB1c2VTaG9wID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KFNob3BDb250ZXh0KVxuXG4gICAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1c2VTaG9wIG11c3QgYmUgdXNlZCB3aXRoaW4gU2hvcENvbnRleHRcIilcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRleHRcbn1cbmV4cG9ydCBkZWZhdWx0IHVzZVNob3BcblxuXG5cbmNvbnN0IHNob3BSZWR1Y2VyID0gKFxuICAgIHN0YXRlOiBDYXJ0U3RhdGUsXG4gICAgeyB0eXBlLCBwYXlsb2FkIH06IENhcnRBY3Rpb25cbikgPT4ge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhZGQnOiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQUREX1RPX0NBUlQnLCBwYXlsb2FkKVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpdGVtczogcGF5bG9hZC5pdGVtcyxcbiAgICAgICAgICAgICAgICB0b3RhbDogcGF5bG9hZC50b3RhbFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ3JlbW92ZSc6IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSRU1PVkVfRlJPTV9DQVJUJywgcGF5bG9hZClcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgaXRlbXM6IHBheWxvYWQuaXRlbXMsXG4gICAgICAgICAgICAgICAgdG90YWw6IHBheWxvYWQudG90YWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBjYXNlIGZvciB0eXBlICR7dHlwZX0gZm91bmQgaW4gc2hvcFJlZHVjZXIuYCkgLy8gVGhpcyBpcyBmb3IgZGV2ZWxvcGVyIG9ubHkgYW5kIHNob3VsZG4ndCBiZSBzZWVuIGJ5IGFueSBlbmQgdXNlclxuICAgIH1cblxufSJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlUmVkdWNlciIsImRlZmF1bHRTdGF0ZSIsIml0ZW1zIiwidG90YWwiLCJkZWZhdWx0Q29udGV4dFN0YXRlIiwiU2hvcENvbnRleHQiLCJTaG9wUHJvdmlkZXIiLCJjaGlsZHJlbiIsInN0YXRlIiwiZGlzcGF0Y2giLCJzaG9wUmVkdWNlciIsImFkZFRvQ2FydCIsInByb2R1Y3QiLCJxdWFudGl0eSIsImV4aXN0aW5nQ2FydEl0ZW0iLCJmaW5kIiwiaXRlbUluQ2FydCIsImlkIiwidXBkYXRlZENhcnQiLCJ1bmRlZmluZWQiLCJjb25jYXQiLCJtYXAiLCJjdXJyZW50SXRlbSIsInR5cGUiLCJwYXlsb2FkIiwiZ2V0Q2FydFRvdGFsIiwicmVtb3ZlRnJvbUNhcnQiLCJmaWx0ZXIiLCJwcm9kdWN0cyIsInJlZHVjZSIsInN1bSIsIml0ZW0iLCJwcmljZSIsInZhbHVlIiwiY291bnQiLCJsZW5ndGgiLCJQcm92aWRlciIsInVzZVNob3AiLCJjb250ZXh0IiwiRXJyb3IiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/Cart.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ShopProvider\": () => (/* binding */ ShopProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst defaultState = {};\nconst defaultContextState = {};\n//\nconst ShopContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(defaultContextState);\nconst ShopProvider = ({ children  })=>{\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(shopReducer, defaultState);\n    const addToCart = (product, quantity)=>{\n        const existingCartItem = state.items.find((itemInCart)=>itemInCart.id === product.id);\n        let updatedCart;\n        if (existingCartItem === undefined) {\n            updatedCart = state.items.concat({\n                ...product,\n                quantity\n            });\n        } else {\n            updatedCart = state.items.map((currentItem)=>{\n                if (currentItem.id === product.id) {\n                    return {\n                        ...currentItem,\n                        quantity: currentItem.quantity + quantity\n                    };\n                } else {\n                    return currentItem;\n                }\n            });\n        }\n        dispatch({\n            type: \"add\",\n            payload: {\n                items: updatedCart,\n                total: getCartTotal(updatedCart)\n            }\n        });\n    };\n    const removeFromCart = (product)=>{\n        const updatedCart = state.items.filter((currentItem)=>currentItem.id !== product.id);\n        dispatch({\n            type: \"remove\",\n            payload: {\n                items: updatedCart,\n                total: getCartTotal(updatedCart)\n            }\n        });\n    };\n    const getCartTotal = (products)=>{\n        return products.reduce((sum, item)=>sum + item.quantity * item.price, 0);\n    };\n    const value = {\n        total: state.total,\n        count: state.items && state.items.length,\n        items: state.items,\n        addToCart,\n        removeFromCart\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ShopContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/sophie/code/platzi/platzi-nextjs/store/Cart.tsx\",\n        lineNumber: 86,\n        columnNumber: 9\n    }, undefined);\n};\nconst useShop = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ShopContext);\n    if (context === undefined) {\n        throw new Error(\"useShop must be used within ShopContext\");\n    }\n    return context;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useShop);\nconst shopReducer = (state, { type , payload  })=>{\n    switch(type){\n        case \"add\":\n            {\n                console.log(\"ADD_TO_CART\", payload);\n                return {\n                    ...state,\n                    items: payload.items,\n                    total: payload.total\n                };\n            }\n        case \"remove\":\n            {\n                console.log(\"REMOVE_FROM_CART\", payload);\n                return {\n                    ...state,\n                    items: payload.items,\n                    total: payload.total\n                };\n            }\n        default:\n            throw new Error(`No case for type ${type} found in shopReducer.`) // This is for developer only and shouldn't be seen by any end user\n            ;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBT0QsUUFBUUMsS0FBSztnQkFDeEI7WUFDSjtRQUNBO1lBQ0ksTUFBTSxJQUFJZSxNQUFNLENBQUMsaUJBQWlCLEVBQUVqQixLQUFLLHNCQUFzQixDQUFDLEVBQUUsbUVBQW1FO2FBQXBFO0lBQ3pFO0FBRUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wbGF0emktbmV4dGpzLy4vc3RvcmUvQ2FydC50c3g/NjY0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgdHlwZSBDYXJ0SXRlbVR5cGUgPSBUUHJvZHVjdCAmIHsgcXVhbnRpdHk6IG51bWJlciB9XG5cbmV4cG9ydCB0eXBlIEFsbENhcnRJdGVtc1R5cGUgPSBDYXJ0SXRlbVR5cGVbXVxuXG5leHBvcnQgdHlwZSBDYXJ0U3RhdGUgPSB7XG4gICAgaXRlbXM6IEFsbENhcnRJdGVtc1R5cGVcbiAgICB0b3RhbDogbnVtYmVyXG59XG50eXBlIENvbnRleHRUeXBlID0gQ2FydFN0YXRlICYgeyBjb3VudDogbnVtYmVyIH0gJiB7XG4gICAgYWRkVG9DYXJ0KHByb2R1Y3Q6IFRQcm9kdWN0LCBxdWFudGl0eTogbnVtYmVyKTogYW55XG4gICAgcmVtb3ZlRnJvbUNhcnQocHJvZHVjdDogVFByb2R1Y3QpOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQ2FydEFjdGlvbiA9IHtcbiAgICB0eXBlOiAnYWRkJyB8ICdyZW1vdmUnXG4gICAgcGF5bG9hZDogQ2FydFN0YXRlXG59XG5cbmNvbnN0IGRlZmF1bHRTdGF0ZSA9IHt9IGFzIENhcnRTdGF0ZVxuY29uc3QgZGVmYXVsdENvbnRleHRTdGF0ZSA9IHt9IGFzIENvbnRleHRUeXBlXG4vL1xuY29uc3QgU2hvcENvbnRleHQgPSBjcmVhdGVDb250ZXh0KGRlZmF1bHRDb250ZXh0U3RhdGUpXG5cbmV4cG9ydCBjb25zdCBTaG9wUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkgPT4ge1xuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihzaG9wUmVkdWNlciwgZGVmYXVsdFN0YXRlKVxuXG4gICAgY29uc3QgYWRkVG9DYXJ0ID0gKHByb2R1Y3Q6IFRQcm9kdWN0LCBxdWFudGl0eTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nQ2FydEl0ZW0gPSBzdGF0ZS5pdGVtcy5maW5kKChpdGVtSW5DYXJ0OiBDYXJ0SXRlbVR5cGUpID0+IGl0ZW1JbkNhcnQuaWQgPT09IHByb2R1Y3QuaWQpXG4gICAgICAgIGxldCB1cGRhdGVkQ2FydDogQWxsQ2FydEl0ZW1zVHlwZVxuXG4gICAgICAgIGlmIChleGlzdGluZ0NhcnRJdGVtID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHVwZGF0ZWRDYXJ0ID0gc3RhdGUuaXRlbXMuY29uY2F0KHtcbiAgICAgICAgICAgICAgICAuLi5wcm9kdWN0LFxuICAgICAgICAgICAgICAgIHF1YW50aXR5XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdXBkYXRlZENhcnQgPSBzdGF0ZS5pdGVtcy5tYXAoKGN1cnJlbnRJdGVtOiBDYXJ0SXRlbVR5cGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEl0ZW0uaWQgPT09IHByb2R1Y3QuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmN1cnJlbnRJdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk6IGN1cnJlbnRJdGVtLnF1YW50aXR5ICsgcXVhbnRpdHlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50SXRlbVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiAnYWRkJyxcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICBpdGVtczogdXBkYXRlZENhcnQsXG4gICAgICAgICAgICAgICAgdG90YWw6IGdldENhcnRUb3RhbCh1cGRhdGVkQ2FydCksXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KVxuXG4gICAgfVxuICAgIGNvbnN0IHJlbW92ZUZyb21DYXJ0ID0gKHByb2R1Y3Q6IFRQcm9kdWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHVwZGF0ZWRDYXJ0ID0gc3RhdGUuaXRlbXMuZmlsdGVyKChjdXJyZW50SXRlbTogQ2FydEl0ZW1UeXBlKSA9PiBjdXJyZW50SXRlbS5pZCAhPT0gcHJvZHVjdC5pZClcblxuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiAncmVtb3ZlJyxcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICBpdGVtczogdXBkYXRlZENhcnQsXG4gICAgICAgICAgICAgICAgdG90YWw6IGdldENhcnRUb3RhbCh1cGRhdGVkQ2FydCksXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Q2FydFRvdGFsID0gKHByb2R1Y3RzOiBBbGxDYXJ0SXRlbXNUeXBlKSA9PiB7XG4gICAgICAgIHJldHVybiBwcm9kdWN0cy5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4gc3VtICsgKGl0ZW0ucXVhbnRpdHkgKiBpdGVtLnByaWNlKSwgMClcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZSA9IHtcbiAgICAgICAgdG90YWw6IHN0YXRlLnRvdGFsLFxuICAgICAgICBjb3VudDogc3RhdGUuaXRlbXMgJiYgc3RhdGUuaXRlbXMubGVuZ3RoLFxuICAgICAgICBpdGVtczogc3RhdGUuaXRlbXMsXG4gICAgICAgIGFkZFRvQ2FydCxcbiAgICAgICAgcmVtb3ZlRnJvbUNhcnRcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8U2hvcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9TaG9wQ29udGV4dC5Qcm92aWRlcj5cbiAgICApXG59XG5cbmNvbnN0IHVzZVNob3AgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoU2hvcENvbnRleHQpXG5cbiAgICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInVzZVNob3AgbXVzdCBiZSB1c2VkIHdpdGhpbiBTaG9wQ29udGV4dFwiKVxuICAgIH1cbiAgICByZXR1cm4gY29udGV4dFxufVxuZXhwb3J0IGRlZmF1bHQgdXNlU2hvcFxuXG5cblxuY29uc3Qgc2hvcFJlZHVjZXIgPSAoXG4gICAgc3RhdGU6IENhcnRTdGF0ZSxcbiAgICB7IHR5cGUsIHBheWxvYWQgfTogQ2FydEFjdGlvblxuKSA9PiB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2FkZCc6IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBRERfVE9fQ0FSVCcsIHBheWxvYWQpXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBwYXlsb2FkLml0ZW1zLFxuICAgICAgICAgICAgICAgIHRvdGFsOiBwYXlsb2FkLnRvdGFsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAncmVtb3ZlJzoge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1JFTU9WRV9GUk9NX0NBUlQnLCBwYXlsb2FkKVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpdGVtczogcGF5bG9hZC5pdGVtcyxcbiAgICAgICAgICAgICAgICB0b3RhbDogcGF5bG9hZC50b3RhbFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIGNhc2UgZm9yIHR5cGUgJHt0eXBlfSBmb3VuZCBpbiBzaG9wUmVkdWNlci5gKSAvLyBUaGlzIGlzIGZvciBkZXZlbG9wZXIgb25seSBhbmQgc2hvdWxkbid0IGJlIHNlZW4gYnkgYW55IGVuZCB1c2VyXG4gICAgfVxuXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VSZWR1Y2VyIiwiZGVmYXVsdFN0YXRlIiwiZGVmYXVsdENvbnRleHRTdGF0ZSIsIlNob3BDb250ZXh0IiwiU2hvcFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzdGF0ZSIsImRpc3BhdGNoIiwic2hvcFJlZHVjZXIiLCJhZGRUb0NhcnQiLCJwcm9kdWN0IiwicXVhbnRpdHkiLCJleGlzdGluZ0NhcnRJdGVtIiwiaXRlbXMiLCJmaW5kIiwiaXRlbUluQ2FydCIsImlkIiwidXBkYXRlZENhcnQiLCJ1bmRlZmluZWQiLCJjb25jYXQiLCJtYXAiLCJjdXJyZW50SXRlbSIsInR5cGUiLCJwYXlsb2FkIiwidG90YWwiLCJnZXRDYXJ0VG90YWwiLCJyZW1vdmVGcm9tQ2FydCIsImZpbHRlciIsInByb2R1Y3RzIiwicmVkdWNlIiwic3VtIiwiaXRlbSIsInByaWNlIiwidmFsdWUiLCJjb3VudCIsImxlbmd0aCIsIlByb3ZpZGVyIiwidXNlU2hvcCIsImNvbnRleHQiLCJFcnJvciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/Cart.tsx\n");

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
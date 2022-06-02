"use strict";
exports.id = 733;
exports.ids = [733];
exports.modules = {

/***/ 9733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "j": () => (/* binding */ WishlistContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const initialState = {
    items: []
};
const reducer = (state, action)=>{
    if (action.type === "ADD") {
        const updatedItems = state.items.concat(action.payload);
        return {
            items: updatedItems
        };
    }
    return initialState;
};
const WishlistContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext({
    items: [],
    addItemToWishlist: (item)=>{}
});
const WishListProvider = ({ children  })=>{
    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);
    const addItemToWishlist = (item)=>{
        dispatch({
            type: "ADD",
            payload: item
        });
    };
    const contextValue = {
        items: state.items,
        addItemToWishlist: addItemToWishlist
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WishlistContext.Provider, {
        value: contextValue,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WishListProvider);


/***/ })

};
;
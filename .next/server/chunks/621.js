"use strict";
exports.id = 621;
exports.ids = [621];
exports.modules = {

/***/ 8621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ CartContext),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const CartContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext({
    items: [],
    totalAmount: 0,
    addItemToCart: ()=>{},
    removeItemFromCart: ()=>{}
});
const initialState = {
    items: [],
    totalAmount: 0
};
const reducer = (state, action)=>{
    if (action.type === "ADD") {
        const updatedItems = state.items.concat(action.payload);
        const updatedTotalAmount = state.totalAmount + action.payload.price * action.payload.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    if (action.type === "REMOVE") {
        const updatedItems = state.items.filter((item)=>item.id !== action.id
        );
        return {
            items: updatedItems
        };
    }
    return initialState;
};
const CartContextProvider = ({ children  })=>{
    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);
    const addItemToCart = (item)=>{
        dispatch({
            type: "ADD",
            payload: item
        });
        console.log(item);
    };
    const removeItemFromCart = (id)=>{
        dispatch({
            type: "REMOVE",
            id: id
        });
    };
    const cartContext = {
        items: state.items,
        totalAmount: state.totalAmount,
        addItemToCart: addItemToCart,
        removeItemFromCart: removeItemFromCart
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CartContext.Provider, {
        value: cartContext,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartContextProvider);


/***/ })

};
;
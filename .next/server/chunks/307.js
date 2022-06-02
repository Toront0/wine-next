exports.id = 307;
exports.ids = [307];
exports.modules = {

/***/ 4715:
/***/ ((module) => {

// Exports
module.exports = {
	"pagination": "Pagination_pagination__UW1Ae",
	"list": "Pagination_list__fnrZ_",
	"item": "Pagination_item__YPTEo",
	"active": "Pagination_active__d3vZd"
};


/***/ }),

/***/ 9938:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "SecondaryButton_button__X_Je6"
};


/***/ }),

/***/ 5088:
/***/ ((module) => {

// Exports
module.exports = {
	"section": "Items_section__Ag31Y",
	"wrapper": "Items_wrapper__cCUUR",
	"product": "Items_product__cw2D_",
	"inner-wrapper": "Items_inner-wrapper__hLc06",
	"img": "Items_img__6IpXm",
	"info": "Items_info__nvpbJ",
	"details": "Items_details__l9mAJ",
	"price": "Items_price__cHqsJ",
	"types": "Items_types__wYkMW",
	"info-head": "Items_info-head__Sw49L",
	"heart": "Items_heart__LBfOq",
	"active": "Items_active__2WyIC"
};


/***/ }),

/***/ 7717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SecondaryButton_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9938);
/* harmony import */ var _SecondaryButton_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_SecondaryButton_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__);





const SecondaryButton = ({ children , href , hasArrow  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: href,
        passHref: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
            className: (_SecondaryButton_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),
            children: [
                children,
                hasArrow && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsArrowRight, {})
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SecondaryButton);


/***/ }),

/***/ 307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Items)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/sections/Products/Items.module.css
var Items_module = __webpack_require__(5088);
var Items_module_default = /*#__PURE__*/__webpack_require__.n(Items_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/SecondaryButton.js
var SecondaryButton = __webpack_require__(7717);
// EXTERNAL MODULE: external "react-icons/cg"
var cg_ = __webpack_require__(7865);
// EXTERNAL MODULE: ./src/utils/wishlist-context.js
var wishlist_context = __webpack_require__(9733);
// EXTERNAL MODULE: ./src/components/Pagination.module.css
var Pagination_module = __webpack_require__(4715);
var Pagination_module_default = /*#__PURE__*/__webpack_require__.n(Pagination_module);
;// CONCATENATED MODULE: ./src/components/Pagination.js



const Pagination = ({ totalProducts , productsPerPage , paginate , currentPage  })=>{
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++){
        pageNumbers.push(i);
    }
    console.log(currentPage);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Pagination_module_default()).pagination,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (Pagination_module_default()).list,
            children: pageNumbers.map((number)=>{
                return /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: `${(Pagination_module_default()).item} ${currentPage === number && (Pagination_module_default()).active}`,
                    onClick: ()=>paginate(number)
                    ,
                    children: number
                }, number);
            })
        })
    });
};
/* harmony default export */ const components_Pagination = (Pagination);

;// CONCATENATED MODULE: ./src/sections/Products/Items.js









const Products = ({ products  })=>{
    const { addItemToWishlist , items  } = (0,external_react_.useContext)(wishlist_context/* WishlistContext */.j);
    const { 0: data , 1: setData  } = (0,external_react_.useState)(products);
    const { 0: currentPage , 1: setCurrentPage  } = (0,external_react_.useState)(1);
    const { 0: productPerPage , 1: setProductsPerPage  } = (0,external_react_.useState)(8);
    const indexOfLastProduct = currentPage * productPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productPerPage;
    const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);
    const paginate = (pageNumber)=>setCurrentPage(pageNumber)
    ;
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: (Items_module_default()).section,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Items_module_default()).wrapper,
            children: [
                currentProducts.map((product, i)=>{
                    console.log(product);
                    const existInWishlist = items.find((item)=>item.id === product.id
                    );
                    return /*#__PURE__*/ jsx_runtime_.jsx(Item, {
                        id: product.id,
                        existInWishlist: existInWishlist,
                        price: product.price,
                        title: product.title,
                        imgs: product.imgs,
                        addItemToWishlist: addItemToWishlist,
                        slug: product.slug
                    }, product.id);
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(components_Pagination, {
                    productsPerPage: productPerPage,
                    totalProducts: data.length,
                    paginate: paginate,
                    currentPage: currentPage
                })
            ]
        })
    });
};
/* harmony default export */ const Items = (Products);
const Item = ({ slug , id , title , imgs , price , existInWishlist , addItemToWishlist  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Items_module_default()).product,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: `products/${slug}`,
                passHref: true,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Items_module_default())["inner-wrapper"],
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (Items_module_default()).img,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: imgs[0],
                                alt: title,
                                layout: "fill",
                                objectFit: "contain"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Items_module_default()).info,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (Items_module_default())["info-head"],
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: title
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: (Items_module_default()).price,
                                            children: [
                                                "\u20AC",
                                                price.toFixed(2)
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: (Items_module_default()).details,
                                    children: "details"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: `${(Items_module_default()).heart} ${existInWishlist && (Items_module_default()).active}`,
                onClick: ()=>addItemToWishlist({
                        id: id,
                        title: title,
                        price: price,
                        img: imgs[0]
                    })
                ,
                type: "button",
                children: /*#__PURE__*/ jsx_runtime_.jsx(cg_.CgHeart, {})
            })
        ]
    });
};


/***/ })

};
;
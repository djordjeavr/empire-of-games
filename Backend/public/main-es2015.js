(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_games_games_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/games/games.component */ "./src/app/components/games/games.component.ts");
/* harmony import */ var _components_software_software_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/software/software.component */ "./src/app/components/software/software.component.ts");
/* harmony import */ var _components_card_gift_card_gift_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/card-gift/card-gift.component */ "./src/app/components/card-gift/card-gift.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/registration/registration.component */ "./src/app/components/registration/registration.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/product-item/product-item.component */ "./src/app/components/product-item/product-item.component.ts");
/* harmony import */ var _components_basket_basket_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/basket/basket.component */ "./src/app/components/basket/basket.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");














const routes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'gaming', component: _components_games_games_component__WEBPACK_IMPORTED_MODULE_3__["GamesComponent"] },
    { path: 'software', component: _components_software_software_component__WEBPACK_IMPORTED_MODULE_4__["SoftwareComponent"] },
    { path: 'gift-card', component: _components_card_gift_card_gift_component__WEBPACK_IMPORTED_MODULE_5__["CardGiftComponent"] },
    { path: 'admin', component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_8__["AdminComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'sign-up', component: _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationComponent"] },
    { path: 'product-item', component: _components_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_9__["ProductItemComponent"] },
    { path: 'basket', component: _components_basket_basket_component__WEBPACK_IMPORTED_MODULE_10__["BasketComponent"] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"] },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'EmpireOfGames';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 22, vars: 0, consts: [[1, "wrapper"], [1, "heder"], [1, "main"], [1, "footer"], ["src", "../assets/logo.svg", "alt", ""], [1, "contact"], [1, "payment-methods"], ["aria-hidden", "true", 1, "fa", "fa-paypal"], ["aria-hidden", "true", 1, "fa", "fa-cc-visa"], ["aria-hidden", "true", 1, "fa", "fa-cc-mastercard"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email:djordjeavram@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "PayPal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "VISA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "MasterCard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Copyright 2020\u00A9Empire of Games");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".heder[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.main[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.footer[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 15px;\n  background: #141414;\n  color: white;\n}\n\n.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: center;\n  clear: both;\n}\n\n.footer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 350px;\n}\n\n.contact[_ngcontent-%COMP%] {\n  float: right;\n  width: 300px;\n  margin-right: 10px;\n}\n\n.contact[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.payment-methods[_ngcontent-%COMP%] {\n  float: right;\n  width: 350px;\n  padding: 10px;\n  margin-right: 120px;\n  color: #5495eb;\n}\n\n.payment-methods[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  padding: 7px;\n  margin-left: 10px;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxEam9sZVBDXFxEZXNrdG9wXFxlbXBpcmVfb2ZfZ2FtZXNcXEVtcGlyZU9mR2FtZXMvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUNDSjs7QURFQztFQUNJLFdBQUE7QUNDTDs7QURJQztFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDREw7O0FERUs7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQVQ7O0FERUk7RUFDSSxZQUFBO0FDQVI7O0FESUM7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDREw7O0FER0s7RUFDSSxpQkFBQTtBQ0RUOztBRElDO0VBQ0csWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDREo7O0FER0k7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUNEUjs7QURJQztFQUNJLFdBQUE7QUNETCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWRlcntcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgXHJcbiB9XHJcbiAubWFpbntcclxuICAgICB3aWR0aDogMTAwJTtcclxuICBcclxuICAgIFxyXG4gfVxyXG5cclxuIC5mb290ZXJ7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgcGFkZGluZzogMTVweDtcclxuICAgICBiYWNrZ3JvdW5kOiAjMTQxNDE0O1xyXG4gICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICBwe1xyXG4gICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgfVxyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOiAzNTBweDtcclxuICAgICAgIFxyXG4gICAgfVxyXG4gfVxyXG4gLmNvbnRhY3R7XHJcbiAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgIHdpZHRoOiAzMDBweDtcclxuICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgXHJcbiAgICAgcHtcclxuICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgfVxyXG4gfVxyXG4gLnBheW1lbnQtbWV0aG9kc3tcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEyMHB4O1xyXG4gICAgY29sb3I6ICM1NDk1ZWI7XHJcblxyXG4gICAgaXtcclxuICAgICAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcbiB9XHJcbiAud3JhcHBlcntcclxuICAgICB3aWR0aDogMTAwJTtcclxuIH0iLCIuaGVkZXIge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5tYWluIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTVweDtcbiAgYmFja2dyb3VuZDogIzE0MTQxNDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmZvb3RlciBwIHtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNsZWFyOiBib3RoO1xufVxuLmZvb3RlciBpbWcge1xuICB3aWR0aDogMzUwcHg7XG59XG5cbi5jb250YWN0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5jb250YWN0IHAge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnBheW1lbnQtbWV0aG9kcyB7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDM1MHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEyMHB4O1xuICBjb2xvcjogIzU0OTVlYjtcbn1cbi5wYXltZW50LW1ldGhvZHMgaSB7XG4gIHBhZGRpbmc6IDdweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi53cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_basket_basket_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/basket/basket.component */ "./src/app/components/basket/basket.component.ts");
/* harmony import */ var _components_games_games_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/games/games.component */ "./src/app/components/games/games.component.ts");
/* harmony import */ var _components_software_software_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/software/software.component */ "./src/app/components/software/software.component.ts");
/* harmony import */ var _components_card_gift_card_gift_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/card-gift/card-gift.component */ "./src/app/components/card-gift/card-gift.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/registration/registration.component */ "./src/app/components/registration/registration.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _components_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/product-item/product-item.component */ "./src/app/components/product-item/product-item.component.ts");
/* harmony import */ var _components_payment_methods_payment_methods_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/payment-methods/payment-methods.component */ "./src/app/components/payment-methods/payment-methods.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/update-profile/update-profile.component */ "./src/app/components/update-profile/update-profile.component.ts");
/* harmony import */ var _components_all_users_all_users_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/all-users/all-users.component */ "./src/app/components/all-users/all-users.component.ts");
/* harmony import */ var _components_all_comments_all_comments_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/all-comments/all-comments.component */ "./src/app/components/all-comments/all-comments.component.ts");
/* harmony import */ var _components_all_products_all_products_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/all-products/all-products.component */ "./src/app/components/all-products/all-products.component.ts");
/* harmony import */ var _components_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/add-product/add-product.component */ "./src/app/components/add-product/add-product.component.ts");
/* harmony import */ var _components_add_features_add_features_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/add-features/add-features.component */ "./src/app/components/add-features/add-features.component.ts");
/* harmony import */ var _components_update_products_update_products_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/update-products/update-products.component */ "./src/app/components/update-products/update-products.component.ts");





























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_16__["ToastrModule"].forRoot() // ToastrModule added
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _components_basket_basket_component__WEBPACK_IMPORTED_MODULE_6__["BasketComponent"],
        _components_games_games_component__WEBPACK_IMPORTED_MODULE_7__["GamesComponent"],
        _components_software_software_component__WEBPACK_IMPORTED_MODULE_8__["SoftwareComponent"],
        _components_card_gift_card_gift_component__WEBPACK_IMPORTED_MODULE_9__["CardGiftComponent"],
        _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_12__["AdminComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
        _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_14__["RegistrationComponent"],
        _components_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_17__["ProductItemComponent"],
        _components_payment_methods_payment_methods_component__WEBPACK_IMPORTED_MODULE_18__["PaymentMethodsComponent"],
        _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_19__["ProfileComponent"],
        _components_update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_20__["UpdateProfileComponent"],
        _components_all_users_all_users_component__WEBPACK_IMPORTED_MODULE_21__["AllUsersComponent"],
        _components_all_comments_all_comments_component__WEBPACK_IMPORTED_MODULE_22__["AllCommentsComponent"],
        _components_all_products_all_products_component__WEBPACK_IMPORTED_MODULE_23__["AllProductsComponent"],
        _components_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_24__["AddProductComponent"],
        _components_add_features_add_features_component__WEBPACK_IMPORTED_MODULE_25__["AddFeaturesComponent"],
        _components_update_products_update_products_component__WEBPACK_IMPORTED_MODULE_26__["UpdateProductsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_16__["ToastrModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                    _components_basket_basket_component__WEBPACK_IMPORTED_MODULE_6__["BasketComponent"],
                    _components_games_games_component__WEBPACK_IMPORTED_MODULE_7__["GamesComponent"],
                    _components_software_software_component__WEBPACK_IMPORTED_MODULE_8__["SoftwareComponent"],
                    _components_card_gift_card_gift_component__WEBPACK_IMPORTED_MODULE_9__["CardGiftComponent"],
                    _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_12__["AdminComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                    _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_14__["RegistrationComponent"],
                    _components_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_17__["ProductItemComponent"],
                    _components_payment_methods_payment_methods_component__WEBPACK_IMPORTED_MODULE_18__["PaymentMethodsComponent"],
                    _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_19__["ProfileComponent"],
                    _components_update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_20__["UpdateProfileComponent"],
                    _components_all_users_all_users_component__WEBPACK_IMPORTED_MODULE_21__["AllUsersComponent"],
                    _components_all_comments_all_comments_component__WEBPACK_IMPORTED_MODULE_22__["AllCommentsComponent"],
                    _components_all_products_all_products_component__WEBPACK_IMPORTED_MODULE_23__["AllProductsComponent"],
                    _components_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_24__["AddProductComponent"],
                    _components_add_features_add_features_component__WEBPACK_IMPORTED_MODULE_25__["AddFeaturesComponent"],
                    _components_update_products_update_products_component__WEBPACK_IMPORTED_MODULE_26__["UpdateProductsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_16__["ToastrModule"].forRoot() // ToastrModule added
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/add-features/add-features.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/add-features/add-features.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddFeaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFeaturesComponent", function() { return AddFeaturesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function AddFeaturesComponent_li_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const device_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](device_r5.name);
} }
function AddFeaturesComponent_li_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.name);
} }
function AddFeaturesComponent_li_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const platform_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](platform_r7.platformName);
} }
function AddFeaturesComponent_li_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const genre_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](genre_r8.name);
} }
function AddFeaturesComponent_li_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.name);
} }
class AddFeaturesComponent {
    constructor(restApi) {
        this.restApi = restApi;
        this.genres = [];
        this.platforms = [];
        this.devices = [];
        this.category_software = [];
        this.category_gift_cards = [];
    }
    ngOnInit() {
        this.getAllGenres();
        this.getAllDevices();
        this.getAllPlatforms();
        this.getAllCategoryGiftCards();
        this.getAllCategorySoftware();
    }
    getAllGenres() {
        this.restApi.getAllGenres()
            .subscribe((response) => {
            this.genres = response;
        });
    }
    getAllPlatforms() {
        this.restApi.getAllPlatforms()
            .subscribe((response) => {
            this.platforms = response;
        });
    }
    getAllDevices() {
        this.restApi.getAllDevice()
            .subscribe((response) => {
            this.devices = response;
        });
    }
    getAllCategorySoftware() {
        this.restApi.getAllCategorySoftware()
            .subscribe((response) => {
            this.category_software = response;
        });
    }
    getAllCategoryGiftCards() {
        this.restApi.getAllCategoryGiftCards()
            .subscribe((response) => {
            this.category_gift_cards = response;
            console.log(this.category_gift_cards);
        });
    }
}
AddFeaturesComponent.ɵfac = function AddFeaturesComponent_Factory(t) { return new (t || AddFeaturesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_1__["RestApiService"])); };
AddFeaturesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddFeaturesComponent, selectors: [["app-add-features"]], decls: 55, vars: 5, consts: [[1, "main"], ["type", "text"], [1, "features"], [1, "feature"], [4, "ngFor", "ngForOf"]], template: function AddFeaturesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add Device");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Add Genre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Add Platform");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Subcategory software");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Subcategory gift card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Device");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, AddFeaturesComponent_li_34_Template, 2, 1, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Subcategory gift card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, AddFeaturesComponent_li_39_Template, 2, 1, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Platforms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, AddFeaturesComponent_li_44_Template, 2, 1, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Genre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, AddFeaturesComponent_li_49_Template, 2, 1, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Subcategory software");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, AddFeaturesComponent_li_54_Template, 2, 1, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.devices);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.category_gift_cards);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.platforms);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.genres);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.category_software);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".main[_ngcontent-%COMP%] {\n  width: 76%;\n  padding: 20px;\n  float: left;\n  padding-left: 80px;\n}\n\nh1[_ngcontent-%COMP%] {\n  color: #858585;\n  margin-bottom: 20px;\n}\n\nspan[_ngcontent-%COMP%] {\n  color: #858585;\n  font-size: 18px;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 400px;\n  outline: none;\n  margin-bottom: 20px;\n}\n\n.features[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px;\n  overflow: hidden;\n}\n\n.feature[_ngcontent-%COMP%] {\n  width: 250px;\n  float: left;\n  margin-right: 10px;\n  margin-bottom: 20px;\n  border: 1px solid #e0e0e0;\n}\n\n.feature[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  background: #e0e0e0;\n  height: 30px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 50px;\n  margin-left: 700px;\n  margin-bottom: 20px;\n  border: none;\n  outline: none;\n  background: #5495eb;\n  color: white;\n  font-size: 22px;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  background: #0052bf;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtZmVhdHVyZXMvQzpcXFVzZXJzXFxEam9sZVBDXFxEZXNrdG9wXFxlbXBpcmVfb2ZfZ2FtZXNcXEVtcGlyZU9mR2FtZXMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFkZC1mZWF0dXJlc1xcYWRkLWZlYXR1cmVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2FkZC1mZWF0dXJlcy9hZGQtZmVhdHVyZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0FDRUo7O0FEQUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0dKOztBRERBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0lKOztBREZBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0tKOztBREZBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNLSjs7QURKSTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtBQ01SOztBREhBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDTUo7O0FESkk7RUFDSSxtQkFBQTtBQ01SIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZGQtZmVhdHVyZXMvYWRkLWZlYXR1cmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW57XHJcbiAgICB3aWR0aDogNzYlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4MHB4O1xyXG59XHJcbmgxe1xyXG4gICAgY29sb3I6ICM4NTg1ODU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbnNwYW57XHJcbiAgICBjb2xvcjogIzg1ODU4NTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5pbnB1dHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5mZWF0dXJlc3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgIFxyXG59XHJcbi5mZWF0dXJle1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcclxuICAgIGg0e1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlMGUwZTA7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgfVxyXG59XHJcbmJ1dHRvbntcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA3MDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDojNTQ5NWViIDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuXHJcbiAgICAmOmhvdmVye1xyXG4gICAgICAgIGJhY2tncm91bmQ6IzAwNTJiZiA7XHJcbiAgICB9XHJcbn0iLCIubWFpbiB7XG4gIHdpZHRoOiA3NiU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDgwcHg7XG59XG5cbmgxIHtcbiAgY29sb3I6ICM4NTg1ODU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbnNwYW4ge1xuICBjb2xvcjogIzg1ODU4NTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5pbnB1dCB7XG4gIHdpZHRoOiA0MDBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmZlYXR1cmVzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5mZWF0dXJlIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xufVxuLmZlYXR1cmUgaDQge1xuICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbmJ1dHRvbiB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tbGVmdDogNzAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogIzU0OTVlYjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIycHg7XG59XG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDA1MmJmO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddFeaturesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-features',
                templateUrl: './add-features.component.html',
                styleUrls: ['./add-features.component.scss']
            }]
    }], function () { return [{ type: src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_1__["RestApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/add-product/add-product.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/add-product/add-product.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _home_Product_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home/Product.class */ "./src/app/components/home/Product.class.ts");
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function AddProductComponent_option_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", category_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r6.name);
} }
function AddProductComponent_option_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const platform_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", platform_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](platform_r7.name);
} }
function AddProductComponent_option_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const device_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", device_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](device_r8.name);
} }
function AddProductComponent_option_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const genre_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", genre_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](genre_r9.name);
} }
function AddProductComponent_option_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r10.name);
} }
function AddProductComponent_option_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r11.name);
} }
class AddProductComponent {
    constructor(restApi) {
        this.restApi = restApi;
        this.product = new _home_Product_class__WEBPACK_IMPORTED_MODULE_1__["Product"]();
        this.genres = [];
        this.platforms = [];
        this.devices = [];
        this.category_software = [];
        this.category_gift_cards = [];
        this.categories = [];
    }
    ngOnInit() {
        this.getAllGenres();
        this.getAllCategories();
        this.getAllDevices();
        this.getAllPlatforms();
        this.getAllCategoryGiftCards();
        this.getAllCategorySoftware();
    }
    getAllGenres() {
        this.restApi.getAllGenres()
            .subscribe((response) => {
            this.genres = response;
        });
    }
    getAllPlatforms() {
        this.restApi.getAllPlatforms()
            .subscribe((response) => {
            this.platforms = response;
        });
    }
    getAllDevices() {
        this.restApi.getAllDevice()
            .subscribe((response) => {
            this.devices = response;
        });
    }
    getAllCategorySoftware() {
        this.restApi.getAllCategorySoftware()
            .subscribe((response) => {
            this.category_software = response;
        });
    }
    getAllCategoryGiftCards() {
        this.restApi.getAllCategoryGiftCards()
            .subscribe((response) => {
            this.category_gift_cards = response;
            console.log(this.category_gift_cards);
        });
    }
    getAllCategories() {
        this.restApi.getAllCategories()
            .subscribe((response) => {
            this.categories = response;
        });
    }
}
AddProductComponent.ɵfac = function AddProductComponent_Factory(t) { return new (t || AddProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"])); };
AddProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddProductComponent, selectors: [["app-add-product"]], decls: 80, vars: 6, consts: [[1, "main"], ["type", "text", "placeholder", "Title"], ["name", "", "id", "", "cols", "60", "rows", "10", "placeholder", "Description"], ["type", "text", "placeholder", "Image"], ["type", "text", "placeholder", "Small Image"], ["type", "text", "placeholder", "Video"], ["type", "text", "placeholder", "Codes"], ["type", "text", "placeholder", "Company"], [1, "features"], ["type", "text"], ["name", "", "id", ""], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["value", "GLOBAL"], ["value", "EUROPE"], ["value", "AMERICA"], ["value", "ASIA"], [3, "value"]], template: function AddProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Title:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "textarea", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Small Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Codes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, AddProductComponent_option_45_Template, 2, 2, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Platforms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, AddProductComponent_option_49_Template, 2, 2, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Device");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, AddProductComponent_option_53_Template, 2, 2, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Genre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, AddProductComponent_option_57_Template, 2, 2, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Subcategory software");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, AddProductComponent_option_61_Template, 2, 2, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Subcategory gift card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, AddProductComponent_option_65_Template, 2, 2, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Region");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Global");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Europe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "America");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Asia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.platforms);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.devices);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.genres);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.category_software);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.category_gift_cards);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".main[_ngcontent-%COMP%] {\n  width: 76%;\n  padding: 20px;\n  float: left;\n  padding-left: 80px;\n}\n\nh1[_ngcontent-%COMP%] {\n  color: #858585;\n  margin-bottom: 20px;\n}\n\nspan[_ngcontent-%COMP%] {\n  color: #858585;\n  font-size: 18px;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 400px;\n  outline: none;\n  margin-bottom: 20px;\n}\n\n.features[_ngcontent-%COMP%] {\n  width: 300px;\n  position: absolute;\n  top: 250px;\n  left: 900px;\n}\n\n.features[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 60px;\n}\n\n.features[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  margin-bottom: 20px;\n  width: 120px;\n  outline: none;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 50px;\n  margin-left: 700px;\n  border: none;\n  outline: none;\n  background: #5495eb;\n  color: white;\n  font-size: 22px;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  background: #0052bf;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtcHJvZHVjdC9DOlxcVXNlcnNcXERqb2xlUENcXERlc2t0b3BcXGVtcGlyZV9vZl9nYW1lc1xcRW1waXJlT2ZHYW1lcy9zcmNcXGFwcFxcY29tcG9uZW50c1xcYWRkLXByb2R1Y3RcXGFkZC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2FkZC1wcm9kdWN0L2FkZC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtBQ0VKOztBREFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNHSjs7QUREQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNJSjs7QURGQTtFQUVJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDRCxXQUFBO0FDSUg7O0FESEk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ0tSOztBREhJO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDS1I7O0FERkE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDS0o7O0FESEk7RUFDSSxtQkFBQTtBQ0tSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZGQtcHJvZHVjdC9hZGQtcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWlue1xyXG4gICAgd2lkdGg6IDc2JTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmctbGVmdDogODBweDtcclxufVxyXG5oMXtcclxuICAgIGNvbG9yOiAjODU4NTg1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5zcGFue1xyXG4gICAgY29sb3I6ICM4NTg1ODU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuaW5wdXR7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uZmVhdHVyZXN7XHJcbiAgIFxyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyNTBweDtcclxuICAgbGVmdDogOTAwcHg7XHJcbiAgICBpbnB1dHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgfVxyXG4gICAgc2VsZWN0e1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuYnV0dG9ue1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDcwMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IzU0OTVlYiA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcblxyXG4gICAgJjpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kOiMwMDUyYmYgO1xyXG4gICAgfVxyXG59IiwiLm1haW4ge1xuICB3aWR0aDogNzYlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiA4MHB4O1xufVxuXG5oMSB7XG4gIGNvbG9yOiAjODU4NTg1O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5zcGFuIHtcbiAgY29sb3I6ICM4NTg1ODU7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuaW5wdXQge1xuICB3aWR0aDogNDAwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5mZWF0dXJlcyB7XG4gIHdpZHRoOiAzMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI1MHB4O1xuICBsZWZ0OiA5MDBweDtcbn1cbi5mZWF0dXJlcyBpbnB1dCB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuLmZlYXR1cmVzIHNlbGVjdCB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB3aWR0aDogMTIwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmJ1dHRvbiB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tbGVmdDogNzAwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogIzU0OTVlYjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIycHg7XG59XG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDA1MmJmO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-product',
                templateUrl: './add-product.component.html',
                styleUrls: ['./add-product.component.scss']
            }]
    }], function () { return [{ type: src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _all_users_all_users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../all-users/all-users.component */ "./src/app/components/all-users/all-users.component.ts");
/* harmony import */ var _all_products_all_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../all-products/all-products.component */ "./src/app/components/all-products/all-products.component.ts");
/* harmony import */ var _all_comments_all_comments_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../all-comments/all-comments.component */ "./src/app/components/all-comments/all-comments.component.ts");
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-product/add-product.component */ "./src/app/components/add-product/add-product.component.ts");
/* harmony import */ var _add_features_add_features_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../add-features/add-features.component */ "./src/app/components/add-features/add-features.component.ts");








function AdminComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Best Customers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "First");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Last");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Total products purchased");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Mark");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Otto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "@mdo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "@mdo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Jacob");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Thornton");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "@fat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "@fat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Larry");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "the Bird");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "@twitter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "@twitter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Popular Products");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "thead", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Platform");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Sold");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Mark");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Otto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "@mdo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "@mdo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminComponent_app_all_users_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-all-users");
} }
function AdminComponent_app_all_products_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-all-products");
} }
function AdminComponent_app_all_comments_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-all-comments");
} }
function AdminComponent_app_add_product_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-add-product");
} }
function AdminComponent_app_add_features_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-add-features");
} }
const _c0 = function (a0) { return { "changed-background": a0 }; };
class AdminComponent {
    constructor() {
        this.isClickedArea1 = true;
        this.isClickedArea2 = false;
        this.isClickedArea3 = false;
        this.isClickedArea4 = false;
        this.isClickedArea5 = false;
        this.isClickedArea6 = false;
        this.isClickedArea7 = false;
    }
    ngOnInit() {
    }
    isClickedArea(event) {
        const index = event.target.getAttribute('index');
        this.isClickedArea1 = false;
        this.isClickedArea2 = false;
        this.isClickedArea3 = false;
        this.isClickedArea4 = false;
        this.isClickedArea5 = false;
        this.isClickedArea6 = false;
        this.isClickedArea7 = false;
        if (index == 1) {
            if (!this.isClickedArea1) {
                this.isClickedArea1 = true;
            }
            else {
                this.isClickedArea1 = false;
            }
        }
        if (index == 2) {
            if (!this.isClickedArea2) {
                this.isClickedArea2 = true;
            }
            else {
                this.isClickedArea2 = false;
            }
        }
        if (index == 3) {
            if (!this.isClickedArea3) {
                this.isClickedArea3 = true;
            }
            else {
                this.isClickedArea3 = false;
            }
        }
        if (index == 4) {
            if (!this.isClickedArea4) {
                this.isClickedArea4 = true;
            }
            else {
                this.isClickedArea4 = false;
            }
        }
        if (index == 5) {
            if (!this.isClickedArea5) {
                this.isClickedArea5 = true;
            }
            else {
                this.isClickedArea5 = false;
            }
        }
        if (index == 6) {
            if (!this.isClickedArea6) {
                this.isClickedArea6 = true;
            }
            else {
                this.isClickedArea6 = false;
            }
        }
        if (index == 7) {
            if (!this.isClickedArea7) {
                this.isClickedArea7 = true;
            }
            else {
                this.isClickedArea7 = false;
            }
        }
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 29, vars: 27, consts: [[1, "wrapper"], [1, "sidebar"], ["index", "1", 1, "admin-pages", 3, "ngClass", "click"], ["aria-hidden", "true", 1, "fa", "fa-tachometer"], ["index", "2", 1, "admin-pages", 3, "ngClass", "click"], ["aria-hidden", "true", 1, "fa", "fa-users"], ["index", "3", 1, "admin-pages", 3, "ngClass", "click"], ["aria-hidden", "true", 1, "fa", "fa-comments"], ["index", "4", 1, "admin-pages", 3, "ngClass", "click"], ["aria-hidden", "true", 1, "fa", "fa-shopping-basket"], ["index", "5", 1, "admin-pages", 3, "ngClass", "click"], ["aria-hidden", "true", 1, "fa", "fa-plus"], ["index", "6", 1, "admin-pages", 3, "ngClass", "click"], ["index", "7", 1, "admin-pages", 3, "ngClass", "click"], ["aria-hidden", "true", 1, "fa", "fa-pencil"], ["class", "main", 4, "ngIf"], [4, "ngIf"], [1, "main"], [1, "table-users"], [1, "table", "table-dark"], ["scope", "col"], ["scope", "row"], [1, "table-products"], [1, "table"], [1, "thead-dark"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_div_click_2_listener($event) { return ctx.isClickedArea($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_div_click_5_listener($event) { return ctx.isClickedArea($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " All Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_div_click_8_listener($event) { return ctx.isClickedArea($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " All Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_div_click_11_listener($event) { return ctx.isClickedArea($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " All Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_div_click_14_listener($event) { return ctx.isClickedArea($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Add Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_div_click_17_listener($event) { return ctx.isClickedArea($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Add Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_div_click_20_listener($event) { return ctx.isClickedArea($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Update Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AdminComponent_div_23_Template, 79, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AdminComponent_app_all_users_24_Template, 1, 0, "app-all-users", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AdminComponent_app_all_products_25_Template, 1, 0, "app-all-products", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AdminComponent_app_all_comments_26_Template, 1, 0, "app-all-comments", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AdminComponent_app_add_product_27_Template, 1, 0, "app-add-product", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AdminComponent_app_add_features_28_Template, 1, 0, "app-add-features", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.isClickedArea1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.isClickedArea2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.isClickedArea3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.isClickedArea4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx.isClickedArea5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c0, ctx.isClickedArea6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c0, ctx.isClickedArea7));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isClickedArea1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isClickedArea2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isClickedArea4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isClickedArea3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isClickedArea5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isClickedArea6);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _all_users_all_users_component__WEBPACK_IMPORTED_MODULE_2__["AllUsersComponent"], _all_products_all_products_component__WEBPACK_IMPORTED_MODULE_3__["AllProductsComponent"], _all_comments_all_comments_component__WEBPACK_IMPORTED_MODULE_4__["AllCommentsComponent"], _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_5__["AddProductComponent"], _add_features_add_features_component__WEBPACK_IMPORTED_MODULE_6__["AddFeaturesComponent"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1100px;\n  overflow: hidden;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  width: 250px;\n  background: #3b3838;\n  float: left;\n  height: 100%;\n}\n\n.main[_ngcontent-%COMP%] {\n  width: 76%;\n  padding: 20px;\n  float: left;\n  padding-left: 80px;\n}\n\n.table-users[_ngcontent-%COMP%] {\n  height: 400px;\n}\n\nh1[_ngcontent-%COMP%] {\n  color: #858585;\n  margin-bottom: 20px;\n}\n\n.table-products[_ngcontent-%COMP%] {\n  height: 400px;\n}\n\nth[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ntd[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.admin-pages[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  font-size: 22px;\n  font-weight: 600;\n  padding-left: 20px;\n  margin-bottom: 10px;\n  line-height: 50px;\n  color: white;\n  cursor: pointer;\n}\n\n.changed-background[_ngcontent-%COMP%] {\n  background: #5495eb;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9DOlxcVXNlcnNcXERqb2xlUENcXERlc2t0b3BcXGVtcGlyZV9vZl9nYW1lc1xcRW1waXJlT2ZHYW1lcy9zcmNcXGFwcFxcY29tcG9uZW50c1xcYWRtaW5cXGFkbWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNFRjs7QURBQTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDR0o7O0FEREE7RUFDRSxhQUFBO0FDSUY7O0FERkE7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7QUNLSjs7QURIQTtFQUNJLGFBQUE7QUNNSjs7QURKQTtFQUNJLGtCQUFBO0FDT0o7O0FETEE7RUFDSSxrQkFBQTtBQ1FKOztBRE5BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0QsaUJBQUE7RUFDQyxZQUFBO0VBQ0EsZUFBQTtBQ1NKOztBRE5BO0VBQ0ksbUJBQUE7QUNTSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMTAwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5zaWRlYmFye1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBiYWNrZ3JvdW5kOiAjM2IzODM4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGhlaWdodDoxMDAlO1xyXG59XHJcbi5tYWlue1xyXG4gICAgd2lkdGg6IDc2JTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmctbGVmdDogODBweDtcclxufVxyXG4udGFibGUtdXNlcnN7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxufVxyXG5oMXtcclxuICAgIGNvbG9yOiAjODU4NTg1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4udGFibGUtcHJvZHVjdHN7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG59XHJcbnRoe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbnRke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5hZG1pbi1wYWdlc3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxufVxyXG4uY2hhbmdlZC1iYWNrZ3JvdW5ke1xyXG4gICAgYmFja2dyb3VuZDojNTQ5NWViIDtcclxufSIsIi53cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTEwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2lkZWJhciB7XG4gIHdpZHRoOiAyNTBweDtcbiAgYmFja2dyb3VuZDogIzNiMzgzODtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm1haW4ge1xuICB3aWR0aDogNzYlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiA4MHB4O1xufVxuXG4udGFibGUtdXNlcnMge1xuICBoZWlnaHQ6IDQwMHB4O1xufVxuXG5oMSB7XG4gIGNvbG9yOiAjODU4NTg1O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4udGFibGUtcHJvZHVjdHMge1xuICBoZWlnaHQ6IDQwMHB4O1xufVxuXG50aCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxudGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hZG1pbi1wYWdlcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jaGFuZ2VkLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiAjNTQ5NWViO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin',
                templateUrl: './admin.component.html',
                styleUrls: ['./admin.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/all-comments/all-comments.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/all-comments/all-comments.component.ts ***!
  \*******************************************************************/
/*! exports provided: AllCommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllCommentsComponent", function() { return AllCommentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function AllCommentsComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r1.nameProduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r1.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r1.comment);
} }
class AllCommentsComponent {
    constructor(restApi) {
        this.restApi = restApi;
        this.comments = [];
    }
    ngOnInit() {
        this.getAllComments();
    }
    getAllComments() {
        this.restApi.getAllComments()
            .subscribe((response) => {
            this.comments = response;
        });
    }
}
AllCommentsComponent.ɵfac = function AllCommentsComponent_Factory(t) { return new (t || AllCommentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_1__["RestApiService"])); };
AllCommentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AllCommentsComponent, selectors: [["app-all-comments"]], decls: 18, vars: 1, consts: [[1, "main"], [1, "table", "table-dark"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"]], template: function AllCommentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "All Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AllCommentsComponent_tr_17_Template, 11, 5, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.comments);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".main[_ngcontent-%COMP%] {\n  width: 76%;\n  padding: 20px;\n  float: left;\n  padding-left: 80px;\n}\n\nh1[_ngcontent-%COMP%] {\n  color: #858585;\n  margin-bottom: 20px;\n}\n\nth[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ntd[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbGwtY29tbWVudHMvQzpcXFVzZXJzXFxEam9sZVBDXFxEZXNrdG9wXFxlbXBpcmVfb2ZfZ2FtZXNcXEVtcGlyZU9mR2FtZXMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFsbC1jb21tZW50c1xcYWxsLWNvbW1lbnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2FsbC1jb21tZW50cy9hbGwtY29tbWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0FDRUo7O0FEQUE7RUFDSSxrQkFBQTtBQ0dKOztBRERBO0VBQ0ksa0JBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxsLWNvbW1lbnRzL2FsbC1jb21tZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWlue1xyXG4gICAgd2lkdGg6IDc2JTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmctbGVmdDogODBweDtcclxufVxyXG5oMXtcclxuICAgIGNvbG9yOiAjODU4NTg1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG50aHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG50ZHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSIsIi5tYWluIHtcbiAgd2lkdGg6IDc2JTtcbiAgcGFkZGluZzogMjBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogODBweDtcbn1cblxuaDEge1xuICBjb2xvcjogIzg1ODU4NTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxudGgge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnRkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllCommentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-all-comments',
                templateUrl: './all-comments.component.html',
                styleUrls: ['./all-comments.component.scss']
            }]
    }], function () { return [{ type: src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_1__["RestApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/all-products/all-products.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/all-products/all-products.component.ts ***!
  \*******************************************************************/
/*! exports provided: AllProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllProductsComponent", function() { return AllProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function AllProductsComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.platformName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.sold);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.price);
} }
class AllProductsComponent {
    constructor(restApi) {
        this.restApi = restApi;
        this.products = [];
    }
    ngOnInit() {
        this.getAllProducts();
    }
    getAllProducts() {
        this.restApi.getAllProducts()
            .subscribe((response) => {
            this.products = response;
            console.log(this.products);
        });
    }
}
AllProductsComponent.ɵfac = function AllProductsComponent_Factory(t) { return new (t || AllProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_1__["RestApiService"])); };
AllProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AllProductsComponent, selectors: [["app-all-products"]], decls: 20, vars: 1, consts: [[1, "main"], [1, "table"], [1, "thead-dark"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"]], template: function AllProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "All Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Platform");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Sold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AllProductsComponent_tr_19_Template, 13, 6, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".main[_ngcontent-%COMP%] {\n  width: 76%;\n  padding: 20px;\n  float: left;\n  padding-left: 80px;\n}\n\nh1[_ngcontent-%COMP%] {\n  color: #858585;\n  margin-bottom: 20px;\n}\n\nth[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ntd[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbGwtcHJvZHVjdHMvQzpcXFVzZXJzXFxEam9sZVBDXFxEZXNrdG9wXFxlbXBpcmVfb2ZfZ2FtZXNcXEVtcGlyZU9mR2FtZXMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFsbC1wcm9kdWN0c1xcYWxsLXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2FsbC1wcm9kdWN0cy9hbGwtcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0FDRUo7O0FEQUE7RUFDSSxrQkFBQTtBQ0dKOztBRERBO0VBQ0ksa0JBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxsLXByb2R1Y3RzL2FsbC1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWlue1xyXG4gICAgd2lkdGg6IDc2JTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmctbGVmdDogODBweDtcclxufVxyXG5oMXtcclxuICAgIGNvbG9yOiAjODU4NTg1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG50aHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG50ZHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSIsIi5tYWluIHtcbiAgd2lkdGg6IDc2JTtcbiAgcGFkZGluZzogMjBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogODBweDtcbn1cblxuaDEge1xuICBjb2xvcjogIzg1ODU4NTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxudGgge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnRkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-all-products',
                templateUrl: './all-products.component.html',
                styleUrls: ['./all-products.component.scss']
            }]
    }], function () { return [{ type: src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_1__["RestApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/all-users/all-users.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/all-users/all-users.component.ts ***!
  \*************************************************************/
/*! exports provided: AllUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllUsersComponent", function() { return AllUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_UserService_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/UserService.service */ "./src/app/services/UserService.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function AllUsersComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.TotalProductPurchased);
} }
class AllUsersComponent {
    constructor(userService) {
        this.userService = userService;
        this.users = [];
    }
    ngOnInit() {
        this.getAllUsers();
    }
    getAllUsers() {
        this.userService.getAllUsers()
            .subscribe((response) => {
            this.users = response;
            console.log(this.users);
        });
    }
}
AllUsersComponent.ɵfac = function AllUsersComponent_Factory(t) { return new (t || AllUsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_UserService_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
AllUsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AllUsersComponent, selectors: [["app-all-users"]], decls: 20, vars: 1, consts: [[1, "main"], [1, "table", "table-dark"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"]], template: function AllUsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "All Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "First");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Last");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Total products purchased");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AllUsersComponent_tr_19_Template, 13, 6, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".main[_ngcontent-%COMP%] {\n  width: 76%;\n  padding: 20px;\n  float: left;\n  padding-left: 80px;\n}\n\nh1[_ngcontent-%COMP%] {\n  color: #858585;\n  margin-bottom: 20px;\n}\n\nth[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ntd[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbGwtdXNlcnMvQzpcXFVzZXJzXFxEam9sZVBDXFxEZXNrdG9wXFxlbXBpcmVfb2ZfZ2FtZXNcXEVtcGlyZU9mR2FtZXMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFsbC11c2Vyc1xcYWxsLXVzZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2FsbC11c2Vycy9hbGwtdXNlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0FDRUo7O0FEQUE7RUFDSSxrQkFBQTtBQ0dKOztBRERBO0VBQ0ksa0JBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxsLXVzZXJzL2FsbC11c2Vycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWlue1xyXG4gICAgd2lkdGg6IDc2JTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmctbGVmdDogODBweDtcclxufVxyXG5oMXtcclxuICAgIGNvbG9yOiAjODU4NTg1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG50aHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG50ZHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSIsIi5tYWluIHtcbiAgd2lkdGg6IDc2JTtcbiAgcGFkZGluZzogMjBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogODBweDtcbn1cblxuaDEge1xuICBjb2xvcjogIzg1ODU4NTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxudGgge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnRkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllUsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-all-users',
                templateUrl: './all-users.component.html',
                styleUrls: ['./all-users.component.scss']
            }]
    }], function () { return [{ type: src_app_services_UserService_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/basket/basket.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/basket/basket.component.ts ***!
  \*******************************************************/
/*! exports provided: BasketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketComponent", function() { return BasketComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _product_item_Basket_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product-item/Basket.class */ "./src/app/components/product-item/Basket.class.ts");
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var src_app_services_UserService_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/UserService.service */ "./src/app/services/UserService.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _payment_methods_payment_methods_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../payment-methods/payment-methods.component */ "./src/app/components/payment-methods/payment-methods.component.ts");








function BasketComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BasketComponent_div_0_div_7_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const product_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.decreaseCounter(product_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BasketComponent_div_0_div_7_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const product_r3 = ctx.$implicit; return product_r3.item = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BasketComponent_div_0_div_7_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const product_r3 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.increaseCounter(product_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BasketComponent_div_0_div_7_Template_span_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const product_r3 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.deleteProductsInBasket(product_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Per item: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", product_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", product_r3.item == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", product_r3.item)("value", product_r3.item);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r3.price * product_r3.item);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", product_r3.price, "EU");
} }
function BasketComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your basket ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BasketComponent_div_0_div_7_Template, 23, 7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " @djordjeavram5@gmail.com ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BasketComponent_div_0_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.continueToPayment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Continue to payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Total price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(items:", ctx_r0.items, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.products);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.totalPrice, "EU ");
} }
function BasketComponent_app_payment_methods_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-payment-methods", 23);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("totalPrice", ctx_r1.totalPrice)("products", ctx_r1.products);
} }
class BasketComponent {
    constructor(restApi, userService) {
        this.restApi = restApi;
        this.userService = userService;
        this.basket = new _product_item_Basket_class__WEBPACK_IMPORTED_MODULE_1__["Basket"]();
        this.products = [];
        this.codes = [];
        this.totalPrice = 0;
        this.isClicked = false;
    }
    ngOnInit() {
        this.getAllProductFromBasket();
        this.getTotalNumberProducts();
    }
    getAllProductFromBasket() {
        this.basket.user_id = this.userService.loggedUser.id;
        this.restApi.getAllProductFromBasket(this.basket.user_id)
            .subscribe((response) => {
            this.products = response;
            console.log(response);
            this.calculateTotalPrice();
        });
    }
    increaseCounter(product) {
        this.codes = product.code.split(',');
        console.log(this.codes);
        if (product.item < this.codes.length) {
            product.item++;
            product.totalPrice = product.price * product.item; //Increase total price
            this.updateProductsInBasket(product);
            this.totalPrice = this.totalPrice + product.price;
        }
    }
    decreaseCounter(product) {
        product.item--;
        product.totalPrice = product.price * product.item; //Decrease total price
        this.updateProductsInBasket(product);
        this.totalPrice = this.totalPrice - product.price;
    }
    getTotalNumberProducts() {
        this.basket.user_id = this.userService.loggedUser.id;
        this.restApi.getTotalNumberOfProductsInBasket(this.basket.user_id)
            .subscribe(response => {
            this.items = response[0].totalNumberOfProductsInBasket;
            console.log(response);
        });
    }
    updateProductsInBasket(product) {
        this.basket.user_id = this.userService.loggedUser.id;
        this.basket.id = product.id;
        this.basket.item = product.item; // Entering item and total price in the database
        this.basket.totalPrice = product.totalPrice;
        this.restApi.updateProductsInBasket(this.basket)
            .subscribe((response) => {
            console.log(response);
        });
    }
    deleteProductsInBasket(id) {
        this.restApi.deleteProductsinBasket(id)
            .subscribe(response => {
        });
        this.getAllProductFromBasket();
        this.getTotalNumberProducts();
    }
    calculateTotalPrice() {
        for (let i = 0; i < this.products.length; i++) {
            const param = this.products[i].totalPrice;
            console.log(param);
            this.totalPrice = param + this.totalPrice;
        }
        console.log(this.totalPrice);
    }
    continueToPayment() {
        if (this.isClicked == false) {
            this.isClicked = true;
        }
        else {
            this.isClicked = false;
        }
    }
}
BasketComponent.ɵfac = function BasketComponent_Factory(t) { return new (t || BasketComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_UserService_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
BasketComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BasketComponent, selectors: [["app-basket"]], decls: 2, vars: 2, consts: [["class", "wrapper", 4, "ngIf"], [3, "totalPrice", "products", 4, "ngIf"], [1, "wrapper"], [1, "product-container"], ["class", "product", 4, "ngFor", "ngForOf"], [1, "totalPrice"], [1, "mail"], ["aria-hidden", "true", 1, "fa", "fa-envelope"], [3, "click"], [1, "price_summary_row"], [1, "price_item_summary", 2, "font-size", "20px", "font-weight", "700"], [1, "product"], [1, "heder"], [1, "image-product"], ["alt", "", 3, "src"], [1, "title-product"], [1, "counter"], [3, "disabled", "click"], ["aria-hidden", "true", 1, "fa", "fa-minus"], ["type", "text", 3, "ngModel", "value", "ngModelChange"], ["aria-hidden", "true", 1, "fa", "fa-plus"], [1, "price"], [1, "price-item"], [3, "totalPrice", "products"]], template: function BasketComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BasketComponent_div_0_Template, 19, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BasketComponent_app_payment_methods_1_Template, 1, 2, "app-payment-methods", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isClicked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isClicked);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _payment_methods_payment_methods_component__WEBPACK_IMPORTED_MODULE_6__["PaymentMethodsComponent"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 720px;\n  overflow: hidden;\n}\n\n.product[_ngcontent-%COMP%] {\n  width: 765px;\n  overflow: hidden;\n  margin-left: 40px;\n  border: 1px solid #e0e0e0;\n  margin-bottom: 30px;\n}\n\n.image-product[_ngcontent-%COMP%] {\n  width: 120px;\n  float: left;\n  padding: 20px;\n}\n\n.image-product[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 170px;\n}\n\n.title-product[_ngcontent-%COMP%] {\n  width: 400px;\n  float: left;\n}\n\n.title-product[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-left: 30px;\n  margin-top: 60px;\n  font-size: 18px;\n  font-weight: 700;\n  float: left;\n}\n\n.price[_ngcontent-%COMP%] {\n  width: 200px;\n  float: right;\n  padding: 20px;\n}\n\n.price[_ngcontent-%COMP%]   P[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  font-size: 18px;\n  font-weight: bold;\n  margin-bottom: 3px;\n  text-align: right;\n}\n\n.price[_ngcontent-%COMP%]   .price-item[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-top: 0;\n  font-size: 15px;\n  font-weight: 500;\n}\n\n.price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: normal;\n}\n\n.totalPrice[_ngcontent-%COMP%] {\n  width: 350px;\n  float: right;\n  padding: 20px;\n  margin-right: 60px;\n}\n\n.totalPrice[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  width: 100%;\n  height: 70px;\n  font-size: 22px;\n  color: white;\n  border: none;\n  outline: none;\n  background-color: #5495eb;\n}\n\n.totalPrice[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #0052bf;\n}\n\n.counter[_ngcontent-%COMP%] {\n  float: left;\n  margin-left: 30px;\n  margin-top: 60px;\n  text-align: center;\n}\n\n.counter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 30px;\n  text-align: center;\n}\n\n.counter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background: none;\n  color: #e0e0e0;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.counter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.heder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  overflow: hidden;\n  background: #e0e0e0;\n}\n\n.mail[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 5px;\n  text-align: center;\n  font-size: 16px;\n  border: 1px solid #e0e0e0;\n  margin-bottom: 30px;\n}\n\n.mail[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #e0e0e0;\n}\n\n.price_summary_row[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: hidden;\n  padding: 10px;\n  border-bottom: 1px dashed #e0e0e0;\n}\n\n.price_summary_row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  color: #e0e0e0;\n}\n\n.price_item_summary[_ngcontent-%COMP%] {\n  float: right;\n  width: 50px;\n  margin-left: 50px;\n  text-align: right;\n  font-size: 16px;\n  font-weight: 500;\n}\n\nh2[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\nh2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: normal;\n  font-size: 16px;\n}\n\n.product-container[_ngcontent-%COMP%] {\n  float: left;\n  height: 700px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iYXNrZXQvQzpcXFVzZXJzXFxEam9sZVBDXFxEZXNrdG9wXFxlbXBpcmVfb2ZfZ2FtZXNcXEVtcGlyZU9mR2FtZXMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGJhc2tldFxcYmFza2V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Jhc2tldC9iYXNrZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDQUo7O0FERUE7RUFDSSxZQUFBO0VBQ0QsZ0JBQUE7RUFDQyxpQkFBQTtFQUVBLHlCQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREFLO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNFVDs7QURHQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDQUo7O0FEQ0k7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0NSOztBREdBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQUo7O0FEQ0k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDUjs7QURFSTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQVI7O0FER0k7RUFDSSxlQUFBO0VBRUEsbUJBQUE7QUNGUjs7QURLQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDRko7O0FESUk7RUFDSSxtQkFBQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FDRlQ7O0FER1M7RUFDSSx5QkFBQTtBQ0RiOztBREtBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBREdJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FDRFI7O0FER0k7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0EvRkk7RUFnR0osa0JBQUE7RUFDQSxtQkFBQTtBQ0RSOztBREdJO0VBQ0ksZUFBQTtBQ0RSOztBRElBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDRCxnQkFBQTtFQUNDLG1CQTNHUTtBQzBHWjs7QURHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0FKOztBRENJO0VBQ0ksY0FySEk7QUNzSFo7O0FERUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUNBQUE7QUNDSjs7QURBSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBaElJO0FDa0laOztBRENBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQUE7RUFDQyxpQkFBQTtBQ0dEOztBREZDO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0FDSUw7O0FEREE7RUFDSSxXQUFBO0VBQ0gsYUFBQTtBQ0lEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9iYXNrZXQvYmFza2V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yLXRleHQ6I2UwZTBlMDtcclxuLndyYXBwZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNzIwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5wcm9kdWN0e1xyXG4gICAgd2lkdGg6IDc2NXB4O1xyXG4gICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcblxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMCA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcbi5pbWFnZS1wcm9kdWN0e1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgIGltZ3tcclxuICAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgICBoZWlnaHQ6IDE3MHB4O1xyXG4gICAgICAgXHJcbiAgICAgICAgIFxyXG4gICAgIH1cclxufVxyXG4udGl0bGUtcHJvZHVjdHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuLnByaWNle1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIFB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLnByaWNlLWl0ZW17XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIHNwYW57XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICBcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgfVxyXG59XHJcbi50b3RhbFByaWNle1xyXG4gICAgd2lkdGg6MzUwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xyXG5cclxuICAgIGJ1dHRvbntcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTQ5NWViO1xyXG4gICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTJiZjtcclxuICAgICAgICAgfVxyXG4gICAgICAgIH1cclxufVxyXG4uY291bnRlcntcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaW5wdXR7XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvci10ZXh0O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgc3BhbntcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuLmhlZGVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItdGV4dDtcclxufVxyXG4ubWFpbHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMCA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgaXtcclxuICAgICAgICBjb2xvcjogJGNvbG9yLXRleHQ7XHJcbiAgICB9XHJcbn1cclxuLnByaWNlX3N1bW1hcnlfcm93e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b206ICAxcHggZGFzaGVkICNlMGUwZTA7XHJcbiAgICBzcGFue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogJGNvbG9yLXRleHQ7XHJcbiAgICB9XHJcbn1cclxuLnByaWNlX2l0ZW1fc3VtbWFyeXtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuaDJ7XHJcbiBtYXJnaW4tbGVmdDogMjBweDtcclxuIHNwYW57XHJcbiAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICBmb250LXNpemU6IDE2cHg7XHJcbiB9XHJcbn1cclxuLnByb2R1Y3QtY29udGFpbmVye1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiBoZWlnaHQ6IDcwMHB4O1xyXG59IiwiLndyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3MjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnByb2R1Y3Qge1xuICB3aWR0aDogNzY1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uaW1hZ2UtcHJvZHVjdCB7XG4gIHdpZHRoOiAxMjBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4uaW1hZ2UtcHJvZHVjdCBpbWcge1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTcwcHg7XG59XG5cbi50aXRsZS1wcm9kdWN0IHtcbiAgd2lkdGg6IDQwMHB4O1xuICBmbG9hdDogbGVmdDtcbn1cbi50aXRsZS1wcm9kdWN0IHAge1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnByaWNlIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4ucHJpY2UgUCB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ucHJpY2UgLnByaWNlLWl0ZW0ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5wcmljZSBzcGFuIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4udG90YWxQcmljZSB7XG4gIHdpZHRoOiAzNTBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDYwcHg7XG59XG4udG90YWxQcmljZSBidXR0b24ge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3MHB4O1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTQ5NWViO1xufVxuLnRvdGFsUHJpY2UgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTJiZjtcbn1cblxuLmNvdW50ZXIge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb3VudGVyIGlucHV0IHtcbiAgd2lkdGg6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb3VudGVyIGJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6ICNlMGUwZTA7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbi5jb3VudGVyIHNwYW4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5oZWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6ICNlMGUwZTA7XG59XG5cbi5tYWlsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4ubWFpbCBpIHtcbiAgY29sb3I6ICNlMGUwZTA7XG59XG5cbi5wcmljZV9zdW1tYXJ5X3JvdyB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNlMGUwZTA7XG59XG4ucHJpY2Vfc3VtbWFyeV9yb3cgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZTBlMGUwO1xufVxuXG4ucHJpY2VfaXRlbV9zdW1tYXJ5IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmgyIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5oMiBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ucHJvZHVjdC1jb250YWluZXIge1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiA3MDBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasketComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-basket',
                templateUrl: './basket.component.html',
                styleUrls: ['./basket.component.scss']
            }]
    }], function () { return [{ type: src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"] }, { type: src_app_services_UserService_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/card-gift/card-gift.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/card-gift/card-gift.component.ts ***!
  \*************************************************************/
/*! exports provided: CardGiftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardGiftComponent", function() { return CardGiftComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var src_app_services_CommonService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/CommonService */ "./src/app/services/CommonService.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function CardGiftComponent_i_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 16);
} }
function CardGiftComponent_i_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 17);
} }
function CardGiftComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardGiftComponent_i_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 16);
} }
function CardGiftComponent_i_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 17);
} }
function CardGiftComponent_ul_31_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const platform_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", platform_r8.name, " ");
} }
function CardGiftComponent_ul_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardGiftComponent_ul_31_li_1_Template, 3, 1, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.platforms);
} }
function CardGiftComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardGiftComponent_div_33_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const giftCard_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.commonService.displayProduct(giftCard_r9.id, giftCard_r9.category_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const giftCard_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", giftCard_r9.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", giftCard_r9.price, " EU");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](giftCard_r9.name);
} }
class CardGiftComponent {
    constructor(restApi, commonService) {
        this.restApi = restApi;
        this.commonService = commonService;
        this.collapsed = {
            area_hidden: false,
            area_hidden1: false
        };
        this.platforms = [];
        this.giftCards = [];
    }
    ngOnInit() {
        this.getAllPlatforms();
        this.getTotalNumberOfGiftCards();
    }
    isCollapsed(event) {
        const index = event.target.getAttribute('index');
        if (index == 1) {
            if (!this.collapsed.area_hidden) {
                this.collapsed.area_hidden = true;
            }
            else
                this.collapsed.area_hidden = false;
        }
        if (index == 2) {
            if (!this.collapsed.area_hidden1) {
                this.collapsed.area_hidden1 = true;
            }
            else
                this.collapsed.area_hidden1 = false;
        }
    }
    getAllPlatforms() {
        this.restApi.getAllPlatforms()
            .subscribe((response) => {
            this.platforms = response;
        });
    }
    getAllGiftCards() {
        this.restApi.getAllGiftCards()
            .subscribe((response) => {
            this.giftCards = response;
        });
    }
    getTotalNumberOfGiftCards() {
        this.restApi.getTotalNumberOfGiftCards()
            .subscribe(response => {
            this.numberOfProducts = response[0].numberOfGiftCards;
        });
    }
}
CardGiftComponent.ɵfac = function CardGiftComponent_Factory(t) { return new (t || CardGiftComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_1__["RestApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_CommonService__WEBPACK_IMPORTED_MODULE_2__["CommonService"])); };
CardGiftComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardGiftComponent, selectors: [["app-card-gift"]], decls: 34, vars: 8, consts: [[1, "wrapper"], [1, "title"], [1, "sort"], ["name", "", "id", ""], ["value", ""], [1, "category"], [1, "filters-wrapper"], [1, "filters-title", 2, "font-weight", "400"], ["index", "1", 1, "filters-title", 3, "click"], ["class", "fa fa-sort-desc", "aria-hidden", "true", 4, "ngIf"], ["class", "fa fa-sort-asc", "aria-hidden", "true", 4, "ngIf"], ["class", "price-filter", 4, "ngIf"], ["index", "2", 1, "filters-title", 3, "click"], [4, "ngIf"], [1, "products-container"], ["class", "product-card", 3, "click", 4, "ngFor", "ngForOf"], ["aria-hidden", "true", 1, "fa", "fa-sort-desc"], ["aria-hidden", "true", 1, "fa", "fa-sort-asc"], [1, "price-filter"], ["type", "number", "placeholder", "FROM"], ["type", "number", "placeholder", "TO"], [4, "ngFor", "ngForOf"], ["type", "checkbox"], [1, "product-card", 3, "click"], ["alt", "", 3, "src"], [1, "price"]], template: function CardGiftComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Gift cards ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Price-lower");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Price highest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Newest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Filter Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardGiftComponent_Template_div_click_22_listener($event) { return ctx.isCollapsed($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Price ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CardGiftComponent_i_24_Template, 1, 0, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CardGiftComponent_i_25_Template, 1, 0, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CardGiftComponent_div_26_Template, 5, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardGiftComponent_Template_div_click_27_listener($event) { return ctx.isCollapsed($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Platforms ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, CardGiftComponent_i_29_Template, 1, 0, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, CardGiftComponent_i_30_Template, 1, 0, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, CardGiftComponent_ul_31_Template, 2, 1, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, CardGiftComponent_div_33_Template, 8, 3, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(products: ", ctx.numberOfProducts, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.collapsed.area_hidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.collapsed.area_hidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.collapsed.area_hidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.collapsed.area_hidden1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.collapsed.area_hidden1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.collapsed.area_hidden1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.giftCards);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".product-card[_ngcontent-%COMP%] {\n  width: 170px;\n  height: 216px;\n  position: relative;\n  float: left;\n  margin-right: 20px;\n  margin-bottom: 30px;\n}\n.product-card[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n.product-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 190px;\n}\n.product-card[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  text-align: center;\n  color: black;\n  font-size: 20px;\n}\n.price[_ngcontent-%COMP%] {\n  width: 100%;\n  position: absolute;\n  bottom: 25px;\n  font-size: 20px;\n  color: white;\n  padding-left: 10px;\n}\n.price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  padding-right: 6px;\n}\n.products-container[_ngcontent-%COMP%] {\n  width: 70%;\n  float: right;\n  background: white;\n  padding: 10px;\n}\n.wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: hidden;\n}\n.category[_ngcontent-%COMP%] {\n  width: 25%;\n  float: left;\n  padding: 10px;\n  height: 1000px;\n}\n.filters-wrapper[_ngcontent-%COMP%] {\n  width: 80%;\n  border: 1px solid #e0e0e0;\n}\n.filters-title[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border-bottom: 1px solid #e0e0e0;\n  font-weight: bold;\n  cursor: pointer;\n}\n.filters-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  float: right;\n}\n.filters-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n.filters-title[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: none;\n  font-weight: 400;\n  font-size: 18px;\n  margin-top: 15px;\n}\n.price-filter[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.price-filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 40px;\n}\n.title[_ngcontent-%COMP%] {\n  clear: both;\n  width: 100%;\n  height: 100px;\n  padding: 20px;\n}\n.title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: inline;\n}\n.sort[_ngcontent-%COMP%] {\n  float: right;\n  width: 250px;\n}\n.sort[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 200px;\n  margin-left: 10px;\n  border: 1px solid #e0e0e0;\n  outline: none;\n}\n.sort[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJkLWdpZnQvQzpcXFVzZXJzXFxEam9sZVBDXFxEZXNrdG9wXFxlbXBpcmVfb2ZfZ2FtZXNcXEVtcGlyZU9mR2FtZXMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNhcmQtZ2lmdFxcY2FyZC1naWZ0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NhcmQtZ2lmdC9jYXJkLWdpZnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUVBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNBSjtBREVJO0VBQ0YsWUFBQTtBQ0FGO0FER0k7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ0RSO0FES0k7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDSFI7QURNQTtFQUNJLFdBQUE7RUFDRixrQkFBQTtFQUNBLFlBQUE7RUFFQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDSkY7QURNRTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQ0pOO0FEUUE7RUFDSSxVQUFBO0VBQ0QsWUFBQTtFQUNDLGlCQUFBO0VBRUEsYUFBQTtBQ05KO0FEUUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNMSjtBRFFBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ0xKO0FET0E7RUFDSSxVQUFBO0VBQ0EseUJBQUE7QUNKSjtBRE1BO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0hKO0FES0k7RUFDSSxZQUFBO0FDSFI7QURNSTtFQUNJLGlCQUFBO0FDSlI7QURNSTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNKUjtBRFNBO0VBQ0ksYUFBQTtBQ05KO0FEUUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ05SO0FEV0E7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FDUko7QURTSTtFQUVJLGVBQUE7QUNSUjtBRFlBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUNUSjtBRFlJO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FDVlI7QURZSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQ1ZSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXJkLWdpZnQvY2FyZC1naWZ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3QtY2FyZHtcclxuICAgIHdpZHRoOiAxNzBweDtcclxuICAgIGhlaWdodDogMjE2cHg7XHJcbiAgICBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuIFxyXG4gICAgJjpob3ZlcntcclxuICBvcGFjaXR5OiAwLjc7XHJcblxyXG4gICAgfVxyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTkwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIGg2e1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG59XHJcbi5wcmljZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDI1cHg7XHJcbiBcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuXHJcbiAgc3BhbntcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA2cHg7XHJcbiAgfVxyXG4gIFxyXG59XHJcbi5wcm9kdWN0cy1jb250YWluZXJ7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICBmbG9hdDogcmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuIFxyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4ud3JhcHBlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIFxyXG59XHJcbi5jYXRlZ29yeXtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMDBweDtcclxufVxyXG4uZmlsdGVycy13cmFwcGVye1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XHJcbn1cclxuLmZpbHRlcnMtdGl0bGV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZTBlMGUwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBcclxuICAgIGl7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHVse1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgfVxyXG4gICAgbGl7XHJcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgXHJcbn1cclxuLnByaWNlLWZpbHRlcntcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gICAgaW5wdXR7XHJcbiAgICAgICAgd2lkdGg6ODBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGgze1xyXG4gICAgICAgXHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuLnNvcnR7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcblxyXG5cclxuICAgIHNlbGVjdHtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG4gICAgc3BhbntcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxufSIsIi5wcm9kdWN0LWNhcmQge1xuICB3aWR0aDogMTcwcHg7XG4gIGhlaWdodDogMjE2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5wcm9kdWN0LWNhcmQ6aG92ZXIge1xuICBvcGFjaXR5OiAwLjc7XG59XG4ucHJvZHVjdC1jYXJkIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE5MHB4O1xufVxuLnByb2R1Y3QtY2FyZCBoNiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5wcmljZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMjVweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5wcmljZSBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nLXJpZ2h0OiA2cHg7XG59XG5cbi5wcm9kdWN0cy1jb250YWluZXIge1xuICB3aWR0aDogNzAlO1xuICBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ud3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY2F0ZWdvcnkge1xuICB3aWR0aDogMjUlO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMTBweDtcbiAgaGVpZ2h0OiAxMDAwcHg7XG59XG5cbi5maWx0ZXJzLXdyYXBwZXIge1xuICB3aWR0aDogODAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xufVxuXG4uZmlsdGVycy10aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5maWx0ZXJzLXRpdGxlIGkge1xuICBmbG9hdDogcmlnaHQ7XG59XG4uZmlsdGVycy10aXRsZSB1bCB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuLmZpbHRlcnMtdGl0bGUgbGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLnByaWNlLWZpbHRlciB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ucHJpY2UtZmlsdGVyIGlucHV0IHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLnRpdGxlIHtcbiAgY2xlYXI6IGJvdGg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLnRpdGxlIGgzIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4uc29ydCB7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDI1MHB4O1xufVxuLnNvcnQgc2VsZWN0IHtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5zb3J0IHNwYW4ge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDIwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardGiftComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card-gift',
                templateUrl: './card-gift.component.html',
                styleUrls: ['./card-gift.component.scss']
            }]
    }], function () { return [{ type: src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_1__["RestApiService"] }, { type: src_app_services_CommonService__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/games/SearchProduct.class.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/games/SearchProduct.class.ts ***!
  \*********************************************************/
/*! exports provided: SearchProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchProduct", function() { return SearchProduct; });
class SearchProduct {
}


/***/ }),

/***/ "./src/app/components/games/games.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/games/games.component.ts ***!
  \*****************************************************/
/*! exports provided: GamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesComponent", function() { return GamesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _SearchProduct_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchProduct.class */ "./src/app/components/games/SearchProduct.class.ts");
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var src_app_services_CommonService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/CommonService */ "./src/app/services/CommonService.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function GamesComponent_i_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 20);
} }
function GamesComponent_i_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 21);
} }
function GamesComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GamesComponent_div_25_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.searchProducts.priceFrom = $event; })("keyup.enter", function GamesComponent_div_25_Template_input_keyup_enter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.searchAllProducts(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GamesComponent_div_25_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.searchProducts.priceTo = $event; })("keyup.enter", function GamesComponent_div_25_Template_input_keyup_enter_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.searchAllProducts(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.searchProducts.priceFrom);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.searchProducts.priceTo);
} }
function GamesComponent_i_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 20);
} }
function GamesComponent_i_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 21);
} }
function GamesComponent_ul_30_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GamesComponent_ul_30_li_1_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const genre_r19 = ctx.$implicit; return genre_r19.isChecked = $event; })("change", function GamesComponent_ul_30_li_1_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.changeSelectionGenre(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const genre_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", genre_r19.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](genre_r19.name);
} }
function GamesComponent_ul_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GamesComponent_ul_30_li_1_Template, 3, 2, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.genres);
} }
function GamesComponent_i_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 20);
} }
function GamesComponent_i_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 21);
} }
function GamesComponent_ul_35_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GamesComponent_ul_35_li_1_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const platform_r24 = ctx.$implicit; return platform_r24.isChecked = $event; })("change", function GamesComponent_ul_35_li_1_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r27.changeSelecttionPlatform(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const platform_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", platform_r24.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", platform_r24.name, " ");
} }
function GamesComponent_ul_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GamesComponent_ul_35_li_1_Template, 3, 2, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.platforms);
} }
function GamesComponent_i_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 20);
} }
function GamesComponent_i_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 21);
} }
function GamesComponent_ul_40_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GamesComponent_ul_40_li_1_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const device_r29 = ctx.$implicit; return device_r29.isChecked = $event; })("change", function GamesComponent_ul_40_li_1_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r32.changeSelecttionDevice(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const device_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", device_r29.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", device_r29.name, " ");
} }
function GamesComponent_ul_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GamesComponent_ul_40_li_1_Template, 3, 2, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.devices);
} }
function GamesComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GamesComponent_div_42_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const game_r33 = ctx.$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.commonService.displayProduct(game_r33.id, game_r33.category_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", game_r33.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", game_r33.price, " EU");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](game_r33.name);
} }
class GamesComponent {
    constructor(restApi, commonService) {
        this.restApi = restApi;
        this.commonService = commonService;
        this.collapsed = {
            area_hidden: false,
            area_hidden1: false,
            area_hidden2: false,
            area_hidden3: false,
            area_hidden4: false
        };
        this.genres = [];
        this.platforms = [];
        this.games = [];
        this.checkedGenreIDs = [];
        this.checkedPlatformIDs = [];
        this.checkedDevicesIDs = [];
    }
    ngOnInit() {
        this.searchProducts = new _SearchProduct_class__WEBPACK_IMPORTED_MODULE_1__["SearchProduct"]();
        this.getTotalNumberOfGames();
        this.getAllGenres();
        this.getAllPlatforms();
        this.getAllGames();
        this.getAllDevices();
    }
    isCollapsed(event) {
        const index = event.target.getAttribute('index');
        if (index == 1) {
            if (!this.collapsed.area_hidden) {
                this.collapsed.area_hidden = true;
            }
            else
                this.collapsed.area_hidden = false;
        }
        if (index == 2) {
            if (!this.collapsed.area_hidden1) {
                this.collapsed.area_hidden1 = true;
            }
            else
                this.collapsed.area_hidden1 = false;
        }
        if (index == 3) {
            if (!this.collapsed.area_hidden2) {
                this.collapsed.area_hidden2 = true;
            }
            else
                this.collapsed.area_hidden2 = false;
        }
        if (index == 4) {
            if (!this.collapsed.area_hidden3) {
                this.collapsed.area_hidden3 = true;
            }
            else
                this.collapsed.area_hidden3 = false;
        }
        if (index == 5) {
            if (!this.collapsed.area_hidden4) {
                this.collapsed.area_hidden4 = true;
            }
            else
                this.collapsed.area_hidden4 = false;
        }
    }
    getAllGenres() {
        this.restApi.getAllGenres()
            .subscribe((response) => {
            this.genres = response;
        });
    }
    getAllPlatforms() {
        this.restApi.getAllPlatforms()
            .subscribe((response) => {
            this.platforms = response;
        });
    }
    getAllDevices() {
        this.restApi.getAllDevice()
            .subscribe((response) => {
            this.devices = response;
        });
    }
    getAllGames() {
        this.restApi.getAllGames()
            .subscribe((response) => {
            this.games = response;
        });
    }
    changeSelectionGenre() {
        this.fetchCheckedGenreIDs();
        this.searchProducts.genreIds = this.checkedGenreIDs.toString();
        this.restApi.searchForGames(this.searchProducts)
            .subscribe((response) => {
            this.games = response;
        });
        console.log(this.searchProducts);
    }
    fetchCheckedGenreIDs() {
        this.checkedGenreIDs = [];
        this.genres.forEach(value => {
            if (value.isChecked) {
                this.checkedGenreIDs.push(value.id);
            }
        });
    }
    changeSelecttionPlatform() {
        this.fetchCheckedPlatformIDs();
        this.searchProducts.platformIds = this.checkedPlatformIDs.toString();
        this.restApi.searchForGames(this.searchProducts)
            .subscribe((response) => {
            this.games = response;
        });
    }
    fetchCheckedPlatformIDs() {
        this.checkedPlatformIDs = [];
        this.platforms.forEach(value => {
            if (value.isChecked) {
                this.checkedPlatformIDs.push(value.id);
            }
        });
    }
    changeSelecttionDevice() {
        this.fetchCheckedDeviceIDs();
        this.searchProducts.deviceIds = this.checkedDevicesIDs.toString();
        this.restApi.searchForGames(this.searchProducts)
            .subscribe((response) => {
            this.games = response;
        });
    }
    fetchCheckedDeviceIDs() {
        this.checkedDevicesIDs = [];
        this.devices.forEach(value => {
            if (value.isChecked) {
                this.checkedDevicesIDs.push(value.id);
            }
        });
    }
    searchAllProducts() {
        this.restApi.searchForGames(this.searchProducts)
            .subscribe((response) => {
            this.games = response;
        });
    }
    getTotalNumberOfGames() {
        this.restApi.getTotalNumberOfGames()
            .subscribe(response => {
            this.numberOfProducts = response[0].numberOfGames;
        });
    }
}
GamesComponent.ɵfac = function GamesComponent_Factory(t) { return new (t || GamesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_CommonService__WEBPACK_IMPORTED_MODULE_3__["CommonService"])); };
GamesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GamesComponent, selectors: [["app-gaming"]], decls: 43, vars: 15, consts: [[1, "wrapper"], [1, "title"], [1, "sort"], [3, "ngModel", "ngModelChange", "change"], ["value", "Newest"], ["value", "Price-lower"], ["value", "Price highest"], [1, "category"], [1, "filters-wrapper"], [1, "filters-title", 2, "font-weight", "400"], ["index", "1", 1, "filters-title", 3, "click"], ["class", "fa fa-sort-desc", "aria-hidden", "true", 4, "ngIf"], ["class", "fa fa-sort-asc", "aria-hidden", "true", 4, "ngIf"], ["class", "price-filter", 4, "ngIf"], ["index", "2", 1, "filters-title", 3, "click"], [4, "ngIf"], ["index", "3", 1, "filters-title", 3, "click"], ["index", "4", 1, "filters-title", 3, "click"], [1, "products-container"], ["class", "product-card", 3, "click", 4, "ngFor", "ngForOf"], ["aria-hidden", "true", 1, "fa", "fa-sort-desc"], ["aria-hidden", "true", 1, "fa", "fa-sort-asc"], [1, "price-filter"], ["type", "number", "placeholder", "FROM", 3, "ngModel", "ngModelChange", "keyup.enter"], ["type", "number", "placeholder", "TO", 3, "ngModel", "ngModelChange", "keyup.enter"], [4, "ngFor", "ngForOf"], ["type", "checkbox", 3, "ngModel", "ngModelChange", "change"], [1, "product-card", 3, "click"], ["alt", "", 3, "src"], [1, "price"]], template: function GamesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Games ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GamesComponent_Template_select_ngModelChange_9_listener($event) { return ctx.searchProducts.sort = $event; })("change", function GamesComponent_Template_select_change_9_listener() { return ctx.searchAllProducts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Newest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Price-lower");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Price highest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Filter Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GamesComponent_Template_div_click_21_listener($event) { return ctx.isCollapsed($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Price ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, GamesComponent_i_23_Template, 1, 0, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, GamesComponent_i_24_Template, 1, 0, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, GamesComponent_div_25_Template, 5, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GamesComponent_Template_div_click_26_listener($event) { return ctx.isCollapsed($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Genre ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, GamesComponent_i_28_Template, 1, 0, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, GamesComponent_i_29_Template, 1, 0, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, GamesComponent_ul_30_Template, 2, 1, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GamesComponent_Template_div_click_31_listener($event) { return ctx.isCollapsed($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Platforms ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, GamesComponent_i_33_Template, 1, 0, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, GamesComponent_i_34_Template, 1, 0, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, GamesComponent_ul_35_Template, 2, 1, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GamesComponent_Template_div_click_36_listener($event) { return ctx.isCollapsed($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Device ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, GamesComponent_i_38_Template, 1, 0, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, GamesComponent_i_39_Template, 1, 0, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, GamesComponent_ul_40_Template, 2, 1, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, GamesComponent_div_42_Template, 8, 3, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(products: ", ctx.numberOfProducts, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchProducts.sort);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.collapsed.area_hidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.collapsed.area_hidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.collapsed.area_hidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.collapsed.area_hidden1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.collapsed.area_hidden1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.collapsed.area_hidden1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.collapsed.area_hidden2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.collapsed.area_hidden2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.collapsed.area_hidden2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.collapsed.area_hidden3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.collapsed.area_hidden3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.collapsed.area_hidden3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.games);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"]], styles: [".product-card[_ngcontent-%COMP%] {\n  width: 170px;\n  height: 216px;\n  position: relative;\n  float: left;\n  margin-right: 20px;\n  margin-bottom: 30px;\n}\n.product-card[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n.product-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 190px;\n}\n.product-card[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  text-align: center;\n  color: black;\n  font-size: 18px;\n}\n.price[_ngcontent-%COMP%] {\n  width: 100%;\n  position: absolute;\n  bottom: 25px;\n  font-size: 20px;\n  color: white;\n  padding-left: 10px;\n}\n.price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  padding-right: 6px;\n}\n.products-container[_ngcontent-%COMP%] {\n  width: 70%;\n  float: right;\n  background: white;\n  padding: 10px;\n}\n.wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1000px;\n  overflow: hidden;\n}\n.category[_ngcontent-%COMP%] {\n  width: 25%;\n  float: left;\n  padding: 10px;\n}\n.filters-wrapper[_ngcontent-%COMP%] {\n  width: 80%;\n  border: 1px solid #e0e0e0;\n}\n.filters-title[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border-bottom: 1px solid #e0e0e0;\n  font-weight: bold;\n  cursor: pointer;\n}\n.filters-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  float: right;\n}\n.filters-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n.filters-title[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: none;\n  font-weight: 400;\n  font-size: 18px;\n  margin-top: 15px;\n}\n.filters-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.price-filter[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.price-filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 40px;\n  margin-right: 0;\n}\n.title[_ngcontent-%COMP%] {\n  clear: both;\n  width: 100%;\n  height: 100px;\n  padding: 20px;\n}\n.title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: inline;\n}\n.sort[_ngcontent-%COMP%] {\n  float: right;\n  width: 250px;\n}\n.sort[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 200px;\n  margin-left: 10px;\n  border: 1px solid #e0e0e0;\n  outline: none;\n}\n.sort[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYW1lcy9DOlxcVXNlcnNcXERqb2xlUENcXERlc2t0b3BcXGVtcGlyZV9vZl9nYW1lc1xcRW1waXJlT2ZHYW1lcy9zcmNcXGFwcFxcY29tcG9uZW50c1xcZ2FtZXNcXGdhbWVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2dhbWVzL2dhbWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFFQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQUo7QURFSTtFQUNGLFlBQUE7QUNBRjtBREdJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNEUjtBREtJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0hSO0FETUE7RUFDSSxXQUFBO0VBQ0Ysa0JBQUE7RUFDQSxZQUFBO0VBRUEsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0pGO0FETUU7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUNKTjtBRFFBO0VBQ0ksVUFBQTtFQUNELFlBQUE7RUFDQyxpQkFBQTtFQUVBLGFBQUE7QUNOSjtBRFFBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0xKO0FEU0E7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNOSjtBRFFBO0VBQ0ksVUFBQTtFQUNBLHlCQUFBO0FDTEo7QURPQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNKSjtBRE1JO0VBQ0ksWUFBQTtBQ0pSO0FET0k7RUFDSSxpQkFBQTtBQ0xSO0FET0k7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDTFI7QURRSTtFQUNJLGtCQUFBO0FDTlI7QURVQTtFQUNJLGFBQUE7QUNQSjtBRFNJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDUFI7QURZQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUNUSjtBRFVJO0VBRUksZUFBQTtBQ1RSO0FEY0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ1hKO0FEY0k7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUNaUjtBRGNJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDWlIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dhbWVzL2dhbWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3QtY2FyZHtcclxuICAgIHdpZHRoOiAxNzBweDtcclxuICAgIGhlaWdodDogMjE2cHg7XHJcbiAgICBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuIFxyXG4gICAgJjpob3ZlcntcclxuICBvcGFjaXR5OiAwLjc7XHJcblxyXG4gICAgfVxyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTkwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIGg2e1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG59XHJcbi5wcmljZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDI1cHg7XHJcbiBcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuXHJcbiAgc3BhbntcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA2cHg7XHJcbiAgfVxyXG4gIFxyXG59XHJcbi5wcm9kdWN0cy1jb250YWluZXJ7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICBmbG9hdDogcmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuIFxyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4ud3JhcHBlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICBcclxuICAgIFxyXG59XHJcbi5jYXRlZ29yeXtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLmZpbHRlcnMtd3JhcHBlcntcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xyXG59XHJcbi5maWx0ZXJzLXRpdGxle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2UwZTBlMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgXHJcbiAgICBpe1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIH1cclxuXHJcbiAgICB1bHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIH1cclxuICAgIGxpe1xyXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpbnB1dHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgIFxyXG59XHJcbi5wcmljZS1maWx0ZXJ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAgIGlucHV0e1xyXG4gICAgICAgIHdpZHRoOjgwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuLnRpdGxle1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgaDN7XHJcbiAgICAgICBcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuLnNvcnR7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcblxyXG5cclxuICAgIHNlbGVjdHtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG4gICAgc3BhbntcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxufVxyXG4iLCIucHJvZHVjdC1jYXJkIHtcbiAgd2lkdGg6IDE3MHB4O1xuICBoZWlnaHQ6IDIxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4ucHJvZHVjdC1jYXJkOmhvdmVyIHtcbiAgb3BhY2l0eTogMC43O1xufVxuLnByb2R1Y3QtY2FyZCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxOTBweDtcbn1cbi5wcm9kdWN0LWNhcmQgaDYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ucHJpY2Uge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDI1cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4ucHJpY2Ugc3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZy1yaWdodDogNnB4O1xufVxuXG4ucHJvZHVjdHMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDcwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLndyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jYXRlZ29yeSB7XG4gIHdpZHRoOiAyNSU7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uZmlsdGVycy13cmFwcGVyIHtcbiAgd2lkdGg6IDgwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbn1cblxuLmZpbHRlcnMtdGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGUwZTA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZmlsdGVycy10aXRsZSBpIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLmZpbHRlcnMtdGl0bGUgdWwge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cbi5maWx0ZXJzLXRpdGxlIGxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4uZmlsdGVycy10aXRsZSBpbnB1dCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnByaWNlLWZpbHRlciB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ucHJpY2UtZmlsdGVyIGlucHV0IHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4udGl0bGUge1xuICBjbGVhcjogYm90aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4udGl0bGUgaDMge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5zb3J0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogMjUwcHg7XG59XG4uc29ydCBzZWxlY3Qge1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICBvdXRsaW5lOiBub25lO1xufVxuLnNvcnQgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GamesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gaming',
                templateUrl: './games.component.html',
                styleUrls: ['./games.component.scss']
            }]
    }], function () { return [{ type: src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"] }, { type: src_app_services_CommonService__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/home/Product.class.ts":
/*!**************************************************!*\
  !*** ./src/app/components/home/Product.class.ts ***!
  \**************************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
class Product {
}


/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var src_app_services_CommonService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/CommonService */ "./src/app/services/CommonService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function HomeComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_22_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const product_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.commonService.displayProduct(product_r1.id, product_r1.category_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", product_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", product_r1.price, " EU");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.name);
} }
class HomeComponent {
    constructor(restApi, commonService, router) {
        this.restApi = restApi;
        this.commonService = commonService;
        this.router = router;
        this.products = [];
        this.productId = 2;
    }
    ngOnInit() {
        this.getAll();
    }
    getAll() {
        this.restApi.getAllProducts()
            .subscribe((response) => {
            this.products = response;
            console.log(response);
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_1__["RestApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_CommonService__WEBPACK_IMPORTED_MODULE_2__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 23, vars: 1, consts: [[1, "wrapper"], ["id", "carouselExampleIndicators", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "0", 1, "active"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "1"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "2"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "https://press-start.com.au/wp-content/uploads/2020/04/Assassins-Creed-Val.jpg", "alt", "...", 1, "d-block", "w-100"], [1, "carousel-item"], ["src", "https://s.yimg.com/os/creatr-uploaded-images/2019-11/7ab80230-fd3e-11e9-b1fb-9ad2ff932eea", "alt", "...", 1, "d-block", "w-100"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "products-container"], ["class", "product-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "product-card", 3, "click"], ["alt", "", 3, "src"], [1, "price"], [1, "title"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ol", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, HomeComponent_div_22_Template, 8, 3, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".products-container[_ngcontent-%COMP%] {\n  width: 1036px;\n  z-index: 20;\n  margin: auto;\n  position: absolute;\n  top: 500px;\n  left: 110px;\n  background: white;\n  overflow: hidden;\n  padding: 30px;\n}\n\n.carousel-item[_ngcontent-%COMP%] {\n  height: 500px;\n  width: 1400px;\n  z-index: 0;\n}\n\n.product-card[_ngcontent-%COMP%] {\n  width: 170px;\n  height: 216px;\n  cursor: pointer;\n  position: relative;\n  float: left;\n  margin-right: 20px;\n  margin-bottom: 30px;\n}\n\n.product-card[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n\n.product-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 190px;\n}\n\n.product-card[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  text-align: center;\n  color: black;\n  font-size: 20px;\n}\n\n.price[_ngcontent-%COMP%] {\n  width: 100%;\n  position: absolute;\n  bottom: 25px;\n  font-size: 20px;\n  color: white;\n  padding-left: 10px;\n}\n\n.price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  padding-right: 6px;\n}\n\n#carouselExampleIndicators[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0M6XFxVc2Vyc1xcRGpvbGVQQ1xcRGVza3RvcFxcZW1waXJlX29mX2dhbWVzXFxFbXBpcmVPZkdhbWVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBRUosWUFBQTtFQUVJLGtCQUFBO0VBQ0MsVUFBQTtFQUNELFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBRUEsYUFBQTtBQ0hKOztBREtBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FDRko7O0FESUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDREo7O0FER0k7RUFDRixZQUFBO0FDREY7O0FESUk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ0ZSOztBRE1JO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0pSOztBRE9BO0VBQ0ksV0FBQTtFQUNGLGtCQUFBO0VBQ0EsWUFBQTtFQUVBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNMRjs7QURPRTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQ0xOOztBRFNBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FDTko7O0FEUUE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnByb2R1Y3RzLWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDM2cHg7XHJcbiAgICB6LWluZGV4OiAyMDtcclxuICAgIFxyXG5tYXJnaW46IGF1dG87XHJcbiAgICBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICB0b3A6IDUwMHB4O1xyXG4gICAgbGVmdDogMTEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgIFxyXG4gICAgcGFkZGluZzogMzBweDtcclxufVxyXG4uY2Fyb3VzZWwtaXRlbSB7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDE0MDBweDtcclxuICAgIHotaW5kZXg6IDA7XHJcbn1cclxuLnByb2R1Y3QtY2FyZHtcclxuICAgIHdpZHRoOiAxNzBweDtcclxuICAgIGhlaWdodDogMjE2cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiBcclxuICAgICY6aG92ZXJ7XHJcbiAgb3BhY2l0eTogMC43O1xyXG5cclxuICAgIH1cclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDE5MHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICBoNntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxufVxyXG4ucHJpY2V7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAyNXB4O1xyXG4gXHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcblxyXG4gIHNwYW57XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgcGFkZGluZy1yaWdodDogNnB4O1xyXG4gIH1cclxuICBcclxufVxyXG4jY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9yc3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi53cmFwcGVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEyMDBweDtcclxufVxyXG4iLCIucHJvZHVjdHMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMzZweDtcbiAgei1pbmRleDogMjA7XG4gIG1hcmdpbjogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwMHB4O1xuICBsZWZ0OiAxMTBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDMwcHg7XG59XG5cbi5jYXJvdXNlbC1pdGVtIHtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgd2lkdGg6IDE0MDBweDtcbiAgei1pbmRleDogMDtcbn1cblxuLnByb2R1Y3QtY2FyZCB7XG4gIHdpZHRoOiAxNzBweDtcbiAgaGVpZ2h0OiAyMTZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4ucHJvZHVjdC1jYXJkOmhvdmVyIHtcbiAgb3BhY2l0eTogMC43O1xufVxuLnByb2R1Y3QtY2FyZCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxOTBweDtcbn1cbi5wcm9kdWN0LWNhcmQgaDYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ucHJpY2Uge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDI1cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4ucHJpY2Ugc3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZy1yaWdodDogNnB4O1xufVxuXG4jY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9ycyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi53cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTIwMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_1__["RestApiService"] }, { type: src_app_services_CommonService__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _registration_User_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../registration/User.class */ "./src/app/components/registration/User.class.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_UserService_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/UserService.service */ "./src/app/services/UserService.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







class LoginComponent {
    constructor(router, userService, toastr) {
        this.router = router;
        this.userService = userService;
        this.toastr = toastr;
        this.user = new _registration_User_class__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.users = [];
    }
    ngOnInit() {
        this.getAllUsers();
    }
    login() {
        if (this.user.username && this.user.password) {
            for (let i = 0; i < this.users.length; i++) {
                console.log(this.user.username == this.users[i].username && this.user.password == this.users[i].password);
                if (this.user.username == this.users[i].username && this.user.password == this.users[i].password) {
                    this.userService.login(this.user)
                        .subscribe((response) => {
                        this.user = response;
                        delete this.user.password;
                        localStorage.setItem('loggedUser', JSON.stringify(this.user));
                        this.toastr.success('You have successfully logged in');
                        this.router.navigateByUrl('home');
                    });
                    break;
                }
                else if (this.user.username !== this.users[i].username || this.user.password !== this.users[i].password) {
                    this.toastr.error('Incorrect password or username');
                    return;
                }
            }
        }
        else {
            this.toastr.error('All fields must be fill!!!');
            return;
        }
    }
    backToSignUp() {
        this.router.navigateByUrl('sign-up');
    }
    getAllUsers() {
        this.userService.getAllUsers()
            .subscribe((response) => {
            this.users = response;
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_UserService_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 10, vars: 2, consts: [[1, "wrapper"], [1, "login-form"], ["type", "text", "placeholder", "Username", 3, "ngModel", "ngModelChange"], ["type", "password", "placeholder", "Password", 3, "ngModel", "ngModelChange", "keyup.enter"], [3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_4_listener($event) { return ctx.user.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_5_listener($event) { return ctx.user.password = $event; })("keyup.enter", function LoginComponent_Template_input_keyup_enter_5_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_6_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_8_listener() { return ctx.backToSignUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: [".login-form[_ngcontent-%COMP%] {\n  width: 400px;\n  padding: 20px;\n  height: 350px;\n  margin: 100px 460px;\n  background: #141414;\n  border: 1px solid #d6d6d6;\n  border-radius: 20px;\n  text-align: center;\n}\n.login-form[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #5495eb;\n  text-align: center;\n  margin-bottom: 30px;\n  margin-top: 30px;\n}\n.login-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n  background: none;\n  border-bottom: 2px solid #5495eb;\n  outline: none;\n  color: #d6d6d6;\n  margin-bottom: 40px;\n}\n.login-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100px;\n  outline: none;\n  border: none;\n  border-radius: 30px;\n  margin-right: 20px;\n  background: #5495eb;\n  color: #d6d6d6;\n  font-size: 20px;\n}\n.wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9DOlxcVXNlcnNcXERqb2xlUENcXERlc2t0b3BcXGVtcGlyZV9vZl9nYW1lc1xcRW1waXJlT2ZHYW1lcy9zcmNcXGFwcFxcY29tcG9uZW50c1xcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0QsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0RIO0FER0c7RUFDSSxjQWJFO0VBY0Ysa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDRFA7QURLRztFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNIUDtBRE1HO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQXBDRTtFQXFDRixjQUFBO0VBQ0EsZUFBQTtBQ0pQO0FEUUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvci0xOiM1NDk1ZWI7XHJcblxyXG4ubG9naW4tZm9ybXtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICBtYXJnaW46IDEwMHB4IDQ2MHB4O1xyXG4gICBiYWNrZ3JvdW5kOiAjMTQxNDE0O1xyXG4gICBib3JkZXI6IDFweCBzb2xpZCAjZDZkNmQ2O1xyXG4gICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICBoNHtcclxuICAgICAgIGNvbG9yOiAkY29sb3ItMTtcclxuICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICB9XHJcbiAgXHJcblxyXG4gICBpbnB1dHtcclxuICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkY29sb3ItMSA7XHJcbiAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgY29sb3I6I2Q2ZDZkNiA7XHJcbiAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgICBcclxuICAgfVxyXG4gICBidXR0b257XHJcbiAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci0xO1xyXG4gICAgICAgY29sb3I6ICNkNmQ2ZDYgO1xyXG4gICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICB9XHJcbiAgIFxyXG59XHJcbi53cmFwcGVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG59XHJcblxyXG5cclxuIiwiLmxvZ2luLWZvcm0ge1xuICB3aWR0aDogNDAwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGhlaWdodDogMzUwcHg7XG4gIG1hcmdpbjogMTAwcHggNDYwcHg7XG4gIGJhY2tncm91bmQ6ICMxNDE0MTQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNmQ2ZDY7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5sb2dpbi1mb3JtIGg0IHtcbiAgY29sb3I6ICM1NDk1ZWI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5sb2dpbi1mb3JtIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1NDk1ZWI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiAjZDZkNmQ2O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuLmxvZ2luLWZvcm0gYnV0dG9uIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgYmFja2dyb3VuZDogIzU0OTVlYjtcbiAgY29sb3I6ICNkNmQ2ZDY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLndyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_UserService_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_UserService_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/UserService.service */ "./src/app/services/UserService.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function MenuComponent_div_6_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", product_r9.smallImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r9.price, "EU");
} }
function MenuComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Results found:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MenuComponent_div_6_div_5_Template, 9, 3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.productsSearched);
} }
function MenuComponent_li_21_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_li_21_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const category_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.clickCategorySoftware(category_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r10.name);
} }
function MenuComponent_li_27_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_li_27_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const category1_r13 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.clickCategoryGiftCard(category1_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category1_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category1_r13.name);
} }
const _c0 = function () { return ["/admin"]; };
function MenuComponent_li_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Admin ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function MenuComponent_p_30_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_p_30_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.Login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Log in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MenuComponent_p_31_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_p_31_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.moveToProfile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.userService.loggedUser.username, "");
} }
function MenuComponent_p_32_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_p_32_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.moveToBasket(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MenuComponent_p_33_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_p_33_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function () { return ["/home"]; };
const _c2 = function () { return ["/gaming"]; };
const _c3 = function () { return ["/software"]; };
const _c4 = function () { return ["/gift-card"]; };
class MenuComponent {
    constructor(restApi, router, userService) {
        this.restApi = restApi;
        this.router = router;
        this.userService = userService;
        this.allCategoriesSoftware = [];
        this.categoriesGiftCards = [];
        this.nameProducts = '';
        this.isClickedSearch = false;
    }
    ngOnInit() {
        this.getSubcategorySoftware();
        this.getSubcategoryGiftCard();
    }
    getSubcategorySoftware() {
        this.restApi.getAllCategorySoftware()
            .subscribe((response) => {
            this.allCategoriesSoftware = response;
        });
    }
    getSubcategoryGiftCard() {
        this.restApi.getAllCategoryGiftCards()
            .subscribe((response) => {
            this.categoriesGiftCards = response;
        });
    }
    clickCategoryGiftCard(category1) {
        this.restApi.searchSubcategoryGiftCard(category1)
            .subscribe((response) => {
            this.allProducts = response;
        });
    }
    clickCategorySoftware(category) {
        this.restApi.searchSubcategorySoftware(category)
            .subscribe((response) => {
            this.allProducts = response;
            console.log(response);
        });
    }
    searchAllProducts() {
        this.isClickedSearch = true;
        this.restApi.searchProducts(this.nameProducts)
            .subscribe((response) => {
            this.productsSearched = response;
            console.log(this.productsSearched);
        });
    }
    notClickedSearch() {
        this.isClickedSearch = false;
        this.nameProducts = '';
    }
    Login() {
        this.router.navigateByUrl('login');
    }
    logout() {
        localStorage.removeItem('loggedUser');
        this.router.navigateByUrl('login');
    }
    moveToBasket() {
        this.router.navigateByUrl('basket');
    }
    moveToProfile() {
        this.router.navigateByUrl('profile');
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_1__["RestApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_UserService_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 36, vars: 17, consts: [[1, "heder-wraper"], [1, "logo-container"], ["src", "../../../../assets/logo.svg", "alt", ""], [1, "search"], ["type", "search", "placeholder", "Search", 3, "ngModel", "ngModelChange", "input", "blur"], ["aria-hidden", "true", 1, "fa", "fa-search"], ["class", "search-results", 4, "ngIf"], [1, "submenu-container"], [1, "navbar"], ["routerLinkActive", "link-active", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-home"], ["aria-hidden", "true", 1, "fa", "fa-gamepad"], ["aria-hidden", "true", 1, "fa", "fa-desktop"], [1, "submenu"], [3, "click", 4, "ngFor", "ngForOf"], ["aria-hidden", "true", 1, "fa", "fa-credit-card"], ["routerLinkActive", "link-active", 3, "routerLink", 4, "ngIf"], [1, "loginbox"], ["class", "login", 3, "click", 4, "ngIf"], [3, "click", 4, "ngIf"], ["class", "logout-basket", 4, "ngIf"], [1, "darkMode"], ["aria-hidden", "true", 1, "fa", "fa-moon-o"], [1, "search-results"], [1, "results"], ["class", "product", 4, "ngFor", "ngForOf"], [1, "product"], ["alt", "", 3, "src"], [1, "price"], [3, "click"], ["aria-hidden", "true", 1, "fa", "fa-user-secret"], [1, "login", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-user-circle-o"], ["aria-hidden", "true", 1, "fa", "fa-user"], [1, "logout-basket"], ["aria-hidden", "true", 1, "fa", "fa-cart-plus", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-power-off", 3, "click"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MenuComponent_Template_input_ngModelChange_4_listener($event) { return ctx.nameProducts = $event; })("input", function MenuComponent_Template_input_input_4_listener() { return ctx.searchAllProducts(); })("blur", function MenuComponent_Template_input_blur_4_listener() { return ctx.notClickedSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MenuComponent_div_6_Template, 6, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Gaming");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Software ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, MenuComponent_li_21_Template, 4, 1, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Gift cards ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, MenuComponent_li_27_Template, 4, 1, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, MenuComponent_li_28_Template, 3, 2, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, MenuComponent_p_30_Template, 3, 0, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, MenuComponent_p_31_Template, 3, 1, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, MenuComponent_p_32_Template, 2, 0, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, MenuComponent_p_33_Template, 2, 0, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nameProducts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isClickedSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allCategoriesSoftware);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categoriesGiftCards);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userService.isAdminRole());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userService.loggedUser.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userService.loggedUser.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userService.loggedUser.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userService.loggedUser.id);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.heder[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.heder-wraper[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #141414;\n  height: 100px;\n}\n\n.submenu-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 59px;\n  background: #3b3838;\n}\n\n.logo-container[_ngcontent-%COMP%] {\n  width: 40%;\n  float: left;\n}\n\n.logo-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 350px;\n  height: 95px;\n}\n\n.search[_ngcontent-%COMP%] {\n  width: 25%;\n  float: right;\n  padding: 10px;\n  margin-top: 30px;\n  margin-right: 20px;\n  text-align: center;\n}\n\n.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: none;\n  width: 250px;\n  border: none;\n  border-bottom: 2px solid #5495eb;\n  outline: none;\n  color: #629ff0;\n  height: 30px;\n  font-size: 20px;\n  padding: 0;\n}\n\n.search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  color: #5495eb;\n  font-size: 20px;\n  cursor: pointer;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  width: 700px;\n  padding: 5px;\n  float: left;\n  padding-bottom: 0;\n}\n\n.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  overflow: hidden;\n  padding: 3px;\n}\n\n.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  float: left;\n  margin-right: 10px;\n  text-decoration: none;\n  list-style-type: none;\n  width: 125px;\n  height: 45px;\n  line-height: 40px;\n  border-right: 1px solid white;\n  text-align: center;\n  color: white;\n  font-size: 20px;\n  font-weight: 700;\n  cursor: pointer;\n}\n\n.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  color: #d6d6d6;\n}\n\n.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .submenu[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  color: #5495eb;\n}\n\n.loginbox[_ngcontent-%COMP%] {\n  float: right;\n  width: 340px;\n  padding: 10px;\n  height: 50px;\n  text-align: right;\n  font-size: 22px;\n}\n\n.loginbox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: white;\n  font-weight: 700;\n  margin-left: 0;\n  margin-right: 35px;\n  float: left;\n  width: 153px;\n  cursor: pointer;\n}\n\n.loginbox[_ngcontent-%COMP%]   .darkMode[_ngcontent-%COMP%] {\n  background: none;\n  width: 35px;\n  float: right;\n  margin-right: 17px;\n  border: none;\n  outline: none;\n  color: white;\n  margin-left: 0;\n  cursor: pointer;\n}\n\n.loginbox[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  color: #5495eb;\n}\n\n.link-active[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n}\n\n.submenu[_ngcontent-%COMP%] {\n  position: relative;\n  display: none;\n  padding: 3px;\n  width: 1100px;\n  background: white;\n  position: absolute;\n  top: 50px;\n  left: 70px;\n  box-shadow: 0px 1px 10px 4px rgba(0, 0, 0, 0.18);\n  z-index: 999;\n}\n\n.submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: black !important;\n  margin-right: 10px !important;\n  width: 258px !important;\n}\n\n.submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 15px;\n  margin-bottom: 10px;\n}\n\n.submenu[_ngcontent-%COMP%]:hover   .submenu[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.submenu[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.search-results[_ngcontent-%COMP%] {\n  width: 570px;\n  padding: 10px;\n  background: white;\n  position: absolute;\n  z-index: 999;\n  top: 78px;\n  right: 10px;\n  box-shadow: -1px 6px 5px 3px rgba(0, 0, 0, 0.09);\n}\n\n.search-results[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #b8b8b8;\n}\n\n.results[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n}\n\n.results[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  border: 1px solid #b8b8b8;\n  padding: 10px;\n  position: relative;\n}\n\n.results[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 115px;\n  height: 100px;\n  margin-right: 100px;\n  margin-top: 7px;\n}\n\n.results[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n}\n\n.results[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 140px;\n  bottom: 0px;\n}\n\n.results[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  margin-top: 20px;\n}\n\n.login[_ngcontent-%COMP%] {\n  margin-left: 80px !important;\n}\n\n.logout-basket[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 30px !important;\n  margin-right: 0 !important;\n  margin-left: 5px !important;\n}\n\n.logout-basket[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: #0052bf;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51L0M6XFxVc2Vyc1xcRGpvbGVQQ1xcRGVza3RvcFxcZW1waXJlX29mX2dhbWVzXFxFbXBpcmVPZkdhbWVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtZW51XFxtZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FDREo7O0FESUE7RUFDRyxTQUFBO0VBQ0EsVUFBQTtBQ0RIOztBRElBO0VBQ0ksV0FBQTtFQUNBLG1CQWRTO0VBZVQsYUFBQTtBQ0RKOztBRElBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0RKOztBREdBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUNBSjs7QURJSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDRlI7O0FETUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNISjs7QURLSTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FDSFI7O0FES0k7RUFDSSxpQkFBQTtFQUNBLGNBdkRPO0VBd0RQLGVBQUE7RUFDQSxlQUFBO0FDSFI7O0FETUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0hKOztBREtJO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0VBQ0QsWUFBQTtBQ0hQOztBRE1RO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNKWjs7QURLWTtFQUNJLGNBQUE7QUNIaEI7O0FES1k7RUFDSSxjQUFBO0FDSGhCOztBRE1VO0VBQ0ksaUJBQUE7RUFDQSxjQS9GQztBQzJGZjs7QURVQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNQSjs7QURTSTtFQUNJLFNBQUE7RUFDQSxZQUFBO0VBRUEsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNUUjs7QURZSTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDVlI7O0FEWUk7RUFDSSxpQkFBQTtFQUNBLGNBdklPO0FDNkhmOztBRGFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNWSjs7QURhQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBR0osZ0RBQUE7RUFDQSxZQUFBO0FDVkE7O0FEV0k7RUFDSSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7QUNUUjs7QURZUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDVlo7O0FEZUk7RUFDSSxjQUFBO0FDYlI7O0FEZUk7RUFDSSxTQUFBO0FDYlI7O0FEZ0JBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBR0osZ0RBQUE7QUNiQTs7QURnQkk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ2RSOztBRGlCQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDZEo7O0FEa0JJO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ2hCUjs7QURtQlE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBRUEsZUFBQTtBQ2xCWjs7QURxQlE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNuQlo7O0FEd0JJO0VBQ0csa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ3RCUDs7QUR1QkE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDckJKOztBRDBCQTtFQUVJLDRCQUFBO0FDeEJKOztBRDBCQTtFQUNJLGVBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7QUN2Qko7O0FEeUJJO0VBQ0EsY0FBQTtBQ3ZCSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGhlZGVyLWNvbG9yOiMxNDE0MTQ7XHJcbiRwcmltYXJ5LWNvbG9yOiM1NDk1ZWI7XHJcbmJvZHl7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uaGVkZXJ7XHJcbiAgIG1hcmdpbjogMDtcclxuICAgcGFkZGluZzogMDtcclxuICAgIFxyXG59XHJcbi5oZWRlci13cmFwZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6JGhlZGVyLWNvbG9yIDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBcclxufVxyXG4uc3VibWVudS1jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTlweDtcclxuICAgIGJhY2tncm91bmQ6ICMzYjM4Mzg7XHJcbn1cclxuLmxvZ28tY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgICAgIGhlaWdodDogOTVweDtcclxuICAgICAgIFxyXG4gICAgfVxyXG59XHJcbi5zZWFyY2h7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHggO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGlucHV0e1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHByaW1hcnktY29sb3I7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBjb2xvcjogIzYyOWZmMDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6MDtcclxuICAgIH1cclxuICAgIGl7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuLm5hdmJhcntcclxuICAgIHdpZHRoOiA3MDBweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcblxyXG4gICAgdWx7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgXHJcblxyXG4gICAgICAgIGxpe1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgICAgd2lkdGg6IDEyNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNkNmQ2ZDY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpob3ZlciAuc3VibWVudXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaXtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ubG9naW5ib3h7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB3aWR0aDogMzQwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcblxyXG4gICAgcHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzNXB4O1xyXG5cclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogMTUzcHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5kYXJrTW9kZXtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE3cHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIGl7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgfVxyXG59XHJcbi5saW5rLWFjdGl2ZXtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBcclxufVxyXG4uc3VibWVudXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICB3aWR0aDogMTEwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwcHg7XHJcbiAgICBsZWZ0OiA3MHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMXB4IDEwcHggNHB4IHJnYmEoMCwwLDAsMC4xOCk7XHJcbi1tb3otYm94LXNoYWRvdzogMHB4IDFweCAxMHB4IDRweCByZ2JhKDAsMCwwLDAuMTgpO1xyXG5ib3gtc2hhZG93OiAwcHggMXB4IDEwcHggNHB4IHJnYmEoMCwwLDAsMC4xOCk7XHJcbnotaW5kZXg6IDk5OTtcclxuICAgIGxpe1xyXG4gICAgICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiAyNThweCAhaW1wb3J0YW50O1xyXG4gICAgICAgXHJcblxyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICB9XHJcbiAgICAmOmhvdmVyIC5zdWJtZW51IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIGhye1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxufVxyXG4uc2VhcmNoLXJlc3VsdHN7XHJcbiAgICB3aWR0aDogNTcwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4Ojk5OTtcclxuICAgIHRvcDogNzhweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDZweCA1cHggM3B4IHJnYmEoMCwwLDAsMC4wOSk7XHJcbi1tb3otYm94LXNoYWRvdzogLTFweCA2cHggNXB4IDNweCByZ2JhKDAsMCwwLDAuMDkpO1xyXG5ib3gtc2hhZG93OiAtMXB4IDZweCA1cHggM3B4IHJnYmEoMCwwLDAsMC4wOSk7XHJcblxyXG4gICAgXHJcbiAgICBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICBjb2xvcjogI2I4YjhiODtcclxuICAgIH1cclxufVxyXG4ucmVzdWx0c3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIFxyXG4gIFxyXG5cclxuICAgIC5wcm9kdWN0e1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2I4YjhiODtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgXHJcblxyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgd2lkdGg6IDExNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnByaWNle1xyXG4gICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgbGVmdDogMTQwcHg7XHJcbiAgICAgICBib3R0b206IDBweDtcclxucHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4gICAgfVxyXG59XHJcbi5sb2dpbntcclxuICAgXHJcbiAgICBtYXJnaW4tbGVmdDogODBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5sb2dvdXQtYmFza2V0e1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDMwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweCAgIWltcG9ydGFudDtcclxuaXtcclxuICAgICY6aG92ZXJ7IFxyXG4gICAgY29sb3I6ICMwMDUyYmY7XHJcbn1cclxufVxyXG59XHJcblxyXG4iLCJib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uaGVkZXIge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5oZWRlci13cmFwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzE0MTQxNDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLnN1Ym1lbnUtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTlweDtcbiAgYmFja2dyb3VuZDogIzNiMzgzODtcbn1cblxuLmxvZ28tY29udGFpbmVyIHtcbiAgd2lkdGg6IDQwJTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4ubG9nby1jb250YWluZXIgaW1nIHtcbiAgd2lkdGg6IDM1MHB4O1xuICBoZWlnaHQ6IDk1cHg7XG59XG5cbi5zZWFyY2gge1xuICB3aWR0aDogMjUlO1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNlYXJjaCBpbnB1dCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHdpZHRoOiAyNTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzU0OTVlYjtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICM2MjlmZjA7XG4gIGhlaWdodDogMzBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiAwO1xufVxuLnNlYXJjaCBpIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiAjNTQ5NWViO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5hdmJhciB7XG4gIHdpZHRoOiA3MDBweDtcbiAgcGFkZGluZzogNXB4O1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG4ubmF2YmFyIHVsIHtcbiAgbWFyZ2luOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAzcHg7XG59XG4ubmF2YmFyIHVsIGxpIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHdpZHRoOiAxMjVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5uYXZiYXIgdWwgbGk6aG92ZXIge1xuICBjb2xvcjogI2Q2ZDZkNjtcbn1cbi5uYXZiYXIgdWwgbGk6aG92ZXIgLnN1Ym1lbnUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5uYXZiYXIgdWwgbGkgaSB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBjb2xvcjogIzU0OTVlYjtcbn1cblxuLmxvZ2luYm94IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogMzQwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbi5sb2dpbmJveCBwIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDM1cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTUzcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5sb2dpbmJveCAuZGFya01vZGUge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICB3aWR0aDogMzVweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDE3cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmxvZ2luYm94IGkge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgY29sb3I6ICM1NDk1ZWI7XG59XG5cbi5saW5rLWFjdGl2ZSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnN1Ym1lbnUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBhZGRpbmc6IDNweDtcbiAgd2lkdGg6IDExMDBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MHB4O1xuICBsZWZ0OiA3MHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxcHggMTBweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMXB4IDEwcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggMTBweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbiAgei1pbmRleDogOTk5O1xufVxuLnN1Ym1lbnUgbGkge1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAyNThweCAhaW1wb3J0YW50O1xufVxuLnN1Ym1lbnUgbGkgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5zdWJtZW51OmhvdmVyIC5zdWJtZW51IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uc3VibWVudSBociB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnNlYXJjaC1yZXN1bHRzIHtcbiAgd2lkdGg6IDU3MHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk7XG4gIHRvcDogNzhweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogLTFweCA2cHggNXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xuICAtbW96LWJveC1zaGFkb3c6IC0xcHggNnB4IDVweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA5KTtcbiAgYm94LXNoYWRvdzogLTFweCA2cHggNXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xufVxuLnNlYXJjaC1yZXN1bHRzIHAge1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiAjYjhiOGI4O1xufVxuXG4ucmVzdWx0cyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnJlc3VsdHMgLnByb2R1Y3Qge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjhiOGI4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucmVzdWx0cyAucHJvZHVjdCBpbWcge1xuICB3aWR0aDogMTE1cHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbi1yaWdodDogMTAwcHg7XG4gIG1hcmdpbi10b3A6IDdweDtcbn1cbi5yZXN1bHRzIC5wcm9kdWN0IHNwYW4ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ucmVzdWx0cyAucHJpY2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDE0MHB4O1xuICBib3R0b206IDBweDtcbn1cbi5yZXN1bHRzIC5wcmljZSBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmxvZ2luIHtcbiAgbWFyZ2luLWxlZnQ6IDgwcHggIWltcG9ydGFudDtcbn1cblxuLmxvZ291dC1iYXNrZXQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAzMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogNXB4ICFpbXBvcnRhbnQ7XG59XG4ubG9nb3V0LWJhc2tldCBpOmhvdmVyIHtcbiAgY29sb3I6ICMwMDUyYmY7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.scss']
            }]
    }], function () { return [{ type: src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_1__["RestApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_UserService_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/payment-methods/Order.class.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/payment-methods/Order.class.ts ***!
  \***********************************************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
class Order {
}


/***/ }),

/***/ "./src/app/components/payment-methods/payment-methods.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/payment-methods/payment-methods.component.ts ***!
  \*************************************************************************/
/*! exports provided: PaymentMethodsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentMethodsComponent", function() { return PaymentMethodsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Order_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Order.class */ "./src/app/components/payment-methods/Order.class.ts");
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var src_app_services_UserService_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/UserService.service */ "./src/app/services/UserService.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function PaymentMethodsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const payment_method_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", payment_method_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class PaymentMethodsComponent {
    constructor(restApi, userService) {
        this.restApi = restApi;
        this.userService = userService;
        this.payment_methods = [];
        this.orders = [];
        this.order = new _Order_class__WEBPACK_IMPORTED_MODULE_1__["Order"]();
    }
    ngOnInit() {
        this.getAllPaymentMethods();
        this.SaveOrders();
        console.log(this.products);
    }
    getAllPaymentMethods() {
        this.restApi.getAllPaymentMethods()
            .subscribe((response) => {
            this.payment_methods = response;
            console.log(this.payment_methods);
        });
    }
    SaveOrders() {
        for (let i = 0; i < this.products.length; i++) {
            this.order.user_id = this.userService.loggedUser.id;
            this.order.product_id = this.products[i].product_id;
            this.order.item = this.products[i].item;
            this.orders.push(this.order);
            console.log(this.order);
            this.order = new _Order_class__WEBPACK_IMPORTED_MODULE_1__["Order"]();
        }
        console.log(this.orders);
        this.restApi.saveOrdersForUser(this.orders)
            .subscribe(response => {
            console.log(response);
        });
    }
}
PaymentMethodsComponent.ɵfac = function PaymentMethodsComponent_Factory(t) { return new (t || PaymentMethodsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_UserService_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
PaymentMethodsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaymentMethodsComponent, selectors: [["app-payment-methods"]], inputs: { totalPrice: "totalPrice", products: "products" }, decls: 8, vars: 2, consts: [[1, "wrapper"], [1, "payment-methods"], [1, "heder"], ["class", "payment-method", 4, "ngFor", "ngForOf"], [1, "payment-method"], ["alt", "", 2, "width", "200px", 3, "src"]], template: function PaymentMethodsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "EU");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PaymentMethodsComponent_div_7_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total price: ", ctx.totalPrice, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.payment_methods);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 400px;\n}\n\n.payment-methods[_ngcontent-%COMP%] {\n  width: 900px;\n  margin: auto;\n  overflow: hidden;\n  border: 1px solid #e0e0e0;\n  margin-top: 50px;\n}\n\n.payment-method[_ngcontent-%COMP%] {\n  width: 250px;\n  float: left;\n  margin-right: 30px;\n  text-align: center;\n  margin-left: 19px;\n  cursor: pointer;\n}\n\n.payment-method[_ngcontent-%COMP%]:hover {\n  background: #d6d6d6;\n}\n\n.heder[_ngcontent-%COMP%] {\n  background: #e0e0e0;\n  height: 70px;\n  padding-top: 20px;\n}\n\n.heder[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 25px;\n  padding-left: 20px;\n  font-weight: 700;\n}\n\n.heder[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXltZW50LW1ldGhvZHMvQzpcXFVzZXJzXFxEam9sZVBDXFxEZXNrdG9wXFxlbXBpcmVfb2ZfZ2FtZXNcXEVtcGlyZU9mR2FtZXMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBheW1lbnQtbWV0aG9kc1xccGF5bWVudC1tZXRob2RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3BheW1lbnQtbWV0aG9kcy9wYXltZW50LW1ldGhvZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ0NKOztBRENBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNGLGlCQUFBO0VBQ0MsZUFBQTtBQ0dIOztBREZHO0VBQ0ksbUJBQUE7QUNJUDs7QUREQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDSUo7O0FESEk7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0tOOztBREpNO0VBQ0ksZUFBQTtFQUNKLGdCQUFBO0FDTU4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BheW1lbnQtbWV0aG9kcy9wYXltZW50LW1ldGhvZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxufVxyXG4ucGF5bWVudC1tZXRob2Rze1xyXG4gICAgd2lkdGg6IDkwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTAgO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG4ucGF5bWVudC1tZXRob2R7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogMTlweDtcclxuICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAmOmhvdmVye1xyXG4gICAgICAgYmFja2dyb3VuZDogI2Q2ZDZkNjtcclxuICAgfVxyXG59XHJcbi5oZWRlcntcclxuICAgIGJhY2tncm91bmQ6ICNlMGUwZTA7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBzcGFue1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbn0iLCIud3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwMHB4O1xufVxuXG4ucGF5bWVudC1tZXRob2RzIHtcbiAgd2lkdGg6IDkwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5wYXltZW50LW1ldGhvZCB7XG4gIHdpZHRoOiAyNTBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMTlweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBheW1lbnQtbWV0aG9kOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2Q2ZDZkNjtcbn1cblxuLmhlZGVyIHtcbiAgYmFja2dyb3VuZDogI2UwZTBlMDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbi5oZWRlciBwIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4uaGVkZXIgcCBzcGFuIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentMethodsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-payment-methods',
                templateUrl: './payment-methods.component.html',
                styleUrls: ['./payment-methods.component.scss']
            }]
    }], function () { return [{ type: src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"] }, { type: src_app_services_UserService_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }]; }, { totalPrice: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], products: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/product-item/Basket.class.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/product-item/Basket.class.ts ***!
  \*********************************************************/
/*! exports provided: Basket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Basket", function() { return Basket; });
class Basket {
}


/***/ }),

/***/ "./src/app/components/product-item/Commentary.class.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/product-item/Commentary.class.ts ***!
  \*************************************************************/
/*! exports provided: Commentary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Commentary", function() { return Commentary; });
class Commentary {
}


/***/ }),

/***/ "./src/app/components/product-item/product-item.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/product-item/product-item.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProductItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductItemComponent", function() { return ProductItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _home_Product_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home/Product.class */ "./src/app/components/home/Product.class.ts");
/* harmony import */ var _Commentary_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Commentary.class */ "./src/app/components/product-item/Commentary.class.ts");
/* harmony import */ var _Basket_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Basket.class */ "./src/app/components/product-item/Basket.class.ts");
/* harmony import */ var src_app_services_CommonService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/CommonService */ "./src/app/services/CommonService.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var src_app_services_UserService_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/UserService.service */ "./src/app/services/UserService.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");












function ProductItemComponent_button_40_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductItemComponent_button_40_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.showTheArea(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductItemComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r5.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", comment_r5.comment, " ");
} }
function ProductItemComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "textarea", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductItemComponent_div_43_Template_textarea_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.comment.comment = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductItemComponent_div_43_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.saveComment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductItemComponent_div_43_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.hideTheArea(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.comment.comment);
} }
class ProductItemComponent {
    constructor(commonService, sanitizer, restApi, userService, router) {
        this.commonService = commonService;
        this.sanitizer = sanitizer;
        this.restApi = restApi;
        this.userService = userService;
        this.router = router;
        this.product = new _home_Product_class__WEBPACK_IMPORTED_MODULE_1__["Product"]();
        this.commentaries = [];
        this.isHiddenArea = true;
        this.comment = new _Commentary_class__WEBPACK_IMPORTED_MODULE_2__["Commentary"]();
        this.basket = new _Basket_class__WEBPACK_IMPORTED_MODULE_3__["Basket"]();
    }
    ngOnInit() {
        this.getAllCommentaries();
    }
    getAllCommentaries() {
        this.product = this.commonService.product;
        this.restApi.getAllCommentaries(this.product.id)
            .subscribe((response) => {
            this.commentaries = response;
        });
    }
    showTheArea() {
        if (this.isHiddenArea) {
            this.isHiddenArea = false;
        }
    }
    hideTheArea() {
        if (!this.isHiddenArea) {
            this.isHiddenArea = true;
        }
    }
    saveComment() {
        this.comment.product_id = this.commonService.product.id;
        this.comment.user_id = this.userService.loggedUser.id;
        this.restApi.insertComment(this.comment)
            .subscribe(response => {
            console.log(response);
            this.getAllCommentaries();
        });
    }
    insertInBasket() {
        this.basket.totalPrice = this.commonService.product.price;
        this.basket.product_id = this.commonService.product.id;
        this.basket.user_id = this.userService.loggedUser.id;
        this.restApi.insertInBasket(this.basket)
            .subscribe(response => {
            this.router.navigateByUrl('basket');
        });
    }
}
ProductItemComponent.ɵfac = function ProductItemComponent_Factory(t) { return new (t || ProductItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_CommonService__WEBPACK_IMPORTED_MODULE_4__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_6__["RestApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_UserService_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
ProductItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductItemComponent, selectors: [["app-product-item"]], decls: 44, vars: 14, consts: [[1, "wrapper"], [1, "heder-product"], [1, "image"], ["alt", "", 2, "width", "230px", "height", "350px", 3, "src"], [1, "info"], [1, "heder-info"], ["alt", "", 2, "width", "20px", 3, "src"], [1, "title"], [1, "description"], [1, "price"], [1, "product-payment"], [1, "product-price"], [2, "text-align", "left"], [3, "click"], [1, "video"], ["width", "660", "height", "435", "frameborder", "0", "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 3, "src"], ["class", "addComment", 3, "click", 4, "ngIf"], [1, "commentaries"], ["class", "commentary", 4, "ngFor", "ngForOf"], ["class", "comment", 4, "ngIf"], [1, "addComment", 3, "click"], [1, "commentary"], [1, "user-image"], ["src", "https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg", "alt", ""], [1, "text"], [1, "comment"], ["name", "", "id", "", "cols", "120", "rows", "5", "placeholder", "Enter a comment", 3, "ngModel", "ngModelChange"], [1, "buttons"]], template: function ProductItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Platform: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Company:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "In stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductItemComponent_Template_button_click_33_listener() { return ctx.insertInBasket(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Add Basket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "iframe", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ProductItemComponent_button_40_Template, 2, 0, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ProductItemComponent_div_42_Template, 7, 2, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ProductItemComponent_div_43_Template, 7, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.commonService.product.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Region: ", ctx.commonService.product.region, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.commonService.product.platformLogo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.commonService.product.platformName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.commonService.product.companyLogo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.commonService.product.companyName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.commonService.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.commonService.product.description, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.commonService.product.price, "EU");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.commonService.product.name, " Trailer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.sanitizer.bypassSecurityTrustResourceUrl(ctx.commonService.product.video), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userService.loggedUser.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.commentaries);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isHiddenArea);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1600px;\n}\n\n.heder-product[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px;\n  border-bottom: 1px solid #e0e0e0;\n  overflow: hidden;\n}\n\n.image[_ngcontent-%COMP%] {\n  float: left;\n  width: 230px;\n  height: 350px;\n  margin-right: 20px;\n}\n\n.info[_ngcontent-%COMP%] {\n  width: 550px;\n  height: 350px;\n  float: left;\n}\n\n.heder-info[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 5px;\n}\n\n.heder-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.heder-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  float: left;\n  list-style-type: none;\n  text-decoration: none;\n  margin-right: 20px;\n  padding-right: 10px;\n  border-right: 1px solid #e0e0e0;\n  color: #d6d6d6;\n}\n\n.title[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px;\n  margin-bottom: 40px;\n}\n\n.title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.title[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n}\n\n.title[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.price[_ngcontent-%COMP%] {\n  width: 420px;\n  float: right;\n  padding: 20px;\n}\n\n.product-payment[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 120px;\n  border: 1px solid #e0e0e0;\n  padding: 15px;\n}\n\n.product-payment[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 600;\n  margin: 0;\n}\n\n.product-payment[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  width: 200px;\n  height: 70px;\n  font-size: 22px;\n  color: white;\n  border: none;\n  outline: none;\n  background-color: #5495eb;\n}\n\n.product-payment[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #0052bf;\n}\n\n.product-price[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  width: 100px;\n  float: left;\n  margin-right: 30px;\n}\n\n.video[_ngcontent-%COMP%] {\n  width: 700px;\n  padding: 20px;\n  margin: auto;\n}\n\n.video[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n.commentaries[_ngcontent-%COMP%] {\n  width: 940px;\n  padding: 20px;\n  margin: auto;\n  overflow: hidden;\n  border: 1px solid #e0e0e0;\n}\n\n.commentary[_ngcontent-%COMP%] {\n  width: 420px;\n  padding: 10px;\n  float: left;\n  border: 1px solid #e0e0e0;\n  margin-right: 20px;\n  margin-bottom: 10px;\n}\n\n.user-image[_ngcontent-%COMP%] {\n  width: 30%;\n  float: left;\n  margin-right: 10px;\n}\n\n.user-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 85px;\n}\n\n.text[_ngcontent-%COMP%] {\n  width: 65%;\n  float: right;\n}\n\n.text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-bottom: 10px;\n  font-weight: 600;\n}\n\n.addComment[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  width: 200px;\n  height: 70px;\n  font-size: 22px;\n  color: white;\n  border: none;\n  outline: none;\n  margin-left: 20px;\n  background-color: #5495eb;\n}\n\n.addComment[_ngcontent-%COMP%]:hover {\n  background-color: #0052bf;\n}\n\n.comment[_ngcontent-%COMP%] {\n  width: 100%;\n  clear: both;\n}\n\n.comment[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-right: 20px;\n  text-align: right;\n}\n\n.comment[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 90px;\n  font-size: 22px;\n  border-radius: 10px;\n  color: white;\n  border: none;\n  outline: none;\n  margin-left: 20px;\n  background-color: #5495eb;\n}\n\n.comment[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #0052bf;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LWl0ZW0vQzpcXFVzZXJzXFxEam9sZVBDXFxEZXNrdG9wXFxlbXBpcmVfb2ZfZ2FtZXNcXEVtcGlyZU9mR2FtZXMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHByb2R1Y3QtaXRlbVxccHJvZHVjdC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3QtaXRlbS9wcm9kdWN0LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0dGOztBRENBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDRUo7O0FEQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0dKOztBRERJO0VBQ0ksV0FBQTtBQ0dSOztBREZRO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQUFBO0FDSVo7O0FEQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDR0o7O0FERkk7RUFDSSxTQUFBO0FDSVI7O0FERkk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ0lSOztBREZRO0VBQ08sU0FBQTtBQ0lmOztBREFBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDR0o7O0FEQUE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUNHSjs7QURGSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUNJUjs7QURDSTtFQUNHLG1CQUFBO0VBQ0MsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUNDUjs7QURBUTtFQUNJLHlCQUFBO0FDRVo7O0FER0E7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ0NSOztBREVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUk7RUFDSSxZQUFBO0VBQ0QsWUFBQTtBQ0VQOztBREVBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUNDSjs7QURBSTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0VSOztBRENBO0VBQ0ksbUJBQUE7RUFDQyxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FDRUw7O0FEREs7RUFDSSx5QkFBQTtBQ0dUOztBREFJO0VBQ0ksV0FBQTtFQUVBLFdBQUE7QUNFUjs7QUREUTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDR1o7O0FERFk7RUFDQyxXQUFBO0VBQ0csZUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ0doQjs7QURGZ0I7RUFDSSx5QkFBQTtBQ0lwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC1pdGVtL3Byb2R1Y3QtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE2MDBweDtcclxufVxyXG4uaGVkZXItcHJvZHVjdHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGUwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uaW1hZ2V7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDIzMHB4O1xyXG4gIGhlaWdodDogMzUwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG5cclxufVxyXG5cclxuLmluZm97XHJcbiAgICB3aWR0aDogNTUwcHg7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLmhlZGVyLWluZm97XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuXHJcbiAgICB1bHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBsaXtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlMGUwZTAgO1xyXG4gICAgICAgICAgICBjb2xvcjogI2Q2ZDZkNjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLnRpdGxle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOjIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgaDN7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgLmRlc2NyaXB0aW9ue1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaDR7XHJcbiAgICAgICAgICAgICAgIG1hcmdpbjogMDsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5wcmljZXtcclxuICAgIHdpZHRoOjQyMHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIFxyXG59XHJcbi5wcm9kdWN0LXBheW1lbnR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDEyMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMCA7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgcHtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICBcclxuXHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIGJ1dHRvbntcclxuICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1NDk1ZWI7XHJcbiAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTJiZjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgIFxyXG59XHJcbi5wcm9kdWN0LXByaWNle1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbn1cclxuLnZpZGVve1xyXG4gICAgd2lkdGg6IDcwMHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgXHJcbiAgICBoMntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxufVxyXG4uY29tbWVudGFyaWVze1xyXG4gICAgd2lkdGg6IDk0MHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwIDtcclxuXHJcbn1cclxuLmNvbW1lbnRhcnl7XHJcbiAgICB3aWR0aDogNDIwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwIDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLnVzZXItaW1hZ2V7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblxyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgIGhlaWdodDogODVweDtcclxuICAgICBcclxuICAgIH1cclxufVxyXG4udGV4dHtcclxuICAgIHdpZHRoOjY1JTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbn1cclxuLmFkZENvbW1lbnR7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgIHdpZHRoOiAyMDBweDtcclxuICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTQ5NWViO1xyXG4gICAgICY6aG92ZXJ7XHJcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDUyYmY7XHJcbiAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNvbW1lbnR7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICBcclxuICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICAuYnV0dG9uc3tcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cclxuICAgICAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICAgd2lkdGg6IDkwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzU0OTVlYjtcclxuICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTJiZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICIsIi53cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTYwMHB4O1xufVxuXG4uaGVkZXItcHJvZHVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmltYWdlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAyMzBweDtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uaW5mbyB7XG4gIHdpZHRoOiA1NTBweDtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5oZWRlci1pbmZvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5oZWRlci1pbmZvIHVsIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaGVkZXItaW5mbyB1bCBsaSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTBlMGUwO1xuICBjb2xvcjogI2Q2ZDZkNjtcbn1cblxuLnRpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4udGl0bGUgaDMge1xuICBtYXJnaW46IDA7XG59XG4udGl0bGUgLmRlc2NyaXB0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4udGl0bGUgLmRlc2NyaXB0aW9uIGg0IHtcbiAgbWFyZ2luOiAwO1xufVxuXG4ucHJpY2Uge1xuICB3aWR0aDogNDIwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLnByb2R1Y3QtcGF5bWVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgcGFkZGluZzogMTVweDtcbn1cbi5wcm9kdWN0LXBheW1lbnQgcCB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luOiAwO1xufVxuLnByb2R1Y3QtcGF5bWVudCBidXR0b24ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU0OTVlYjtcbn1cbi5wcm9kdWN0LXBheW1lbnQgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTJiZjtcbn1cblxuLnByb2R1Y3QtcHJpY2Uge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG5cbi52aWRlbyB7XG4gIHdpZHRoOiA3MDBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLnZpZGVvIGgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uY29tbWVudGFyaWVzIHtcbiAgd2lkdGg6IDk0MHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG59XG5cbi5jb21tZW50YXJ5IHtcbiAgd2lkdGg6IDQyMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4udXNlci1pbWFnZSB7XG4gIHdpZHRoOiAzMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4udXNlci1pbWFnZSBpbWcge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogODVweDtcbn1cblxuLnRleHQge1xuICB3aWR0aDogNjUlO1xuICBmbG9hdDogcmlnaHQ7XG59XG4udGV4dCBwIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmFkZENvbW1lbnQge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NDk1ZWI7XG59XG4uYWRkQ29tbWVudDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDUyYmY7XG59XG5cbi5jb21tZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNsZWFyOiBib3RoO1xufVxuLmNvbW1lbnQgLmJ1dHRvbnMge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uY29tbWVudCAuYnV0dG9ucyBidXR0b24ge1xuICB3aWR0aDogOTBweDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NDk1ZWI7XG59XG4uY29tbWVudCAuYnV0dG9ucyBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1MmJmO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-item',
                templateUrl: './product-item.component.html',
                styleUrls: ['./product-item.component.scss']
            }]
    }], function () { return [{ type: src_app_services_CommonService__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }, { type: src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_6__["RestApiService"] }, { type: src_app_services_UserService_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_UserService_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/UserService.service */ "./src/app/services/UserService.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../update-profile/update-profile.component */ "./src/app/components/update-profile/update-profile.component.ts");





function ProfileComponent_div_0_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 13);
} }
function ProfileComponent_div_0_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 14);
} }
function ProfileComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileComponent_div_0_img_2_Template, 1, 0, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileComponent_div_0_img_3_Template, 1, 0, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "First Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Last Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Email: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Username: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "County: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_div_0_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.moveToUpdateUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Purchased products");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userService.loggedUser.role == "USER");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userService.loggedUser.role == "ADMIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.userService.loggedUser.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.userService.loggedUser.firstName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.userService.loggedUser.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.userService.loggedUser.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.userService.loggedUser.username, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.userService.loggedUser.country, "");
} }
function ProfileComponent_app_update_profile_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-update-profile");
} }
class ProfileComponent {
    constructor(userService) {
        this.userService = userService;
        this.isClicked = false;
    }
    ngOnInit() {
    }
    moveToUpdateUser() {
        if (this.isClicked == false) {
            this.isClicked = true;
        }
        else {
            this.isClicked = false;
        }
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_UserService_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 2, vars: 2, consts: [["class", "wrapper", 4, "ngIf"], [4, "ngIf"], [1, "wrapper"], [1, "image"], ["src", "https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg", "alt", "", 4, "ngIf"], ["src", "https://icons.iconarchive.com/icons/aha-soft/free-large-boss/512/Admin-icon.png", "alt", "", 4, "ngIf"], [1, "basicInformation"], [3, "click"], [1, "orderItems"], [1, "product"], ["src", "https://s3.gaming-cdn.com/images/products/4889/orig/assassins-creed-brotherhood-deluxe-edition-cover.jpg", "alt", ""], [1, "title"], [1, "price"], ["src", "https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg", "alt", ""], ["src", "https://icons.iconarchive.com/icons/aha-soft/free-large-boss/512/Admin-icon.png", "alt", ""]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProfileComponent_div_0_Template, 36, 8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_app_update_profile_1_Template, 1, 0, "app-update-profile", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isClicked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isClicked);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_3__["UpdateProfileComponent"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 700px;\n  overflow: hidden;\n}\n\n.image[_ngcontent-%COMP%] {\n  width: 300px;\n  padding: 20px;\n  float: left;\n  margin-right: 30px;\n}\n\n.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.image[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 22px;\n  margin-right: 60px;\n  font-weight: 500;\n}\n\n.basicInformation[_ngcontent-%COMP%] {\n  width: 400px;\n  padding: 10px;\n  padding-top: 50px;\n  float: left;\n  margin-right: 30px;\n}\n\n.basicInformation[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n  margin-bottom: 10px;\n}\n\n.basicInformation[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 50px;\n  margin-left: 170px;\n  margin-top: 70px;\n  border: none;\n  outline: none;\n  background: #5495eb;\n  color: white;\n  font-size: 22px;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  background: #0052bf;\n}\n\n.orderItems[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px;\n  margin-top: 20px;\n  height: 400px;\n  overflow: hidden;\n}\n\n.orderItems[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 30px;\n}\n\n.orderItems[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80px;\n  display: block;\n  float: left;\n}\n\n.title[_ngcontent-%COMP%] {\n  width: 400px;\n  padding: 5px;\n  float: left;\n  margin-left: 200px;\n  margin-top: 50px;\n}\n\n.price[_ngcontent-%COMP%] {\n  width: 200px;\n  padding: 5px;\n  float: right;\n  margin-top: 50px;\n}\n\n.product[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL0M6XFxVc2Vyc1xcRGpvbGVQQ1xcRGVza3RvcFxcZW1waXJlX29mX2dhbWVzXFxFbXBpcmVPZkdhbWVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwcm9maWxlXFxwcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDRUo7O0FEREk7RUFDSSxZQUFBO0FDR1I7O0FEREk7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDR1I7O0FEQ0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0VSOztBRERRO0VBQ0ksZ0JBQUE7QUNHWjs7QURDQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0VKOztBREFJO0VBQ0ksbUJBQUE7QUNFUjs7QURDQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURESTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUNHUjs7QURESTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0dSOztBREFBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0dKOztBRERBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNJSjs7QURGQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDcwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uaW1hZ2V7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYmFzaWNJbmZvcm1hdGlvbntcclxuICAgIHdpZHRoOjQwMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcblxyXG4gICAgcHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmJ1dHRvbntcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNzBweDtcclxuICAgIG1hcmdpbi10b3A6IDcwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDojNTQ5NWViIDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuXHJcbiAgICAmOmhvdmVye1xyXG4gICAgICAgIGJhY2tncm91bmQ6IzAwNTJiZiA7XHJcbiAgICB9XHJcbn1cclxuLm9yZGVySXRlbXN7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoM3tcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIH1cclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgIH1cclxufVxyXG4udGl0bGV7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1sZWZ0OjIwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG4ucHJpY2V7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcbi5wcm9kdWN0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufSIsIi53cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5pbWFnZSB7XG4gIHdpZHRoOiAzMDBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbn1cbi5pbWFnZSBpbWcge1xuICB3aWR0aDogMjAwcHg7XG59XG4uaW1hZ2UgcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDYwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5iYXNpY0luZm9ybWF0aW9uIHtcbiAgd2lkdGg6IDQwMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbn1cbi5iYXNpY0luZm9ybWF0aW9uIHAge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uYmFzaWNJbmZvcm1hdGlvbiBwIHNwYW4ge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5idXR0b24ge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDE3MHB4O1xuICBtYXJnaW4tdG9wOiA3MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICM1NDk1ZWI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzAwNTJiZjtcbn1cblxuLm9yZGVySXRlbXMge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5vcmRlckl0ZW1zIGgzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLm9yZGVySXRlbXMgaW1nIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnRpdGxlIHtcbiAgd2lkdGg6IDQwMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMjAwcHg7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5wcmljZSB7XG4gIHdpZHRoOiAyMDBweDtcbiAgcGFkZGluZzogNXB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5wcm9kdWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.scss']
            }]
    }], function () { return [{ type: src_app_services_UserService_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/registration/User.class.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/registration/User.class.ts ***!
  \*******************************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
}


/***/ }),

/***/ "./src/app/components/registration/registration.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/registration/registration.component.ts ***!
  \*******************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _User_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User.class */ "./src/app/components/registration/User.class.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_UserService_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/UserService.service */ "./src/app/services/UserService.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







class RegistrationComponent {
    constructor(router, userService, toastr) {
        this.router = router;
        this.userService = userService;
        this.toastr = toastr;
        this.user = new _User_class__WEBPACK_IMPORTED_MODULE_1__["User"]();
    }
    ngOnInit() {
        this.user = new _User_class__WEBPACK_IMPORTED_MODULE_1__["User"]();
    }
    saveUser() {
        if (this.user.firstName !== undefined && this.user.lastName !== undefined && this.user.email !== undefined
            && this.user.username !== undefined && this.user.country !== undefined && this.user.password !== undefined
            && this.user.password == this.confirmationPassword) {
            this.user.role = 'USER';
            this.userService.register(this.user)
                .subscribe(response => {
                console.log(response);
            });
            this.router.navigateByUrl('login');
            console.log(this.user);
        }
        else if (this.user.password !== this.confirmationPassword) {
            this.toastr.error('password and confiramtion password must be the same');
        }
        else {
            this.toastr.error('All fields must be filled');
        }
    }
    backToLogin() {
        this.router.navigateByUrl('login');
    }
}
RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) { return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_UserService_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistrationComponent, selectors: [["app-registration"]], decls: 14, vars: 7, consts: [[1, "login-form"], ["type", "text", "placeholder", "First Name", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Last Name", 3, "ngModel", "ngModelChange"], ["type", "email", "placeholder", "Email", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Username", 3, "ngModel", "ngModelChange"], ["type", "password", "placeholder", "Password", 3, "ngModel", "ngModelChange"], ["type", "password", "placeholder", "Confirmation Password", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Country", 3, "ngModel", "ngModelChange", "keyup.enter"], [3, "click"]], template: function RegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_3_listener($event) { return ctx.user.firstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_4_listener($event) { return ctx.user.lastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_5_listener($event) { return ctx.user.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_6_listener($event) { return ctx.user.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_7_listener($event) { return ctx.user.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_8_listener($event) { return ctx.confirmationPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_9_listener($event) { return ctx.user.country = $event; })("keyup.enter", function RegistrationComponent_Template_input_keyup_enter_9_listener() { return ctx.saveUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_10_listener() { return ctx.saveUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_12_listener() { return ctx.backToLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.confirmationPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.country);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: [".login-form[_ngcontent-%COMP%] {\n  width: 500px;\n  padding: 20px;\n  height: 650px;\n  margin: 70px auto;\n  background: #141414;\n  border: 1px solid #d6d6d6;\n  border-radius: 20px;\n  text-align: center;\n}\n.login-form[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #5495eb;\n  text-align: center;\n  margin-bottom: 30px;\n  margin-top: 30px;\n}\n.login-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 90%;\n  border: none;\n  background: none;\n  border-bottom: 2px solid #5495eb;\n  outline: none;\n  color: #d6d6d6;\n  margin-bottom: 40px;\n}\n.login-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100px;\n  outline: none;\n  border: none;\n  border-radius: 30px;\n  margin-right: 20px;\n  background: #5495eb;\n  color: #d6d6d6;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3RyYXRpb24vQzpcXFVzZXJzXFxEam9sZVBDXFxEZXNrdG9wXFxlbXBpcmVfb2ZfZ2FtZXNcXEVtcGlyZU9mR2FtZXMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHJlZ2lzdHJhdGlvblxccmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDRCxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDREg7QURHRztFQUNJLGNBYkU7RUFjRixrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNEUDtBREtHO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0hQO0FETUc7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBcENFO0VBcUNGLGNBQUE7RUFDQSxlQUFBO0FDSlAiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3ItMTojNTQ5NWViO1xyXG5cclxuLmxvZ2luLWZvcm17XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiA2NTBweDtcclxuICAgbWFyZ2luOiA3MHB4IGF1dG87XHJcbiAgIGJhY2tncm91bmQ6ICMxNDE0MTQ7XHJcbiAgIGJvcmRlcjogMXB4IHNvbGlkICNkNmQ2ZDY7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgIGg0e1xyXG4gICAgICAgY29sb3I6ICRjb2xvci0xO1xyXG4gICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgIH1cclxuICBcclxuXHJcbiAgIGlucHV0e1xyXG4gICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGNvbG9yLTEgO1xyXG4gICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgIGNvbG9yOiNkNmQ2ZDYgO1xyXG4gICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgXHJcbiAgIH1cclxuICAgYnV0dG9ue1xyXG4gICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3ItMTtcclxuICAgICAgIGNvbG9yOiAjZDZkNmQ2IDtcclxuICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgfVxyXG4gICBcclxufVxyXG5cclxuXHJcbiIsIi5sb2dpbi1mb3JtIHtcbiAgd2lkdGg6IDUwMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBoZWlnaHQ6IDY1MHB4O1xuICBtYXJnaW46IDcwcHggYXV0bztcbiAgYmFja2dyb3VuZDogIzE0MTQxNDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZDZkNjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxvZ2luLWZvcm0gaDQge1xuICBjb2xvcjogIzU0OTVlYjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLmxvZ2luLWZvcm0gaW5wdXQge1xuICB3aWR0aDogOTAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNTQ5NWViO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogI2Q2ZDZkNjtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbi5sb2dpbi1mb3JtIGJ1dHRvbiB7XG4gIHdpZHRoOiAxMDBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICM1NDk1ZWI7XG4gIGNvbG9yOiAjZDZkNmQ2O1xuICBmb250LXNpemU6IDIwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-registration',
                templateUrl: './registration.component.html',
                styleUrls: ['./registration.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_UserService_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/software/software.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/software/software.component.ts ***!
  \***********************************************************/
/*! exports provided: SoftwareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoftwareComponent", function() { return SoftwareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _games_SearchProduct_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../games/SearchProduct.class */ "./src/app/components/games/SearchProduct.class.ts");
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var src_app_services_CommonService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/CommonService */ "./src/app/services/CommonService.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function SoftwareComponent_i_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 16);
} }
function SoftwareComponent_i_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 17);
} }
function SoftwareComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SoftwareComponent_div_25_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.searchProducts.priceFrom = $event; })("keyup.enter", function SoftwareComponent_div_25_Template_input_keyup_enter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.searchSoftware(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function SoftwareComponent_div_25_Template_input_keyup_enter_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.searchSoftware(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.searchProducts.priceFrom);
} }
function SoftwareComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SoftwareComponent_div_27_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const software_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.commonService.displayProduct(software_r8.id, software_r8.category_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const software_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", software_r8.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", software_r8.price, " EU");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](software_r8.name);
} }
class SoftwareComponent {
    constructor(restApi, commonService) {
        this.restApi = restApi;
        this.commonService = commonService;
        this.collapsed = {
            area_hidden: false
        };
        this.allSoftware = [];
    }
    ngOnInit() {
        this.searchProducts = new _games_SearchProduct_class__WEBPACK_IMPORTED_MODULE_1__["SearchProduct"]();
        this.getAllSoftware();
        this.getTotalNumberOfSoftware();
    }
    isCollapsed(event) {
        const index = event.target.getAttribute('index');
        if (index == 1) {
            if (!this.collapsed.area_hidden) {
                this.collapsed.area_hidden = true;
            }
            else
                this.collapsed.area_hidden = false;
        }
    }
    getAllSoftware() {
        this.restApi.getAllSoftware()
            .subscribe((response) => {
            this.allSoftware = response;
        });
    }
    searchSoftware() {
        this.restApi.searchForSoftware(this.searchProducts)
            .subscribe((response) => {
            this.allSoftware = response;
        });
    }
    getTotalNumberOfSoftware() {
        this.restApi.getTotalNumberOfSoftware()
            .subscribe(response => {
            this.products = response[0].numberOfSoftware;
        });
    }
}
SoftwareComponent.ɵfac = function SoftwareComponent_Factory(t) { return new (t || SoftwareComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_CommonService__WEBPACK_IMPORTED_MODULE_3__["CommonService"])); };
SoftwareComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SoftwareComponent, selectors: [["app-software"]], decls: 28, vars: 6, consts: [[1, "wrapper"], [1, "title"], [1, "sort"], ["name", "", "id", "", 3, "ngModel", "ngModelChange", "change"], ["value", "Newest"], ["value", "Price-lower"], ["value", "Price highest"], [1, "category"], [1, "filters-wrapper"], [1, "filters-title", 2, "font-weight", "400"], ["index", "1", 1, "filters-title", 3, "click"], ["class", "fa fa-sort-desc", "aria-hidden", "true", 4, "ngIf"], ["class", "fa fa-sort-asc", "aria-hidden", "true", 4, "ngIf"], ["class", "price-filter", 4, "ngIf"], [1, "products-container"], ["class", "product-card", 3, "click", 4, "ngFor", "ngForOf"], ["aria-hidden", "true", 1, "fa", "fa-sort-desc"], ["aria-hidden", "true", 1, "fa", "fa-sort-asc"], [1, "price-filter"], ["type", "number", "placeholder", "FROM", 3, "ngModel", "ngModelChange", "keyup.enter"], ["type", "number", "placeholder", "TO", 3, "keyup.enter"], [1, "product-card", 3, "click"], ["alt", "", 3, "src"], [1, "price"]], template: function SoftwareComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Software ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SoftwareComponent_Template_select_ngModelChange_9_listener($event) { return ctx.searchProducts.sort = $event; })("change", function SoftwareComponent_Template_select_change_9_listener() { return ctx.searchSoftware(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Newest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Price-lower");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Price highest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Filter Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SoftwareComponent_Template_div_click_21_listener($event) { return ctx.isCollapsed($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Price ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SoftwareComponent_i_23_Template, 1, 0, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SoftwareComponent_i_24_Template, 1, 0, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SoftwareComponent_div_25_Template, 5, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, SoftwareComponent_div_27_Template, 8, 3, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(products: ", ctx.products, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchProducts.sort);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.collapsed.area_hidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.collapsed.area_hidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.collapsed.area_hidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allSoftware);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"]], styles: [".product-card[_ngcontent-%COMP%] {\n  width: 170px;\n  height: 216px;\n  position: relative;\n  float: left;\n  margin-right: 20px;\n  margin-bottom: 30px;\n}\n.product-card[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n.product-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 190px;\n}\n.product-card[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  text-align: center;\n  color: black;\n  font-size: 20px;\n}\n.price[_ngcontent-%COMP%] {\n  width: 100%;\n  position: absolute;\n  bottom: 25px;\n  font-size: 20px;\n  color: white;\n  padding-left: 10px;\n}\n.price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  padding-right: 6px;\n}\n.products-container[_ngcontent-%COMP%] {\n  width: 70%;\n  float: right;\n  background: white;\n  padding: 10px;\n}\n.wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: hidden;\n  height: 1000px;\n}\n.category[_ngcontent-%COMP%] {\n  width: 25%;\n  float: left;\n  padding: 10px;\n}\n.filters-wrapper[_ngcontent-%COMP%] {\n  width: 80%;\n  border: 1px solid #e0e0e0;\n}\n.filters-title[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border-bottom: 1px solid #e0e0e0;\n  font-weight: bold;\n  cursor: pointer;\n}\n.filters-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  float: right;\n}\n.filters-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n.filters-title[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: none;\n  font-weight: 400;\n  font-size: 18px;\n  margin-top: 15px;\n}\n.price-filter[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.price-filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 40px;\n}\n.title[_ngcontent-%COMP%] {\n  clear: both;\n  width: 100%;\n  height: 100px;\n  padding: 20px;\n}\n.title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: inline;\n}\n.sort[_ngcontent-%COMP%] {\n  float: right;\n  width: 250px;\n}\n.sort[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 200px;\n  margin-left: 10px;\n  border: 1px solid #e0e0e0;\n  outline: none;\n}\n.sort[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zb2Z0d2FyZS9DOlxcVXNlcnNcXERqb2xlUENcXERlc2t0b3BcXGVtcGlyZV9vZl9nYW1lc1xcRW1waXJlT2ZHYW1lcy9zcmNcXGFwcFxcY29tcG9uZW50c1xcc29mdHdhcmVcXHNvZnR3YXJlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NvZnR3YXJlL3NvZnR3YXJlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFFQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQUo7QURFSTtFQUNGLFlBQUE7QUNBRjtBREdJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNEUjtBREtJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0hSO0FETUE7RUFDSSxXQUFBO0VBQ0Ysa0JBQUE7RUFDQSxZQUFBO0VBRUEsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0pGO0FETUU7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUNKTjtBRFFBO0VBQ0ksVUFBQTtFQUNELFlBQUE7RUFDQyxpQkFBQTtFQUVBLGFBQUE7QUNOSjtBRFFBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0xKO0FEUUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNMSjtBRE9BO0VBQ0ksVUFBQTtFQUNBLHlCQUFBO0FDSko7QURNQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNISjtBREtJO0VBQ0ksWUFBQTtBQ0hSO0FETUk7RUFDSSxpQkFBQTtBQ0pSO0FETUk7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSlI7QURTQTtFQUNJLGFBQUE7QUNOSjtBRFFJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNOUjtBRFdBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQ1JKO0FEU0k7RUFFSSxlQUFBO0FDUlI7QURZQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDVEo7QURZSTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQ1ZSO0FEWUk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUNWUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc29mdHdhcmUvc29mdHdhcmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdC1jYXJke1xyXG4gICAgd2lkdGg6IDE3MHB4O1xyXG4gICAgaGVpZ2h0OiAyMTZweDtcclxuICAgIFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gXHJcbiAgICAmOmhvdmVye1xyXG4gIG9wYWNpdHk6IDAuNztcclxuXHJcbiAgICB9XHJcbiAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxOTBweDtcclxuICAgICAgICBcclxuICAgICAgIFxyXG4gICAgfVxyXG4gICAgaDZ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuLnByaWNle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMjVweDtcclxuIFxyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG5cclxuICBzcGFue1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDZweDtcclxuICB9XHJcbiAgXHJcbn1cclxuLnByb2R1Y3RzLWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgIGZsb2F0OiByaWdodDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi53cmFwcGVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiAxMDAwcHg7XHJcbiAgICBcclxufVxyXG4uY2F0ZWdvcnl7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5maWx0ZXJzLXdyYXBwZXJ7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcclxufVxyXG4uZmlsdGVycy10aXRsZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNlMGUwZTA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIFxyXG4gICAgaXtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgdWx7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcbiAgICBsaXtcclxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICBcclxufVxyXG4ucHJpY2UtZmlsdGVye1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgICBpbnB1dHtcclxuICAgICAgICB3aWR0aDo4MHB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuLnRpdGxle1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgaDN7XHJcbiAgICAgICBcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4uc29ydHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuXHJcblxyXG4gICAgc2VsZWN0e1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBzcGFue1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG59IiwiLnByb2R1Y3QtY2FyZCB7XG4gIHdpZHRoOiAxNzBweDtcbiAgaGVpZ2h0OiAyMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLnByb2R1Y3QtY2FyZDpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNztcbn1cbi5wcm9kdWN0LWNhcmQgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTkwcHg7XG59XG4ucHJvZHVjdC1jYXJkIGg2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnByaWNlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLnByaWNlIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDZweDtcbn1cblxuLnByb2R1Y3RzLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA3MCU7XG4gIGZsb2F0OiByaWdodDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi53cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogMTAwMHB4O1xufVxuXG4uY2F0ZWdvcnkge1xuICB3aWR0aDogMjUlO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmZpbHRlcnMtd3JhcHBlciB7XG4gIHdpZHRoOiA4MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG59XG5cbi5maWx0ZXJzLXRpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGUwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmZpbHRlcnMtdGl0bGUgaSB7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5maWx0ZXJzLXRpdGxlIHVsIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG4uZmlsdGVycy10aXRsZSBsaSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4ucHJpY2UtZmlsdGVyIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5wcmljZS1maWx0ZXIgaW5wdXQge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4udGl0bGUge1xuICBjbGVhcjogYm90aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4udGl0bGUgaDMge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5zb3J0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogMjUwcHg7XG59XG4uc29ydCBzZWxlY3Qge1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICBvdXRsaW5lOiBub25lO1xufVxuLnNvcnQgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SoftwareComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-software',
                templateUrl: './software.component.html',
                styleUrls: ['./software.component.scss']
            }]
    }], function () { return [{ type: src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"] }, { type: src_app_services_CommonService__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/update-products/update-products.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/update-products/update-products.component.ts ***!
  \*************************************************************************/
/*! exports provided: UpdateProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProductsComponent", function() { return UpdateProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class UpdateProductsComponent {
    constructor() { }
    ngOnInit() {
    }
}
UpdateProductsComponent.ɵfac = function UpdateProductsComponent_Factory(t) { return new (t || UpdateProductsComponent)(); };
UpdateProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpdateProductsComponent, selectors: [["app-update-products"]], decls: 2, vars: 0, template: function UpdateProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "update-products works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXBkYXRlLXByb2R1Y3RzL3VwZGF0ZS1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-update-products',
                templateUrl: './update-products.component.html',
                styleUrls: ['./update-products.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/update-profile/update-profile.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/update-profile/update-profile.component.ts ***!
  \***********************************************************************/
/*! exports provided: UpdateProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProfileComponent", function() { return UpdateProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _registration_User_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../registration/User.class */ "./src/app/components/registration/User.class.ts");
/* harmony import */ var src_app_services_UserService_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/UserService.service */ "./src/app/services/UserService.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







class UpdateProfileComponent {
    constructor(userService, router, toastr) {
        this.userService = userService;
        this.router = router;
        this.toastr = toastr;
        this.user = new _registration_User_class__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.users = [];
    }
    ngOnInit() {
        this.getAllUsers();
    }
    updateUser() {
        if (this.user.password || this.user.email || this.user.username && this.currentPassword) {
            for (let i = 0; i < this.users.length; i++) {
                if (this.currentPassword == this.users[i].password) {
                    if (this.confirmPassword == this.user.password) {
                        this.user.id = this.userService.loggedUser.id;
                        this.userService.updateUser(this.user)
                            .subscribe(response => {
                            console.log(response);
                            this.user = new _registration_User_class__WEBPACK_IMPORTED_MODULE_1__["User"]();
                            localStorage.removeItem('loggedUser');
                            this.router.navigateByUrl('login');
                        });
                    }
                    else {
                        this.toastr.error('Confirm the password and the password must be the same');
                    }
                }
                else if (this.currentPassword !== this.users[i].password) {
                    this.toastr.error('Must be correct current password');
                }
            }
        }
    }
    getAllUsers() {
        this.userService.getAllUsers()
            .subscribe((response) => {
            this.users = response;
        });
    }
}
UpdateProfileComponent.ɵfac = function UpdateProfileComponent_Factory(t) { return new (t || UpdateProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_UserService_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
UpdateProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpdateProfileComponent, selectors: [["app-update-profile"]], decls: 40, vars: 7, consts: [[1, "wrapper"], [1, "update-user"], ["type", "password", 3, "ngModel", "ngModelChange", "keyup.enter"], [3, "click"], ["type", "text", 3, "ngModel", "ngModelChange", "keyup.enter"]], template: function UpdateProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ACCOUNT PASSWORD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Current password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateProfileComponent_Template_input_ngModelChange_6_listener($event) { return ctx.currentPassword = $event; })("keyup.enter", function UpdateProfileComponent_Template_input_keyup_enter_6_listener() { return ctx.updateUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "New password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateProfileComponent_Template_input_ngModelChange_10_listener($event) { return ctx.user.password = $event; })("keyup.enter", function UpdateProfileComponent_Template_input_keyup_enter_10_listener() { return ctx.updateUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Confirm password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateProfileComponent_Template_input_ngModelChange_13_listener($event) { return ctx.confirmPassword = $event; })("keyup.enter", function UpdateProfileComponent_Template_input_keyup_enter_13_listener() { return ctx.updateUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateProfileComponent_Template_button_click_14_listener() { return ctx.updateUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "CHANGE PASSWORD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "ACCOUNT EMAIL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Current password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateProfileComponent_Template_input_ngModelChange_21_listener($event) { return ctx.currentPassword = $event; })("keyup.enter", function UpdateProfileComponent_Template_input_keyup_enter_21_listener() { return ctx.updateUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "New email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateProfileComponent_Template_input_ngModelChange_25_listener($event) { return ctx.user.email = $event; })("keyup.enter", function UpdateProfileComponent_Template_input_keyup_enter_25_listener() { return ctx.updateUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateProfileComponent_Template_button_click_26_listener() { return ctx.updateUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "CHANGE EMAIL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "ACCOUNT USERNAME ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Current password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateProfileComponent_Template_input_ngModelChange_33_listener($event) { return ctx.currentPassword = $event; })("keyup.enter", function UpdateProfileComponent_Template_input_keyup_enter_33_listener() { return ctx.updateUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "New username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateProfileComponent_Template_input_ngModelChange_37_listener($event) { return ctx.user.username = $event; })("keyup.enter", function UpdateProfileComponent_Template_input_keyup_enter_37_listener() { return ctx.updateUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateProfileComponent_Template_button_click_38_listener() { return ctx.updateUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "CHANGE USERNAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.confirmPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.username);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 500px;\n  overflow: hidden;\n}\n\n.update-user[_ngcontent-%COMP%] {\n  width: 400px;\n  padding: 20px;\n  float: left;\n}\n\n.update-user[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  color: #5495eb;\n}\n\n.update-user[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  width: 300px;\n}\n\n.update-user[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #5495eb;\n  font-weight: 500;\n  font-size: 20px;\n}\n\n.update-user[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 50px;\n  border: none;\n  outline: none;\n  background: #5495eb;\n  color: white;\n  font-size: 22px;\n}\n\n.update-user[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #0052bf;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91cGRhdGUtcHJvZmlsZS9DOlxcVXNlcnNcXERqb2xlUENcXERlc2t0b3BcXGVtcGlyZV9vZl9nYW1lc1xcRW1waXJlT2ZHYW1lcy9zcmNcXGFwcFxcY29tcG9uZW50c1xcdXBkYXRlLXByb2ZpbGVcXHVwZGF0ZS1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3VwZGF0ZS1wcm9maWxlL3VwZGF0ZS1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDRUo7O0FEQUk7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUNFUjs7QURBSTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtBQ0VSOztBREFJO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0VSOztBREFJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNDUjs7QURDUTtFQUNJLG1CQUFBO0FDQ1oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VwZGF0ZS1wcm9maWxlL3VwZGF0ZS1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi51cGRhdGUtdXNlcntcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuXHJcbiAgICBoNHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjNTQ5NWViO1xyXG4gICAgfVxyXG4gICAgaW5wdXR7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICB9XHJcbiAgICBzcGFue1xyXG4gICAgICAgIGNvbG9yOiAjNTQ5NWViO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIFxyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IzU0OTVlYiA7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIFxyXG4gICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IzAwNTJiZiA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLndyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnVwZGF0ZS11c2VyIHtcbiAgd2lkdGg6IDQwMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBmbG9hdDogbGVmdDtcbn1cbi51cGRhdGUtdXNlciBoNCB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGNvbG9yOiAjNTQ5NWViO1xufVxuLnVwZGF0ZS11c2VyIGlucHV0IHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgd2lkdGg6IDMwMHB4O1xufVxuLnVwZGF0ZS11c2VyIHNwYW4ge1xuICBjb2xvcjogIzU0OTVlYjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLnVwZGF0ZS11c2VyIGJ1dHRvbiB7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICM1NDk1ZWI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuLnVwZGF0ZS11c2VyIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwMDUyYmY7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-update-profile',
                templateUrl: './update-profile.component.html',
                styleUrls: ['./update-profile.component.scss']
            }]
    }], function () { return [{ type: src_app_services_UserService_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/CommonService.ts":
/*!*******************************************!*\
  !*** ./src/app/services/CommonService.ts ***!
  \*******************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_home_Product_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/home/Product.class */ "./src/app/components/home/Product.class.ts");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class CommonService {
    constructor(restApi, router) {
        this.restApi = restApi;
        this.router = router;
        this.product = new _components_home_Product_class__WEBPACK_IMPORTED_MODULE_1__["Product"]();
    }
    showProduct(mapId, category) {
        this.restApi.getProduct(mapId, category)
            .subscribe((response) => {
            this.product = response;
            this.router.navigateByUrl('product-item');
        });
    }
    displayProduct(mapId, category) {
        this.showProduct(mapId, category);
    }
}
CommonService.ɵfac = function CommonService_Factory(t) { return new (t || CommonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
CommonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommonService, factory: CommonService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/UserService.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/UserService.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _components_registration_User_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/registration/User.class */ "./src/app/components/registration/User.class.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class UserService {
    constructor(http) {
        this.http = http;
        this.serverUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].serverUrl;
    }
    register(user) {
        return this.http.post(this.serverUrl + "user/register", user);
    }
    login(user) {
        console.log(user);
        return this.http.post(this.serverUrl + "user/login", user);
    }
    get loggedUser() {
        return JSON.parse(localStorage.getItem('loggedUser')) || new _components_registration_User_class__WEBPACK_IMPORTED_MODULE_2__["User"]();
    }
    isAdminRole() {
        const user = this.loggedUser;
        return user.role === 'ADMIN' ? true : false;
    }
    updateUser(user) {
        return this.http.post(this.serverUrl + "update/user", user);
    }
    getAllUsers() {
        return this.http.get(this.serverUrl + 'all/users');
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/rest-api.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/rest-api.service.ts ***!
  \**********************************************/
/*! exports provided: RestApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestApiService", function() { return RestApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class RestApiService {
    constructor(http) {
        this.http = http;
    }
    getAllProducts() {
        return this.http.get('getAllProduct');
    }
    getAllGenres() {
        return this.http.get('all/genres');
    }
    getAllPlatforms() {
        return this.http.get('all/platforms');
    }
    getAllCategorySoftware() {
        return this.http.get('all/subcategory/software');
    }
    getAllCategoryGiftCards() {
        return this.http.get('all/subcategory/gift-cards');
    }
    getAllGames() {
        return this.http.get('all/games');
    }
    getAllSoftware() {
        return this.http.get('all/software');
    }
    getAllGiftCards() {
        return this.http.get('all/gift-cards');
    }
    getAllDevice() {
        return this.http.get('all/devices');
    }
    searchForGames(searchGames) {
        return this.http.post('games/search', searchGames);
    }
    searchForSoftware(searchSoftware) {
        return this.http.post('software/search', searchSoftware);
    }
    searchSubcategoryGiftCard(searchSubcategory) {
        return this.http.post('subcategory/gift-cards/search', searchSubcategory);
    }
    searchSubcategorySoftware(searchSubcategory) {
        return this.http.post('subcategory/software/search', searchSubcategory);
    }
    getTotalNumberOfGames() {
        return this.http.get('number/games');
    }
    getTotalNumberOfSoftware() {
        return this.http.get('number/software');
    }
    getTotalNumberOfGiftCards() {
        return this.http.get('number/gift-cards');
    }
    searchProducts(nameProduct) {
        return this.http.post('search/products', { name: nameProduct });
    }
    getProduct(id, category) {
        return this.http.post('product', { id: id, category: category });
    }
    getAllCommentaries(productId) {
        return this.http.get(`commentaries?product_id=${productId}`);
    }
    insertComment(comment) {
        return this.http.post('insert/comment', comment);
    }
    insertInBasket(basket) {
        return this.http.post('insert/in-basket', basket);
    }
    getAllProductFromBasket(userId) {
        return this.http.get(`all/product/basket?user_id=${userId}`);
    }
    getTotalNumberOfProductsInBasket(userId) {
        return this.http.get(`total_number/products/basket?user_id=${userId}`);
    }
    updateProductsInBasket(basket) {
        return this.http.post('update/poducts/basket', basket);
    }
    deleteProductsinBasket(id) {
        return this.http.delete(`delete/products/basket?id=${id}`);
    }
    getAllPaymentMethods() {
        return this.http.get('all/payment_methods');
    }
    saveOrdersForUser(order) {
        return this.http.post('save/orders', order);
    }
    getAllComments() {
        return this.http.get('all/comments');
    }
    getAllCategories() {
        return this.http.get('all/categories');
    }
}
RestApiService.ɵfac = function RestApiService_Factory(t) { return new (t || RestApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
RestApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RestApiService, factory: RestApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RestApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    serverUrl: 'http://localhost:3000/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\DjolePC\Desktop\empire_of_games\EmpireOfGames\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
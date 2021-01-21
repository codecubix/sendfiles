(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var md5_typescript__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! md5-typescript */ "./node_modules/md5-typescript/dist/index.js");
/* harmony import */ var url_search_params_polyfill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url-search-params-polyfill */ "./node_modules/url-search-params-polyfill/index.js");
/* harmony import */ var url_search_params_polyfill__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(url_search_params_polyfill__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var ApiService = /** @class */ (function () {
    function ApiService(httpClient) {
        this.httpClient = httpClient;
        this.apiURL = 'https://eser0068/XDeltaAPI/API/obt_consulta?';
        this.securityKey = '4BABAE58-49EB-46F8-BDBB-ED6A6CB7E212';
        this.downloadURL = 'https://eser0068/XDeltaAPI/API/obt_docs?_id_aplicacion=';
    }
    ApiService.prototype.loadXML = function (year, month) {
        var today = new Date().toJSON().slice(0, 10).replace(/-/g, '');
        var date = new Date();
        var nextyear = parseInt(year) + 1;
        var startDate = "01" + "/" + this.appendLeadingZeroes(eval(month)) + "/" + year;
        var endDate = "01" + "/" + this.appendLeadingZeroes(eval(month)) + "/" + nextyear;
        // let endDate =  +  this.appendLeadingZeroes(this.lastday(eval(year), eval(month))) + "/" + this.appendLeadingZeroes(eval(month))+ "/" +year;
        console.log(startDate);
        console.log(endDate);
        var xmlPost = "<?xml version=\"1.0\" encoding=\"UTF-8\" ?><PETICION><APLICACIONES><GENERAL Salida=\"XML\" maxDocs=\"10\" /><APLICACION><PARAMETROS C128=\"\" pB=\"1\" Aplicacion=\"FACTURAS\" /><CONSULTAS><CONSULTA><CAMPO valor=\"9713488\" codigo=\"C79\" /><CAMPO_DESDE valor=\"" + startDate + "\" codigo=\"C81\" /><CAMPO_HASTA valor=\"" + endDate + "\"  codigo=\"C81\" /></CONSULTA></CONSULTAS></APLICACION></APLICACIONES><PRESENTACION Orden=\"C79,C82,C81 desc\" Bookmark=\"C79,C82,C81\" Root=\"Documentos de Test\" /></PETICION>";
        var _cc = md5_typescript__WEBPACK_IMPORTED_MODULE_4__["Md5"].init(xmlPost + '#' + today + '#' + this.securityKey);
        var controlCode = this.formatStr(_cc, 2).toUpperCase();
        var body = new URLSearchParams();
        body.set('_xml', xmlPost);
        body.set('_cc', controlCode);
        return this.httpClient.post(this.apiURL, body.toString(), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Content-Type', 'application/x-www-form-urlencoded'),
            responseType: 'text'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.errorHandler));
    };
    ApiService.prototype.errorHandler = function (error) {
        if (error.status == 404 || error.status == 400) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
        }
    };
    ApiService.prototype.downloadDoc = function (appId, regId) {
        var today = new Date().toJSON().slice(0, 10).replace(/-/g, '');
        var _cc = md5_typescript__WEBPACK_IMPORTED_MODULE_4__["Md5"].init(appId + '#' + regId + '#' + today + '#' + this.securityKey);
        var controlCode = this.formatStr(_cc, 2).toUpperCase();
        var url = this.downloadURL + appId + '&_id_registro=' + regId + '&_cc=' + controlCode;
        return this.httpClient.get(url, { responseType: "blob" });
    };
    ApiService.prototype.formatStr = function (str, n) {
        var a = [], start = 0;
        while (start < str.length) {
            a.push(str.slice(start, start + n));
            start += n;
        }
        return a.join("-");
    };
    ApiService.prototype.appendLeadingZeroes = function (n) {
        if (n <= 9) {
            return "0" + n;
        }
        return n;
    };
    ApiService.prototype.lastday = function (y, m) {
        return new Date(y, m, 0).getDate();
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./invoice/invoice.component */ "./src/app/invoice/invoice.component.ts");
/* harmony import */ var _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgotpassword/forgotpassword.component */ "./src/app/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var _enterEmailForgotPassword_enterEmailForgotPassword_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enterEmailForgotPassword/enterEmailForgotPassword.component */ "./src/app/enterEmailForgotPassword/enterEmailForgotPassword.component.ts");
/* harmony import */ var _newpassword_newpassword_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./newpassword/newpassword.component */ "./src/app/newpassword/newpassword.component.ts");
/* harmony import */ var _auth_guards__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/guards */ "./src/app/auth/guards/index.ts");









var routes = [
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
        canActivate: [_auth_guards__WEBPACK_IMPORTED_MODULE_8__["AuthPublicGuard"]]
    },
    {
        path: 'invoice',
        component: _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_4__["InvoiceComponent"],
        canActivate: [_auth_guards__WEBPACK_IMPORTED_MODULE_8__["AuthProtectedGuard"]]
    },
    {
        path: 'forgotpasswordconfirm',
        component: _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_5__["ForgotpasswordComponent"],
        canActivate: [_auth_guards__WEBPACK_IMPORTED_MODULE_8__["AuthPublicGuard"]]
    },
    {
        path: 'forgotpassword',
        component: _enterEmailForgotPassword_enterEmailForgotPassword_component__WEBPACK_IMPORTED_MODULE_6__["EnterEmailForgotPasswordComponent"],
        canActivate: [_auth_guards__WEBPACK_IMPORTED_MODULE_8__["AuthPublicGuard"]]
    },
    {
        path: 'newpassword',
        component: _newpassword_newpassword_component__WEBPACK_IMPORTED_MODULE_7__["NewpasswordComponent"]
    },
    {
        path: '',
        redirectTo: '/invoice',
        pathMatch: 'full'
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                    enableTracing: true,
                    useHash: false,
                    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"],
                    scrollPositionRestoration: 'enabled',
                    anchorScrolling: 'enabled',
                    scrollOffset: [0, 70],
                } // <-- debugging purposes only
                )],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\r\n        <meta http-equiv=\"content-type\" content=\"text/html; charset=UTF-8\">\r\n        <meta charset=\"utf-8\">\r\n        <title>Portal</title>\r\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n        <link href=\"http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css\" type=\"text/css\"\r\n            rel=\"stylesheet\">\r\n        <link href=\"https://fonts.googleapis.com/css?family=Poppins&display=swap\" rel=\"stylesheet\">\r\n</head>\r\n\r\n\r\n<!-- navigation -->\r\n\r\n<div class=\"navbar navbar-expand-lg fixed-top navbar-dark transparent-primary\">\r\n    <a class=\"navbar-brand\" href=\"#\" style=\"text-decoration: none; border-bottom:none; font-size:20px\"> \r\n        <img class=\"essilor_logo\" src=\"assets/images/essilor_logo.jpeg\" alt=\"essilor\">\r\n    </a>\r\n    <!-- <a class=\"navbar-brand\" href=\"#\" style=\"text-decoration: none; border-bottom:none;\">\r\n        <img class=\"essilor_logo\" src=\"assets/images/essilor_logo.jpeg\" alt=\"essilor\"\r\n        style=\"text-decoration: none; border-bottom:none; font-size:20px\">\r\n    </a> -->\r\n    <div class=\"container\">\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\"\r\n            aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n            <ul class=\"navbar-nav mr-auto\">\r\n                <!-- <li class=\"nav-item active\">\r\n                            <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link\" href=\"#\">Features</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link\" href=\"#\">Pricing</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link\" href=\"#\">About</a>\r\n                            <button type=\"submit\" class=\"btn btn-primary\">Logout</button>\r\n                        </li> -->\r\n                        <li class=\"nav-item\">\r\n                            <h4 class=\"my-2 my-sm-0 pt-2\">Facturas</h4>\r\n                        </li>\r\n                    </ul>\r\n                    <span class=\"my-2 header-title-holder\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xl-6\"></div>\r\n                            <div class=\"col-xl-6\">\r\n                                <button type=\"button\" name=\"\" id=\"\" class=\"btn btn-primary btn-sm\"  (click)=\"Logout()\" *ngIf=\"IsLoggedIn\">Logout</button>\r\n                            </div>\r\n                        </div>\r\n                        <!-- <div>\r\n                            <button type=\"submit\" class=\"btn btn-primary float-right\">Logout</button>\r\n                        </div> -->\r\n                    </span>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- page outlet -->\r\n<router-outlet></router-outlet>\r\n\r\n<!-- footer -->\r\n<footer id=\"footer\" class=\"hidden-lg hidden-md hidden-sm hidden-xs\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-4 col-lg-4 col-md-2 col-sm-2 col-xs-2\">\r\n\r\n        </div>\r\n        <div class=\"col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-8 footer-text\">\r\n\r\n            <span class=\"\">\r\n                © 2016 Essilor España. Todos los derechos reservados\r\n                <a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"footer-link\">Aviso Legal </a>\r\n                &nbsp;\r\n                <a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"footer-link\">Condiciones de uso de la\r\n                    aplicación y política de privacidad</a>\r\n\r\n            </span>\r\n        </div>\r\n        <div class=\"col-lg-0 col-md-2 col-sm-2 col-xs-2\">\r\n\r\n        </div>\r\n    </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(authService, activeRoute, router) {
        this.authService = authService;
        this.activeRoute = activeRoute;
        this.router = router;
        this.title = 'inventory-portal-poc';
        this.IsLoggedIn = false;
    }
    AppComponent.prototype.Logout = function () {
        this.authService.logout();
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                console.log("NavigationEnd");
                console.log(e);
                _this.accessToken = JSON.parse(window.localStorage.getItem("okta-token-storage"));
                if (_this.accessToken && _this.accessToken.access_token && _this.accessToken.access_token.accessToken) {
                    _this.IsLoggedIn = true;
                }
                else {
                    _this.IsLoggedIn = false;
                }
            }
        });
        // this.subscription = this.authService.onLogout().subscribe(e => {
        //   console.log("trigger:",e);
        //   if(e == 'login'){
        //     this.IsLoggedIn =  true;
        //   } else {
        //     this.IsLoggedIn =  false;
        //   }
        // });
        // this.activeRoute.params.subscribe(routeParams => {
        //   this.accessToken = JSON.parse(window.localStorage.getItem("okta-token-storage"));
        //   if(this.accessToken && this.accessToken.access_token && this.accessToken.access_token.accessToken){
        //     this.IsLoggedIn =  true
        //   } else {
        //     this.IsLoggedIn =  false;
        //   }
        // });
        // console.log("accessToken: ", this.accessToken);
        // console.log("IsLoggedIn: ", this.IsLoggedIn);
    };
    AppComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./invoice/invoice.component */ "./src/app/invoice/invoice.component.ts");
/* harmony import */ var _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forgotpassword/forgotpassword.component */ "./src/app/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var _enterEmailForgotPassword_enterEmailForgotPassword_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./enterEmailForgotPassword/enterEmailForgotPassword.component */ "./src/app/enterEmailForgotPassword/enterEmailForgotPassword.component.ts");
/* harmony import */ var _newpassword_newpassword_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./newpassword/newpassword.component */ "./src/app/newpassword/newpassword.component.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_7__["InvoiceComponent"],
                _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_8__["ForgotpasswordComponent"],
                _newpassword_newpassword_component__WEBPACK_IMPORTED_MODULE_10__["NewpasswordComponent"],
                _enterEmailForgotPassword_enterEmailForgotPassword_component__WEBPACK_IMPORTED_MODULE_9__["EnterEmailForgotPasswordComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_11__["AuthModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_13__["CoreModule"],
            ],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["DatePipe"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_logout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/logout.component */ "./src/app/auth/components/logout.component.ts");
/* harmony import */ var _components_sso_callback_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sso-callback.component */ "./src/app/auth/components/sso-callback.component.ts");





/**
 * routes
 * @type {({path: string; component: LogoutComponent} | {path: string; component: AuthSSOCallbackComponent})[]}
 */
var routes = [
    { path: 'auth/logout', component: _components_logout_component__WEBPACK_IMPORTED_MODULE_3__["LogoutComponent"] },
    {
        path: 'auth/callback',
        component: _components_sso_callback_component__WEBPACK_IMPORTED_MODULE_4__["AuthSSOCallbackComponent"],
    },
];
/**
 * AuthRoutingModule
 */
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth.interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/auth/auth.service */ "./src/app/auth/auth.service.ts");




/**
 * AuthInterceptor
 */
var AuthInterceptor = /** @class */ (function () {
    /**
     * constructor
     * @param {AuthService} authService
     * @param {Router} router
     */
    function AuthInterceptor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    /**
     * Intercept all (Okta/Mock API) request and check if matches base API url,
     * if yes, the it will set http headers to send over the
     * access token necessary to fulfill the api requests.
     *
     * @param req HttpRequest
     */
    AuthInterceptor.prototype.setAuthenticationToken = function (req, next) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var token, reqWithAuthorization;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.getAccessToken()];
                    case 1:
                        token = _a.sent();
                        if (token) {
                            reqWithAuthorization = req.clone({
                                setHeaders: {
                                    'Content-Type': 'application/json',
                                    Accept: 'application/json',
                                    Authorization: "Bearer " + token,
                                },
                            });
                            return [2 /*return*/, reqWithAuthorization];
                        }
                        return [2 /*return*/, req];
                }
            });
        });
    };
    /**
     * Intercept all (Framedream) request and check if matches base API url,
     * if yes, the it will set http headers to send over the
     * access token necessary to fulfill the api requests.
     *
     * @param req HttpRequest
     */
    AuthInterceptor.prototype.setFdAuthenticationToken = function (req, next) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // const token = environment.fdToken;
                // // console.log('****');
                // // console.log('* framedream token => ', token);
                // // console.log('****');
                // if (token) {
                //   const reqWithAuthorization = req.clone({
                //     setHeaders: {
                //       'Content-Type': 'application/json',
                //       Accept: 'application/json',
                //       Authorization: `Bearer ${token}`,
                //     },
                //   });
                //
                //   return reqWithAuthorization;
                // }
                return [2 /*return*/, req];
            });
        });
    };
    /**
     * intercept
     * @param {HttpRequest<any>} request
     * @param {HttpHandler} next
     * @returns {Observable<HttpEvent<any>>}
     */
    AuthInterceptor.prototype.intercept = function (request, next) {
        // console.log('* AuthInterceptor *');
        // console.log('* AuthInterceptor - request.url => ', request.url);
        // console.log('* AuthInterceptor - environment.apiUrl => ', environment.apiUrl);
        // console.log('* AuthInterceptor - request.url.startsWith(environment.apiUrl) => ', request.url.startsWith(environment.apiUrl));
        // if (request.url.startsWith(environment.apiUrl)) {
        //   // console.log('****** MATCHED *******');
        //   return from(this.setAuthenticationToken(request, next)).pipe(
        //     switchMap((req: HttpRequest<any>) => next.handle(req)),
        //   );
        // } else {
        //   // console.log('****** NOT MATCHED *******');
        //   return from(this.setFdAuthenticationToken(request, next)).pipe(
        //     switchMap((req: HttpRequest<any>) => next.handle(req)),
        //   );
        // }
        return next.handle(request);
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _auth_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.interceptor */ "./src/app/auth/auth.interceptor.ts");
/* harmony import */ var _components_logout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/logout.component */ "./src/app/auth/components/logout.component.ts");
/* harmony import */ var _components_sso_callback_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sso-callback.component */ "./src/app/auth/components/sso-callback.component.ts");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/fesm5/angular-oauth2-oidc.js");








/**
 * AuthModule
 */
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_7__["OAuthModule"]],
            declarations: [_components_logout_component__WEBPACK_IMPORTED_MODULE_5__["LogoutComponent"], _components_sso_callback_component__WEBPACK_IMPORTED_MODULE_6__["AuthSSOCallbackComponent"]],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
                    useClass: _auth_interceptor__WEBPACK_IMPORTED_MODULE_4__["AuthInterceptor"],
                    multi: true,
                },
            ],
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _okta_okta_auth_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @okta/okta-auth-js */ "./node_modules/@okta/okta-auth-js/lib/browser/browserIndex.js");
/* harmony import */ var _okta_okta_auth_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_okta_okta_auth_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/fesm5/angular-oauth2-oidc.js");









var AuthService = /** @class */ (function () {
    function AuthService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.authClient = new _okta_okta_auth_js__WEBPACK_IMPORTED_MODULE_3___default.a(_env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].okta.client);
        this.authClient.tokenValidationHandler = new angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_8__["JwksValidationHandler"]();
        // Check if user has active session
        this.authClient.session
            .exists()
            // if exist, retrieve session data
            .then(function () { return _this.authClient.session.get(); })
            .tap(function (exists) {
            console.log('-----');
            console.log('- check session exists? => ', exists);
            if (exists) {
                // request tokens from session cookie
                _this.requestTokensWithoutPrompt(exists).then(function (tokens) {
                    var idToken = tokens[0].idToken;
                    var accessToken = tokens[1].accessToken;
                    _this.setTokens(tokens);
                });
            }
        })
            .then(function (session) {
            // create session timer
            _this.createSessionTimer(session.expiresAt);
        });
    }
    /**
     * Create a timer based on users current date and session expire date.
     * @param expiresAt string - Session expiring date string
     */
    AuthService.prototype.createSessionTimer = function (expiresAt) {
        if (!expiresAt)
            return;
        // Parse ISO string date
        var endDate = luxon__WEBPACK_IMPORTED_MODULE_4__["DateTime"].fromISO(expiresAt);
        // Create timer using rxjs interval
        this.sessionTimer = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function () {
            return endDate
                // Get date diff between session and user local date in minutes and seconds
                .diffNow(['hours', 'minutes', 'seconds'], {
                conversionAccuracy: 'longterm',
            })
                .toObject();
        }), 
        // tap(time => console.log(time)),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeWhile"])(function (time) {
            return time.hours >= 0 && time.minutes >= 0 && Math.floor(time.seconds) >= 0;
        }));
    };
    AuthService.prototype.getAccessToken = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var token, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.authClient.tokenManager.get('access_token')];
                    case 1:
                        token = _a.sent();
                        return [2 /*return*/, token ? token.accessToken : null];
                    case 2:
                        err_1 = _a.sent();
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get user information from Okta access token,
     * this information is necessary to Web-To-Case implementations
     * when is required to know which user had sent the case.
     */
    AuthService.prototype.getUserInfo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var token;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authClient.tokenManager.get('access_token')];
                    case 1:
                        token = _a.sent();
                        return [2 /*return*/, this.authClient.token.getUserInfo(token)];
                }
            });
        });
    };
    AuthService.prototype.login = function (_a) {
        var _this = this;
        var username = _a.username, password = _a.password;
        return this.authClient
            .signIn({ username: username, password: password })
            .then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (res.status !== 'SUCCESS') {
                    throw new Error("Need handle for " + res.status + " status");
                }
                this.subject.next("login");
                return [2 /*return*/, this.requestTokens(res.sessionToken)];
            });
        }); });
    };
    /**
     * Logout the user by clearing token manager saved tokens and
     * requesting Okta client to terminate the user session.
     */
    AuthService.prototype.logout = function () {
        console.log("loging out..");
        this.subject.next("logout");
        this.authClient.tokenManager.clear();
        this.authClient.signOut();
        this.router.navigate(['/login']);
    };
    AuthService.prototype.onLogout = function () {
        return this.subject.asObservable();
    };
    /**
     * After Login the user is necessary to retrieve the tokens used to communicate
     * with the API and Okta itself.
     *
     * This request response is an array containing the idToken and sessionToken objects,
     * that need to be saved into the Token Manager that will save in the local storage.
     *
     * @param sessionToken string
     * @param nonce string
     */
    AuthService.prototype.requestTokens = function (sessionToken) {
        return this.authClient.token.getWithRedirect({
            clientId: _env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].okta.oidc.clientId,
            responseType: ['id_token', 'token'],
            redirectUri: _env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].okta.oidc.redirectUrl,
            scopes: _env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].okta.oidc.scopes.split(' '),
            sessionToken: sessionToken,
        });
    };
    AuthService.prototype.forgotPassword = function (username) {
        console.log("entering forgot password");
        if (username) {
            var routeCtl = this.router;
            this.authClient.forgotPassword({
                username: username,
                factorType: 'EMAIL',
            })
                .then(function (transaction) {
                console.log("transaction", transaction);
                routeCtl.navigate(['/forgotpasswordconfirm']);
                // routeCtl.navigateByUrl('/forgotpasswordconfirm', { replaceUrl: true });
            })
                .catch(function (err) {
                alert("Hubo un error.");
            });
        }
        else {
            alert("Por favor introduzca su email.");
        }
    };
    AuthService.prototype.setTokens = function (tokens) {
        var idToken = tokens[0], accessToken = tokens[1];
        this.authClient.tokenManager.add('id_token', idToken);
        this.authClient.tokenManager.add('access_token', accessToken);
    };
    AuthService.prototype.parseTokensFromURL = function () {
        return this.authClient.token.parseFromUrl();
    };
    AuthService.prototype.refreshToken = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.authClient.tokenManager
                        .get('access_token')
                        .then(function (token) { return _this.authClient.token.renew(token); })
                        .then(function (token) {
                        if (!token)
                            throw new Error('Failed to refresh token');
                        _this.authClient.tokenManager.add('access_token', token);
                        return null;
                    })
                        .catch(function (err) {
                        // handle unauthorized api calls
                        if (err.name === 'AuthSdkError') {
                            _this.logout();
                        }
                        return err;
                    })];
            });
        });
    };
    /**
     * Promise to return the necessary response tokens requested
     */
    AuthService.prototype.requestTokensWithoutPrompt = function (sessionToken, nonce) {
        if (nonce === void 0) { nonce = this.nonce; }
        return this.authClient.token.getWithoutPrompt({
            clientId: _env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].okta.oidc.clientId,
            responseType: ['id_token', 'token'],
            redirectUri: window.location.origin,
            scopes: _env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].okta.oidc.scopes.split(' '),
            sessionToken: sessionToken,
            nonce: nonce,
        });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/components/logout.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/components/logout.component.ts ***!
  \*****************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");




/**
 * LogoutComponent
 */
var LogoutComponent = /** @class */ (function () {
    /**
     * constructor
     * @param {Router} router
     */
    function LogoutComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    /**
     * ngOnInit
     */
    LogoutComponent.prototype.ngOnInit = function () {
        this.authService.logout();
        this.router.navigateByUrl('');
    };
    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ecp-auth-logout',
            template: '',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/auth/components/sso-callback.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/auth/components/sso-callback.component.ts ***!
  \***********************************************************/
/*! exports provided: AuthSSOCallbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthSSOCallbackComponent", function() { return AuthSSOCallbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");





/**
 * AuthSSOCallbackComponent
 */
var AuthSSOCallbackComponent = /** @class */ (function () {
    /**
     * constructor
     * @param {AuthService} authService
     * @param vwService
     * @param {NgRedux<AppState>} redux
     * @param {Router} router
     */
    function AuthSSOCallbackComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    /**
     * ngOnInit
     */
    AuthSSOCallbackComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService
            .parseTokensFromURL()
            .then(function (tokens) {
            if (!tokens) {
                throw new Error('SSO Callback: No Tokens parsed');
            }
            _this.authService.setTokens(tokens);
            _this.router.navigateByUrl(_env_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].okta.authRedirectUrl, { replaceUrl: true });
            window.localStorage.removeItem('returnUrl');
        })
            .catch(function (err) {
            console.log('*******');
            console.log('AuthSSOCallbackComponent - LOGIN_ERROR');
            console.log('*******');
            _this.router.navigateByUrl('/auth/logout', { replaceUrl: true });
        });
    };
    AuthSSOCallbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ecp-sso-callback',
            template: "\n    <div class=\"loader\">\n      <div class=\"loader-icon\">\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n      </div>\n    </div>\n  ",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthSSOCallbackComponent);
    return AuthSSOCallbackComponent;
}());



/***/ }),

/***/ "./src/app/auth/guards/auth-protected.guard.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/guards/auth-protected.guard.ts ***!
  \*****************************************************/
/*! exports provided: AuthProtectedGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthProtectedGuard", function() { return AuthProtectedGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/auth/auth.service */ "./src/app/auth/auth.service.ts");




/**
 * AuthProtectedGuard
 */
var AuthProtectedGuard = /** @class */ (function () {
    /**
     * constructor
     * @param {Router} router
     * @param {AuthService} authService
     */
    function AuthProtectedGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    /**
     * validateUserAuthentication
     * @param {RouterStateSnapshot} state
     * @returns {Promise<boolean | UrlTree>}
     */
    AuthProtectedGuard.prototype.validateUserAuthentication = function (state) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var authed;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('* validateUserAuthentication *');
                        return [4 /*yield*/, this.authService.getAccessToken()];
                    case 1:
                        authed = _a.sent();
                        console.log('* validateUserAuthentication - authed => ', authed);
                        if (!authed) {
                            console.log('* validateUserAuthentication - DISPATCH LOGOUT *');
                            return [2 /*return*/, this.router.parseUrl('/login')];
                        }
                        return [2 /*return*/, true];
                }
            });
        });
    };
    /**
     * canActivate
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean}
     */
    AuthProtectedGuard.prototype.canActivate = function (route, state) {
        return this.validateUserAuthentication(state);
    };
    /**
     * canActivateChild
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean}
     */
    AuthProtectedGuard.prototype.canActivateChild = function (route, state) {
        return this.validateUserAuthentication(state);
    };
    AuthProtectedGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AuthProtectedGuard);
    return AuthProtectedGuard;
}());



/***/ }),

/***/ "./src/app/auth/guards/auth-public.guard.ts":
/*!**************************************************!*\
  !*** ./src/app/auth/guards/auth-public.guard.ts ***!
  \**************************************************/
/*! exports provided: AuthPublicGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPublicGuard", function() { return AuthPublicGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





/**
 * AuthPublicGuard
 */
var AuthPublicGuard = /** @class */ (function () {
    /**
     * constructor
     * @param {AuthService} authService
     * @param {Router} router
     */
    function AuthPublicGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    /**
     * validate
     * @returns {Promise<boolean | UrlTree>}
     */
    AuthPublicGuard.prototype.validate = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var authed;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.getAccessToken()];
                    case 1:
                        authed = _a.sent();
                        if (authed) {
                            return [2 /*return*/, this.router.parseUrl(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].okta.authRedirectUrl)];
                        }
                        return [2 /*return*/, true];
                }
            });
        });
    };
    /**
     * canActivate
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean}
     */
    AuthPublicGuard.prototype.canActivate = function (route, state) {
        return this.validate();
    };
    /**
     * canActivateChild
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean}
     */
    AuthPublicGuard.prototype.canActivateChild = function (route, state) {
        return this.validate();
    };
    AuthPublicGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthPublicGuard);
    return AuthPublicGuard;
}());



/***/ }),

/***/ "./src/app/auth/guards/index.ts":
/*!**************************************!*\
  !*** ./src/app/auth/guards/index.ts ***!
  \**************************************/
/*! exports provided: AuthProtectedGuard, AuthPublicGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_protected_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-protected.guard */ "./src/app/auth/guards/auth-protected.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthProtectedGuard", function() { return _auth_protected_guard__WEBPACK_IMPORTED_MODULE_0__["AuthProtectedGuard"]; });

/* harmony import */ var _auth_public_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-public.guard */ "./src/app/auth/guards/auth-public.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthPublicGuard", function() { return _auth_public_guard__WEBPACK_IMPORTED_MODULE_1__["AuthPublicGuard"]; });





/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_redux_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-redux/router */ "./node_modules/@angular-redux/router/lib/es5/src/index.js");
/* harmony import */ var _angular_redux_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var redux_observable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-observable */ "./node_modules/redux-observable/lib/esm/index.js");
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./redux */ "./src/app/core/redux/index.ts");








// import * as fromGuards from './guards';

/**
 * CoreModule
 */
var CoreModule = /** @class */ (function () {
    /**
     * constructor
     * @param {NgRedux<AppState>} ngRedux
     * @param {NgReduxRouter} ngReduxRouter
     * @param {RootEpics} rootEpics
     * @param {DevToolsExtension} devTools
     */
    function CoreModule(ngRedux, ngReduxRouter, devTools) {
        this.ngRedux = ngRedux;
        this.ngReduxRouter = ngReduxRouter;
        this.devTools = devTools;
        var epicMiddleware = Object(redux_observable__WEBPACK_IMPORTED_MODULE_7__["createEpicMiddleware"])();
        this.ngRedux.configureStore(_redux__WEBPACK_IMPORTED_MODULE_8__["rootReducer"], _redux__WEBPACK_IMPORTED_MODULE_8__["INITIAL_STATE"], [epicMiddleware], this.devTools.isEnabled()
            ? [
                this.devTools.enhancer({
                    trace: true,
                }),
            ]
            : []);
        if (this.ngReduxRouter)
            this.ngReduxRouter.initialize();
        // if (epicMiddleware) epicMiddleware.run(this.rootEpics.epics);
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["NgReduxModule"],
                _angular_redux_router__WEBPACK_IMPORTED_MODULE_1__["NgReduxRouterModule"].forRoot(),
            ],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["NgRedux"],
            _angular_redux_router__WEBPACK_IMPORTED_MODULE_1__["NgReduxRouter"],
            _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["DevToolsExtension"]])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/redux/actions/auth.actions.ts":
/*!****************************************************!*\
  !*** ./src/app/core/redux/actions/auth.actions.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/app/core/redux/actions/index.ts":
/*!*********************************************!*\
  !*** ./src/app/core/redux/actions/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.actions */ "./src/app/core/redux/actions/auth.actions.ts");
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth_actions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _auth_actions__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _auth_actions__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./src/app/core/redux/index.ts":
/*!*************************************!*\
  !*** ./src/app/core/redux/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_STATE", function() { return INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootReducer", function() { return rootReducer; });
/* harmony import */ var _angular_redux_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-redux/router */ "./node_modules/@angular-redux/router/lib/es5/src/index.js");
/* harmony import */ var _angular_redux_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./src/app/core/redux/reducers/index.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./src/app/core/redux/actions/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _actions__WEBPACK_IMPORTED_MODULE_3__) if(["INITIAL_STATE","rootReducer","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _actions__WEBPACK_IMPORTED_MODULE_3__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AUTH_INITIAL_STATE", function() { return _reducers__WEBPACK_IMPORTED_MODULE_2__["AUTH_INITIAL_STATE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return _reducers__WEBPACK_IMPORTED_MODULE_2__["authReducer"]; });




var INITIAL_STATE = {
    auth: _reducers__WEBPACK_IMPORTED_MODULE_2__["AUTH_INITIAL_STATE"],
    router: '',
};
var appReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
    auth: _reducers__WEBPACK_IMPORTED_MODULE_2__["authReducer"],
    router: _angular_redux_router__WEBPACK_IMPORTED_MODULE_0__["routerReducer"],
});
var rootReducer = function (state, action) {
    // Reset application state
    if (action.type === "[Auth] Logout" /* LOGOUT */) {
        state = INITIAL_STATE;
    }
    return appReducer(state, action);
};




/***/ }),

/***/ "./src/app/core/redux/reducers/auth.reducer.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/redux/reducers/auth.reducer.ts ***!
  \*****************************************************/
/*! exports provided: AUTH_INITIAL_STATE, authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_INITIAL_STATE", function() { return AUTH_INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/**
 * AUTH_INITIAL_STATE
 * @type {{authenticated: boolean; pending: boolean; error: null}}
 */
var AUTH_INITIAL_STATE = {
    authenticated: false,
    pending: false,
    error: null,
};
/**
 * authReducer
 * @param {AuthState} state
 * @param {AuthActions} action
 * @returns {AuthState}
 */
var authReducer = function (state, action) {
    if (state === void 0) { state = AUTH_INITIAL_STATE; }
    switch (action.type) {
        case "[Auth] Login" /* LOGIN */:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { pending: true });
        case "[Auth] Login Success" /* LOGIN_SUCCESS */:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { authenticated: true, pending: false });
        case "[Auth] Login Error" /* LOGIN_ERROR */:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { error: action.payload, authenticated: false, pending: false });
        case "[Auth] Logout" /* LOGOUT */:
            if (action.payload) {
                window.localStorage.setItem('returnUrl', action.payload);
            }
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { authenticated: false, error: null, pending: false });
        default:
            return state;
    }
};


/***/ }),

/***/ "./src/app/core/redux/reducers/index.ts":
/*!**********************************************!*\
  !*** ./src/app/core/redux/reducers/index.ts ***!
  \**********************************************/
/*! exports provided: AUTH_INITIAL_STATE, authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.reducer */ "./src/app/core/redux/reducers/auth.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AUTH_INITIAL_STATE", function() { return _auth_reducer__WEBPACK_IMPORTED_MODULE_0__["AUTH_INITIAL_STATE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return _auth_reducer__WEBPACK_IMPORTED_MODULE_0__["authReducer"]; });




/***/ }),

/***/ "./src/app/enterEmailForgotPassword/enterEmailForgotPassword.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/enterEmailForgotPassword/enterEmailForgotPassword.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background_main\">\r\n  <div class=\"container\" style=\"padding-top: 80px;\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12\">\r\n        <div class=\"card-transparent mb-4\">\r\n          <div class=\"card-body\">\r\n            <div class=\"bs-component\">\r\n                <form [formGroup]=\"forgotPasswordForm\">\r\n                  <fieldset>\r\n                    <div id=\"enterpassword\">\r\n                      <legend>¿Has olvidado tu contraseña?</legend>\r\n                      <p>\r\n                        No te preocupes, introduce el email con el que te\r\n                        registraste y te enviaremos un correo para que elijas una\r\n                        nueva contraseña.\r\n                      </p>\r\n                      <p>\r\n                        Si no lo recibieras en tu bandeja de entrada, revisa por\r\n                        favor la de Spam.\r\n                      </p>\r\n                    </div>\r\n  \r\n                    \r\n                    \r\n               \r\n                    <div class=\"form-group\">\r\n                      <label for=\"InputEmail\"></label>\r\n                          <input type=\"email\" class=\"form-control\" id=\"username\" [class.is-invalid] = \"forgotPasswordForm.get('username').invalid && forgotPasswordForm.get('username').touched\" pattern=\"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" aria-describedby=\"emailHelp\" [formControl]=\"username\" placeholder=\"Tu Email\">\r\n                          <!-- <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email\r\n                            with anyone else.</small> -->\r\n                      </div>\r\n                      <div *ngIf=\"forgotPasswordForm.get('username').invalid && forgotPasswordForm.get('username').touched\">\r\n                        <div class=\"bs-component\" *ngIf=\"(username.errors?.required) || (username.errors?.pattern)\">\r\n                          <div class=\"alert __alert-dismissible alert-danger\">\r\n                            <div class=\"row\">\r\n                              <div class=\"\" __data-dismiss=\"alert\">\r\n                              <p class=\"text-justify m-2\">Por favor ingrese su dirección de correo electrónico válida.</p>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                                <br>\r\n                    <!-- <button (click)=\"finishForgotPassword()\" class=\"btn btn-primary float-right\">\r\n                      Continuar\r\n                    </button> -->\r\n                    <!-- <button type=\"submit\" class=\"btn btn-primary float-right\">Enviar</button> -->\r\n                    <button  (click)=\"forgotpassword()\" class=\"btn btn-primary float-right\">Enviar</button>\r\n                  </fieldset>\r\n              </form>\r\n\r\n\r\n\r\n\r\n\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xl-4 col-lg-8 col-md-6\"></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/enterEmailForgotPassword/enterEmailForgotPassword.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/enterEmailForgotPassword/enterEmailForgotPassword.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudGVyRW1haWxGb3Jnb3RQYXNzd29yZC9lbnRlckVtYWlsRm9yZ290UGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/enterEmailForgotPassword/enterEmailForgotPassword.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/enterEmailForgotPassword/enterEmailForgotPassword.component.ts ***!
  \********************************************************************************/
/*! exports provided: EnterEmailForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterEmailForgotPasswordComponent", function() { return EnterEmailForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var EnterEmailForgotPasswordComponent = /** @class */ (function () {
    function EnterEmailForgotPasswordComponent(fb, router, authService) {
        this.fb = fb;
        this.router = router;
        this.authService = authService;
    }
    Object.defineProperty(EnterEmailForgotPasswordComponent.prototype, "username", {
        get: function () {
            return this.forgotPasswordForm.get('username');
        },
        enumerable: true,
        configurable: true
    });
    EnterEmailForgotPasswordComponent.prototype.ngOnInit = function () {
        //   this.forgotPasswordForm = new FormGroup({
        //     username: new FormControl()
        //  });
        this.forgotPasswordForm = this.createForm();
    };
    EnterEmailForgotPasswordComponent.prototype.createForm = function () {
        return this.fb.group({
            username: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,50}$")
                ]]
        });
    };
    EnterEmailForgotPasswordComponent.prototype.forgotpassword = function () {
        if (this.forgotPasswordForm.valid) {
            console.log("username", this.forgotPasswordForm.value.username);
            this.authService.forgotPassword(this.forgotPasswordForm.value.username);
        }
    };
    EnterEmailForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-enterEmailForgotPassword',
            template: __webpack_require__(/*! ./enterEmailForgotPassword.component.html */ "./src/app/enterEmailForgotPassword/enterEmailForgotPassword.component.html"),
            styles: [__webpack_require__(/*! ./enterEmailForgotPassword.component.scss */ "./src/app/enterEmailForgotPassword/enterEmailForgotPassword.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], EnterEmailForgotPasswordComponent);
    return EnterEmailForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.component.html":
/*!**************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background_main\">\r\n  <div class=\"container\" style=\"padding-top: 80px;\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12\">\r\n        <div class=\"card-transparent mb-4\">\r\n          <div class=\"card-body\">\r\n            <div class=\"bs-component\">\r\n              <form>\r\n                <fieldset>\r\n\r\n\r\n<!-- CHECK INBOX FOR THE FORGOT PASSWORD LINK -->\r\n                  <div id=\"checkyourinbox\">\r\n                    <legend>Revisa tu bandeja de entrada</legend>\r\n                    <p>\r\n                      Te hemos enviado un correo a la dirección especificada con\r\n                      un enlace para restablecer tu contraseña. Sigue sus\r\n                      instrucciónes y ten on cuenta que el enlace solo es vdlido\r\n                      durante 24 horas. Si no lo utilizes en ese tiempo,\r\n                      solicita uno nuevo. \r\n                      \r\n                    </p>\r\n                    <p>\r\n                        Cuando hayas restablecido tu\r\n                        contraseña vuelve aquí pare continuar.\r\n                    </p>\r\n                      <button (click)=\"backToLogin()\" class=\"btn btn-primary float-right\">\r\n                        Continuar\r\n                      </button>\r\n                  </div>\r\n<!-- CHECK INBOX FOR THE FORGOT PASSWORD LINK -->\r\n                </fieldset>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xl-4 col-lg-8 col-md-6\"></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdHBhc3N3b3JkL2ZvcmdvdHBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.component.ts":
/*!************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.component.ts ***!
  \************************************************************/
/*! exports provided: ForgotpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordComponent", function() { return ForgotpasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ForgotpasswordComponent = /** @class */ (function () {
    function ForgotpasswordComponent(router) {
        this.router = router;
    }
    ForgotpasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotpasswordComponent.prototype.backToLogin = function () {
        this.router.navigateByUrl('/login', { replaceUrl: true });
    };
    ForgotpasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgotpassword',
            template: __webpack_require__(/*! ./forgotpassword.component.html */ "./src/app/forgotpassword/forgotpassword.component.html"),
            styles: [__webpack_require__(/*! ./forgotpassword.component.scss */ "./src/app/forgotpassword/forgotpassword.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ForgotpasswordComponent);
    return ForgotpasswordComponent;
}());



/***/ }),

/***/ "./src/app/invoice/invoice.component.html":
/*!************************************************!*\
  !*** ./src/app/invoice/invoice.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background_lightblue\">\r\n  <div class=\"container\" style=\"padding-top: 80px\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-2 col-md-2 col-xs-12\"></div>\r\n      <div class=\"col-lg-8 col-md-8 col-xs-12\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-2\"></div>\r\n          <div class=\"col-md-10\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"date\"></label>\r\n                  <select\r\n                    class=\"form-control form-control-sm date_select\"\r\n                    name=\"year\"\r\n                    [(ngModel)]=\"year\"\r\n                    (change)=\"setYear($event.target.value)\"\r\n                  >\r\n                    <option value=\"2012\">2012</option>\r\n                    <option value=\"2013\">2013</option>\r\n                    <option value=\"2014\">2014</option>\r\n                    <option value=\"2015\">2015</option>\r\n                    <option value=\"2016\">2016</option>\r\n                    <option value=\"2017\">2017</option>\r\n                    <option value=\"2018\">2018</option>\r\n                    <option value=\"2019\">2019</option>\r\n                    <option value=\"2020\">2020</option>\r\n                    <option value=\"2021\">2021</option>\r\n                    <option value=\"2022\">2022</option>\r\n                    <option value=\"2023\">2023</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"date\"></label>\r\n                  <select\r\n                    class=\"form-control form-control-sm date_select\"\r\n                    [(ngModel)]=\"month\"\r\n                    name=\"month\"\r\n                    (change)=\"setMonth($event.target.value)\"\r\n                  >\r\n                    <option value=\"1\">January</option>\r\n                    <option value=\"2\">February</option>\r\n                    <option value=\"3\">March</option>\r\n                    <option value=\"4\">April</option>\r\n                    <option value=\"5\">May</option>\r\n                    <option value=\"6\">June</option>\r\n                    <option value=\"7\">July</option>\r\n                    <option value=\"8\">August</option>\r\n                    <option value=\"9\">September</option>\r\n                    <option value=\"10\">October</option>\r\n                    <option value=\"11\">November</option>\r\n                    <option value=\"12\">December</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"date_buscar_wrapper align-items-center\">\r\n                  <button\r\n                    type=\"button\"\r\n                    name=\"\"\r\n                    id=\"\"\r\n                    class=\"btn btn-primary date_buscar\"\r\n                    (click)=\"getInvoiceList(year, month)\"\r\n                  >\r\n                    Buscar\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-2\"></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-2 col-md-2 col-xs-12\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div\r\n          class=\"list-group factura_lists align-items-center\"\r\n          *ngFor=\"let file of arrFiles\"\r\n        >\r\n          <div\r\n            href=\"#\"\r\n            class=\"list-group-item list-group-item-action factura_item\"\r\n          >\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4 text-right\">\r\n                <span class=\"date_text\">\r\n                  {{ file.C81 }}\r\n                  <!-- {{ file.C81 | date: \"MM/dd/yyyy\" }} -->\r\n                </span>\r\n              </div>\r\n              <div class=\"col-md-4 text-center\">\r\n                <span class=\"factura_text\"> {{ file.C82 }}</span>\r\n              </div>\r\n              <div class=\"col-md-4 align-items-left\">\r\n                <span class=\"download_icon\">\r\n                  <a\r\n                    class=\"download_link\"\r\n                    (click)=\"download(file.Id_Aplicacion, file.Id_Registro)\"\r\n                  >\r\n                    <i class=\"fa fa-fw fa-download fa-2x\"></i>\r\n                  </a>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div\r\n          href=\"#\"\r\n          class=\"list-group-item list-group-item-action factura_item text-center\"\r\n          *ngIf=\"arrFiles.length <= 0\"\r\n        >\r\n          <span class=\"date_text\">{{ msg }}</span>\r\n          <span></span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/invoice/invoice.component.scss":
/*!************************************************!*\
  !*** ./src/app/invoice/invoice.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludm9pY2UvaW52b2ljZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/invoice/invoice.component.ts":
/*!**********************************************!*\
  !*** ./src/app/invoice/invoice.component.ts ***!
  \**********************************************/
/*! exports provided: InvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceComponent", function() { return InvoiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xml2js */ "./node_modules/xml2js/lib/xml2js.js");
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xml2js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var InvoiceComponent = /** @class */ (function () {
    function InvoiceComponent(apiService, datePipe) {
        this.apiService = apiService;
        this.datePipe = datePipe;
        this.arrFiles = [];
        this.arrFiltered = [];
    }
    InvoiceComponent.prototype.ngOnInit = function () {
    };
    InvoiceComponent.prototype.renderList = function () {
        var _this = this;
        this.apiService.loadXML(this.year, this.month).subscribe(function (data) {
            //console.log(data)
            _this.arrFiles = [];
            var result;
            var parser = xml2js__WEBPACK_IMPORTED_MODULE_3___default.a;
            parser.Parser().parseString(data, function (e, r) { result = r; });
            _this.objData = result;
            for (var documento in _this.objData) {
                for (var consulta in _this.objData[documento]) {
                    if (consulta === 'CONSULTA') {
                        for (var lista in _this.objData[documento][consulta][0]['LISTA'][0]['BOOKMARK'][0]['BOOKMARK']) {
                            for (var bookmark in _this.objData[documento][consulta][0]['LISTA'][0]['BOOKMARK'][0]['BOOKMARK'][lista]) {
                                for (var innerDocumento in _this.objData[documento][consulta][0]['LISTA'][0]['BOOKMARK'][0]['BOOKMARK'][lista][bookmark]) {
                                    var innerObj = _this.objData[documento][consulta][0]['LISTA'][0]['BOOKMARK'][0]['BOOKMARK'][lista][bookmark][innerDocumento];
                                    if (Object(util__WEBPACK_IMPORTED_MODULE_4__["isObject"])(innerObj)) {
                                        for (var val in innerObj) {
                                            for (var content in innerObj[val][0]) {
                                                var file = innerObj[val][0][content];
                                                innerObj[val][0][content].C81 = innerObj[val][0][content].C81.replace(" 00:00:00", "");
                                                _this.arrFiles.push(innerObj[val][0][content]);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (_this.arrFiles.length > 0) {
                _this.msg = "";
            }
            else {
                _this.msg = "No invoice found";
            }
        });
        console.log("this.arrFiles");
        console.log(this.arrFiles);
    };
    InvoiceComponent.prototype.setYear = function (year) {
        this.year = year;
    };
    InvoiceComponent.prototype.setMonth = function (month) {
        this.month = month;
        // this.endDate = endDate;
    };
    InvoiceComponent.prototype.getInvoiceList = function (year, month) {
        this.renderList();
    };
    InvoiceComponent.prototype.download = function (appId, regId) {
        this.apiService.downloadDoc(appId, regId).subscribe(function (result) {
            var url = window.URL.createObjectURL(result);
            window.open(url);
            console.log("download result ", result);
        });
    };
    InvoiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-download',
            template: __webpack_require__(/*! ./invoice.component.html */ "./src/app/invoice/invoice.component.html"),
            styles: [__webpack_require__(/*! ./invoice.component.scss */ "./src/app/invoice/invoice.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]])
    ], InvoiceComponent);
    return InvoiceComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background_main\">\r\n    <div class=\"container\" style=\"padding-top: 80px;\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12\">\r\n                <div class=\"card-transparent mb-4\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"bs-component\">\r\n                            <form [formGroup]=\"loginForm\" (submit)=\"startLogin()\">\r\n                                <fieldset>\r\n                                    <legend>Iniciar sesión</legend>\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"exampleInputEmail1\">Usuario</label>\r\n                                        <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                                            aria-describedby=\"emailHelp\" [formControl]=\"username\">\r\n                                        <!-- <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email\r\n                                                        with anyone else.</small> -->\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"exampleInputPassword1\">Password</label>\r\n                                        <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\"\r\n                                            [formControl]=\"password\" style=\"letter-spacing: 0.5em;\">\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <a style=\"cursor: pointer;\" (click)=\"gotoEnterPasswordInFOrgotPassword()\">¿Has olvidado tu contraseña?</a>\r\n                                    </div>\r\n\r\n                                    <div class=\"bs-component\" *ngIf=\"(error$ | async)?.message\">\r\n                                        <div class=\"alert __alert-dismissible alert-danger\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"\" __data-dismiss=\"alert\">\r\n                                                    <p class=\"text-justify m-2\">Se ha producido un error en su intento\r\n                                                        de inicio de sesión. Asegúrese de que el nombre de usuarió y la\r\n                                                        contraseña son correctos.</p>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <button type=\"submit\" class=\"btn btn-primary float-right\">Conectarme</button>\r\n                                </fieldset>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-xl-4 col-lg-8 col-md-6\"></div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _okta_okta_auth_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @okta/okta-auth-js */ "./node_modules/@okta/okta-auth-js/lib/browser/browserIndex.js");
/* harmony import */ var _okta_okta_auth_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_okta_okta_auth_js__WEBPACK_IMPORTED_MODULE_8__);









var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, authService, router, redux) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.redux = redux;
        this.authClient = new _okta_okta_auth_js__WEBPACK_IMPORTED_MODULE_8___default.a(_env_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].okta.client);
    }
    Object.defineProperty(LoginComponent.prototype, "username", {
        get: function () {
            return this.loginForm.get('username');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () {
            return this.loginForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.createForm();
    };
    LoginComponent.prototype.createForm = function () {
        return this.fb.group({
            username: [''],
            password: ['']
        });
    };
    LoginComponent.prototype.gotoEnterPasswordInFOrgotPassword = function () {
        this.router.navigateByUrl('/forgotpassword');
    };
    LoginComponent.prototype.startLogin = function () {
        var _this = this;
        if (this.loginForm.valid) {
            // check for remember me and set the localstorage
            // if (this.rememberMeFlag) {
            //   window.localStorage.setItem(
            //     'username',
            //     this.loginForm.get('username').value.toString(),
            //   );
            // }
            // this.redux.dispatch({ type: AuthActionTypes.LOGIN });
            this.authService.login(this.loginForm.value).catch(function (err) {
                console.log('*******');
                console.log('LoginFormComponent - LOGIN_ERROR');
                console.log('*******');
                _this.redux.dispatch({
                    type: "[Auth] Login Error" /* LOGIN_ERROR */,
                    payload: err,
                });
                _this.router.navigateByUrl('/');
                // this.router.navigate(['/'])
            });
        }
        return false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_5__["select"])(['auth', 'error']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"])
    ], LoginComponent.prototype, "error$", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_redux_store__WEBPACK_IMPORTED_MODULE_5__["NgRedux"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/newpassword/newpassword.component.html":
/*!********************************************************!*\
  !*** ./src/app/newpassword/newpassword.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background_main\">\r\n    <div class=\"container\" style=\"padding-top: 80px;\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12\">\r\n                <div class=\"card-transparent mb-4\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"bs-component\">\r\n                            <form>\r\n                                <fieldset>\r\n                                    <legend>Combiar contraseña</legend>\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"exampleInputPassword1\">Nueva contraseña</label>\r\n                                        <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\"\r\n                                            placeholder=\"Password\">\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"exampleInputPassword1\">Confirmar contraseña</label>\r\n                                        <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\"\r\n                                            placeholder=\"Password\">\r\n                                    </div>\r\n                                    <small>*Minimo de 6 carácteres</small>\r\n                                    <br>\r\n                                    <br>\r\n                                    <div class=\"bs-component\">\r\n                                        <div class=\"alert alert-dismissible alert-danger\" hidden>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"\" data-dismiss=\"alert\">\r\n                                                    <p class=\"text-justify m-2\">Se ha producido un error en su intento\r\n                                                        de inicio de sesión. Asegúrese de que el nombre de usuarió y la\r\n                                                        contraseña son correctos.</p>\r\n                                                        \r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n  \r\n                                    <button type=\"submit\" class=\"btn btn-primary float-right\">Combiar</button>\r\n                                </fieldset>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-xl-4 col-lg-8 col-md-6\"></div>\r\n        </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/newpassword/newpassword.component.scss":
/*!********************************************************!*\
  !*** ./src/app/newpassword/newpassword.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld3Bhc3N3b3JkL25ld3Bhc3N3b3JkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/newpassword/newpassword.component.ts":
/*!******************************************************!*\
  !*** ./src/app/newpassword/newpassword.component.ts ***!
  \******************************************************/
/*! exports provided: NewpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewpasswordComponent", function() { return NewpasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewpasswordComponent = /** @class */ (function () {
    function NewpasswordComponent() {
    }
    NewpasswordComponent.prototype.ngOnInit = function () {
    };
    NewpasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newpassword',
            template: __webpack_require__(/*! ./newpassword.component.html */ "./src/app/newpassword/newpassword.component.html"),
            styles: [__webpack_require__(/*! ./newpassword.component.scss */ "./src/app/newpassword/newpassword.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewpasswordComponent);
    return NewpasswordComponent;
}());



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
var environment = {
    production: false,
    okta: {
        client: {
            clientId: '0oaodn0uypuOQbQKl0h7',
            redirectUri: 'https://esipdev.essilorpro.es/callback',
            url: 'https://dev-377877.oktapreview.com',
            issuer: 'default',
        },
        oidc: {
            clientId: '0oaodn0uypuOQbQKl0h7',
            redirectUrl: 'https://esipdev.essilorpro.es/callback',
            issuer: 'https://dev-377877.oktapreview.com/oauth2/default',
            scopes: 'openid profile email',
            oidc: true,
        },
        authRedirectUrl: '/invoice',
    },
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\Apps\spain_invoice\Essilor Spain Portal\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
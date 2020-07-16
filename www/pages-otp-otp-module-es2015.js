(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-otp-otp-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/otp/otp.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/otp/otp.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n\t<ion-toolbar class=\"border-bottom\"  mode=\"ios\">\n\t\t<ion-title class=\"custom-title\">Verification</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div class=\"flex-box ion-padding\">\n\t\t<div>\n\t\t\t<div class=\"img-box\">\n\t\t\t\t<img src=\"assets/1.jpg\">\n\t\t\t</div>\n\t\t\t<div class=\"ion-text-center\">\n\t\t\t\t<ion-label>\n\t\t\t\t\t<h2></h2>\n\t\t\t\t\t<h3>OTP has been sent to you on your mobile number. Please enter it below</h3>\n\t\t\t\t</ion-label>\n\t\t\t</div>\n\t\t\t<ion-grid>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"3\">\n\t\t\t\t\t\t<div class=\"input-box\"><ion-input type=\"number\" value=\"5\" placeholder=\"2\"></ion-input></div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"3\">\n\t\t\t\t\t\t<div class=\"input-box\"><ion-input type=\"number\" value=\"7\" placeholder=\"2\"></ion-input></div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"3\">\n\t\t\t\t\t\t<div class=\"input-box\"><ion-input type=\"number\" value=\"2\" placeholder=\"2\"></ion-input></div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"3\">\n\t\t\t\t\t\t<div class=\"input-box\"><ion-input type=\"number\" value=\"9\" placeholder=\"2\"></ion-input></div>\n\t\t\t\t\t</ion-col>\n\n\t\t\t\t\t<ion-col size=\"12\" class=\"ion-margin-top\">\n\t\t\t\t\t\t<ion-button expand=\"full\" routerLink=\"/createdtask\">Verify</ion-button>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"12\">\n\t\t\t\t\t\t<ion-button expand=\"full\">Resend in 30 Sec</ion-button>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</ion-grid>\n\t\t</div>\n\t</div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/otp/otp-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/otp/otp-routing.module.ts ***!
  \*************************************************/
/*! exports provided: OtpPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpPageRoutingModule", function() { return OtpPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _otp_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./otp.page */ "./src/app/pages/otp/otp.page.ts");




const routes = [
    {
        path: '',
        component: _otp_page__WEBPACK_IMPORTED_MODULE_3__["OtpPage"]
    }
];
let OtpPageRoutingModule = class OtpPageRoutingModule {
};
OtpPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OtpPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/otp/otp.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/otp/otp.module.ts ***!
  \*****************************************/
/*! exports provided: OtpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpPageModule", function() { return OtpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _otp_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./otp-routing.module */ "./src/app/pages/otp/otp-routing.module.ts");
/* harmony import */ var _otp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./otp.page */ "./src/app/pages/otp/otp.page.ts");







let OtpPageModule = class OtpPageModule {
};
OtpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _otp_routing_module__WEBPACK_IMPORTED_MODULE_5__["OtpPageRoutingModule"]
        ],
        declarations: [_otp_page__WEBPACK_IMPORTED_MODULE_6__["OtpPage"]]
    })
], OtpPageModule);



/***/ }),

/***/ "./src/app/pages/otp/otp.page.scss":
/*!*****************************************!*\
  !*** ./src/app/pages/otp/otp.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".flex-box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 100%;\n}\n\n.input-box {\n  text-align: center;\n}\n\n.input-box ion-input {\n  border-bottom: 1px solid #888;\n  width: 50px;\n  height: 50px;\n  --padding-bottom:5px;\n  --padding-end:5px;\n  --padding-start:5px;\n  --padding-top:5px;\n  font-weight: 600;\n  font-size: 30px;\n}\n\n.img-box {\n  height: 200px;\n  text-align: center;\n}\n\n.img-box img {\n  height: 200px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3RwL0M6XFxVc2Vyc1xcc2l4dGhzZW5zZS1OMjZcXHRhc2ttYW5hZ2VtZW50L3NyY1xcYXBwXFxwYWdlc1xcb3RwXFxvdHAucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9vdHAvb3RwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxZQUFBO0FDQ0Q7O0FERUE7RUFDQyxrQkFBQTtBQ0NEOztBREVBO0VBQ0MsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQ0Q7O0FERUE7RUFDQyxhQUFBO0VBQ0Esa0JBQUE7QUNDRDs7QURFQTtFQUNDLGFBQUE7RUFDQSxZQUFBO0FDQ0QiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vdHAvb3RwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4LWJveHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmlucHV0LWJveHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcbi5pbnB1dC1ib3ggaW9uLWlucHV0e1xyXG5cdGJvcmRlci1ib3R0b206MXB4IHNvbGlkICM4ODg7XHJcblx0d2lkdGg6IDUwcHg7XHJcblx0aGVpZ2h0OiA1MHB4O1xyXG5cdC0tcGFkZGluZy1ib3R0b206NXB4O1xyXG5cdC0tcGFkZGluZy1lbmQ6NXB4O1xyXG5cdC0tcGFkZGluZy1zdGFydDo1cHg7XHJcblx0LS1wYWRkaW5nLXRvcDo1cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbi5pbWctYm94e1xyXG5cdGhlaWdodDogMjAwcHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaW1nLWJveCBpbWd7XHJcblx0aGVpZ2h0OiAyMDBweDtcclxuXHRtYXJnaW46IGF1dG87XHJcbn0iLCIuZmxleC1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaW5wdXQtYm94IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW5wdXQtYm94IGlvbi1pbnB1dCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjODg4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICAtLXBhZGRpbmctYm90dG9tOjVweDtcbiAgLS1wYWRkaW5nLWVuZDo1cHg7XG4gIC0tcGFkZGluZy1zdGFydDo1cHg7XG4gIC0tcGFkZGluZy10b3A6NXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5pbWctYm94IHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW1nLWJveCBpbWcge1xuICBoZWlnaHQ6IDIwMHB4O1xuICBtYXJnaW46IGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/otp/otp.page.ts":
/*!***************************************!*\
  !*** ./src/app/pages/otp/otp.page.ts ***!
  \***************************************/
/*! exports provided: OtpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpPage", function() { return OtpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OtpPage = class OtpPage {
    constructor() { }
    ngOnInit() {
    }
};
OtpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-otp',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./otp.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/otp/otp.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./otp.page.scss */ "./src/app/pages/otp/otp.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], OtpPage);



/***/ })

}]);
//# sourceMappingURL=pages-otp-otp-module-es2015.js.map
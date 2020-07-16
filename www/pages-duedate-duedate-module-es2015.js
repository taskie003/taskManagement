(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-duedate-duedate-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/duedate/duedate.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/duedate/duedate.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>duedate</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/duedate/duedate-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/duedate/duedate-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: DuedatePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuedatePageRoutingModule", function() { return DuedatePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _duedate_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./duedate.page */ "./src/app/pages/duedate/duedate.page.ts");




const routes = [
    {
        path: '',
        component: _duedate_page__WEBPACK_IMPORTED_MODULE_3__["DuedatePage"]
    }
];
let DuedatePageRoutingModule = class DuedatePageRoutingModule {
};
DuedatePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DuedatePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/duedate/duedate.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/duedate/duedate.module.ts ***!
  \*************************************************/
/*! exports provided: DuedatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuedatePageModule", function() { return DuedatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _duedate_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./duedate-routing.module */ "./src/app/pages/duedate/duedate-routing.module.ts");
/* harmony import */ var _duedate_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./duedate.page */ "./src/app/pages/duedate/duedate.page.ts");







let DuedatePageModule = class DuedatePageModule {
};
DuedatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _duedate_routing_module__WEBPACK_IMPORTED_MODULE_5__["DuedatePageRoutingModule"]
        ],
        declarations: [_duedate_page__WEBPACK_IMPORTED_MODULE_6__["DuedatePage"]]
    })
], DuedatePageModule);



/***/ }),

/***/ "./src/app/pages/duedate/duedate.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/duedate/duedate.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2R1ZWRhdGUvZHVlZGF0ZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/duedate/duedate.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/duedate/duedate.page.ts ***!
  \***********************************************/
/*! exports provided: DuedatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuedatePage", function() { return DuedatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DuedatePage = class DuedatePage {
    constructor() { }
    ngOnInit() {
    }
};
DuedatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-duedate',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duedate.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/duedate/duedate.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duedate.page.scss */ "./src/app/pages/duedate/duedate.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DuedatePage);



/***/ })

}]);
//# sourceMappingURL=pages-duedate-duedate-module-es2015.js.map
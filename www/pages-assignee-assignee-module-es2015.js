(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-assignee-assignee-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assignee/assignee.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assignee/assignee.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>assignee</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/assignee/assignee-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/assignee/assignee-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AssigneePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssigneePageRoutingModule", function() { return AssigneePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _assignee_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assignee.page */ "./src/app/pages/assignee/assignee.page.ts");




const routes = [
    {
        path: '',
        component: _assignee_page__WEBPACK_IMPORTED_MODULE_3__["AssigneePage"]
    }
];
let AssigneePageRoutingModule = class AssigneePageRoutingModule {
};
AssigneePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AssigneePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/assignee/assignee.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/assignee/assignee.module.ts ***!
  \***************************************************/
/*! exports provided: AssigneePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssigneePageModule", function() { return AssigneePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _assignee_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assignee-routing.module */ "./src/app/pages/assignee/assignee-routing.module.ts");
/* harmony import */ var _assignee_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assignee.page */ "./src/app/pages/assignee/assignee.page.ts");







let AssigneePageModule = class AssigneePageModule {
};
AssigneePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _assignee_routing_module__WEBPACK_IMPORTED_MODULE_5__["AssigneePageRoutingModule"]
        ],
        declarations: [_assignee_page__WEBPACK_IMPORTED_MODULE_6__["AssigneePage"]]
    })
], AssigneePageModule);



/***/ }),

/***/ "./src/app/pages/assignee/assignee.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/assignee/assignee.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2lnbmVlL2Fzc2lnbmVlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/assignee/assignee.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/assignee/assignee.page.ts ***!
  \*************************************************/
/*! exports provided: AssigneePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssigneePage", function() { return AssigneePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AssigneePage = class AssigneePage {
    constructor() { }
    ngOnInit() {
    }
};
AssigneePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assignee',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./assignee.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assignee/assignee.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./assignee.page.scss */ "./src/app/pages/assignee/assignee.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AssigneePage);



/***/ })

}]);
//# sourceMappingURL=pages-assignee-assignee-module-es2015.js.map
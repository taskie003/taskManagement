(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-group-group-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/group/group.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/group/group.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>group</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/group/group-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/group/group-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: GroupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupPageRoutingModule", function() { return GroupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _group_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./group.page */ "./src/app/pages/group/group.page.ts");




const routes = [
    {
        path: '',
        component: _group_page__WEBPACK_IMPORTED_MODULE_3__["GroupPage"]
    }
];
let GroupPageRoutingModule = class GroupPageRoutingModule {
};
GroupPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GroupPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/group/group.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/group/group.module.ts ***!
  \*********************************************/
/*! exports provided: GroupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupPageModule", function() { return GroupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _group_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./group-routing.module */ "./src/app/pages/group/group-routing.module.ts");
/* harmony import */ var _group_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./group.page */ "./src/app/pages/group/group.page.ts");







let GroupPageModule = class GroupPageModule {
};
GroupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _group_routing_module__WEBPACK_IMPORTED_MODULE_5__["GroupPageRoutingModule"]
        ],
        declarations: [_group_page__WEBPACK_IMPORTED_MODULE_6__["GroupPage"]]
    })
], GroupPageModule);



/***/ }),

/***/ "./src/app/pages/group/group.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/group/group.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dyb3VwL2dyb3VwLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/group/group.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/group/group.page.ts ***!
  \*******************************************/
/*! exports provided: GroupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupPage", function() { return GroupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GroupPage = class GroupPage {
    constructor() { }
    ngOnInit() {
    }
};
GroupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-group',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./group.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/group/group.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./group.page.scss */ "./src/app/pages/group/group.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], GroupPage);



/***/ })

}]);
//# sourceMappingURL=pages-group-group-module-es2015.js.map
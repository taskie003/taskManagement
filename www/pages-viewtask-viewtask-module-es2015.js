(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-viewtask-viewtask-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/viewtask/viewtask.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/viewtask/viewtask.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header  class=\"ion-no-border\">\n\t<ion-toolbar class=\"border-bottom\">\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button></ion-back-button>\n\t\t<!-- \t<ion-button (click)=\"closeform()\">\n\t\t\t\t<ion-icon name=\"close-outline\" slot=\"icon-only\"></ion-icon>\n\t\t\t</ion-button> -->\n\t\t</ion-buttons>\n\t\t<ion-title size=\"small\">View Task</ion-title>\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"moreoptions($event)\"><ion-icon name=\"ellipsis-vertical-outline\"></ion-icon></ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-item lines=\"none\">\n\t\t<ion-input value=\"Forward My Resume to HR\"></ion-input>\n\t</ion-item>\n\t\n\t<ion-list lines=\"full\">\n\t\t<ion-item detail=\"false\" >\n\t\t\t<ion-icon name=\"calendar-outline\" slot=\"start\"></ion-icon>\n\t\t\t<ion-label>\n\t\t\t\t<h3>Created on</h3>\n\t\t\t</ion-label>\n\t\t\t<ion-text style=\"font-size: 14px;\">08-03-2020</ion-text>\n\t\t</ion-item>\n\t\t<ion-item detail=\"false\" >\n\t\t\t<ion-icon name=\"grid-outline\" slot=\"start\"></ion-icon>\n\t\t\t<ion-label><h3>Category</h3></ion-label>\n\t\t\t<ion-select ok-text=\"Ok\" cancel-text=\"Cancel\" value=\"personal\">\n\t\t\t\t<ion-select-option value=\"personal\">Personal</ion-select-option>\n\t\t\t\t<ion-select-option value=\"private\">Private</ion-select-option>\n\t\t\t\t<ion-select-option value=\"public\">Public</ion-select-option>\n\t\t\t</ion-select>\n\t\t</ion-item>\n<!-- \n\t\t<ion-item detail=\"true\" (click)=\"addUser()\">\n\t\t\t<ion-icon name=\"person-circle-outline\" slot=\"start\"></ion-icon>\n\t\t\t<ion-label>\n\t\t\t\t<h3>Forward to</h3>\n\t\t\t</ion-label>\n\t\t\t<ion-label slot=\"end\">\n\t\t\t\t<h3>Sourabh Goyanka</h3>\n\t\t\t</ion-label>\n\t\t</ion-item> -->\n\t\t\n\t\t\n\t\t<ion-item detail=\"true\" >\n\t\t\t<ion-icon name=\"calendar-outline\" slot=\"start\"></ion-icon>\n\t\t\t<ion-label>\n\t\t\t\t<h3>Due Date</h3>\n\t\t\t</ion-label>\n\t\t\t<ion-datetime slot=\"end\" value=\"2020-03-16\" placeholder=\"Select Date\"></ion-datetime>\n\t\t</ion-item>\n\t\t<ion-item detail=\"true\" >\n\t\t\t<ion-icon name=\"alarm-outline\" slot=\"start\"></ion-icon>\n\t\t\t<ion-label>\n\t\t\t\t<h3>Set Reminder</h3>\n\t\t\t</ion-label>\n\t\t\t<ion-datetime slot=\"end\" display-format=\"h:mm A\" picker-format=\"h:mm A\" value=\"1990-02-19T07:43Z\"></ion-datetime>\n\t\t</ion-item>\n\t\t<!-- <ion-item detail=\"false\" >\n\t\t\t<ion-icon name=\"chatbox-ellipses-outline\" slot=\"start\"></ion-icon>\n\t\t\t<ion-label position=\"stacked\">\n\t\t\t\tComment\n\t\t\t</ion-label>\n\t\t\t<ion-textarea placeholder=\"Enter more information here...\"></ion-textarea>\n\t\t</ion-item> -->\n\n\t\t<ion-item-group>\n\t\t\t<ion-item-divider style=\"border-bottom: 0px;\" color=\"light\" class=\"ion-padding-end\">\n\t\t\t\t<ion-icon name=\"attach-outline\" slot=\"start\"></ion-icon>\n\t\t\t\t<ion-label>\n\t\t\t\t\t<h3>Attachment</h3>\n\t\t\t\t</ion-label>\n\t\t\t\t<ion-badge color=\"primary\" slot=\"end\" (click)=\"attachmentActionSheet()\">Upload</ion-badge>\n\t\t\t</ion-item-divider>\n\t\t\t<ion-item detail=\"false\">\n\t\t\t\t<div class=\"attached-img\">\n\t\t\t\t\t<img src=\"assets/icon/4.jpg\">\n\t\t\t\t</div>\n\t\t\t\t<ion-label>\n\t\t\t\t\t<h3>img-profile.jpg</h3>\n\t\t\t\t</ion-label>\n\t\t\t\t<ion-buttons slot=\"end\">\n\t\t\t\t\t<ion-button>\n\t\t\t\t\t\t<ion-icon slot=icon-only name=\"download-outline\"></ion-icon>\n\t\t\t\t\t</ion-button>\n\t\t\t\t\t<ion-button>\n\t\t\t\t\t\t<ion-icon color=\"danger\" slot=\"icon-only\" name=\"close-circle-outline\"></ion-icon>\n\t\t\t\t\t</ion-button>\n\t\t\t\t</ion-buttons>\n\t\t\t</ion-item>\n\t\t\t<ion-item detail=\"false\">\n\t\t\t\t<div class=\"attached-img\">\n\t\t\t\t\t<img src=\"assets/icon/10.jpg\">\n\t\t\t\t</div>\n\t\t\t\t<ion-label>\n\t\t\t\t\t<h3>img-profile.jpg</h3>\n\t\t\t\t</ion-label>\n\t\t\t\t<ion-buttons slot=\"end\">\n\t\t\t\t\t<ion-button>\n\t\t\t\t\t\t<ion-icon slot=icon-only name=\"download-outline\"></ion-icon>\n\t\t\t\t\t</ion-button>\n\t\t\t\t\t<ion-button>\n\t\t\t\t\t\t<ion-icon color=\"danger\" slot=\"icon-only\" name=\"close-circle-outline\"></ion-icon>\n\t\t\t\t\t</ion-button>\n\t\t\t\t</ion-buttons>\n\t\t\t</ion-item>\n\n\t\t\t<ion-item detail=\"false\">\n\t\t\t\t<div class=\"attached-img\">\n\t\t\t\t\t<img src=\"assets/icon/docs.svg\">\n\t\t\t\t</div>\n\t\t\t\t<ion-label>\n\t\t\t\t\t<h3>My Resume.docx</h3>\n\t\t\t\t</ion-label>\n\t\t\t\t<ion-buttons slot=\"end\">\n\t\t\t\t\t<ion-button>\n\t\t\t\t\t\t<ion-icon slot=icon-only name=\"download-outline\"></ion-icon>\n\t\t\t\t\t</ion-button>\n\t\t\t\t\t<ion-button>\n\t\t\t\t\t\t<ion-icon color=\"danger\" slot=\"icon-only\" name=\"close-circle-outline\"></ion-icon>\n\t\t\t\t\t</ion-button>\n\t\t\t\t</ion-buttons>\n\t\t\t</ion-item>\n\t\t</ion-item-group>\n\n\n\t\t<ion-item-group>\n\t\t\t<ion-item-divider style=\"border-bottom: 0px;\" color=\"light\">\n\t\t\t\t<ion-icon name=\"chatbox-ellipses-outline\" slot=\"start\"></ion-icon>\n\t\t\t\t<ion-label><h3>Comment</h3></ion-label>\n\t\t\t</ion-item-divider>\n\t\t\t<ion-item detail=\"false\" class=\"user-comment\">\n\t\t\t\t<ion-avatar slot=\"start\" class=\"ion-align-self-start\">\n\t\t\t\t\t<img src=\"assets/icon/9.jpg\">\n\t\t\t\t</ion-avatar>\n\t\t\t\t<ion-label>\n\t\t\t\t\t<h3><strong>John Doe</strong></h3>\n\t\t\t\t\t<p class=\"ion-text-wrap\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n\t\t\t\t\ttempor incididunt ut labore et dolore magna aliqua.</p>\t\n\t\t\t\t</ion-label>\n\t\t\t\t<ion-note slot=\"end\">\n\t\t\t\t\t03:10PM\n\t\t\t\t</ion-note>\n\t\t\t</ion-item>\n\t\t\t<ion-item detail=\"false\" class=\"user-comment\">\n\t\t\t\t<ion-avatar slot=\"start\" class=\"ion-align-self-start\">\n\t\t\t\t\t<img src=\"assets/icon/4.jpg\">\n\t\t\t\t</ion-avatar>\n\t\t\t\t<ion-label>\n\t\t\t\t\t<h3><strong>Lita</strong></h3>\n\t\t\t\t\t<p class=\"ion-text-wrap\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n\t\t\t\t\ttempor incididunt ut labore et dolore magna aliqua.</p>\t\n\t\t\t\t</ion-label>\n\t\t\t\t<ion-note slot=\"end\">\n\t\t\t\t\t03:10PM\n\t\t\t\t</ion-note>\n\t\t\t</ion-item>\n\t\t</ion-item-group>\n\t</ion-list>\n\n\n\n\n\t<ion-grid>\n\t\t<ion-row>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<ion-button size=\"small1\" expand=\"block\" color=\"success\">\n\t\t\t\t\t<ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n\t\t\t\t\tAccept\n\t\t\t\t</ion-button>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<ion-button size=\"small1\" expand=\"block\" color=\"primary\">\n\t\t\t\t\t<ion-icon name=\"create-outline\"></ion-icon>\n\t\t\t\t\tEdit\n\t\t\t\t</ion-button>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<ion-button size=\"small1\" expand=\"block\" color=\"tertiary\">\n\t\t\t\t\t<ion-icon name=\"arrow-redo-outline\"></ion-icon>\n\t\t\t\t\tForward\n\t\t\t\t</ion-button>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<ion-button size=\"small1\" expand=\"block\" color=\"danger\">\n\t\t\t\t\t<ion-icon name=\"close-circle-outline\"></ion-icon>\n\t\t\t\t\tReject\n\t\t\t\t</ion-button>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n\n</ion-content>\n<ion-footer>\n\t<ion-toolbar>\n\t\t<ion-item lines=\"none\">\n\t\t\t<ion-input placeholder=\"Add a Comment\"></ion-input>\n\t\t\t<ion-buttons slot=\"end\">\n\t\t\t\t<ion-button style=\"transform: rotate(45deg);\">\n\t\t\t\t\t<ion-icon slot=\"icon-only\" color=\"medium\" name=\"paper-plane\"></ion-icon>\n\t\t\t\t</ion-button>\n\t\t\t</ion-buttons>\n\t\t</ion-item>\n\t</ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/viewtask/viewtask-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/viewtask/viewtask-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ViewtaskPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewtaskPageRoutingModule", function() { return ViewtaskPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _viewtask_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewtask.page */ "./src/app/pages/viewtask/viewtask.page.ts");




const routes = [
    {
        path: '',
        component: _viewtask_page__WEBPACK_IMPORTED_MODULE_3__["ViewtaskPage"]
    }
];
let ViewtaskPageRoutingModule = class ViewtaskPageRoutingModule {
};
ViewtaskPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewtaskPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/viewtask/viewtask.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/viewtask/viewtask.module.ts ***!
  \***************************************************/
/*! exports provided: ViewtaskPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewtaskPageModule", function() { return ViewtaskPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _viewtask_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./viewtask-routing.module */ "./src/app/pages/viewtask/viewtask-routing.module.ts");
/* harmony import */ var _viewtask_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./viewtask.page */ "./src/app/pages/viewtask/viewtask.page.ts");







let ViewtaskPageModule = class ViewtaskPageModule {
};
ViewtaskPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _viewtask_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewtaskPageRoutingModule"]
        ],
        declarations: [_viewtask_page__WEBPACK_IMPORTED_MODULE_6__["ViewtaskPage"]]
    })
], ViewtaskPageModule);



/***/ }),

/***/ "./src/app/pages/viewtask/viewtask.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/viewtask/viewtask.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".datetime-text,\nion-datetime,\nion-select,\nion-textarea {\n  font-size: 14px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmlld3Rhc2svQzpcXFVzZXJzXFxzaXh0aHNlbnNlLU4yNlxcdGFza21hbmFnZW1lbnQvc3JjXFxhcHBcXHBhZ2VzXFx2aWV3dGFza1xcdmlld3Rhc2sucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy92aWV3dGFzay92aWV3dGFzay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7RUFJQywwQkFBQTtBQ0NEIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdmlld3Rhc2svdmlld3Rhc2sucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhdGV0aW1lLXRleHQsXHJcbmlvbi1kYXRldGltZSxcclxuaW9uLXNlbGVjdCxcclxuaW9uLXRleHRhcmVhe1xyXG5cdGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG59XHJcbiIsIi5kYXRldGltZS10ZXh0LFxuaW9uLWRhdGV0aW1lLFxuaW9uLXNlbGVjdCxcbmlvbi10ZXh0YXJlYSB7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/viewtask/viewtask.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/viewtask/viewtask.page.ts ***!
  \*************************************************/
/*! exports provided: ViewtaskPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewtaskPage", function() { return ViewtaskPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _component_popover_popover_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/popover/popover.component */ "./src/app/component/popover/popover.component.ts");





let ViewtaskPage = class ViewtaskPage {
    constructor(popoverController, actionSheetController) {
        this.popoverController = popoverController;
        this.actionSheetController = actionSheetController;
    }
    ngOnInit() {
    }
    moreoptions(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _component_popover_popover_component__WEBPACK_IMPORTED_MODULE_3__["PopoverComponent"],
                event: ev,
                translucent: true
            });
            return yield popover.present();
        });
    }
    attachmentActionSheet() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                // header: 'Sort By',
                buttons: [{
                        text: 'Document',
                        // role: 'destructive',
                        icon: 'document-text-outline',
                        handler: () => {
                            console.log('Document clicked');
                        }
                    }, {
                        text: 'Gallery',
                        icon: 'image-outline',
                        handler: () => {
                            console.log('Gallery clicked');
                        }
                    }, {
                        text: 'Audio',
                        icon: 'musical-notes-outline',
                        handler: () => {
                            console.log('Audio');
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        cssClass: "border-top",
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
};
ViewtaskPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] }
];
ViewtaskPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-viewtask',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./viewtask.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/viewtask/viewtask.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./viewtask.page.scss */ "./src/app/pages/viewtask/viewtask.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]])
], ViewtaskPage);



/***/ })

}]);
//# sourceMappingURL=pages-viewtask-viewtask-module-es2015.js.map
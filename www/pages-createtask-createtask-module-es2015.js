(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-createtask-createtask-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/createtask/createtask.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/createtask/createtask.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header  class=\"ion-no-border\">\n\t<ion-toolbar mode=\"ios\" class=\"border-bottom\">\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-button (click)=\"closeform()\">\n\t\t\t\t<!-- <ion-button (click)=\"closeModal()\"> -->\n\t\t\t\t\t<ion-icon name=\"close-outline\" slot=\"icon-only\"></ion-icon>\n\t\t\t\t</ion-button>\n\t\t\t</ion-buttons>\n\t\t\t<ion-title>New task</ion-title>\n\t\t<!-- <ion-buttons slot=\"end\">\n\t\t\t<ion-button color=\"primary\" class=\"ion-text-capitalize\" routerLink=\"/createdtask\">Create</ion-button>\n\t\t</ion-buttons> -->\n\t</ion-toolbar>\n</ion-header>\n<ion-content>\n\t<div class=\"content-wrapper\">\n\t\t<ion-item lines=\"full\">\n\t\t\t<ion-input placeholder=\"What you want to do..\"></ion-input>\n\t\t</ion-item>\n\n\n\t\t<ion-list lines=\"full\">\n\t\t\t<ion-item detail=\"false\">\n\t\t\t\t<ion-label><h3>Sub-task</h3></ion-label>\n\t\t\t\t<ion-toggle slot=\"start\" name=\"grape\" color=\"tertiary\" ></ion-toggle>\n\t\t\t</ion-item>\n\t\t\t<ion-item detail=\"false\" >\n\t\t\t\t<ion-icon name=\"grid-outline\" slot=\"start\"></ion-icon>\n\t\t\t\t<ion-label><h3>Category</h3></ion-label>\n\t\t\t\t<ion-select ok-text=\"Ok\" cancel-text=\"Cancel\" value=\"personal\">\n\t\t\t\t\t<ion-select-option value=\"personal\">Personal</ion-select-option>\n\t\t\t\t\t<ion-select-option value=\"private\">Private</ion-select-option>\n\t\t\t\t\t<ion-select-option value=\"public\">Public</ion-select-option>\n\t\t\t\t</ion-select>\n\t\t\t</ion-item>\n\n\t\t\t<ion-item detail=\"true\" (click)=\"addUser()\">\n\t\t\t\t<ion-icon name=\"person-circle-outline\" slot=\"start\"></ion-icon>\n\t\t\t\t<ion-label>\n\t\t\t\t\t<h3>Assigned to</h3>\n\t\t\t\t</ion-label>\n\t\t\t\t<ion-label slot=\"end\">\n\t\t\t\t\t<h3>Sourabh Goyanka</h3>\n\t\t\t\t</ion-label>\n\t\t\t\t<ion-badge slot=\"end\">3+</ion-badge>\n\t\t\t</ion-item>\n\n\t\t\t<ion-item detail=\"true\" >\n\t\t\t\t<ion-icon name=\"calendar-outline\" slot=\"start\"></ion-icon>\n\t\t\t\t<ion-label>\n\t\t\t\t\t<h3>Due Date</h3>\n\t\t\t\t</ion-label>\n\t\t\t\t<!-- <ion-calendar [(ngModel)]=\"date\"\n\t\t\t\t(onChange)=\"onChange($event)\"\n\t\t\t\t[type]=\"type\"\n\t\t\t\t[format]=\"'YYYY-MM-DD'\">\n\t\t\t</ion-calendar> -->\n\t\t</ion-item>\n\t\t\t<!-- <ion-item detail=\"true\" >\n\t\t\t\t<ion-icon name=\"alarm-outline\" slot=\"start\"></ion-icon>\n\t\t\t\t<ion-label>\n\t\t\t\t\t<h3>Set Reminder</h3>\n\t\t\t\t</ion-label>\n\t\t\t\t<ion-datetime slot=\"end\" display-format=\"h:mm A\" picker-format=\"h:mm A\" value=\"1990-02-19T07:43Z\"></ion-datetime>\n\t\t\t</ion-item> -->\n\t\t\t<!-- <ion-item detail=\"true\" (click)=\"attachmentActionSheet()\" >\n\t\t\t\t<ion-icon name=\"attach-outline\" slot=\"start\"></ion-icon>\n\t\t\t\t<ion-label>\n\t\t\t\t\t<h3>Attachment</h3>\n\t\t\t\t</ion-label>\n\t\t\t</ion-item>\n\t\t\t<ion-item detail=\"true\" >\n\t\t\t\t<ion-icon name=\"camera-outline\" slot=\"start\"></ion-icon>\n\t\t\t\t<ion-label>\n\t\t\t\t\t<h3>Photo</h3>\n\t\t\t\t</ion-label>\n\t\t\t</ion-item> -->\n\t\t</ion-list>\n\t</div>\n</ion-content>\n\n\n<ion-footer>\n\t<ion-toolbar color=\"primary\">\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-button (click)=\"openCalendar()\">\n\t\t\t\t<ion-icon name=\"calendar-outline\" slot=\"icon-only\"></ion-icon>\n\t\t\t</ion-button>\n\n\t\t\t<ion-button>\n\t\t\t\t<ion-icon name=\"time\" slot=\"icon-only\"></ion-icon>\n\t\t\t</ion-button>\n\n\t\t\t<ion-button (click)=\"attachmentActionSheet()\">\n\t\t\t\t<ion-icon name=\"attach-outline\" slot=\"icon-only\"></ion-icon>\n\t\t\t</ion-button>\n\n\t\t\t<ion-button>\n\t\t\t\t<ion-icon name=\"camera-outline\" slot=\"icon-only\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button routerLink=\"/createdtask\">\n\t\t\t\t<ion-icon name=\"send\" slot=\"icon-only\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t\t<!-- <ion-title class=\"ion-text-center ion-text-uppercase\" size=\"small\" routerLink=\"/createdtask\">Create Task</ion-title> -->\n\t</ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/createtask/createtask-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/createtask/createtask-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CreatetaskPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatetaskPageRoutingModule", function() { return CreatetaskPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _createtask_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createtask.page */ "./src/app/pages/createtask/createtask.page.ts");




const routes = [
    {
        path: '',
        component: _createtask_page__WEBPACK_IMPORTED_MODULE_3__["CreatetaskPage"]
    }
];
let CreatetaskPageRoutingModule = class CreatetaskPageRoutingModule {
};
CreatetaskPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CreatetaskPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/createtask/createtask.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/createtask/createtask.module.ts ***!
  \*******************************************************/
/*! exports provided: CreatetaskPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatetaskPageModule", function() { return CreatetaskPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _createtask_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createtask-routing.module */ "./src/app/pages/createtask/createtask-routing.module.ts");
/* harmony import */ var _createtask_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createtask.page */ "./src/app/pages/createtask/createtask.page.ts");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ion2-calendar */ "./node_modules/ion2-calendar/dist/index.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_7__);








let CreatetaskPageModule = class CreatetaskPageModule {
};
CreatetaskPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _createtask_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreatetaskPageRoutingModule"],
            ion2_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"],
        ],
        declarations: [_createtask_page__WEBPACK_IMPORTED_MODULE_6__["CreatetaskPage"]]
    })
], CreatetaskPageModule);



/***/ }),

/***/ "./src/app/pages/createtask/createtask.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/createtask/createtask.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".datetime-text,\nion-datetime,\nion-select {\n  font-size: 14px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3JlYXRldGFzay9DOlxcVXNlcnNcXHNpeHRoc2Vuc2UtTjI2XFx0YXNrbWFuYWdlbWVudC9zcmNcXGFwcFxccGFnZXNcXGNyZWF0ZXRhc2tcXGNyZWF0ZXRhc2sucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jcmVhdGV0YXNrL2NyZWF0ZXRhc2sucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHQywwQkFBQTtBQ0NEIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY3JlYXRldGFzay9jcmVhdGV0YXNrLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXRldGltZS10ZXh0LFxyXG5pb24tZGF0ZXRpbWUsXHJcbmlvbi1zZWxlY3R7XHJcblx0Zm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiIsIi5kYXRldGltZS10ZXh0LFxuaW9uLWRhdGV0aW1lLFxuaW9uLXNlbGVjdCB7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/createtask/createtask.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/createtask/createtask.page.ts ***!
  \*****************************************************/
/*! exports provided: CreatetaskPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatetaskPage", function() { return CreatetaskPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ion2-calendar */ "./node_modules/ion2-calendar/dist/index.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_4__);






let CreatetaskPage = class CreatetaskPage {
    constructor(actionSheetController, router, modalController) {
        this.actionSheetController = actionSheetController;
        this.router = router;
        this.modalController = modalController;
    }
    ngOnInit() {
    }
    // onChange($event) {
    // 	console.log($event);
    // }
    openCalendar() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const options = {
                title: '',
                color: 'primary',
                format: "DD-MM-YYYY"
            };
            let myCalendar = yield this.modalController.create({
                component: ion2_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarModal"],
                componentProps: { options }
            });
            myCalendar.present();
        });
    }
    closeform() {
        this.router.navigateByUrl('createdtask');
    }
    addUser() {
        this.router.navigateByUrl('userlist');
        // this.closeModal();
    }
    // closeModal(){
    // 	// this.ishidden = true;
    // 	console.log("asdas");
    // 	this.modalController.dismiss({
    // 		'dismissed': true
    // 	});
    // }
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
CreatetaskPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
CreatetaskPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-createtask',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./createtask.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/createtask/createtask.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./createtask.page.scss */ "./src/app/pages/createtask/createtask.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], CreatetaskPage);



/***/ })

}]);
//# sourceMappingURL=pages-createtask-createtask-module-es2015.js.map
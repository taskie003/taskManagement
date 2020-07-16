(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-notask-notask-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notask/notask.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notask/notask.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesNotaskNotaskPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n\t<ion-toolbar class=\"border-bottom\"  mode=\"ios\">\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-menu-button></ion-menu-button>\n\t\t</ion-buttons>\n\t\t<ion-title class=\"custom-title\">Today</ion-title>\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button class=\"has-badge\" routerLink=\"/pendingtask\">\n\t\t\t\t<ion-icon name=\"notifications-outline\" slot=\"icon-only\"></ion-icon>\n\t\t\t\t<!-- <ion-badge color=\"danger\">9+</ion-badge> -->\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<!-- <ion-menu side=\"start\" menuId=\"first\" contentId=\"main\">\n\t<ion-header class=\"ion-no-border\">\n\t\t<ion-toolbar class=\"border-bottom\">\n\t\t\t<ion-list lines=\"none\">\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-avatar slot=\"start\">\n\t\t\t\t\t\t<img src=\"assets/icon/profile.jpg\">\n\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t<h2>John Doe</h2>\n\t\t\t\t\t</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t</ion-list>\n\t\t</ion-toolbar>\n\t</ion-header>\n\t<ion-content>\n\t\t<ion-list lines=\"none\">\n\t\t\t<ion-item>\n\t\t\t\t<ion-icon name=\"today-outline\" slot=\"start\"></ion-icon>\n\t\t\t\t<ion-label>\n\t\t\t\t\t<h3>Today</h3>\n\t\t\t\t</ion-label>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-icon name=\"hourglass-outline\" slot=\"start\"></ion-icon>\n\t\t\t\t<ion-label>\n\t\t\t\t\t<h3>Tomorrow</h3>\n\t\t\t\t</ion-label>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-icon name=\"calendar-outline\" slot=\"start\"></ion-icon>\n\t\t\t\t<ion-label>\n\t\t\t\t\t<h3>Up coming</h3>\n\t\t\t\t</ion-label>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-icon name=\"arrow-down-outline\" slot=\"start\"></ion-icon>\n\t\t\t\t<ion-label>\n\t\t\t\t\t<h3>Assigned to me</h3>\n\t\t\t\t</ion-label>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-icon name=\"arrow-up-outline\" slot=\"start\"></ion-icon>\n\t\t\t\t<ion-label>\n\t\t\t\t\t<h3>Assigned By me</h3>\n\t\t\t\t</ion-label>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-icon name=\"checkbox-outline\" slot=\"start\"></ion-icon>\n\t\t\t\t<ion-label>\n\t\t\t\t\t<h3>Completed</h3>\n\t\t\t\t</ion-label>\n\t\t\t</ion-item>\n\t\t\t<ion-item lines=\"full\">\n\t\t\t\t<ion-icon name=\"trash-outline\" slot=\"start\"></ion-icon>\n\t\t\t\t<ion-label>\n\t\t\t\t\t<h3>Trash</h3>\n\t\t\t\t</ion-label>\n\t\t\t</ion-item>\n\n\t\t\t<ion-item>\n\t\t\t\t<ion-icon name=\"help-buoy-outline\" slot=\"start\"></ion-icon>\n\t\t\t\t<ion-label>\n\t\t\t\t\t<h3>Help</h3>\n\t\t\t\t</ion-label>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-icon name=\"information-circle-outline\" slot=\"start\"></ion-icon>\n\t\t\t\t<ion-label>\n\t\t\t\t\t<h3>About</h3>\n\t\t\t\t</ion-label>\n\t\t\t</ion-item>\n\t\t</ion-list>\n\t</ion-content>\n</ion-menu> -->\n\n<ion-content>\n\t<div class=\"flex-box\">\n\t\t<div>\n\t\t\t<img src=\"assets/1.jpg\" style=\"width: 250px\">\n\t\t\t<ion-label class=\"ion-text-center\">\n\t\t\t\t<h3><strong>Cool Down</strong></h3>\n\t\t\t\t<p>Its All Clear tommorow</p>\n\t\t\t</ion-label>\n\t\t</div>\n\t</div>\n\n\t<ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\" class=\"my-fab\">\n\t\t<ion-fab-button size=\"small\" (click)=\"addtask()\">\n\t\t\t<ion-icon name=\"add\"></ion-icon>\n\t\t</ion-fab-button>\n\t</ion-fab>\n</ion-content>\n<ion-footer>\n\t<ion-toolbar>\n\t\t<ion-row>\n\t\t\t<ion-col size=\"7\">\n\t\t\t\t<ion-item lines=\"none\" (click)=\"presentActionSheet()\">\n\t\t\t\t\t<ion-icon name=\"options-outline\" slot=\"start\" size=\"small\"></ion-icon>\n\t\t\t\t\t<ion-label class=\"ion-text-wrap\">\n\t\t\t\t\t\t<h3>Assigned to me</h3>\n\t\t\t\t\t</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"5\" >\n\t\t\t\t<ion-item lines=\"none\" (click)=\"sortActionSheet()\">\n\t\t\t\t\t<ion-icon name=\"filter-outline\" slot=\"end\" size=\"small\"></ion-icon>\n\t\t\t\t\t<ion-label class=\"ion-text-right ion-text-wrap\">\n\t\t\t\t\t\t<h3>Due Date</h3>\n\t\t\t\t\t</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-toolbar>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/pages/notask/notask-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/notask/notask-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: NotaskPageRoutingModule */

  /***/
  function srcAppPagesNotaskNotaskRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotaskPageRoutingModule", function () {
      return NotaskPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _notask_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./notask.page */
    "./src/app/pages/notask/notask.page.ts");

    const routes = [{
      path: '',
      component: _notask_page__WEBPACK_IMPORTED_MODULE_3__["NotaskPage"]
    }];
    let NotaskPageRoutingModule = class NotaskPageRoutingModule {};
    NotaskPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NotaskPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/notask/notask.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/notask/notask.module.ts ***!
    \***********************************************/

  /*! exports provided: NotaskPageModule */

  /***/
  function srcAppPagesNotaskNotaskModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotaskPageModule", function () {
      return NotaskPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _notask_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./notask-routing.module */
    "./src/app/pages/notask/notask-routing.module.ts");
    /* harmony import */


    var _notask_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./notask.page */
    "./src/app/pages/notask/notask.page.ts");

    let NotaskPageModule = class NotaskPageModule {};
    NotaskPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _notask_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotaskPageRoutingModule"]],
      declarations: [_notask_page__WEBPACK_IMPORTED_MODULE_6__["NotaskPage"]]
    })], NotaskPageModule);
    /***/
  },

  /***/
  "./src/app/pages/notask/notask.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/notask/notask.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesNotaskNotaskPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".flex-box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm90YXNrL0M6XFxVc2Vyc1xcc2l4dGhzZW5zZS1OMjZcXHRhc2ttYW5hZ2VtZW50L3NyY1xcYXBwXFxwYWdlc1xcbm90YXNrXFxub3Rhc2sucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ub3Rhc2svbm90YXNrLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsWUFBQTtBQ0NEIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbm90YXNrL25vdGFzay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleC1ib3h7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGhlaWdodDogMTAwJTtcclxufSIsIi5mbGV4LWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/notask/notask.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/notask/notask.page.ts ***!
    \*********************************************/

  /*! exports provided: NotaskPage */

  /***/
  function srcAppPagesNotaskNotaskPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotaskPage", function () {
      return NotaskPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let NotaskPage = class NotaskPage {
      constructor(popoverController, actionSheetController, router, menu) {
        this.popoverController = popoverController;
        this.actionSheetController = actionSheetController;
        this.router = router;
        this.menu = menu;
      }

      ngOnInit() {}

      presentActionSheet() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const actionSheet = yield this.actionSheetController.create({
            header: 'Sort Task By',
            buttons: [{
              text: 'All Task',
              // role: 'destructive',
              // icon: 'list-outline',
              handler: () => {
                console.log('All Task clicked');
              }
            }, {
              text: 'Assigned to me',
              // icon: 'person-circle-outline',
              handler: () => {
                console.log('Assigned to me clicked');
              }
            }, {
              text: 'Assigned by me',
              // icon: 'arrow-dropright-circle',
              handler: () => {
                console.log('Assigned by me clicked');
              }
            }, {
              text: 'Cancel',
              // icon: 'close',
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

      sortActionSheet() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const actionSheet = yield this.actionSheetController.create({
            header: 'Sort By',
            buttons: [{
              text: 'Due Date',
              // role: 'destructive',
              // icon: 'list-outline',
              handler: () => {
                console.log('Due Date clicked');
              }
            }, {
              text: 'Assignee',
              // icon: 'person-circle-outline',
              handler: () => {
                console.log('Assignee clicked');
              }
            }, {
              text: 'Group',
              // icon: 'arrow-dropright-circle',
              handler: () => {
                console.log('Group');
              }
            }, {
              text: 'Cancel',
              // icon: 'close',
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

      addtask() {
        this.router.navigateByUrl('createtask');
      }

      openFirst() {
        console.log("asdsadsa");
        this.menu.enable(true, 'first');
        this.menu.open('first');
      }

    };

    NotaskPage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
    }];

    NotaskPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-notask',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./notask.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notask/notask.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./notask.page.scss */
      "./src/app/pages/notask/notask.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])], NotaskPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-notask-notask-module-es5.js.map
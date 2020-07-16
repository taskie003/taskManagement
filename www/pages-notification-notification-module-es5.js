(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-notification-notification-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notification/notification.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notification/notification.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesNotificationNotificationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>Notifications</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-list lines=\"none\">\n\t\t<ion-item>\n\t\t\t<ion-label class=\"ion-text-wrap\">\n\t\t\t\t<p><strong>Note:</strong> Swipe Left and right to delete or mark as read notification</p>\n\t\t\t</ion-label>\n\t\t</ion-item>\n\n\t\t<ion-item-sliding>\n\t\t\t<ion-item-options side=\"start\">\n\t\t\t\t<ion-item-option color=\"primary\">Mark As Read</ion-item-option>\n\t\t\t</ion-item-options>\n\t\t\t<ion-item class=\"unread-notification\">\n\t\t\t\t<ion-avatar slot=\"start\">\n\t\t\t\t\t<img src=\"assets/icon/group.jpg\">\n\t\t\t\t</ion-avatar>\n\n\t\t\t\t<ion-label routerLink=\"/viewtask\">\n\t\t\t\t\t<h3><span>Meeting Talents</span>  - assigned a task to you Pay Electricity Bill</h3>\n\t\t\t\t\t<p>5 Minutes ago</p>\n\t\t\t\t</ion-label>\n\t\t\t</ion-item>\n\t\t\t<ion-item-options side=\"end\">\n\t\t\t\t<ion-item-option color=\"danger\">Delete</ion-item-option>\n\t\t\t</ion-item-options>\n\t\t</ion-item-sliding>\n\n\n\t\t<ion-item-sliding>\n\t\t\t<ion-item-options side=\"start\">\n\t\t\t\t<ion-item-option color=\"primary\">Mark As Read</ion-item-option>\n\t\t\t</ion-item-options>\n\t\t\t<ion-item>\n\t\t\t\t<ion-avatar slot=\"start\">\n\t\t\t\t\t<ion-img src=\"assets/icon/profile.jpg\"></ion-img>\n\t\t\t\t</ion-avatar>\n\n\t\t\t\t<ion-label routerLink=\"/viewtask\">\n\t\t\t\t\t<h3><span>Vinnet Duggad</span>  - assigned a task to you Pay Electricity Bill</h3>\n\t\t\t\t\t<p>Today</p>\n\t\t\t\t</ion-label>\n\t\t\t</ion-item>\n\t\t\t<ion-item-options side=\"end\">\n\t\t\t\t<ion-item-option color=\"danger\">Delete</ion-item-option>\n\t\t\t</ion-item-options>\n\t\t</ion-item-sliding>\n\n\n\t\t<ion-item-sliding>\n\t\t\t<ion-item-options side=\"start\">\n\t\t\t\t<ion-item-option color=\"primary\">Mark As Read</ion-item-option>\n\t\t\t</ion-item-options>\n\n\t\t\t<ion-item>\n\t\t\t\t<ion-avatar slot=\"start\">\n\t\t\t\t\t<ion-img src=\"assets/icon/profile.jpg\"></ion-img>\n\t\t\t\t</ion-avatar>\n\n\t\t\t\t<ion-label routerLink=\"/viewtask\">\n\t\t\t\t\t<h3><span>Vinnet Duggad</span>  - assigned a task to you Pay Electricity Bill</h3>\n\t\t\t\t\t<p>3 days ago</p>\n\t\t\t\t</ion-label>\n\t\t\t</ion-item>\n\t\t\t<ion-item-options side=\"end\">\n\t\t\t\t<ion-item-option color=\"danger\">Delete</ion-item-option>\n\t\t\t</ion-item-options>\n\t\t</ion-item-sliding>\n\t</ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/notification/notification-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/notification/notification-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: NotificationPageRoutingModule */

  /***/
  function srcAppPagesNotificationNotificationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationPageRoutingModule", function () {
      return NotificationPageRoutingModule;
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


    var _notification_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./notification.page */
    "./src/app/pages/notification/notification.page.ts");

    const routes = [{
      path: '',
      component: _notification_page__WEBPACK_IMPORTED_MODULE_3__["NotificationPage"]
    }];
    let NotificationPageRoutingModule = class NotificationPageRoutingModule {};
    NotificationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NotificationPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/notification/notification.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/notification/notification.module.ts ***!
    \***********************************************************/

  /*! exports provided: NotificationPageModule */

  /***/
  function srcAppPagesNotificationNotificationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function () {
      return NotificationPageModule;
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


    var _notification_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./notification-routing.module */
    "./src/app/pages/notification/notification-routing.module.ts");
    /* harmony import */


    var _notification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./notification.page */
    "./src/app/pages/notification/notification.page.ts");

    let NotificationPageModule = class NotificationPageModule {};
    NotificationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _notification_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificationPageRoutingModule"]],
      declarations: [_notification_page__WEBPACK_IMPORTED_MODULE_6__["NotificationPage"]]
    })], NotificationPageModule);
    /***/
  },

  /***/
  "./src/app/pages/notification/notification.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/notification/notification.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesNotificationNotificationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24ucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/notification/notification.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/notification/notification.page.ts ***!
    \*********************************************************/

  /*! exports provided: NotificationPage */

  /***/
  function srcAppPagesNotificationNotificationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationPage", function () {
      return NotificationPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let NotificationPage = class NotificationPage {
      constructor() {}

      ngOnInit() {}

    };
    NotificationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-notification',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./notification.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notification/notification.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./notification.page.scss */
      "./src/app/pages/notification/notification.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], NotificationPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-notification-notification-module-es5.js.map
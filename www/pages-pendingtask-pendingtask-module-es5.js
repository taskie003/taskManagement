(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pendingtask-pendingtask-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pendingtask/pendingtask.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pendingtask/pendingtask.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPendingtaskPendingtaskPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header  class=\"ion-no-border\">\n\t<ion-toolbar class=\"border-bottom\">\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<!-- <ion-back-button></ion-back-button> -->\n\t\t\t<ion-button (click)=\"closeform()\">\n\t\t\t\t<ion-icon name=\"close-outline\" slot=\"icon-only\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t\t<ion-title size=\"small\">Pending Task</ion-title>\n\t\t\n\t</ion-toolbar>\n</ion-header>\n\n<!-- <ion-content>\n\t<ion-list lines=\"full\">\n\t\t<ion-item-group>\n\t\t\t<ion-item-divider>\n\t\t\t\t<ion-item class=\"ion-no-padding\" lines=\"none\">\n\t\t\t\t\t<ion-avatar slot=\"start\">\n\t\t\t\t\t\t<img src=\"assets/icon/profile.jpg\">\n\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t<h2>Finn</h2>\n\t\t\t\t\t</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t</ion-item-divider>\n\t\t\t<ion-item detail=\"true\" routerLink=\"/viewtask\">\n\t\t\t\t<ion-label>\n\t\t\t\t\t<h3>Forward my Resume to HR</h3>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<ion-icon name=\"calendar-outline\" slot=\"start\"></ion-icon>\n\t\t\t\t\t\t10-03-2020\n\t\t\t\t\t</p>\n\t\t\t\t</ion-label>\n\t\t\t</ion-item>\n\t\t\t<ion-item detail=\"true\" routerLink=\"/viewtask\">\n\t\t\t\t<ion-label>\n\t\t\t\t\t<h3>Forward my Resume to HR</h3>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<ion-icon name=\"calendar-outline\" slot=\"start\"></ion-icon>\n\t\t\t\t\t\t12-03-2020\n\t\t\t\t\t</p>\n\t\t\t\t</ion-label>\n\t\t\t</ion-item>\n\t\t</ion-item-group>\n\t</ion-list>\n</ion-content> -->\n\n\n<super-tabs>\n\t<super-tabs-toolbar slot=\"top\">\n\t\t<super-tab-button>\n\t\t\t<ion-label class=\"ion-no-margin\" color=\"light\">Due Date</ion-label>  \n\t\t</super-tab-button>\n\t\t<super-tab-button>\n\t\t\t<ion-label class=\"ion-no-margin\" color=\"light\">Assignee</ion-label>   \n\t\t</super-tab-button>\n\t\t<super-tab-button>\n\t\t\t<ion-label class=\"ion-no-margin\" color=\"light\">Group</ion-label>  \n\t\t</super-tab-button>\n\t</super-tabs-toolbar>\n\n\n\n\n\t<super-tabs-container>\n\t\t<super-tab>\n\t\t\t<ion-content>\n\t\t\t\t<ion-list class=\"pb-15\">\n\t\t\t\t\t<ion-item-group>\n\t\t\t\t\t\t<div class=\"task-wrapper\" ><!-- *ngIf=\"hideMe\" -->\n\t\t\t\t\t\t\t<div class=\"ss-task\">\n\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t<ion-checkbox color=\"primary\" slot=\"start\"></ion-checkbox>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\" routerLink=\"/viewtask\">\n\t\t\t\t\t\t\t\t\t\t<h3>Settle the vedor Payment</h3>\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-buttons slot=\"end\" >\n\t\t\t\t\t\t\t\t\t\t<ion-avatar class=\"task-avatar\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/4.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t\t<ion-button (click)=\"presentPopover($event)\"><ion-icon name=\"ellipsis-vertical-outline\"></ion-icon></ion-button>\n\t\t\t\t\t\t\t\t\t</ion-buttons>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item class=\"ion-align-items-center\">\n\t\t\t\t\t\t\t\t\t<ion-avatar slot=\"start\" class=\"task-avatar task-avatar-forward forwaded-task forward \">\n\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/7.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t<ion-icon color=\"danger\" size=\"small\" class=\"forward-icon\" name=\"arrow-redo\"></ion-icon>\n\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\">\n\t\t\t\t\t\t\t\t\t\t<ion-note color=\"primary\" class=\"task-date\">03-03-2020</ion-note>\n\t\t\t\t\t\t\t\t\t\t<ion-note color=\"warning\" class=\"task-status\">Pending</ion-note>\n\t\t\t\t\t\t\t\t\t\t<ion-note color=\"danger\" class=\"overdue\">16 Days</ion-note>\n\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"ss-task\">\n\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t<ion-checkbox color=\"primary\" slot=\"start\"></ion-checkbox>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\" routerLink=\"/viewtask\">\n\t\t\t\t\t\t\t\t\t\t<h3>Pay Electricity Bill</h3>\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-buttons slot=\"end\" >\n\t\t\t\t\t\t\t\t\t\t<ion-avatar class=\"task-avatar\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/7.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t\t<ion-button (click)=\"presentPopover($event)\"><ion-icon name=\"ellipsis-vertical-outline\"></ion-icon></ion-button>\n\t\t\t\t\t\t\t\t\t</ion-buttons>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item class=\"ion-align-items-center\">\n\t\t\t\t\t\t\t\t\t<ion-avatar slot=\"start\" class=\"task-avatar task-avatar-forward forwaded-task\">\n\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/7.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t<ion-icon color=\"danger\" size=\"small\" class=\"forward-icon\" name=\"arrow-redo\"></ion-icon>\n\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\">\n\t\t\t\t\t\t\t\t\t\t<ion-note color=\"primary\" class=\"task-date\">21-03-2020</ion-note>\n\t\t\t\t\t\t\t\t\t\t<ion-note color=\"warning\" class=\"task-status\">Pending</ion-note>\n\t\t\t\t\t\t\t\t\t\t<ion-note color=\"danger\" class=\"overdue\">6 Days</ion-note>\n\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-item-group>\n\n\t\t\t\t\t<ion-item-group>\n\t\t\t\t\t\t<ion-item-divider  class=\"ion-padding-end\">\n\t\t\t\t\t\t\t<ion-label color=\"tertiary\" >No Date Task</ion-label>\n\t\t\t\t\t\t\t<!-- <ion-note slot=\"end\" color=\"tertiary\">22-03-2020</ion-note> -->\n\t\t\t\t\t\t</ion-item-divider>\n\n\t\t\t\t\t\t<div class=\"task-wrapper\">\n\t\t\t\t\t\t\t<div class=\"ss-task\">\n\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t<ion-checkbox color=\"primary\" slot=\"start\"></ion-checkbox>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\" routerLink=\"/viewtask\">\n\t\t\t\t\t\t\t\t\t\t<h3>Send My Resume to HR</h3>\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-buttons slot=\"end\" >\n\t\t\t\t\t\t\t\t\t\t<ion-avatar class=\"task-avatar\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/9.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t\t<ion-button (click)=\"presentPopover($event)\"><ion-icon name=\"ellipsis-vertical-outline\"></ion-icon></ion-button>\n\t\t\t\t\t\t\t\t\t</ion-buttons>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item class=\"ion-align-items-center\">\n\t\t\t\t\t\t\t\t\t<ion-avatar slot=\"start\" class=\"task-avatar task-avatar-forward forwaded-task forward \">\n\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/profile.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t<ion-icon color=\"danger\" size=\"small\" class=\"forward-icon\" name=\"arrow-redo\"></ion-icon>\n\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\">\n\t\t\t\t\t\t\t\t\t\t<ion-note color=\"warning\" class=\"task-status\">Pending</ion-note>\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"ss-task\">\n\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t<ion-checkbox color=\"primary\" slot=\"start\"></ion-checkbox>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\" routerLink=\"/viewtask\">\n\t\t\t\t\t\t\t\t\t\t<h3>Pay Telephone Bill</h3>\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-buttons slot=\"end\" >\n\t\t\t\t\t\t\t\t\t\t<ion-avatar class=\"task-avatar\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/10.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t\t<ion-button (click)=\"presentPopover($event)\"><ion-icon name=\"ellipsis-vertical-outline\"></ion-icon></ion-button>\n\t\t\t\t\t\t\t\t\t</ion-buttons>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item class=\"ion-align-items-center\">\n\t\t\t\t\t\t\t\t\t<ion-avatar slot=\"start\" class=\"task-avatar task-avatar-forward forwaded-task\">\n\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/7.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t<ion-icon color=\"danger\" size=\"small\" class=\"forward-icon\" name=\"arrow-redo\"></ion-icon>\n\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\">\n\t\t\t\t\t\t\t\t\t\t<ion-note color=\"warning\" class=\"task-status\">Pending</ion-note>\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-item-group>\n\n\t\t\t\t</ion-list>\n\t\t\t</ion-content>\n\t\t</super-tab>\n\n\n\t\t<super-tab>\n\t\t\t<ion-content>\n\t\t\t\t<ion-list class=\"pb-60\">\n\t\t\t\t\t<ion-item-group>\n\t\t\t\t\t\t<ion-item-divider>\n\t\t\t\t\t\t\t<ion-item class=\"ion-no-padding\" lines=\"none\">\n\t\t\t\t\t\t\t\t<ion-avatar slot=\"start\">\n\t\t\t\t\t\t\t\t\t<img src=\"assets/icon/profile.jpg\">\n\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t\t\t\t<h2>Finn</h2>\n\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t</ion-item-divider>\n\n\t\t\t\t\t\t<div class=\"task-wrapper\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"ss-task\">\n\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t<ion-checkbox color=\"primary\" slot=\"start\"></ion-checkbox>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\" routerLink=\"/viewtask\">\n\t\t\t\t\t\t\t\t\t\t<h3>Settle the vedor Payment</h3>\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-buttons slot=\"end\" >\n\t\t\t\t\t\t\t\t\t\t<ion-avatar class=\"task-avatar\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/4.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t\t<ion-button (click)=\"presentPopover($event)\"><ion-icon name=\"ellipsis-vertical-outline\"></ion-icon></ion-button>\n\t\t\t\t\t\t\t\t\t</ion-buttons>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item class=\"ion-align-items-center\">\n\t\t\t\t\t\t\t\t\t<ion-avatar slot=\"start\" class=\"task-avatar task-avatar-forward forwaded-task forward \">\n\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/7.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t<ion-icon color=\"danger\" size=\"small\" class=\"forward-icon\" name=\"arrow-redo\"></ion-icon>\n\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\">\n\t\t\t\t\t\t\t\t\t\t<ion-note color=\"primary\" class=\"task-date\">03-03-2020</ion-note>\n\t\t\t\t\t\t\t\t\t\t<ion-note color=\"warning\" class=\"task-status\">Pending</ion-note>\n\t\t\t\t\t\t\t\t\t\t<ion-note color=\"danger\" class=\"overdue\">16 Days</ion-note>\n\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-item-group>\n\n\t\t\t\t\t<ion-item-group>\n\t\t\t\t\t\t<ion-item-divider>\n\t\t\t\t\t\t\t<ion-item class=\"ion-no-padding\" lines=\"none\">\n\t\t\t\t\t\t\t\t<ion-avatar slot=\"start\">\n\t\t\t\t\t\t\t\t\t<img src=\"assets/icon/9.jpg\">\n\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t\t\t\t<h2>John</h2>\n\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t</ion-item-divider>\n\n\t\t\t\t\t\t<div class=\"task-wrapper\">\n\t\t\t\t\t\t\t<div class=\"ss-task\">\n\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t<ion-checkbox color=\"primary\" slot=\"start\"></ion-checkbox>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\" routerLink=\"/viewtask\">\n\t\t\t\t\t\t\t\t\t\t<h3>Pay Electricity Bill</h3>\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-buttons slot=\"end\" >\n\t\t\t\t\t\t\t\t\t\t<ion-avatar class=\"task-avatar\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/7.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t\t<ion-button (click)=\"presentPopover($event)\"><ion-icon name=\"ellipsis-vertical-outline\"></ion-icon></ion-button>\n\t\t\t\t\t\t\t\t\t</ion-buttons>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item class=\"ion-align-items-center\">\n\t\t\t\t\t\t\t\t\t<ion-avatar slot=\"start\" class=\"task-avatar task-avatar-forward forwaded-task\">\n\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/7.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t<ion-icon color=\"danger\" size=\"small\" class=\"forward-icon\" name=\"arrow-redo\"></ion-icon>\n\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\">\n\t\t\t\t\t\t\t\t\t\t<ion-note color=\"primary\" class=\"task-date\">21-03-2020</ion-note>\n\t\t\t\t\t\t\t\t\t\t<ion-note color=\"warning\" class=\"task-status\">Pending</ion-note>\n\t\t\t\t\t\t\t\t\t\t<ion-note color=\"danger\" class=\"overdue\">6 Days</ion-note>\n\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"ss-task\">\n\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t<ion-checkbox color=\"primary\" slot=\"start\"></ion-checkbox>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\" routerLink=\"/viewtask\">\n\t\t\t\t\t\t\t\t\t\t<h3>Pay Telephone Bill</h3>\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-buttons slot=\"end\" >\n\t\t\t\t\t\t\t\t\t\t<ion-avatar class=\"task-avatar\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/7.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t\t<ion-button (click)=\"presentPopover($event)\"><ion-icon name=\"ellipsis-vertical-outline\"></ion-icon></ion-button>\n\t\t\t\t\t\t\t\t\t</ion-buttons>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item class=\"ion-align-items-center\">\n\t\t\t\t\t\t\t\t\t<ion-avatar slot=\"start\" class=\"task-avatar task-avatar-forward forwaded-task\">\n\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/7.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t<ion-icon color=\"danger\" size=\"small\" class=\"forward-icon\" name=\"arrow-redo\"></ion-icon>\n\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\">\n\t\t\t\t\t\t\t\t\t\t<ion-note color=\"primary\" class=\"task-date\">21-03-2020</ion-note>\n\n\t\t\t\t\t\t\t\t\t\t<ion-note color=\"warning\" class=\"task-status\">Pending</ion-note>\n\t\t\t\t\t\t\t\t\t\t<ion-note color=\"danger\" class=\"overdue\">5 Days</ion-note> \n\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-item-group>\n\t\t\t\t</ion-list>\n\t\t\t</ion-content>\n\t\t</super-tab>\n\t\t<super-tab>\n\t\t\t<ion-content>\n\t\t\t\t<ion-list class=\"pb-60\">\n\t\t\t\t\t<ion-item-group>\n\t\t\t\t\t\t<ion-item-divider>\n\t\t\t\t\t\t\t<ion-item class=\"ion-no-padding\" lines=\"none\">\n\t\t\t\t\t\t\t\t<ion-avatar slot=\"start\">\n\t\t\t\t\t\t\t\t\t<img src=\"assets/icon/group.jpg\">\n\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t\t\t\t<h2>Meeting Talents</h2>\n\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t</ion-item-divider>\n\n\t\t\t\t\t\t<div class=\"task-wrapper\">\n\t\t\t\t\t\t\t<div class=\"ss-task\">\n\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t<ion-checkbox color=\"primary\" slot=\"start\"></ion-checkbox>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\" routerLink=\"/viewtask\">\n\t\t\t\t\t\t\t\t\t\t<h3>Pay Electricity Bill</h3>\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-buttons slot=\"end\" >\n\t\t\t\t\t\t\t\t\t\t<ion-avatar class=\"task-avatar\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/7.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t\t<ion-button (click)=\"presentPopover($event)\"><ion-icon name=\"ellipsis-vertical-outline\"></ion-icon></ion-button>\n\t\t\t\t\t\t\t\t\t</ion-buttons>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item class=\"ion-align-items-center\">\n\t\t\t\t\t\t\t\t\t<ion-avatar slot=\"start\" class=\"task-avatar task-avatar-forward forwaded-task\">\n\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/4.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t<ion-icon color=\"danger\" size=\"small\" class=\"forward-icon\" name=\"arrow-redo\"></ion-icon>\n\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\">\n\t\t\t\t\t\t\t\t\t\t<ion-note color=\"primary\" class=\"task-date\">21-03-2020</ion-note>\n\t\t\t\t\t\t\t\t\t\t<ion-note color=\"warning\" class=\"task-status\">Pending</ion-note>\n\t\t\t\t\t\t\t\t\t\t<ion-note color=\"danger\" class=\"overdue\">6 Days</ion-note>\n\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"ss-task\">\n\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t<ion-checkbox color=\"primary\" slot=\"start\"></ion-checkbox>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\" routerLink=\"/viewtask\">\n\t\t\t\t\t\t\t\t\t\t<h3>Pay Telephone Bill</h3>\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-buttons slot=\"end\" >\n\t\t\t\t\t\t\t\t\t\t<ion-avatar class=\"task-avatar\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/9.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t\t<ion-button (click)=\"presentPopover($event)\"><ion-icon name=\"ellipsis-vertical-outline\"></ion-icon></ion-button>\n\t\t\t\t\t\t\t\t\t</ion-buttons>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item class=\"ion-align-items-center\">\n\t\t\t\t\t\t\t\t\t<ion-avatar slot=\"start\" class=\"task-avatar task-avatar-forward forwaded-task\">\n\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/7.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t<ion-icon color=\"danger\" size=\"small\" class=\"forward-icon\" name=\"arrow-redo\"></ion-icon>\n\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\">\n\t\t\t\t\t\t\t\t\t\t<ion-note color=\"primary\" class=\"task-date\">21-03-2020</ion-note>\n\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t<ion-note color=\"warning\" class=\"task-status\">Pending</ion-note>\n\t\t\t\t\t\t\t\t<ion-note color=\"danger\" class=\"overdue\">5 Days</ion-note> \n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ion-item-group>\n\n\t\t<!-- <div class=\"flex-box\">\n\t\t\t<div>\n\t\t\t\t<img src=\"assets/1.jpg\" style=\"width: 250px\">\n\t\t\t\t<ion-label class=\"ion-text-center\">\n\t\t\t\t\t<h3><strong>Cool Down</strong></h3>\n\t\t\t\t\t<p>Its All Clear</p>\n\t\t\t\t</ion-label>\n\t\t\t</div>\n\t\t</div> -->\n\t</ion-list>\n</ion-content>\n</super-tab>\n</super-tabs-container>\n</super-tabs>\n<ion-footer>\n\t<ion-toolbar>\n\t\t<ion-row class=\"ion-justify-content-end\">\n\t\t\t<ion-col size=\"7\">\n\t\t\t\t<ion-item lines=\"none\" (click)=\"presentActionSheet()\">\n\t\t\t\t\t<ion-icon name=\"options-outline\" slot=\"end\" size=\"small\"></ion-icon>\n\t\t\t\t\t<!-- <ion-label class=\"ion-text-wrap ion-text-right\">\n\t\t\t\t\t\t<h3>Assigned to me</h3>\n\t\t\t\t\t</ion-label> -->\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t\t<!-- <ion-col size=\"5\" >\n\t\t\t\t<ion-item lines=\"none\" (click)=\"sortActionSheet()\">\n\t\t\t\t\t<ion-icon name=\"filter-outline\" slot=\"end\" size=\"small\"></ion-icon>\n\t\t\t\t\t<ion-label class=\"ion-text-right ion-text-wrap\">\n\t\t\t\t\t\t<h3>Due Date</h3>\n\t\t\t\t\t</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col> -->\n\t\t</ion-row>\n\t</ion-toolbar>\n<!-- <ion-footer>\n\t<ion-toolbar>\n\t\t<ion-row>\n\t\t\t<ion-col size=\"7\">\n\t\t\t\t<ion-item lines=\"none\" (click)=\"presentActionSheet()\">\n\t\t\t\t\t<ion-icon name=\"options-outline\" slot=\"start\" size=\"small\"></ion-icon>\n\t\t\t\t\t<ion-label class=\"ion-text-wrap\">\n\t\t\t\t\t\t<h3>Assigned to me</h3>\n\t\t\t\t\t</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"5\" >\n\t\t\t\t<ion-item lines=\"none\" (click)=\"sortActionSheet()\">\n\t\t\t\t\t<ion-icon name=\"filter-outline\" slot=\"end\" size=\"small\"></ion-icon>\n\t\t\t\t\t<ion-label class=\"ion-text-right ion-text-wrap\">\n\t\t\t\t\t\t<h3>Due Date</h3>\n\t\t\t\t\t</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-toolbar>\n</ion-footer> -->";
    /***/
  },

  /***/
  "./src/app/pages/pendingtask/pendingtask-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/pendingtask/pendingtask-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: PendingtaskPageRoutingModule */

  /***/
  function srcAppPagesPendingtaskPendingtaskRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PendingtaskPageRoutingModule", function () {
      return PendingtaskPageRoutingModule;
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


    var _pendingtask_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pendingtask.page */
    "./src/app/pages/pendingtask/pendingtask.page.ts");

    const routes = [{
      path: '',
      component: _pendingtask_page__WEBPACK_IMPORTED_MODULE_3__["PendingtaskPage"]
    }];
    let PendingtaskPageRoutingModule = class PendingtaskPageRoutingModule {};
    PendingtaskPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PendingtaskPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/pendingtask/pendingtask.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/pendingtask/pendingtask.module.ts ***!
    \*********************************************************/

  /*! exports provided: PendingtaskPageModule */

  /***/
  function srcAppPagesPendingtaskPendingtaskModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PendingtaskPageModule", function () {
      return PendingtaskPageModule;
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


    var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-super-tabs/angular */
    "./node_modules/@ionic-super-tabs/angular/fesm2015/ionic-super-tabs-angular.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _pendingtask_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pendingtask-routing.module */
    "./src/app/pages/pendingtask/pendingtask-routing.module.ts");
    /* harmony import */


    var _pendingtask_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pendingtask.page */
    "./src/app/pages/pendingtask/pendingtask.page.ts");

    let PendingtaskPageModule = class PendingtaskPageModule {};
    PendingtaskPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _pendingtask_routing_module__WEBPACK_IMPORTED_MODULE_6__["PendingtaskPageRoutingModule"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_4__["SuperTabsModule"]],
      declarations: [_pendingtask_page__WEBPACK_IMPORTED_MODULE_7__["PendingtaskPage"]]
    })], PendingtaskPageModule);
    /***/
  },

  /***/
  "./src/app/pages/pendingtask/pendingtask.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/pendingtask/pendingtask.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPendingtaskPendingtaskPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-item-group ion-item:last-child {\n  --border-width: 0 0 0 0 !important;\n  --inner-border-width: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGVuZGluZ3Rhc2svQzpcXFVzZXJzXFxzaXh0aHNlbnNlLU4yNlxcdGFza21hbmFnZW1lbnQvc3JjXFxhcHBcXHBhZ2VzXFxwZW5kaW5ndGFza1xccGVuZGluZ3Rhc2sucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wZW5kaW5ndGFzay9wZW5kaW5ndGFzay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLHVCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wZW5kaW5ndGFzay9wZW5kaW5ndGFzay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbS1ncm91cCBpb24taXRlbTpsYXN0LWNoaWxkIHtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAwIDAgMCAwICFpbXBvcnRhbnQ7XHJcbiAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcclxufSIsImlvbi1pdGVtLWdyb3VwIGlvbi1pdGVtOmxhc3QtY2hpbGQge1xuICAtLWJvcmRlci13aWR0aDogMCAwIDAgMCAhaW1wb3J0YW50O1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/pendingtask/pendingtask.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/pendingtask/pendingtask.page.ts ***!
    \*******************************************************/

  /*! exports provided: PendingtaskPage */

  /***/
  function srcAppPagesPendingtaskPendingtaskPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PendingtaskPage", function () {
      return PendingtaskPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _component_popover_popover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../component/popover/popover.component */
    "./src/app/component/popover/popover.component.ts");

    let PendingtaskPage = class PendingtaskPage {
      constructor(actionSheetController, router, menu, popoverController) {
        this.actionSheetController = actionSheetController;
        this.router = router;
        this.menu = menu;
        this.popoverController = popoverController;
      }

      ngOnInit() {}

      closeform() {
        this.router.navigateByUrl('createdtask');
      }

      presentPopover(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const popover = yield this.popoverController.create({
            component: _component_popover_popover_component__WEBPACK_IMPORTED_MODULE_4__["PopoverComponent"],
            event: ev,
            translucent: true,
            cssClass: "PopoverComponent"
          });
          return yield popover.present();
        });
      }

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

    };

    PendingtaskPage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
    }];

    PendingtaskPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pendingtask',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pendingtask.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pendingtask/pendingtask.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pendingtask.page.scss */
      "./src/app/pages/pendingtask/pendingtask.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]])], PendingtaskPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-pendingtask-pendingtask-module-es5.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-createdtask-createdtask-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/createdtask/createdtask.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/createdtask/createdtask.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCreatedtaskCreatedtaskPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n\t<ion-toolbar class=\"border-bottom\"  mode=\"ios\">\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-menu-button></ion-menu-button>\n\t\t</ion-buttons>\n\t\t<ion-title class=\"custom-title\">All task</ion-title>\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button class=\"has-badge\" routerLink=\"/notification\">\n\t\t\t\t<ion-icon name=\"notifications-outline\" slot=\"icon-only\"></ion-icon>\n\t\t\t\t<ion-badge color=\"danger\">9+</ion-badge>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<super-tabs>\n\t<super-tabs-toolbar slot=\"top\">\n\t\t<super-tab-button>\n\t\t\t<ion-label class=\"ion-no-margin\" color=\"light\">Due Date</ion-label>  \n\t\t</super-tab-button>\n\t\t<super-tab-button>\n\t\t\t<ion-label class=\"ion-no-margin\" color=\"light\">Assignee</ion-label>   \n\t\t</super-tab-button>\n\t\t<super-tab-button>\n\t\t\t<ion-label class=\"ion-no-margin\" color=\"light\">Group</ion-label>  \n\t\t</super-tab-button>\n\t</super-tabs-toolbar>\n\n\n\n\n\t<super-tabs-container>\n\t\t<super-tab>\n\t\t\t<ion-content>\n\t\t\t\t<ion-list class=\"pb-15\">\n\t\t\t\t\t<ion-item-group>\n\t\t\t\t\t\t<ion-item-divider>\n\t\t\t\t\t\t\t<ion-label class=\"ion-text-uppercase\" color=\"success\">Today</ion-label>\n\t\t\t\t\t\t\t<!-- <ion-buttons slot=\"end\" >\n\t\t\t\t\t\t\t\t<ion-button (click)=\"showHide()\">\n\t\t\t\t\t\t\t\t\t<ion-icon slot=\"icon-only\" name=\"chevron-down\"></ion-icon>\n\t\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t</ion-buttons> -->\n\t\t\t\t\t\t</ion-item-divider>\n\n\t\t\t\t\t\t<div class=\"task-wrapper\" ><!-- *ngIf=\"hideMe\" -->\n\t\t\t\t\t\t\t<div class=\"ss-task\">\n\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t<ion-checkbox color=\"primary\" checked disabled slot=\"start\"></ion-checkbox>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\" routerLink=\"/viewtask\">\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"strike-text\">Forward My Resume to HR</h3>\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-buttons slot=\"end\" >\n\t\t\t\t\t\t\t\t\t\t<ion-avatar class=\"task-avatar\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/profile.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t\t<ion-button disabled (click)=\"presentPopover($event)\"><ion-icon name=\"ellipsis-vertical-outline\"></ion-icon></ion-button>\n\t\t\t\t\t\t\t\t\t</ion-buttons>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item class=\"ion-align-items-center\">\n\t\t\t\t\t\t\t\t\t<ion-avatar slot=\"start\" class=\"task-avatar task-avatar-forward forwaded-task \">\n\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/4.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t<ion-icon color=\"danger\" size=\"small\" class=\"forward-icon\" name=\"arrow-redo\"></ion-icon>\n\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\">\n\t\t\t\t\t\t\t\t\t\t<ion-note color=\"primary\" class=\"task-date\">20-03-2020</ion-note>\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"ss-task\">\n\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t<ion-checkbox color=\"primary\" slot=\"start\"></ion-checkbox>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\" routerLink=\"/viewtask\">\n\t\t\t\t\t\t\t\t\t\t<h3>Settle the vedor Payment</h3>\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-buttons slot=\"end\" >\n\t\t\t\t\t\t\t\t\t\t<ion-avatar class=\"task-avatar\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/4.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t\t<ion-button (click)=\"presentPopover($event)\"><ion-icon name=\"ellipsis-vertical-outline\"></ion-icon></ion-button>\n\t\t\t\t\t\t\t\t\t</ion-buttons>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item class=\"ion-align-items-center\">\n\t\t\t\t\t\t\t\t\t<ion-avatar slot=\"start\" class=\"task-avatar task-avatar-forward forwaded-task forward \">\n\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/7.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t<ion-icon color=\"danger\" size=\"small\" class=\"forward-icon\" name=\"arrow-redo\"></ion-icon>\n\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\">\n\t\t\t\t\t\t\t\t\t\t<ion-note color=\"primary\" class=\"task-date\">03-03-2020</ion-note>\n\t\t\t\t\t\t\t\t\t\t<ion-note color=\"warning\" class=\"task-status\">Pending</ion-note>\n\t\t\t\t\t\t\t\t\t\t<ion-note color=\"danger\" class=\"overdue\">16 Days</ion-note>\n\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-item-group>\n\n\t\t\t\t\t<ion-item-group>\n\t\t\t\t\t\t<ion-item-divider>\n\t\t\t\t\t\t\t<ion-label class=\"ion-text-uppercase\" color=\"primary\">Tomorrow</ion-label>\n\t\t\t\t\t\t</ion-item-divider>\n\n\t\t\t\t\t\t<div class=\"task-wrapper\">\n\t\t\t\t\t\t\t<div class=\"ss-task\">\n\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t<ion-checkbox color=\"primary\" slot=\"start\"></ion-checkbox>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\" routerLink=\"/viewtask\">\n\t\t\t\t\t\t\t\t\t\t<h3>Pay Electricity Bill</h3>\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-buttons slot=\"end\" >\n\t\t\t\t\t\t\t\t\t\t<ion-avatar class=\"task-avatar\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/7.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t\t<ion-button (click)=\"presentPopover($event)\"><ion-icon name=\"ellipsis-vertical-outline\"></ion-icon></ion-button>\n\t\t\t\t\t\t\t\t\t</ion-buttons>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item class=\"ion-align-items-center\">\n\t\t\t\t\t\t\t\t\t<ion-avatar slot=\"start\" class=\"task-avatar task-avatar-forward forwaded-task\">\n\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/7.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t<ion-icon color=\"danger\" size=\"small\" class=\"forward-icon\" name=\"arrow-redo\"></ion-icon>\n\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\">\n\t\t\t\t\t\t\t\t\t\t<ion-note color=\"primary\" class=\"task-date\">21-03-2020</ion-note>\n\t\t\t\t\t\t\t\t\t\t<ion-note color=\"warning\" class=\"task-status\">Pending</ion-note>\n\t\t\t\t\t\t\t\t\t\t<!-- <ion-note color=\"danger\" class=\"overdue\">6 Days</ion-note> -->\n\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"ss-task\">\n\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t<ion-checkbox color=\"primary\" slot=\"start\"></ion-checkbox>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\" routerLink=\"/viewtask\">\n\t\t\t\t\t\t\t\t\t\t<h3>Pay Telephone Bill</h3>\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-buttons slot=\"end\" >\n\t\t\t\t\t\t\t\t\t\t<ion-avatar class=\"task-avatar\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/7.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t\t<ion-button (click)=\"presentPopover($event)\"><ion-icon name=\"ellipsis-vertical-outline\"></ion-icon></ion-button>\n\t\t\t\t\t\t\t\t\t</ion-buttons>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item class=\"ion-align-items-center\">\n\t\t\t\t\t\t\t\t\t<ion-avatar slot=\"start\" class=\"task-avatar task-avatar-forward forwaded-task\">\n\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/7.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t<ion-icon color=\"danger\" size=\"small\" class=\"forward-icon\" name=\"arrow-redo\"></ion-icon>\n\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\">\n\t\t\t\t\t\t\t\t\t\t<ion-note color=\"primary\" class=\"task-date\">21-03-2020</ion-note>\n\t\t\t\t\t\t\t\t\t\t<!-- \n\t\t\t\t\t\t\t\t\t\t\t<ion-note color=\"danger\" class=\"task-status\">Rejected</ion-note>\n\t\t\t\t\t\t\t\t\t\t\t<ion-note color=\"danger\" class=\"overdue\">5 Days Ago</ion-note> \n\t\t\t\t\t\t\t\t\t\t-->\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"ss-task\">\n\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t<ion-checkbox color=\"primary\" slot=\"start\"></ion-checkbox>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\" routerLink=\"/viewtask\">\n\t\t\t\t\t\t\t\t\t\t<h3>Pay Water Bill</h3>\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-buttons slot=\"end\" >\n\t\t\t\t\t\t\t\t\t\t<ion-avatar class=\"task-avatar\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/7.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t\t<ion-button (click)=\"presentPopover($event)\"><ion-icon name=\"ellipsis-vertical-outline\"></ion-icon></ion-button>\n\t\t\t\t\t\t\t\t\t</ion-buttons>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item class=\"ion-align-items-center\">\n\t\t\t\t\t\t\t\t\t<ion-avatar slot=\"start\" class=\"task-avatar task-avatar-forward forwaded-task\">\n\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/7.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t<ion-icon color=\"danger\" size=\"small\" class=\"forward-icon\" name=\"arrow-redo\"></ion-icon>\n\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\">\n\t\t\t\t\t\t\t\t\t\t<ion-note color=\"primary\" class=\"task-date\">21-03-2020</ion-note>\n\t\t\t\t\t\t\t\t\t\t<ion-note color=\"danger\" class=\"task-status\">Rejected</ion-note>\n\t\t\t\t\t\t\t\t\t\t<!-- <ion-note color=\"danger\" class=\"overdue\">5 Days Ago</ion-note> -->\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-item-group>\n\n\t\t\t\t\t<ion-item-group>\n\t\t\t\t\t\t<ion-item-divider  class=\"ion-padding-end\">\n\t\t\t\t\t\t\t<ion-label color=\"tertiary\" >Upcoming</ion-label>\n\t\t\t\t\t\t\t<!-- <ion-note slot=\"end\" color=\"tertiary\">22-03-2020</ion-note> -->\n\t\t\t\t\t\t</ion-item-divider>\n\n\t\t\t\t\t\t<div class=\"task-wrapper\">\n\t\t\t\t\t\t\t<div class=\"ss-task\">\n\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t<ion-checkbox color=\"primary\" slot=\"start\"></ion-checkbox>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\" routerLink=\"/viewtask\">\n\t\t\t\t\t\t\t\t\t\t<h3>Pay Electricity Bill</h3>\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-buttons slot=\"end\" >\n\t\t\t\t\t\t\t\t\t\t<ion-avatar class=\"task-avatar\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/9.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t\t<ion-button (click)=\"presentPopover($event)\"><ion-icon name=\"ellipsis-vertical-outline\"></ion-icon></ion-button>\n\t\t\t\t\t\t\t\t\t</ion-buttons>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item class=\"ion-align-items-center\">\n\t\t\t\t\t\t\t\t\t<ion-avatar slot=\"start\" class=\"task-avatar task-avatar-forward forwaded-task\">\n\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/7.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t<ion-icon color=\"danger\" size=\"small\" class=\"forward-icon\" name=\"arrow-redo\"></ion-icon>\n\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\">\n\t\t\t\t\t\t\t\t\t\t<ion-note color=\"primary\" class=\"task-date\">04-04-2020</ion-note>\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"ss-task\">\n\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t<ion-checkbox color=\"primary\" slot=\"start\"></ion-checkbox>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\" routerLink=\"/viewtask\">\n\t\t\t\t\t\t\t\t\t\t<h3>Send My Resume to HR</h3>\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-buttons slot=\"end\" >\n\t\t\t\t\t\t\t\t\t\t<ion-avatar class=\"task-avatar\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/9.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t\t<ion-button (click)=\"presentPopover($event)\"><ion-icon name=\"ellipsis-vertical-outline\"></ion-icon></ion-button>\n\t\t\t\t\t\t\t\t\t</ion-buttons>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item class=\"ion-align-items-center\">\n\t\t\t\t\t\t\t\t\t<ion-avatar slot=\"start\" class=\"task-avatar task-avatar-forward forwaded-task forward \">\n\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/profile.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t<ion-icon color=\"danger\" size=\"small\" class=\"forward-icon\" name=\"arrow-redo\"></ion-icon>\n\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\">\n\t\t\t\t\t\t\t\t\t\t<ion-note color=\"primary\" class=\"task-date\">04-04-2020</ion-note>\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"ss-task\">\n\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t<ion-checkbox color=\"primary\" slot=\"start\"></ion-checkbox>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\" routerLink=\"/viewtask\">\n\t\t\t\t\t\t\t\t\t\t<h3>Pay Telephone Bill</h3>\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-buttons slot=\"end\" >\n\t\t\t\t\t\t\t\t\t\t<ion-avatar class=\"task-avatar\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/10.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t\t<ion-button (click)=\"presentPopover($event)\"><ion-icon name=\"ellipsis-vertical-outline\"></ion-icon></ion-button>\n\t\t\t\t\t\t\t\t\t</ion-buttons>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item class=\"ion-align-items-center\">\n\t\t\t\t\t\t\t\t\t<ion-avatar slot=\"start\" class=\"task-avatar task-avatar-forward forwaded-task\">\n\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/7.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t<ion-icon color=\"danger\" size=\"small\" class=\"forward-icon\" name=\"arrow-redo\"></ion-icon>\n\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\">\n\t\t\t\t\t\t\t\t\t\t<ion-note color=\"primary\" class=\"task-date\">10-04-2020</ion-note>\n\t\t\t\t\t\t\t\t\t\t<ion-note color=\"warning\" class=\"task-status\">Pending</ion-note>\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"ss-task\">\n\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t<ion-checkbox color=\"primary\" slot=\"start\"></ion-checkbox>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\" routerLink=\"/viewtask\">\n\t\t\t\t\t\t\t\t\t\t<h3>Pay Water Bill</h3>\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-buttons slot=\"end\" >\n\t\t\t\t\t\t\t\t\t\t<ion-avatar class=\"task-avatar\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/7.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t\t<ion-button (click)=\"presentPopover($event)\"><ion-icon name=\"ellipsis-vertical-outline\"></ion-icon></ion-button>\n\t\t\t\t\t\t\t\t\t</ion-buttons>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item class=\"ion-align-items-center\">\n\t\t\t\t\t\t\t\t\t<ion-avatar slot=\"start\" class=\"task-avatar task-avatar-forward forwaded-task\">\n\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/7.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t<ion-icon color=\"danger\" size=\"small\" class=\"forward-icon\" name=\"arrow-redo\"></ion-icon>\n\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\">\n\t\t\t\t\t\t\t\t\t\t<ion-note color=\"primary\" class=\"task-date\">10-04-2020</ion-note>\n\t\t\t\t\t\t\t\t\t\t<ion-note color=\"danger\" class=\"task-status\">Rejected</ion-note>\n\t\t\t\t\t\t\t\t\t\t<ion-note color=\"danger\" class=\"overdue\">Yesterday</ion-note>\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-item-group>\n\n\t\t\t\t\t<ion-item-group>\n\t\t\t\t\t\t<ion-item-divider class=\"ion-padding-end\">\n\t\t\t\t\t\t\t<ion-label color=\"danger\">Overdue</ion-label>\n\t\t\t\t\t\t</ion-item-divider>\n\n\n\t\t\t\t\t\t<div class=\"task-wrapper\">\n\t\t\t\t\t\t\t<div class=\"ss-task\">\n\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t<ion-checkbox color=\"primary\" slot=\"start\"></ion-checkbox>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\" routerLink=\"/viewtask\">\n\t\t\t\t\t\t\t\t\t\t<h3>Pay Electricity Bill</h3>\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-buttons slot=\"end\" >\n\t\t\t\t\t\t\t\t\t\t<ion-avatar class=\"task-avatar\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/9.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t\t<ion-button (click)=\"presentPopover($event)\"><ion-icon name=\"ellipsis-vertical-outline\"></ion-icon></ion-button>\n\t\t\t\t\t\t\t\t\t</ion-buttons>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item class=\"ion-align-items-center\">\n\t\t\t\t\t\t\t\t\t<ion-avatar slot=\"start\" class=\"task-avatar task-avatar-forward forwaded-task\">\n\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/7.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t<ion-icon color=\"danger\" size=\"small\" class=\"forward-icon\" name=\"arrow-redo\"></ion-icon>\n\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\">\n\t\t\t\t\t\t\t\t\t\t<ion-note color=\"primary\" class=\"task-date\">10-03-2020</ion-note>\n\t\t\t\t\t\t\t\t\t\t<ion-note color=\"danger\" class=\"task-status\">Rejected</ion-note>\n\t\t\t\t\t\t\t\t\t\t<ion-note color=\"danger\" class=\"overdue\">10 Days Ago</ion-note>\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"ss-task\">\n\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t<ion-checkbox color=\"primary\" slot=\"start\"></ion-checkbox>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\" routerLink=\"/viewtask\">\n\t\t\t\t\t\t\t\t\t\t<h3>Send My Resume to HR</h3>\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-buttons slot=\"end\" >\n\t\t\t\t\t\t\t\t\t\t<ion-avatar class=\"task-avatar\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/9.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t\t<ion-button (click)=\"presentPopover($event)\"><ion-icon name=\"ellipsis-vertical-outline\"></ion-icon></ion-button>\n\t\t\t\t\t\t\t\t\t</ion-buttons>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item class=\"ion-align-items-center\">\n\t\t\t\t\t\t\t\t\t<ion-avatar slot=\"start\" class=\"task-avatar task-avatar-forward forwaded-task forward \">\n\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/profile.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t<ion-icon color=\"danger\" size=\"small\" class=\"forward-icon\" name=\"arrow-redo\"></ion-icon>\n\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\">\n\t\t\t\t\t\t\t\t\t\t<ion-note color=\"primary\" class=\"task-date\">15-03-2020</ion-note>\n\t\t\t\t\t\t\t\t\t\t<!-- <ion-note color=\"danger\" class=\"task-status\">Rejected</ion-note> -->\n\t\t\t\t\t\t\t\t\t\t<ion-note color=\"danger\" class=\"overdue\">5 Days</ion-note>\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"ss-task\">\n\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t<ion-checkbox color=\"primary\" slot=\"start\"></ion-checkbox>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\" routerLink=\"/viewtask\">\n\t\t\t\t\t\t\t\t\t\t<h3>Pay Telephone Bill</h3>\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-buttons slot=\"end\" >\n\t\t\t\t\t\t\t\t\t\t<ion-avatar class=\"task-avatar\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/10.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t\t<ion-button (click)=\"presentPopover($event)\"><ion-icon name=\"ellipsis-vertical-outline\"></ion-icon></ion-button>\n\t\t\t\t\t\t\t\t\t</ion-buttons>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item class=\"ion-align-items-center\">\n\t\t\t\t\t\t\t\t\t<ion-avatar slot=\"start\" class=\"task-avatar task-avatar-forward forwaded-task\">\n\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/7.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t<ion-icon color=\"danger\" size=\"small\" class=\"forward-icon\" name=\"arrow-redo\"></ion-icon>\n\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\">\n\t\t\t\t\t\t\t\t\t\t<ion-note color=\"primary\" class=\"task-date\">10-03-2020</ion-note>\n\t\t\t\t\t\t\t\t\t\t<ion-note color=\"warning\" class=\"task-status\">Pending</ion-note>\n\t\t\t\t\t\t\t\t\t\t<ion-note color=\"danger\" class=\"overdue\">10 Days</ion-note>\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"ss-task\">\n\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t<ion-checkbox color=\"primary\" slot=\"start\"></ion-checkbox>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\" routerLink=\"/viewtask\">\n\t\t\t\t\t\t\t\t\t\t<h3>Pay Water Bill</h3>\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-buttons slot=\"end\" >\n\t\t\t\t\t\t\t\t\t\t<ion-avatar class=\"task-avatar\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/7.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t\t<ion-button (click)=\"presentPopover($event)\"><ion-icon name=\"ellipsis-vertical-outline\"></ion-icon></ion-button>\n\t\t\t\t\t\t\t\t\t</ion-buttons>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item class=\"ion-align-items-center\">\n\t\t\t\t\t\t\t\t\t<ion-avatar slot=\"start\" class=\"task-avatar task-avatar-forward forwaded-task\">\n\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/7.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t<ion-icon color=\"danger\" size=\"small\" class=\"forward-icon\" name=\"arrow-redo\"></ion-icon>\n\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\">\n\t\t\t\t\t\t\t\t\t\t<ion-note color=\"primary\" class=\"task-date\">18-03-2020</ion-note>\n\t\t\t\t\t\t\t\t\t\t<!-- <ion-note color=\"danger\" class=\"task-status\">Rejected</ion-note> -->\n\t\t\t\t\t\t\t\t\t\t<ion-note color=\"danger\" class=\"overdue\">2 Days</ion-note>\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-item-group>\n\n\t\t\t\t\t<ion-item-group>\n\t\t\t\t\t\t<ion-item-divider  class=\"ion-padding-end\">\n\t\t\t\t\t\t\t<ion-label color=\"tertiary\" >No Date Task</ion-label>\n\t\t\t\t\t\t\t<!-- <ion-note slot=\"end\" color=\"tertiary\">22-03-2020</ion-note> -->\n\t\t\t\t\t\t</ion-item-divider>\n\n\t\t\t\t\t\t<div class=\"task-wrapper\">\n\t\t\t\t\t\t\t<div class=\"ss-task\">\n\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t<ion-checkbox color=\"primary\" slot=\"start\"></ion-checkbox>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\" routerLink=\"/viewtask\">\n\t\t\t\t\t\t\t\t\t\t<h3>Pay Electricity Bill</h3>\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-buttons slot=\"end\" >\n\t\t\t\t\t\t\t\t\t\t<ion-avatar class=\"task-avatar\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/9.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t\t<ion-button (click)=\"presentPopover($event)\"><ion-icon name=\"ellipsis-vertical-outline\"></ion-icon></ion-button>\n\t\t\t\t\t\t\t\t\t</ion-buttons>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item class=\"ion-align-items-center\">\n\t\t\t\t\t\t\t\t\t<ion-avatar slot=\"start\" class=\"task-avatar task-avatar-forward forwaded-task\">\n\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/7.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t<ion-icon color=\"danger\" size=\"small\" class=\"forward-icon\" name=\"arrow-redo\"></ion-icon>\n\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\">\n\t\t\t\t\t\t\t\t\t\t<!-- <ion-note color=\"primary\" class=\"task-date\">10-03-2020</ion-note> -->\n\t\t\t\t\t\t\t\t\t\t<ion-note color=\"danger\" class=\"task-status\">Rejected</ion-note>\n\t\t\t\t\t\t\t\t\t\t<!-- <ion-note color=\"danger\" class=\"overdue\">3 Days Ago</ion-note> -->\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"ss-task\">\n\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t<ion-checkbox color=\"primary\" slot=\"start\"></ion-checkbox>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\" routerLink=\"/viewtask\">\n\t\t\t\t\t\t\t\t\t\t<h3>Send My Resume to HR</h3>\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-buttons slot=\"end\" >\n\t\t\t\t\t\t\t\t\t\t<ion-avatar class=\"task-avatar\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/9.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t\t<ion-button (click)=\"presentPopover($event)\"><ion-icon name=\"ellipsis-vertical-outline\"></ion-icon></ion-button>\n\t\t\t\t\t\t\t\t\t</ion-buttons>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item class=\"ion-align-items-center\">\n\t\t\t\t\t\t\t\t\t<ion-avatar slot=\"start\" class=\"task-avatar task-avatar-forward forwaded-task forward \">\n\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/profile.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t<ion-icon color=\"danger\" size=\"small\" class=\"forward-icon\" name=\"arrow-redo\"></ion-icon>\n\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\">\n\t\t\t\t\t\t\t\t\t\t<ion-note color=\"warning\" class=\"task-status\">Pending</ion-note>\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"ss-task\">\n\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t<ion-checkbox color=\"primary\" slot=\"start\"></ion-checkbox>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\" routerLink=\"/viewtask\">\n\t\t\t\t\t\t\t\t\t\t<h3>Pay Telephone Bill</h3>\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-buttons slot=\"end\" >\n\t\t\t\t\t\t\t\t\t\t<ion-avatar class=\"task-avatar\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/10.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t\t<ion-button (click)=\"presentPopover($event)\"><ion-icon name=\"ellipsis-vertical-outline\"></ion-icon></ion-button>\n\t\t\t\t\t\t\t\t\t</ion-buttons>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item class=\"ion-align-items-center\">\n\t\t\t\t\t\t\t\t\t<ion-avatar slot=\"start\" class=\"task-avatar task-avatar-forward forwaded-task\">\n\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/7.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t<ion-icon color=\"danger\" size=\"small\" class=\"forward-icon\" name=\"arrow-redo\"></ion-icon>\n\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\">\n\t\t\t\t\t\t\t\t\t\t<ion-note color=\"warning\" class=\"task-status\">Pending</ion-note>\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"ss-task\">\n\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t<ion-checkbox color=\"primary\" slot=\"start\"></ion-checkbox>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\" routerLink=\"/viewtask\">\n\t\t\t\t\t\t\t\t\t\t<h3>Pay Water Bill</h3>\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-buttons slot=\"end\" >\n\t\t\t\t\t\t\t\t\t\t<ion-avatar class=\"task-avatar\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/7.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t\t<ion-button (click)=\"presentPopover($event)\"><ion-icon name=\"ellipsis-vertical-outline\"></ion-icon></ion-button>\n\t\t\t\t\t\t\t\t\t</ion-buttons>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<ion-item class=\"ion-align-items-center\">\n\t\t\t\t\t\t\t\t\t<ion-avatar slot=\"start\" class=\"task-avatar task-avatar-forward forwaded-task\">\n\t\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/7.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t\t\t<ion-icon color=\"danger\" size=\"small\" class=\"forward-icon\" name=\"arrow-redo\"></ion-icon>\n\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\">\n\t\t\t\t\t\t\t<!-- \n\t\t\t\t\t\t\t\t<ion-note color=\"primary\" class=\"task-date\">10-04-2020</ion-note>\n\t\t\t\t\t\t\t\t<ion-note color=\"danger\" class=\"task-status\">Rejected</ion-note>\n\t\t\t\t\t\t\t\t<ion-note color=\"danger\" class=\"overdue\">Yesterday</ion-note> \n\t\t\t\t\t\t\t-->\n\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ion-item-group>\n\n\t</ion-list>\n</ion-content>\n</super-tab>\n<super-tab>\n\t<ion-content>\n\t\t<ion-list class=\"pb-60\">\n\t\t\t<ion-item-group>\n\t\t\t\t<ion-item-divider>\n\t\t\t\t\t<ion-item class=\"ion-no-padding\" lines=\"none\">\n\t\t\t\t\t\t<ion-avatar slot=\"start\">\n\t\t\t\t\t\t\t<img src=\"assets/icon/profile.jpg\">\n\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t\t<h2>Finn</h2>\n\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-item-divider>\n\n\t\t\t\t<div class=\"task-wrapper\">\n\t\t\t\t\t<div class=\"ss-task\">\n\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t<ion-checkbox color=\"primary\" checked disabled slot=\"start\"></ion-checkbox>\n\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\" routerLink=\"/viewtask\">\n\t\t\t\t\t\t\t\t<h3 class=\"strike-text\">Forward My Resume to HR</h3>\n\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t<ion-buttons slot=\"end\" >\n\t\t\t\t\t\t\t\t<ion-avatar class=\"task-avatar\">\n\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/profile.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t<ion-button disabled (click)=\"presentPopover($event)\"><ion-icon name=\"ellipsis-vertical-outline\"></ion-icon></ion-button>\n\t\t\t\t\t\t\t</ion-buttons>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item class=\"ion-align-items-center\">\n\t\t\t\t\t\t\t<ion-avatar slot=\"start\" class=\"task-avatar task-avatar-forward forwaded-task \">\n\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/4.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t<ion-icon color=\"danger\" size=\"small\" class=\"forward-icon\" name=\"arrow-redo\"></ion-icon>\n\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\">\n\t\t\t\t\t\t\t\t<ion-note color=\"primary\" class=\"task-date\">20-03-2020</ion-note>\n\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ss-task\">\n\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t<ion-checkbox color=\"primary\" slot=\"start\"></ion-checkbox>\n\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\" routerLink=\"/viewtask\">\n\t\t\t\t\t\t\t\t<h3>Settle the vedor Payment</h3>\n\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t<ion-buttons slot=\"end\" >\n\t\t\t\t\t\t\t\t<ion-avatar class=\"task-avatar\">\n\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/4.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t<ion-button (click)=\"presentPopover($event)\"><ion-icon name=\"ellipsis-vertical-outline\"></ion-icon></ion-button>\n\t\t\t\t\t\t\t</ion-buttons>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item class=\"ion-align-items-center\">\n\t\t\t\t\t\t\t<ion-avatar slot=\"start\" class=\"task-avatar task-avatar-forward forwaded-task forward \">\n\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/7.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t<ion-icon color=\"danger\" size=\"small\" class=\"forward-icon\" name=\"arrow-redo\"></ion-icon>\n\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\">\n\t\t\t\t\t\t\t\t<ion-note color=\"primary\" class=\"task-date\">03-03-2020</ion-note>\n\t\t\t\t\t\t\t\t<ion-note color=\"warning\" class=\"task-status\">Pending</ion-note>\n\t\t\t\t\t\t\t\t<ion-note color=\"danger\" class=\"overdue\">16 Days</ion-note>\n\n\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-item-group>\n\n\t\t\t<ion-item-group>\n\t\t\t\t<ion-item-divider>\n\t\t\t\t\t<ion-item class=\"ion-no-padding\" lines=\"none\">\n\t\t\t\t\t\t<ion-avatar slot=\"start\">\n\t\t\t\t\t\t\t<img src=\"assets/icon/9.jpg\">\n\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t\t<h2>John</h2>\n\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-item-divider>\n\n\t\t\t\t<div class=\"task-wrapper\">\n\t\t\t\t\t<div class=\"ss-task\">\n\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t<ion-checkbox color=\"primary\" slot=\"start\"></ion-checkbox>\n\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\" routerLink=\"/viewtask\">\n\t\t\t\t\t\t\t\t<h3>Pay Electricity Bill</h3>\n\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t<ion-buttons slot=\"end\" >\n\t\t\t\t\t\t\t\t<ion-avatar class=\"task-avatar\">\n\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/7.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t<ion-button (click)=\"presentPopover($event)\"><ion-icon name=\"ellipsis-vertical-outline\"></ion-icon></ion-button>\n\t\t\t\t\t\t\t</ion-buttons>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item class=\"ion-align-items-center\">\n\t\t\t\t\t\t\t<ion-avatar slot=\"start\" class=\"task-avatar task-avatar-forward forwaded-task\">\n\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/7.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t<ion-icon color=\"danger\" size=\"small\" class=\"forward-icon\" name=\"arrow-redo\"></ion-icon>\n\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\">\n\t\t\t\t\t\t\t\t<ion-note color=\"primary\" class=\"task-date\">21-03-2020</ion-note>\n\t\t\t\t\t\t\t\t<ion-note color=\"warning\" class=\"task-status\">Pending</ion-note>\n\t\t\t\t\t\t\t\t<!-- <ion-note color=\"danger\" class=\"overdue\">6 Days</ion-note> -->\n\n\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"ss-task\">\n\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t<ion-checkbox color=\"primary\" slot=\"start\"></ion-checkbox>\n\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\" routerLink=\"/viewtask\">\n\t\t\t\t\t\t\t\t<h3>Pay Telephone Bill</h3>\n\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t<ion-buttons slot=\"end\" >\n\t\t\t\t\t\t\t\t<ion-avatar class=\"task-avatar\">\n\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/7.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t<ion-button (click)=\"presentPopover($event)\"><ion-icon name=\"ellipsis-vertical-outline\"></ion-icon></ion-button>\n\t\t\t\t\t\t\t</ion-buttons>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item class=\"ion-align-items-center\">\n\t\t\t\t\t\t\t<ion-avatar slot=\"start\" class=\"task-avatar task-avatar-forward forwaded-task\">\n\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/7.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t<ion-icon color=\"danger\" size=\"small\" class=\"forward-icon\" name=\"arrow-redo\"></ion-icon>\n\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\">\n\t\t\t\t\t\t\t\t<ion-note color=\"primary\" class=\"task-date\">21-03-2020</ion-note>\n\t\t\t\t\t\t\t<!-- \n\t\t\t\t\t\t\t\t<ion-note color=\"danger\" class=\"task-status\">Rejected</ion-note>\n\t\t\t\t\t\t\t\t<ion-note color=\"danger\" class=\"overdue\">5 Days Ago</ion-note> \n\t\t\t\t\t\t\t-->\n\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"ss-task\">\n\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t<ion-checkbox color=\"primary\" slot=\"start\"></ion-checkbox>\n\t\t\t\t\t\t<ion-label class=\"ion-no-margin\" routerLink=\"/viewtask\">\n\t\t\t\t\t\t\t<h3>Pay Water Bill</h3>\n\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t<ion-buttons slot=\"end\" >\n\t\t\t\t\t\t\t<ion-avatar class=\"task-avatar\">\n\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/7.jpg\"></ion-img>\n\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t<ion-button (click)=\"presentPopover($event)\"><ion-icon name=\"ellipsis-vertical-outline\"></ion-icon></ion-button>\n\t\t\t\t\t\t</ion-buttons>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-item class=\"ion-align-items-center\">\n\t\t\t\t\t\t<ion-avatar slot=\"start\" class=\"task-avatar task-avatar-forward forwaded-task\">\n\t\t\t\t\t\t\t<ion-img src=\"assets/icon/7.jpg\"></ion-img>\n\t\t\t\t\t\t\t<ion-icon color=\"danger\" size=\"small\" class=\"forward-icon\" name=\"arrow-redo\"></ion-icon>\n\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t<ion-label class=\"ion-no-margin\">\n\t\t\t\t\t\t\t<ion-note color=\"primary\" class=\"task-date\">21-03-2020</ion-note>\n\t\t\t\t\t\t\t<ion-note color=\"danger\" class=\"task-status\">Rejected</ion-note>\n\t\t\t\t\t\t\t<!-- <ion-note color=\"danger\" class=\"overdue\">5 Days Ago</ion-note> -->\n\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ion-item-group>\n\t</ion-list>\n</ion-content>\n</super-tab>\n<super-tab>\n\t<ion-content>\n\t\t<ion-list class=\"pb-60\">\n\t\t\t<ion-item-group>\n\t\t\t\t<ion-item-divider>\n\t\t\t\t\t<ion-item class=\"ion-no-padding\" lines=\"none\">\n\t\t\t\t\t\t<ion-avatar slot=\"start\">\n\t\t\t\t\t\t\t<img src=\"assets/icon/group.jpg\">\n\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t\t<h2>Meeting Talents</h2>\n\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-item-divider>\n\n\t\t\t\t<div class=\"task-wrapper\">\n\t\t\t\t\t<div class=\"ss-task\">\n\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t<ion-checkbox color=\"primary\" slot=\"start\"></ion-checkbox>\n\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\" routerLink=\"/viewtask\">\n\t\t\t\t\t\t\t\t<h3>Pay Electricity Bill</h3>\n\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t<ion-buttons slot=\"end\" >\n\t\t\t\t\t\t\t\t<ion-avatar class=\"task-avatar\">\n\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/7.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t<ion-button (click)=\"presentPopover($event)\"><ion-icon name=\"ellipsis-vertical-outline\"></ion-icon></ion-button>\n\t\t\t\t\t\t\t</ion-buttons>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item class=\"ion-align-items-center\">\n\t\t\t\t\t\t\t<ion-avatar slot=\"start\" class=\"task-avatar task-avatar-forward forwaded-task\">\n\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/4.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t<ion-icon color=\"danger\" size=\"small\" class=\"forward-icon\" name=\"arrow-redo\"></ion-icon>\n\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\">\n\t\t\t\t\t\t\t\t<ion-note color=\"primary\" class=\"task-date\">21-03-2020</ion-note>\n\t\t\t\t\t\t\t\t<ion-note color=\"warning\" class=\"task-status\">Pending</ion-note>\n\t\t\t\t\t\t\t\t<!-- <ion-note color=\"danger\" class=\"overdue\">6 Days</ion-note> -->\n\n\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"ss-task\">\n\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t<ion-checkbox color=\"primary\" slot=\"start\"></ion-checkbox>\n\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\" routerLink=\"/viewtask\">\n\t\t\t\t\t\t\t\t<h3>Pay Telephone Bill</h3>\n\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t<ion-buttons slot=\"end\" >\n\t\t\t\t\t\t\t\t<ion-avatar class=\"task-avatar\">\n\t\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/9.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t<ion-button (click)=\"presentPopover($event)\"><ion-icon name=\"ellipsis-vertical-outline\"></ion-icon></ion-button>\n\t\t\t\t\t\t\t</ion-buttons>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item class=\"ion-align-items-center\">\n\t\t\t\t\t\t\t<ion-avatar slot=\"start\" class=\"task-avatar task-avatar-forward forwaded-task\">\n\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/7.jpg\"></ion-img>\n\t\t\t\t\t\t\t\t<ion-icon color=\"danger\" size=\"small\" class=\"forward-icon\" name=\"arrow-redo\"></ion-icon>\n\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t<ion-label class=\"ion-no-margin\">\n\t\t\t\t\t\t\t\t<ion-note color=\"primary\" class=\"task-date\">21-03-2020</ion-note>\n\t\t\t\t\t\t\t<!-- \n\t\t\t\t\t\t\t\t<ion-note color=\"danger\" class=\"task-status\">Rejected</ion-note>\n\t\t\t\t\t\t\t\t<ion-note color=\"danger\" class=\"overdue\">5 Days Ago</ion-note> \n\t\t\t\t\t\t\t-->\n\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"ss-task\">\n\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t<ion-checkbox color=\"primary\" slot=\"start\"></ion-checkbox>\n\t\t\t\t\t\t<ion-label class=\"ion-no-margin\" routerLink=\"/viewtask\">\n\t\t\t\t\t\t\t<h3>Pay Water Bill</h3>\n\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t<ion-buttons slot=\"end\" >\n\t\t\t\t\t\t\t<ion-avatar class=\"task-avatar\">\n\t\t\t\t\t\t\t\t<ion-img src=\"assets/icon/10.jpg\"></ion-img>\n\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t<ion-button (click)=\"presentPopover($event)\"><ion-icon name=\"ellipsis-vertical-outline\"></ion-icon></ion-button>\n\t\t\t\t\t\t</ion-buttons>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-item class=\"ion-align-items-center\">\n\t\t\t\t\t\t<ion-avatar slot=\"start\" class=\"task-avatar task-avatar-forward forwaded-task\">\n\t\t\t\t\t\t\t<ion-img src=\"assets/icon/profile.jpg\"></ion-img>\n\t\t\t\t\t\t\t<ion-icon color=\"danger\" size=\"small\" class=\"forward-icon\" name=\"arrow-redo\"></ion-icon>\n\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t<ion-label class=\"ion-no-margin\">\n\t\t\t\t\t\t\t<ion-note color=\"primary\" class=\"task-date\">21-03-2020</ion-note>\n\t\t\t\t\t\t\t<ion-note color=\"danger\" class=\"task-status\">Rejected</ion-note>\n\t\t\t\t\t\t\t<!-- <ion-note color=\"danger\" class=\"overdue\">5 Days Ago</ion-note> -->\n\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ion-item-group>\n\n\t\t<!-- <div class=\"flex-box\">\n\t\t\t<div>\n\t\t\t\t<img src=\"assets/1.jpg\" style=\"width: 250px\">\n\t\t\t\t<ion-label class=\"ion-text-center\">\n\t\t\t\t\t<h3><strong>Cool Down</strong></h3>\n\t\t\t\t\t<p>Its All Clear</p>\n\t\t\t\t</ion-label>\n\t\t\t</div>\n\t\t</div> -->\n\t</ion-list>\n</ion-content>\n</super-tab>\n</super-tabs-container>\n</super-tabs>\n<ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\" class=\"my-fab\">\n\t<ion-fab-button (click)=\"addtask()\">\n\t\t<!-- <ion-fab-button (click)=\"createModal()\"> -->\n\t\t\t<ion-icon name=\"add\"></ion-icon>\n\t\t</ion-fab-button>\n\t</ion-fab>\n\n\t<ion-footer>\n\t\t<ion-toolbar>\n\t\t\t<ion-row class=\"ion-justify-content-end\">\n\t\t\t\t<ion-col size=\"7\">\n\t\t\t\t\t<ion-item lines=\"none\" (click)=\"presentActionSheet()\">\n\t\t\t\t\t\t<ion-icon name=\"options-outline\" slot=\"end\" size=\"small\"></ion-icon>\n\t\t\t\t\t<!-- <ion-label class=\"ion-text-wrap ion-text-right\">\n\t\t\t\t\t\t<h3>Assigned to me</h3>\n\t\t\t\t\t</ion-label> -->\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t\t<!-- <ion-col size=\"5\" >\n\t\t\t\t<ion-item lines=\"none\" (click)=\"sortActionSheet()\">\n\t\t\t\t\t<ion-icon name=\"filter-outline\" slot=\"end\" size=\"small\"></ion-icon>\n\t\t\t\t\t<ion-label class=\"ion-text-right ion-text-wrap\">\n\t\t\t\t\t\t<h3>Due Date</h3>\n\t\t\t\t\t</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col> -->\n\t\t</ion-row>\n\t</ion-toolbar>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/pages/createdtask/createdtask-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/createdtask/createdtask-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: CreatedtaskPageRoutingModule */

  /***/
  function srcAppPagesCreatedtaskCreatedtaskRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreatedtaskPageRoutingModule", function () {
      return CreatedtaskPageRoutingModule;
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


    var _createdtask_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./createdtask.page */
    "./src/app/pages/createdtask/createdtask.page.ts");

    const routes = [{
      path: '',
      component: _createdtask_page__WEBPACK_IMPORTED_MODULE_3__["CreatedtaskPage"]
    }];
    let CreatedtaskPageRoutingModule = class CreatedtaskPageRoutingModule {};
    CreatedtaskPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CreatedtaskPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/createdtask/createdtask.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/createdtask/createdtask.module.ts ***!
    \*********************************************************/

  /*! exports provided: CreatedtaskPageModule */

  /***/
  function srcAppPagesCreatedtaskCreatedtaskModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreatedtaskPageModule", function () {
      return CreatedtaskPageModule;
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


    var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-super-tabs/angular */
    "./node_modules/@ionic-super-tabs/angular/fesm2015/ionic-super-tabs-angular.js");
    /* harmony import */


    var _createdtask_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./createdtask-routing.module */
    "./src/app/pages/createdtask/createdtask-routing.module.ts");
    /* harmony import */


    var _createdtask_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./createdtask.page */
    "./src/app/pages/createdtask/createdtask.page.ts");

    let CreatedtaskPageModule = class CreatedtaskPageModule {};
    CreatedtaskPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _createdtask_routing_module__WEBPACK_IMPORTED_MODULE_6__["CreatedtaskPageRoutingModule"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_5__["SuperTabsModule"]],
      declarations: [_createdtask_page__WEBPACK_IMPORTED_MODULE_7__["CreatedtaskPage"]]
    })], CreatedtaskPageModule);
    /***/
  },

  /***/
  "./src/app/pages/createdtask/createdtask.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/createdtask/createdtask.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCreatedtaskCreatedtaskPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-item-group ion-item:last-child {\n  --border-width: 0 0 0 0 !important;\n  --inner-border-width: 0;\n}\n\n.ios ion-item-group {\n  margin-bottom: inherit;\n  padding-bottom: inherit;\n}\n\n.ios .my-fab {\n  bottom: 0px;\n}\n\n.flex-box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 100%;\n}\n\nsuper-tab-button {\n  padding: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3JlYXRlZHRhc2svQzpcXFVzZXJzXFxzaXh0aHNlbnNlLU4yNlxcdGFza21hbmFnZW1lbnQvc3JjXFxhcHBcXHBhZ2VzXFxjcmVhdGVkdGFza1xcY3JlYXRlZHRhc2sucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jcmVhdGVkdGFzay9jcmVhdGVkdGFzay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDQyxrQ0FBQTtFQUNBLHVCQUFBO0FDQUQ7O0FER0E7RUFDQyxzQkFBQTtFQUNBLHVCQUFBO0FDQUQ7O0FER0E7RUFDQyxXQUFBO0FDQUQ7O0FER0E7RUFDQyxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLFlBQUE7QUNBRDs7QURHQTtFQUNDLGVBQUE7QUNBRCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NyZWF0ZWR0YXNrL2NyZWF0ZWR0YXNrLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24taXRlbS1ncm91cCBpb24taXRlbTpsYXN0LWNoaWxkIHtcclxuXHQtLWJvcmRlci13aWR0aDogMCAwIDAgMCAhaW1wb3J0YW50O1xyXG5cdC0taW5uZXItYm9yZGVyLXdpZHRoOiAwO1xyXG59XHJcblxyXG4uaW9zIGlvbi1pdGVtLWdyb3Vwe1xyXG5cdG1hcmdpbi1ib3R0b206IGluaGVyaXQ7XHJcblx0cGFkZGluZy1ib3R0b206IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5pb3MgLm15LWZhYntcclxuXHRib3R0b206IDBweDtcclxufVxyXG5cclxuLmZsZXgtYm94e1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbnN1cGVyLXRhYi1idXR0b257XHJcblx0cGFkZGluZzogMCAxMHB4O1xyXG59IiwiaW9uLWl0ZW0tZ3JvdXAgaW9uLWl0ZW06bGFzdC1jaGlsZCB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMCAwICFpbXBvcnRhbnQ7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwO1xufVxuXG4uaW9zIGlvbi1pdGVtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogaW5oZXJpdDtcbiAgcGFkZGluZy1ib3R0b206IGluaGVyaXQ7XG59XG5cbi5pb3MgLm15LWZhYiB7XG4gIGJvdHRvbTogMHB4O1xufVxuXG4uZmxleC1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5zdXBlci10YWItYnV0dG9uIHtcbiAgcGFkZGluZzogMCAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/createdtask/createdtask.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/createdtask/createdtask.page.ts ***!
    \*******************************************************/

  /*! exports provided: CreatedtaskPage */

  /***/
  function srcAppPagesCreatedtaskCreatedtaskPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreatedtaskPage", function () {
      return CreatedtaskPage;
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
    /* harmony import */


    var _component_popover_popover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../component/popover/popover.component */
    "./src/app/component/popover/popover.component.ts");

    let CreatedtaskPage = class CreatedtaskPage {
      // duedate_status=false;
      // segmentStatus="duedate";
      constructor(popoverController, actionSheetController, router, menu, modalController) {
        this.popoverController = popoverController;
        this.actionSheetController = actionSheetController;
        this.router = router;
        this.menu = menu;
        this.modalController = modalController;
        this.segmentStatus = "duedate";
        this.hideMe = true;
      }

      ngOnInit() {} // async createModal() {
      // 	const modal = await this.modalController.create({
      // 		component: CreatetaskPage,
      // 		cssClass:"createtaskmodal",
      // 	});
      // 	return await modal.present();
      // }


      addtask() {
        this.router.navigateByUrl('createtask');
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
              } // }, {
              // 	text: 'Cancel',
              // 	role: 'cancel',
              // 	cssClass:"border-top",
              // 	handler: () => {
              // 		console.log('Cancel clicked');
              // 	}

            }]
          });
          yield actionSheet.present();
        });
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

      segmentChanged(ev) {
        console.log('Segment changed', ev.detail.value);
        this.segmentStatus = ev.detail.value;
      }

      showHide() {
        if (this.hideMe) {
          this.hideMe = false;
        } else {
          this.hideMe = true;
        }
      }

    };

    CreatedtaskPage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
    }];

    CreatedtaskPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-createdtask',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./createdtask.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/createdtask/createdtask.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./createdtask.page.scss */
      "./src/app/pages/createdtask/createdtask.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], CreatedtaskPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-createdtask-createdtask-module-es5.js.map
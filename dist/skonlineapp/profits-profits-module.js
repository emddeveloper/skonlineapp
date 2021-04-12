(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profits-profits-module"],{

/***/ "/xSm":
/*!*******************************************!*\
  !*** ./src/app/profits/profits.module.ts ***!
  \*******************************************/
/*! exports provided: ProfitsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfitsModule", function() { return ProfitsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _profits_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profits-routing.module */ "8f70");
/* harmony import */ var _profit_home_profit_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profit-home/profit-home.component */ "J60s");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class ProfitsModule {
}
ProfitsModule.ɵfac = function ProfitsModule_Factory(t) { return new (t || ProfitsModule)(); };
ProfitsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ProfitsModule });
ProfitsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _profits_routing_module__WEBPACK_IMPORTED_MODULE_1__["ProfitsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ProfitsModule, { declarations: [_profit_home_profit_home_component__WEBPACK_IMPORTED_MODULE_2__["ProfitHomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _profits_routing_module__WEBPACK_IMPORTED_MODULE_1__["ProfitsRoutingModule"]] }); })();


/***/ }),

/***/ "8f70":
/*!***************************************************!*\
  !*** ./src/app/profits/profits-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProfitsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfitsRoutingModule", function() { return ProfitsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _profit_home_profit_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profit-home/profit-home.component */ "J60s");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _profit_home_profit_home_component__WEBPACK_IMPORTED_MODULE_1__["ProfitHomeComponent"],
    },
];
class ProfitsRoutingModule {
}
ProfitsRoutingModule.ɵfac = function ProfitsRoutingModule_Factory(t) { return new (t || ProfitsRoutingModule)(); };
ProfitsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ProfitsRoutingModule });
ProfitsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProfitsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "J60s":
/*!**************************************************************!*\
  !*** ./src/app/profits/profit-home/profit-home.component.ts ***!
  \**************************************************************/
/*! exports provided: ProfitHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfitHomeComponent", function() { return ProfitHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ProfitHomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProfitHomeComponent.ɵfac = function ProfitHomeComponent_Factory(t) { return new (t || ProfitHomeComponent)(); };
ProfitHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfitHomeComponent, selectors: [["app-profit-home"]], decls: 2, vars: 0, template: function ProfitHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "profit-home works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maXQtaG9tZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=profits-profits-module.js.map
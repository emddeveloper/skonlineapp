(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "G9EI":
/*!*************************************!*\
  !*** ./src/app/skonline.service.ts ***!
  \*************************************/
/*! exports provided: SkonlineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkonlineService", function() { return SkonlineService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class SkonlineService {
    constructor(http) {
        this.http = http;
    }
    getData() {
        return this.http.get('https://6073ee79066e7e0017e788f5.mockapi.io/getrecords/getrecords');
    }
    updateRecord(params) {
        return this.http.post('https://6073ee79066e7e0017e788f5.mockapi.io/getrecords/getrecords', params);
    }
    getLatestRecord() {
        return this.http.get('https://6073ee79066e7e0017e788f5.mockapi.io/getrecords/getrecords/1');
    }
}
SkonlineService.ɵfac = function SkonlineService_Factory(t) { return new (t || SkonlineService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
SkonlineService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SkonlineService, factory: SkonlineService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map
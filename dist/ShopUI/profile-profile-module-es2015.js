(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./src/app/admin/service/profile.service.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/service/profile.service.ts ***!
  \**************************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../environments/environment.prod */ "./src/app/environments/environment.prod.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _thongbao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./thongbao.service */ "./src/app/admin/service/thongbao.service.ts");






class ProfileService {
    constructor(http, thongbaoService) {
        this.http = http;
        this.thongbaoService = thongbaoService;
        this.API = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url;
        this.ExportOrderSub = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.ExportOrderObs = this.ExportOrderSub.asObservable();
    }
    fetchExportOrder(formData) {
        this.http
            .post(this.API + '/api/admin/fetch-export-order', formData)
            .subscribe(res => {
            this.ExportOrderSub.next(res);
        }, err => { }, () => { });
    }
}
ProfileService.ɵfac = function ProfileService_Factory(t) { return new (t || ProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_thongbao_service__WEBPACK_IMPORTED_MODULE_4__["ThongbaoService"])); };
ProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProfileService, factory: ProfileService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _thongbao_service__WEBPACK_IMPORTED_MODULE_4__["ThongbaoService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map
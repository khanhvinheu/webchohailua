function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chitietnhacungcap-chitietnhacungcap-module"], {
  /***/
  "./src/app/admin/service/ncc-detail.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/admin/service/ncc-detail.service.ts ***!
    \*****************************************************/

  /*! exports provided: NccDetailService */

  /***/
  function srcAppAdminServiceNccDetailServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NccDetailService", function () {
      return NccDetailService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/environments/environment.prod */
    "./src/app/environments/environment.prod.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _thongbao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./thongbao.service */
    "./src/app/admin/service/thongbao.service.ts");
    /* harmony import */


    var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./loading.service */
    "./src/app/admin/service/loading.service.ts");

    var NccDetailService = /*#__PURE__*/function () {
      function NccDetailService(http, thongbaoService, loadingService) {
        _classCallCheck(this, NccDetailService);

        this.http = http;
        this.thongbaoService = thongbaoService;
        this.loadingService = loadingService;
        this.API = src_app_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + '/api/admin/';
        this.ProductDetailSub = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.product);
        this.ProductDetailObs = this.ProductDetailSub.asObservable();
      }

      _createClass(NccDetailService, [{
        key: "FetchProduct",
        value: function FetchProduct(sanpham_id) {
          var _this = this;

          this.loadingService.LoadingSub.next(true);
          this.http.get(this.API + 'nhacungcap/' + sanpham_id).subscribe(function (res) {
            _this.ProductDetailSub.next(res['data']);
          }, function (err) {}, function () {
            return _this.loadingService.LoadingSub.next(false);
          });
        }
      }, {
        key: "findIndex",
        value: function findIndex(array, id) {
          return array.findIndex(function (e) {
            return e.id === id;
          });
        }
      }, {
        key: "update_hinh",
        value: function update_hinh(value) {
          var _this2 = this;

          value.append('_method', 'put');
          var url = "".concat(this.API, "nhacungcap/").concat(value.get('id'), "/changehinh");
          this.loadingService.LoadingSub.next(true);
          this.http.post(url, value).subscribe(function (res) {
            if (res['status'] === 'OK') {
              var index = _this2.findIndex(_this2.ProductDetailSub.value, Number.parseInt(value.get('id') + ''));

              if (index !== -1) {
                _this2.ProductDetailSub.value[index] = res['data'];

                _this2.ProductDetailSub.next(_this2.ProductDetailSub.value);
              }
            }

            _this2.thongbaoService.open('Cập nhật thành công ảnh đại diện!', 'bg-success');

            _this2.FetchProduct(Number.parseInt(value.get('id') + ''));
          }, function () {}, function () {
            return _this2.loadingService.LoadingSub.next(false);
          });
        }
      }]);

      return NccDetailService;
    }();

    NccDetailService.ɵfac = function NccDetailService_Factory(t) {
      return new (t || NccDetailService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_thongbao_service__WEBPACK_IMPORTED_MODULE_4__["ThongbaoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]));
    };

    NccDetailService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NccDetailService,
      factory: NccDetailService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NccDetailService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _thongbao_service__WEBPACK_IMPORTED_MODULE_4__["ThongbaoService"]
        }, {
          type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/page/loading/loading.module.ts":
  /*!************************************************!*\
    !*** ./src/app/page/loading/loading.module.ts ***!
    \************************************************/

  /*! exports provided: LoadingModule */

  /***/
  function srcAppPageLoadingLoadingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingModule", function () {
      return LoadingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _loading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./loading.component */
    "./src/app/page/loading/loading.component.ts");

    var LoadingModule = function LoadingModule() {
      _classCallCheck(this, LoadingModule);
    };

    LoadingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LoadingModule
    });
    LoadingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LoadingModule_Factory(t) {
        return new (t || LoadingModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoadingModule, {
        declarations: [_loading_component__WEBPACK_IMPORTED_MODULE_2__["LoadingComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_loading_component__WEBPACK_IMPORTED_MODULE_2__["LoadingComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_loading_component__WEBPACK_IMPORTED_MODULE_2__["LoadingComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_loading_component__WEBPACK_IMPORTED_MODULE_2__["LoadingComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=chitietnhacungcap-chitietnhacungcap-module-es5.js.map
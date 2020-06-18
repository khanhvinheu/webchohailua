function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~chitietnhacungcap-chitietnhacungcap-module~page-page-module"], {
  /***/
  "./src/app/page/chitietnhacungcap/chitietnhacungcap.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/page/chitietnhacungcap/chitietnhacungcap.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ChitietnhacungcapComponent */

  /***/
  function srcAppPageChitietnhacungcapChitietnhacungcapComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChitietnhacungcapComponent", function () {
      return ChitietnhacungcapComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/environments/environment.prod */
    "./src/app/environments/environment.prod.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_admin_service_ncc_detail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/admin/service/ncc-detail.service */
    "./src/app/admin/service/ncc-detail.service.ts");
    /* harmony import */


    var _loading_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../loading/loading.component */
    "./src/app/page/loading/loading.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _pipe_no_sanitize_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../pipe/no-sanitize.pipe */
    "./src/app/pipe/no-sanitize.pipe.ts");
    /* harmony import */


    var _pipe_text_truncate_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../pipe/text-truncate.pipe */
    "./src/app/pipe/text-truncate.pipe.ts");

    var ChitietnhacungcapComponent = /*#__PURE__*/function () {
      function ChitietnhacungcapComponent(activatedRoute, nccdetailService) {
        _classCallCheck(this, ChitietnhacungcapComponent);

        this.activatedRoute = activatedRoute;
        this.nccdetailService = nccdetailService;
        this.textShow = false;
        this.subscriptions = [];
        this.api_url = src_app_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].api_img;
      }

      _createClass(ChitietnhacungcapComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadData();
        }
      }, {
        key: "loadData",
        value: function loadData() {
          var _this = this;

          this.nccdetailService.ProductDetailObs.subscribe(function (data) {
            _this.nhacungcaps = data;
          }), this.activatedRoute.params.subscribe(function (data) {
            _this.nccdetailService.FetchProduct(_this.activatedRoute.params['value'].id);
          });
        }
      }]);

      return ChitietnhacungcapComponent;
    }();

    ChitietnhacungcapComponent.ɵfac = function ChitietnhacungcapComponent_Factory(t) {
      return new (t || ChitietnhacungcapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_admin_service_ncc_detail_service__WEBPACK_IMPORTED_MODULE_3__["NccDetailService"]));
    };

    ChitietnhacungcapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChitietnhacungcapComponent,
      selectors: [["app-chitietnhacungcap"]],
      decls: 55,
      vars: 17,
      consts: [[1, "container"], [1, "row"], [1, "col-lg-5", "col-md-10", "col-12", "p-5", "py-md-0", "order-1", "order-md-2", "d-flex", "justify-content-center"], [1, "img_sanpham", "text-center", "px-md-2", "py-md-4", "px-3", "d-flex", "justify-content-center", "mx-auto", "strect_img_chitiet", "m-auto"], [1, "strect_img_chitiet", 2, "object-fit", "contain", 3, "src"], [1, "col-lg-6", "col-12", "order-3", "px-0"], [1, "box_content_chitiet", "py-5"], [1, "px-2"], [1, "title_sp_lq"], [1, "text-secondary", "mr-2"], [1, "mr-2"], [1, "d-flex", "flex-row"], [1, "text-decoration-none", "fa", "fa-map-marker"], [1, "d-md-flex", "flex-row", "d-none", "py-4"], [1, "btn", "btn-danger", "w-100", "mr-2", "btn_muangay"], [1, "mota_chitiet", "p-2", 2, "min-height", "100px", "word-break", "break_work", "overflow", "hidden", 3, "innerHtml"], [1, "container", "p-0"], [1, "col-lg-12", "p-0"], [1, "tab_chitiet", "my-2"], [1, "nav", "nav-tabs", 2, "border-bottom", "1px sloid"], [1, "nav-item"], ["data-toggle", "tab", "href", "#home", 1, "nav-link", "active"], [1, "tab-content", "pt-md-5", "px-md-3", "py-1", "border", "border-top-0", "bg-khoi3", 2, "border-color", "#e9ecef"], ["id", "home", 1, "tab-pane", "container", "active"], [1, "content_mota_chitiet", "overflow-hidden", 3, "innerHtml"], [1, "w-100", "text-center", "p-3"], [1, "btn", "btn-warning", 3, "click"], [1, "col-lg-12", "p-0", "mx-0"], [1, "slide_sp_lienquan"]],
      template: function ChitietnhacungcapComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "S\u0110T:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u0110\u1ECBa Ch\u1EC9:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "T\u1EA5t C\u1EA3 S\u1EA3n Ph\u1EA9m");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "M\xF4 t\u1EA3:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ul", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Th\xF4ng tin nh\xE0 cung c\u1EA5p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "noSanitize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "textTruncate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChitietnhacungcapComponent_Template_span_click_48_listener() {
            return ctx.textShow = !ctx.textShow;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "View more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "S\u1EA2N PH\u1EA8M LI\xCAN QUAN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx.api_url, "/upload/sanpham/", ctx.nhacungcaps == null ? null : ctx.nhacungcaps.hinhAnh, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 8, ctx.nhacungcaps == null ? null : ctx.nhacungcaps.tenNhacungcap));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("0", ctx.nhacungcaps == null ? null : ctx.nhacungcaps.soDienthoai, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("0", ctx.nhacungcaps == null ? null : ctx.nhacungcaps.email, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.nhacungcaps == null ? null : ctx.nhacungcaps.diaChi, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.nhacungcaps == null ? null : ctx.nhacungcaps.moTa, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](46, 12, ctx.nhacungcaps == null ? null : ctx.nhacungcaps.thongTin, 0, 200, !ctx.textShow)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      },
      directives: [_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__["LoadingComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["UpperCasePipe"], _pipe_no_sanitize_pipe__WEBPACK_IMPORTED_MODULE_6__["NoSanitizePipe"], _pipe_text_truncate_pipe__WEBPACK_IMPORTED_MODULE_7__["TextTruncatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvY2hpdGlldG5oYWN1bmdjYXAvY2hpdGlldG5oYWN1bmdjYXAuY29tcG9uZW50LnNhc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChitietnhacungcapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-chitietnhacungcap',
          templateUrl: './chitietnhacungcap.component.html',
          styleUrls: ['./chitietnhacungcap.component.sass']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_admin_service_ncc_detail_service__WEBPACK_IMPORTED_MODULE_3__["NccDetailService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/page/chitietnhacungcap/chitietnhacungcap.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/page/chitietnhacungcap/chitietnhacungcap.module.ts ***!
    \********************************************************************/

  /*! exports provided: ChitietnhacungcapModule */

  /***/
  function srcAppPageChitietnhacungcapChitietnhacungcapModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChitietnhacungcapModule", function () {
      return ChitietnhacungcapModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _chitietnhacungcap_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./chitietnhacungcap.component */
    "./src/app/page/chitietnhacungcap/chitietnhacungcap.component.ts");
    /* harmony import */


    var _loading_loading_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../loading/loading.module */
    "./src/app/page/loading/loading.module.ts");
    /* harmony import */


    var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-slick-carousel */
    "./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js");
    /* harmony import */


    var src_app_share_share_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/share/share.module */
    "./src/app/share/share.module.ts");

    var routing = [{
      path: '',
      component: _chitietnhacungcap_component__WEBPACK_IMPORTED_MODULE_3__["ChitietnhacungcapComponent"]
    }];

    var Routing = _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routing);

    var ChitietnhacungcapModule = function ChitietnhacungcapModule() {
      _classCallCheck(this, ChitietnhacungcapModule);
    };

    ChitietnhacungcapModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ChitietnhacungcapModule
    });
    ChitietnhacungcapModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ChitietnhacungcapModule_Factory(t) {
        return new (t || ChitietnhacungcapModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_share_share_module__WEBPACK_IMPORTED_MODULE_6__["ShareModule"], Routing, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_5__["SlickCarouselModule"], _loading_loading_module__WEBPACK_IMPORTED_MODULE_4__["LoadingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChitietnhacungcapModule, {
        declarations: [_chitietnhacungcap_component__WEBPACK_IMPORTED_MODULE_3__["ChitietnhacungcapComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_share_share_module__WEBPACK_IMPORTED_MODULE_6__["ShareModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_5__["SlickCarouselModule"], _loading_loading_module__WEBPACK_IMPORTED_MODULE_4__["LoadingModule"]],
        exports: [_chitietnhacungcap_component__WEBPACK_IMPORTED_MODULE_3__["ChitietnhacungcapComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChitietnhacungcapModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_chitietnhacungcap_component__WEBPACK_IMPORTED_MODULE_3__["ChitietnhacungcapComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_share_share_module__WEBPACK_IMPORTED_MODULE_6__["ShareModule"], Routing, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_5__["SlickCarouselModule"], _loading_loading_module__WEBPACK_IMPORTED_MODULE_4__["LoadingModule"]],
          exports: [_chitietnhacungcap_component__WEBPACK_IMPORTED_MODULE_3__["ChitietnhacungcapComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=default~chitietnhacungcap-chitietnhacungcap-module~page-page-module-es5.js.map
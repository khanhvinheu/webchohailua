(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~page-page-module~profile-ncc-profile-ncc-module"],{

/***/ "./src/app/admin/service/ncc-detail.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/service/ncc-detail.service.ts ***!
  \*****************************************************/
/*! exports provided: NccDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NccDetailService", function() { return NccDetailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/environments/environment.prod */ "./src/app/environments/environment.prod.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _thongbao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./thongbao.service */ "./src/app/admin/service/thongbao.service.ts");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading.service */ "./src/app/admin/service/loading.service.ts");







class NccDetailService {
    constructor(http, thongbaoService, loadingService) {
        this.http = http;
        this.thongbaoService = thongbaoService;
        this.loadingService = loadingService;
        this.API = src_app_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + '/api/admin/';
        this.ProductDetailSub = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.product);
        this.ProductDetailObs = this.ProductDetailSub.asObservable();
    }
    FetchProduct(sanpham_id) {
        this.loadingService.LoadingSub.next(true);
        this.http.get(this.API + 'nhacungcap/' + sanpham_id).subscribe(res => {
            this.ProductDetailSub.next(res['data']);
        }, err => { }, () => this.loadingService.LoadingSub.next(false));
    }
    findIndex(array, id) {
        return array.findIndex(e => e.id === id);
    }
    update_hinh(value) {
        value.append('_method', 'put');
        const url = `${this.API}nhacungcap/${value.get('id')}/changehinh`;
        this.loadingService.LoadingSub.next(true);
        this.http.post(url, value).subscribe(res => {
            if (res['status'] === 'OK') {
                const index = this.findIndex(this.ProductDetailSub.value, Number.parseInt(value.get('id') + ''));
                if (index !== -1) {
                    this.ProductDetailSub.value[index] = res['data'];
                    this.ProductDetailSub.next(this.ProductDetailSub.value);
                }
            }
            this.thongbaoService.open('Cập nhật thành công ảnh đại diện!', 'bg-success');
            this.FetchProduct(Number.parseInt(value.get('id') + ''));
        }, () => { }, () => this.loadingService.LoadingSub.next(false));
    }
}
NccDetailService.ɵfac = function NccDetailService_Factory(t) { return new (t || NccDetailService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_thongbao_service__WEBPACK_IMPORTED_MODULE_4__["ThongbaoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"])); };
NccDetailService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NccDetailService, factory: NccDetailService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NccDetailService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _thongbao_service__WEBPACK_IMPORTED_MODULE_4__["ThongbaoService"] }, { type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] }]; }, null); })();


/***/ }),

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


/***/ }),

/***/ "./src/app/page/profile-ncc/profile-ncc.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/page/profile-ncc/profile-ncc.component.ts ***!
  \***********************************************************/
/*! exports provided: ProfileNccComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileNccComponent", function() { return ProfileNccComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/environments/environment.prod */ "./src/app/environments/environment.prod.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_admin_service_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/admin/service/login.service */ "./src/app/admin/service/login.service.ts");
/* harmony import */ var src_app_admin_service_taikhoan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/admin/service/taikhoan.service */ "./src/app/admin/service/taikhoan.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_admin_service_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/admin/service/dialog.service */ "./src/app/admin/service/dialog.service.ts");
/* harmony import */ var src_app_admin_service_profile_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/admin/service/profile.service */ "./src/app/admin/service/profile.service.ts");
/* harmony import */ var src_app_admin_service_ncc_detail_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/admin/service/ncc-detail.service */ "./src/app/admin/service/ncc-detail.service.ts");
/* harmony import */ var src_app_admin_service_nhacungcap_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/admin/service/nhacungcap.service */ "./src/app/admin/service/nhacungcap.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_admin_service_result_validator_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/admin/service/result-validator.service */ "./src/app/admin/service/result-validator.service.ts");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../loading/loading.component */ "./src/app/page/loading/loading.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng2-ckeditor */ "./node_modules/ng2-ckeditor/__ivy_ngcc__/fesm2015/ng2-ckeditor.js");






















function ProfileNccComponent_mat_option_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", data_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r5.name);
} }
function ProfileNccComponent_mat_option_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const huyens_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", huyens_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](huyens_r6.name);
} }
function ProfileNccComponent_mat_option_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const xas_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", xas_r7.prefix + " " + xas_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", xas_r7.prefix, " ", xas_r7.name, "");
} }
function ProfileNccComponent_ng_container_75_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "L\u01B0u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileNccComponent_ng_container_75_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onToggleShow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "H\u1EE7y");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ProfileNccComponent_button_76_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileNccComponent_button_76_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onToggleShow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ch\u1EC9nh s\u1EEDa");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProfileNccComponent {
    //hoadonxuats: HoaDonXuat[] = [];
    constructor(loginService, _formBuilder, 
    //private diadiemService: DiadiemService,
    userService, dialog, dialogService, profileSevice, nccdetailService, nhacungcapService, activatedRoute, resultValidatorService) {
        this.loginService = loginService;
        this._formBuilder = _formBuilder;
        this.userService = userService;
        this.dialog = dialog;
        this.dialogService = dialogService;
        this.profileSevice = profileSevice;
        this.nccdetailService = nccdetailService;
        this.nhacungcapService = nhacungcapService;
        this.activatedRoute = activatedRoute;
        this.resultValidatorService = resultValidatorService;
        this.api_url = src_app_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].api_img;
        this.isShow = true;
        this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]('en');
        this.tinh = "";
        this.huyensl = "";
        this.xasl = "";
        //duong:any;
        //duongsl="";   
        this.subscriptions = [];
    }
    ngOnDestroy() {
        if (this.subscriptions) {
            this.subscriptions.forEach(e => e.unsubscribe());
        }
    }
    loadEditor() {
        this.ckeConfig = {
            customConfig: 'custom/config.js'
        };
    }
    ngOnInit() {
        this.loadData();
        this.createForm();
    }
    loadData() {
        this.subscriptions.push(this.loginService.currentUser.subscribe(data => {
            if (data) {
                this.currentUser = data;
                const formData = new FormData();
                formData.append('idUser', data.id + '');
                this.profileSevice.fetchExportOrder(formData);
            }
        }));
        this.nccdetailService.ProductDetailObs.subscribe(data => {
            this.nhacungcaps = data;
        }),
            this.activatedRoute.params.subscribe(data => {
                this.nccdetailService.FetchProduct(JSON.parse(localStorage.getItem('nhacungcap'))['id']);
            });
        fetch('./assets/local.json').then(res => res.json()).then(json => {
            const peopleArray = Object.keys(json).map(i => json[i]);
            this.data = peopleArray;
        });
    }
    onShowDonHang(e) {
        // this.dialog.open(ChitietdonhangComponent, {
        //     width: '600px',
        //     data: e,
        //     autoFocus: true,
        //     panelClass: 'filter-popup'
        // });
    }
    onChange($event) {
        const element = this.data.filter(e => e.name == this.tinh);
        this.huyen = element[0].districts;
    }
    onChangexa($event) {
        const element = this.huyen.filter(e => e.name == this.huyensl);
        this.xa = element[0].wards;
    }
    createForm() {
        this.frm = this._formBuilder.group({
            id: [JSON.parse(localStorage.getItem('nhacungcap'))['id']],
            tenNhacungcap: [
                { value: JSON.parse(localStorage.getItem('nhacungcap'))['tenNhacungcap'], disabled: this.isShow },
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z1-9 ]*')
                ]
            ],
            email: [{ value: JSON.parse(localStorage.getItem('nhacungcap'))['email'], disabled: this.isShow }],
            soDienthoai: [
                { value: "0" + JSON.parse(localStorage.getItem('nhacungcap'))['soDienthoai'], disabled: this.isShow }
            ],
            tinh: [{ disabled: this.isShow }],
            huyen: [{ disabled: this.isShow }],
            xa: [{ disabled: this.isShow }],
            diaChihome: [{ value: ((this.currentUser.diaChi).toString()).split("-").reverse()[3], disabled: this.isShow }],
            diaChi: [{ value: JSON.parse(localStorage.getItem('nhacungcap'))['diaChi'], disabled: this.isShow }],
            moTa: [JSON.parse(localStorage.getItem('nhacungcap'))['moTa'], { disabled: this.isShow }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            thongTin: [JSON.parse(localStorage.getItem('nhacungcap'))['thongTin'], { disabled: this.isShow }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    onToggleShow() {
        this.isShow = !this.isShow;
        if (!this.isShow) {
            this.frm.controls['email'].enable();
            this.frm.controls['tenNhacungcap'].enable();
            this.frm.controls['soDienthoai'].enable();
            this.frm.controls['diaChihome'].enable();
            this.frm.controls['diaChi'].enable();
            this.frm.controls['tinh'].enable();
            this.frm.controls['huyen'].enable();
            this.frm.controls['xa'].enable();
            this.frm.controls['moTa'].enable();
            this.frm.controls['thongTin'].enable();
        }
        else {
            this.frm.controls['email'].disable();
            this.frm.controls['tenNhacungcap'].disable();
            this.frm.controls['soDienthoai'].disable();
            this.frm.controls['diaChi'].disable();
            this.frm.controls['diaChihome'].disable();
            this.frm.controls['tinh'].disable();
            this.frm.controls['huyen'].disable();
            this.frm.controls['xa'].disable();
            this.frm.controls['moTa'].disable();
            this.frm.controls['thongTin'].disable();
        }
    }
    onValidator(controlName, status) {
        return this.resultValidatorService.getResult(controlName, this.frm, status);
    }
    onValidatorBorderColor(controlName) {
        return this.resultValidatorService.getBorderColor(controlName, this.frm);
    }
    onValidatorTextColor(controlName) {
        return this.resultValidatorService.getTextColor(controlName, this.frm);
    }
    onSubmitForm() {
        const formData = new FormData();
        formData.append('_method', 'put');
        for (const key in this.frm.value) {
            if (key === 'ngaySinh') {
                this.frm.value[key] = this.datePipe.transform(this.frm.controls[key].value, 'yyyy-MM-dd h:mm:ss');
            }
            formData.append(key, this.frm.value[key]);
        }
        this.nhacungcapService.update(formData);
        this.onToggleShow();
    }
    onChangeHinh(e) {
        if (e.target.files.length > 0) {
            const file = e.target.files[0];
            const formdata = new FormData();
            formdata.append('_method', 'put');
            formdata.append('id', this.nhacungcaps.id + '');
            formdata.append('hinh', file);
            this.nccdetailService.update_hinh(formdata);
        }
    }
    onDoiMatKhau() {
        this.dialogService.showDoiMatKhau();
    }
}
ProfileNccComponent.ɵfac = function ProfileNccComponent_Factory(t) { return new (t || ProfileNccComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_admin_service_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_admin_service_taikhoan_service__WEBPACK_IMPORTED_MODULE_5__["TaikhoanService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_admin_service_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_admin_service_profile_service__WEBPACK_IMPORTED_MODULE_8__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_admin_service_ncc_detail_service__WEBPACK_IMPORTED_MODULE_9__["NccDetailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_admin_service_nhacungcap_service__WEBPACK_IMPORTED_MODULE_10__["NhacungcapService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_admin_service_result_validator_service__WEBPACK_IMPORTED_MODULE_12__["ResultValidatorService"])); };
ProfileNccComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileNccComponent, selectors: [["app-profile-ncc"]], decls: 77, vars: 25, consts: [[1, "tab-content"], ["id", "tab_profile", 1, "tab-pane", "container", "active", "py-5"], [1, "row"], [1, "col-12", "col-lg-4"], [1, "d-flex", "flex-column", "justify-content-between"], [1, "border", "rounded", "box_image", "d-flex", "justify-content-center", 2, "width", "100%", "height", "350px"], ["alt", "", 2, "max-width", "100%", "max-height", "100%", "object-fit", "contain", 3, "src"], ["method", "post", 1, "form_upload"], ["for", "upload-photo", 1, "btn", "btn-info", "w-100"], ["type", "file", "name", "Hinh", "id", "upload-photo", 1, "d-none", 3, "change"], [1, "col-lg-8", "col-12", "pt-3", "pt-lg-0"], [1, "card", "h-100"], [1, "card-header"], [1, "card-body"], [1, "d-flex", "flex-column", "h-100", 3, "formGroup", "ngSubmit"], [1, "form-group", "form-inline"], [1, "text-lg-right", "px-0", "px-lg-3", "col-lg-2", "col-12"], ["type", "text", "formControlName", "tenNhacungcap", "id", "", 1, "form-control", "col-lg-9", "col-12"], ["type", "text", "formControlName", "email", 1, "form-control", "col-lg-9", "col-12"], ["type", "text", "formControlName", "soDienthoai", 1, "form-control", "col-lg-9", "col-12"], [1, "col-lg-4", "col-12"], ["formControlName", "tinh", 3, "ngModel", "disabled", "ngModelChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-lg-5", "col-12"], ["formControlName", "huyen", 3, "ngModel", "disabled", "ngModelChange", "selectionChange"], ["formControlName", "xa", 3, "ngModel", "disabled", "ngModelChange"], ["matInput", "", "formControlName", "diaChihome", "placeholder", "Nh\u1EADp: s\u1ED1 nh\u00E0 - \u1EA5p", 3, "ngModel", "ngModelChange"], [1, "col-lg-9", "col-12"], ["matInput", "", "type", "text", "formControlName", "diaChi", 1, "col-lg-9", "col-12", 3, "value"], [1, "d-flex", "flex-row", "justify-content-between"], [3, "ngClass", "innerHTML"], ["name", "myckeditor", "formControlName", "thongTin", "debounce", "500", 1, "col-lg-9", "col-12", 3, "config"], ["name", "myckeditor", "formControlName", "moTa", "debounce", "500", 1, "col-lg-9", "col-12", 3, "config"], [1, "form-group", "d-flex", "justify-content-center", "mt-auto", "mb-1"], [4, "ngIf"], ["class", "btn btn-sm btn-info btn_edit_profile", 3, "click", 4, "ngIf"], [3, "value"], ["type", " submit", 1, "btn", "btn-sm", "btn-info", "mr-2"], ["t", "", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "btn", "btn-sm", "btn-info", "btn_edit_profile", 3, "click"]], template: function ProfileNccComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "C\u1EADp nh\u1EADt \u1EA3nh \u0111\u1EA1i di\u1EC7n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProfileNccComponent_Template_input_change_11_listener($event) { return ctx.onChangeHinh($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Th\u00F4ng tin nh\u00E0 cung c\u1EA5p ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProfileNccComponent_Template_form_ngSubmit_17_listener() { return ctx.onSubmitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "T\u00EAn NCC:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u0110i\u1EC7n tho\u1EA1i:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " T\u1EC9nh (TP) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileNccComponent_Template_mat_select_ngModelChange_35_listener($event) { return ctx.tinh = $event; })("selectionChange", function ProfileNccComponent_Template_mat_select_selectionChange_35_listener($event) { return ctx.onChange($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "None");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ProfileNccComponent_mat_option_38_Template, 2, 2, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-form-field", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Qu\u1EADn (Huy\u1EC7n) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileNccComponent_Template_mat_select_ngModelChange_42_listener($event) { return ctx.huyensl = $event; })("selectionChange", function ProfileNccComponent_Template_mat_select_selectionChange_42_listener($event) { return ctx.onChangexa($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "None");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ProfileNccComponent_mat_option_45_Template, 2, 2, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-form-field", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Th\u1ECB tr\u1EA5n(ph\u01B0\u1EDDng,xa) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileNccComponent_Template_mat_select_ngModelChange_51_listener($event) { return ctx.xasl = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "None");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, ProfileNccComponent_mat_option_54_Template, 2, 3, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-form-field", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileNccComponent_Template_input_ngModelChange_56_listener($event) { return ctx.diaChihome = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\u0110\u1ECBa ch\u1EC9:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-form-field", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "textarea", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Th\u00F4ng tin:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "ckeditor", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "M\u00F4 t\u1EA3:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "ckeditor", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, ProfileNccComponent_ng_container_75_Template, 5, 0, "ng-container", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, ProfileNccComponent_button_76_Template, 2, 0, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx.api_url, "/upload/sanpham/", (ctx.nhacungcaps == null ? null : ctx.nhacungcaps.hinhAnh) ? ctx.nhacungcaps == null ? null : ctx.nhacungcaps.hinhAnh : "no_image.png", "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.frm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.tinh)("disabled", ctx.isShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.huyensl)("disabled", ctx.isShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.huyen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.xasl)("disabled", ctx.isShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.xa);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.diaChihome);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate4"]("value", "", ctx.diaChihome, "-", ctx.xasl, "-", ctx.huyensl, "-TP.", ctx.tinh, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.onValidatorTextColor("moTa"))("innerHTML", ctx.onValidator("moTa"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.ckeConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.onValidatorTextColor("moTa"))("innerHTML", ctx.onValidator("moTa"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.ckeConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShow);
    } }, directives: [_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__["LoadingComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], ng2_ckeditor__WEBPACK_IMPORTED_MODULE_18__["ɵa"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvcHJvZmlsZS1uY2MvcHJvZmlsZS1uY2MuY29tcG9uZW50LnNhc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileNccComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-ncc',
                templateUrl: './profile-ncc.component.html',
                styleUrls: ['./profile-ncc.component.sass']
            }]
    }], function () { return [{ type: src_app_admin_service_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: src_app_admin_service_taikhoan_service__WEBPACK_IMPORTED_MODULE_5__["TaikhoanService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }, { type: src_app_admin_service_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"] }, { type: src_app_admin_service_profile_service__WEBPACK_IMPORTED_MODULE_8__["ProfileService"] }, { type: src_app_admin_service_ncc_detail_service__WEBPACK_IMPORTED_MODULE_9__["NccDetailService"] }, { type: src_app_admin_service_nhacungcap_service__WEBPACK_IMPORTED_MODULE_10__["NhacungcapService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"] }, { type: src_app_admin_service_result_validator_service__WEBPACK_IMPORTED_MODULE_12__["ResultValidatorService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/page/profile-ncc/profile-ncc.module.ts":
/*!********************************************************!*\
  !*** ./src/app/page/profile-ncc/profile-ncc.module.ts ***!
  \********************************************************/
/*! exports provided: ProfileNccModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileNccModule", function() { return ProfileNccModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _profile_ncc_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-ncc.component */ "./src/app/page/profile-ncc/profile-ncc.component.ts");
/* harmony import */ var src_app_share_share_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/share/share.module */ "./src/app/share/share.module.ts");
/* harmony import */ var src_app_admin_service_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/admin/service/dialog.service */ "./src/app/admin/service/dialog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _loading_loading_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../loading/loading.module */ "./src/app/page/loading/loading.module.ts");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-ckeditor */ "./node_modules/ng2-ckeditor/__ivy_ngcc__/fesm2015/ng2-ckeditor.js");










const routing = [{ path: '', component: _profile_ncc_component__WEBPACK_IMPORTED_MODULE_2__["ProfileNccComponent"] }];
const Routing = _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routing);
class ProfileNccModule {
}
ProfileNccModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProfileNccModule });
ProfileNccModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProfileNccModule_Factory(t) { return new (t || ProfileNccModule)(); }, providers: [src_app_admin_service_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_share_share_module__WEBPACK_IMPORTED_MODULE_3__["ShareModule"], Routing, _loading_loading_module__WEBPACK_IMPORTED_MODULE_6__["LoadingModule"], ng2_ckeditor__WEBPACK_IMPORTED_MODULE_7__["CKEditorModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileNccModule, { declarations: [_profile_ncc_component__WEBPACK_IMPORTED_MODULE_2__["ProfileNccComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_share_share_module__WEBPACK_IMPORTED_MODULE_3__["ShareModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _loading_loading_module__WEBPACK_IMPORTED_MODULE_6__["LoadingModule"], ng2_ckeditor__WEBPACK_IMPORTED_MODULE_7__["CKEditorModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileNccModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_profile_ncc_component__WEBPACK_IMPORTED_MODULE_2__["ProfileNccComponent"],],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_share_share_module__WEBPACK_IMPORTED_MODULE_3__["ShareModule"], Routing, _loading_loading_module__WEBPACK_IMPORTED_MODULE_6__["LoadingModule"], ng2_ckeditor__WEBPACK_IMPORTED_MODULE_7__["CKEditorModule"]
                ],
                providers: [src_app_admin_service_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=default~page-page-module~profile-ncc-profile-ncc-module-es2015.js.map
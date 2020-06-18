import { Component, OnInit } from '@angular/core';
import { environment } from 'src/app/environments/environment.prod';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NhacungcapService } from 'src/app/admin/service/nhacungcap.service';
import { ResultValidatorService } from 'src/app/admin/service/result-validator.service';
import { ImageValidator } from 'src/app/myvalidator/image.validator';
import { TaikhoanService } from 'src/app/admin/service/taikhoan.service';
import { tick } from '@angular/core/testing';
import { LoginService } from 'src/app/admin/service/login.service';
import { Taikhoan } from 'src/app/models/taikhoan';

@Component({
  selector: 'app-form-dangkynhacungcap',
  templateUrl: './form-dangkynhacungcap.component.html',
  styleUrls: ['./form-dangkynhacungcap.component.sass']
})
export class FormDangkynhacungcapComponent implements OnInit {

  api_url = environment.api_img;
  hide = true;
  subcriptions: Subscription[] = [];
    frmAdd: FormGroup;
    frmUpdate: FormGroup;
    error: boolean = null;
    is_loading = false;
    currentUser: Taikhoan;
    constructor(
        private nhaCungCapService: NhacungcapService,
        private resultValidatorService: ResultValidatorService,
        private _formBuilder: FormBuilder,
        private taikhoanService: TaikhoanService,
        private loginService: LoginService,
        //public dialogRef: MatDialogRef<NhacungcapAddComponent>,
        //@Inject(MAT_DIALOG_DATA) public dataReturn: NhaCungCap        
    ) {}
    ngOnInit() {
        this.createForm();
        this.loadData();
    }
    loadData() {
        this.subcriptions.push(
            this.nhaCungCapService.isLoadingObs.subscribe(data => {
                this.is_loading = data;
            })
        );     
        this.loginService.currentUser.subscribe(
            data => {
                this.currentUser = data;
            },
            err => {}            
            
        );
    }
    createForm() {
        this.frmAdd = this._formBuilder.group({         
          tenNhacungcap: [
                '',
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(50),
                    Validators.pattern(
                        '[ a-zA-Z1-9_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ' +
                            'ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ]*'
                    )
                ]
            ],
          diaChi:['',Validators.required],
          soDienthoai:['',Validators.required],
          email:['',Validators.required],
          hinhAnh: [
            '',
            [
                Validators.required,
                ImageValidator.imageSizeValidator(2000000),
                ImageValidator.imageExtensionValidator([
                    'image/jpeg',
                    'image/png'
                ])
            ]
          ],
          idTaiKhoan:[JSON.parse(localStorage.getItem('currentUser'))['id']],
          trangThai:[6],        
        });
        this.frmUpdate=this._formBuilder.group({
          id:[JSON.parse(localStorage.getItem('currentUser'))['id']],
          trangThai:[6],
        });
        
    }
    onSubmitForm() {
        this.nhaCungCapService.createNew(this.frmAdd.value);            
        var formData = new FormData();
        formData.append('_method', 'put');
        
        for (var key in this.frmUpdate.value) {            
            formData.append(key, this.frmUpdate.value[key]);
        }   
       
        this.subcriptions.push(
            this.taikhoanService.updateTrangthai(formData).subscribe(data => {
            }, err => { console.log(err) })
        )         
        
    }
    onValidator(controlName: string, status?: boolean) {
        return this.resultValidatorService.getResult(
            controlName,
            this.frmAdd,
            status
        );
    }
    onValidatorBorderColor(controlName: string) {
        return this.resultValidatorService.getBorderColor(
            controlName,
            this.frmAdd
        );
    }
    onValidatorTextColor(controlName: string) {
        return this.resultValidatorService.getTextColor(
            controlName,
            this.frmAdd
        );
    }
    ngOnDestroy() {
        if (this.subcriptions) {
            this.subcriptions.forEach(e => e.unsubscribe());
        }
    }

}

import { Component, OnInit } from '@angular/core';
import { Taikhoan } from 'src/app/models/taikhoan';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/admin/service/login.service';
import { ResultValidatorService } from 'src/app/admin/service/result-validator.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ConfirmPassword } from 'src/app/myvalidator/confirm-password.validator';
import { HeaderPageComponent } from 'src/app/header-page/header-page.component';
import { environment } from 'src/app/environments/environment.prod';


@Component({
  selector: 'app-dangky',
  templateUrl: './dangky.component.html',
  styleUrls: ['./dangky.component.sass']
})
export class DangkyComponent implements OnInit {
    api_url = environment.api_img;
    hide = true;
    // reCatcha_status = false;
    reCatcha_status = true;
    currentUser: Taikhoan;
    frm: FormGroup;
    subcriptions: Subscription[] = [];
    error = false;
    error_content = 'Tên đăng nhập hoặc mật khẩu không chính xác';
    constructor(
        private router: Router,
        private loginService: LoginService,
        private _formBuilder: FormBuilder,
        private resultValidatorService: ResultValidatorService,
        public dialogRef: MatDialogRef<HeaderPageComponent>
    ) {}
    ngOnInit() {
        this.subcriptions.push(
            this.loginService.currentUser.subscribe(data => {
                this.currentUser = data;
            })
        );
        if (this.currentUser) {
            this.router.navigate(['/']);
        }
        this.createForm();
    }
    createForm() {
        this.frm = this._formBuilder.group({
            email: [
                '',
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(50),
                    Validators.email
                ]
            ],
            hoTen: ['', [Validators.required]],
            password: ['', [Validators.required]],
            re_password: [
                '',
                [Validators.required, ConfirmPassword.confirmPassword()]
            ]
        });
    }
    onSubmitForm() {
        this.loginService.register(this.frm.value).subscribe(
            data => {
                if (data['error'] === true) {
                    this.error = true;
                    this.error_content = 'Lỗi đăng ký ,xin vui lòng thử lại !';
                    setTimeout(() => {
                        this.error = false;
                    }, 3000);
                } else {
                    if (data['error_email'] === true) {
                        this.error = true;
                        this.error_content = 'Email đã tồn tại !';
                        setTimeout(() => {
                            this.error = false;
                        }, 3000);
                    } else {
                        this.loginService.updateUser(data.user);
                        this.router.navigateByUrl('/');
                        this.onNoClick();
                    }
                }
            },
            err => {
                this.error = true;
                setTimeout(() => {
                    this.error = false;
                }, 3000);
            }
        );
    }
    OnDestroy() {
        if (this.subcriptions) {
            this.subcriptions.forEach(e => e.unsubscribe());
        }
    }
    onValidator(controlName: string, status?: boolean) {
        return this.resultValidatorService.getResult(
            controlName,
            this.frm,
            status
        );
    }
    onValidatorBorderColor(controlName: string) {
        return this.resultValidatorService.getBorderColor(
            controlName,
            this.frm
        );
    }
    onValidatorTextColor(controlName: string) {
        return this.resultValidatorService.getTextColor(controlName, this.frm);
    }
    onNoClick(): void {
        this.dialogRef.close();
    }
    public resolved(captchaResponse: string) {
        // this.reCatcha_status = false;
        // if (captchaResponse) {
        //     this.reCatcha_status = true;
        // }
    }

}

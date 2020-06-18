import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRoutingModule } from './page-routing.module';
import { DangkyComponent } from './dangky/dangky.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DemoMaterialModule } from '../admin/material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { ProfileModule } from './profile/profile.module';
import { RecaptchaComponent, RecaptchaModule } from 'ng-recaptcha';
import { ChitietsanphamModule } from './chitietsanpham/chitietsanpham.module';
import { HomepageModule } from './homepage/homepage.module';
import { HeaderHomepageComponent } from './header-homepage/header-homepage.component';
import { GiohangComponent } from './giohang/giohang.component';
import { RowGiohangComponent } from './giohang/row-giohang/row-giohang.component';
import { ChitietnhacungcapModule } from './chitietnhacungcap/chitietnhacungcap.module';
import { DoimatkhauModule } from './doimatkhau/doimatkhau.module';
import { ProfileNccModule } from './profile-ncc/profile-ncc.module';
import { CKEditorModule } from 'ng2-ckeditor';
import { SearchModule } from './search/search.module';
import { MyHelper } from '../helper/MyHelper';
import { DialogService } from '../admin/service/dialog.service';


@NgModule({
  declarations: [
    DangkyComponent, 
    DangnhapComponent, 
    ResetPasswordComponent,    
    TestComponent,   
    HeaderHomepageComponent, 
    GiohangComponent, 
    RowGiohangComponent,     
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ProfileModule ,      
    RecaptchaModule,
    ChitietsanphamModule,
    HomepageModule,
    ChitietnhacungcapModule,
    DoimatkhauModule,
    ProfileNccModule,
    CKEditorModule,
    SearchModule,
  ],

  
})
export class PageModule { }

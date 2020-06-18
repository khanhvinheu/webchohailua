import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { DemoMaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginAdminModule } from './login-admin/login-admin.module';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DanhMucComponent } from './danh-muc/danh-muc.component';
import { DanhmucAddComponent } from './danh-muc/danhmuc-add/danhmuc-add.component';
import { DanhmucListComponent } from './danh-muc/danhmuc-list/danhmuc-list.component';
import { DanhmucEditComponent } from './danh-muc/danhmuc-edit/danhmuc-edit.component';
import { QuyenComponent } from './quyen/quyen.component';
import { QuyenCreateComponent } from './quyen/quyen-create/quyen-create.component';
import { QuyenEditComponent } from './quyen/quyen-edit/quyen-edit.component';
import { DanhmuchinhComponent } from './danhmuchinh/danhmuchinh.component';
import { DanhmuchinhCreateComponent } from './danhmuchinh/danhmuchinh-create/danhmuchinh-create.component';
import { DanhmuchinhEditComponent } from './danhmuchinh/danhmuchinh-edit/danhmuchinh-edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PhuongthucthanhtoanComponent } from './phuongthucthanhtoan/phuongthucthanhtoan.component';
import { PtttCreateComponent } from './phuongthucthanhtoan/pttt-create/pttt-create.component';
import { PtttEditComponent } from './phuongthucthanhtoan/pttt-edit/pttt-edit.component';
import { KhuyenmaiComponent } from './khuyenmai/khuyenmai.component';
import { KhuyenmaiCreateComponent } from './khuyenmai/khuyenmai-create/khuyenmai-create.component';
import { KhuyenmaiEditComponent } from './khuyenmai/khuyenmai-edit/khuyenmai-edit.component';
import { ChitietkhuyenmaiComponent } from './chitietkhuyenmai/chitietkhuyenmai.component';
import { ChitietkhuyenmaiCreateComponent } from './chitietkhuyenmai/chitietkhuyenmai-create/chitietkhuyenmai-create.component';
import { ChitietkhuyenmaiEditComponent } from './chitietkhuyenmai/chitietkhuyenmai-edit/chitietkhuyenmai-edit.component';
import { SanphamComponent } from './sanpham/sanpham.component';
import { ImageAddComponent } from './sanpham/image-add/image-add.component';
import { SanphamAddComponent } from './sanpham/sanpham-add/sanpham-add.component';
// import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CKEditorModule } from 'ng2-ckeditor';
import { ShareModule } from '../share/share.module';
import { SanphamEditComponent } from './sanpham/sanpham-edit/sanpham-edit.component';
import { NhacungcapModule } from './nhacungcap/nhacungcap.module';
import { TaikhoanModule } from './taikhoan/taikhoan.module';
import { TokenInterceptor } from '../auth/intercreptors/token.intercreptor';
import { MyHelper } from '../helper/MyHelper';
import { PageRoutingModule } from '../page/page-routing.module';



@NgModule({
  declarations: [  
     LoginAdminComponent, 
     DanhMucComponent,
     DanhmucAddComponent, 
     DanhmucListComponent, 
     DanhmucEditComponent, 
     QuyenComponent, 
     QuyenCreateComponent,
     QuyenEditComponent, 
     DanhmuchinhComponent,
     DanhmuchinhCreateComponent,
     DanhmuchinhEditComponent, 
     DashboardComponent, 
     PhuongthucthanhtoanComponent, 
     PtttCreateComponent, 
     PtttEditComponent, 
     KhuyenmaiComponent, 
     KhuyenmaiCreateComponent, 
     KhuyenmaiEditComponent, 
     ChitietkhuyenmaiComponent, 
     ChitietkhuyenmaiCreateComponent, 
     ChitietkhuyenmaiEditComponent, 
     SanphamComponent, 
     ImageAddComponent, 
     SanphamAddComponent,
     SanphamEditComponent,
     
       
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    DemoMaterialModule,
    FormsModule,
    LoginAdminModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,RouterModule,
    CommonModule,  
    ReactiveFormsModule,  
    CKEditorModule,
    ShareModule, 
    NhacungcapModule,
    TaikhoanModule ,    
    PageRoutingModule,
    HttpClientModule
  ],
  providers:[
    MyHelper,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ]
  
   

})
export class AdminModule { }

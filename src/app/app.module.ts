import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { PageComponent } from './page/page.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { FooterAdminComponent } from './footer-admin/footer-admin.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { DemoMaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ShareModule } from './share/share.module';
import { LoginModule } from './login/login.module';
import { TokenInterceptor } from './auth/intercreptors/token.intercreptor';
import { DatePipe } from '@angular/common';
import { ConfirmDialogService } from './admin/service/confirm-dialog.service';
import { ThongbaoService } from './admin/service/thongbao.service';
import { HeaderPageComponent } from './header-page/header-page.component';
import { MenuCartComponent } from './header-page/menu-cart/menu-cart.component';
import { DangkynhacungcapComponent } from './header-page/dangkynhacungcap/dangkynhacungcap.component';
import { FormDangkynhacungcapComponent } from './header-page/form-dangkynhacungcap/form-dangkynhacungcap.component';


@NgModule({
   declarations: [
      AppComponent,
      AdminComponent,      
      PageComponent,
      HeaderAdminComponent,
      FooterAdminComponent,
      HeaderPageComponent,
      FooterPageComponent,   
      ConfirmDialogComponent, 
      MenuCartComponent, 
      DangkynhacungcapComponent, 
      FormDangkynhacungcapComponent, 
   
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatSliderModule,
      DemoMaterialModule,
      FormsModule,HttpClientModule,
      ReactiveFormsModule ,
      ShareModule,
      LoginModule,
      ReactiveFormsModule,     
      
   ],
   providers: [
      ThongbaoService,      
      ConfirmDialogService,     
      DatePipe,
      { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

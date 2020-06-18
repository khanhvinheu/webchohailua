import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { LoginService } from '../admin/service/login.service';
import { TaikhoanService } from '../admin/service/taikhoan.service';
import { Taikhoan } from '../models/taikhoan';
import { Subscription } from 'rxjs';
import { environment } from '../environments/environment.prod';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.sass']
})
export class HeaderAdminComponent implements OnInit {
  api_url = environment.api_img;
  subscriptions: Subscription[] = [];
  currentUser: Taikhoan;
  count = 0;
  mobileQuery: MediaQueryList;
  fillerNav = [
      { name: 'Bảng điều khiển', link: 'dashboard' },
      // { name: 'Phân quyền', link: 'phanquyen' },
      // { name: 'Báo cáo', link: 'baocao' },
      { name: 'Tài Khoản', link: 'taikhoan' },
      { name: 'Nhà Cung Cấp', link: 'nhacungcap' },
      // { name: 'Nhà Sản Xuất', link: 'nhasanxuat' },
      { name: 'Danh Mục', link: 'danhmuc' },
      { name: 'Danh mục hình', link: 'danhmuchinh' },
      { name: 'Sản phẩm', link: 'sanpham' },
      { name: 'Khuyến mãi', link: 'khuyenmai' },
      { name: 'Chi tiết khuyến mãi', link: 'chitietkhuyenmai' },
      { name: 'Quyền', link: 'quyen' },
     // { name: 'Đánh giá', link: 'danhgia' },
      // { name: 'Hóa đơn nhập', link: 'hoadonnhap' },
      // { name: 'Hóa đơn xuất', link: 'reset-pass-admin' },
      { name: 'Địa điểm', link: 'login' },
      // { name: 'Trạng Thái', link: 'trangthai' },
      { name: 'Phương thức thanh toán', link: 'pttt'},
  ];
  _mobileQueryListener: () => void;
  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private loginService: LoginService,
    private router: Router, 
    
    private taikhoanService: TaikhoanService 
   
  ) {
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
      this.taikhoanService.getAll();
    
  }
  ngOnInit(): void {
    this.subscriptions.push(
      this.loginService.currentUser.subscribe(data => {
          this.currentUser = data;
         
          
      }),
      // this.hoadonxuatService.itemsObs.subscribe(data => {
      //     this.hoadonxuats = data;
      //     this.count = this.hoadonxuats.filter(
      //         e => e.idTrangThai === 1
      //     ).length;
      // })
  );
  }
  ngOnDestroy(): void {
    
  }
  onLogout() {
      this.loginService.logout();
      this.router.navigate(['/']);
  }
  getCountDH() {
    //   return this.count;
  }

}

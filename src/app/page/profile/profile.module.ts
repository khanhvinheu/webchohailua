import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule, Routes } from '@angular/router';
import { ShareModule } from 'src/app/share/share.module';
import { DialogService } from 'src/app/admin/service/dialog.service';
import { DoimatkhauComponent } from './doimatkhau/doimatkhau.component';



const routing: Routes = [{ path: '', component: ProfileComponent }];
const Routing: ModuleWithProviders = RouterModule.forChild(routing);
@NgModule({
  declarations: [ProfileComponent, DoimatkhauComponent],
  imports: [
    CommonModule,ShareModule,Routing
  ],
  providers: [DialogService]
})
export class ProfileModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { ResetPassAdminComponent } from './reset-pass-admin/reset-pass-admin.component';


const routes: Routes = [
  { 
    path: '',
    component: AdminComponent,
    children: [      
      {
        path:'', component:LoginAdminComponent
      },{
        path:'reset-pass-admin',
        component:ResetPassAdminComponent
      }
    ]
    
  }, 
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

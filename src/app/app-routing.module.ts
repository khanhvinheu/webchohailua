import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { 
    path: 'admin', component: AdminComponent,
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }, 
  {
    path:'home', component:HomepageComponent,
    loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule)
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

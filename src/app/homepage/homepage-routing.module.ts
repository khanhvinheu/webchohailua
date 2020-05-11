import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomepageModule } from './homepage.module';
import { HomepageComponent } from './homepage.component';


const routes: Routes = [
  { 
    path: '',
    component: HomepageModule,
    children: [      
      {
        path:'', component:HomepageComponent
      },
    ]
    
  }, 
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }

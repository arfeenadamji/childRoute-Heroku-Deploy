import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';

const routes: Routes=[
  {
    path:"",
    component:DashboardComponent,
    // resolve:{
    //   data: DashboardService
    // }
  },
  // {
  //   path:":id",
  //   component:RevenueComponent
  // }
]

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers:[
    DashboardService
  ]
})
export class DashboardModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, RoutesRecognized } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminService } from './admin.service';

const routes: Routes=[
  {
    path:'',
    component:AdminComponent,
  }
]


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers:[
    AdminService
  ]
})
export class AdminModule { }

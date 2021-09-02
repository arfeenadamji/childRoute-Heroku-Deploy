import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ResetPasswordComponent } from 'src/app/auth/reset-password/reset-password.component';
import { RefundsComponent } from './refunds.component';
import { RefundsService } from './refunds.service';

const routes: Routes=[
  {
    path:'',
    component:RefundsComponent
  }
]

@NgModule({
  declarations: [
    RefundsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers:[RefundsService]
})
export class RefundsModule { }

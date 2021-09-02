import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmedBookingsComponent } from './confirmed-bookings.component';
import { ConfirmedBookingsService } from './confirmed-bookings.service';

const routes: Routes=[
  {
    path:'',
    component:ConfirmedBookingsComponent
  }
]

@NgModule({
  declarations: [
    ConfirmedBookingsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers:[ConfirmedBookingsService]
})
export class ConfirmedBookingsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CancelledTicketsComponent } from './cancelled-tickets.component';
import { CancelledTicketsService } from './cancelled-tickets.service';

const routes: Routes=[
 {
    path:'',
  component:CancelledTicketsComponent
}
]

@NgModule({
  declarations: [
    CancelledTicketsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers:[
    CancelledTicketsService
  ]
})
export class CancelledTicketsModule { }

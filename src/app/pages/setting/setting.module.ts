import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SettingComponent } from './setting.component';
import { SettingService } from './setting.service';

const routes: Routes=[
  {
    path:'',
    component:SettingComponent
  }
]

@NgModule({
  declarations: [
    SettingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers:[SettingService]
})
export class SettingModule { }

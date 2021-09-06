import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { UserService } from './user.service';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes=[
    { path: '', redirectTo: '/create', pathMatch: 'full' },
    { path: 'create', component: CreateUserComponent },
    { path: 'list-users', component: ListUserComponent },
    { path: 'update-user/:id', component: EditUserComponent }
]

@NgModule({
  declarations: [
    ListUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers:[UserService]
})
export class UserModule { }

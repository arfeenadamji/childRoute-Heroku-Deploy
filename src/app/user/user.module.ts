import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { CreateUserComponent } from './create-user/create-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes=[
  // { path: '', redirectTo: '/create', pathMatch: 'full' },
  // { path: 'create', component: CreateUserComponent },
  // { path: 'list-users', component: ListUserComponent },
  // { path: 'update-user/:id', component: EditUserComponent }
]

@NgModule({
  declarations: [CreateUserComponent, EditUserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[UserService]
})
export class UserModule { }

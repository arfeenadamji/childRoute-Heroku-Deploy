import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { FirstLoginComponent } from './auth/first-login/first-login.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { ListUserComponent } from './user/list-user/list-user.component';

const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'forgot-password', component:ForgotPasswordComponent},
  {path:'verify-email', component:VerifyEmailComponent},
  
  {path:'first-login', component:FirstLoginComponent},
  {path:'reset-password', component:ResetPasswordComponent},
  
    {path: 'create', component: CreateUserComponent, canActivate: [AuthGuard] },
    { path: 'list-users', component: ListUserComponent },
    { path: 'update-user/:id', component: EditUserComponent },
    { path: '**', component: LoginComponent },                       // catch-all in case no other path matched

  
  {
    path:"dashboard",
    loadChildren:() =>
    import ("./pages/dashboard/dashboard.module").then(mod => mod.DashboardModule)
  },
  {
    path:'admin',
    loadChildren:()=>
    import ("./pages/admin/admin.module").then(mod => mod.AdminModule)
  },
  {
    path:'cancelled-tickets',
    loadChildren:()=>
      import ("./pages/cancelled-tickets/cancelled-tickets.module").then(mod => mod.CancelledTicketsModule)
  },
  {
    path:'confirmed-bookings',
    loadChildren:()=>
    import("./pages/confirmed-bookings/confirmed-bookings.module").then(mod => mod.ConfirmedBookingsModule)
  },
  {
    path:'customers',
    loadChildren:()=>
    import("./pages/customers/customers.module").then(mod => mod.CustomersModule)
  },
  {
    path:'refunds',
    loadChildren:()=>
    import("./pages/refunds/refunds.module").then(mod => mod.RefundsModule)
  },
  {
    path:'setting',
    loadChildren:()=>
    import("./pages/setting/setting.module").then(mod => mod.SettingModule)
  },
  {
    path:'refund',
    loadChildren:()=>
    import("./pages/refunds/refunds.module").then(mod => mod.RefundsModule)
  },
  {
    path:'setting',
    loadChildren:()=>
    import("./pages/setting/setting.module").then(mod => mod.SettingModule)
  },
  // {
  //   path:'create',
  //   loadChildren:()=>
  //   import ('./user/user.module').then(mod => mod.UserModule)
  // }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

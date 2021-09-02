import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FirstLoginComponent } from './auth/first-login/first-login.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { RegisterComponent } from './auth/register/register.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { SignupComponent } from './auth/signup/signup.component';
// import { AdminComponent } from './pages/admin/admin.component';
// import { CustomersComponent } from './pages/customers/customers.component';
// import { ConfirmedBookingsComponent } from './pages/confirmed-bookings/confirmed-bookings.component';
// import { CancelledTicketsComponent } from './pages/cancelled-tickets/cancelled-tickets.component';
// import { RefundsComponent } from './pages/refunds/refunds.component';
// import { SettingComponent } from './pages/setting/setting.component';
// import { DynamicTableComponent } from './utils/shared/dynamic-table/dynamic-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FirstLoginComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    ResetPasswordComponent,
    SignupComponent,
    // AdminComponent,
    // CustomersComponent,
    // ConfirmedBookingsComponent,
    // CancelledTicketsComponent,
    // RefundsComponent,
    // SettingComponent,
    // DynamicTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

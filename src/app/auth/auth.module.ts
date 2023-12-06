import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GoogleLoginCardComponent } from './google-login-card/google-login-card.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LoginLogoutButtonComponent } from './login-logout-button/login-logout-button.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    GoogleLoginCardComponent,
    ResetPasswordComponent,
    LoginLogoutButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule
  ],
  exports: [
    RegisterComponent,
    GoogleLoginCardComponent,
    LoginComponent,
    ResetPasswordComponent,
    LoginLogoutButtonComponent
  ]
})

export class AuthModule { }

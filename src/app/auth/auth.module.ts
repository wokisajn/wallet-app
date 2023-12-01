import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GoogleLoginCardComponent } from './google-login-card/google-login-card.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    GoogleLoginCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ],
  exports: [
    RegisterComponent,
    GoogleLoginCardComponent,
    LoginComponent
  ]
})

export class AuthModule { }

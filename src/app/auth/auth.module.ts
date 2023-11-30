import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GoogleLoginCardComponent } from './google-login-card/google-login-card.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    GoogleLoginCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    RegisterComponent,
    GoogleLoginCardComponent,
    LoginComponent
  ]
})
export class AuthModule { }

import { Component } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: FormControl = new FormControl('', Validators.required);
  constructor(private authService: AuthService ) {
  }

  loginWithEmail() {
    this.authService.registerWithEmailAndPassword(this.username, this.password.value).then(r => {
      console.log(r);
    }).catch(e => {
      console.log(e);
    })
  }
}

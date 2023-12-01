import {Component} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  // password: FormControl = new FormControl('', Validators.required);

  constructor(private authService: AuthService) {
  }

  loginWithEmail() {
    console.log('this.username, this.password');
    console.log(this.username, this.password);
    this.authService.singInWithEmailAndPassword({
      email: this.username,
      password: this.password
    }).then(r => {
      console.log(r);
    }).catch(e => {
      console.log(e);
    })
  }
}

import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  hide: boolean = true;
  passwordControl: FormControl = new FormControl('', Validators.required);
  loginForm: FormGroup = new FormGroup(
    {
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    }
  )


  // password: FormControl = new FormControl('', Validators.required);

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
   
  }

  loginWithEmail() {
    console.log( 'here',
    this.loginForm.value.username,
    this.loginForm.value.password
    );
    this.authService.signInWithEmailAndPassword({
      email: this.loginForm.value.username,
      password: this.loginForm.value.password
    }).then(r => {
      console.log(r);
    }).catch(e => {
      console.log(e);
    });
  }
}

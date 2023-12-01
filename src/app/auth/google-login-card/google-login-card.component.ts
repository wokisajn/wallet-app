import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-google-login-card',
  templateUrl: './google-login-card.component.html',
  styleUrls: ['./google-login-card.component.scss']
})
export class GoogleLoginCardComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  loginWithGoogle() {
    this.authService.signInWithGoogle().then((res: any) => {
      this.router.navigateByUrl('home');
    }).catch((error: any) => {
      console.error(error);
    });
  }
}

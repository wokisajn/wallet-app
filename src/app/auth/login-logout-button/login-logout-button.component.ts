import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-logout-button',
  templateUrl: './login-logout-button.component.html',
  styleUrls: ['./login-logout-button.component.scss']
})

export class LoginLogoutButtonComponent {
  constructor(
    public authService: AuthService, 
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  login() {
    this.router.navigate(['/login']);
    this.snackBar.open('Login');
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
    this.snackBar.open('Logged out');
  }

  isLoggedIn() {
    return this.authService.isAuthenticated();
  }
}

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

constructor(
  private authService: AuthService
) {}

  public isLoggedIn(): Observable<boolean> {
    return this.authService.isAuthenticated();
  }
}

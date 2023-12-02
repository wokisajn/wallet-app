import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit{

  registerForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators. email]), 
  });

  constructor(    
    private authService: AuthService, 
    private router: Router
  ) {
    
  }

  ngOnInit(): void {
    
  }

  resetPassword() {
    // Get the username from the form
    const username = this.registerForm.get('username')?.value;
    this.authService.resetPassword(username).then(() => {
      this.router.navigate(['/auth/login']);
    }).catch((error) => {
      console.log(error);
    });
  }
}

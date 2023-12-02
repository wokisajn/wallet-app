import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit{

  hide: boolean = true;
  hideConfirmPassword: boolean = true;
  registerForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators. email]), 
    phoneNumber: new FormControl("", [Validators.required]), 
    password: new FormControl("", [Validators.required]), 
    confirmPassword: new FormControl("", [Validators.required]),
  });

  constructor(
    private authService: AuthService, 
    private router: Router
  ) {
  }

  ngOnInit(): void {
    
  }

  registerWithEmailAndPassword() {
    const userData = Object.assign(this.registerForm.value, {email: this.registerForm.value.username});

    this.authService.registerWithEmailAndPassword(userData).then((res: any) => {
      this.router.navigateByUrl('/login');
    }).catch((error: any) => {
      console.error(error);
    });
  }
}

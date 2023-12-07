import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {BehaviorSubject, Observable, map} from "rxjs";
import { User } from 'firebase/auth';
import {GoogleAuthProvider} from "@angular/fire/auth";
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  user: Observable<User | null> | null;

  constructor(
    private afa: AngularFireAuth,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.user = null;
  }

  signInWithGoogle() {
    return this.afa.signInWithPopup(new GoogleAuthProvider());
  }

  registerWithEmailAndPassword(user: { email: string; password: string }) {
    console.log('username, user');
    console.log(user.email, user.password);
    return new Promise((resolve, reject) => {
      this.afa.createUserWithEmailAndPassword(user.email, user.password)
        .then((userData) => {
          userData.user?.updateProfile({
            displayName: user.email,
          }).then(() => {
            resolve(userData);
          }).catch((error) => {
            reject(error);
          });
        }).catch((error) => {
        reject(error);
      });
    });
  }
  
  signInWithEmailAndPassword(user: {email: string, password: string}) {
    return new Promise((resolve, reject) => {
      this.setAuthenticationState(true);
      this.afa.signInWithEmailAndPassword(user.email, user.password)
        .then((userData) => {
          resolve(userData);
          this.router.navigate(['/']);
        }).catch((error) => {
          reject(error);
          
      });
    });
  }

  logout() {
    return new Promise((resolve, reject) => {
      this.setAuthenticationState(false);
      this.afa.signOut()
        .then(() => {
          resolve(true);
          this.router.navigate(['/']);
        }).catch((error) => {
        reject(error);
      });
    });
  }

  getCurrentUser() {
    return this.afa.currentUser;
  }

  resetPassword(passwordResetEmail: string) {
    return new Promise((resolve, reject) => {
      this.afa.sendPasswordResetEmail(passwordResetEmail)
        .then(() => {
          resolve(true);
        }).catch((error) => {
          reject(error);
      });
    });
  }

  isAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }
  
  setAuthenticationState(isAuthenticated: boolean): void {
    this.isAuthenticatedSubject.next(isAuthenticated);
  }
}

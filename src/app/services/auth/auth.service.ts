import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Observable} from "rxjs";
import { User } from 'firebase/auth';
import {GoogleAuthProvider} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<User | null> | null;

  constructor(private afa: AngularFireAuth) {
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
      this.afa.signInWithEmailAndPassword(user.email, user.password)
        .then((userData) => {
          resolve(userData);
        }).catch((error) => {
        reject(error);
      });
    });
  }

  logout() {
    // return new Promise((resolve, reject) => {
    //   this.afa.signOut()
    //     .then(() => {
    //       resolve(true);
    //     }).catch((error) => {
    //     reject(error);
    //   });
    // });
  }

  getCurrentUser() {
    // return new Promise((resolve, reject) => {
    //   this.afa.onAuthStateChanged((user) => {
    //     resolve(user);
    //   }).catch((error) => {
    //     reject(error);
    //   });
    // });
  }

  async forgotPassword(passwordResetEmail: string) {
    try {
      await this.afa.sendPasswordResetEmail(passwordResetEmail);
      window.alert('Password reset email sent');
    } catch {
      window.alert(console.error());
    }
  }
}

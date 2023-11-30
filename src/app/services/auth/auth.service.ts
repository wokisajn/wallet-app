import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Observable} from "rxjs";
import { User } from 'firebase/auth';
import {Auth} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<User | null> | null;
  //
  // constructor() {
    constructor(private afa: AngularFireAuth) { //private afs: AngularFireAuth !!! ISSUE breaks the whole app
    this.user = null;
  }

  signInWithGoogle() {
    // return this.afa.signInWithPopup(new Auth.GoogleAuthProvider());
  }

  registerWithEmailAndPassword(username: string, user: { email: string; password: string }) {
    return new Promise((resolve, reject) => {
      this.afa.createUserWithEmailAndPassword(user.email, user.password)
        .then((userData) => {
          userData.user?.updateProfile({
            displayName: username,
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

  singInWithEmailAndPassword(user: {email: string, password: string}) {
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

  }

  getCurrentUser() {

  }
}

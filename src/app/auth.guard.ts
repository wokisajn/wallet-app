import { CanActivateFn } from '@angular/router';
import { AuthService } from './services/auth/auth.service';



export const authGuard: CanActivateFn = (route, state) => {
  return true;
};

export const authGuardChild: CanActivateFn = (route, state) => {
  return true;
}

export const authGuardSubscribers: CanActivateFn = (route, state) => { 
  return true; 
}

export const authGuardLoggedIn: CanActivateFn = (route, state) => { 
  return true; 
}
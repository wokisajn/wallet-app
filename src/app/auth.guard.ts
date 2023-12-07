import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth/auth.service';
import { inject } from '@angular/core';

export const authGuardLoggedIn: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const isLoggedIn = authService.isAuthenticatedSubject.value;
  const router: Router = inject(Router);
  return isLoggedIn;
};

export const authGuardChild: CanActivateFn = (route, state) => {
  return true;
}

export const authGuardSubscribers: CanActivateFn = (route, state) => {
  return true;
}

export const authGuard: CanActivateFn = (route, state) => {
  return true;
}
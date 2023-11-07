import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@app/services/http-service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)
  const user = authService.userValue
  if(user?.data.token) {
    return true;
  }
  router.navigate(['/login'])
  return false
};

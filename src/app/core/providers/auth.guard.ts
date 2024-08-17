import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { StateService } from '@shared/services/state.service';

export const authGuard: CanActivateFn = (route, state) => {
  const stateService = inject(StateService);
  const router = inject(Router);

  if (stateService.squareStateData().email !== '') return true

  return router.createUrlTree(['/login']);

};

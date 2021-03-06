import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private _router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem('trainer') === null /* || JSON.parse(localStorage.getItem('trainer') as string).username === '' */) {
      this._router.navigate(['login']);
      return false;
    } else {
      return true;
    }
  }
}

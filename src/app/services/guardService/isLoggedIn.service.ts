import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class isLoggedIn implements CanActivate {
  constructor(private _router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem('trainer') !== null /* || JSON.parse(localStorage.getItem('trainer') as string).username !== '' */) {
      this._router.navigate(['trainer']);
      return false;
    } else return true;
  }
}

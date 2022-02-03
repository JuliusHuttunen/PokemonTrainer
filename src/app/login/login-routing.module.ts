import { NgModule } from '@angular/core';
import { LoginPage } from '../login/login.page';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { isLoggedIn } from '../services/guardService/isLoggedIn.service';

const routes: Routes = [
  {
    path: '',
    component: LoginPage,
    canActivate: [isLoggedIn]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}

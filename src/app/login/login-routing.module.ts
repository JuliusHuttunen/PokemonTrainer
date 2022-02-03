import { NgModule } from '@angular/core';
import { LoginPage } from '../login/login.page';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: LoginPage
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from '../components/catalogue/catalogue.component';
import { LoginComponent } from '../components/login/login.component';
import { TrainerComponent } from '../components/trainer/trainer.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'trainer',
    component: TrainerComponent,
  },
  {
    path: 'catalogue',
    component: CatalogueComponent,
  },
];

@NgModule({
  declarations: [CatalogueComponent, LoginComponent, TrainerComponent],
  imports: [RouterModule.forRoot(routes), BrowserModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}

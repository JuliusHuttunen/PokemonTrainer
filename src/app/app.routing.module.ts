import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'catalogue',
    loadChildren: () => import('./catalogue/catalogue.module').then((m) => m.CatalogueModule)
  },
  {
    path: 'trainer',
    loadChildren: () => import('./trainer/trainer.module').then((m) => m.TrainerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

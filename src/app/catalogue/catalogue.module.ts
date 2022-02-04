import { NgModule } from '@angular/core';
import { CataloguePage } from './catalogue.page';
import { CatalogueRoutingModule } from './catalogue-routing.module'
import { CommonModule } from '@angular/common';
import { TitlebarComponent } from './components/titlebar/titlebar.component';

@NgModule({
  declarations: [CataloguePage ,TitlebarComponent],
  imports: [CatalogueRoutingModule, CommonModule],
})
export class CatalogueModule {}

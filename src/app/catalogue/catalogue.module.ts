import { NgModule } from '@angular/core';
import { CataloguePage } from './catalogue.page';
import { CatalogueRoutingModule } from './catalogue-routing.module'
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CataloguePage],
  imports: [CatalogueRoutingModule, CommonModule],
})
export class CatalogueModule {}

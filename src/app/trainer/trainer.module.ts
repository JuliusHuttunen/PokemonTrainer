import { NgModule } from '@angular/core';
import { TrainerPage } from './trainer.page';
import { TrainerRoutingModule } from './trainer-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TrainerPage],
  imports: [TrainerRoutingModule, CommonModule],
})
export class TrainerModule {}

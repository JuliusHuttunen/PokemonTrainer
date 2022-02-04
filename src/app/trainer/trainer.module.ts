import { NgModule } from '@angular/core';
import { TrainerPage } from './trainer.page';
import { TrainerRoutingModule } from './trainer-routing.module';
import { CommonModule } from '@angular/common';
import { TitlebarComponent } from './components/titlebar/titlebar.component';

@NgModule({
  declarations: [TrainerPage, TitlebarComponent],
  imports: [TrainerRoutingModule, CommonModule],
  
})
export class TrainerModule {}

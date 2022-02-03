import { NgModule } from '@angular/core';
import { TrainerPage } from './trainer.page';
import { TrainerRoutingModule } from './trainer-routing.module';
import { TitlebarComponent } from './components/titlebar/titlebar.component';

@NgModule({
  declarations: [TrainerPage, TitlebarComponent],
  imports: [TrainerRoutingModule],
})
export class TrainerModule {}

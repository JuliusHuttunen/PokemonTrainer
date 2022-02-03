import { NgModule } from '@angular/core';
import { LoginPage } from './login.page';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  declarations: [LoginPage, LoginFormComponent],
  imports: [FormsModule, LoginRoutingModule],
})
export class LoginModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { HeaderComponent } from './components/header/header.component';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from './services/guardService/authGuard.service';
import { isLoggedIn } from './services/guardService/isLoggedIn.service';
import { TitlebarComponent } from './components/titlebar/titlebar.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, TitlebarComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [AuthGuardService, isLoggedIn],
  bootstrap: [AppComponent],
})
export class AppModule {}

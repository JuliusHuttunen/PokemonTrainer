import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'pokemon-trainer';

  isLoggedIn(): boolean {
    if (localStorage.getItem('trainer') === null) return false;
    return true;
  }
}

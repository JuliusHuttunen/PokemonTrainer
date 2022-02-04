import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pokemon-trainer';

  isLoggedIn(): boolean {
    if (localStorage.getItem('trainer') === null) return false;
    return true;
  }
}

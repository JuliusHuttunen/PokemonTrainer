import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getUserFromAPI } from 'src/app/services/trainerAPI/trainer.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  constructor(private _router: Router) {}
  userName: string = '';
  public handleUser = async (userName: string) => {
    const [error, user] = await getUserFromAPI(userName);
    if (user !== null) {
      localStorage.setItem("trainer", user.username)
      this._router.navigate(['trainer']);
    }
  };

  public handleClick = () => {
    this.handleUser(this.userName);
  };
}

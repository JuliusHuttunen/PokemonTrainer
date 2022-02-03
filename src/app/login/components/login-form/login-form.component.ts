import { Component } from '@angular/core';
import { getUserFromAPI } from 'src/app/services/trainerAPI/trainerAPI';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  userName: string = '';

  public handleUser = async (userName: string) => {
    const [error, user] = await getUserFromAPI(userName);
    console.log('ERR', error);
    console.log('USER', user);
  };

  public handleClick = () => {
    this.handleUser(this.userName);
  };
}

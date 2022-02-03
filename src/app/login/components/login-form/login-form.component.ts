import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TrainerService } from 'src/app/services/trainerAPI/trainer.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  constructor(private _router: Router, private readonly trainerService: TrainerService) {}
  username: string = '';
  

  public handleClick = () => {
    if (this.trainerService.userExists(this.username)) {
      this._router.navigate(['trainer']);
    } else {
      this.trainerService.registerNewUser(this.username)
      this._router.navigate(['trainer']);
    }
  };
}

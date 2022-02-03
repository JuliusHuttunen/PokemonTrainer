import { Component, OnInit } from '@angular/core';
import { TrainerService } from '../services/trainerAPI/trainer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
})
export class LoginPage implements OnInit {
  constructor(private readonly trainerService: TrainerService) {}
  ngOnInit(): void {
    this.trainerService.getUsersFromAPI()
  }
}

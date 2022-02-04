import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class TrainerService {
  private BASE_URL: string = 'https://noroff-api-2022.herokuapp.com/trainers';
  private API_KEY: string =
    'mCCrFQCflzcRNCMK+alj0mCPRlb94Nt3GH2jAJaLLu0kB4TM7+rraU8CimfYqUHh3GgpLFgyUO1oG9MoOAJrZA==';
  private _users: User[] = [];
  private _headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'X-API-KEY': this.API_KEY,
  });
  private options = { headers: this._headers };

  constructor(private readonly http: HttpClient) {}

  public getUsersFromAPI(): void {
    this.http.get<User[]>(this.BASE_URL, this.options).subscribe({
      next: (users: User[]) => {
        this._users = users;
      },
      error: (error) => {
        console.log(error.message);
      },
    });
  }

  public userExists(username: string): boolean {
    for (let user of this._users) {
      if (user.username.toLowerCase() === username.toLowerCase()) {
        localStorage.setItem('trainer', JSON.stringify({ username: username }));
        localStorage.setItem('pokemontrainer', JSON.stringify(user));
        return true;
      }
    }
    localStorage.setItem('trainer', JSON.stringify({ username: username }));
    return false;
  }

  public registerNewUser(username: string): void {
    this.http
      .post<User>(
        this.BASE_URL,
        JSON.stringify({ username: username, pokemon: [] }),
        this.options
      )
      .subscribe({
        next: (user: User) => {
          this._users.push(user);
          localStorage.setItem('pokemontrainer', JSON.stringify(user));
        },
        error: (error) => {
          sessionStorage.clear()
          console.log(error.message);
        },
      });
  }

  public catchPokemon(user: User): void {
    this.http
      .post<User>(`${this.BASE_URL}${user.id}`, user, this.options)
      .subscribe({
        next: (data: User) => {
          console.log(data);
        },
        error: (error) => {
          console.log(error.message);
        },
      });
  }
}

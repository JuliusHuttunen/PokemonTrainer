import { Injectable } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private _pokemons: Pokemon[] = [];
  private _error: string = '';

  constructor(private readonly http: HttpClient) {}

  public fetchPokemons(): void {
    this.http
      .get<Pokemon[]>('https://pokeapi.co/api/v2/pokemon?limit=151')
      .subscribe({
        next: (data: any) => {
          this._pokemons = data.results;
        },
        error: error => {
          console.log(error.message);
        }
      });
  }
  public pokemons(): Pokemon[] {
    return this._pokemons;
  }

  public error(): string {
    return this._error;
  }
}

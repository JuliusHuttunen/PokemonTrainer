import { Injectable } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private _pokemons: Pokemon[] = [];
  constructor(private readonly http: HttpClient) {}

  public fetchPokemons(): void {
    this.http
      .get<Pokemon[]>('https://pokeapi.co/api/v2/pokemon?limit=151')
      .subscribe({
        next: (data: any) => {
          this._pokemons = data.results;
          sessionStorage.setItem('pokemons', JSON.stringify(data.results))
        },
        error: (error) => {
          console.log(error.message);
        },
      });
  }
  public pokemons(): Pokemon[] {
    return this._pokemons;
  }
}

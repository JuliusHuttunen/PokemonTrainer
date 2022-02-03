import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private pokemons: Pokemon[] = [];
  private error: string = '';

  constructor(private readonly http: HttpClient) {}

  public fetchPokemons(): void {
    this.http
      .get<Pokemon[]>('https://pokeapi.co/api/v2/pokemon?limit=1118')
      .subscribe(
        (pokemons: Pokemon[]) => {
          this.pokemons = pokemons;
        },
        (error: HttpErrorResponse) => {
          this.error = error.message;
        }
      );
  }
}

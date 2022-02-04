import { Component } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { User } from '../models/user.model';

@Component({
  selector: 'app-trainer-page',
  templateUrl: './trainer.page.html',
  styleUrls: ['./trainer.page.css'],
})
export class TrainerPage {
  get pokemons(): Pokemon[] {
    const pokemonArray: Pokemon[] = [];
    const _allPokemons: Pokemon[] = JSON.parse(
      sessionStorage.getItem('pokemons') || '[]'
    );
    const _trainer: User = JSON.parse(localStorage.getItem('user') || '[]');
    for (let ownedPokemon of _trainer.pokemon) {
      for (let pokemon of _allPokemons) {
        if (pokemon.name === ownedPokemon) {
          pokemonArray.push(pokemon);
        }
      }
    }
    return pokemonArray;
  }

  handleItemClick = (pokemon: Pokemon) => {
    console.log(pokemon);
  };
}

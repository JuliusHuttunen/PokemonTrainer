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
    const storageItem: string = localStorage.getItem('user') as string;
    const pokemonTrainer: User = JSON.parse(storageItem);
    for (let idPokemon of this.idPokemons) {
      for (let pokemon of pokemonTrainer.pokemon)
        if (idPokemon.name === pokemon) {
          pokemonArray.push(idPokemon);
        }
    }
    return pokemonArray;
  }

  get idPokemons(): Pokemon[] {
    const storageItem: string = sessionStorage.getItem('pokemons') as string;
    const pokemons: Pokemon[] = JSON.parse(storageItem);
    return pokemons;
  }

  handleItemClick = (pokemon: Pokemon) => {
    console.log(pokemon);
  };
}

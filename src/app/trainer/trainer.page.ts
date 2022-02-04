import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { User } from '../models/user.model';
import { PokemonsService } from '../services/pokemonAPI/pokemons.service';
import { TrainerService } from '../services/trainerAPI/trainer.service';

@Component({
  selector: 'app-trainer-page',
  templateUrl: './trainer.page.html',
  styleUrls: ['./trainer.page.css'],
})
export class TrainerPage implements OnInit {
  constructor(
    private readonly trainerService: TrainerService,
    private readonly pokemonService: PokemonsService
  ) {}

  ngOnInit(): void {
    if (sessionStorage.getItem('pokemons') === null)
      this.pokemonService.fetchPokemons();
  }

  trainer: User = JSON.parse(localStorage.getItem('user') as any);

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

  handleItemClick = (index: number) => {
    const _trainer: User = JSON.parse(localStorage.getItem('user') || '[]');
    _trainer.pokemon.splice(index, 1);
    this.trainerService.releasePokemon(_trainer);
  };
}

import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonsService } from 'src/app/services/pokemonAPI/pokemons.service';
import { User } from '../models/user.model';
import { TrainerService } from '../services/trainerAPI/trainer.service';

@Component({
  selector: 'app-pokemon-catalogue',
  templateUrl: './catalogue.page.html',
  styleUrls: ['./catalogue.page.css'],
})
export class CataloguePage implements OnInit {
  constructor(
    private readonly pokemonService: PokemonsService,
    private readonly trainerService: TrainerService
  ) {}

  content: string = 'Click on a Pokemon to add it to your collection.';

  ngOnInit(): void {
    if (sessionStorage.getItem('pokemons') === null)
      this.pokemonService.fetchPokemons();
  }

  get pokemons(): Pokemon[] {
    return this.pokemonService.pokemons();
  }

  pokemonInCollection(pokemon: Pokemon) {
    const _trainer: User = JSON.parse(localStorage.getItem('user') || '[]');
    if (!this.trainerService.isOwned(pokemon, _trainer)) {
      return true;
    } else return false;
  }

  handleItemClick = (pokemon: Pokemon) => {
    const _trainer: User = JSON.parse(localStorage.getItem('user') || '[]');
    const _pokemons: string[] = [..._trainer.pokemon, pokemon.name];
    if (this.trainerService.isOwned(pokemon, _trainer)) {
      this.content =
        'You caught ' +
        pokemon.name[0].toUpperCase() +
        pokemon.name.slice(1) +
        '!';
      this.trainerService.catchPokemon(_pokemons, _trainer);
    } else {
      this.content =
        'You already have ' +
        pokemon.name[0].toUpperCase() +
        pokemon.name.slice(1) +
        '.';
    }
  };
}

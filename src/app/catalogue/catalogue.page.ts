import { Component, OnInit } from '@angular/core';
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
  ngOnInit(): void {
    if (sessionStorage.getItem('pokemons') === null)
      this.pokemonService.fetchPokemons();
  }

  get pokemons(): Pokemon[] {
    return this.pokemonService.pokemons();
  }

  handleItemClick = (pokemon: Pokemon) => {
    const _trainer: User = JSON.parse(localStorage.getItem('user') || '[]');
    if (this.trainerService.isOwned(pokemon, _trainer)) {
      this.trainerService.catchPokemon(pokemon.name);
      alert(`${pokemon.name} CAUGHT!`)
    } else {
      alert('Pokemon already caught')
    }
  };
}

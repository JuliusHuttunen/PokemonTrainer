import { Component } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Component({
    selector: "app-trainer-page",
    templateUrl: "./trainer.page.html",
    styleUrls: ['./trainer.page.css'],

})

export class TrainerPage {

    get pokemons() {
        const pokemonArray = []
        const storageItem = localStorage.getItem('user') as string;
        const pokemonTrainer = JSON.parse(storageItem);
        for(let idPokemon of this.idPokemons) {
            for(let pokemon of pokemonTrainer.pokemon)
            if(idPokemon.name === pokemon){
                pokemonArray.push(idPokemon)
            }
        }
        return pokemonArray;
      }

    get idPokemons() {
        const storageItem = sessionStorage.getItem('pokemons') as string;
        const pokemons = JSON.parse(storageItem);
        return pokemons
    }


    handleItemClick = (pokemon: Pokemon) => {
        console.log(pokemon)
    };

 }

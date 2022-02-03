import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemon-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
})
export class CatalogueComponent implements OnInit {
  constructor(private readonly pokemonService: PokemonsService) {}

  ngOnInit(): void {
    this.pokemonService.fetchPokemons();
  }
}

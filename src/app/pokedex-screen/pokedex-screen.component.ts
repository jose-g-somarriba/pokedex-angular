import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Pokemon } from '../models/pokemon.models';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-pokedex-screen',
  templateUrl: './pokedex-screen.component.html',
  styleUrls: ['./pokedex-screen.component.css'],
})
export class PokedexScreenComponent implements OnInit {
  @Input() public loading!: boolean;
  @Input() public error!: boolean;
  @Input()
  set pokemonId(id: string | null) {
    if (id) {
      this.pokemonPantalla(id)
    }
  }


  constructor(private pokemonService: HttpService) {

  }

  pokemon: Pokemon = {
    name: '',
    sprites: {
      front_default: '',
    },
    stats: [
      {
        base_stat: '',
      },
      {
        base_stat: '',
      },
      {
        base_stat: '',
      },
      {
        base_stat: '',
      },
      {
        base_stat: '',
      },
      {
        base_stat: '',
      },
    ],
  };

  ngOnInit(): void {

  }
  ngOnChanges(): void {

    console.log('cambios')
  }

  pokemonPantalla(id: string) {
     this.pokemonService.getPokemon(id).subscribe((data) => {
      this.pokemon = data;
      console.log(this.pokemon.stats);
    });
  }

}

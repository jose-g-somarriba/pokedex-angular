import { Component } from '@angular/core';


@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css'],
})
export class PokedexComponent {
  public error: Boolean = false;
  public loading: Boolean = true;
  public pokemonID: string = Math.floor(Math.random() * 300 + 1).toString();

  aletariio(id : string) {
    this.pokemonID = id
    
  }
}

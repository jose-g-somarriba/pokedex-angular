import { Component,Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-pokedex-form',
  templateUrl: './pokedex-form.component.html',
  styleUrls: ['./pokedex-form.component.css']
})
export class PokedexFormComponent {

  @Output() aletario = new EventEmitter<string>()
  pokemonID: string = Math.floor(Math.random() * 806 + 1).toString()

  aletariot() {
    this.aletario.emit(this.pokemonID)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Añadimos el cliente
import { Pokemon } from './models/pokemon.models';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {} // Añadimos el cliente

  // Añadimos el metodo que traera nuestros datos
  getPokemon(pokemonId : string) {
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  }
}

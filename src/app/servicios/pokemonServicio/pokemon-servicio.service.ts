import { Injectable } from '@angular/core';
import { PokemonI } from '../../modelos/pokemon.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonServicioService {

  url:string= "https://pokemon-pichincha.herokuapp.com/pokemons/"

  constructor(private http:HttpClient) { }

  getAllPokemons():Observable <PokemonI[]> {
    let direccion = this.url+"?idAuthor=1";
    return this.http.get<PokemonI[]>(direccion);
  }

  getByIdPokemons(id:number|null):Observable <PokemonI> {
    let direccion = this.url+id;
    return this.http.get<PokemonI>(direccion);
  }
}

import { Injectable } from '@angular/core';
import { PokemonI } from '../../modelos/pokemon.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Form } from '@angular/forms';

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

  getCountPokemons():Observable <number> {
    let direccion = this.url+"count?idAuthor=1";
    return this.http.get<number>(direccion);
  }

  getByIdPokemons(id:number|null):Observable <PokemonI> {
    let direccion = this.url+id;
    return this.http.get<PokemonI>(direccion);

  }

  putPokemons(form:PokemonI):Observable <any> {
    let direccion = this.url+form.id;
    return this.http.put<PokemonI>(direccion, form);
  }

  deletePokemon(id:number|null):Observable <PokemonI> {
    let direccion = this.url+id;
    return this.http.delete<PokemonI>(direccion);
  }

  postPokemon(form:PokemonI):Observable <any> {
    let direccion = this.url+"?idAuthor="+form.idAuthor;
    return this.http.post<PokemonI>(direccion, form);
  }
}

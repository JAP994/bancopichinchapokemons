import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  PokemonI } from '../../modelos/pokemon.interface';
import {  PokemonServicioService } from '../../servicios/pokemonServicio/pokemon-servicio.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemons:PokemonI[]=[];

  constructor(private pokemonService:PokemonServicioService, private router:Router) { }

  ngOnInit(): void {
    this.getAllPokemons();
  }

  getAllPokemons() {
    this.pokemonService.getAllPokemons().subscribe(data =>{
      this.pokemons = data;
    });
  }

  pokemonAdd(){
    this.router.navigate(['nuevo-pokemon']);
  }

  pokemonEdit(id:number){
    this.router.navigate(['editar-pokemon', id]);
  }

  pokemonDelete(id:number){
    console.log(id);
  }
}

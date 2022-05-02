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
  search:number=0;

  constructor(private pokemonService:PokemonServicioService, private router:Router) { }

  ngOnInit(): void {
    this.getAllPokemons();
  }

  getByIdPokemons() {
    this.pokemons = [];
    this.pokemonService.getByIdPokemons(this.search).subscribe(data => {
      console.log(data);
      this.pokemons.push(data);
      console.log(this.pokemons);
    },
    error => {
      alert("No se encontro el pokemon");
      this.getAllPokemons();
    });
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
    this.pokemonService.deletePokemon(id).subscribe(data =>{
      this.ngOnInit();
      alert('Eliminado exitoso');
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {  PokemonI } from '../../modelos/pokemon.interface';
import {  PokemonServicioService } from '../../servicios/pokemonServicio/pokemon-servicio.service';

@Component({
  selector: 'app-pokemon-editar',
  templateUrl: './pokemon-editar.component.html',
  styleUrls: ['./pokemon-editar.component.css']
})
export class PokemonEditarComponent implements OnInit {

  pokemon:any;
  editForm = new FormGroup({
    name: new FormControl(['']),
    image: new FormControl(['']),
    type: new FormControl(['']),
    hp: new FormControl(['']),
    attack: new FormControl(['']),
    defense: new FormControl(['']),
    idAuthor: new FormControl(['']),
  });

  constructor(private router:Router, private activatedRoute:ActivatedRoute, private pokemonService:PokemonServicioService) { }

  ngOnInit(): void {
    let id = JSON.parse(this.activatedRoute.snapshot.paramMap.get('id')!);
    this.getByIdPokemons(id);
  }

  getByIdPokemons(id:number){
    this.pokemonService.getByIdPokemons(id).subscribe(data =>{
      this.pokemon = data;
      console.log(this.pokemon );
      this.editForm.setValue({
        'name':this.pokemon.name,
        'image':this.pokemon.image,
        'type':this.pokemon.type,
        'hp':this.pokemon.hp,
        'attack':this.pokemon.attack,
        'defense':this.pokemon.defense,
        'idAuthor':this.pokemon.idAuthor
      });
    });
  }

}

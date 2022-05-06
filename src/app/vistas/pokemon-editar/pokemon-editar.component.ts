import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PokemonI } from '../../modelos/pokemon.interface';
import { PokemonServicioService } from '../../servicios/pokemonServicio/pokemon-servicio.service';

@Component({
  selector: 'app-pokemon-editar',
  templateUrl: './pokemon-editar.component.html',
  styleUrls: ['./pokemon-editar.component.css']
})
export class PokemonEditarComponent implements OnInit {

  pokemon: any;
  editForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    image: new FormControl(''),
    type: new FormControl(''),
    hp: new FormControl(''),
    attack: new FormControl(''),
    defense: new FormControl(''),
    idAuthor: new FormControl('')
  });

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private pokemonService: PokemonServicioService) { }

  ngOnInit(): void {
    let id = JSON.parse(this.activatedRoute.snapshot.paramMap.get('id')!);
    this.getByIdPokemons(id);
  }

  getByIdPokemons(id: number) {
    this.pokemonService.getByIdPokemons(id).subscribe(data => {
      this.pokemon = data;
      this.editForm.setValue({
        'id': this.pokemon.id,
        'name': this.pokemon.name,
        'image': this.pokemon.image,
        'type': this.pokemon.type,
        'hp': this.pokemon.hp,
        'attack': this.pokemon.attack,
        'defense': this.pokemon.defense,
        'idAuthor': this.pokemon.idAuthor
      });
    });
  }

  return() {
    this.router.navigate(['pokemon']);
  }

  valueAttack() {
    var slider1 = <HTMLInputElement>document.getElementById('slider1');
    var val1 = document.getElementById('value1');
    if (val1 != null) {
      val1.innerHTML = slider1.value;
      this.pokemon.attack = parseInt(slider1.value);
    }
  }

  valueDefense() {
    var slider = <HTMLInputElement>document.getElementById('slider');
    var val = document.getElementById('value');
    if (val != null) {
      val.innerHTML = slider.value;
      this.pokemon.defense = parseInt( slider.value);
    }
  }

  postForm(form:PokemonI){

    if (form.name=="") {
      alert('Debe ingresar el nombre del Pokémon');
    }else if (form.image=="") {
      alert('Debe ingresar la url del Pokémon');
    }
     else {
      this.pokemonService.postPokemon(form).subscribe(data =>{
        alert('Pokémon Creado exitosamnete');
        this.router.navigate(['pokemon']);
      });
    }
  }

}

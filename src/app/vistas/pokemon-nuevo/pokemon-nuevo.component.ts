import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PokemonI } from '../../modelos/pokemon.interface';
import { PokemonServicioService } from '../../servicios/pokemonServicio/pokemon-servicio.service';

@Component({
  selector: 'app-pokemon-nuevo',
  templateUrl: './pokemon-nuevo.component.html',
  styleUrls: ['./pokemon-nuevo.component.css']
})
export class PokemonNuevoComponent implements OnInit {

  nuevoForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    type: new FormControl('fire'),
    hp: new FormControl(100),
    attack: new FormControl(0),
    defense: new FormControl(0),
    idAuthor: new FormControl(1),
  });

  constructor(private router: Router, private pokemonService: PokemonServicioService) { }

  ngOnInit(): void {
  }

  return() {
    this.router.navigate(['pokemon']);
  }

  valueAttack() {
    var slider1 = <HTMLInputElement>document.getElementById('slider1');
    var val1 = document.getElementById('value1');
    if (val1 != null) {
      val1.innerHTML = slider1.value;
    }
  }

  valueDefense() {
    var slider = <HTMLInputElement>document.getElementById('slider');
    var val = document.getElementById('value');
    if (val != null) {
      val.innerHTML = slider.value;
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

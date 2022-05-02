import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './vistas/pokemon/pokemon.component';
import { PokemonNuevoComponent } from './vistas/pokemon-nuevo/pokemon-nuevo.component';
import { PokemonEditarComponent} from './vistas/pokemon-editar/pokemon-editar.component';

const routes: Routes = [
  { path:'', redirectTo:'pokemon', pathMatch:'full'},
  { path:'pokemon', component:PokemonComponent},
  { path:'nuevo-pokemon', component:PokemonNuevoComponent},
  { path:'editar-pokemon/:id', component:PokemonEditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ PokemonComponent,PokemonNuevoComponent,PokemonEditarComponent]

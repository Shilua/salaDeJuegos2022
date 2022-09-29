import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './bienvenido.component';
import { AhorcadoComponent } from './vistas/juegos/ahorcado/ahorcado.component';
import { AnagramaComponent } from './vistas/juegos/anagrama/anagrama.component';
import { MayorMenorComponent } from './vistas/juegos/mayor-menor/mayor-menor.component';
import { PreguntasComponent } from './vistas/juegos/preguntas/preguntas.component';
import { MainComponent } from './vistas/main/main.component';
import { SobreMiComponent } from './vistas/sobre-mi/sobre-mi.component';

const routes: Routes = [{ path: '', component: MainComponent, 
children: [
  {path: 'sobre-mi', component: SobreMiComponent},
  {path: 'ahorcado', component:AhorcadoComponent},
  {path: 'mayor-menor', component:MayorMenorComponent},
  {path: 'preguntados', component:PreguntasComponent},
  {path: 'anagrama', component:AnagramaComponent}

] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BienvenidoRoutingModule { }

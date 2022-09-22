import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreMiComponent } from '../vistas/sobre-mi/sobre-mi.component';
import { BienvenidoComponent } from './bienvenido.component';
import { MainComponent } from './vistas/main/main.component';

const routes: Routes = [{ path: '', component: MainComponent, 
children: [
  {path: 'sobre-mi', component: SobreMiComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BienvenidoRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './vistas/bienvenido/bienvenido.component';
import { ErrorComponent } from './vistas/error/error.component';
import { LoginComponent } from './vistas/login/login.component';
import { SobreMiComponent } from './vistas/sobre-mi/sobre-mi.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'bienvenido', 
    component: BienvenidoComponent , 
    children: [
      {path: 'sobre-mi', component: SobreMiComponent}
    ]
  },
  {path: 'sobre-mi', component: SobreMiComponent},
  {path: 'error', component: ErrorComponent},
  {path: '**', component: ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

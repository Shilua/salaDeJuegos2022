import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './vistas/bienvenido/bienvenido.component';
import { ErrorComponent } from './vistas/error/error.component';
import { LoginComponent } from './vistas/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {path: 'bienvenido', component: BienvenidoComponent},
  {path: 'error', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

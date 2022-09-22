import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './vistas/error/error.component';
import { LoginComponent } from './vistas/login/login.component';
import { RegisterComponent } from './vistas/register/register.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registro', component: RegisterComponent },
  /*{
    path: 'bienvenidoOld', 
    component: BienvenidoComponent , 
    children: [
      {path: 'sobre-mi', component: SobreMiComponent}
    ]
  },
  {path: 'sobre-mi', component: SobreMiComponent},
  {path: 'error', component: ErrorComponent},*/
  { path: 'bienvenido', loadChildren: () => import('./bienvenido/bienvenido.module').then(m => m.BienvenidoModule) },
  {path: '**', component: ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

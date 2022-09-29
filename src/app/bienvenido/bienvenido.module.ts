import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BienvenidoRoutingModule } from './bienvenido-routing.module';
import { BienvenidoComponent } from './bienvenido.component';
import { MainComponent } from './vistas/main/main.component';
import { NavBarComponent } from './vistas/nav-bar/nav-bar.component';
import { SobreMiComponent } from './vistas/sobre-mi/sobre-mi.component';
import { ChatComponent } from './vistas/chat/chat.component';
import { AhorcadoComponent } from './vistas/juegos/ahorcado/ahorcado.component';
import { MayorMenorComponent } from './vistas/juegos/mayor-menor/mayor-menor.component';
import { PreguntasComponent } from './vistas/juegos/preguntas/preguntas.component';
import { AnagramaComponent } from './vistas/juegos/anagrama/anagrama.component';



@NgModule({
  declarations: [
    BienvenidoComponent,
    MainComponent,
    NavBarComponent,
    SobreMiComponent,
    ChatComponent,
    AhorcadoComponent,
    MayorMenorComponent,
    PreguntasComponent,
    AnagramaComponent
  ],
  imports: [
    CommonModule,
    BienvenidoRoutingModule,
    FormsModule
  ]
})
export class BienvenidoModule { }

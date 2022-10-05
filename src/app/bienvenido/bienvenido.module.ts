import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { EncuestaComponent } from './vistas/encuesta/encuesta.component';
import { ToastService } from '../services/toast.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastContainerComponent } from './vistas/toast-container/toast-container.component';



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
    AnagramaComponent,
    EncuestaComponent,
    ToastContainerComponent
  ],
  imports: [
    CommonModule,
    BienvenidoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
  ]
})
export class BienvenidoModule { }

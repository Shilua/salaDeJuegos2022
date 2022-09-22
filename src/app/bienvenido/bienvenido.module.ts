import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BienvenidoRoutingModule } from './bienvenido-routing.module';
import { BienvenidoComponent } from './bienvenido.component';
import { MainComponent } from './vistas/main/main.component';
import { NavBarComponent } from './vistas/nav-bar/nav-bar.component';
import { SobreMiComponent } from './vistas/sobre-mi/sobre-mi.component';
import { ChatComponent } from './vistas/chat/chat.component';


@NgModule({
  declarations: [
    BienvenidoComponent,
    MainComponent,
    NavBarComponent,
    SobreMiComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    BienvenidoRoutingModule,
    FormsModule
  ]
})
export class BienvenidoModule { }

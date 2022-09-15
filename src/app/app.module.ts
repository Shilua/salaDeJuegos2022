import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JuegoComponent } from './vistas/juego/juego.component';
import { LoginComponent } from './vistas/login/login.component';
import { BienvenidoComponent } from './vistas/bienvenido/bienvenido.component';
import { ErrorComponent } from './vistas/error/error.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SobreMiComponent } from './vistas/sobre-mi/sobre-mi.component';
import { NavBarComponent } from './vistas/nav-bar/nav-bar.component';
import { ToastContainerComponent } from './vistas/toast-container/toast-container.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { environment } from 'src/environments/environment';
import { RegisterComponent } from './vistas/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    JuegoComponent,
    LoginComponent,
    BienvenidoComponent,
    ErrorComponent,
    SobreMiComponent,
    NavBarComponent,
    ToastContainerComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

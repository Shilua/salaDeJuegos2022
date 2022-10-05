import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {

  palabra:string = '';
  palabrasArray = ["helicoptero", "cereal", "musica", "videojuegos", "television", "murcielago"];
  letras:Array<String> = [];
  palabraDesordenada:string = '';
  respuesta:string = '';
  respuestaReal:string = '';
  label:boolean;

  constructor() {
    this.label = true;
  }

  ngOnInit() {
  }

  JuegoNuevo()
  {
    this.respuestaReal = this.palabrasArray[this.getRandomInt(6)+1]
    this.palabraDesordenada = this.mezclar(this.respuestaReal).join("");
    this.letras = this.mezclar(this.respuestaReal);
    this.verificar()

    this.respuesta = '';
  }

  cargarLetra(letra:String){
    this.respuesta += letra;
  }

  borrar(){
    this.respuesta = this.respuesta.substring(0, this.respuesta.length - 1)
  }

  verificar()
  {
    if(this.respuesta == this.respuestaReal)
    {
      this.label = false;
      //this.resultado.guardarResultado('Anagrama', 'Gano');
    }
    else
    {
      this.label = true;
      //this.resultado.guardarResultado('Anagrama', 'Perdio');
    }

    return this.label;
  }

  getRandomInt(max:number) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  mezclar(palabra:string) {
    var array = palabra.split("");
    var i;

    for(i=0; i < array.length; i++) {
      const y = Math.floor(Math.random() * (i + 1));
      [array[i], array[y]] = [array[y], array[i]];
    }
    return array;
  }
}
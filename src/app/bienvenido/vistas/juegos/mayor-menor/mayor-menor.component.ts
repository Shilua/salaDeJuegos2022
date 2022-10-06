import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mayor-menor',
  templateUrl: './mayor-menor.component.html',
  styleUrls: ['./mayor-menor.component.css']
})
export class MayorMenorComponent implements OnInit {

  actual:number;
  next:number;
  actualMax:boolean = false;
  mensaje:string = ''

  constructor() {
    this.actual = this.getRandomArbitrary();
    this.next = this.getRandomArbitrary();
   }

   calcular(){
    if (this.actual > this.next) {
      this.actualMax = true;
    }

    this.actual = this.next;
    this.next = this.getRandomArbitrary();
   }

   minimo(){
    this.calcular();
    if(this.actualMax){
      this.mensaje = 'correcto';
      this.actualMax = false;
      return;
    }
    this.mensaje = 'incorrecto';
   }

   maximo(){
    this.calcular();
    if(!this.actualMax){
      this.mensaje = 'correcto';
      this.actualMax = false;
      return;
    }
    this.mensaje = 'incorrecto';
   }

  getRandomArbitrary() {
    return Math.floor(Math.random() * 12+1);
  }

  ngOnInit(): void {
  }

}

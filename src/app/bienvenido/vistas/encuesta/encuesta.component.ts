import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Encuesta } from 'src/app/classes/encuesta';
import { EncuestaService } from 'src/app/services/encuesta.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit, OnDestroy {
  formularioEncuesta:FormGroup;
  encuesta:Encuesta = new Encuesta();
  constructor(
    private toastService:ToastService,
    private encuestaService:EncuestaService
  ) {
    this.formularioEncuesta = new FormGroup(
      {
        nombre: new FormControl('',[Validators.required]),
        apellido: new FormControl('',[Validators.required]),
        edad: new FormControl(
          0, [
              Validators.required,
              Validators.pattern('[1-9]*')
            ]
        ),
        telefono: new FormControl(
          0,[
              Validators.required,
              Validators.maxLength(10)
            ]
        ),
        puntuacion: new FormControl(0, [Validators.required]),
        recomendacion: new FormControl('',[Validators.required]),
        recomienda: new FormControl(false,[Validators.required]),
      }
    )
   }
  
  enviar(){
    this.encuestaService.createElement(JSON.parse(JSON.stringify(this.encuesta)));
    this.toastService.show(
      'Se ha enviado la encuesta', 
      {classname : 'bg-success text-light', delay:3000}
    )
    console.log(JSON.parse(JSON.stringify(this.encuesta)))
  }

  changeRadioValue(e:any){
    this.encuesta.puntuacion = e.target.value
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.toastService.clear();
  }

}

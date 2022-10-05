import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  constructor(
    private firestore: AngularFirestore
  ) {

   }
  getElements(){
    return this.firestore.collection('encuestas').ref;
  }
  createElement(log: any){
    this.firestore.collection('encuestas').add(log);
  }
}

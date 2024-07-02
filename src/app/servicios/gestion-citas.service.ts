import { Injectable } from '@angular/core';
import { Cita } from '../modelo/cita';

@Injectable({
  providedIn: 'root'
})
export class GestionCitasService {

  private _cita: Cita[] = [
    new Cita(0, " «Quien nunca ha cometido un error nunca ha probado nada nuevo» ", "Albert Einstein"),
    new Cita(1, " «No hay día bueno ni día malo, sólo acciones buenas o malas» ", "Amit Kalantri"),
    new Cita(2, " «Incluso si no tenemos el poder de elegir de dónde venimos, aún podemos elegir adónde vamos desde allí»", "Stephen Chbosky")
  ]

  constructor() { }

  //agregar citas

  agregarCita(cita:Cita){
    cita.id = Date.now()
    this._cita.push(cita)
  }

  //obtener citas

  getCita(): Cita[]{
    console.dir(this._cita)
    return this._cita;
  }

  //obtener una cita aleatoria

  obtenerCitaAleatoria(): Cita {
    const indice = Math.floor(Math.random() * this._cita.length);
    return this._cita[indice];
  }

  //buscar indice de una cita 

  private _buscarIndice(cita:Cita):number {
    return this._cita.findIndex(prod => prod.id === cita.id)
  }

  //eliminar citas

  eliminar(cita:Cita){
    const indice = this._buscarIndice(cita)
    
    if( indice >= 0){
      this._cita.splice(indice, 1)
    }
  }

}

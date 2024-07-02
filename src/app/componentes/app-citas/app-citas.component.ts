import { Component, OnInit } from '@angular/core';
import { GestionCitasService } from 'src/app/servicios/gestion-citas.service';
import { Cita } from 'src/app/modelo/cita';
import { CitasAleatoriasComponent } from '../citas-aleatorias/citas-aleatorias.component';
import { CitasFormGestionComponent } from '../citas-form-gestion/citas-form-gestion.component';
import { CommonModule } from '@angular/common';
import { IonItem, IonList, IonListHeader, IonLabel, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-app-citas',
  templateUrl: './app-citas.component.html',
  styleUrls: ['./app-citas.component.scss'],
  standalone: true,
  imports: [IonButton, IonLabel, IonListHeader, IonList, 
            IonItem, CitasAleatoriasComponent, CitasFormGestionComponent, CommonModule ]
})
export class AppCitasComponent implements OnInit {

  citaAleatoria: Cita | undefined;

  citas: Cita [] = []

  constructor(private gestionCitasService: GestionCitasService) { }

  ngOnInit() {

    this.obtenerCitaAleatoria();
    
  }

  obtenerCitaAleatoria(){
    this.citaAleatoria = this.gestionCitasService.obtenerCitaAleatoria();
  }

  agregarCita(cita: Cita) {
    this.gestionCitasService.agregarCita(cita);
    this.obtenerCitaAleatoria();
  }

  eliminarCita(cita: Cita) {
    this.gestionCitasService.eliminar(cita);
    this.obtenerCitaAleatoria();
  }
  

}

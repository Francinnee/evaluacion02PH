import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonListHeader, IonLabel, 
        IonItem, IonInput, IonButton, IonButtons, IonBackButton } from "@ionic/angular/standalone";
import { Cita } from 'src/app/modelo/cita';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-citas-form-gestion',
  templateUrl: './citas-form-gestion.component.html',
  styleUrls: ['./citas-form-gestion.component.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule,  IonBackButton, IonButtons, IonButton, IonInput, IonItem, IonLabel, IonListHeader, IonList, IonContent, IonTitle, IonToolbar, IonHeader, ]
})


export class CitasFormGestionComponent implements OnInit {

  @Output() agregar = new EventEmitter<Cita>();
  @Output() eliminar = new EventEmitter<Cita>();

  citaText: string = '';

  autor: string = '';

  
  constructor() { }

  ngOnInit()  { 
    
  }

  onAgregar() {
    const nuevaCita = new Cita(Date.now(), this.citaText, this.autor);
    this.agregar.emit(nuevaCita);
  }

  onEliminar() {
    const citaAEliminar = new Cita(Date.now(), this.citaText, this.autor); // Esto debería ser una cita específica
    this.eliminar.emit(citaAEliminar);
  }

}

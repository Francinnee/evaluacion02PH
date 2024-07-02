import { Component, Input, OnInit } from '@angular/core';
import { IonCard, IonFab, IonCardContent, IonFabButton, 
        IonIcon, IonItem, IonButton } from "@ionic/angular/standalone";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Cita } from 'src/app/modelo/cita';

@Component({
  selector: 'app-citas-aleatorias',
  templateUrl: './citas-aleatorias.component.html',
  styleUrls: ['./citas-aleatorias.component.scss'],
  standalone: true,
  imports: [IonButton, IonItem, CommonModule, RouterModule, IonIcon, 
          IonFabButton, IonCardContent, IonCard, IonCardContent, IonFab]
})
export class CitasAleatoriasComponent implements OnInit {

  @Input() citaAleatoria:  Cita | undefined;


  constructor() { }

  ngOnInit() {}

  

}

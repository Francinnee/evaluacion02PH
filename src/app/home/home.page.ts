import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { settingsOutline} from 'ionicons/icons'
import { RouterModule } from '@angular/router';
import { AppCitasComponent } from "../componentes/app-citas/app-citas.component";




@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    standalone: true,
    imports: [RouterModule, IonIcon, IonButton, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent,  AppCitasComponent]
})

export class HomePage {
  constructor() {
    addIcons({
      settingsOutline
    })
  }
}

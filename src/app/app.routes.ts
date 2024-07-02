import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path:'gestion',
    loadComponent: () => import('./componentes/citas-form-gestion/citas-form-gestion.component').then(m => m.CitasFormGestionComponent)
  },
  {
    path: 'configuracion',
    loadComponent: () => import('./configuracion/configuracion/configuracion.page').then( m => m.ConfiguracionPage)
  },
  
];

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'info-bus',
    loadChildren: () => import('./info-bus/info-bus.module').then( m => m.InfoBusPageModule)
  },
  {
    path: 'itineraire',
    loadChildren: () => import('./itineraire/itineraire.module').then( m => m.ItinerairePageModule)
  },
  {
    path: 'perte',
    loadChildren: () => import('./perte/perte.module').then( m => m.PertePageModule)
  },
  {
    path: 'cartographie',
    loadChildren: () => import('./cartographie/cartographie.module').then( m => m.CartographiePageModule)
  },
  {
    path: 'header',
    loadChildren: () => import('./header/header.module').then( m => m.HeaderPageModule)
  },
  {
    path: 'accueil-admin',
    loadChildren: () => import('./accueil-admin/accueil-admin.module').then( m => m.AccueilAdminPageModule)
  },
  {
    path: 'bus',
    loadChildren: () => import('./bus/bus.module').then( m => m.BusPageModule)
  },
  {
    path: 'objet-retrouve',
    loadChildren: () => import('./objet-retrouve/objet-retrouve.module').then( m => m.ObjetRetrouvePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

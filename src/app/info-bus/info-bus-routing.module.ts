import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoBusPage } from './info-bus.page';

const routes: Routes = [
  {
    path: '',
    component: InfoBusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoBusPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObjetRetrouvePage } from './objet-retrouve.page';

const routes: Routes = [
  {
    path: '',
    component: ObjetRetrouvePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObjetRetrouvePageRoutingModule {}

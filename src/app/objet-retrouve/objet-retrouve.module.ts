import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObjetRetrouvePageRoutingModule } from './objet-retrouve-routing.module';

import { ObjetRetrouvePage } from './objet-retrouve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObjetRetrouvePageRoutingModule
  ],
  declarations: [ObjetRetrouvePage]
})
export class ObjetRetrouvePageModule {}

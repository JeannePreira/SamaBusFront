import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PertePageRoutingModule } from './perte-routing.module';

import { PertePage } from './perte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PertePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PertePage]
})
export class PertePageModule {}

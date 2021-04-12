import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartographiePageRoutingModule } from './cartographie-routing.module';

import { CartographiePage } from './cartographie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartographiePageRoutingModule
  ],
  declarations: [CartographiePage]
})
export class CartographiePageModule {}

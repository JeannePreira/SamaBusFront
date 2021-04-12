
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule} from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { InfoBusPageRoutingModule } from './info-bus-routing.module';

import { InfoBusPage } from './info-bus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoBusPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [InfoBusPage]
})
export class InfoBusPageModule {}

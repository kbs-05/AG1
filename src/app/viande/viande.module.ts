import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VIANDEPageRoutingModule } from './viande-routing.module';

import { VIANDEPage } from './viande.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VIANDEPageRoutingModule
  ],
  declarations: [VIANDEPage]
})
export class VIANDEPageModule {}

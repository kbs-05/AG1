import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PVPageRoutingModule } from './pv-routing.module';

import { PVPage } from './pv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PVPageRoutingModule
  ],
  declarations: [PVPage]
})
export class PVPageModule {}

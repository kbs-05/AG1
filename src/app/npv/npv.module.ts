import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NPVPageRoutingModule } from './npv-routing.module';

import { NPVPage } from './npv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NPVPageRoutingModule
  ],
  declarations: [NPVPage]
})
export class NPVPageModule {}

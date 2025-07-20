import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PRODUITSPageRoutingModule } from './produits-routing.module';

import { PRODUITSPage } from './produits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PRODUITSPageRoutingModule
  ],
  declarations: [PRODUITSPage]
})
export class PRODUITSPageModule {}

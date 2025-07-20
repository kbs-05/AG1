import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FRUITSPageRoutingModule } from './fruits-routing.module';

import { FRUITSPage } from './fruits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FRUITSPageRoutingModule
  ],
  declarations: [FRUITSPage]
})
export class FRUITSPageModule {}

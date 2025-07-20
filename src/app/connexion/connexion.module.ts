import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CONNEXIONPageRoutingModule } from './connexion-routing.module';

import { CONNEXIONPage } from './connexion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CONNEXIONPageRoutingModule
  ],
  declarations: [CONNEXIONPage]
})
export class CONNEXIONPageModule {}

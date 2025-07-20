import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EPICESPageRoutingModule } from './epices-routing.module';

import { EPICESPage } from './epices.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EPICESPageRoutingModule
  ],
  declarations: [EPICESPage]
})
export class EPICESPageModule {}

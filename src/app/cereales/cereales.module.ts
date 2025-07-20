import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CEREALESPageRoutingModule } from './cereales-routing.module';

import { CEREALESPage } from './cereales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CEREALESPageRoutingModule
  ],
  declarations: [CEREALESPage]
})
export class CEREALESPageModule {}

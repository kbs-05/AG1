import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LEGUMESPageRoutingModule } from './legumes-routing.module';

import { LEGUMESPage } from './legumes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LEGUMESPageRoutingModule
  ],
  declarations: [LEGUMESPage]
})
export class LEGUMESPageModule {}

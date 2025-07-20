import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BOISSONSPageRoutingModule } from './boissons-routing.module';

import { BOISSONSPage } from './boissons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BOISSONSPageRoutingModule
  ],
  declarations: [BOISSONSPage]
})
export class BOISSONSPageModule {}

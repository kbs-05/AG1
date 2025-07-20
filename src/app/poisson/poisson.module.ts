import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { POISSONPageRoutingModule } from './poisson-routing.module';

import { POISSONPage } from './poisson.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    POISSONPageRoutingModule
  ],
  declarations: [POISSONPage]
})
export class POISSONPageModule {}

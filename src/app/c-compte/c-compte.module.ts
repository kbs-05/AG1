import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CCOMPTEPageRoutingModule } from './c-compte-routing.module';

import { CCOMPTEPage } from './c-compte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CCOMPTEPageRoutingModule
  ],
  declarations: [CCOMPTEPage]
})
export class CCOMPTEPageModule {}

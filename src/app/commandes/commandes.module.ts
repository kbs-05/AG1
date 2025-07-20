import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { COMMANDESPageRoutingModule } from './commandes-routing.module';

import { COMMANDESPage } from './commandes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    COMMANDESPageRoutingModule
  ],
  declarations: [COMMANDESPage]
})
export class COMMANDESPageModule {}

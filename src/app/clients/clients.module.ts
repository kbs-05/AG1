import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CLIENTSPageRoutingModule } from './clients-routing.module';

import { CLIENTSPage } from './clients.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CLIENTSPageRoutingModule
  ],
  declarations: [CLIENTSPage]
})
export class CLIENTSPageModule {}

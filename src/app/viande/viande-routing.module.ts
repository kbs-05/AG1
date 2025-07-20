import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VIANDEPage } from './viande.page';

const routes: Routes = [
  {
    path: '',
    component: VIANDEPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VIANDEPageRoutingModule {}

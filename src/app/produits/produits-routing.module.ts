import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PRODUITSPage } from './produits.page';

const routes: Routes = [
  {
    path: '',
    component: PRODUITSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PRODUITSPageRoutingModule {}

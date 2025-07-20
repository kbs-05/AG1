import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PVPage } from './pv.page';

const routes: Routes = [
  {
    path: '',
    component: PVPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PVPageRoutingModule {}

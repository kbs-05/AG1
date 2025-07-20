import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NPVPage } from './npv.page';

const routes: Routes = [
  {
    path: '',
    component: NPVPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NPVPageRoutingModule {}

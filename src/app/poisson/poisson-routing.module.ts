import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { POISSONPage } from './poisson.page';

const routes: Routes = [
  {
    path: '',
    component: POISSONPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class POISSONPageRoutingModule {}

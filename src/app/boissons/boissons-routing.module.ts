import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BOISSONSPage } from './boissons.page';

const routes: Routes = [
  {
    path: '',
    component: BOISSONSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BOISSONSPageRoutingModule {}

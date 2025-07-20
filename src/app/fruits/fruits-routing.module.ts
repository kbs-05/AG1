import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FRUITSPage } from './fruits.page';

const routes: Routes = [
  {
    path: '',
    component: FRUITSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FRUITSPageRoutingModule {}

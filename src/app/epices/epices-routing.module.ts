import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EPICESPage } from './epices.page';

const routes: Routes = [
  {
    path: '',
    component: EPICESPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EPICESPageRoutingModule {}

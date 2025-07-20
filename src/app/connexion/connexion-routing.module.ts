import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CONNEXIONPage } from './connexion.page';

const routes: Routes = [
  {
    path: '',
    component: CONNEXIONPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CONNEXIONPageRoutingModule {}

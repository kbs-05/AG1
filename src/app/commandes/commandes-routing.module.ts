import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { COMMANDESPage } from './commandes.page';

const routes: Routes = [
  {
    path: '',
    component: COMMANDESPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class COMMANDESPageRoutingModule {}

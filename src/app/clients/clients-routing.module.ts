import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CLIENTSPage } from './clients.page';

const routes: Routes = [
  {
    path: '',
    component: CLIENTSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CLIENTSPageRoutingModule {}

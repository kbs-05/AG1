import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PROFILPage } from './profil.page';

const routes: Routes = [
  {
    path: '',
    component: PROFILPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PROFILPageRoutingModule {}

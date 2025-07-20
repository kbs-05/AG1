import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CEREALESPage } from './cereales.page';

const routes: Routes = [
  {
    path: '',
    component: CEREALESPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CEREALESPageRoutingModule {}

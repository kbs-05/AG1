import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LEGUMESPage } from './legumes.page';

const routes: Routes = [
  {
    path: '',
    component: LEGUMESPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LEGUMESPageRoutingModule {}

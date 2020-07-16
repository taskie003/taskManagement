import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PendingtaskPage } from './pendingtask.page';

const routes: Routes = [
  {
    path: '',
    component: PendingtaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PendingtaskPageRoutingModule {}

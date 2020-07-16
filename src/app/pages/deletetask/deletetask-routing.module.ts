import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeletetaskPage } from './deletetask.page';

const routes: Routes = [
  {
    path: '',
    component: DeletetaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeletetaskPageRoutingModule {}

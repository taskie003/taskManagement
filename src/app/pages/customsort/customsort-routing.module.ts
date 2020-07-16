import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomsortPage } from './customsort.page';

const routes: Routes = [
  {
    path: '',
    component: CustomsortPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomsortPageRoutingModule {}

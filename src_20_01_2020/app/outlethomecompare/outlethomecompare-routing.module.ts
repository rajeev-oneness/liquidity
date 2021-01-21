import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutlethomecomparePage } from './outlethomecompare.page';

const routes: Routes = [
  {
    path: '',
    component: OutlethomecomparePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutlethomecomparePageRoutingModule {}

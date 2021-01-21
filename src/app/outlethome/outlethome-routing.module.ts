import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutlethomePage } from './outlethome.page';

const routes: Routes = [
  {
    path: '',
    component: OutlethomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutlethomePageRoutingModule {}

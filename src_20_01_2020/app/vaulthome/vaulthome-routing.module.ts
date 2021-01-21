import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VaulthomePage } from './vaulthome.page';

const routes: Routes = [
  {
    path: '',
    component: VaulthomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VaulthomePageRoutingModule {}

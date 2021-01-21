import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VaultcartPage } from './vaultcart.page';

const routes: Routes = [
  {
    path: '',
    component: VaultcartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VaultcartPageRoutingModule {}

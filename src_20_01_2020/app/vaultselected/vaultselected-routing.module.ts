import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VaultselectedPage } from './vaultselected.page';

const routes: Routes = [
  {
    path: '',
    component: VaultselectedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VaultselectedPageRoutingModule {}

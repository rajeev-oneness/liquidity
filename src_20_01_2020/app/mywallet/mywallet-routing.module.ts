import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MywalletPage } from './mywallet.page';

const routes: Routes = [
  {
    path: '',
    component: MywalletPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MywalletPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderredeemedPage } from './orderredeemed.page';

const routes: Routes = [
  {
    path: '',
    component: OrderredeemedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderredeemedPageRoutingModule {}

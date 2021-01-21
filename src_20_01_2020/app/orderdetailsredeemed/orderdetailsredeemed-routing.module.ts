import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderdetailsredeemedPage } from './orderdetailsredeemed.page';

const routes: Routes = [
  {
    path: '',
    component: OrderdetailsredeemedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderdetailsredeemedPageRoutingModule {}

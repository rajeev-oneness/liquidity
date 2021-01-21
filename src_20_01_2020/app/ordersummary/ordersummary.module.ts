import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdersummaryPageRoutingModule } from './ordersummary-routing.module';

import { OrdersummaryPage } from './ordersummary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdersummaryPageRoutingModule
  ],
  declarations: [OrdersummaryPage]
})
export class OrdersummaryPageModule {}

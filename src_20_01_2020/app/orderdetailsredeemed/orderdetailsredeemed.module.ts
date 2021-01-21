import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderdetailsredeemedPageRoutingModule } from './orderdetailsredeemed-routing.module';

import { OrderdetailsredeemedPage } from './orderdetailsredeemed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderdetailsredeemedPageRoutingModule
  ],
  declarations: [OrderdetailsredeemedPage]
})
export class OrderdetailsredeemedPageModule {}

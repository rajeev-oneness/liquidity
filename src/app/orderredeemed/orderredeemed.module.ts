import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderredeemedPageRoutingModule } from './orderredeemed-routing.module';

import { OrderredeemedPage } from './orderredeemed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderredeemedPageRoutingModule
  ],
  declarations: [OrderredeemedPage]
})
export class OrderredeemedPageModule {}

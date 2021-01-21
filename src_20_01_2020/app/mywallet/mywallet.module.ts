import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MywalletPageRoutingModule } from './mywallet-routing.module';

import { MywalletPage } from './mywallet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MywalletPageRoutingModule
  ],
  declarations: [MywalletPage]
})
export class MywalletPageModule {}

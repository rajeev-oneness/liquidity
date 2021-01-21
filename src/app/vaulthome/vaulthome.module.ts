import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VaulthomePageRoutingModule } from './vaulthome-routing.module';

import { VaulthomePage } from './vaulthome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VaulthomePageRoutingModule
  ],
  declarations: [VaulthomePage]
})
export class VaulthomePageModule {}

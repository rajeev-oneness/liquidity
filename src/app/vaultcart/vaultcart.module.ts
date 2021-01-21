import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VaultcartPageRoutingModule } from './vaultcart-routing.module';

import { VaultcartPage } from './vaultcart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VaultcartPageRoutingModule
  ],
  declarations: [VaultcartPage]
})
export class VaultcartPageModule {}

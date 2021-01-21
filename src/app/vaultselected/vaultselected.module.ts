import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VaultselectedPageRoutingModule } from './vaultselected-routing.module';

import { VaultselectedPage } from './vaultselected.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VaultselectedPageRoutingModule
  ],
  declarations: [VaultselectedPage]
})
export class VaultselectedPageModule {}

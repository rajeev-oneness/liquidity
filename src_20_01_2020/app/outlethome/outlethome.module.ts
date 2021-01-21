import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OutlethomePageRoutingModule } from './outlethome-routing.module';

import { OutlethomePage } from './outlethome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutlethomePageRoutingModule
  ],
  declarations: [OutlethomePage]
})
export class OutlethomePageModule {}

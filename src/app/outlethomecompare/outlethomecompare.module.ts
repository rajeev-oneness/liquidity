import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OutlethomecomparePageRoutingModule } from './outlethomecompare-routing.module';

import { OutlethomecomparePage } from './outlethomecompare.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutlethomecomparePageRoutingModule
  ],
  declarations: [OutlethomecomparePage]
})
export class OutlethomecomparePageModule {}

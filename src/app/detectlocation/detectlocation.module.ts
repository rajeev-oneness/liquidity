import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetectlocationPageRoutingModule } from './detectlocation-routing.module';

import { DetectlocationPage } from './detectlocation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetectlocationPageRoutingModule
  ],
  declarations: [DetectlocationPage]
})
export class DetectlocationPageModule {}

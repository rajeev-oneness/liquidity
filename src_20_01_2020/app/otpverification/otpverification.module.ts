import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtpverificationPageRoutingModule } from './otpverification-routing.module';

import { OtpverificationPage } from './otpverification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtpverificationPageRoutingModule
  ],
  declarations: [OtpverificationPage]
})
export class OtpverificationPageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtpverificationPage } from './otpverification.page';

const routes: Routes = [
  {
    path: '',
    component: OtpverificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtpverificationPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetectlocationPage } from './detectlocation.page';

const routes: Routes = [
  {
    path: '',
    component: DetectlocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetectlocationPageRoutingModule {}

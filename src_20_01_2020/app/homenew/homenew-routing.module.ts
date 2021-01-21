import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomenewPage } from './homenew.page';

const routes: Routes = [
  {
    path: '',
    component: HomenewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomenewPageRoutingModule {}

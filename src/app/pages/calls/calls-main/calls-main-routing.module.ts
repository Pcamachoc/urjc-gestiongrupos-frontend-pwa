import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APPGGCallsMainComponent } from './calls-main.component';

const routes: Routes = [
  {
    path: '',
    component: APPGGCallsMainComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class APPGGCallsMainRoutingModule { }

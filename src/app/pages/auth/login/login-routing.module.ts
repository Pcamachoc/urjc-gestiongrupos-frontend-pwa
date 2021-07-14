import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APPGGLoginComponent } from './login.component';

const routes: Routes = [
  {
    path: '',
    component: APPGGLoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class APPGGLoginRoutingModule { }

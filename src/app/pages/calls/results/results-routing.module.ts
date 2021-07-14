import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APPGGResultsComponent } from './results.component';

const routes: Routes = [{
  path: '',
  component: APPGGResultsComponent,
  pathMatch: 'full',
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class APPGGResultsRoutingModule { }

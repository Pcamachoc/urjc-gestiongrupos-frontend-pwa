import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APPGGConsultVoteComponent } from './consult-vote.component';

const routes: Routes = [
  {
    path: '',
    component: APPGGConsultVoteComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class APPGGConsultVoteRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APPGGCallVoteComponent } from 'src/app/pages/calls/call-vote/call-vote.component';

const routes: Routes = [
  {
    path: '',
    component: APPGGCallVoteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class APPGGCallVoteRoutingModule { }

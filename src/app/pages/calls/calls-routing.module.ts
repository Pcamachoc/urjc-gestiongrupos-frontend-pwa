import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APPGGCallsComponent } from './calls.component';
import { APPGGCanActivateAuthGuard } from 'src/app/services/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: APPGGCallsComponent,
    canActivate: [APPGGCanActivateAuthGuard],
    children: [
      {
        path: 'mainCalls',
        loadChildren: () => import('./calls-main/calls-main.module').then(mod => mod.APPGGCallsMainModule),
        canActivate: [APPGGCanActivateAuthGuard],
      },
      {
        path: 'addVote',
        loadChildren: () => import('./call-vote/call-vote.module').then(mod => mod.APPGGCallVoteModule),
        canActivate: [APPGGCanActivateAuthGuard],
      },
      {
        path: 'consultVote',
        loadChildren: () => import('./consult-vote/consult-vote.module').then(mod => mod.APPGGConsultVoteModule),
        canActivate: [APPGGCanActivateAuthGuard],
      },
      {
        path: 'results',
        loadChildren: () => import('./results/results.module').then(mod => mod.APPGGResultsModule),
        canActivate: [APPGGCanActivateAuthGuard],
      },
      {
        path: '',
        redirectTo: 'mainCalls',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class APPGGCallsRoutingModule { }

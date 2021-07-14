import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APPGGPagesComponent } from './pages.component';
import { APPGGCanActivateAuthGuard } from '../services/guards/auth.guard';

const routes: Routes = [{
  path: '',
  component: APPGGPagesComponent,
  canActivate: [APPGGCanActivateAuthGuard],
  children: [
    {
      path: 'calls',
      loadChildren: () => import('./calls/calls.module').then(mod => mod.APPGGCallsModule),
      canActivate: [APPGGCanActivateAuthGuard],
    },
    {
      path: '',
      redirectTo: 'calls',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class APPGGPagesRoutingModule { }

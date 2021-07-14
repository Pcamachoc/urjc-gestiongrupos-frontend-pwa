import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APPGGAuthComponent } from './auth.component';

const routes: Routes = [{
  path: '',
  component: APPGGAuthComponent,
  children: [
    {
      path: 'login',
      loadChildren: () => import('./login/login.module').then(mod => mod.APPGGLoginModule),
    },
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class APPGGAuthRoutingModule { }

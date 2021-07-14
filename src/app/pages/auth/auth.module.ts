import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APPGGAuthRoutingModule } from './auth-routing.module';
import { APPGGAuthComponent } from './auth.component';
import { NbLayoutModule, NbCardModule } from '@nebular/theme';

@NgModule({
  declarations: [APPGGAuthComponent],
  imports: [
    CommonModule,
    APPGGAuthRoutingModule,
    NbLayoutModule,
    NbCardModule,
  ],
})
export class APPGGAuthModule { }

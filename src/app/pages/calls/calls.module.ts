import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbLayoutModule, NbButtonModule, NbCardModule } from '@nebular/theme';
import { APPGGCallsRoutingModule } from './calls-routing.module';
import { APPGGCallsComponent } from './calls.component';
import { NbIconModule } from '@nebular/theme';

@NgModule({
  declarations: [APPGGCallsComponent],
  imports: [
    CommonModule,
    APPGGCallsRoutingModule,
    NbLayoutModule,
    NbIconModule,
    NbButtonModule,
    NbCardModule,
  ],
})
export class APPGGCallsModule { }

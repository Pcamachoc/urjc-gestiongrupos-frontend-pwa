import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APPGGCallsMainRoutingModule } from './calls-main-routing.module';
import { APPGGCallsMainComponent } from './calls-main.component';
import { NbLayoutModule, NbButtonModule, NbCardModule, NbIconModule, NbMenuModule } from '@nebular/theme';
import { APPGGCallCardModule } from '../../../components/call-card/call-card.module';
import { HeaderMenuModule } from 'src/app/components/header-menu/header-menu.module';

@NgModule({
  declarations: [APPGGCallsMainComponent],
  entryComponents: [],
  imports: [
    CommonModule,
    APPGGCallsMainRoutingModule,
    APPGGCallCardModule,
    HeaderMenuModule,
    NbLayoutModule,
    NbButtonModule,
    NbCardModule,
    NbIconModule,
    NbMenuModule
  ],
  exports: [
    APPGGCallsMainComponent,
  ],
})
export class APPGGCallsMainModule { }

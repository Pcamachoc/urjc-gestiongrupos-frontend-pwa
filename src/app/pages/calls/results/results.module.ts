import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APPGGResultsRoutingModule } from './results-routing.module';
import { APPGGResultsComponent } from './results.component';
import { NbLayoutModule } from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [APPGGResultsComponent],
  imports: [
    CommonModule,
    APPGGResultsRoutingModule,
    NbLayoutModule,
    NgxEchartsModule,
  ],
})
export class APPGGResultsModule { }

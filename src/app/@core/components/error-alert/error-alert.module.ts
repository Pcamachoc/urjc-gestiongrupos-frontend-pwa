import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APPGGErrorAlertComponent } from './error-alert.component';
import { NbCardModule, NbLayoutModule, NbAlertModule, NbDialogModule } from '@nebular/theme';

@NgModule({
  declarations: [APPGGErrorAlertComponent],
  exports: [
    APPGGErrorAlertComponent,
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbLayoutModule,
    NbAlertModule,
    NbDialogModule.forChild(),
  ],
})
export class APPGGErrorAlertModule { }

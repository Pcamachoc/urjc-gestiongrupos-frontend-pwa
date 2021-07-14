import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbDialogModule, NbButtonModule, NbCardModule, NbLayoutModule } from '@nebular/theme';
import { APPGGConfirmDialogComponent } from './confirm-dialog.component';

@NgModule({
  declarations: [
    APPGGConfirmDialogComponent,
  ],
  exports: [
    APPGGConfirmDialogComponent,
  ],
  imports: [
    CommonModule,
    NbDialogModule.forChild(),
    NbCardModule,
    NbButtonModule,
    NbLayoutModule,
  ],
})
export class APPGGConfirmDialogModule { }

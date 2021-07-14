import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbLayoutModule, NbButtonModule, NbCardModule, NbIconModule } from '@nebular/theme';
import { APPGGCallCardComponent } from './call-card.component';

@NgModule({
  declarations: [APPGGCallCardComponent],
  exports: [APPGGCallCardComponent],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbButtonModule,
    NbCardModule,
    NbIconModule,
  ],
})
export class APPGGCallCardModule { }

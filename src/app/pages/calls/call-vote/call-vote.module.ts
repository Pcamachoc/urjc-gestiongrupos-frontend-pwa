import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APPGGCallVoteRoutingModule } from './call-vote-routing.module';
import { APPGGCallVoteComponent } from './call-vote.component';
import { NbLayoutModule, NbCardModule, NbInputModule, NbIconModule, NbRadioModule, NbButtonModule, NbSelectModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APPGGConfirmDialogComponent } from 'src/app/@core/components/confirm-dialog/confirm-dialog.component';
import { APPGGConfirmDialogModule } from 'src/app/@core/components/confirm-dialog/confirm-dialog.module';
import { APPGGErrorAlertComponent } from 'src/app/@core/components/error-alert/error-alert.component';
import { APPGGErrorAlertModule } from '../../../@core/components/error-alert/error-alert.module';
import { HeaderMenuModule } from 'src/app/components/header-menu/header-menu.module';

@NgModule({
  declarations: [APPGGCallVoteComponent],
  entryComponents: [APPGGConfirmDialogComponent, APPGGErrorAlertComponent],
  imports: [
    CommonModule,
    APPGGCallVoteRoutingModule,
    NbLayoutModule,
    NbCardModule,
    NbInputModule,
    NbIconModule,
    NbRadioModule,
    FormsModule,
    NbButtonModule,
    APPGGConfirmDialogModule,
    APPGGErrorAlertModule,
    ReactiveFormsModule,
    NbSelectModule,
    HeaderMenuModule
  ],
})
export class APPGGCallVoteModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APPGGConsultVoteRoutingModule } from './consult-vote-routing.module';
import { APPGGConsultVoteComponent } from './consult-vote.component';
import { NbLayoutModule, NbCardModule, NbInputModule, NbIconModule, NbRadioModule, NbButtonModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { HeaderMenuModule } from 'src/app/components/header-menu/header-menu.module';

@NgModule({
  declarations: [APPGGConsultVoteComponent],
  imports: [
    CommonModule,
    APPGGConsultVoteRoutingModule,
    NbLayoutModule,
    NbCardModule,
    NbInputModule,
    NbIconModule,
    NbRadioModule,
    FormsModule,
    NbButtonModule,
    HeaderMenuModule
  ],
})
export class APPGGConsultVoteModule { }

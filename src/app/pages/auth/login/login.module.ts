import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APPGGLoginRoutingModule } from './login-routing.module';
import { APPGGLoginComponent } from './login.component';
import { NbLayoutModule, NbInputModule, NbCardModule, NbButtonModule } from '@nebular/theme';

@NgModule({
  declarations: [APPGGLoginComponent],
  imports: [
    APPGGLoginRoutingModule,
    CommonModule,
    NbLayoutModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class APPGGLoginModule { }

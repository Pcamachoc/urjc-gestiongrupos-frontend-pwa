import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APPGGPagesRoutingModule } from './pages-routing.module';
import { APPGGPagesComponent } from './pages.component';

const PAGES_COMPONENTS = [
  APPGGPagesComponent,
];

@NgModule({
  declarations: [...PAGES_COMPONENTS],
  imports: [
    CommonModule,
    APPGGPagesRoutingModule,
  ],
})
export class APPGGPagesModule { }

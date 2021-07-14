import { NgModule } from '@angular/core';
import { NbLayoutModule, NbThemeModule } from '@nebular/theme';
import { APPGGFooterComponent } from './footer.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [APPGGFooterComponent],
  exports: [APPGGFooterComponent],
  imports: [
    BrowserModule,
    NbThemeModule,
    NbLayoutModule,
  ],
})
export class APPGGFooterModule { }

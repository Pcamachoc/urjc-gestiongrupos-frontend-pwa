import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderMenuComponent } from './header-menu.component';
import { NbButtonModule, NbCardModule, NbIconModule, NbMenuModule, NbThemeModule } from '@nebular/theme';



@NgModule({
  declarations: [HeaderMenuComponent],
  exports: [HeaderMenuComponent],
  imports: [
    CommonModule,
    NbThemeModule,
    NbButtonModule,
    NbCardModule,
    NbIconModule,
    NbMenuModule
  ]
})
export class HeaderMenuModule { }

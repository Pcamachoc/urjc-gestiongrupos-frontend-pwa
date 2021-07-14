import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbLayoutModule, NbThemeModule, NbDatepickerModule, NbDialogModule, NbMenuModule } from '@nebular/theme';
import { APPGGFooterModule } from './components/footer/footer.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APPGGJwtInterceptor } from './services/interceptors/votacionjunta-jwt.interceptor';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { APPGGConfirmDialogComponent } from './@core/components/confirm-dialog/confirm-dialog.component';
import { APPGGErrorAlertComponent } from './@core/components/error-alert/error-alert.component';
import { APPGGConfirmDialogModule } from './@core/components/confirm-dialog/confirm-dialog.module';
import { APPGGErrorAlertModule } from './@core/components/error-alert/error-alert.module';
import { HeaderComponent } from './components/header/header.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { HeaderMenuModule } from './components/header-menu/header-menu.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  entryComponents: [APPGGConfirmDialogComponent, APPGGErrorAlertComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    APPGGFooterModule,
    HeaderMenuModule,
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbDialogModule.forChild(),
    HttpClientModule,
    NbEvaIconsModule,
    APPGGConfirmDialogModule,
    APPGGErrorAlertModule,
    NbMenuModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: APPGGJwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

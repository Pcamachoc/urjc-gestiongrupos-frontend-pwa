import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { APPGGCoreService } from '../../@core/services/app-gestiongrupos-core.service';
import { APPGGConfigService } from '../../@core/services/app-gestiongrupos-config.service';
import { APPGGApiConstants } from '../../commons/constants/appgestiongrupos.api.constants';

@Injectable({
  providedIn: 'root',
})
export class APPGGAuthService {

  constructor(private appCoreService: APPGGCoreService,
    private appConfigSrvc: APPGGConfigService,
    private router: Router) {
    this.appConfigSrvc.currentUser
      .subscribe((data) => {
        if (!(data && data.exp)) {
          this.router.navigate(['auth/login']);
        }
      });
  }

  login(username: string, password: string): Observable<any> {
    const body = {};
    const headers = new HttpHeaders({
      'username': username,
      'passwd': password,
    });
    return this.appCoreService.postRQ(APPGGApiConstants.LOGIN, body, headers)
      .pipe(
        map((res: any) => {
          if (res && res.token) {
            this.appConfigSrvc.updateJwtToken(res.token);
            this.router.navigate(['/pages/calls']);
            return res;
          } else {
            this.router.navigate(['/auth/login']);
            return res;
          }
        }),
      );
  }
}

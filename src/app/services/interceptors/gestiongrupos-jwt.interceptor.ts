import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APPGGConfigService } from '../../@core/services/app-votacionjunta-config.service';
import { map } from 'rxjs/operators';

@Injectable()
export class APPGGJwtInterceptor implements HttpInterceptor {

    constructor(
        private appConfigSrvc: APPGGConfigService,
    ) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.appConfigSrvc.currentTokenValue;
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`,
                },
            });
        }
        console.log('Entrando en el interceptor APPGGJwtInterceptor', request);
        return next.handle(request)
            .pipe(
                map(resp => {
                    if (resp instanceof HttpResponse || resp instanceof HttpErrorResponse) {
                        return resp;
                    }
                }),
            );
    }
}

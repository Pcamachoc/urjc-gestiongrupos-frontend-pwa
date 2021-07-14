import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { APPGGApiConstants } from '../../commons/constants/appgestiongrupos.api.constants';
import { APPGGConfigService } from './app-gestiongrupos-config.service';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { APPGGShowDialogService } from 'src/app/services/dialog/show-dialog.service';

@Injectable({
    providedIn: 'root',
})
export class APPGGCoreService {

    constructor(private http: HttpClient,
        private appConfigService: APPGGConfigService,
        private showDialogService: APPGGShowDialogService,
    ) { }

    getRQ<T>(epName, req?, params?, responseType?: 'blob' | 'json' | 'text'): Observable<T> {
        return this.standardRQ<T>('GET', epName, undefined, req, params, responseType);
    }

    postRQ<T>(epName, body, req?): Observable<T> {
        return this.standardRQ<T>('POST', epName, body, req);
    }

    deleteRQ<T>(epName, body, req?): Observable<T> {
        return this.standardRQ<T>('DELETE', epName, body, req);
    }

    putRQ<T>(epName, body, req?): Observable<T> {
        return this.standardRQ<T>('PUT', epName, body, req);
    }

    private standardRQ<T>(
        method: string = 'GET', epName: string, body?: any, requ?: HttpHeaders, params?: HttpParams, responseType?): Observable<T> {
        const url = `${APPGGApiConstants.API_BASE_ENDPOINT}${epName}`;
        const req: HttpRequest<any> = new HttpRequest(method, url, body, { headers: requ, params: params, responseType: responseType });
        return this.http.request(req)
            .pipe(
                map((res: any) => {
                    if (res && res.headers) {
                        console.log(`Respuesta correcta a ${epName}`, res);
                        const resAuthHeader = res.headers.get('authorization');
                        const jwtToken = resAuthHeader && resAuthHeader.replace('Bearer', '').trim();
                        if (jwtToken) {
                            this.appConfigService.updateJwtToken(jwtToken);
                        }
                        return responseType === 'blob' ? res : res.body;
                    }
                }),
                catchError((err) => {
                    console.error(err);

                    let error: any;
                    let errorContent = '';
                    if (err.error && err.error.error) {
                        error = err.error;
                        errorContent = `${error.error.message} - ${error.error.description}`;
                        this.showDialogService.showErrorAlert(error.error.message, error.error.description);
                    } else {
                        error = err.error;
                        errorContent = error;
                    }
                    return throwError(err.error);
                }),
            );
    }
}

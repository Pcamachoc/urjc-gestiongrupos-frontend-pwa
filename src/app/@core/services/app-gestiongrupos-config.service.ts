import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import * as jwt_decode from 'jwt-decode';
import { APPGGTokenRS } from '../../models/token-rs/token-rs.model';
import { APPGGAppConstants } from '../../commons/constants/appgestiongrupos.app.constants';

@Injectable({
    providedIn: 'root',
})
export class APPGGConfigService {
    private currentUserSubject: BehaviorSubject<APPGGTokenRS>;
    public currentUser: Observable<APPGGTokenRS>;

    private currentTokenSubject: BehaviorSubject<string>;
    public currentToken: Observable<string>;

    constructor() {
        this.currentUserSubject = new BehaviorSubject<APPGGTokenRS>(
            JSON.parse(sessionStorage.getItem(APPGGAppConstants.SESSION_USER)));
        this.currentTokenSubject = new BehaviorSubject<string>(undefined);
        this.currentUser = this.currentUserSubject.asObservable();
        this.currentToken = this.currentTokenSubject.asObservable();
    }
    updateJwtToken(token: string) {
        this.currentTokenSubject.next(token);
        const info: APPGGTokenRS = this.getDecodedAccessToken(token);
        this.currentUserSubject.next(info);
    }

    get currentTokenValue(): string {
        return this.currentTokenSubject.value;
    }
    get currentUserValue(): APPGGTokenRS {
        return this.currentUserSubject.value;
    }

    private getDecodedAccessToken(token: string): any {
        try {
            return jwt_decode(token);
        } catch (Error) {
            return null;
        }
    }
}

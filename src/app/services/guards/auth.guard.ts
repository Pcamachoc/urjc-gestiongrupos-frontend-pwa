import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { APPGGConfigService } from '../../@core/services/app-gestiongrupos-config.service';

@Injectable({ providedIn: 'root' })
export class APPGGCanActivateAuthGuard implements CanActivate {

    constructor(private appConfigService: APPGGConfigService, private router: Router) { }

    canActivate() {
        // If the user is not logged in we'll send them back to the home page
        if (!this.appConfigService.currentUserValue) {
            console.log('No estás logueado');
            this.router.navigate(['/auth/login']);
            return false;
        }
        return true;
    }
}

import { Injectable } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { APPGGErrorAlertComponent } from '../../@core/components/error-alert/error-alert.component';
import { APPGGConfirmDialogComponent } from '../../@core/components/confirm-dialog/confirm-dialog.component';
import { Observable } from 'rxjs';

@Injectable(
  { providedIn: 'root', useClass: APPGGShowDialogService },
)
export class APPGGShowDialogService {

  constructor(private appDialogService: NbDialogService,
  ) {
  }

  showConfirmDialog(title: string = 'Voto registrado correctamente',
    message: string = 'Su voto ha sido registrado correctamente, ¿qué desea hacer?',
    aceptButton: string = 'Volver',
    cancelButton: string = 'Consultar voto',
  ): Observable<boolean> {

    return this.appDialogService.open(APPGGConfirmDialogComponent, {
      closeOnEsc: false,
      closeOnBackdropClick: false,
      context: {
        title: title,
        message: message,
        aceptButton: aceptButton,
        cancelButton: cancelButton,
      },
    }).onClose;
  }

  showErrorAlert(message: string = 'Mensaje de error',
    description: string = 'Ha ocurrido un error',
  ): Observable<boolean> {
    return this.appDialogService.open(APPGGErrorAlertComponent, {
      closeOnEsc: true,
      closeOnBackdropClick: false,
      context: {
        message: message,
        description: description,
      },
    }).onClose;
  }
}

import { Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
    selector: 'appgg-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls: ['./confirm-dialog.component.scss'],
})
export class APPGGConfirmDialogComponent {

    @Input() title: string;
    @Input() message: string;
    @Input() aceptButton: string;
    @Input() cancelButton: string;

    constructor(protected ref: NbDialogRef<APPGGConfirmDialogComponent>) { }

    /**
     * The title of the dialog. Should be the **name of the action** the user wants to perform
     */

    cancelHandler() {
        this.ref.close(false);
    }

    acceptHandler() {
        this.ref.close(true);
    }
}

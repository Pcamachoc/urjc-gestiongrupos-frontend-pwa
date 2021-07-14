import { Component, OnInit, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'appgg-error-alert',
  templateUrl: './error-alert.component.html',
  styleUrls: ['./error-alert.component.scss'],
})
export class APPGGErrorAlertComponent implements OnInit {

  @Input() message: string;
  @Input() description: string;

  constructor(protected ref: NbDialogRef<APPGGErrorAlertComponent>) { }

  ngOnInit() {
  }

  public onClose() {
    this.ref.close();
  }
}

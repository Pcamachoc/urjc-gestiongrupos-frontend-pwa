import { Injectable } from '@angular/core';
import { APPGGAgendaCallsRS } from '../../models/calls-rs/calls-rs.model';
import { DatePipe } from '@angular/common';

@Injectable(
  { providedIn: 'root', useClass: APPGGComplexMethodsService },
)
export class APPGGComplexMethodsService {

  parseBase64ToFile(agenda: APPGGAgendaCallsRS): File {
    // base64 string
    const commaIndex = agenda.data.indexOf(',') + 1;
    const base64 = agenda.data.substring(commaIndex, agenda.data.length);
    const binary = atob(base64.replace(/\s/g, ''));
    const charCodes = new Uint8Array(new ArrayBuffer(binary.length));

    for (let i = 0; i < binary.length; i++) {
      charCodes[i] = binary.charCodeAt(i);
    }
    const blob = new Blob([charCodes], { type: 'application/pdf' });
    return new File([blob], agenda.title, { type: 'application/pdf' });
  }

  formatDay(date: string): string {
    const datePipe = new DatePipe('en-US');
    date = datePipe.transform(date, 'dd-MM-yyyy');
    return date;
  }

  formatHour(date: string): string {
    const datePipe = new DatePipe('en-US');
    date = datePipe.transform(date, 'HH:mm:ss');
    return date;
  }
}

import { Component, OnInit } from '@angular/core';
import { APPGGElementsCallsGroupedBySubjectRS, APPGGElementsCallsRS } from '../../../models/calls-rs/calls-rs.model';
import { APPGGApiService } from '../../../services/api/api.service';

@Component({
  selector: 'appgg-calls-main',
  templateUrl: './calls-main.component.html',
  styleUrls: ['./calls-main.component.scss'],
})
export class APPGGCallsMainComponent implements OnInit {

  calls: APPGGElementsCallsRS[] = [];

  callsGrouped: APPGGElementsCallsGroupedBySubjectRS[] = [];

  constructor(private apiService: APPGGApiService) { }

  ngOnInit() {
    this.loadCalls();
  }

  loadCalls(): void {
    this.apiService.getAllCalls()
      .subscribe((loadedCalls) => {
        this.calls = loadedCalls;
        this.agrupar();
      });
  }

  agrupar(): void{
    let entrada: APPGGElementsCallsGroupedBySubjectRS;
    if (this.calls != null) {
      this.calls.forEach(x => {
        const encontrado = this.callsGrouped.find (element => element.subject === x.subject);
        if (encontrado) {
          encontrado.items.push(x);
        } else {
          entrada = new APPGGElementsCallsGroupedBySubjectRS();
          entrada.subject = x.subject;
          entrada.items.push(x);
          this.callsGrouped.push(entrada);
        }
      });
    }
    console.log('agrupados', this.callsGrouped);
  }
}

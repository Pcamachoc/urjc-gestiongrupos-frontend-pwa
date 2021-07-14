import { Component, OnInit, Input } from '@angular/core';
import { APPGGApiService } from '../../services/api/api.service';
import { APPGGElementsCallsRS, APPGGParticipantsCallsRS } from '../../models/calls-rs/calls-rs.model';
import { saveAs } from 'file-saver';
import { APPGGConfigService } from 'src/app/@core/services/app-gestiongrupos-config.service';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { APPGGComplexMethodsService } from '../../services/complex-methods/complex-methods.service';
import { APPGGTokenRS } from 'src/app/models/token-rs/token-rs.model';

@Component({
  selector: 'appgg-call-card',
  templateUrl: './call-card.component.html',
  styleUrls: ['./call-card.component.scss'],
})
export class APPGGCallCardComponent implements OnInit {

  @Input() call: APPGGElementsCallsRS;

  public usuario: APPGGTokenRS;

  public group: string;

  public groupMembers: APPGGParticipantsCallsRS[]= [];

  showDetails: boolean;
  currentParticipation: string;

  constructor(private apiService: APPGGApiService,
    private router: Router,
    private appConfigService: APPGGConfigService,
    private complexMethodsService: APPGGComplexMethodsService,
  ) { }

  ngOnInit() {
    this.usuario = this.appConfigService.currentUserValue;
    console.log('user',this.appConfigService.currentUserValue);
    this.getGroupMembers();
  }

  loadExtendedCall(): void {
    this.apiService.getCallById(this.call.id)
      .subscribe((clickedCall) => {
        if (clickedCall) {
          this.call = clickedCall;
          this.showDetails = !this.showDetails;
        }
      });
  }

  callAlreadyVoted(): boolean {
    const voted = this.call.currentResult.find(x => x.idParticipant === this.appConfigService.currentUserValue.sub.id);
    return (voted != null);
  }

  consultVote(): void {
    this.apiService.getVoteIdByParameters(this.call.id)
      .subscribe((_data) => {
        if (_data) {
          this.router.navigate(['/pages/calls/consultVote'], { state: { vote: _data } });
        }
      });
  }

  addVote(): void {
    this.router.navigate(['/pages/calls/addVote'],
      {
        state: {
          call: this.call,
        },
      });
  }

  openFile(): void {
    const agenda = this.call.agenda.pop();
    const blob = this.complexMethodsService.parseBase64ToFile(agenda);
    saveAs(blob, agenda.title);
  }

  expiredTime(): boolean {
    const now = new Date();
    return (moment(now).isAfter(this.call.endDate) || moment(now).isBefore(this.call.initDate));
  }

  consultResultTime(): boolean {
    return this.call.votingClosed;
  }

  callResults(): void {
    this.apiService.getCallById(this.call.id)
      .subscribe((_data) => {
        if (_data) {
          this.router.navigate(['/pages/calls/results'],
            {
              state: {
                call: this.call,
              },
            });
        }
      });
  }

  formatDay(date: string): string {
    return this.complexMethodsService.formatDay(date);
  }

  formatHour(date: string): string {
    return this.complexMethodsService.formatHour(date);
  }

  getGroupMembers() {
    
    this.call.participants.forEach(element =>{
      if (element.id === this.usuario.sub.id) {
        this.group = element.group;
      }
    });
    this.call.participants.forEach( element => {
      if (element.group === this.group && element.id !== this.usuario.sub.id) {
        this.groupMembers.push(element);
      }
    })
    
  }
}

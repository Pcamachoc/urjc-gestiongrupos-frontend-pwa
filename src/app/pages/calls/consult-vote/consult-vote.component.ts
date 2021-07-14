import { Component, OnInit } from '@angular/core';
import { APPGGElementsCallsRS } from 'src/app/models/calls-rs/calls-rs.model';
import { Observable, Subscription } from 'rxjs';
import { APPGGApiService } from 'src/app/services/api/api.service';
import { APPGGConfigService } from 'src/app/@core/services/app-gestiongrupos-config.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { APPGGVotesWithHistoryRS } from 'src/app/models/vote-withHistory-rs/vote-withHistory-rs.model';
import * as moment from 'moment';
import { APPGGComplexMethodsService } from 'src/app/services/complex-methods/complex-methods.service';
import { APPGGTokenRS } from 'src/app/models/token-rs/token-rs.model';

@Component({
  selector: 'appgg-consult-vote',
  templateUrl: './consult-vote.component.html',
  styleUrls: ['./consult-vote.component.scss'],
})
export class APPGGConsultVoteComponent implements OnInit {

  callVote: APPGGElementsCallsRS = new APPGGElementsCallsRS();
  vote: APPGGVotesWithHistoryRS = new APPGGVotesWithHistoryRS();

  state$: Observable<object>;
  stateSubscription: Subscription;

  constructor(public apiService: APPGGApiService,
    public appConfigService: APPGGConfigService,
    public activatedRoute: ActivatedRoute,
    private router: Router,
    private complexMethodsService: APPGGComplexMethodsService) { }

  ngOnInit() {
    this.state$ = this.activatedRoute.paramMap
      .pipe(map(() => window.history.state));

    this.stateSubscription = this.state$
      .subscribe((_data: any) => {
        console.log(_data);
        if (_data && _data.vote) {
          this.apiService.getCallById(_data.vote.idCall)
            .subscribe((data) => {
              this.callVote = data;
            });
          this.apiService.getVoteByIdWithHistory(_data.vote.id)
            .subscribe((data) => {
              this.vote = data;
            });
        }
      });
  }

  format(): string {
    return (moment(this.vote.date).toISOString(true));
  }

  isOptionVoted(idProposal: string, option: string): boolean {
    const voted = this.callVote.currentResult
      .find(x => x.idParticipant === this.appConfigService.currentUserValue.sub.id
        && x.idProposal === idProposal && x.option === option);
    return (voted == null);
  }

  optionVoted(idProposal: string): any {
    const voted = this.callVote.currentResult
      .find(x => x.idParticipant === this.appConfigService.currentUserValue.sub.id
        && x.idProposal === idProposal);
    return voted.option;
  }

  return(): void {
    this.router.navigate(['/pages/calls']);
  }
  formatDay(date: string): string {
    return this.complexMethodsService.formatDay(date);
  }

  formatHour(date: string): string {
    return this.complexMethodsService.formatHour(date);
  }


}

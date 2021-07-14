import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APPGGCoreService } from '../../@core/services/app-gestiongrupos-core.service';
import { APPGGApiConstants } from '../../commons/constants/appgestiongrupos.api.constants';
import { APPGGElementsCallsRS } from '../../models/calls-rs/calls-rs.model';
import { APPGGVotesBody } from 'src/app/models/create-vote-body/create-vote-body.model';
import { APPGGVotesWithHistoryRS } from '../../models/vote-withHistory-rs/vote-withHistory-rs.model';

@Injectable(
  { providedIn: 'root', useClass: APPGGApiService },
)
export class APPGGApiService {

  constructor(private appCoreService: APPGGCoreService,
  ) {
  }

  getAllCalls(): Observable<APPGGElementsCallsRS[]> {
    return this.appCoreService.getRQ<APPGGElementsCallsRS[]>(APPGGApiConstants.CALLS);
  }

  deleteCall(id: string): Observable<any> {
    const epName = APPGGApiConstants.CALL_OPERATION_WITH_ID(id);
    return this.appCoreService.deleteRQ<string>(epName, undefined);
  }

  createVote(body: APPGGVotesBody): Observable<APPGGVotesBody> {
    const epName = APPGGApiConstants.VOTES;
    return this.appCoreService.postRQ<APPGGVotesBody>(epName, body);
  }

  getCallById(id: string): Observable<APPGGElementsCallsRS> {
    const epName = APPGGApiConstants.CALL_OPERATION_WITH_ID(id);
    return this.appCoreService.getRQ<APPGGElementsCallsRS>(epName);
  }

  getVoteByIdWithHistory(id: string): Observable<APPGGVotesWithHistoryRS> {
    const epName = APPGGApiConstants.VOTES_HISTORY(id);
    return this.appCoreService.getRQ<APPGGVotesWithHistoryRS>(epName);
  }

  getVoteIdByParameters(id: string): Observable<APPGGVotesWithHistoryRS> {
    const epName = APPGGApiConstants.VOTES_PARAMETERS(id);
    return this.appCoreService.getRQ<APPGGVotesWithHistoryRS>(epName);
  }
}

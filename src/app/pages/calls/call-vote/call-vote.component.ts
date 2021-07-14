import { Component, OnInit } from '@angular/core';
import { APPGGElementsCallsRS, APPGGParticipantsCallsRS } from '../../../models/calls-rs/calls-rs.model';
import { Observable, Subscription } from 'rxjs';
import { APPGGApiService } from 'src/app/services/api/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { APPGGVotesBody, APPGGProposalsVoteVotesBody } from 'src/app/models/create-vote-body/create-vote-body.model';
import * as uuid from 'uuid';
import { APPGGConfigService } from '../../../@core/services/app-gestiongrupos-config.service';
import { APPGGVotesRS } from 'src/app/models/votes-rs/votes-rs.model';
import { APPGGShowDialogService } from 'src/app/services/dialog/show-dialog.service';
import { APPGGTokenRS } from 'src/app/models/token-rs/token-rs.model';

@Component({
  selector: 'appgg-call-vote',
  templateUrl: './call-vote.component.html',
  styleUrls: ['./call-vote.component.scss'],
})
export class APPGGCallVoteComponent implements OnInit {

  callVote: APPGGElementsCallsRS = new APPGGElementsCallsRS();
  body: APPGGVotesRS = new APPGGVotesRS();
  value: number;
  selectedOption: any;

  public usuario: APPGGTokenRS;
  public group: string;
  public groupMembers: APPGGParticipantsCallsRS[] = [];

  public members: string[] = [];

  selectedItem;

  state$: Observable<object>;
  stateSubscription: Subscription;

  loaded = false;
  withoutAnswer = false;

  constructor(public apiService: APPGGApiService,
    public appConfigService: APPGGConfigService,
    public activatedRoute: ActivatedRoute,
    private router: Router,
    private showDialogService: APPGGShowDialogService) {
  }

  ngOnInit() {
    this.state$ = this.activatedRoute.paramMap
      .pipe(map(() => window.history.state));

    this.stateSubscription = this.state$
      .subscribe((_data: any) => {
        if (_data && _data.call) {
          this.apiService.getCallById(_data.call.id)
            .subscribe((data) => {
              this.callVote = data;
              this.usuario = this.appConfigService.currentUserValue;
              this.getGroupMembers();
            });
        }
      });
  }

  ngOnDestroy(): void {
    this.stateSubscription && this.stateSubscription.unsubscribe();
  }

  createVote() {
    this.body = this.createBody();
    if (this.withoutAnswer) {
      this.showErrorAlert();
      // TODO: Minimize this function from here
    } else {
      let title = 'Confirmar voto';
      let message = '¿Seguro que desea enviar el voto de esta práctica? Esta acción no se puede deshacer.';
      let aceptButton = 'Aceptar';
      let cancelButton = 'Cancelar';
      this.showDialogService.showConfirmDialog(title, message, aceptButton, cancelButton)
        .subscribe((confirmation: boolean) => {
          if (confirmation) {
            this.apiService.createVote(this.body)
              .subscribe((_data) => {
                if (_data) {
                  title = 'Voto registrado correctamente';
                  message = 'Su voto ha sido registrado correctamente, ¿qué desea hacer?';
                  aceptButton = 'Consultar voto';
                  cancelButton = 'Volver';
                  this.showDialogService.showConfirmDialog(
                    title, message, aceptButton, cancelButton)
                    .subscribe((confirmationConsult: boolean) => {
                      if (confirmationConsult) {
                        this.router.navigate(['/pages/calls/consultVote'],
                          {
                            state: {
                              vote: this.body,
                            },
                          });
                      } else {
                        this.router.navigate(['/pages/calls']);
                      }
                    });
                }
              });
          }
        });
    }
  }

  createBody() {
    const body = new APPGGVotesBody();
    body.idCall = this.callVote.id;
    body.id = uuid.v4();
    body.idParticipant = this.appConfigService.currentUserValue.sub.id;
    body.group = this.group;
    let proposalVote = new APPGGProposalsVoteVotesBody();
    for (let i=0; i<this.groupMembers.length; i++){
      proposalVote = {
        idProposal: this.groupMembers[i].selected.id,
        nameProposal: this.groupMembers[i].selected.name,
        option: i+1,
      }
      body.proposalsVote.push(proposalVote);
    }
      
    return body;
  }

  private showErrorAlert() {
    const message = 'Error';
    const description = 'No puede dejar una propuesta sin votar, en tal caso marque la opción Abstención';
    this.showDialogService.showErrorAlert(message, description);
    this.withoutAnswer = false;
  }

  getGroupMembers() {
    if (this.callVote) {
      this.callVote.participants.forEach(element => {
        if (element.id === this.usuario.sub.id) {
          this.group = element.group;
        }
      });
      this.callVote.participants.forEach(element => {
        if (element.group === this.group && element.id !== this.usuario.sub.id) {
          this.groupMembers.push(element);
          this.members.push(element.name);
        }
      })
    }

  }

  cambioRegion(dato){
    //Aqui va tu logica de consulta a la BD

    this.members.splice(this.members.indexOf(dato), 1);
  }

  volver() {
    this.router.navigate(['/pages/calls']);
  }

}

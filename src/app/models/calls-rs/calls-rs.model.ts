import {
    APPGGElementsCallsRSInterface,
    APPGGAgendaCallsRSInterface,
    APPGGOrganizersCallsRSInterface,
    APPGGProposalsCallsRSInterface,
    APPGGParticipantsCallsRSInterface,
    APPGGCurrentResultCallsRSInterface,
    APPGGCountingCallsRSInterface,
    APPGGElementsCallsGroupedBySubjectRSInterface,
} from './calls-rs.interface';

export class APPGGAgendaCallsRS implements APPGGAgendaCallsRSInterface {
    title: string;
    data: string;
}

export class APPGGElementsCallsRS implements APPGGElementsCallsRSInterface {
    id?: string;
    name: string;
    subject: string;
    initDate: string;
    endDate: string;
    agenda: APPGGAgendaCallsRS[];
    participants: APPGGParticipantsCallsRS[];
    currentResult: APPGGCurrentResultCallsRS[];
    counting: APPGGCountingCallsRS[];
    alreadyVoted: boolean = false;
    votingClosed: boolean;

    constructor() {
        this.agenda = new Array<APPGGAgendaCallsRS>();
        this.participants = new Array<APPGGParticipantsCallsRS>();
        this.currentResult = new Array<APPGGCurrentResultCallsRS>();
        this.counting = new Array<APPGGCountingCallsRS>();
        this.alreadyVoted = false;
    }
}

export class APPGGOrganizersCallsRS implements APPGGOrganizersCallsRSInterface {
    name: string;
    position: string;
}

export class APPGGProposalsCallsRS implements APPGGProposalsCallsRSInterface {
    id: string;
    description: string;
    selected: any;
}

export class APPGGParticipantsCallsRS implements APPGGParticipantsCallsRSInterface {
    id: string;
    group: string;
    name: string;
    selected: any;
}

export class APPGGCurrentResultCallsRS implements APPGGCurrentResultCallsRSInterface {
    idProposal: string;
    idParticipant: string;
    option: string;
}

export class APPGGCountingCallsRS implements APPGGCountingCallsRSInterface {
    idProposal: string;
    option: string;
}

export class APPGGElementsCallsGroupedBySubjectRS implements APPGGElementsCallsGroupedBySubjectRSInterface {
    subject: string;
    items: APPGGElementsCallsRS[];
    constructor() {
        this.items = new Array<APPGGElementsCallsRS>();
    }
}

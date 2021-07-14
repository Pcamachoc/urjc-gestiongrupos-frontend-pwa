export interface APPGGElementsCallsRSInterface {
    id?: string;
    name: string;
    subject: string;
    initDate: string;
    endDate: string;
    agenda: APPGGAgendaCallsRSInterface[];
    participants: APPGGParticipantsCallsRSInterface[];
    currentResult: APPGGCurrentResultCallsRSInterface[];
    counting: APPGGCountingCallsRSInterface[];
}

export interface APPGGAgendaCallsRSInterface {
    title: string;
    data: string;
}

export interface APPGGOrganizersCallsRSInterface {
    name: string;
    position: string;
}

export interface APPGGProposalsCallsRSInterface {
    id: string;
    description: string;
}

export interface APPGGParticipantsCallsRSInterface {
    id: string;
    group: string;
    name: string;
}

export interface APPGGCurrentResultCallsRSInterface {
    idProposal: string;
    idParticipant: string;
    option: string;
}

export interface APPGGCountingCallsRSInterface {
    idProposal: string;
    option: string;
}

export interface APPGGElementsCallsGroupedBySubjectRSInterface {
    subject: string;
    items: APPGGElementsCallsRSInterface[];
}

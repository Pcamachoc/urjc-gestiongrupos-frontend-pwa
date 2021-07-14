import {
    APPGGVotesRSInterface,
    APPGGProposalsVoteVotesRSInterface,
} from './votes-rs.interface';


export class APPGGVotesRS implements APPGGVotesRSInterface {
    id?: string;
    idParticipant: string;
    creationDate: string;
    idCall: string;
    group: string;
    proposalsVote: APPGGProposalsVoteVotesRS[];

    constructor() {
        this.proposalsVote = new Array<APPGGProposalsVoteVotesRS>();
    }
}

export class APPGGProposalsVoteVotesRS implements APPGGProposalsVoteVotesRSInterface {
    idProposal: string;
    nameProposal: string;
    // option: string;
    option: number;
}

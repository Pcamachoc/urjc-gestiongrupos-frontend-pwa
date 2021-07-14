import {
    APPGGVotesBodyInterface,
    APPGGProposalsVoteVotesBodyInterface,
} from './create-vote-body.interface';

export class APPGGVotesBody implements APPGGVotesBodyInterface {
    id?: string;
    idParticipant: string;
    creationDate: string;
    idCall: string;
    group: string;
    proposalsVote: APPGGProposalsVoteVotesBody[];

    constructor() {
        this.proposalsVote = new Array<APPGGProposalsVoteVotesBody>();
    }
}

export class APPGGProposalsVoteVotesBody implements APPGGProposalsVoteVotesBodyInterface {
    idProposal: string;
    nameProposal: string;
    option: number;
}

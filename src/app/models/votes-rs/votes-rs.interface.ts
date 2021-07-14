export interface APPGGVotesRSInterface {
    id?: string;
    idParticipant: string;
    creationDate: string;
    idCall: string;
    group: string;
    proposalsVote: APPGGProposalsVoteVotesRSInterface[];
}

export interface APPGGProposalsVoteVotesRSInterface {
    idProposal: string;
    nameProposal: string;
    // option: string;
    option: number;
}

export interface APPGGVotesBodyInterface {
    id?: string;
    idParticipant: string;
    creationDate: string;
    idCall: string;
    group: string;
    proposalsVote: APPGGProposalsVoteVotesBodyInterface[];
}

export interface APPGGProposalsVoteVotesBodyInterface {
    idProposal: string;
    nameProposal: string;
    option: number;
}

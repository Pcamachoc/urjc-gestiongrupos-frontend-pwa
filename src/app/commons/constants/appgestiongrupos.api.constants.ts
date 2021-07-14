export class APPGGApiConstants {

    public static API_BASE_ENDPOINT = '/api';

    public static LOGIN = '/authenticate';

    public static CALLS = '/private/calls';

    public static VOTES = '/private/votes';

    public static VOTESHISTORY = '/private/votesHistory';

    public static VOTESPARAMETERS = '/private/voteIdByParameters';

    public static CALL_OPERATION_WITH_ID(id: string) {
        return `${this.CALLS}/${id}`;
    }

    public static VOTES_HISTORY(id: string) {
        return `${this.VOTESHISTORY}/${id}`;
    }

    public static VOTES_PARAMETERS(id: string) {
        return `${this.VOTESPARAMETERS}/${id}`;
    }
}

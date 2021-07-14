import {
    APPGGVotesWithHistoryRSInterface,
} from '../vote-withHistory-rs/vote-withHistory-rs.interface';
import { APPGGVotesRS } from '../votes-rs/votes-rs.model';

export class APPGGVotesWithHistoryRS implements APPGGVotesWithHistoryRSInterface {
    date: string;
    is_delete: boolean;
    value: APPGGVotesRS;
    tx_id: string;

    constructor() {
        this.value = new APPGGVotesRS();
    }
}

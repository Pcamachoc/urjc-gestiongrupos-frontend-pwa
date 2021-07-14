import { APPGGVotesRSInterface } from '../votes-rs/votes-rs.interface';

export interface APPGGVotesWithHistoryRSInterface {
    date: string;
    is_delete: boolean;
    value: APPGGVotesRSInterface;
    tx_id: string;
}

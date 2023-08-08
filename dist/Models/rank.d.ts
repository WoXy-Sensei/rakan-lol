import { QueueType } from "../Constants/queueType.enum";
import { Regions } from "../Constants/regions.enum";
import { RiotApiConfig } from "../RiotApiConfig";
declare class Rank {
    readonly leagueId: string;
    readonly queueType: QueueType;
    readonly tier: string;
    readonly rank: string;
    readonly leaguePoints: number;
    readonly wins: number;
    readonly losses: number;
    constructor(leagueId: string, _queueType: QueueType, tier: string, rank: string, leaguePoints: number, wins: number, losses: number);
    getTierFram(): Promise<string>;
    static getRank(summonerId: string, region: Regions, config: RiotApiConfig, queueType: QueueType): Promise<Rank | any>;
    static getRanks(summonerId: string, region: Regions, config: RiotApiConfig): Promise<Rank | any>;
}
export default Rank;

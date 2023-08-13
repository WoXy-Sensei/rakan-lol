import { Regions } from "../Constants/regions.enum";
import { QueueType } from "../Constants/queueType.enum";
import { CahmpionMastery } from "./championMastery";
import { League } from "./league";
declare class Summoner {
    readonly accountid: string;
    readonly iconid: number;
    readonly summonerName: string;
    readonly summonerId: string;
    readonly puuid: string;
    readonly summonerlevel: number;
    readonly region: Regions;
    constructor(account_id: string, icon_id: number, summoner_name: string, summonerId: string, puuid: string, summoner_level: number, region: Regions);
    getIcon(): Promise<string>;
    getLeague(queueType: QueueType): Promise<League>;
    getChampionMastery(): Promise<CahmpionMastery[]>;
}
export { Summoner };

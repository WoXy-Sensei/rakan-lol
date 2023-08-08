import { Regions } from "../Constants/regions.enum";
import { RiotApiConfig } from "../RiotApiConfig";
import Rank from "./rank";
import { QueueType } from "../Constants/queueType.enum";
import CahmpionMastery from "./championMastery";
declare class Summoner {
    readonly accountid: string;
    readonly iconid: number;
    readonly summonerName: string;
    readonly summonerId: string;
    readonly puuid: string;
    readonly summonerlevel: number;
    readonly region: Regions;
    private config;
    constructor(account_id: string, icon_id: number, summoner_name: string, summonerId: string, puuid: string, summoner_level: number, region: Regions, config: RiotApiConfig);
    getIcon(): Promise<string>;
    getRank(queueType: QueueType): Promise<Rank>;
    getChampionMastery(): Promise<CahmpionMastery[]>;
    static getSummoner(summonerName: string, region: Regions, how: string, config: RiotApiConfig): Promise<Summoner | any>;
}
export default Summoner;

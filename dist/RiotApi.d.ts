import { Regions } from "./Constants/regions.enum";
import { RiotApiConfig } from "./RiotApiConfig";
import { Summoner } from "./Models/summoner";
import { Champion } from "./Models/champion";
import { Rank } from "./Models/rank";
import { QueueType } from "./Constants/queueType.enum";
import { CahmpionMastery } from "./Models/championMastery";
declare class RiotApi {
    riotcConfig: RiotApiConfig;
    constructor(riotConfig: RiotApiConfig);
    /**
     *
     * @param summonerId
     * @param region
     * @param queueType
     * @returns
     */
    getRankById(summonerId: string, region: Regions, queueType: QueueType): Promise<Rank>;
    /**
     *
     * @param summonerId
     * @param region
     * @returns
     */
    getChampionMasteryById(summonerId: string, region: Regions): Promise<CahmpionMastery[]>;
    /**
     *
     * @param key
     * @returns
     */
    getChampionByKey(key: number): Promise<Champion>;
    /**
     *
     * @param name
     * @returns
     */
    getChampionByName(name: string): Promise<Champion>;
    /**
     *
     * @param summonerName
     * @param region
     * @returns
     */
    getSummonerByName(summonerName: string, region: Regions): Promise<Summoner>;
    /**
     *
     * @param summonerId
     * @param region
     * @returns
     */
    getSummonerById(summonerId: string, region: Regions): Promise<Summoner>;
}
export { RiotApi };

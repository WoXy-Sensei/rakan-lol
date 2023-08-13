import { Regions } from "./Constants/regions.enum";
import { Summoner } from "./Models/summoner";
import { League } from "./Models/league";
import { QueueType } from "./Constants/queueType.enum";
import { CahmpionMastery } from "./Models/championMastery";
declare class RiotApi {
    /**
     *
     * @param summonerId
     * @param region
     * @param queueType
     * @returns
     */
    getLeagueBySummonerId(summonerId: string, region: Regions, queueType: QueueType): Promise<League>;
    /**
     *
     * @param summonerId
     * @param region
     * @returns
     */
    getChampionMasteryById(summonerId: string, region: Regions): Promise<CahmpionMastery[]>;
    /**
     *
     * @param id
     * @returns
     */
    getChampionById(id: number): Promise<object>;
    /**
     *
     * @param name
     * @returns
     */
    getChampionByName(name: string): Promise<object>;
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

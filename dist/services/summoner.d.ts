import { Regions } from "../Constants";
import { Summoner } from "../Models";
declare class SummonerService {
    static getSummoner(value: string, region: Regions, how?: string): Promise<Summoner>;
    static getSummonerByName(summonerName: string, region: Regions): Promise<Summoner>;
    static getSummonerById(summonerId: string, region: Regions): Promise<Summoner>;
}
export default SummonerService;

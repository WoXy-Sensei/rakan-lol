import { Regions } from "../Constants";
import { CahmpionMastery } from "../Models";
declare class ChampionMasteryService {
    static getCahmpionMastery(summonerId: string, region: Regions): Promise<CahmpionMastery[]>;
}
export default ChampionMasteryService;

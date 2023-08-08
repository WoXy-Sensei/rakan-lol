import { Regions } from "../Constants/regions.enum";
import { RiotApiConfig } from "../RiotApiConfig";
import { Champion } from "./champion";
declare class CahmpionMastery {
    readonly championLevel: number;
    readonly championPoints: number;
    readonly lastPlayTime: number;
    readonly championPointsSinceLastLevel: number;
    readonly championPointsUntilNextLevel: number;
    readonly chestGranted: boolean;
    readonly tokensEarned: number;
    readonly championId: number;
    constructor(championLevel: number, championPoints: number, lastPlayTime: number, championPointsSinceLastLevel: number, championPointsUntilNextLevel: number, chestGranted: boolean, tokensEarned: number, championId: number);
    getCahmpion(): Promise<Champion>;
    static getCahmpionMastery(summonerId: string, region: Regions, config: RiotApiConfig): Promise<CahmpionMastery[] | any>;
}
export { CahmpionMastery };

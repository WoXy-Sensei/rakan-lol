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
    getCahmpion(): Promise<any>;
}
export { CahmpionMastery };

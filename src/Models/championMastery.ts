
import DragonService from "../services/dragon";


class CahmpionMastery {
  readonly championLevel: number;
  readonly championPoints: number;
  readonly lastPlayTime: number;
  readonly championPointsSinceLastLevel: number;
  readonly championPointsUntilNextLevel: number;
  readonly chestGranted: boolean;
  readonly tokensEarned: number;
  readonly championId:number;

  constructor(
    championLevel: number,
    championPoints: number,
    lastPlayTime: number,
    championPointsSinceLastLevel: number,
    championPointsUntilNextLevel: number,
    chestGranted: boolean,
    tokensEarned: number,
    championId:number
 
  ) {
    this.championLevel = championLevel;
    this.championPoints = championPoints;
    this.lastPlayTime = lastPlayTime;
    this.championPointsSinceLastLevel = championPointsSinceLastLevel;
    this.championPointsUntilNextLevel = championPointsUntilNextLevel;
    this.chestGranted = chestGranted;
    this.tokensEarned = tokensEarned;
    this.championId = championId;
  }

  public async getCahmpion() : Promise<any>{
    return await DragonService.findChampionById(this.championId)
  }

  
}

export {CahmpionMastery};

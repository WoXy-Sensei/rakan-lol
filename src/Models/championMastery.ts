import axios from "axios";
import {Regions} from "../Constants/regions.enum";
import {RiotApiConfig} from "../RiotApiConfig";
import {Champion} from "./champion";

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

  public async getCahmpion() : Promise<Champion>{
    return await Champion.getChampion("key",this.championId);
  }

  public static async getCahmpionMastery(
    summonerId: string,
    region: Regions,
    config: RiotApiConfig
  ): Promise<CahmpionMastery[] | any> {
    try {
      const url: string = `lol/champion-mastery/v4/champion-masteries/by-summoner/${summonerId}`;
      const response = await axios.get(
        `https://${region}.api.riotgames.com/${url}?api_key=${config.Api_key}`
      );
      const data = response.data;
      if (data.length === 0) return;
      const cahmpionMasterys:CahmpionMastery[] = await data.map((championMastery:any) => new CahmpionMastery(championMastery.championLevel,championMastery.championPoints,championMastery.lastPlayTime,championMastery.championPointsSinceLastLevel,championMastery.championPointsUntilNextLevel,championMastery.chestGranted,championMastery.tokensEarned,championMastery.championId))
      return cahmpionMasterys;
    } catch (error: any) {
      console.error("Error:", error);
    }
  }
}

export {CahmpionMastery};

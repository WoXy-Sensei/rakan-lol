import {Regions} from "./Constants/regions.enum";
import {RiotApiConfig} from "./RiotApiConfig";
import Summoner from "./Models/summoner";
import Champion from "./Models/champion";
import Rank from "./Models/rank";
import {QueueType} from "./Constants/queueType.enum";
import CahmpionMastery from "./Models/championMastery";


class RiotApi {
  riotcConfig: RiotApiConfig;

  constructor(riotConfig: RiotApiConfig) {
    this.riotcConfig = riotConfig;
  }

  /**
   * 
   * @param summonerId 
   * @param region 
   * @param queueType 
   * @returns 
   */
  async getRankById(summonerId:string,region:Regions,queueType:QueueType) : Promise<Rank>{
    const rank: Rank = await Rank.getRank(summonerId,region,this.riotcConfig,queueType);
    return rank;
  }

  /**
   * 
   * @param summonerId 
   * @param region 
   * @returns 
   */
  async getChampionMasteryById(summonerId:string,region:Regions) : Promise<CahmpionMastery[]>{
    const cahmpionMastery: CahmpionMastery[] = await CahmpionMastery.getCahmpionMastery(summonerId,region,this.riotcConfig)
    return cahmpionMastery;
  }

  /**
   * 
   * @param key 
   * @returns 
   */
  async getChampionByKey(key:number) : Promise<Champion>{
    return Champion.getChampion("key",key);
  }

  /**
   * 
   * @param name 
   * @returns 
   */
  async getChampionByName(name:string) : Promise<Champion>{
    return Champion.getChampion("name",name)
  }
  
  /**
   * 
   * @param summonerName 
   * @param region 
   * @returns 
   */
  async getSummonerByName(summonerName: string, region: Regions): Promise<Summoner>{
    const summoner:Summoner = await Summoner.getSummoner(summonerName,region,"/by-name",this.riotcConfig);
    return summoner
  }

  /**
   * 
   * @param summonerId 
   * @param region 
   * @returns 
   */
  async getSummonerById(summonerId: string, region: Regions): Promise<Summoner>{
    const summoner:Summoner = await Summoner.getSummoner(summonerId,region,"",this.riotcConfig);
    return summoner
  }

}

export {RiotApi};

import {Regions} from "./Constants/regions.enum";
import {Summoner} from "./Models/summoner";
import {League} from "./Models/league";
import {QueueType} from "./Constants/queueType.enum";
import {CahmpionMastery} from "./Models/championMastery";
import LeagueService from "./services/league";
import ChampionMasteryService from "./services/championMastery";
import DragonService from "./services/dragon";
import SummonerService from "./services/summoner";


class RiotApi {
  /**
   * 
   * @param summonerId 
   * @param region 
   * @param queueType 
   * @returns 
   */
  async getLeagueBySummonerId(summonerId:string,region:Regions,queueType:QueueType) : Promise<League>{
    const league: League = await LeagueService.getLeague(summonerId,region,queueType);
    return league;
  }

  /**
   * 
   * @param summonerId 
   * @param region 
   * @returns 
   */
  async getChampionMasteryById(summonerId:string,region:Regions) : Promise<CahmpionMastery[]>{
    const cahmpionMastery: CahmpionMastery[] = await ChampionMasteryService.getCahmpionMastery(summonerId,region)
    return cahmpionMastery;
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  async getChampionById(id:number) : Promise<object>{
    return DragonService.findChampionById(id);
  }

  /**
   * 
   * @param name 
   * @returns 
   */
  async getChampionByName(name:string) : Promise<object>{
    return DragonService.findChampionByName(name);
  }
  
  /**
   * 
   * @param summonerName 
   * @param region 
   * @returns 
   */
  async getSummonerByName(summonerName: string, region: Regions): Promise<Summoner>{
    const summoner:Summoner = await SummonerService.getSummonerByName(summonerName,region);
    return summoner
  }

  /**
   * 
   * @param summonerId 
   * @param region 
   * @returns 
   */
  async getSummonerById(summonerId: string, region: Regions): Promise<Summoner>{
    const summoner:Summoner = await SummonerService.getSummonerById(summonerId,region);
    return summoner
  }

}

export {RiotApi};
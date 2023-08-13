import {Regions} from "../Constants/regions.enum";
import {QueueType} from "../Constants/queueType.enum";
import {CahmpionMastery} from "./championMastery";
import { League } from "./league";
import LeagueService from "../services/league";
import ChampionMasteryService from "../services/championMastery";
import DragonService from "../services/dragon";

class Summoner {
  readonly accountid: string;
  readonly iconid: number = NaN;
  readonly summonerName: string;
  readonly summonerId: string;
  readonly puuid: string;
  readonly summonerlevel: number;
  readonly region: Regions;

  constructor(
    account_id: string,
    icon_id: number,
    summoner_name: string,
    summonerId: string,
    puuid: string,
    summoner_level: number,
    region: Regions,
  ) {
    this.accountid = account_id;
    this.iconid = icon_id;
    this.summonerName = summoner_name;
    this.summonerId = summonerId;
    this.puuid = puuid;
    this.summonerlevel = summoner_level;
    this.region = region;
  }

  public async getIcon(): Promise<string> {
    return DragonService.findIconById(this.iconid);
  }

  public async getLeague(queueType: QueueType): Promise<League> {
    const league: League = await LeagueService.getLeague(this.summonerId,this.region,queueType);
    return league;
  }
  public async getChampionMastery(): Promise<CahmpionMastery[]> {
    const cahmpionMastery: CahmpionMastery[] = await ChampionMasteryService.getCahmpionMastery(this.summonerId,this.region)
    return cahmpionMastery;
  }
}

export {Summoner};

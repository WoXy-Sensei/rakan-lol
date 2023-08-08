import Dragon from "./dragon";
import axios from "axios";
import {Regions} from "../Constants/regions.enum";
import {RiotApiConfig} from "../RiotApiConfig";
import Rank from "./rank";
import {QueueType} from "../Constants/queueType.enum";
import CahmpionMastery from "./championMastery";

class Summoner {
  readonly accountid: string;
  readonly iconid: number = NaN;
  readonly summonerName: string;
  readonly summonerId: string;
  readonly puuid: string;
  readonly summonerlevel: number;
  readonly region: Regions;
  private config:RiotApiConfig;

  constructor(
    account_id: string,
    icon_id: number,
    summoner_name: string,
    summonerId: string,
    puuid: string,
    summoner_level: number,
    region: Regions,
    config:RiotApiConfig
  ) {
    this.accountid = account_id;
    this.iconid = icon_id;
    this.summonerName = summoner_name;
    this.summonerId = summonerId;
    this.puuid = puuid;
    this.summonerlevel = summoner_level;
    this.region = region;
    this.config = config;
  }

  public async getIcon(): Promise<string> {
    return Dragon.findIconById(this.iconid);
  }

  public async getRank(queueType: QueueType): Promise<Rank> {
    const rank: Rank = await Rank.getRank(this.summonerId,this.region,this.config,queueType);
    return rank;
  }
  public async getChampionMastery(): Promise<CahmpionMastery[]> {
    const cahmpionMastery: CahmpionMastery[] = await CahmpionMastery.getCahmpionMastery(this.summonerId,this.region,this.config)
    return cahmpionMastery;
  }

  static async getSummoner(
    summonerName: string,
    region: Regions,
    how: string,
    config: RiotApiConfig
  ): Promise<Summoner | any> {
    const url: string = `lol/summoner/v4/summoners${how}/${summonerName}`;

    try {
      const response = await axios.get(
        `https://${region}.api.riotgames.com/${url}?api_key=${config.Api_key}`
      );
      const data = response.data;

      const summoner: Summoner = new Summoner(
        data.accountId,
        data.profileIconId,
        data.name,
        data.id,
        data.puuid,
        data.summonerLevel,
        region,
        config
      );
      return summoner;
    } catch (error: any) {
      console.error("Error:", error);
    }
  }
}

export default Summoner;

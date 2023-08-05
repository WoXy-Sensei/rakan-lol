import Dragon from "./dragon";
import axios from "axios";
import Regions from "../Constants/regions.enum";
import RiotApiConfig from "../RiotApiConfig";
import Rank from "./rank";
import QueueType from "../Constants/queueType.enum";

class Summoner {
  readonly accountid: string;
  readonly iconid: number = NaN;
  readonly summonerName: string;
  readonly summonerId: string;
  readonly puuid: string;
  readonly summonerlevel: number;
  readonly region: Regions;
  readonly ranks: Rank[];

  constructor(
    account_id: string,
    icon_id: number,
    summoner_name: string,
    id: string,
    puuid: string,
    summoner_level: number,
    region: Regions,
    ranks: Rank[]
  ) {
    this.accountid = account_id;
    this.iconid = icon_id;
    this.summonerName = summoner_name;
    this.summonerId = id;
    this.puuid = puuid;
    this.summonerlevel = summoner_level;
    this.region = region;
    this.ranks = ranks;
  }

  public async getIcon(): Promise<string> {
    return Dragon.findIconById(this.iconid);
  }

  public async getRank(queueType: QueueType): Promise<Rank | any> {
    const rank = this.ranks.find((rank: Rank) => rank.queueType === queueType);
    return rank;
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
      const ranks: Rank[] = await Rank.getRanks(data.id, region, config);

      const summoner: Summoner = new Summoner(
        data.accountId,
        data.profileIconId,
        data.name,
        data.id,
        data.puuid,
        data.summonerLevel,
        region,
        ranks
      );
      return summoner;
    } catch (error: any) {
      console.error("Error:", error);
    }
  }
}

export default Summoner;

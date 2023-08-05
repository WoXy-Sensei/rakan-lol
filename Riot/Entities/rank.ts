import axios from "axios";
import QueueType from "../Constants/queueType.enum";
import Regions from "../Constants/regions.enum";
import RiotApiConfig from "../RiotApiConfig";
import Dragon from "./dragon";

class Rank {
  readonly leagueId: string;
  queueType: QueueType | null;
  readonly tier: string;
  readonly rank: string;
  readonly leaguePoints: number;
  readonly wins: number;
  readonly losses: number;

  constructor(
    leagueId: string,
    _queueType: QueueType,
    tier: string,
    rank: string,
    leaguePoints: number,
    wins: number,
    losses: number
  ) {
    this.leagueId = leagueId;
    this.queueType = _queueType;
    this.tier = tier;
    this.rank = rank;
    this.leaguePoints = leaguePoints;
    this.wins = wins;
    this.losses = losses;
  }

  public async getTierFram() {
    return await Dragon.findTierFrameByName(this.tier);
  }

  private static async getRank(
    summonerId: string,
    region: Regions,
    config: RiotApiConfig,
    queueType: QueueType
  ): Promise<Rank | any> {
    try {
      const url: string = `lol/league/v4/entries/by-summoner/${summonerId}`;
      const response = await axios.get(
        `https://${region}.api.riotgames.com/${url}?api_key=${config.Api_key}`
      );
      const data = response.data;

      if (data.length === 0) return;

      const rankdata = data.find(
        (rankobject: Rank) => rankobject.queueType === queueType
      );
      const rank: Rank = new Rank(
        rankdata.leagueId,
        queueType,
        rankdata.tier,
        rankdata.rank,
        rankdata.leaguePoints,
        rankdata.wins,
        rankdata.losses
      );
      return rank;
    } catch (error: any) {
      console.error("Error:", error);
    }
  }

  public static async getRanks(
    summonerId: string,
    region: Regions,
    config: RiotApiConfig
  ): Promise<Rank | any> {
    let ranks: Rank[] = [];
    const rankTypes: QueueType[] = [QueueType.FLEX, QueueType.SOLOQUEUE];
   
    
  }
}

export default Rank;

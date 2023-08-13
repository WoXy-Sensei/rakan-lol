import axios from "axios";
import { QueueType, Regions } from "../Constants";
import { League } from "../Models/league";
import { RiotApiConfig } from "../RiotApiConfig";
class LeagueService {
  public static async getLeague(
    summonerId: string,
    region: Regions,
    queueType: QueueType
  ): Promise<League> {
    try {
      const api_key = RiotApiConfig.getApiKey();
      const url: string = `lol/league/v4/entries/by-summoner/${summonerId}`;
      const response = await axios.get(
        `https://${region}.api.riotgames.com/${url}?api_key=${api_key}`
      );
      const data = response.data;

      if (data.length === 0) return;

      const leaguedata = data.find(
        (leagueobject: League) => leagueobject.queueType === queueType
      );
      const league: League = new League(
        leaguedata.leagueId,
        queueType,
        leaguedata.tier,
        leaguedata.rank,
        leaguedata.leaguePoints,
        leaguedata.wins,
        leaguedata.losses
      );
      return league;
    } catch (error: any) {
      console.error("Error:", error);
    }
  }
}

export default LeagueService;

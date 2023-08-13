import axios from "axios";
import { Regions } from "../Constants";
import { CahmpionMastery } from "../Models";
import { RiotApiConfig } from "../RiotApiConfig";

class ChampionMasteryService{
    public static async getCahmpionMastery(
        summonerId: string,
        region: Regions,
      ): Promise<CahmpionMastery[]> {
        try {
          const api_key = RiotApiConfig.getApiKey()
          const url: string = `lol/champion-mastery/v4/champion-masteries/by-summoner/${summonerId}`;
          const response = await axios.get(
            `https://${region}.api.riotgames.com/${url}?api_key=${api_key}`
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
export default ChampionMasteryService
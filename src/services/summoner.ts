import axios from "axios";
import { Regions } from "../Constants";
import { Summoner } from "../Models";
import { RiotApiConfig } from "../RiotApiConfig";

class SummonerService {
  static async getSummoner(
    value: string,
    region: Regions,
    how: string = "",
  ): Promise<Summoner> {
    const api_key = RiotApiConfig.getApiKey();
    const url: string = `lol/summoner/v4/summoners${how}/${value}`;

    try {
      const response = await axios.get(
        `https://${region}.api.riotgames.com/${url}?api_key=${api_key}`
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
      );
      return summoner;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  static async getSummonerByName(summonerName: string,region: Regions,) : Promise<Summoner>{
     const summoner:Summoner = await this.getSummoner(summonerName,region,"/by-name")
     return summoner;
  }
  static async getSummonerById(summonerId: string,region: Regions,) : Promise<Summoner>{
    const summoner:Summoner = await this.getSummoner(summonerId,region)
    return summoner;
 }
}

export default SummonerService;

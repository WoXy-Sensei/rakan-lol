import Regions from "./Constants/regions.enum";
import RiotApiConfig from "./RiotApiConfig";
import Summoner from "./Entities/summoner";
import Champion from "./Entities/champion";


class RiotApi {
  Riot_config: RiotApiConfig;

  constructor(riot_config: RiotApiConfig) {
    this.Riot_config = riot_config;
  }

  async getChampionByKey(key:number) : Promise<Champion>{
    return Champion.getChampion("key",key);
  }

  async getChampionByName(name:string) : Promise<Champion>{
    return Champion.getChampion("name",name)
  }
  

  async getSummonerByName(summonerName: string, region: Regions): Promise<Summoner>{
    const summoner:Summoner = await Summoner.getSummoner(summonerName,region,"/by-name",this.Riot_config);
    return summoner
  }
  async getSummonerByAccountId(summonerAccountId: string, region: Regions): Promise<Summoner>{
    const summoner:Summoner = await Summoner.getSummoner(summonerAccountId,region,"/by-account",this.Riot_config);
    return summoner
  }
  async getSummonerById(summonerId: string, region: Regions): Promise<Summoner>{
    const summoner:Summoner = await Summoner.getSummoner(summonerId,region,"",this.Riot_config);
    return summoner
  }
}

export default RiotApi;

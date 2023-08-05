import RiotApi from "./Riot/RiotApi";
import RiotApiConfig from "./Riot/RiotApiConfig";
import Regions from "./Riot/Constants/regions.enum";
import QueueType from "./Riot/Constants/queueType.enum";

const config = new RiotApiConfig("RGAPI-6eccd4ca-0539-40ea-903b-99a8064ed593");

const api = new RiotApi(config);

const init = async () => {
  const summoner = await api.getSummonerByName("jason dead", Regions.TR);
  console.log(summoner);
  
  const rank = await summoner.getRank(QueueType.FLEX);

  const champ = await api.getChampionByKey(266);

  console.log(rank);
  
};

init();

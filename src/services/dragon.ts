import axios from "axios";
import Itier from "../interface/Itier";
import capitalizeFirstLetter from "../funcs/capitalizeFirstLetter";
class DragonService {
  private static dragon: string = "http://ddragon.leagueoflegends.com/cdn";
  private static communitydragon: string =
    "https://raw.communitydragon.org/latest/game/assets";

  public static async findChampionById(id: any) {
    return await this.getChampion("key", id);
  }
  public static async findChampionByName(name: string) {
    const newName:string = capitalizeFirstLetter(name);
    return await this.getChampion("name", newName);
  }

  public static async findIconById(iconId: number): Promise<string> {
    return await this.getDragonPath(`img/profileicon/${iconId}.png`);
  }

  public static async findChampionIconById(champion: string): Promise<string> {
    return await this.getDragonPath(`img/champion/${champion}.png`);
  }

  public static async findTierFrameByName(tier: string) {
    let tiers: Itier = {
      IRON: "01_iron",
      BRONZ: "02_bronz",
      SILVER: "03_silver",
      GOLD: "04_gold",
      PLATINUM: "05_platinum",
      EMERALD: "emerald",
      DIAMOND: "06_diamond",
      MASTER: "07_master",
      GRANDMASTER: "08_grandmaster",
      CHALLENGER: "09_challenger",
    };

    return await this.getCommunityDragonPath(
      `loadouts/regalia/crests/ranked/${tiers[tier]}/${tiers[tier]}_base.png`
    );
  }

  private static async getLatestVersion(): Promise<string> {
    try {
      const response = await axios.get(
        "https://ddragon.leagueoflegends.com/api/versions.json"
      );
      return response.data[0];
    } catch (error) {
      console.log("Error:", error);
    }
  }

  private static async getChampion(key: string, value: any) {
    const url = await this.getDragonPath("data/en_US/champion.json");
    const championsData = await axios.get(url);
    let champions = championsData["data"].data;
    for (const championName in champions) {
      if (champions[championName][key] == value) {
        return champions[championName];
      }
    }

    return undefined;
  }

  private static async getDragonPath(path: string): Promise<string> {
    const version = await DragonService.getLatestVersion();
    const fullPath = `${DragonService.dragon}/${version}/${path}`;
    return fullPath;
  }
  private static async getCommunityDragonPath(path: string): Promise<string> {
    const fullPath = `${DragonService.communitydragon}/${path}`;
    return fullPath;
  }
}

export default DragonService;

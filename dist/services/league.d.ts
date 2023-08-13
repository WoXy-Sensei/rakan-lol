import { QueueType, Regions } from "../Constants";
import { League } from "../Models/league";
declare class LeagueService {
    static getLeague(summonerId: string, region: Regions, queueType: QueueType): Promise<League>;
}
export default LeagueService;

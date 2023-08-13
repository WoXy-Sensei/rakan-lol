import {QueueType} from "../Constants/queueType.enum";
import Dragon from "../services/dragon";

class League {
  readonly leagueId: string;
  readonly queueType: QueueType  ;
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

  public async getTierFrame() {
    return await Dragon.findTierFrameByName(this.tier);
  }

}

export {League};

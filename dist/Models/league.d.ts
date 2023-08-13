import { QueueType } from "../Constants/queueType.enum";
declare class League {
    readonly leagueId: string;
    readonly queueType: QueueType;
    readonly tier: string;
    readonly rank: string;
    readonly leaguePoints: number;
    readonly wins: number;
    readonly losses: number;
    constructor(leagueId: string, _queueType: QueueType, tier: string, rank: string, leaguePoints: number, wins: number, losses: number);
    getTierFrame(): Promise<string>;
}
export { League };

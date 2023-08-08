declare class Dragon {
    private static dragon;
    private static communitydragon;
    static findChampion(key: string, value: any): Promise<any>;
    static findIconById(iconId: number): Promise<string>;
    static findChampionIconById(champion: string): Promise<string>;
    static findTierFrameByName(tier: string): Promise<string>;
    private static getLatestVersion;
    private static getChampion;
    private static getDragonPath;
    private static getCommunityDragonPath;
}
export default Dragon;

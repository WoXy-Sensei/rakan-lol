declare class Champion {
    readonly id: string;
    readonly key: number;
    readonly name: string;
    readonly title: string;
    readonly blurb: string;
    readonly tags: string[];
    readonly partype: string;
    constructor(id: string, key: number, name: string, title: string, blurb: string, tags: string[], partype: string);
    getIcon(): Promise<string>;
    static getChampion(key: string, value: any): Promise<Champion>;
}
export { Champion };

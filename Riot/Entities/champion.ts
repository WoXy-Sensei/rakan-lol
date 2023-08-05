import Dragon from "./dragon";

class Champion{
    readonly id:string;
    readonly key:number;
    readonly name:string;
    readonly title:string;
    readonly blurb:string;
    readonly tags: string[];
    readonly partype:string;
    readonly championIcon:string;


    constructor(id:string , key:number , name:string , title:string , blurb:string , tags:string[] , partype:string , championIcon:string ){
        this.id = id;
        this.key = key
        this.name = name
        this.title = title 
        this.blurb = blurb
        this.tags = tags
        this.partype = partype;
        this.championIcon = championIcon;
    }

    public static async getChampion(key:string , value:any){
        const champion = await Dragon.findChampion(key,value);
        const championIcon = await Dragon.findChampionIconById(champion.id)
        return new Champion(champion.id,champion.key,champion.name,champion.title,champion.blurb,champion.tags,champion.partype,championIcon);
    }
}
    
export default Champion;
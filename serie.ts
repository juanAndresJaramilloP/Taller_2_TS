export class Serie{

    id: number;
    name: string;
    channel: string;
    seasons: number;
    link: string;

    constructor(id:number, name:string, channel:string, seasons:number, link:string){
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons
        this.link = link;
    }

}
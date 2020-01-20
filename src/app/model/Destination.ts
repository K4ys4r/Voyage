export class Destination {
    public id: number;
    public region: string;
    public description: string;
    public images: string;

    constructor(id: number, region: string, description: string, images: string) {
        
        this.id = id;
        this.region = region;
        this.description = description;
        this.images = images;
    }
}
export class Destination {
    public continent: string;
    public pays: string;
    public region: string;
    public description: string;

    constructor(continent: string, pays: string, region: string, description: string) {
        this.continent = continent;
        this.pays = pays;
        this.region = region;
        this.description = description;
    }
}
import { Destination } from './Destination';
import { Client } from './Client';

export class Formule {
    public destination: Destination;
    public dateAller: Date;
    public dateRetour: Date;
    public voyageurs: number;
    public client: Client;

    constructor(destination: Destination, dateAller: Date, dateRetour: Date, voyageurs: number, client: Client){


        this.destination = destination;
        this.dateAller = dateAller;
        this.dateRetour = dateRetour;
        this.voyageurs = voyageurs;
        this.client = client;
        
    }
}


import { Destination } from './Destination';
import { Client } from './Client';

export class Formule {
    public id: number;
    public date_depart: Date;
    public date_retour: Date;
    public prix_ht: number;
    public nb_places: number;
    public destination: Destination;

    constructor(id: number, date_depart: Date, date_retour: Date, prix_ht: number, nb_places: number, destination: Destination){

        this.id = id;
        this.date_depart = date_depart;
        this.date_retour = date_retour;
        this.prix_ht = prix_ht;
        this.nb_places = nb_places;
        this.destination = destination;
        
    }
}


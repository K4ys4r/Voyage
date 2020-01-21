import { Formule } from './Formule';

export class Client {
    public id: number;
    public civilite: string;
    public nom: string;
    public prenom: string;
    public date_naissance: Date;
    public adresse: string;
    public telephone: number;
    public email: string;
    public password:string;
    public numCB: number;
    public reservations;
    public voyageurs;

    constructor(civilite: string, nom: string, prenom: string, date_naissance: Date, address: string, phone: number, email: string, password: string, numCB: number, id: number) {
        
        this.id = id; 
        this.civilite = civilite;
        this.nom = nom;
        this.prenom = prenom;
        this.date_naissance = date_naissance;
        this.adresse = address;
        this.telephone = phone;
        this.email = email;
        this.password = password;
        this.numCB = numCB;
        this.reservations = [];
        this.voyageurs = [];
    }
}


export class Client {
    public id: number;
    public civilite: string;
    public nom: string;
    public prenom: string;
    public date_naissance: Date;
    public adresse: string;
    public telephone: number;
    public email: string;
    public numCB: number;

    constructor(civilite: string, nom: string, prenom: string, date_naissance: Date, address: string, phone: number, email: string, password: string, numCB: number, id: number) {
        
        this.civilite = civilite;
        this.nom = nom;
        this.prenom = prenom;
        this.date_naissance = date_naissance;
        this.adresse = address;
        this.telephone = phone;
        this.email = email;
        this.numCB = numCB;
        this.id = id; 
    }
}


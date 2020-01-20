export class Client {
    public civilite: string;
    public nom: string;
    public prenom: string;
    public date_naissance: Date;
    public address: string;
    public phone: number;
    public email: string;
    public password: string;
    public numCB: number;
    public numDossier: number;

    constructor(civilite: string, nom: string, prenom: string, date_naissance: Date, address: string, phone: number, email: string, password: string, numCB: number, numDossier: number) {
        
        this.civilite = civilite;
        this.nom = nom;
        this.prenom = prenom;
        this.date_naissance = date_naissance;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.numCB = numCB;
        this.numDossier = numDossier; 
    }
}


export class Carte {
    public titulaire: string;
    public numero: number;
    public cryptogramme: number;
    public date_expiration: Date;
    public validite: boolean; 

    constructor(titulaire: string, numero: number, cryptogramme: number, date_expiration: Date, validite: boolean){

        this.titulaire = titulaire;
        this.numero = numero;
        this.cryptogramme = cryptogramme;
        this.date_expiration = date_expiration;
        this.validite = validite;
    }

}

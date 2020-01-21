export class Carte {
    public titulaire: string;
    public numero: number;
    public cryptogramme: number;
    public dateExpiration: Date;
    public validite: boolean; 

    constructor(titulaire: string, numero: number, cryptogramme: number, dateExpiration: Date, validite: boolean){

        this.titulaire = titulaire;
        this.numero = numero;
        this.cryptogramme = cryptogramme;
        this.dateExpiration = dateExpiration;
        this.validite = validite;
    }

}
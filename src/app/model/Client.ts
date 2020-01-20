export class Client {
    public sexe: string;
    public name: string;
    public firstName: string;
    public birthDate: Date;
    public address: string;
    public phone: number;
    public email: string;
    public numCB: number;
    public numDossier: number;

    constructor(sexe: string, name: string, firstName: string, birthDate: Date, address: string, phone: number, email: string, numCB: number, numDossier: number) {
        this.sexe = sexe;
        this.name = name;
        this.firstName = firstName;
        this.birthDate = birthDate;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.numCB = numCB;
        this.numDossier = numDossier; 
    }
}


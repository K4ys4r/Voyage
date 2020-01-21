import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Carte } from '../model/Carte';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {

  public cartePaiement: Carte;
  constructor() { }


  clientCarte: FormGroup;

  ngOnInit() {
    this.clientCarte = new FormGroup({
      numero: new FormControl('', [Validators.required]),
      titulaire: new FormControl('', [Validators.required]),
      date_expiration: new FormControl('', [Validators.required]),
      cryptogramme: new FormControl('', [Validators.required]),
    })
  }

  onSubmit(){
    this.cartePaiement = this.clientCarte.value;
    this.verifierCarte();
  }


  verifierCarte(){
    
    const date = this.cartePaiement.date_expiration

    }
}

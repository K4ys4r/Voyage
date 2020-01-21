import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Carte } from '../model/Carte';
import * as moment from 'moment'
import { Router } from '@angular/router';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {

  public cartePaiement: Carte;
  constructor(private router: Router) { }


  clientCarte: FormGroup;
  public paiementStatus = false;


  ngOnInit() {
    this.clientCarte = new FormGroup({
      numero: new FormControl('', [Validators.required]),
      titulaire: new FormControl('', [Validators.required]),
      date_expiration: new FormControl('', [Validators.required]),
      cryptogramme: new FormControl('', [Validators.required]),
    })
  }

  onSubmit() {
    this.cartePaiement = this.clientCarte.value;
    this.verifierCarte();
    this.paiementStatus = true;
  }


  verifierCarte() {

    var dateCarte = moment(this.cartePaiement.date_expiration)
    var aujourdhui = moment();
    var duration = moment.duration(dateCarte.diff(aujourdhui));
    if (duration.milliseconds() < 0) {
      alert('Carte non valide');
      this.clientCarte.controls.date_expiration.setValue('');
    };

    if(this.cartePaiement.cryptogramme.toString().length != 3){
      alert('Cryptogramme incorrect');
      this.clientCarte.controls.cryptogramme.setValue('');
    }

    if(this.cartePaiement.numero.toString().length != 16){
      alert('Numero de carte incorrect');
      this.clientCarte.controls.numero.setValue('');
    }
  }

  linkFormule(){
    this.router.navigate(['/formulelist'])
  }
}

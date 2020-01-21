import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormuleService } from '../shared/formule.service';
import { Formule } from '../model/Formule';
import { ClientService } from '../shared/client.service';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  public formule: Formule;
  voyageurs: FormGroup;


  constructor(private activatedRoute: ActivatedRoute, private formuleService: FormuleService, private client: ClientService,private router: Router) { }



  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        this.formuleService.findFormule(params.get('id')).subscribe(
          formule => {
            this.formule = formule;
          })
      })

    this.voyageurs = new FormGroup({
      voyageur: new FormArray([
        new FormGroup({
          nom: new FormControl('', [Validators.required,]),
          prenom: new FormControl('', [Validators.required]),
          date_naissance: new FormControl('', [Validators.required]),
          civilite: new FormControl('',[Validators.required]),
          email : new FormControl('',[Validators.required])
        })
      ])
    })
  }

  addVoyageur() {
    this.voyageur.push(
      new FormGroup({
        nom: new FormControl('', [Validators.required,]),
        prenom: new FormControl('', [Validators.required]),
        date_naissance: new FormControl('', [Validators.required]),
        civilite: new FormControl('',[Validators.required]),
        email : new FormControl('',[Validators.required])
    })
    )
  }

  getPay(){
    this.router.navigate(['/paiement'])
  }

  removeVoyageur(index){
    this.voyageur.removeAt(index)
  }
  get voyageur():FormArray {
    return this.voyageurs.get('voyageur') as FormArray
  }
}

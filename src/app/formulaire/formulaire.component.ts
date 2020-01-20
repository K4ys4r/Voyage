import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormuleService } from '../shared/formule.service';
import { Formule } from '../model/Formule';
import { ClientService } from '../shared/client.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  public formule: Formule;
  voyageur:FormGroup;

  


  constructor(private activatedRoute: ActivatedRoute, private formuleService: FormuleService, private client: ClientService) { }



  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        this.formuleService.findFormule(params.get('id')).subscribe(
          formule => {
            this.formule = formule;
          })
      })

      this.voyageur = new FormGroup({
        firstname: new FormControl('',[Validators.required,]),
        lastname: new FormControl('',[Validators.required]),
        email: new FormControl('',[Validators.required]),
      })
  }
}

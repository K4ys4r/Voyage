import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formule } from '../model/Formule';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormuleService {

  constructor(private httpClient: HttpClient) { }

  getFormules(){
    return this.httpClient.get('api/formules')
  }

  findFormule(id): Observable<Formule>{
    return this.httpClient.get<Formule>('api/formules/'+ id)
  }
}

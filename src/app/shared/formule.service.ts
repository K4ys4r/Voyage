import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formule } from '../model/Formule';
import { HttpClient } from '@angular/common/http';
import { Client } from '../model/Client';

@Injectable({
  providedIn: 'root'
})
export class FormuleService {
  private URL = 'api/formules';
  constructor(private httpClient: HttpClient) { }

  getFormules() {
    return this.httpClient.get(this.URL)
  }

  findFormule(id): Observable<Formule> {
    return this.httpClient.get<Formule>(this.URL + '/' + id)
  }

  findVoyageurId(id):Observable<Client> {
    return this.httpClient.get<Client>(this.URL + '/'+ id);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../model/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private URL = 'api/clients'
  constructor(private httpClient: HttpClient) { }
  
  updateUser(client) {
    return this.httpClient.put(this.URL, client)
  }
  
  createClient(client) {
    return this.httpClient.post(this.URL, client)
  }

  findClient(id):Observable<Client> {
    return this.httpClient.get<Client>(this.URL + '/'+ id);
  }

  getClients(){
    return this.httpClient.get(this.URL);
  }
}

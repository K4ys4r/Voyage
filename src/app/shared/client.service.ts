import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private URL = 'api/voyageurs'
  constructor(private httpClient: HttpClient) { }
  
  updateUser(client) {
    return this.httpClient.put(this.URL, client)
  }
  
  createClient(client) {
    return this.httpClient.post(this.URL, client)
  }
}

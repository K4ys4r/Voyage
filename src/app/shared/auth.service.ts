import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loged = false;
  constructor(private router: Router) { }

  isLoged(){
    return this.loged;
  }
  LogIn() {
    this.loged = true;
    return this.loged
  }

  LogOut() {
    this.loged = false;
    this.router.navigate(['/formulelist'])
    return this.loged;
  }


}

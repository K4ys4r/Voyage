import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private loginService: AuthService, private router: Router) { }

  canActivate(){
    if (!this.loginService.isLoged()) {
      this.router.navigate['/clientlogin']
    }
    return this.loginService.isLoged();
  }
}

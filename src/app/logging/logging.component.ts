import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent implements OnInit {

  public loginStatus;
  clientLogin:FormGroup;
  constructor(private loginService: AuthService) { }

  ngOnInit() {
    this.loginStatus = this.loginService.isLoged();
    this.clientLogin = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      rememberMe: new FormControl()
    })
  }

  LogIn(){
    // TODO: Verification si le client existe dans le BDD 
    this.loginStatus = this.loginService.LogIn()
  }

  LogOut(){
    this.loginStatus = this.loginService.LogOut()
  }

}

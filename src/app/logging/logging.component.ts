import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent implements OnInit {

  public loginStatus;
  public email;
  public password;
  public rememberMe;
  constructor(private loginService: AuthService) { }

  ngOnInit() {
    this.loginStatus = this.loginService.isLoged();
    
  }

  LogIn(){
    this.loginStatus = this.loginService.LogIn()
  }

  LogOut(){
    this.loginStatus = this.loginService.LogOut()
  }



}

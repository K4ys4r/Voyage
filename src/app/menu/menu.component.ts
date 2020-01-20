import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public title = 'BoVoyages';
  public isLogin;

  constructor(private loginService: AuthService) { }

  ngOnInit() {
    this.isLogin =false;

  }

LogIn(){
  this.isLogin = this.loginService.LogIn();
}

LogOut(){
  this.isLogin = this.loginService.LogOut();
}

}

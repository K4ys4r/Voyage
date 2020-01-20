import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public title = 'BoVoyages';
  public isLogin;

  constructor() { }

  ngOnInit() {
    this.isLogin =false;

  }

LogIn(){
  this.isLogin = true;
}

LogOut(){
  this.isLogin = false;
}

}

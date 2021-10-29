import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  islogin=false;
  username:string="";
  password:string="";
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('user')){
      this.islogin=true;
    }
  }
  Login(){
    if(this.username=="Vietuc"&&this.password=="vietuc") {
      this.islogin=true;
      localStorage.setItem(`user`,this.username);
    }
  }
  
}

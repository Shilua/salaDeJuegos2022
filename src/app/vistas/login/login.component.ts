import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Suma } from 'src/app/classes/suma';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user:string = '';
  public password:string = '';
  public userCreds: User;
  public usuarioString:string = '';
  public suma:Suma;



  constructor(private router: Router) {
    this.userCreds = new User();
    this.suma = new Suma();
  }


  

  login(){
    
    if (this.user == 'admin' && this.password == 'admin') {
      //this.userCreds.user = this.user;
      //this.userCreds.password = this.password;
      this.router.navigate(['/bienvenido']);

      this.usuarioString = JSON.stringify(this.userCreds);
      localStorage.setItem('usuario', this.usuarioString);
    } else {
      this.router.navigate(['/error']);
    }
  }

  ngOnInit(): void {
  }

}

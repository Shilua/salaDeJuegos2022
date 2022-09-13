import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Suma } from 'src/app/classes/suma';
import { User } from 'src/app/classes/user';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  public user:string = '';
  public password:string = '';
  public userCreds: User;
  public usuarioString:string = '';
  public suma:Suma;



  constructor(
    private router: Router,
    private toastService:ToastService
    ) {
    this.userCreds = new User();
    this.suma = new Suma();
  }


  

  login(){
    
    if (this.user == 'admin@admin.com' && this.password == 'admin') {
      //this.userCreds.user = this.user;
      //this.userCreds.password = this.password;
      this.router.navigate(['/bienvenido']);

      this.usuarioString = JSON.stringify(this.userCreds);
      localStorage.setItem('usuario', this.usuarioString);
    } else {
      this.toastService.show('el usuario no es valido', {classname : 'bg-danger text-light', delay:3000})
      //this.router.navigate(['/error']);
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.toastService.clear();
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Suma } from 'src/app/classes/suma';
import { User } from 'src/app/classes/user';
import { AuthLogService } from 'src/app/services/auth-log.service';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  public user: User;
  public usuarioString:string = '';

  constructor(
    private router: Router,
    private toastService:ToastService,
    private authServ:AuthService,
    private logServ:AuthLogService
    ) {
    this.user = new User();
  }


  completeData(){
    this.user.email = 'admin@admin.com';
    this.user.password = 'Administrador1';
  }

  login(){
    console.log(this.user)
    this.authServ.onLogin(this.user).then(
      response => {
        let fecha = new Date();
        if(response?.user != null){ 
          this.logServ.createElement({
            usuario:this.user.email,
            fecha: fecha
          });
          localStorage.setItem('user',this.user.email);
          this.router.navigate(['/bienvenido']);
        }else{
          this.toastService.show(
            'el usuario no es valido o la contraseña es incorrecta', 
            {classname : 'bg-danger text-light', delay:3000}
          )
        }
      }
    ).catch(
      err => {
        this.toastService.show(
          'el usuario no es valido', 
          {classname : 'bg-danger text-light', delay:3000}
        )
      }
    )
  }

  register(){
    this.router.navigate(['/registro'])
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.toastService.clear();
  }

}

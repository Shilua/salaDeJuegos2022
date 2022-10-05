import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { AuthLogService } from 'src/app/services/auth-log.service';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  
  user:User = new User();
  response:any;
  constructor(
    private router:Router,
    private authServ:AuthService,
    private logServ: AuthLogService,
    public toastService: ToastService
    ) { }
  
  login(){
    this.router.navigate(['']);
  }

  register(){
    this.authServ.onRegister(this.user).then(
      response => {
        this.response = response
        let fecha = new Date();
        console.log(this.response);
        if(this.response?.user != null){ 
          this.logServ.createElement({
            usuario:this.user.email,
            fecha: fecha
          });
          localStorage.setItem('user',this.user.email);
          this.router.navigate(['/bienvenido']);
        }
        this.toastService.show(
          'Ya existe una cuenta con ese correo electronico', 
          { classname: 'bg-danger text-light', delay: 5000 }
        );
        
      }
    ).catch(
      err => {
        console.log(err);
      }
    )
    
  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.toastService.clear();
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public userEmail:string|null
  constructor(private router:Router) {
    this.userEmail = localStorage.getItem('user');
   }

  bienvenido(){
    this.router.navigate(["/bienvenido"])
  }

  sobreMi(){
    this.router.navigate(["/bienvenido/sobre-mi"])
  }

  logOut(){
    localStorage.removeItem('user')
    this.router.navigate(['/'])
  }
  
  ngOnInit(): void {
  }

}

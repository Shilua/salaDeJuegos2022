import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router:Router) { }

  navigate(link:string){
    this.router.navigate(['bienvenido/'+link]);
  }

  ngOnInit(): void {
  }

}

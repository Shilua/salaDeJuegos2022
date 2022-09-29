import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit, AfterViewChecked {
  img:string = '';
  constructor(private githubServ:GithubService) {
    
   }

  ngOnInit(): void {
  
  }

  ngAfterViewChecked(): void {
    this.img = this.githubServ.img;
  }

}

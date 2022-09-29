import { Injectable } from '@angular/core';
import { async } from '@firebase/util';
import { Octokit } from 'octokit';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  octo:Octokit = new Octokit({
    auth: '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'
  });
  img:string = '';
  constructor() { 
    this.getData();
  }

  getData(){
    this.octo.request('GET /users/{username}', {
      username: 'Shilua'
    }).then(
      response => {
        this.img = response.data.avatar_url;
        console.log(this.img);
      }
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//Add params
import { ActivatedRoute, Params } from '@angular/router';
import { GithubService } from '../shared/github.service';
import {  FormGroup, 
          FormControl, 
          Validators, 
          FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  selected_username: string;
  userLogin: string;
  userAvatar: string = 'http://placehold.it/350x150';

  constructor(private activatedRoute: ActivatedRoute, private github: GithubService ) { 
    this.activatedRoute.params.subscribe((params: Params) => {
        let selected_username = params['username'];
        
        this.github.getUserProfile( selected_username )
        .subscribe(userDetails => {
            console.log('User details response');
            console.log(userDetails);
            this.userLogin = userDetails['login'];
            this.userAvatar = userDetails['avatar_url'];
            
          });
      });
  }

  searchForUser(username: string) {

    this.github.getUserProfile(username)
          .subscribe(userDetails => {
            console.log('Response');
            console.log(userDetails);
            
          });
  }

  onSubmit()
  {
    
  }


  ngOnInit() {
    
    
  }

}

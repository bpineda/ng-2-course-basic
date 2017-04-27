import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GithubService } from '../shared/github.service';
import {  FormGroup, 
          FormControl, 
          Validators, 
          FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {

  form: FormGroup;

  userName = new FormControl("", [ Validators.required ]);
  users: any = [];

  constructor(private router: Router, private github: GithubService, form_builder: FormBuilder) { 
    console.log( this.github.getUserName() );
    this.form = form_builder.group({
      "userName": this.userName
    });
  }

  searchForUser(username: string) {
    
    this.github.searchUsers(username)
          .subscribe(userDetails => {
            console.log('Response');
            console.log(userDetails);
            this.users = userDetails.items;
          });
  }

  onSubmit()
  {
    this.searchForUser( this.userName.value );
  }

  onClickShowDetails( selected_username: string )
  {
    alert(selected_username);
    this.github.setUserName( selected_username );
    this.router.navigate(['/github/user', selected_username]);
  }

  ngOnInit() {
  }

}


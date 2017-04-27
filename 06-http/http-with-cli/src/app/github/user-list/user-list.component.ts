import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor( form_builder: FormBuilder) { 
    
    this.form = form_builder.group({
      "userName": this.userName
    });
  }
  
  ngOnInit() {
  }

}


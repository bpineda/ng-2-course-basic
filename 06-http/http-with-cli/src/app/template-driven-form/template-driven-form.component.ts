import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  fullName: string;
  email: string;
  password: string;

  constructor() { }

  onSubmitTemplateBased()
  {
    console.log('Submitted form');
    console.log(this);
    console.log(this['email']);
  }

  clearForm()
  {
    this['fullName']= '';
    this['email']= '';
    this['password']= '';
  }

  ngOnInit() {
  }

}

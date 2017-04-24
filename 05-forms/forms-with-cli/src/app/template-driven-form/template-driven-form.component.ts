import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmitTemplateBased()
  {
    console.log(this);
    console.log(this['email']);
  }

  onClickClear()
  {
    this['email'] = '';
    this['fullName'] = '';
    this['password'] = '';
  }

}

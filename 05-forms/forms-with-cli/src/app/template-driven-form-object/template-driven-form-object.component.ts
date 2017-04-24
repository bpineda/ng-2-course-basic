import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form-object',
  templateUrl: './template-driven-form-object.component.html',
  styleUrls: ['./template-driven-form-object.component.css']
})
export class TemplateDrivenFormObjectComponent implements OnInit {

  user: Object= { fullName: 'Bernardo', email:'_@bernardopineda.mx', password: '12345' };

  constructor() { }

  ngOnInit() {
  }

  onSubmitTemplateBased()
  {
    console.log(this);
    console.log(this.user);
  }

  onClickClear()
  {
    this['email'] = '';
    this['fullName'] = '';
    this['password'] = '';
  }

}

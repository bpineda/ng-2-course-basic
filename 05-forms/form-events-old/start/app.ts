/// <reference path="typings/angular2/angular2.d.ts" />

import {
  Component,
  View,
  NgIf,
  bootstrap,
} from "angular2/angular2";

import {FORM_DIRECTIVES} from 'angular2/angular2';
import {FormBuilder, Validators, ControlGroup} from 'angular2/angular2';

@Component({
  selector: 'forms-events',
  appInjector: [
        FormBuilder
      ]
})
@View({
  directives: [FORM_DIRECTIVES],
  template: `
<div>
    <h5>Information Request</h5>
    <form [control-group]="loginForm">
          Login <input control="login">
   
          <div control-group="passwordRetry">
            Password <input type="password" control="password">
            Confirm password <input type="password" control="passwordConfirmation">
          </div>
        </form>
  </div>
`
})
class FormsIntro 
{

  loginForm: ControlGroup;

  constructor(builder: FormBuilder) {
        this.loginForm = builder.group({
          login: ["", Validators.required],
   
          passwordRetry: builder.group({
            password: ["", Validators.required],
            passwordConfirmation: ["", Validators.required]
          })
        });
      }

  sendData(value) 
  {
    console.log('Objec values: ', value);
  }

}

bootstrap(FormsIntro);

var loginForm = builder.group({
       login: ["", Validators.required],
   
       passwordRetry: builder.group({
         password: ["", Validators.required],
         passwordConfirmation: ["", Validators.required]
       })
     });

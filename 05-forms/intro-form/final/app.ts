/// <reference path="typings/angular2/angular2.d.ts" />

import {
  Component,
  View,
  NgIf,
  bootstrap,
} from "angular2/angular2";

import {FORM_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'forms-intro'
})
@View({
  directives: [FORM_DIRECTIVES],
  template: `
<div>
    <h5>Information Request</h5>
    <form #form_data="form" (submit)="sendData(form_data.value)">

      <div class="form-group">
        <label>Full Name</label>
        <input type="text" ng-control="name">
        <label>Email</label>
        <input type="text" ng-control="email">
      </div>

      <button type="submit" class="button success large expanded">Submit</button>
    </form>
  </div>
`
})
class FormsIntro 
{

  sendData(value) 
  {
    console.log('Objec values: ', value);
  }

}

bootstrap(FormsIntro);

/// <reference path="typings/angular2/angular2.d.ts" />

import {
  Component,
  View,
  NgSwitch,
  NgSwitchWhen, 
  NgSwitchDefault,
  NgClass,
  bootstrap,
} from "angular2/angular2";

@Component({
  selector: 'if-example'
})
@View({
  directives: [NgSwitch, NgSwitchWhen, NgSwitchDefault],
  template: `
<div class="container" [ng-switch]="type">
    <h5 *ng-switch-when="'A'">Curso A</h5>
    <h5 *ng-switch-when="'B'">Diplomado B</h5>
    <h5 *ng-switch-default>Otro tipo de capacitación</h5>
</div>

`
})
class ComponentExample {
  available: boolean;
  type: string;

  constructor() 
  {
    this.available = true;
    this.type = 'bla';
  }
}

bootstrap(ComponentExample);

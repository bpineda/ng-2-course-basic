/// <reference path="typings/angular2/angular2.d.ts" />

import {
  Component,
  View,
  NgIf,
  bootstrap,
} from "angular2/angular2";

@Component({
  selector: 'if-example'
})
@View({
  directives: [NgIf],
  template: `
<h5 *ng-if="available">Disponible</h5>
<h5 *ng-if="!available">No Disponible</h5>
`
})
class ComponentExample {
  available: boolean;

  constructor() 
  {
    this.available = true;
  }
}

bootstrap(ComponentExample);

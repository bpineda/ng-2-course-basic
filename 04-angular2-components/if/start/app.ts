/// <reference path="typings/angular2/angular2.d.ts" />

import {
  Component,
  View,
  bootstrap,
} from "angular2/angular2";

@Component({
  selector: 'if-example'
})
@View({
  template: `
<h5>Disponibilidad</h5>
`
})
class ComponentExample {
  
}

bootstrap(ComponentExample);

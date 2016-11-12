/// <reference path="typings/angular2/angular2.d.ts" />

import {
  Component,
  View,
  bootstrap,
} from "angular2/angular2";

@Component({
  selector: 'array-example'
})
@View({
  template: `<b>Replace with a select element</b>`
})
class ArrayExample {
}

bootstrap(ArrayExample);

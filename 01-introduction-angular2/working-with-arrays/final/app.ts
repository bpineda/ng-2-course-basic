/// <reference path="typings/angular2/angular2.d.ts" />

import {
  Component,
  View,
  NgFor,
  bootstrap,
} from "angular2/angular2";

@Component({
  selector: 'array-example'
})
@View({
  directives: [NgFor],
  template: `
<select>
  <option *ng-for="#time_frame of time_frames">{{time_frame}} month(s)</option>
</select>
`
})
class ArrayExample {
  time_frames: Array<string>;

  constructor() 
  {
    this.time_frames = ['One', 'Two', 'Three', 'Four'];
  }
}

bootstrap(ArrayExample);

/// <reference path="typings/angular2/angular2.d.ts" />

import {
  Component,
  View,
  NgIf,
  bootstrap,
} from "angular2/angular2";

@Component({
  selector: 'forms-intro'
})
@View({
  template: `
<div>
    <h5>Information Request</h5>
    <form>

      <div class="form-group">
        <label>Full Name</label>
        <input type="text">
        <label>Email</label>
        <input type="text">
      </div>

      <button type="submit" class="button success large expanded">Submit</button>
    </form>
  </div>
`
})
class FormsIntro {}

bootstrap(FormsIntro);

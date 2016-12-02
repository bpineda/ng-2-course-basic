import { Component } from '@angular/core';

import { Hero }    from './hero';

@Component({
  selector: 'my-app',
  template: `<h1>My First Angular 2 App</h1>
    <input type="text" 
      required 
      [(ngModel)]="model.name"
      (ngModelChange)="model.name = $event"
      #spy
      />
    {{model.name}}
    {{spy.className}}
  `
})
export class AppComponent {

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  model = new Hero(18, '', this.powers[0], 'Chuck Overstreet');
  submitted = false;
  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
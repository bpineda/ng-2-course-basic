import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h3>  {{title}} </h3>
  `,
})
export class AppComponent {
  title:string = 'Pulp Fiction Characters';
}

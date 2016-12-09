import { Component } from '@angular/core';
import { PeopleService } from './people.service';

@Component({
  selector: 'my-app',
  template: `
  <h3>  {{title}} </h3>
  <people-list></people-list>
  `,
  providers: [PeopleService]
})
export class AppComponent {
  title:string = 'Pulp Fiction Characters';
}

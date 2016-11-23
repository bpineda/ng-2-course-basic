/// <reference path="typings/angular2/angular2.d.ts" />

import {
  Component,
  View,
  bootstrap,
} from "angular2/angular2";

@Component({
  selector: 'person'
})
@View({
  template: `<article>Person</article>`
})

class Person 
{
 
  first_name: string; 
  last_name: string; 
  age: number;

  greet()
  {
    console.log("Hello ", this.first_name);
  }

}

// declare a variable of type Person
var p: Person;
// instantiate a new Person instance
p = new Person();
// give it a first_name
p.first_name = 'Bernardo'; // call the greet method
p.greet();



bootstrap(Person);

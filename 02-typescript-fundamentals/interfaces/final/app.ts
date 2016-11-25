/// <reference path="typings/angular2/angular2.d.ts" />

import {
  Component,
  View,
  bootstrap,
} from "angular2/angular2";

interface Animal 
{

  first_name: string;

  greet(callback: () => void) : void;

}

@Component({
  selector: 'person'
})
@View({
  template: `<article>Person</article>`
})

class Person implements Animal
{
 
  first_name: string; 
  last_name: string; 
  age: number;

  constructor()
  {
    
    console.log('I am a person');
  }

  greet()
  {
    console.log("Hello ", this.first_name);
  }

}

class Dog implements Animal
{

  first_name: string;

  constructor(name:string)
  {
    console.log('I am a dog');
  }

  greet()
  {
    console.log('Wuf');
  }
}

// declare a variable of type Person
var p: Person;
// instantiate a new Person instance
p = new Person();
// give it a first_name
p.first_name = 'Bernardo'; // call the greet method
p.greet();
//p.walk();

var d: Dog;
d = new Dog('Firulais');
//d.walk();



bootstrap(Person);

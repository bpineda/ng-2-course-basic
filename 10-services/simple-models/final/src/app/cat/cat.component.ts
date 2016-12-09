import {Component} from '@angular/core';
//import { Model } from '../model';
import { Model } from '../model';

@Component({
  template: `<h5>Cat Component</h5>{{model.param1}}`,
})
export class CatComponent {
  constructor(private model: Model)
  { 
    //model.param1 = '123'; 
  }
}

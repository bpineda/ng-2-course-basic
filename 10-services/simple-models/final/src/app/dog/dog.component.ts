import {Component} from '@angular/core';
import { Model } from '../model';

@Component({
  
  template: 
  `<h5>Dog Component</h5>{{model.param1}}
    <button (click)="changeValue()">CHANGE</button>
  `  
})
export class DogComponent {
  constructor(private model: Model){
    //model.param1 = '456';
  }

  changeValue()
  {
    this.model.param1 = '999';
  }

}

import {Component} from '@angular/core';
import { Model } from './model';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private model: Model){
    model.param1 = 'parametro';
  }
}

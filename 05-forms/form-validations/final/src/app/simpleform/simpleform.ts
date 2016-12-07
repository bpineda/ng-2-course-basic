import { Component } from '@angular/core';

@Component({
  selector: 'simple-form',
  templateUrl : 'simpleform.html'
})
export class SimpleFormComponent {
  submitForm(form: any): void{
    console.log('Submitted');
    console.log('Form Data: ');
    console.log(form);
  }
}

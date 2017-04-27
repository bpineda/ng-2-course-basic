import { Component, OnInit } from '@angular/core';
import {  FormGroup, 
          FormControl, 
          Validators, 
          FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent implements OnInit {

  form: FormGroup;

  fullName = new FormControl("", [ Validators.required ]);
  email = new FormControl("", Validators.required);
  password = new FormControl("", Validators.required);

  constructor(form_builder: FormBuilder) 
  {
    this.form = form_builder.group({
      "fullName": this.fullName,
      "email": this.email,
      "password" : this.password
    });
  }

  onSubmit()
  {
    console.log(this.form);
    console.log( 'Name' , this.fullName.value );
    if( this.form.valid )
    {
      //API call
      alert('API Call emulated');
    }

  }

  onClickClear()
  {
    console.log('Resetting');
    this.form.reset();
  }

  onClickPatch()
  {
    console.log('Patching');
    this.form.patchValue({ fullName: 'Zaira' });
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

function validateEmail(c: FormControl) {
   var EMAIL_REGEXP:any = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
;

  return EMAIL_REGEXP.test(c.value) ? null : {
    validateEmail: {
      valid: false
    }
  };
}

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent implements OnInit {

  form: FormGroup;
    
  fullName = new FormControl("", Validators.required);
  email = new FormControl("", [ Validators.required, validateEmail ] );
  password = new FormControl("", Validators.required);
  


  constructor(form_builder: FormBuilder)
  { 
    this.form = form_builder.group({
            "fullName": this.fullName,
            "email": this.email,
            "password": this.password
        });

        this.form.valueChanges
    .map((value) => {
            value.fullName = value.fullName.toUpperCase();
            return value;
        })
    .filter((value) => this.form.valid)
    .subscribe(data => {
      console.log('Subscribed');
      console.log('Form changes', data)
      console.log('Valid: ' , this.form.valid);
    });

    this.form.get('fullName').valueChanges
      .do(changes => {
        console.log('fullName has changed:', changes)
        })
      .subscribe();
    
    
  }

  ngOnInit() {
  }

  onSubmit()
  {
    console.log( 'Name:', this.fullName.value );
    console.log("model-based form submitted");
    console.log(this.form);
    console.log(this.form['controls']['fullName']['value']);
    console.log(this.form['controls']['password']['value']);
    if( this.form.valid )
    {
      alert('Valid Form');
      //API Call
    }
  }

  onClickPatch()
  {
    this.form.patchValue({fullName: 'Benjamín'});
  }

  onClickSetValue()
  {
    this.form.setValue({fullName: 'Gail', password:'9876543210'});
  }

  onClickReset()
  {
    this.form.reset();
  }

}

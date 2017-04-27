import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form-object',
  templateUrl: './template-driven-form-object.component.html',
  styleUrls: ['./template-driven-form-object.component.css']
})
export class TemplateDrivenFormObjectComponent implements OnInit {

  user: any = {  fullName: 'Claudio', 
                    email: 'bernardo@correo.com',
                    password: '1234567' 
                  };

  constructor() {
    
   }

   onSubmitTemplateBased()
   {
     console.log( this.user );
   }

  ngOnInit() {
  }

}

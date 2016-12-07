import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { SimpleFormComponent } from './simpleform/simpleform';
import { ComplexFormComponent } from './complexform/complexform';
import { FormValidationComponent } from './formvalidation/formvalidation';

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    ComplexFormComponent,
    FormValidationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

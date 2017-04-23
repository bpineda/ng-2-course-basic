import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { TemplateDrivenFormObjectComponent } from './template-driven-form-object/template-driven-form-object.component';
import { ModelDrivenFormComponent } from './model-driven-form/model-driven-form.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    TemplateDrivenFormObjectComponent,
    ModelDrivenFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

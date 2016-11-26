import { NgModule } from '@angular/core'
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}

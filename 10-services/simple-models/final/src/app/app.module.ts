import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

import { CatComponent } from './cat/cat.component';
import { DogComponent } from './dog/dog.component';
import { Model } from './model';


import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CatComponent,
    DogComponent,
  ],
  providers: [ Model ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rootRouterConfig)
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}

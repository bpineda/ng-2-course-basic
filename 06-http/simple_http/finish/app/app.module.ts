import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routes';

import { AppComponent }  from './app.component';
import { PostsComponent } from './posts/posts.component';
import { GithubComponent } from './github/github.component';

@NgModule({
  imports: [ BrowserModule, 
  routing, 
  FormsModule, HttpModule],
  declarations: [ AppComponent, 
  PostsComponent,
  GithubComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

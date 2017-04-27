import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GithubService } from './github/shared/github.service';
import { AppRoutingModule } from './app-routing.module';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { TemplateDrivenFormObjectComponent } from './template-driven-form-object/template-driven-form-object.component';
import { ModelDrivenFormComponent } from './model-driven-form/model-driven-form.component';
import { HomeComponent } from './home/home.component';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { UserProfileComponent } from './github/user-profile/user-profile.component';
import { UserListComponent } from './github/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    TemplateDrivenFormObjectComponent,
    ModelDrivenFormComponent,
    HomeComponent,
    UserProfileComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { TemplateDrivenFormObjectComponent } from './template-driven-form-object/template-driven-form-object.component';
import { ModelDrivenFormComponent } from './model-driven-form/model-driven-form.component';


const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'template-driven-form',
    component: TemplateDrivenFormComponent
  },
  {
    path: 'template-driven-form-object',
    component: TemplateDrivenFormObjectComponent
  },
  {
    path: 'model-driven-form',
    component: ModelDrivenFormComponent
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

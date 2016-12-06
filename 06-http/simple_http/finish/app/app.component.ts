import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <a href="#" [routerLink]="['/posts']">POSTS</a> | 
  <a href="#" [routerLink]="['/github']">GitHub</a> | 
  <router-outlet>
  `,
  providers: []
})
export class AppComponent {}

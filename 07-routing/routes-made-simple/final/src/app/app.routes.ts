import { Routes } from '@angular/router';

import { CatComponent } from './cat/cat.component';
import { DogComponent } from './dog/dog.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'dog', pathMatch: 'full' },
  { path: 'dog', component: DogComponent },
  { path: 'cat', component: CatComponent },
];


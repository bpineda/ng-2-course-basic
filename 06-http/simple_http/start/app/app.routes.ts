import { Routes, RouterModule } from '@angular/router';


import { PostsComponent } from './posts/posts.component';
import { GithubComponent } from './github/github.component';

const routes: Routes = [
  {
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: 'github',
    component: GithubComponent
  },
  {
    path: '',
    redirectTo: '/posts',
    pathMatch: 'full'
  },
];

export const routing = RouterModule.forRoot(routes);

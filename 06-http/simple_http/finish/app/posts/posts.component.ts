import { Component } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';

@Component({
  templateUrl: 'app/posts/posts.component.html',
})
export class PostsComponent 
{

  data: Object;
  loading: boolean;
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(public http: Http){ }

  makeRequest(): void {
    this.loading = true;
    this.http.request("http://jsonplaceholder.typicode.com/posts/1")
      .subscribe((res: Response) => {
        console.log(123);
        console.log(res);
        console.log(res.json());
        this.data = res.json();
        this.loading = false;
      });
  }

}

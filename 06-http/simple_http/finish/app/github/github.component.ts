import { Component } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';

@Component({
  templateUrl: 'app/github/github.component.html',
})

export class GithubComponent 
{

  data: Object;
  loading: boolean;
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(public http: Http){ }

  makeRequest(): void {
    this.loading = true;
    this.http.request("https://api.github.com/users")
      .subscribe((res: Response) => {
        this.data = res.json();
        this.loading = false;
      });
  }

}

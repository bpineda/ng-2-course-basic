import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  private username:string = '';

  public getUserName()
  {
    return this.username;
  }

  public setUserName(username: string)
  {
    this.username = username;
  }

  constructor(private http: Http) { }

  searchUsers( search_string: string )
  {
    return this.makeRequest(`search/users?q=${search_string}`);
  }

  getUserProfile(username: string) {
    return this.makeRequest(`users/${username}`);
  }

  private makeRequest(path: string) {
    let url = `https://api.github.com/${ path }`;
    return this.http.get(url)
      .map((res) => res.json());
  }

}

import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

@Injectable()
export class BaseService {
  public url: string = environment.baseUrl
  constructor(public http: Http) { }
  getOptions() {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', 'Bearer ' + this.getToken());
    const options = new RequestOptions({ headers: headers });
    return options;
  }

  getToken() {
    return localStorage.getItem('token');
  }

  extractData(res: Response) {
    const body = res.json()
    return body || {}
  }

  handleError(err: any) {
    return Observable.throw(err)
  }

}
import { Injectable } from '@angular/core';

import { Http, RequestOptions, Headers, Response } from '@angular/http';
import {environment} from './../../environments/environment'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'

@Injectable()
export class BaseService {
public url:string=environment.baseUrl
  constructor(public http: Http) {
   }

  getOptions() {
    var headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers })
    return options
   }
  extractData(res: Response) {
    const body = res.json()
    return body ||{}
   }
  handleError(err: any) {
    return Observable.throw(err)
  }

}

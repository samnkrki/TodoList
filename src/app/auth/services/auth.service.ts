import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Subject } from 'rxjs/Subject';

import { BaseService } from './../../shared/base.service';


export class User {
  _id: string;
  email: string;

  constructor(options: any) {
    this._id = options._id || '';
    this.email = options.email || '';
  }
}

@Injectable()
export class AuthService {

  private url: string;
  redirectUrl: string;

  // Observable string sources
  private userDataChanged = new Subject<boolean>();

  // Observable string streams
  userDataChanged$ = this.userDataChanged.asObservable();

  constructor(
    public http: Http,
    public baseService: BaseService,
    public router: Router
  ) {
    this.url = this.baseService.url + 'auth/'
  }

  // Fire useDatechanged event.
  publishUserDataChange() {
    this.userDataChanged.next(true);
  }

	/**
	 * Create movie
	 * @param movie 
	 */
  register(user: any): Observable<any> {

    let body = JSON.stringify(user);

    return this.http.post(this.url + 'register', body, this.baseService.getOptions())
      .map(this.baseService.extractData)
      .catch(this.baseService.handleError)
  }


  login(user: any): Observable<any> {
    let body = JSON.stringify(user);
    return this.http.post(this.url + 'login', body, this.baseService.getOptions())
      .map(this.baseService.extractData)
      .catch(this.baseService.handleError)
  }

  /**	Set user and token to localstorage */
  setUser(data: any) {
    let user = JSON.stringify(data.user);
    localStorage.setItem('user', user);
    localStorage.setItem('token', data.token);
  }


  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['auth']);
  }

  isLoggedIn() {

    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
} 
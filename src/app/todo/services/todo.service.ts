import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BaseService } from '../../shared/base.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoService {
  public url: string
  constructor(public http: Http, public baseService: BaseService) {
    this.url = this.baseService.url + 'todo/'
  }

  listAll(): Observable<any> {
    return this.http.get(this.url, this.baseService.getOptions())
      .map(this.baseService.extractData)
      .catch(this.baseService.handleError)
  }
  addNew(item: any): Observable<any> {
    const body = JSON.stringify(item)
    return this.http.post(this.url, body, this.baseService.getOptions())
      .map(this.baseService.extractData)
      .catch(this.baseService.handleError)
  }
  remove(id: string): Observable<any> {
    return this.http.delete(this.url + id, this.baseService.getOptions())
      .map(this.baseService.extractData)
      .catch(this.baseService.handleError)
  }

  updateState(id: string): Observable<any> {
    let body = JSON.stringify(id)
    return this.http.get(this.url + id, this.baseService.getOptions())//maybe use get
      .map(this.baseService.extractData)
      .catch(this.baseService.handleError)
  }

}

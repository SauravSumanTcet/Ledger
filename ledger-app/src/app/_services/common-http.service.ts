import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import 'rxjs/Rx';

@Injectable()
export class CommonHttpService {
  constructor(private http: HttpClient) {
  }
  url: string = '';
  requestData: Object;

  fetchdata(url): Observable<any> {
    let headers;
    if (url.includes('wit')) {
      headers = new HttpHeaders().set("Authorization", "Bearer Q2GW2IGCDKGT5KFPMFST66H56ULUF6OL");
    }
    return this.http.get(url, { headers });
  }


  postdata(url, requestData): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(url, requestData, { headers });
  }

  putdata(url, requestData): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(url, requestData, { headers });
  }

  deletedata(url): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(url, { headers });
  }
}
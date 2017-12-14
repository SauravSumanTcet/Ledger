import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import 'rxjs/Rx';

@Injectable()
export class CommonHttpService {
  constructor(private http: Http) {
  }
  url: string = '';
  requestData: Object;

  fetchdata(url): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });    
    if(url.includes('wit')){
       headers = new Headers({
        "Authorization": "Bearer Q2GW2IGCDKGT5KFPMFST66H56ULUF6OL"
      });
    }
    let options = new RequestOptions({ headers: headers });
    return this.http.get(url, options)
      .map((res: Response) => {
        // If everything went fine, return the response        
        return res.json();
      })
  }


  postdata(url, requestData): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(url, requestData, options)
      .map((res: Response) => {
        // If everything went fine, return the response
        return res.json();
      })
  }
}
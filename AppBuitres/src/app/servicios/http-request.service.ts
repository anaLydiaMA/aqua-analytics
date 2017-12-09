import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpRequestService {

    constructor(private http: Http ) { }

    httpPost ( user: any, URL: string)  {
      const newuser = JSON.stringify(user);
      const headers = new Headers({'Content-Type': 'application/json'});
      return this.http.post( URL , newuser, { headers: headers })
        .map( res => {
           console.log(res.json());
          return res.json();
          })
    }

    httpGet( url: string) {
      return this.http.get( url )
      .map(
        res => res.json()
      )
    }

}

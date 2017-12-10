import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpRequestService {

    constructor(private http: Http ) { }

  URL = 'https://aqua-container.mybluemix.net/users/login';
  User: any;
  Acceso: boolean;

    httpPost ( user: any, URL: string)  {
      const newuser = JSON.stringify(user);
      const headers = new Headers({'Content-Type': 'application/json'});
      return this.http.post( URL , newuser, { headers: headers })
        .map( res => {
          this.Acceso = true;
           console.log(res.json());
          return res.json();
          }, err => { this.Acceso = false; } );
    }

    httpGet( url: string) {
      return this.http.get( url )
      .map(
        res => res.json()
      )
    }
}

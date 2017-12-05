import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpRequestService {

    constructor(private http: Http) { }

    URL = 'https://aqua-container.mybluemix.net/users/login';

    httpPost( presupuesto: any) {
      const newpres = JSON.stringify(presupuesto);
      //const headers = new Headers({'Content-Type': 'application/json'});

      const headers = new Headers();
      headers.append('Content-Type','application/json');
      headers.append('Accept', 'application/json');
      headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
      headers.append('Access-Control-Allow-Origin', '*');
      //headers.append('Access-Control-Allow-Headers', "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding");

      //console.log(headers);
      return this.http.post( this.URL, newpres, { headers: headers })
        .map( res => {
          console.log(res.json());
          return res.json();
          })
    }

    httpGet() {
      return this.http.get( this.URL )
      .map(
        res => res.json()
      )
    }

}

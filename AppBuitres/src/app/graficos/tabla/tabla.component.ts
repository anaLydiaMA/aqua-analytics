import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../.././servicios/http-request.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit{

  URL= 'https://aqua-container.mybluemix.net/data/rating';
    constructor (private httpRequestService: HttpRequestService) {
    }

  public lineChartLabels: Array<any> = ['January'];

  public lineChartData: String[] = [];

  ngOnInit() {
    this.httpRequestService.httpPostGraficas(this.URL )
    .subscribe(newuser => {
      this.lineChartData  = newuser;
     });
  }

}


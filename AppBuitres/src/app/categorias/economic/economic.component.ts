import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../.././servicios/http-request.service';

@Component({
  selector: 'app-economic',
  templateUrl: './economic.component.html',
  styleUrls: ['./economic.component.css']
})
export class EconomicComponent implements OnInit {

  URL= 'https://aqua-container.mybluemix.net/data/new/ECONOMIC ACTIVITY';

  constructor (private httpRequestService: HttpRequestService) {
  }

  width = 1083;
  height = 500;
  type = 'pie3d';
  dataFormat = 'json';
  dataSource;
  title = 'Angular4 FusionCharts Sample';

  ngOnInit() {
    this.httpRequestService.httpPostGraficas(this.URL )
    .subscribe(newuser => {
      this.dataSource  = newuser;
     });
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../.././servicios/http-request.service';
import { BaseChartDirective, ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-housing',
  templateUrl: './housing.component.html',
  styleUrls: ['./housing.component.css']
})
export class HousingComponent implements OnInit {
  constructor (private httpRequestService: HttpRequestService) { }
  URL= 'https://aqua-container.mybluemix.net/data/new/SITUATION OF HOUSING';

  width = 1083;
  height = 500;
  type = 'mscombi2d';
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

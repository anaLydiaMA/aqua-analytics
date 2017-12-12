import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../.././servicios/http-request.service';
import { BaseChartDirective, ChartsModule } from 'ng2-charts';


@Component({
  selector: 'app-mexico',
  templateUrl: './mexico.component.html',
  styleUrls: ['./mexico.component.css']
})
export class MexicoComponent implements OnInit {
  URL= 'https://aqua-container.mybluemix.net/data/new/ABOUT MEXICO';
  constructor (private httpRequestService: HttpRequestService) { }
  width = 1100;
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

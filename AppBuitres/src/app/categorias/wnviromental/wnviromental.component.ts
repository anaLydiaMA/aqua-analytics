import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../.././servicios/http-request.service';
import { BaseChartDirective, ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-wnviromental',
  templateUrl: './wnviromental.component.html',
  styleUrls: ['./wnviromental.component.css']
})
export class WnviromentalComponent implements OnInit {
  URL= 'https://aqua-container.mybluemix.net/data/new/ENVIRONMENTAL CARE';
  constructor (private httpRequestService: HttpRequestService) {
  }

  width = 1083;
  height = 500;
  type = 'pie3d';
  dataFormat = 'json';
  dataSource;

  ngOnInit() {
    this.httpRequestService.httpPostGraficas(this.URL )
    .subscribe(newuser => {
      this.dataSource  = newuser;
     });
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../.././servicios/http-request.service';
import { BaseChartDirective, ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-population',
  templateUrl: './population.component.html',
  styleUrls: ['./population.component.css']
})
export class PopulationComponent implements OnInit {
  constructor (private httpRequestService: HttpRequestService) { }
      URL= 'https://aqua-container.mybluemix.net/data/new/POPULATION';

      width = 1083;
      height = 500;
      type = 'msline';
      dataFormat = 'json';
      dataSource;
      title = 'Angular4 FusionCharts Sample';

      ngOnInit() {
        this.httpRequestService.httpPostGraficas(this.URL )
        .subscribe(newuser => {
          this.dataSource = newuser;
         });
      }
}

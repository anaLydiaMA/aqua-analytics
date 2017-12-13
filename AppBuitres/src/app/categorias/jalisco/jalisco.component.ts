import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../.././servicios/http-request.service';

@Component({
  selector: 'app-jalisco',
  templateUrl: './jalisco.component.html',
  styleUrls: ['./jalisco.component.css']
})
export class JaliscoComponent implements OnInit {
  constructor (private httpRequestService: HttpRequestService) { }

  URL= 'https://aqua-container.mybluemix.net/data/new/ABOUT JALISCO';
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

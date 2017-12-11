import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../.././servicios/http-request.service';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent {

  constructor (private httpRequestService: HttpRequestService) {this.getGraficaLineal(); }

  URL= 'https://aqua-container.mybluemix.net';

  public lineChartData: Array<any> = [];

  public lineChartOptions: any = {
    responsive: true
  };

  public lineChartLabels: Array<any> = [];
  public lineChartLegend = true;
  public lineChartType = '';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }
  public chartHovered(e: any): void {
    console.log(e);
  }

  getGraficaLineal() {
    this.httpRequestService.httpPost( this.httpRequestService.User  , this.httpRequestService.URL )
    .subscribe(newuser => {
      this.lineChartLabels = newuser.lineChartLabels;
      this.lineChartData = newuser.lineChartData;
     });
      }

}

import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../.././servicios/http-request.service';

@Component({
  selector: 'app-graficacircular',
  templateUrl: './graficacircular.component.html',
  styleUrls: ['./graficacircular.component.css']
})
export class GraficacircularComponent {

  constructor (private httpRequestService: HttpRequestService) { this.getGraficaCircular(); }

  URL= 'https://aqua-container.mybluemix.net';
   public roundChartType= '';
   public roundChartLabels: string[] = [];
   public roundChartData: number[] = [];

   public chartClicked(e: any): void {
     console.log(e);
   }

   public chartHovered(e: any): void {
     console.log(e);
   }

   getGraficaCircular() {
    this.URL.concat('');
    this.httpRequestService.httpPost( this.httpRequestService.User  , this.httpRequestService.URL )
    .subscribe(newuser => {
      this.roundChartLabels = newuser.roundChartLabels;
      this.roundChartData = newuser.roundChartData;
     });
      }

}

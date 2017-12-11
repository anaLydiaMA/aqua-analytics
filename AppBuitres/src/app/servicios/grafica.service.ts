import { Injectable } from '@angular/core';
import { HttpRequestService } from '../servicios/http-request.service';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class GraficaService {

  constructor(private httpRequestService: HttpRequestService,
              private http: Http) { }

  public URL = '' ;

  // lineal
  public lineChartData: Array<any> = [];
  public lineChartOptions: any = {
    responsive: true,
  };
  public lineChartLabels: Array<any> = [];
  public lineChartLegend = true;
  public lineChartType = '';

  // Circular
  public roundChartType = '';
  public roundChartLabels: string[] = [];
  public roundChartData: number[] = [];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }
  public chartHovered(e: any): void {
    console.log(e);
  }

  getGraficaLineal(URL: string) {
    this.httpRequestService.httpPostGraficas(this.URL )
    .subscribe(newuser => {
      this.lineChartLabels = newuser.lineChartLabels;
      this.lineChartData = newuser.lineChartData;
     });
      }

   getGraficaCircular(URL: string) {
        this.httpRequestService.httpPostGraficas( this.URL)
        .subscribe(newuser => {
          this.roundChartLabels = newuser.roundChartLabels;
          this.roundChartData = newuser.roundChartData;
         });
          }
}

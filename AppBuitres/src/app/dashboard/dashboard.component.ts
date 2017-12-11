import { Component, OnInit } from '@angular/core';
import { GraficaService } from './../servicios/grafica.service';
import { HttpRequestService } from '../servicios/http-request.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor (private graficaService: GraficaService,
                private httpRequestService: HttpRequestService, ) {}

  get(Url: string, type: string ) {
    this.graficaService.getGraficaCircular(Url);
    this.graficaService.getGraficaLineal(Url);
    this.graficaService.roundChartType = type;
    this.graficaService.lineChartType = type;
  }

}

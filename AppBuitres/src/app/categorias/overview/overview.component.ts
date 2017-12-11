import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../.././servicios/http-request.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor (private httpRequestService: HttpRequestService) { }

    URL= 'https://aqua-container.mybluemix.net/data/OVERVIEW';
    public lineChartData: Array<any> = [
      { 'data': [
          98.872797,
          99.152183,
          99.9999999989419,
          96.6443112132004 ], 'label': 'Guadalajara'
      },
      { 'data': [
          87.042907,
          98.966758,
          92.331473026192,
          93.7533670007151
      ], 'label': 'Zapopan'
      },
      { 'data': [
          94.405051,
          99.098307,
          100,
          94.0485075928264
      ], 'label': 'San Pedro Tlaquepaque'
      },
      { 'data': [
          94.199282,
          98.648399,
          99.9999999875546,
          86.8692046036997
      ], 'label': 'Tonalá'
      },
      { 'data': [
          96.467273,
          98.826099,
          99.9761772283438,
          92.7368291923414
      ], 'label': 'Tlajomulco de Zúñiga'
      },
      { 'data': [
          88.606015,
          97.648082,
          99.9999999909077,
          82.2107777743307
      ], 'label': 'El Salto'
      },
      { 'data': [
          92.36503,
          98.76698,
          98.1853484548259,
          95.4255217764224
      ], 'label': 'Ixtlahuacán de los Membrillos'
      }, { 'data': [
          93.364427,
          98.940004,
          100,
          83.3539603960396
      ], 'label': 'Juanacatlán'
      } ];
    public lineChartOptions: any = {responsive: true};
    public lineChartLabels: Array<any> = [
      '1*',
      '2*',
      '3*',
      '4*'];
    public lineChartLegend: boolean = true;
    public lineChartType: string = 'line';

    // events
    public chartClicked(e: any): void {
      console.log(e);
    }
    public chartHovered(e: any): void {
      console.log(e);
    }

    ngOnInit() {
      this.httpRequestService.httpPostGraficas(this.URL )
      .subscribe(newuser => {
        this.lineChartData = [];
        this.lineChartLabels = [];
        this.lineChartLabels = newuser.lineChartLabels;
        this.lineChartData = newuser.lineChartData;
       });
    }
}

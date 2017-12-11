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
  URL= 'https://aqua-container.mybluemix.net/data/SITUATION OF HOUSING';
  public lineChartData: Array<any> = [ {
    'data': [
        365416,
        1469,
        1273,
        273,
        76,
        232,
        1714
    ],
    'label': 'Guadalajara'
},
{
    'data': [
        292163,
        5428,
        2166,
        1148,
        5619,
        2684,
        1697
    ],
    'label': 'Zapopan'
},
{
    'data': [
        131591,
        3236,
        1238,
        532,
        2573,
        1252,
        815
    ],
    'label': 'San Pedro Tlaquepaque'
},
{
    'data': [
        90873,
        2342,
        1398,
        619,
        4893,
        4033,
        513
    ],
    'label': 'Tonalá'
},
{
    'data': [
        95502,
        2774,
        809,
        330,
        922,
        1077,
        359
    ],
    'label': 'Tlajomulco de Zúñiga'
},
{
    'data': [
        25662,
        837,
        2035,
        315,
        1813,
        1182,
        168
    ],
    'label': 'El Salto'
},
{
    'data': [
        9237,
        776,
        156,
        49,
        36,
        155,
        61
    ],
    'label': 'Ixtlahuacán de los Membrillos'
},
{
    'data': [
        2508,
        186,
        361,
        38,
        77,
        55,
        1
    ],
    'label': 'Juanacatlán'
}];
  public lineChartOptions: any = {responsive: true};
  public lineChartLabels: Array<any> = [
    'A)',
    'B)',
    'C)',
    'D)',
    'E)',
    'F)',
    'G)'];
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

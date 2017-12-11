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
      URL= 'https://aqua-container.mybluemix.net/data/POPULATION';
      public lineChartData: Array<any> = [
        {
          'data': [
              1512798,
              1501864,
              1497530,
              1497567,
              1500819,
              1506357,
              1513498,
              1521739,
              1530657,
              1539917,
              1549199,
              1558490,
              1567807,
              1576938,
              1585795,
              1594290,
              1602458,
              1610362,
              1617985,
              1625313,
              1632307
          ],
          'label': 'Guadalajara'
      },
      {
          'data': [
              1156593,
              1168394,
              1180270,
              1191759,
              1202881,
              1213580,
              1223813,
              1233554,
              1242740,
              1251310,
              1259166,
              1266419,
              1273179,
              1279337,
              1284869,
              1289751,
              1294001,
              1297648,
              1300689,
              1303121,
              1304922
          ],
          'label': 'Zapopan'
      },
      {
          'data': [
              583257,
              588337,
              593818,
              599394,
              605023,
              610641,
              616201,
              621670,
              627007,
              632173,
              637117,
              641892,
              646551,
              651036,
              655331,
              659418,
              663277,
              666892,
              670256,
              673359,
              676180
          ],
          'label': 'San Pedro Tlaquepaque'
      },
      {
          'data': [
              413968,
              421798,
              428844,
              435136,
              440842,
              446063,
              450879,
              455353,
              459517,
              463393,
              466981,
              470348,
              473555,
              476574,
              479406,
              482046,
              484480,
              486694,
              488688,
              490459,
              491996
          ],
          'label': 'Tonalá'
      },
      {
          'data': [
              30660,
              33278,
              35596,
              37644,
              39466,
              41104,
              42591,
              43959,
              45233,
              46432,
              47572,
              48670,
              49742,
              50795,
              51835,
              52865,
              53886,
              54897,
              55902,
              56900,
              57890
          ],
          'label': 'Tlajomulco de Zúñiga'
      },
      {
          'data': [
              21923,
              22294,
              22578,
              22786,
              22934,
              23034,
              23094,
              23121,
              23119,
              23093,
              23045,
              22979,
              22899,
              22806,
              22699,
              22581,
              22449,
              22305,
              22147,
              21977,
              21794
          ],
          'label': 'El Salto'
      },
      {
          'data': [
              6217,
              6665,
              7036,
              7339,
              7585,
              7783,
              7944,
              8073,
              8178,
              8262,
              8329,
              8382,
              8426,
              8461,
              8489,
              8511,
              8526,
              8536,
              8540,
              8539,
              8533
          ],
          'label': 'Ixtlahuacán de los Membrillos'
      },
      {
          'data': [
              9241,
              9333,
              9420,
              9499,
              9572,
              9641,
              9704,
              9764,
              9820,
              9872,
              9919,
              9964,
              10006,
              10045,
              10081,
              10114,
              10144,
              10170,
              10193,
              10212,
              10227
          ],
          'label': 'Juanacatlán'
      }];
      public lineChartOptions: any = {responsive: true};
      public lineChartLabels: Array<any> = [
        '2010',
        '2011',
        '2012',
        '2013',
        '2014',
        '2015',
        '2016',
        '2017',
        '2018',
        '2019',
        '2020',
        '2021',
        '2022',
        '2023',
        '2024',
        '2025',
        '2026',
        '2027',
        '2028',
        '2029',
        '2030'];
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

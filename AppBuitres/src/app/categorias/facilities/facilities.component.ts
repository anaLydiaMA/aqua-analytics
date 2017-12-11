import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../../servicios/http-request.service';
import { BaseChartDirective, ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent implements OnInit {
  URL= 'https://aqua-container.mybluemix.net/data/FACILITIES';
  public roundChartType= 'pie';
  public roundChartLegend: boolean = true;
  public Grafica: any;
  public roundChartLabels: string[] = ['Guadalajara',
  'Zapopan',
  'San Pedro Tlaquepaque',
  'Tonalá',
  'Tlajomulco de Zúñiga',
  'El Salto',
  'Ixtlahuacán de los Membrillos',
  'Juanacatlán'];
  public roundChartData: number[] = [0, 38, 17, 6, 117, 7, 24, 11];

    borderColor: [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
  ];

  constructor (private httpRequestService: HttpRequestService) { }

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  ngOnInit() {
    this.httpRequestService.httpPostGraficas(this.URL )
    .subscribe(newuser => {
      this.roundChartData = [];
      this.roundChartLabels = [];
      this.roundChartLabels = newuser.roundChartLabels;
      this.roundChartData = newuser.roundChartData;
     });
  }
}

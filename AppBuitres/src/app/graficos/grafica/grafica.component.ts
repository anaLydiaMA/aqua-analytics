import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent {

  public lineChartData: Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40, 35], label: 'Guadalajara'},
    {data: [28, 48, 40, 19, 86, 27, 90, 40], label: 'Zapopan'},
    {data: [18, 48, 77, 9, 100, 27, 40, 55], label: 'San Pedro Tlaquepaque'},
    {data: [6, 9, 8, 1, 6, 5, 0, 5], label: 'Tonalá'},
    {data: [90, 80, 70, 60, 50, 0, 10, 20], label: 'El Salto'},
    {data: [18, 38, 20, 79, 96, 17, 0, 90], label: 'Tlajomulco de Zúñiga'},
    {data: [77, 33, 66, 99, 10, 27, 80, 10], label: 'Ixtlahuacán de los Membrillos'},
    {data: [10, 20, 20, 30, 40, 57, 60, 75], label: 'Juanacatlán'}
  ];

  public lineChartOptions: any = {
    responsive: true,
  };

  public lineChartLabels: Array<any> = ['2017 January', '2017 February', '2017 March',
                                        '2017 April', '2017 May', '2017 June', '2017 July',
                                        '2017 August'];

  public lineChartLegend: boolean = true;
  public lineChartType: string = 'radar';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }
  public chartHovered(e: any): void {
    console.log(e);
  }

  public randomizeType(): void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {

  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];

  public lineChartData: Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40, 35], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90, 40], label: 'Series B'},
    {data: [18, 48, 77, 9, 100, 27, 40, 55], label: 'Series C'}
  ];

}

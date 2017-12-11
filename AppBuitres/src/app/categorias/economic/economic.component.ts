import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../.././servicios/http-request.service';

@Component({
  selector: 'app-economic',
  templateUrl: './economic.component.html',
  styleUrls: ['./economic.component.css']
})
export class EconomicComponent implements OnInit {

  URL= 'https://aqua-container.mybluemix.net/ECONOMIC ACTIVITY';
  public roundChartType= 'pie';
  public roundChartLabels: string[] = ['Guadalajara',
  'Zapopan',
  'San Pedro Tlaquepaque',
  'Tonalá',
  'Tlajomulco de Zúñiga',
  'El Salto',
  'Ixtlahuacán de los Membrillos',
  'Juanacatlán'];
  public roundChartData: number[] = [95446938, 60145563, 19468600, 2111399, 8592779,
                                      10831506, 1783499, 36768];

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
      this.roundChartLabels.push(newuser.roundChartLabels);
      this.roundChartData.push(newuser.roundChartData);
      console.log(newuser.roundChartLabels.json() );
      console.log(newuser.roundChartData.json() );
     });
  }

}

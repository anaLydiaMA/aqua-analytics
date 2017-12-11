import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../.././servicios/http-request.service';
import { BaseChartDirective, ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-jalisco',
  templateUrl: './jalisco.component.html',
  styleUrls: ['./jalisco.component.css']
})
export class JaliscoComponent implements OnInit {

  URL= 'https://aqua-container.mybluemix.net/data/ABOUT JALISCO';
  public roundChartType= 'pie';
  public roundChartLegend: boolean = true;
  public roundChartLabels: string[] = ['Viviendas de c/100',
                                        'Viviendas restantes'];
  public roundChartData: number[] = [ 92.64777888931698, 7.35222111098302];

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

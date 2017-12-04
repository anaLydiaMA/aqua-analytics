import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficacircular',
  templateUrl: './graficacircular.component.html',
  styleUrls: ['./graficacircular.component.css']
})
export class GraficacircularComponent {

  public roundChartType: string = 'pie';
   public roundChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
   public roundChartData: number[] = [300, 500, 100];

   public randomizeType(): void {
     this.roundChartType = this.roundChartType === 'polarArea' ? 'pie' : 'polarArea';
   }

   public chartClicked(e: any): void {
     console.log(e);
   }

   public chartHovered(e: any): void {
     console.log(e);
   }

}

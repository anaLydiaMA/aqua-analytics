import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// Graficos
import { ChartsModule } from 'ng2-charts';
import { GraficaComponent } from './graficos/grafica/grafica.component';
import { TablaComponent } from './graficos/tabla/tabla.component';
import { GraficacircularComponent } from './graficos/graficacircular/graficacircular.component';


const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'Dashboard', component: DashboardComponent},
  {path: '**', component: InicioComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    DashboardComponent,
    GraficaComponent,
    TablaComponent,
    GraficacircularComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

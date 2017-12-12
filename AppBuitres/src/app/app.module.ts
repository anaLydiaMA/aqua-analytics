import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';


import { FusionChartsModule } from 'angular4-fusioncharts';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { GraficaComponent } from './graficos/grafica/grafica.component';
import { TablaComponent } from './graficos/tabla/tabla.component';
import { GraficacircularComponent } from './graficos/graficacircular/graficacircular.component';
import { LoginComponent } from './login/login.component';
import { HttpRequestService } from './servicios/http-request.service';
import { RegistroComponent } from './registro/registro.component';
import { GuardService } from './servicios/guard.service';
import { GraficaService } from './servicios/grafica.service';
import { OverviewComponent } from './categorias/overview/overview.component';
import { FacilitiesComponent } from './categorias/facilities/facilities.component';
import { HousingComponent } from './categorias/housing/housing.component';
import { PopulationComponent } from './categorias/population/population.component';
import { EconomicComponent } from './categorias/economic/economic.component';
import { WnviromentalComponent } from './categorias/wnviromental/wnviromental.component';
import { JaliscoComponent } from './categorias/jalisco/jalisco.component';
import { MexicoComponent } from './categorias/mexico/mexico.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Inicio', component: InicioComponent },
  {path: 'Dashboard', component: DashboardComponent , canActivate: [GuardService]  },
  {path: '**', component: InicioComponent}

];

FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme);

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    DashboardComponent,
    GraficaComponent,
    TablaComponent,
    GraficacircularComponent,
    LoginComponent,
    RegistroComponent,
    OverviewComponent,
    FacilitiesComponent,
    HousingComponent,
    PopulationComponent,
    EconomicComponent,
    WnviromentalComponent,
    JaliscoComponent,
    MexicoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ChartsModule,
    ReactiveFormsModule,
    HttpModule,
    FusionChartsModule
  ],
  providers: [ HttpRequestService,
                GuardService,
                GraficaService],
  bootstrap: [ AppComponent],
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

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

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Inicio', component: InicioComponent },
  {path: 'Dashboard', component: DashboardComponent , canActivate: [GuardService]  },
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
    GraficacircularComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ChartsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ HttpRequestService,
                GuardService],
  bootstrap: [ AppComponent],
})
export class AppModule { }

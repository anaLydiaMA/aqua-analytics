import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpRequestService } from '../servicios/http-request.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private httpRequestService: HttpRequestService,
    private router: Router,
    private activatedRouter: ActivatedRoute) { }

  get(Url: string, type: string ) {
  }

  isAuth() {
    return this.httpRequestService.Acceso;
  }

  onLogout() {
    this.httpRequestService.Acceso = false ;
    this.router.navigate(['/inicio']);
  }
}

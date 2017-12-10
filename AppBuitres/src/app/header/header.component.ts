import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../servicios/http-request.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private httpRequestService: HttpRequestService,
              private router: Router,
              private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
  }

  isAuth() {
    return this.httpRequestService.Acceso;
  }

  onLogout() {
    this.httpRequestService.Acceso = false ;
    this.router.navigate(['/inicio']);
  }

}

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpRequestService } from './http-request.service';

@Injectable()
export class GuardService implements CanActivate {

  constructor(private autentificacionService: HttpRequestService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.autentificacionService.Acceso;
  }

}

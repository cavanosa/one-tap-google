import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class HelloGuard implements CanActivate {
  constructor(
    private tokenService: TokenService,
    private router: Router
  ) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean  {
    if(!this.tokenService.isLogged()) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
  
}

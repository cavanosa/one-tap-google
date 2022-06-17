import { TokenService } from './../services/token.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(
    private tokenService: TokenService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let reqInt = request;
    const token = this.tokenService.getToken();
    if (token != null) {
      reqInt = request.clone({headers: request.headers.set('Authorization', 'Bearer ' + token)});
    }
    return next.handle(reqInt);
  }
}

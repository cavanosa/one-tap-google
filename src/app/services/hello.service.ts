import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageDto } from '../models/message-dto';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  backendURL = environment.backendURL;

  constructor(
    private httpClient: HttpClient
  ) { }

  public getHello(): Observable<MessageDto> {
    return this.httpClient.get<MessageDto>(this.backendURL + 'hello');
  }
}

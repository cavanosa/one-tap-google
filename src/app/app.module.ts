import { ApiInterceptor } from './interceptors/api.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HelloComponent } from './components/hello/hello.component';

import { NgGoogleOneTapModule } from 'ng-google-one-tap';
import { environment } from 'src/environments/environment';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgGoogleOneTapModule.config(
      {  //Look options table for some more avaialbe options and config here.
          client_id: environment.clientId,
          cancel_on_tap_outside: false,
          authvalidate_by_googleapis: false,
          auto_select: false,
          disable_exponential_cooldowntime: false,
          context: 'signup'
      })
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

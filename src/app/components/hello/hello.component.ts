import { MessageDto } from './../../models/message-dto';
import { HelloService } from './../../services/hello.service';
import { Router } from '@angular/router';
import { TokenService } from './../../services/token.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  dto: MessageDto = {
    message: '',
    picture: ''
  }

  constructor(
    private tokenService: TokenService,
    private router: Router,
    private helloService: HelloService
  ) { }

  ngOnInit(): void {
    this.helloService.getHello().subscribe(data => {
      this.dto = new MessageDto(data.message, data.picture);
      console.log(this.dto);
    },
      err => {
        console.log(err);
        if (err.status === 401) {
          this.logOut();
        }
      });
  }

  public logOut(): void {
    this.tokenService.logOut();
    this.router.navigate(['/home']);
  }

}

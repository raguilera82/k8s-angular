import { ConfigService } from './../config/config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  api: string | undefined;

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.api = this.configService.config.api;
  }

}

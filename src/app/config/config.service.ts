import { Injectable } from '@angular/core';
import { ConfigProxyService } from './config-proxy.service';
import { Config } from './model';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  config: Config = {};

  constructor(private proxy: ConfigProxyService) { }

  load() {
    return new Promise(resolve => {
      this.proxy.getConfig().subscribe(
        config => {
          this.config = config;
          resolve(config);
        }
      );
    });
  }
}

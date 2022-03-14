import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Config } from './model';

@Injectable({
  providedIn: 'root'
})
export class ConfigProxyService {

  constructor(private httpClient: HttpClient) { }

  getConfig(): Observable<Config> {
    return this.httpClient.get<Config>(`${environment.configFile}`);
  }
}

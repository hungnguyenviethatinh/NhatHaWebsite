import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const appConfigUrl = 'assets/app.config.json';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  private config: any;

  constructor(private http: HttpClient) {
    this.getConfig();
  }

  private getConfig = () => {
    this.http.get(appConfigUrl).subscribe(config => {
      this.config = { ...config };
    });
  }

  public getConfigByName = (name: string, config = { ...this.config }) => {
    let configByName: any;
    Object.keys(config).some(key => {
      if (key === name) {
        configByName = config[key];
      } else {
        if (config[key] !== undefined && config[key] instanceof Object) {
          configByName = this.getConfigByName(name, config[key]);
          return configByName !== undefined;
        }
      }
    });

    return configByName;
  }
}

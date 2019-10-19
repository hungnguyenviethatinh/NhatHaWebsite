import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppConfigService } from './app-config.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class SendMailService {

  constructor(private http: HttpClient, private appConfig: AppConfigService) { }

  sendMail = (mailContent: any) => {
    const url = this.appConfig.getConfigByName('mailService');
    const body = JSON.stringify(mailContent);
    return this.http.post<SendMailServiceResponse>(url, body, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  private handleError = (error: HttpErrorResponse) => {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened. Please try again later!');
  }
}

class SendMailServiceResponse {
  public Code: number;
  public Message: string;
}

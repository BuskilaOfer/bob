import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, from, throwError } from 'rxjs';
import { API_URL } from '../env';
import { Wordcount } from './wordcount.model';
import { catchError, tap } from 'rxjs/internal/operators';

@Injectable()
export class WordcountSevice {

  constructor(private http: HttpClient) {
  }

  getJobId(url: string): Observable<any> {
    const body = new HttpParams()
    .set('url', url)

    return this.http.post(`${API_URL}/execute`, body)
    .pipe(
        catchError( err => {
            return throwError(err);
        })
    );
        
  }
}
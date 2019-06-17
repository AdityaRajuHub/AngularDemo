import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Topic } from './model/topic';
import { Observable } from 'rxjs';
import {catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  _url: string= '/topics';

  constructor(private http: HttpClient) { }

  getTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>(this._url).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error.message || 'Some Error occured! Please try again.');
  }
}

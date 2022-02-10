import { Avis, Vote } from './../models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Collegue } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {
  }

  listerCollegues(): Observable<Collegue[]> {
    return this.httpClient.get<Collegue[]>('https://formation-angular-collegues.herokuapp.com/api/v1/collegues');
  }

  donnerUnAvis(collegue: Collegue, avis: Avis): Observable<Collegue> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return this.httpClient.post<Collegue>('https://formation-angular-collegues.herokuapp.com/api/v1/votes',
      {
        "pseudo": collegue.pseudo,
        "avis": avis
    });
  }
}

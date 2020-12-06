import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  private url:string = 'https://api.covid19api.com/summary';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }


  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<any> {
    return this.http.get<any>(this.url).pipe(map(res => {
      return res["Countries"];
    }));
  }
}

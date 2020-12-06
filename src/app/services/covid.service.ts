import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, subscribeOn } from 'rxjs/operators'
import { analyzeAndValidateNgModules } from '@angular/compiler';

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

  getSpain(): Observable<any> {
    return this.http.get(this.url).pipe( map(res =>{
      return res["Countries"].filter ( country => {
        return country.Country === 'Spain';
      })
    }))
  }

  getGlobal(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      map(res => {return res["Global"]}
    ));
  }
}

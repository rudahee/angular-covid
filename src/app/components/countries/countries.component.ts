import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/services/covid.service'

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countries: any[];

  constructor(private covidService: CovidService) { }

  ngOnInit(): void {
    this.covidService.getAllCountries().subscribe(
      res => {
        this.countries = res;
      }
    )
  }

}

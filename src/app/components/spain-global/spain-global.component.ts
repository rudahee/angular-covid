import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/services/covid.service'

@Component({
  selector: 'app-spain-global',
  templateUrl: './spain-global.component.html',
  styleUrls: ['./spain-global.component.css']
})
export class SpainGlobalComponent implements OnInit {

  global: any;
  spain: any;

  constructor(private covidService: CovidService) {}

  ngOnInit(): void {
    this.covidService.getSpain().subscribe( res => {
      this.spain = res;
    })
    this.covidService.getGlobal().subscribe( res =>{
      this.global = res;
    })
  }

}

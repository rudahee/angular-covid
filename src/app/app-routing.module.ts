import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CountriesComponent } from 'src/app/components/countries/countries.component';
import { SpainGlobalComponent } from 'src/app/components/spain-global/spain-global.component';

const routes: Routes = [
  {path:'', redirectTo: '/countries', pathMatch: 'full'},
  {path: 'countries', component: CountriesComponent},
  {path: 'spain', component: SpainGlobalComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule],
    exports: [RouterModule]
})
export class AppRoutingModule { }

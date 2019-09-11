import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndicatorComponent } from './components/indicator/indicator.component';
import { MeasurementComponent } from './components/measurement/measurement.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'indicator', component: IndicatorComponent },
  { path: 'measurement', component: MeasurementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

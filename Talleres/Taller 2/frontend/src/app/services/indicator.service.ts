import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Indicator } from '../models/indicator';

@Injectable({
  providedIn: 'root'
})
export class IndicatorService {

  selectedIndicator: Indicator;
  indicators: Indicator[];

  readonly URL_API = 'http://localhost:3000/api/indicators';

  constructor(private http: HttpClient) {
    this.selectedIndicator = new Indicator();
  }

  postIndicator(indicator: Indicator) {
    return this.http.post(this.URL_API, indicator);
  }

  getIndicators() {
    return this.http.get(this.URL_API);
  }

  putIndicator(indicator: Indicator) {
    return this.http.put(this.URL_API + `/${indicator._id}`, indicator);
  }

  deleteIndicator(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }

}

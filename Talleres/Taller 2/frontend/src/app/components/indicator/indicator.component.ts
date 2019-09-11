import { Component, OnInit } from '@angular/core';

import { IndicatorService } from '../../services/indicator.service';
import { NgForm } from '@angular/forms';
import { Indicator } from '../../models/indicator';

declare var M: any;

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.css'],
  providers: [ IndicatorService ]
})
export class IndicatorComponent implements OnInit {

  constructor(private indicatorService: IndicatorService) { }

  ngOnInit() {
    this.getIndicators();
  }

  addIndicator(form?: NgForm) {
    console.log(form.value);
    if(form.value._id) {
      this.indicatorService.putIndicator(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getIndicators();
          M.toast({html: 'Updated Successfully'});
        });
    } else {
      this.indicatorService.postIndicator(form.value)
      .subscribe(res => {
        this.getIndicators();
        this.resetForm(form);
        M.toast({html: 'Save successfully'});
      });
    }
  }

  getIndicators() {
    this.indicatorService.getIndicators()
      .subscribe(res => {
        this.indicatorService.indicators = res as Indicator[];
      });
  }

  editIndicator(indicator: Indicator) {
    this.indicatorService.selectedIndicator = indicator;
  }

  deleteIndicator(_id: string, form: NgForm) {
    if(confirm('Are you sure you want to delete it?')) {
      this.indicatorService.deleteIndicator(_id)
        .subscribe(res => {
          this.getIndicators();
          this.resetForm(form);
          M.toast({html: 'Deleted Succesfully'});
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.indicatorService.selectedIndicator = new Indicator();
    }
  }
}

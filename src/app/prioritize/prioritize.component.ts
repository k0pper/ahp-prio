import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Comparison } from '../model/Comparison';
import { SurveyService } from '../service/survey-service.service';

@Component({
  selector: 'app-prioritize',
  templateUrl: './prioritize.component.html',
  styleUrls: ['./prioritize.component.scss']
})
export class PrioritizeComponent implements OnInit {
  comparison: Comparison = { requirementA: {name : ""}, requirementB: {name : ""} };

  form = this.fb.group({
    result: ['']
  });

  constructor(private ss: SurveyService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.comparison = this.ss.getRandomUnusedComparison();
  }

  next() {
    console.log(this.form.value);
    this.comparison.result = this.form.value.result;
    console.log(this.comparison);

    // TODO: 
    //    1. Remove Comparison from comparisons array in Service
    //    2. Add Comparison to Comparison Done array in Service
    //    3. Load new Comparison into this component
  }


}

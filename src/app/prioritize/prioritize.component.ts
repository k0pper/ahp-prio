import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    result: ['', Validators.required]
  });

  constructor(private ss: SurveyService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.comparison = this.ss.getRandomUnusedComparison();
    if (!this.comparison) {
      this.router.navigate(['/'])
    }
  }

  next() {
    this.comparison.result = this.form.value.result;
    this.comparison = this.ss.removeAndGetNextRandomComparison(this.comparison);
    this.form.reset();
    if (this.ss.getUnusedComparisons().length == 0) {
      console.log("Done! Result:", this.ss.getUsedComparisons());
      this.router.navigate(['/result']);
      return;
    }
  }

  totalNumberOfComparisons() {
    return this.ss.getUnusedComparisons().length + this.ss.getUsedComparisons().length;
  }

  numberOfUsedComparisons() {
    return this.ss.getUsedComparisons().length;
  }


}

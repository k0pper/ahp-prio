import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { Criteria } from '../model/Criteria';
import { SurveyService } from '../service/survey-service.service';

@Component({
  selector: 'app-criteria-names',
  templateUrl: './criteria-names.component.html',
  styleUrls: ['./criteria-names.component.scss']
})
export class CriteriaNamesComponent implements OnInit {
  sub: Subscription | undefined;
  quantity: number = 0;

  form: FormGroup = this.fb.group({
    items: this.fb.array([ ])
  });


  constructor(private route: ActivatedRoute, private router: Router,
    private fb: FormBuilder, private ss: SurveyService) { }

  get criterias() {
      return this.form.controls["items"] as FormArray;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.quantity = +params['quantity'];
    });
    this.generateForm();
  }


  onCreateSurvey() {
   this.ss.setCriterias(this.criterias.value);
   console.log(this.ss.getCriterias());
   this.router.navigate(["overview"]);
  }

  private generateForm(): void {
      for (let index = 0; index < this.quantity; index++) {
        this.addItem();
      }
  }

  private addItem(): void {
    const criteriaForm = this.fb.group({
      name: [''],
  });
  this.criterias.push(criteriaForm);
  }

  isValid() {
    let isValid = true;
    this.criterias.value.forEach((criteria: Criteria) => {
      if (!criteria.name) isValid = false;
    });
    return isValid;
  }


}

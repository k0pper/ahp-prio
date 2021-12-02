import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Criteria } from '../model/Criteria';
import { SurveyService } from '../service/survey-service.service';

@Component({
  selector: 'app-prioritizing-introduction',
  templateUrl: './prioritizing-introduction.component.html',
  styleUrls: ['./prioritizing-introduction.component.scss']
})
export class PrioritizingIntroduction implements OnInit {
  criterias: Criteria[] = [];

  decodedData: string = "";

  constructor(private route: ActivatedRoute, private router: Router, private ss: SurveyService) { }

  ngOnInit(): void {
    const encoded = this.route.snapshot.paramMap.get('encodedSurvey');
    if (encoded) {
      this.decodedData = atob(encoded);
    }
    this.criterias = JSON.parse(this.decodedData) as Criteria[];
    this.ss.setCriterias(this.criterias);
  }

  onStart() {
    this.ss.generateComparisons();
    this.router.navigate(["/prioritizing"])
  }

}

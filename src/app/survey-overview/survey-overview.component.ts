import { Component, OnInit } from '@angular/core';
import { Criteria } from '../model/Criteria';
import { SurveyService } from '../service/survey-service.service';
import { ClipboardService } from 'ngx-clipboard'


@Component({
  selector: 'app-survey-overview',
  templateUrl: './survey-overview.component.html',
  styleUrls: ['./survey-overview.component.scss']
})
export class SurveyOverviewComponent implements OnInit {
  criterias: Criteria[] = []
  buttonText: string = "Copy Survey Link";

  constructor(private ss: SurveyService, private clipboard: ClipboardService) { }

  ngOnInit(): void {
    this.criterias = this.ss.getCriterias();
  }

  onCopyLink() {
    const encoded: string = btoa(JSON.stringify(this.criterias))
    console.log(encoded);
    console.log(atob(encoded))
    const link = `${location.origin}/survey/${encoded}`
    this.clipboard.copy(link);
    this.buttonText = "Link Copied!";
  }

}



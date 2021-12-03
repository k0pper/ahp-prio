import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SurveyService } from '../service/survey-service.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor(private ss: SurveyService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  onDownloadClick() {
    const data = this.ss.getUsedComparisons();
    console.log(data);
    const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);

    window.open(url);

    const anchor = document.createElement('a');
    anchor.download = "data.json";
    anchor.href = (window.webkitURL || window.URL).createObjectURL(blob);
    anchor.click();
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Criteria } from '../model/Criteria';

@Component({
  selector: 'app-prioritizing',
  templateUrl: './prioritizing.component.html',
  styleUrls: ['./prioritizing.component.scss']
})
export class PrioritizingComponent implements OnInit {
  criterias: Criteria[] = [];

  decodedData: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const encoded = this.route.snapshot.paramMap.get('encodedSurvey');
    if (encoded) {
      this.decodedData = atob(encoded);
    }
    console.log(this.decodedData);

    
  }

}

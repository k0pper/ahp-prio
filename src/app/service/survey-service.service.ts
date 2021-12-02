import { Injectable } from '@angular/core';
import { Criteria } from '../model/Criteria';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  criterias: Criteria[] = []

  constructor() {}

  getCriterias() {
    return this.criterias;
  }

  addCriterias(criterias: Criteria[]): Criteria[] {
    return this.criterias = this.criterias.concat(criterias);
  }
}

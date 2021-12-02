import { Injectable } from '@angular/core';
import { Criteria } from '../model/Criteria';
import { Comparison } from '../model/Comparison';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  criterias: Criteria[] = []

  comparisons: Comparison[] = [];
  comparisonsDone: Comparison[] = [];


  constructor() {}

  getCriterias() {
    return this.criterias;
  }

  setCriterias(criterias: Criteria[]): Criteria[] {
    this.criterias = [];
    return this.criterias = this.criterias.concat(criterias);
  }

  generateComparisons(): Comparison[] {

    // Since you only want pairs, there's no reason
    // to iterate over the last element directly
    for (var i = 0; i < this.criterias.length - 1; i++) {
      // This is where you'll capture that last value
      for (var j = i + 1; j < this.criterias.length; j++) {
        this.comparisons.push({
          requirementA: this.criterias[i], 
          requirementB: this.criterias[j],
        })
      }
    }
    
    console.log(this.comparisons);
    console.log(this.comparisons.length);

    return this.comparisons;
  }
  
  getComparisons(): Comparison[] {
    return this.comparisons;
  }


  getRandomUnusedComparison() {
    return this.comparisons[Math.floor(Math.random() * this.comparisons.length)];
  }

  
}

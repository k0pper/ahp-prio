import { Injectable } from '@angular/core';
import { Criteria } from '../model/Criteria';
import { Comparison } from '../model/Comparison';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  criterias: Criteria[] = []

  unusedComparisons: Comparison[] = [];
  usedComparisons: Comparison[] = [];


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
        this.unusedComparisons.push({
          requirementA: this.criterias[i], 
          requirementB: this.criterias[j],
        })
      }
    }

    // Double Check if number of comparisons is correct
    if (this.criterias.length * (this.criterias.length - 1) / 2 != this.unusedComparisons.length) {
      console.error("Comparisons Array with n criterias should equal the length of n*(n-1)/2");
    } else if (this.criterias.length * (this.criterias.length - 1) / 2 == this.unusedComparisons.length){
      console.info("Generated Comparisons!", this.unusedComparisons, "Length:", this.unusedComparisons.length);
    } else {
      console.error("Something went wrong... Check your Code");
    }
    return this.unusedComparisons;
  }

  /**
     * Removes the comparison from the comparisons array that has been used already and returns random unused one.
     * @param comparison The comparison object that has been used
     * @returns a new comparison that hasn't been used yet
  */
  removeAndGetNextRandomComparison(comparison: Comparison): Comparison {
    console.log("BEFORE");
    console.log(this.unusedComparisons);
    console.log(this.usedComparisons);



    const index = this.unusedComparisons.findIndex((comp) => {
      return comparison.requirementA === comp.requirementA && 
      comparison.requirementB === comp.requirementB;
    });
    this.usedComparisons.push(this.unusedComparisons[index]);
    this.unusedComparisons.splice(index, 1)

    console.log("AFTER");
    console.log(this.unusedComparisons);
    console.log(this.usedComparisons);

    return this.getRandomUnusedComparison();
  }
  
  getUnusedComparisons(): Comparison[] {
    return this.unusedComparisons;
  }

  getUsedComparisons(): Comparison[] {
    return this.usedComparisons;
  }

  getRandomUnusedComparison() {
    return this.unusedComparisons[Math.floor(Math.random() * this.unusedComparisons.length)];
  }



  
}

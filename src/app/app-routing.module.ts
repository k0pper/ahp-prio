import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriteriaNamesComponent } from './criteria-names/criteria-names.component';
import { CriteriaQuantityComponent } from './criteria-quantity/criteria-quantity.component';
import { PrioritizeComponent } from './prioritize/prioritize.component';
import { PrioritizingIntroduction } from './prioritizing-introduction/prioritizing-introduction.component';
import { ResultComponent } from './result/result.component';
import { SurveyOverviewComponent } from './survey-overview/survey-overview.component';

const routes: Routes = [
  {path: "", redirectTo: "quantity", pathMatch: "full"},
  {path: "quantity", component: CriteriaQuantityComponent},
  {path: "criterias", component: CriteriaNamesComponent},
  {path: "overview", component: SurveyOverviewComponent},
  {path: "survey/:encodedSurvey", component: PrioritizingIntroduction},
  {path: "prioritizing", component: PrioritizeComponent},
  {path: "result", component: ResultComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

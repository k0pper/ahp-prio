import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriteriaNamesComponent } from './criteria-names/criteria-names.component';
import { CriteriaQuantityComponent } from './criteria-quantity/criteria-quantity.component';
import { PrioritizingComponent } from './prioritizing/prioritizing.component';
import { SurveyOverviewComponent } from './survey-overview/survey-overview.component';

const routes: Routes = [
  {path: "", redirectTo: "quantity", pathMatch: "full"},
  {path: "quantity", component: CriteriaQuantityComponent},
  {path: "criterias", component: CriteriaNamesComponent},
  {path: "overview", component: SurveyOverviewComponent},
  {path: "prioritizing/:encodedSurvey", component: PrioritizingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

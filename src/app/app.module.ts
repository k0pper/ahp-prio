import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CriteriaQuantityComponent } from './criteria-quantity/criteria-quantity.component';
import { CriteriaNamesComponent } from './criteria-names/criteria-names.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SurveyOverviewComponent } from './survey-overview/survey-overview.component';
import { PrioritizingComponent } from './prioritizing/prioritizing.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CriteriaQuantityComponent,
    CriteriaNamesComponent,
    SurveyOverviewComponent,
    PrioritizingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

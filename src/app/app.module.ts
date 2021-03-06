
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router' ;
import { MatTabsModule, MdTabsModule } from '@angular/material';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http' ;


import { WorkInProgressComponent } from './parent-tab/work-in-progress.component';
import { SubmittedComponent } from './parent-tab/submitted.component';
import { ClosedComponent } from './parent-tab/closed.component';
import { AllStatusComponent } from './parent-tab/all-status.component';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MyDateRangePickerModule } from 'mydaterangepicker';
import { DateComponent } from './date.component';





export const ROUTES = [

  { path: 'welcome', component: AllStatusComponent},
  { path: 'allstatus', component: AllStatusComponent },
  { path: 'work', component: WorkInProgressComponent},
  { path: 'submitted', component: SubmittedComponent},
  { path: 'closed', component: ClosedComponent},
  { path: '', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({

  declarations: [
    AppComponent,
    AllStatusComponent,
    WorkInProgressComponent,
    SubmittedComponent,
    ClosedComponent,
    DateComponent
  ],
  imports: [

    BrowserModule,
    MdTabsModule,
    BrowserModule,
    FormsModule,
    Ng2SmartTableModule,
    HttpClientModule,
    MyDateRangePickerModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }

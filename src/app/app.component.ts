import { Observable} from 'rxjs/Observable';
import { Component, NgModule} from '@angular/core' ;
import { BrowserModule} from '@angular/platform-browser' ;
import { RouterModule, Router} from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DataService } from './parent-tab/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {

  tabs: any;
  routeLinks: any[];
  asyncTabs: Observable<any>;
  activeLinkIndex = 0;
  constructor(private router: Router) {
    this.routeLinks = [
    {label: 'All Status', link: 'allstatus'},
    {label: 'Work in Progress', link: 'work'},
    {label: 'Submitted', link: 'submitted'},
    {label: 'Closed', link: 'closed'}];

    this.activeLinkIndex =
        this.routeLinks.indexOf(this.routeLinks.find(tab => router.url.indexOf(tab.link) != -1));
  }

}

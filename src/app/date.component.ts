

import { Component, OnInit, Input } from '@angular/core';
import { IMyDrpOptions, IMyDateRangeModel } from 'mydaterangepicker';

@Component({
    selector: 'app-datepicker',
    templateUrl: 'date-component.html',
    styleUrls: [ 'date-component.css']
})

export class DateComponent implements OnInit {
    @Input() beginDate: string;
    @Input() endDate: string;
    private myDateRangePickerOptions: IMyDrpOptions = {
        dateFormat: 'dd.mm.yyyy',
        showSelectDateText: true
    };
    constructor() { }

    ngOnInit() { }
    onDateRangeChanged(event: IMyDateRangeModel) {
         this.beginDate = event.beginDate.day.toString() + '.' + event.beginDate.month.toString() + '.' +  event.beginDate.year.toString();
         this.endDate = event.endDate.day.toString() + '.' + event.endDate.month.toString() + '.' + event.endDate.year.toString();
        // this.beginDate = event.beginDate.toString();
        // this.endDate = event.endDate.toString();
        console.log('Selected Begin Date :' + this.beginDate);
        console.log('Selected End Date: ' + this.endDate);
       // console.log('onDateRangeChanged(): Begin date: ', event.beginDate, ' End date: ', event.endDate);
       // console.log('onDateRangeChanged(): Formatted: ', event.formatted);
       // console.log('onDateRangeChanged(): BeginEpoc timestamp: ', event.beginEpoc, ' - endEpoc timestamp: ', event.endEpoc);
    }
}

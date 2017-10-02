import { Component, OnInit } from '@angular/core';
import { ITableData } from './model';
import { DataService } from './data.service';
import { LocalDataSource } from 'ng2-smart-table';
import { IMyDrpOptions } from 'mydaterangepicker';

@Component({
  selector: 'app-closed',
  templateUrl: './closed.component.html',
  styleUrls: ['./closed.component.css']
})

export class ClosedComponent implements OnInit {
  private myDateRangePickerOptions: IMyDrpOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
};
data: ITableData[];
filterdData: ITableData[];
tempData: ITableData[];
errorMessage: string;
sortedData: ITableData[];
// "type": "Type 1",
// "name": "Name 1",
// "date": "Date 1",
// "owner": "Owner 1",
// "status": "Work in progress"
settings = {
    actions: false,
    columns: {
      type: {
        title: 'Type',
        filter: false
      },
      name: {
        title: 'Name',
        filter: false
      },
      date: {
        title: 'Date',
        filter: false
      },
      owner: {
        title: 'Owner',
        filter: false
      },
      status: {
          title: 'Status',
          filter: false
      }
    }
  };
  ng2TableData: ITableData[] = [];
  source: LocalDataSource;
    constructor(private tableData: DataService) {
    this.source = new LocalDataSource(this.sortedData);
}

ngOnInit(): void {
    this.tableData.getTableData()
    .subscribe(
    data => this.data = data ,
    error => this.errorMessage = <any>error);
    this.tableData.getData().then(tasklist => {
      this.filterdData = tasklist;
      this.tempData = this.filterdData;
      this.sortedData = this.data.filter( task => task.status === 'Closed' );
      this.source = new LocalDataSource(this.sortedData);
    } );
}

}

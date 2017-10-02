import { Component, OnInit } from '@angular/core';
import {IMyDrpOptions} from 'mydaterangepicker';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';


import { ITableData } from './model';
import { DataService } from './data.service';
@Component({
  selector: 'app-all-status',
  templateUrl: './all-status.component.html',
  styleUrls: ['./all-status.component.css']
})
export class AllStatusComponent implements OnInit {

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
      this.sortedData = this.data;
      this.source = new LocalDataSource(this.sortedData);
      console.log('Sorted Data' + this.sortedData);

    } );
}

}

import { Component, OnInit } from '@angular/core';
import { ITableData } from './model';
import { DataService } from './data.service';

@Component({
  selector: 'app-closed',
  templateUrl: './closed.component.html',
  styleUrls: ['./closed.component.css']
})

export class ClosedComponent implements OnInit {
  data: ITableData[];
  filterdData: ITableData[];
  tempData: ITableData[];
  errorMessage: string;
  sortedData: ITableData[];
  constructor(private tableData: DataService) {

  }
//   // this.vecService.getData().then(taskList => {
//   //   this.datasource = taskList;
//   //   this.taskList = this.datasource;// Storing data into my task list array
//   //   this.sortedList = this.taskList.filter(
//   //   task => task.status ==='Submitted');

// });
  ngOnInit(): void {
    this.tableData.getTableData()
    .subscribe(
    data => this.data = data ,
    error => this.errorMessage = <any>error);

    this.tableData.getData().then(tasklist => {
      this.filterdData = tasklist;
      this.tempData = this.filterdData;
      this.sortedData = this.data.filter( task => task.status === 'Closed' );
    } );

  }

}

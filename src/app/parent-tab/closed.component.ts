import { Component, OnInit } from '@angular/core';
import { ITableData } from './model';
import { DataService } from './data.service';

@Component({
  selector: 'app-closed',
  templateUrl: './closed.component.html',
  styleUrls: ['./closed.component.css']
})

export class ClosedComponent implements OnInit {

  data: ITableData[] = [];
  filteredData: ITableData[] = [];
  errorMessage: string;
  tempData1: ITableData[] = [];
  filterdString: 'closed';
  constructor(private tableData: DataService) {

  }

  get listFilter(): ITableData {
    return;
  }
  set listFilter(value: ITableData) {
    this.filteredData = this.data;
  }

  ngOnInit(): void {

    this.someFunction();
  }
  someFunction() {
  //   let tempData = [];
  //   let x;
  //   let temp = {};
  //   let y = Object.values(this.data);
  //   for (let i in y) {
  //       x = y[i].status;
  //       if (x === 'Closed')
  //       {
  //         temp = this.data[i];
  //         tempData[i] = temp;
  //        } 
  //   }
  //   this.tableData.getTableData().subscribe(
  //     //data => this.tempData1 = tempData,
  //     error => this.errorMessage = <any>error
  //   );
    
    
}
}

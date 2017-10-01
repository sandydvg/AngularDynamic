import { Component, OnInit } from '@angular/core';
import { ITableData } from './model';
import { DataService } from './data.service';
@Component({
  selector: 'app-all-status',
  templateUrl: './all-status.component.html',
  styleUrls: ['./all-status.component.css']
})
export class AllStatusComponent implements OnInit {


  data: ITableData[] = [];
  errorMessage: string;

  constructor(private tableData: DataService) {

  }

  ngOnInit(): void {
    this.tableData.getTableData()
      .subscribe(
      data => this.data = data,
      error => this.errorMessage = <any>error);
  }


}

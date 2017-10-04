import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { ITableData } from './model';

@Injectable()
export class DataService {
    beginDate: string;
    endDate: string;
    private _data_url= './api/data/data.json';
    constructor(private _http: HttpClient) {}

    setInputData(beginDate: string, endDate: string) {
        this.beginDate = beginDate;
        this.endDate = endDate;
    }

    getTableData(): Observable<ITableData[]> {

       return this._http.get < ITableData[]>(this._data_url)
       .do(data => console.log('All Data' + JSON.stringify(data))
       )
       .catch(this.handleError );

    }
    // getdata(): ITableData[] {
    //     // return this.http.get('../app/common/task.json')
    //     // .toPromise()
    //     // .then(res => <Task[]> res.json().data)
    //     // .then(data => { return data; });
    //     return this._http.get(this._data_url)
    //     .toPromise()
    //     .then(res => <ITableData[]> res.JSON().data)
    //     .then(data => {return data; });;
    // }

    getData(): Promise<ITableData[]> {
        return this._http.get(this._data_url)
        .toPromise()
        .then(res => <ITableData[]>res)
        .then(data => data );
    }
   private handleError(err: HttpErrorResponse ) {
       console.log(err.message);
       return Observable.throw(err.message);

   }
}

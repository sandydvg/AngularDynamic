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

    private _data_url= './api/data/data.json';
    constructor(private _http: HttpClient) {}

    getTableData(): Observable<ITableData[]> {

       return this._http.get < ITableData[]>(this._data_url)
       .do(data => console.log('All Data' + JSON.stringify(data))
       )
       .catch(this.handleError );

    }
   private handleError(err: HttpErrorResponse ) {
       console.log(err.message);
       return Observable.throw(err.message);

   }
}

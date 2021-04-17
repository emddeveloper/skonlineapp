import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { recordsInterface, lastRecordInterface } from './skonlineinterface';
import { pluck } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class SkonlineService {
  baseApiUrl = 'https://skonlineapi.herokuapp.com';
  constructor(private http: HttpClient) {}
  public getData() {
    return this.http.get<recordsInterface>(this.baseApiUrl + '/records');
  }
  public updateRecord(params: any) {
    const headers = {
      Authorization: 'Bearer my-token',
      'My-Custom-Header': 'foobar',
    };
    return this.http.post(this.baseApiUrl + '/addrecord', params, {
      headers,
    });
  }
  //get the latest record
  public getLatestRecord() {
    return this.http.get<lastRecordInterface>(this.baseApiUrl + '/latest');
  }
  //get the latest record and pluck the profit one for example to use the pluck
  public getTheLatestProfit() {
    return this.http.get(this.baseApiUrl + '/latest');
  }
}

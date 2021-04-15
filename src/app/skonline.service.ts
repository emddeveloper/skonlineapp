import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class SkonlineService {
  baseApiUrl = 'https://skonlineapi.herokuapp.com';
  constructor(private http: HttpClient) {}
  public getData() {
    return this.http.get(this.baseApiUrl + '/records');
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
  public getLatestRecord() {
    return this.http.get(this.baseApiUrl + '/latest');
  }
}

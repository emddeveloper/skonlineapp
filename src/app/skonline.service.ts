import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class SkonlineService {
  constructor(private http: HttpClient) {}
  public getData() {
    return this.http.get(
      'https://6073ee79066e7e0017e788f5.mockapi.io/getrecords/getrecords'
    );
  }
  public updateRecord(params: any) {
    return this.http.post(
      'https://6073ee79066e7e0017e788f5.mockapi.io/getrecords/getrecords',
      params
    );
  }
  public getLatestRecord() {
    return this.http.get(
      'https://6073ee79066e7e0017e788f5.mockapi.io/getrecords/getrecords/1'
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { SkonlineService } from '../../skonline.service';
@Component({
  selector: 'app-update-home',
  templateUrl: './update-home.component.html',
  styleUrls: ['./update-home.component.css'],
})
export class UpdateHomeComponent implements OnInit {
  balance = 1000;
  constructor(private skonline: SkonlineService) {}
  latestData = {
    cash: '',
    jio: '',
    bank: '',
    credit: '',
    timestamp: {},
  };
  getLatestRecord() {
    this.skonline.getLatestRecord().subscribe((response: any) => {
      this.latestData = response;
    });
  }
  updateRecordSubmit() {
    this.latestData.timestamp = new Date().getTime();
    this.skonline.updateRecord(this.latestData).subscribe((Response) => {
      console.log('submit');
    });
  }
  ngOnInit(): void {
    this.getLatestRecord();
  }
}

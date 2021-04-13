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
  loader = false;
  getLatestRecord() {
    this.skonline.getLatestRecord().subscribe((response: any) => {
      this.latestData = response;
    });
  }
  updateRecordSubmit() {
    this.loader = true;
    this.latestData.timestamp = new Date().getTime();
    this.skonline.updateRecord(this.latestData).subscribe((Response) => {
      console.log('submit');
      this.loader = false;
    });
  }
  ngOnInit(): void {
    this.getLatestRecord();
  }
}

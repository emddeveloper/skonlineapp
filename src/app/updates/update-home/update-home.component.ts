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
    cash: 0,
    jio: 0,
    bank: 0,
    credit: 0,
    profitref: 0,
    profit: 0,
    profitrefdate: {},
    timestamp: {},
    total: 0,
  };
  loader = false;
  getLatestRecord() {
    this.skonline.getLatestRecord().subscribe((response: any) => {
      this.latestData = response[0];
    });
  }
  updateRecordSubmit() {
    this.loader = true;
    this.latestData.total = this.getTotal();
    this.latestData.profit = this.getProfit();
    this.latestData.timestamp = new Date().getTime();

    this.skonline.updateRecord(this.latestData).subscribe((Response) => {
      console.log('submit');
      this.loader = false;
    });
  }
  getProfitrefdate() {
    this.latestData.profitrefdate = new Date().getTime();
  }
  getTotal() {
    return (
      this.latestData.cash +
      this.latestData.jio +
      this.latestData.bank +
      this.latestData.credit
    );
  }
  getProfit() {
    return this.latestData.total - this.latestData.profitref;
  }
  ngOnInit(): void {
    this.getLatestRecord();
  }
}

import { Component, OnInit } from '@angular/core';
import { SkonlineService } from '../../skonline.service';
@Component({
  selector: 'app-profit-home',
  templateUrl: './profit-home.component.html',
  styleUrls: ['./profit-home.component.css'],
})
export class ProfitHomeComponent implements OnInit {
  profit: any;
  constructor(private skonline: SkonlineService) {}

  ngOnInit(): void {
    this.skonline.getTheLatestProfit().subscribe((response: any) => {
      this.profit = response[0];
      console.log(response);
    });
  }
}

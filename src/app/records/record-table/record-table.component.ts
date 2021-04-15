import { Component, OnInit } from '@angular/core';
import { SkonlineService } from 'src/app/skonline.service';

@Component({
  selector: 'app-record-table',
  templateUrl: './record-table.component.html',
  styleUrls: ['./record-table.component.css'],
})
export class RecordTableComponent implements OnInit {
  constructor(private skonline: SkonlineService) {}
  displayedColumns: string[] = [
    'Cash',
    'Jio',
    'Bank',
    'Credits',
    'Total',
    'Profits',
    'Timestamp',
  ];
  dataSource: any;
  ngOnInit(): void {
    this.skonline.getData().subscribe((response) => {
      this.dataSource = response;
    });
  }
}

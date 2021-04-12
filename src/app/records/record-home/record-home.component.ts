import { Component, OnInit } from '@angular/core';
import { SkonlineService } from '../../skonline.service';
@Component({
  selector: 'app-record-home',
  templateUrl: './record-home.component.html',
  styleUrls: ['./record-home.component.css'],
})
export class RecordHomeComponent implements OnInit {
  constructor(private skonline: SkonlineService) {}
  records: any;
  ngOnInit(): void {
    this.skonline.getData().subscribe((response) => {
      this.records = response;
    });
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecordsRoutingModule } from './records-routing.module';
import { MatSliderModule } from '@angular/material/slider';
import { RecordTableComponent } from './record-table/record-table.component';
import { MatTableModule } from '@angular/material/table';
@NgModule({
  declarations: [RecordTableComponent],
  imports: [
    CommonModule,
    RecordsRoutingModule,
    MatSliderModule,
    MatTableModule,
  ],
})
export class RecordsModule {}

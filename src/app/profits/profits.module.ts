import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfitsRoutingModule } from './profits-routing.module';
import { ProfitHomeComponent } from './profit-home/profit-home.component';


@NgModule({
  declarations: [
    ProfitHomeComponent
  ],
  imports: [
    CommonModule,
    ProfitsRoutingModule
  ]
})
export class ProfitsModule { }

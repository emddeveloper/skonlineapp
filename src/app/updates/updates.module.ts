import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdatesRoutingModule } from './updates-routing.module';
import { UpdateHomeComponent } from './update-home/update-home.component';


@NgModule({
  declarations: [
    UpdateHomeComponent
  ],
  imports: [
    CommonModule,
    UpdatesRoutingModule
  ]
})
export class UpdatesModule { }

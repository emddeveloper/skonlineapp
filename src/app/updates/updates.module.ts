import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdatesRoutingModule } from './updates-routing.module';
import { UpdateHomeComponent } from './update-home/update-home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UpdateHomeComponent],
  imports: [CommonModule, UpdatesRoutingModule, FormsModule],
})
export class UpdatesModule {}

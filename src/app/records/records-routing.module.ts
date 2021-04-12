import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecordHomeComponent } from './record-home/record-home.component';

const routes: Routes = [
  {
    path: '',
    component: RecordHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecordsRoutingModule {}

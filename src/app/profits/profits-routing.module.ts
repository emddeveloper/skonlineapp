import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfitHomeComponent } from './profit-home/profit-home.component';

const routes: Routes = [
  {
    path: '',
    component: ProfitHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfitsRoutingModule {}

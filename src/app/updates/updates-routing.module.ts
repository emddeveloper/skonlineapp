import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateHomeComponent } from './update-home/update-home.component';

const routes: Routes = [
  {
    path: '',
    component: UpdateHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatesRoutingModule {}

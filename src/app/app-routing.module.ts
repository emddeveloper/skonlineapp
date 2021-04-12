import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./records/records.module').then((m) => m.RecordsModule),
  },
  {
    path: 'updates',
    loadChildren: () =>
      import('./updates/updates.module').then((m) => m.UpdatesModule),
  },
  {
    path: 'profits',
    loadChildren: () =>
      import('./profits/profits.module').then((m) => m.ProfitsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContinentsListComponent } from './modules/continents-list/continents-list.component';

const routes: Routes = [
  {
    path: '',
    component: ContinentsListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

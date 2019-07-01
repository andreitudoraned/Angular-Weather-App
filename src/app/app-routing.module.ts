import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { WeeklyComponent } from './weekly/weekly.component';

const routes: Routes = [
  {
    path: 'weekly',
    component: WeeklyComponent
  },
  {
    path: 'detail:daysFromToday/:woeid',
    component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkInProgressComponent } from '@common/work-in-progress/work-in-progress.component';

import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'films',
    loadChildren: () =>
      import('./films/films.module').then((m) => m.FilmsModule),
  },
  {
    path: 'people',
    loadChildren: () =>
      import('./people/people.module').then((m) => m.PeopleModule),
  },
  { path: 'planets', component: WorkInProgressComponent },
  { path: 'species', component: WorkInProgressComponent },
  { path: 'starships', component: WorkInProgressComponent },
  { path: 'vehicles', component: WorkInProgressComponent },
  { path: '', redirectTo: '/people', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

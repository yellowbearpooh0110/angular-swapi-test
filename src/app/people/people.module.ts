import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from '@common/header/header.component';
import { MainComponent } from './main/main.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'clientsearch',
    component: DetailComponent,
  },
];

@NgModule({
  declarations: [HeaderComponent, MainComponent, DetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeopleModule {}

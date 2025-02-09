import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgramPage } from './program.page';
import { ViewProgramComponent } from './pages/view/view.component';

const routes: Routes = [
  {
    path: '',
    component: ProgramPage
  },
  {
    path: 'view/:id',
    component: ViewProgramComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgramPageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgramPageRoutingModule } from './program-routing.module';

import { ProgramPage } from './program.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewProgramComponent } from './pages/view/view.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgramPageRoutingModule,
    SharedModule
  ],
  declarations: [
    ProgramPage,
    ViewProgramComponent
  ]
})
export class ProgramPageModule {}

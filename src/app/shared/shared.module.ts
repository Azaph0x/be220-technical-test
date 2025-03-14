import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicMaskDirective } from './directives/ionic-mask.directive';
import { MenuSplitContentComponent } from './layout/menu-split-content/menu-split-content.component';
import { HeaderComponent } from './components/header/header.component';
import { CardProgramComponent } from './components/card-program/card-program.component';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ],
  declarations: [
    CustomInputComponent,
    IonicMaskDirective,
    MenuSplitContentComponent,
    HeaderComponent,
    CardProgramComponent
  ],
  exports: [
    CustomInputComponent,
    IonicMaskDirective,
    MenuSplitContentComponent,
    HeaderComponent,
    CardProgramComponent
  ]
})
export class SharedModule { }

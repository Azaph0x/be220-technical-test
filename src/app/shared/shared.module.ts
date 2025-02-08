import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicMaskDirective } from './directives/ionic-mask.directive';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ],
  declarations: [
    CustomInputComponent,
    IonicMaskDirective
  ],
  exports: [
    CustomInputComponent,
    IonicMaskDirective
  ]
})
export class SharedModule { }

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { HeaderComponent } from './components/header/header.component';
import { SectionPersonalOnlineComponent } from './components/section-personal-online/section-personal-online.component';
import { SwiperDirective } from 'src/app/shared/directives/swiper.directive';
import { SectionProgramComponent } from './components/section-program/section-program.component';
import { SectionContentsComponent } from './components/section-contents/section-contents.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SwiperDirective
  ],
  declarations: [
    HomePage,
    HeaderComponent,
    SectionPersonalOnlineComponent,
    SectionProgramComponent,
    SectionContentsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule {}

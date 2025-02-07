import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'section-contents',
  templateUrl: './section-contents.component.html',
  styleUrls: ['./section-contents.component.scss'],
  standalone: false
})
export class SectionContentsComponent  implements OnInit {

  constructor() { }

  swiperConfig: SwiperOptions = {
    breakpoints: {
      380: {
        slidesPerView: 1.40,
        spaceBetween: 10,
        allowSlideNext: true,
        allowTouchMove: true,
      },
      300: {
        slidesPerView: 1.3,
        spaceBetween: 10,
        allowSlideNext: true,
        allowTouchMove: true,
      },
    }
  }

  ngOnInit() {}


}

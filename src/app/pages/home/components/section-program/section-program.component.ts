import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'section-program',
  templateUrl: './section-program.component.html',
  styleUrls: ['./section-program.component.scss'],
  standalone: false
})
export class SectionProgramComponent  implements OnInit {

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

  cards: any = [
    {
      title: 'levamento de peso',
      isActive: true,
      image: 'assets/card.jpeg'
    },
    {
      title: 'yoga experience',
      isActive: false,
      image: 'assets/card.jpeg'
    }
   ]

   getImage(item: any) {
    let url = `url('${item.image}') center/cover no-repeat`;
    if(!item.isActive) url += `, rgba(0, 0, 0, 0.6)`;

    return url;
   }

}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
// import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'section-personal-online',
  templateUrl: './section-personal-online.component.html',
  styleUrls: ['./section-personal-online.component.scss'],
  standalone: false
})
export class SectionPersonalOnlineComponent implements OnInit {

  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;

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

 cards: any = [
  {
    title: 'yoga experience',
  },
  {
    title: 'yoga experience',
  }
 ]

  constructor() {

  }

  ngOnInit() {
    // console.log(this.swiper.nativeElement)
    // this.swiper.nativeElement.initialize();
  }

}

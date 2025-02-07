import { AfterViewInit, Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

@Directive({
  selector: '[appSwiper]'
})
export class SwiperDirective implements AfterViewInit, OnInit, OnDestroy {

  @Input() config?: SwiperOptions;

  constructor(private el: ElementRef<SwiperContainer>) { }

  ngAfterViewInit(): void {
    console.log('swiper started', this.el.nativeElement.init)
    if(this.el.nativeElement) {
      console.log(this.el)
      this.el.nativeElement.initialize();
      Object.assign(this.el.nativeElement, this.config);
    }
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.el.nativeElement.remove();
  }
}

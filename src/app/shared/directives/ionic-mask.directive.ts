import { DOCUMENT } from '@angular/common';
import { Directive, Inject } from '@angular/core';
import { NgxMaskConfig ,NgxMaskDirective, NgxMaskService, NGX_MASK_CONFIG, provideNgxMask } from 'ngx-mask';

@Directive({
  selector: 'ion-input[mask]',
  providers: [NgxMaskDirective, provideNgxMask()],
  standalone: false
})
export class IonicMaskDirective extends NgxMaskDirective {
  constructor(
    @Inject(DOCUMENT) protected documente: any,
    @Inject(NGX_MASK_CONFIG) protected config: NgxMaskConfig,
    protected maskService: NgxMaskService
  ) {
    super()
    // super(documente,config, maskService);
  }
}

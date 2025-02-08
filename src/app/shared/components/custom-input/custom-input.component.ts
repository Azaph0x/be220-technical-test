import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import { FormControl, NgControl } from '@angular/forms';

@Component({
  selector: 'custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  standalone: false
})
export class CustomInputComponent  implements OnInit {

  @Input() placeholder!: string;
  @Input() controlForm!: FormControl;
  @Input() label!: string;
  @Input() type: 'password' | 'email' | 'text' = "text";
  @Input() mask!: string;

  constructor() { }

  ngOnInit() {}

}

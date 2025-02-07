import { Component, OnInit } from '@angular/core';
import { LevelColor, Levels } from 'src/app/models/levels.model';

@Component({
  selector: 'home-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false
})
export class HeaderComponent  implements OnInit {

  levelColor: string = LevelColor[Levels.ROXO];
  constructor() { }

  ngOnInit() {}

}

import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LevelColor, LevelName, Levels } from 'src/app/models/levels.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'home-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false
})
export class HeaderComponent implements OnInit, OnChanges {

  levelColor: string = LevelColor[Levels.ROXO];
  levelName: string = LevelName[Levels.ROXO];
  @Input() loading!: boolean;
  @Input() userData!: User;
  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
    if(this.userData) {
      this.levelColor = LevelColor[this.userData.level]
      this.levelName = LevelName[this.userData.level];
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.userData) {
      this.levelColor = LevelColor[this.userData.level]
      this.levelName = LevelName[this.userData.level];
    }
  }

}

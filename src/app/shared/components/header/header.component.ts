import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'usina-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false
})
export class HeaderComponent  implements OnInit {

  @Input({ required: true }) title!: string;
  @Input() routeBack!: string[];

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {}

  back() {
    if(this.routeBack) {
      this.navCtrl.navigateForward(this.routeBack)
      return;
    }
    this.navCtrl.pop();
  }
}

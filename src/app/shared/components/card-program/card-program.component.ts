import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TrainingProgram, TrainingProgramProgress } from 'src/app/models/training-program.model';

@Component({
  selector: 'card-program',
  templateUrl: './card-program.component.html',
  styleUrls: ['./card-program.component.scss'],
  standalone: false
})
export class CardProgramComponent  implements OnInit {

  @Input({ required: true}) item!: TrainingProgram;
  @Input({ required: true}) progresses!: TrainingProgramProgress[];

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {}

  getImage(item: TrainingProgram) {
    let url = `url('${item.image}') center/cover no-repeat`;
    if(!item.activated) url += `, rgba(0, 0, 0, 0.6)`;

    return url;
  }

  view() {
    this.navCtrl.navigateForward(['program', 'view', this.item.uid])
  }

  isViewed(item: TrainingProgram) {
    return !!this.progresses.find(p => p.trainingProgramUid == item.uid)
  }
}

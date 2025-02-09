import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { concat, tap } from 'rxjs';
import { TrainingProgram, TrainingProgramProgress } from 'src/app/models/training-program.model';
import { TrainingProgramService } from 'src/app/services/training_program/training-program.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.page.html',
  styleUrls: ['./program.page.scss'],
  standalone: false
})
export class ProgramPage implements OnInit {

  constructor(
    private trainingProgramService: TrainingProgramService,
    private navCtrl: NavController
  ) { }

  programs: TrainingProgram[] = [];
  programsProgress: TrainingProgramProgress[] = [];

  ngOnInit() {
    concat(
      this.loadPrograms(),
      this.loadProgresses()
    ).subscribe()

  }

  loadProgresses() {
    return this.trainingProgramService.getUserProgressPrograms().pipe(
      tap((r) => this.programsProgress = r)
    )
  }

  loadPrograms() {
    return this.trainingProgramService.getPrograms().pipe(
      tap((r) => {
        this.programs = r;
      })
    )
  }

  getImage(item: TrainingProgram) {
    let url = `url('${item.image}') center/cover no-repeat`;
    if(!item.activated) url += `, rgba(0, 0, 0, 0.6)`;

    return url;
  }

  isViewed(item: TrainingProgram) {
    return !!this.programsProgress.find(p => p.trainingProgramUid == item.uid)
  }

}

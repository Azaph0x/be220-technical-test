import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { catchError, finalize, tap, throwError } from 'rxjs';
import { TrainingProgram, WorkoutDay } from 'src/app/models/training-program.model';
import { LoadingService } from 'src/app/services/loading.service';
import { TrainingProgramService } from 'src/app/services/training_program/training-program.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  standalone: false
})
export class ViewProgramComponent  implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private trainingProgramService: TrainingProgramService,
    private navCtrl: NavController,
    private loadingService: LoadingService
  ) { }

  loading: boolean = true;
  workout_days: WorkoutDay[] = [];
  program!: TrainingProgram;


  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    if(id) {
      this.loadProgram(id);
    } else {
      this.navCtrl.navigateRoot(['home']);
    }
  }

  loadProgram(id: string) {
    this.trainingProgramService.getProgram(id).pipe(
      catchError((err) => {
        this.navCtrl.navigateRoot(['home']);
        return throwError(err);
      }),
      tap((r) => {
        console.log(r);
        this.program = r;
        this.workout_days = r.workout_days
      }),
      finalize(() => { this.loading = false})
    ).subscribe()
  }

  initProgram() {
    this.trainingProgramService.initUserProgressProgram(this.program.uid).pipe(
    ).subscribe()
  }

}

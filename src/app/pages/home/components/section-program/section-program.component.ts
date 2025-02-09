import { Component, OnInit } from '@angular/core';
import { concat, finalize, tap } from 'rxjs';
import { TrainingProgram, TrainingProgramProgress } from 'src/app/models/training-program.model';
import { TrainingProgramService } from 'src/app/services/training_program/training-program.service';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'section-program',
  templateUrl: './section-program.component.html',
  styleUrls: ['./section-program.component.scss'],
  standalone: false
})
export class SectionProgramComponent  implements OnInit {

  constructor(
    private trainingProgramService: TrainingProgramService
  ) { }

  loading: boolean = true;

  programs: TrainingProgram[] = [];
  programsProgress: TrainingProgramProgress[] = [];

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

  initViewed(item: TrainingProgram) {
    if(this.isViewed(item)) return;
    this.trainingProgramService.initUserProgressProgram(item.uid).pipe(
      tap(() => this.loadProgresses().subscribe())
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
        this.loading = false;
      })
    )
  }
  ngOnInit() {
    concat(
      this.loadPrograms(),
      this.loadProgresses()
    ).pipe(
      finalize(() => this.loading = false)
    ).subscribe()

    this.trainingProgramService.getUserProgressPrograms().pipe(tap((r) => console.log(r))).subscribe()
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

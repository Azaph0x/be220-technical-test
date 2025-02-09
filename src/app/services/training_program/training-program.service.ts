import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TrainingProgram, TrainingProgramProgress } from 'src/app/models/training-program.model';

export abstract class TrainingProgramService {

  abstract getPrograms(): Observable<TrainingProgram[]>;

  abstract getProgram(uid: string): Observable<TrainingProgram>;
  abstract getUserProgressPrograms(): Observable<TrainingProgramProgress[]>;
  abstract initUserProgressProgram(uid: string): Observable<any>;

}

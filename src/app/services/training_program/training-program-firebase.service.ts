import { Injectable } from '@angular/core';
import { catchError, from, map, Observable, of, throwError } from 'rxjs';
import { TrainingProgram, TrainingProgramProgress } from 'src/app/models/training-program.model';
import { TrainingProgramService } from './training-program.service';
import { collection, doc, Firestore, getDocs, setDoc } from '@angular/fire/firestore';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../user/user.service';
import { getDoc } from 'firebase/firestore';
import { ToastService } from '../toast.service';

@Injectable()
export class TrainingProgramFirebaseService extends TrainingProgramService {

  constructor(
    private firestore: Firestore,
    private userService: UserService,
    private toastService: ToastService
  ) { super(); }

  getPrograms(): Observable<TrainingProgram[]> {
    return from(getDocs(collection(this.firestore, "trainingPrograms"))).pipe(
      map((r) => {
        const formated: any = r.docs.map((d) => {
          return {
            ...d.data(),
            uid: d.id
          }
        })
        return formated;
      })
    )
  }

  getProgram(uid: string): Observable<TrainingProgram> {
    const uidUser = this.userService.getUserData()!.userId!;

    const docRef = doc(this.firestore, `trainingPrograms/${uid}`);

    return from(getDoc(docRef)).pipe(
      map((r) => {
        if(r.exists()) {
          return {
            ...r.data(),
            uid: r.id
          } as TrainingProgram;
        }
        throw new Error('Programa não encontrado');
      }),
      catchError((err) => {
        this.toastService.create('Ops, ocorreu um erro ao carregar o programa de treinamento')
        return throwError(err);
      })
    )
  }

  getUserProgressPrograms(): Observable<TrainingProgramProgress[]> {
    const uidUser = this.userService.getUserData()!.userId!;
    const userRef = doc(this.firestore, `users`, uidUser);
    return from(getDocs(collection(userRef, 'programsProgress'))).pipe(
      map((doc) => {
        const data = doc.docs.map((r) => r.data());
        return data as TrainingProgramProgress[];
      })
    )
  }

  initUserProgressProgram(uid: string): Observable<any> {
    const uidUser = this.userService.getUserData()!.userId!;
    const programsCollection = collection(this.firestore, `users/${uidUser}/programsProgress`);

    const programRef = doc(programsCollection, uid);

    return from(setDoc(programRef, {
      trainingProgramUid: uid,
      userId: uidUser,
      createdAt: new Date().toISOString(),
    }, { merge: true }))
  }


}

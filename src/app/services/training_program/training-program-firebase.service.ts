import { Injectable } from '@angular/core';
import { from, map, Observable, of } from 'rxjs';
import { TrainingProgram, TrainingProgramProgress } from 'src/app/models/training-program.model';
import { TrainingProgramService } from './training-program.service';
import { collection, doc, Firestore, getDocs, setDoc } from '@angular/fire/firestore';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../user/user.service';

@Injectable()
export class TrainingProgramFirebaseService extends TrainingProgramService {

  constructor(
    private firestore: Firestore,
    private userService: UserService
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
    const userRef = doc(this.firestore, `users/${uidUser}/programsProgress/${uid}`);
    const programsCollection = collection(this.firestore, `users/${uidUser}/programsProgress`);

    const programRef = doc(programsCollection, uid);

    return from(setDoc(programRef, {
      trainingProgramUid: uid,
      userId: uidUser,
      createdAt: new Date().toISOString(),
    }, { merge: true }))
  }


}

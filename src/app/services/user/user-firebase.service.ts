import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { UserService } from './user.service';
import { catchError, from, map, Observable, throwError } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { doc, getDoc } from 'firebase/firestore';
import { Auth } from '@angular/fire/auth';
import { ToastService } from '../toast.service';

@Injectable()
export class UserFirebaseService extends UserService {

  constructor(
    private fireStore: Firestore,
    private auth: Auth,
    private toastService: ToastService
  ) { super(); }

  override getUser(): Observable<User> {
      const docRef = doc(this.fireStore, 'users', this.auth.currentUser?.uid!);

      return from(getDoc(docRef)).pipe(
        map((r) => {
          if(r.exists()) {
            return r.data() as User;
          } else {
            throw new Error('Usuario não encontrado')
          }
        }),
        catchError((err) => {
          this.toastService.create('Ops, erro ao carregar os dados do usuario');
          return throwError(err);
        })
      )
  }

}

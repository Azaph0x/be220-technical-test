import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from './auth.service';
import { catchError, finalize, from, Observable, of, tap, throwError } from 'rxjs';
import { LoadingService } from '../loading.service';
import { ToastService } from '../toast.service';

@Injectable()
export class AuthFirebaseService extends AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private loadingService: LoadingService,
    private toastService: ToastService,
  ) { super(); }

  login(email: string, password: string): Observable<any> {
    this.loadingService.show();

    return from(
      this.afAuth.signInWithEmailAndPassword(email, password),
    ).pipe(
      tap((r) => console.log(r)),
      finalize(() => this.loadingService.dismiss())
    )
  }

  register(email: string, password: string): Observable<any> {
    this.loadingService.show();

    return from(this.afAuth.createUserWithEmailAndPassword(email, password)).pipe(
      catchError((e) => {
        if(e.code === 'auth/email-already-in-use') {
          this.toastService.create('Ops..., o e-mail está em uso.')
        }
        return throwError(e);
      }),
      tap((r) => console.log(r)),
      finalize(() => this.loadingService.dismiss())
    )
  }
}

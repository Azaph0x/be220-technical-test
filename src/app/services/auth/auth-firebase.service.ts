import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { catchError, concat, finalize, from, Observable, of, switchMap, tap, throwError } from 'rxjs';
import { LoadingService } from '../loading.service';
import { ToastService } from '../toast.service';
import { User } from 'src/app/models/user.model';
import {doc, Firestore, getDoc, setDoc} from '@angular/fire/firestore';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, user,  authState } from '@angular/fire/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { STORAGE_KEYS } from 'src/app/models/keys';

@Injectable()
export class AuthFirebaseService extends AuthService {

  STORAGE_KEY = 'user';

  constructor(
    private auth: Auth,
    private loadingService: LoadingService,
    private toastService: ToastService,
    private firestore: Firestore
  ) {
    super();
    onAuthStateChanged(this.auth, (user) => {
      this.logged = !!user;
      if(!this.logged) {
        localStorage.removeItem(STORAGE_KEYS.USER);
      }
    })
  }

   logged: boolean = false;

  login(email: string, password: string): Observable<any> {
    this.loadingService.show();

    return from(
      signInWithEmailAndPassword(this.auth, email, password),
    ).pipe(
      catchError((e) => {
        this.toastService.create('Email ou senha incorreto')
        return throwError(e);
      }),
      tap((r) => console.log(r)),
      finalize(() => this.loadingService.dismiss())
    )
  }

  register(email: string, password: string, user: User): Observable<any> {
    this.loadingService.show();
    const userdata = {
      ...user,
      level: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    return from(createUserWithEmailAndPassword(this.auth, email, password))
    .pipe(
      catchError((e) => {
        if(e.code === 'auth/email-already-in-use') {
          this.toastService.create('Ops..., o e-mail está em uso.')
        }
        return throwError(e);
      }),
      switchMap((r) => {
        return from(setDoc(doc(this.firestore, 'users', r.user!.uid), {
          ...userdata,
          uid: r.user!.uid
        })).pipe(
          catchError((e) => {
            this.toastService.create('Ops..., ocorreu um erro ao cadastrar os dados do usuario')
            return throwError(e);
          }),
          tap((result) => {
            localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify({
              ...userdata,
              uid: r.user!.uid
            }))
            this.toastService.create('Usuario cadastrado com sucesso!');
          })
        )
      }),
      finalize(() => this.loadingService.dismiss())
    )
  }

  isLogged() {
    return !!localStorage.getItem(STORAGE_KEYS.USER)
  }

  logout(): Observable<any> {
    return from(signOut(this.auth))
  }

}

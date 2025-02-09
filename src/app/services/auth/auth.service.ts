import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { User as userAuth } from 'firebase/auth';
import { STORAGE_KEYS } from 'src/app/models/keys';

export abstract class AuthService {

  protected user!: userAuth | null;

  abstract login(email: string, password: string): Observable<any>;
  abstract register(email: string, password: string, user: User): Observable<any>;

  abstract isLogged(): boolean;
  abstract logout(): Observable<any>;

  getUserAuth(): userAuth | null {
    return this.user;
  }

}

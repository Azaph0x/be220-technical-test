import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';

export abstract class AuthService {

  abstract login(email: string, password: string): Observable<any>;
  abstract register(email: string, password: string, user: User): Observable<any>;

  abstract isLogged(): boolean;
  abstract logout(): Observable<any>;

}

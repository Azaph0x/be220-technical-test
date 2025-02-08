import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export abstract class AuthService {

  abstract login(email: string, password: string): Observable<any>;
  abstract register(email: string, password: string): Observable<any>;
}

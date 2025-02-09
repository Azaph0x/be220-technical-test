import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { STORAGE_KEYS } from 'src/app/models/keys';
import { User } from 'src/app/models/user.model';

export abstract class UserService {

  constructor() { }

  abstract getUser(): Observable<User>;

  getUserData(): User | null {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.USER)!)
  }
}

import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { onAuthStateChanged } from 'firebase/auth';
import { catchError, tap, throwError } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {

  constructor(
    private auth: Auth,
    private userService: UserService,
    private router: Router
  ) { }

  loading: boolean = true;
  userData!: User;

  ngOnInit() {
    onAuthStateChanged(this.auth, (user) => {
      // this.loading = !user;
      this.loadUser();
    }, (err) => { this.router.navigate(['login']) })
  }

  loadUser() {
    this.userService.getUser().pipe(
      tap((r) => {
        this.userData = r;
        this.loading = false;
      }),
      catchError((err) => {
        this.router.navigate(['login'])
        return throwError(err);
      })
    ).subscribe()
  }

}

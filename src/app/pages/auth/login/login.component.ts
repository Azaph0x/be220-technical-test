import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { tap } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { getControlForm } from 'src/app/shared/utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false
})
export class LoginComponent  implements OnInit {

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })

  constructor(
    private authService: AuthService,
    private navCtrl: NavController
  ) { }

  ngOnInit() { }

  getControl = (controlName: string) => getControlForm(controlName, this.form)

  submit() {
    if(this.form.invalid) return;
    const { email, password } = this.form.value;
    this.authService.login(email, password)
    .pipe(
      tap((r) => {
        this.navCtrl.navigateForward(['home'])
      })
    ).subscribe()
  }

  register() { this.navCtrl.navigateRoot('register') }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from 'express';
import { tap } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { getControlForm } from 'src/app/shared/utils';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: false
})
export class RegisterComponent  implements OnInit {

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    birthDate: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })

  constructor(
    private authService: AuthService,
    private navCtrl: NavController
  ) { }

  ngOnInit(
  ) { }

  getControl = (controlName: string) => getControlForm(controlName, this.form)

  submit() {
    if(this.form.invalid) return;
    const { email, password } = this.form.value;
    this.authService.register(email, password, {
      ...this.form.value
    })
    .pipe(
      tap((r) => {
        this.navCtrl.navigateForward(['home'])
      })
    )
    .subscribe()
  }

  login() { this.navCtrl.navigateForward('login'); }

}

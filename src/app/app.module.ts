import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { register } from 'swiper/element';
import { provideEnvironmentNgxMask } from 'ngx-mask';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { FirestoreModule, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AuthService } from './services/auth/auth.service';
import { AuthFirebaseService } from './services/auth/auth-firebase.service';
import { initializeApp } from 'firebase/app';
import { provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { SharedModule } from './shared/shared.module';
import { TrainingProgramService } from './services/training_program/training-program.service';
import { TrainingProgramFirebaseService } from './services/training_program/training-program-firebase.service';
import { UserService } from './services/user/user.service';
import { UserFirebaseService } from './services/user/user-firebase.service';

register();

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      mode: 'ios'
    }),
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    provideFirebaseApp( () => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: AuthService, useClass: AuthFirebaseService },
    { provide: TrainingProgramService, useClass: TrainingProgramFirebaseService },
    { provide: UserService, useClass: UserFirebaseService },
    provideEnvironmentNgxMask()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

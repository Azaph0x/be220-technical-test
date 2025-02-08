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
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AuthService } from './services/auth/auth.service';
import { AuthFirebaseService } from './services/auth/auth-firebase.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

register();

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      mode: 'ios'
    }),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [
    provideFirestore(() => getFirestore()),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: AuthService, useClass: AuthFirebaseService },
    provideEnvironmentNgxMask()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

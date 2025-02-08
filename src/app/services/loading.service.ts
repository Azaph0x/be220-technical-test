import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(
    private loadingController: LoadingController
  ) { }

  private loading: HTMLIonLoadingElement | null = null;

  show() {
    this.loadingController.create({
      message: 'Aguarde...',
      duration: 30000
    }).then((r) => { this.loading = r; r.present()})
  }

  dismiss() {
    this.loading?.dismiss();
  }
}

import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private toastController: ToastController
  ) { }

  create(message: string, header?: string) {
    this.toastController.create({
      header,
      message,
      duration: 3000,
      cssClass: 'custom-toast'
    }).then((r) => r.present())
  }
}

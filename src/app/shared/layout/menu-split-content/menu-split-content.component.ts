import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { tap } from 'rxjs';
import { MenuSplitItem } from 'src/app/models/menu';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'menu-split-content',
  templateUrl: './menu-split-content.component.html',
  styleUrls: ['./menu-split-content.component.scss'],
  standalone: false
})
export class MenuSplitContentComponent  implements OnInit {

  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    private toastService: ToastService,
    private menuController: MenuController
  ) { }

  items: MenuSplitItem[] = [
    {
      action: () => {
        this.menuController.close()
      },
      icon: 'person-outline',
      name: 'Perfil'
    },
    {
      action: () => {
        this.menuController.close()
      },
      icon: 'accessibility',
      name: 'Meu Corpo'
    },
    {
      action: () => {
        this.menuController.close()
      },
      icon: 'clipboard-outline',
      name: 'Treinos'
    },
    {
      action: () => {
        this.menuController.close()
      },
      icon: 'trophy',
      name: 'Evolução'
    }
  ]

  ngOnInit() {}

  logout() {
    this.authService.logout().pipe(
      tap(() => {
        this.navCtrl.navigateRoot('login')
        this.toastService.create('Sessão finalizada com sucesso!')
        this.menuController.close()
      })
    ).subscribe()
  }

}

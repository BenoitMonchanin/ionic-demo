import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public constructor(private modalController: ModalController) {}

  public openModal() {
    this.modalController.create({
      component: ModalComponent,
    }).then((modal) => {
      modal.present();
    })
  }

}

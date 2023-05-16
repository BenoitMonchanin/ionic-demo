import { Component } from '@angular/core';
import { IonNav } from '@ionic/angular';
import { Page2Page } from '../page2/page2.page';

@Component({
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss']
})
export class Page1Page {

  public constructor(private nav: IonNav) {}

  public goToPage2() {
    this.nav.push(Page2Page);
  }

}

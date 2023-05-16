import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public invalidInput = false;

  constructor() {}

  public toggleInputValidity() {
    this.invalidInput = !this.invalidInput;
  }

}

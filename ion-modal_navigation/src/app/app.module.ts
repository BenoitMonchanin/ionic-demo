import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Page1Page } from './modal/pages/page1/page1.page';
import { Page2Page } from './modal/pages/page2/page2.page';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [AppComponent, Page1Page, Page2Page, ModalComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

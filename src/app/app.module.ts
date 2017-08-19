import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {JsonpModule} from '@angular/http';


import { WikiApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    WikiApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(WikiApp),
    JsonpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    WikiApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

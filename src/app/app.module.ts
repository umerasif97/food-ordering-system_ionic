import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ResturantsPage } from '../pages/resturants/resturants';
import { MenusPage } from '../pages/menus/menus';
import { CartPage } from '../pages/cart/cart';

import { AngularFireModule, FirebaseApp } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated/';

var config = {
  apiKey: "AIzaSyBdtYlaHYNjxqrWz_ckQXW8e9G7_o0rEcM",
  authDomain: "order-da4b9.firebaseapp.com",
  databaseURL: "https://order-da4b9.firebaseio.com",
  projectId: "order-da4b9",
  storageBucket: "order-da4b9.appspot.com",
  messagingSenderId: "486609275362"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ResturantsPage,
    MenusPage,
    CartPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ResturantsPage,
    MenusPage,
    CartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResturantsService } from './resturants.service';
import { MenusPage } from '../menus/menus';
import { CartPage } from '../cart/cart';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { FirebaseApp } from 'angularfire2';

/**
 * Generated class for the ResturantsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resturants',
  templateUrl: 'resturants.html',
  providers: [AngularFireDatabase]
})
export class ResturantsPage {

  resturants: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public db: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    this.resturants = this.db.list('/resturant');
    //this.resturants = this.resturantsService.getAll();
    //console.log(this.resturants);
    //console.log('ionViewDidLoad ResturantsPage');
  }

  cart() {
    this.navCtrl.push(CartPage);
  }

  showMenu(id){
    this.navCtrl.push(MenusPage, {id});
    //console.log(id);
  }
}

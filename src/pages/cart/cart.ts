import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartService } from './cart.service';
import { MenusPage } from '../menus/menus';
import { ResturantsPage } from '../resturants/resturants';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';


/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
  providers: [CartService]
})
export class CartPage {

  cart;
  totalCartBill;
  scart: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private cartService: CartService,
              public db: AngularFireDatabase) {
                this.cart = this.cartService.getCart();
                this.totalCartBill = this.cartService.totalBill();
                this.scart = db.list('/cart');    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

  menu() {
    this.navCtrl.push(ResturantsPage);
  }

  checkOut() {
    this.cart['TotalBill'] = this.totalCartBill;
    this.scart.push(
     this.cart
       
    );
    this.cart = [];
    this.totalCartBill = 0;
    localStorage.setItem('cart', JSON.stringify(this.cart));
    //this.router1.navigate(['form'])
  }

  increase(resturantId, dishId) {
    this.cartService.increaseQty(resturantId, dishId);
    this.totalCartBill = this.cartService.totalBill();
    //console.log(resturantId, dishId);
  }
  decrease(resturantId, dishId) {
    this.cartService.decreaseQty(resturantId, dishId);
    this.totalCartBill = this.cartService.totalBill();
  }

  removeDishFromCart(resturantId, dishId) {
    this.cartService.removeItem(resturantId, dishId);
    this.totalCartBill = this.cartService.totalBill();
  }

  removeResturantFromCart(resturantId) {
    this.cartService.removeResturant(resturantId);
    this.totalCartBill = this.cartService.totalBill();
    //console.log(resturantId);
  }

}

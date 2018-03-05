import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenusService } from './menus.service';
import { CartService } from '../cart/cart.service';
import { ResturantsService } from '../resturants/resturants.service';
import { CartPage } from '../cart/cart';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

/**
 * Generated class for the MenusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menus',
  templateUrl: 'menus.html',
  providers: [ResturantsService,
    MenusService,
    CartService]
})
export class MenusPage {

  id;
  private sub;
  menus;
  allMenus;
  menu;
  mcart;
  scart: FirebaseListObservable<any[]>;
  totalCartBill;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private menuService: MenusService,
    private resturantService: ResturantsService,
    private cartService: CartService,
    public db: AngularFireDatabase) {
    this.sub = this.navParams.get('id');
    this.menus = this.menuService.getMenuByResturantId(this.sub);
    this.scart = db.list('/cart');
    //console.log(this.sub)
    //this.menus = this.menuService.getMenuByResturantId(this.sub);
    this.mcart = this.cartService.getCart();
    //this.rName = this.resturantService.getResturantByResturantId(this.sub);
    //console.log(this.rName); 
    this.totalCartBill = this.cartService.totalBill();
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad MenusPage');
  }
  ionViewWillEnter(){
  }

  back() {
    this.navCtrl.pop();
  }

  cart() {
    this.navCtrl.push(CartPage);
  }

  addToCart(resturantId, resturantName, dishId, dishName, dishPrice, dishQuantity, totalPrice) {
    this.cartService.addItem(resturantId, resturantName, dishId, dishName, dishPrice, dishQuantity, totalPrice);
    this.totalCartBill = this.cartService.totalBill();
    //console.log(dishQuantity);
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
 
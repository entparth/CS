import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the FirstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstPage');
  }

  listings(){
  	this.navCtrl.setRoot(TabsPage, {tabIndex: 0});
  }
  sell(){
  	this.navCtrl.setRoot(TabsPage, {tabIndex: 1});
  }
  profile(){
  	this.navCtrl.setRoot(TabsPage, {tabIndex: 2});
  }
  about(){
	this.navCtrl.setRoot(TabsPage, {tabIndex: 3});
  }
  contact(){
	this.navCtrl.setRoot(TabsPage, {tabIndex: 4});
  }

}

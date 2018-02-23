import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { FirstPage } from '../first/first';

/**
 * Generated class for the SellPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sell',
  templateUrl: 'sell.html',
})
export class SellPage {
	package:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App) {
  	this.package ='basic';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SellPage');
  }
   first(){
  		this.app.getRootNav().setRoot(FirstPage);
  }

}

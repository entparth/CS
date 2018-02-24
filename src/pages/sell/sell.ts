import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { FirstPage } from '../first/first';

import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
	selector: 'page-sell',
	templateUrl: 'sell.html',
})
export class SellPage {
	package: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, private app: App, private iab: InAppBrowser) {
		this.package = 'basic';
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SellPage');
	}
	first() {
		this.app.getRootNav().setRoot(FirstPage);
	}

	openIab() {
		const browser = this.iab.create('https://cowsales.wufoo.eu/embed/zyumfnv0e719pq/');
	}

}

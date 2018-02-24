import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { ListingPage } from '../listing/listing';
import { FirstPage } from '../first/first';
import { ApiProvider } from '../../providers/api/api';


@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	listings: any = [];

	constructor(public navCtrl: NavController, private app: App, private api: ApiProvider) {

	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad ListingPage');
		this.getAllListings();
	}

	getAllListings() {
		this.api.getPostByListings().then((data: any) => {
			var listings = data.listings;
			console.log('Listings ', data.listings);
			this.listings = listings.items;
		}, (err) => {
			console.log(err);
		});
	}
	goTolisting(listing) {
		this.navCtrl.push(ListingPage, {listing: listing});
	}
	first() {
		this.app.getRootNav().setRoot(FirstPage);
	}

}

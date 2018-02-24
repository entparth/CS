// import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-listing',
	templateUrl: 'listing.html',
})
export class ListingPage {
	listing: any;
	disclaimer: string = '';
	excerpt: string = '';
	constructor(public navCtrl: NavController, public navParams: NavParams/* , private api: ApiProvider */) {
		this.listing = this.navParams.get('listing');
		this.extractDisclaimer();
		console.log('Listing ', this.listing);
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad ListingPage');
	}

	extractDisclaimer() {		
		var disclaimerIndex = this.listing.excerpt.indexOf('Disclaimer');

		// Strip any HTML Element from string
		var disclaimer = this.listing.excerpt.slice(disclaimerIndex).replace(/(<([^>]+)>)/ig, "").replace(/&nbsp;/, "");  /* / <(?:.|\n)*?> /gm, '' */
		// console.log('Extraced ', this.listing.excerpt.slice(0, disclaimerIndex-3));		
		
		this.disclaimer = disclaimer;
		this.excerpt = this.listing.excerpt.slice(0, disclaimerIndex - 3);

	}
}

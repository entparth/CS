import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listing',
  templateUrl: 'listing.html',
})
export class ListingPage {
  showListings: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private api :ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListingPage');
    this.getAllListings();
  }

  getAllListings(){
    this.api.getPostByListings().then((data)=>{
      this.showListings=data;
      console.log(this.showListings)
    })
  }
}

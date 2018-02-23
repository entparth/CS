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
  showListings: any = [];
  
  constructor(public navCtrl: NavController, private app: App, private api :ApiProvider) {

  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ListingPage');
    this.getAllListings();
  }

  getAllListings(){
    return new Promise((resolve, reject)=>{
      this.api.getPostByListings().then((data)=>{
        this.showListings=data;
        console.log(this.showListings)
        resolve(this.showListings);
      }, err=>{
        console.log(err)
        reject(err)
      })
    })

    
  }
  listing()
  {
  	this.navCtrl.push(ListingPage);
  }
  first(){
  		this.app.getRootNav().setRoot(FirstPage);
  }

}

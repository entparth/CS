import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { ListingPage } from '../listing/listing';
import { FirstPage } from '../first/first';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private app: App) {

  }

  listing()
  {
  	this.navCtrl.push(ListingPage);
  }
  first(){
  		this.app.getRootNav().setRoot(FirstPage);
  }

}

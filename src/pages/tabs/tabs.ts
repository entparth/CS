import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { SellPage } from '../sell/sell';
import { ProfilePage } from '../profile/profile';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SellPage;
  tab3Root = ProfilePage;
  tab4Root = AboutPage;
  tab5Root = ContactPage;
  mySelectedIndex: number;

  constructor(private navParams: NavParams) {
  	this.mySelectedIndex = navParams.data.tabIndex || 0;
  }


}

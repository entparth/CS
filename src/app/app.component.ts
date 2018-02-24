import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage } from '../pages/about/about';
import { FirstPage } from '../pages/first/first';

export interface PageInterface {
	title: string;
	component: any;
	icon: string;
	logsOut?: boolean;
	index?: number;

}

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	@ViewChild(Nav) nav: Nav;

	rootPage: any = FirstPage;

	pages: Array<{ title: string, component: any, index: any }>;

	constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
		this.initializeApp();

		// used for an example of ngFor and navigation
		this.pages = [
			{ title: 'Listings', component: TabsPage, index: 0 },
			{ title: 'Sell Your Cattle', component: TabsPage, index: 1 },
			{ title: 'Profile', component: TabsPage, index: 2 },
			{ title: 'About Us', component: TabsPage, index: 3 },
			{ title: 'Get In Touch', component: TabsPage, index: 4 },
		];

	}

	initializeApp() {
		this.platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}

	openPage(page) {
		// Reset the content nav to have just this page
		// we wouldn't want the back button to show in this scenario
		this.nav.setRoot(page.component, { tabIndex: page.index });
	}
}

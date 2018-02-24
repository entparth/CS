import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { SellPage } from '../pages/sell/sell';

import { TabsPage } from '../pages/tabs/tabs';
import { ListingPage } from '../pages/listing/listing';
import { FirstPage } from '../pages/first/first';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DatabaseProvider } from '../providers/database/database';
import { ApiProvider } from '../providers/api/api';

import { InAppBrowser } from '@ionic-native/in-app-browser';

@NgModule({
	declarations: [
		MyApp,
		HomePage,
		ProfilePage,
		AboutPage,
		ContactPage,
		SellPage,
		TabsPage,
		ListingPage,
		FirstPage
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		IonicModule.forRoot(MyApp)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		HomePage,
		ProfilePage,
		AboutPage,
		ContactPage,
		SellPage,
		TabsPage,
		ListingPage,
		FirstPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		DatabaseProvider,
		ApiProvider,
		InAppBrowser
	]
})
export class AppModule { }
